const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true, executablePath:process.env.CHROME_PATH || undefined});
 const page = await browser.newPage();
 const errors = [], failed = [];
 const screenshotDir = process.env.SCREENSHOT_DIR || '/tmp/arvid-check';
 require('node:fs').mkdirSync(screenshotDir, {recursive:true});
 page.on('pageerror', e => errors.push(e.message));
 page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
 page.on('response', r => { if (r.url().startsWith('http://localhost:8000') && r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
 const nav = ['Home','Publications','Talks','Slides','Projects','Blog Posts','CV'];
 const routes = ['/','/publications/','/talks/','/slides/','/portfolio/','/year-archive/','/cv/','/publication/2026-05-28-elan4d','/publication/2026-05-12-guidedvla','/talks/RM2024_interview','/talks/RM2025_RM_Award','/talks/RM2025_Award_interview','/posts/2023/03/yp-solution/'];
 const links = new Set();
 for (const width of [1440,768,375]) {
  await page.setViewportSize({width,height:900});
  for (const route of routes) {
   await page.goto('http://localhost:8000'+route);
   if (route.includes('/posts/')) { await page.waitForSelector('mjx-container', {timeout:60000}); await page.evaluate(()=>MathJax.startup.promise); }
   assert.deepEqual(await page.locator('.nav-button').allTextContents(), nav);
   const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
   assert.equal(overflow,false,`Overflow at ${width}: ${route}`);
   const key = route === '/' ? 'Home' : route.startsWith('/publication') ? 'Publications' : route.startsWith('/talks') ? 'Talks' : route.startsWith('/posts') || route.startsWith('/year-archive') ? 'Blog Posts' : route.startsWith('/portfolio') ? 'Projects' : route.startsWith('/slides') ? 'Slides' : 'CV';
   assert.deepEqual(await page.locator('.nav-button[aria-current="page"]').allTextContents(),key ? [key] : []);
   for (const url of await page.locator('a[href], img[src], iframe[src]').evaluateAll(nodes=>nodes.map(n=>n.href||n.src))) if(url.startsWith('http://localhost:8000')) links.add(url.split('#')[0]);
   if (width===375 && ['/','/portfolio/','/posts/2023/03/yp-solution/'].includes(route)) await page.screenshot({path:`${screenshotDir}/${route==='/'?'home':route.includes('portfolio')?'projects':'blog'}-375.png`,fullPage:true});
  }
 }
 await page.goto('http://localhost:8000/');
 assert.equal(await page.locator('.news-list li:visible').count(),6);
 await page.locator('#news-toggle').focus(); await page.keyboard.press('Enter');
 assert.equal(await page.locator('.news-list li:visible').count(),13);
 await page.keyboard.press('Enter'); assert.equal(await page.locator('.news-list li:visible').count(),6);
 assert.equal(await page.locator('#selected-papers-list > li').count(),2);
 assert.equal(await page.locator('#projects-list > li').count(),2);
 assert.equal(await page.locator('.profile-photo').count(),1);
 assert.equal(await page.locator('#selected-papers-list .selected-entry-thumbnail img').count(),2);
 assert.equal(await page.locator('#projects-list .selected-entry-thumbnail img').count(),2);
 const portrait = await page.locator('.profile-photo').evaluate(img => ({actual: img.clientWidth / img.clientHeight, original: img.naturalWidth / img.naturalHeight}));
 assert(Math.abs(portrait.actual - portrait.original) < 0.02, 'Portrait must keep its original aspect ratio');
 assert(!await page.locator('main').textContent().then(text => /top 0\.2% nationwide|two consecutive national championships/i.test(text)));
 await page.locator('.abstract-toggle').first().focus(); await page.keyboard.press('Enter');
 assert.equal(await page.locator('.abstract-content:visible').count(),1);
 await page.locator('.citation-toggle').first().click();
 assert.equal(await page.locator('.abstract-content:visible').count(),0);
 assert.equal(await page.locator('.citation-content:visible').count(),1);
 assert.match(await page.locator('.citation-content:visible').textContent(),/@/);
 const before = await page.locator('html').getAttribute('data-theme');
 await page.locator('#theme-toggle').click();
 const after=await page.locator('html').getAttribute('data-theme'); assert.notEqual(before,after);
 await page.reload(); assert.equal(await page.locator('html').getAttribute('data-theme'),after);
 await page.evaluate(()=>scrollTo(0,document.body.scrollHeight)); await page.waitForTimeout(100);
 await page.locator('#back-to-top').click(); await page.waitForTimeout(1000);
 assert.equal(await page.evaluate(()=>scrollY),0);
 for(const [from,to] of [['/about/','/'],['/about.html','/'],['/resume','/cv/'],['/portfolio/guidedvla','/portfolio/#guidedvla']]) {
  await page.goto('http://localhost:8000'+from); await page.waitForURL('http://localhost:8000'+to); assert.equal(page.url(),'http://localhost:8000'+to);
 }
 await page.goto('http://localhost:8000/posts/2023/03/yp-solution/');
 await page.waitForSelector('mjx-container'); await page.evaluate(()=>MathJax.startup.promise);
 assert.equal(await page.locator('mjx-merror, [data-mjx-error]').count(),0);
 assert.equal(await page.locator('#blog-body').textContent().then(s=>s.includes('MATHPLACEHOLDER')),false);
 const formulaCount=await page.locator('mjx-container').count();assert(formulaCount>80,`Too few formulas: ${formulaCount}`);
 await page.setViewportSize({width:1440,height:1000}); await page.goto('http://localhost:8000/'); await page.screenshot({path:`${screenshotDir}/home-desktop.png`,fullPage:true});
 for(const url of links){const response=await page.request.get(url);assert(response.ok(),`${response.status()} ${url}`);}
 assert.deepEqual(failed,[]);assert.deepEqual(errors,[]);
 console.log(JSON.stringify({pages:routes.length,viewports:[1440,768,375],internalResources:links.size,formulaCount,errors,failed},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
