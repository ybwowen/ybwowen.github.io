---
permalink: /
title: "Hi, I'm Bowen Yang (杨博文)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="hero-block">
  <p>
    I am a junior undergraduate at <strong>Shanghai Jiao Tong University</strong>, <strong>Paris Elite Institute of Technology</strong>, majoring in Information Engineering and French. 
    I have the privilege of working with <strong><a href="https://thinklab.sjtu.edu.cn/">Prof. Junchi Yan</a></strong> and 
    <strong><a href="https://jiaxiaosong1002.github.io/">Prof. Xiaosong Jia</a></strong>.
  </p>

  <figure class="hero-figure">
    <img src="/assets/img/robomaster/robomaster-action-1200.webp"
         alt="RoboMaster competition — on-robot debugging and systems check"
         loading="lazy">
    <figcaption>
      RoboMaster competition — on-robot debugging and systems check (© RoboMaster).
    </figcaption>
  </figure>

  <hr class="hero-divider">

  <p>
    I am set to graduate in June 2027 and am actively seeking <strong>research internship opportunities</strong> in robotics, embodied AI, and robot learning.
  </p>
</div>


## Research

My research focuses on **robotics** and **vision–language–action (VLA) models**, with an emphasis on how multimodal representations affect perception, action generation, and generalization in embodied systems.

At **RethinkLab, Shanghai Jiao Tong University**, I work with **Prof. Junchi Yan** and **Prof. Xiaosong Jia** on robust VLA policy learning, representation alignment, and mechanism interpretability. My recent work studies how to guide action-token attention toward task-relevant factors such as object grounding, temporal skill recognition, and geometric perception.

My broader technical interests include **SLAM**, **motion planning**, **sensor fusion**, **embedded systems**, and **robotic autonomy**, shaped by extensive hands-on experience from **RoboMaster competitions**, where I served as Vice-Captain and Algorithm Lead and earned **two consecutive national championships**.


### Back-to-Back National Championships

<div class="figure-pair">
  <!-- 2024 Champion -->
  <figure class="figure-card">
    <picture>
      <source type="image/webp"
              srcset="/assets/img/robomaster/robomaster-championship-2024-800.webp 800w,
                      /assets/img/robomaster/robomaster-championship-2024-1200.webp 1200w,
                      /assets/img/robomaster/robomaster-championship-2024-1600.webp 1600w"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1200px) 48vw,
                     520px">
      <img src="/assets/img/robomaster/robomaster-championship-2024-1200.webp"
           alt="RoboMaster 2024 National Champion — Team Jiao Loong"
           loading="lazy">
    </picture>
    <figcaption><strong>National Champion 2024</strong></figcaption>
  </figure>

  <!-- 2025 Champion -->
  <figure class="figure-card">
    <picture>
      <source type="image/webp"
              srcset="/assets/img/robomaster/robomaster-championship-800.webp 800w,
                      /assets/img/robomaster/robomaster-championship-1200.webp 1200w,
                      /assets/img/robomaster/robomaster-championship-1600.webp 1600w"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1200px) 48vw,
                     520px">
      <img src="/assets/img/robomaster/robomaster-championship-1200.webp"
           alt="RoboMaster 2025 National Champion — Team Jiao Loong"
           loading="lazy">
    </picture>
    <figcaption><strong>National Champion 2025</strong></figcaption>
  </figure>
</div>


## Featured Project

<div class="featured-project">
  <a class="featured-project-media" href="https://guidedvla.github.io/project_page/" target="_blank" rel="noopener noreferrer" aria-label="Open the GuidedVLA project page">
    <picture>
      <source type="image/webp"
              srcset="/assets/img/guidedvla/guidedvla-teaser-800.webp 800w,
                      /assets/img/guidedvla/guidedvla-teaser-1200.webp 1200w,
                      /assets/img/guidedvla/guidedvla-teaser-1600.webp 1600w"
              sizes="(max-width: 720px) 100vw, 760px">
      <img src="/assets/img/guidedvla/guidedvla-teaser-1200.webp"
           alt="GuidedVLA overview: action attention specialization for object grounding, skill logic, and spatial geometry"
           loading="lazy">
    </picture>
  </a>

  <div class="featured-project-body">
    <div class="project-kicker">RSS 2026 · Open Source</div>

    <h3 class="featured-project-title">
      GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization
    </h3>

    <p class="project-authors">
      Xiaosong Jia<sup>*</sup>, <strong>Bowen Yang<sup>*</sup></strong>, Zuhao Ge<sup>*</sup>,
      Xian Nie<sup>*</sup>, Yuchen Zhou<sup>*</sup>, Cunxin Fan<sup>*</sup>, et al.
      <span class="project-note">Equal contribution.</span>
    </p>

    <p class="project-desc">
      We guide VLA action decoders to focus on task-relevant factors by assigning dedicated attention heads to
      object grounding, temporal skill logic, and spatial geometry. The project now includes the paper, arXiv preprint,
      code, checkpoints, and dataset.
    </p>

    <ul class="project-highlights">
      <li><strong>Interpretable specialization:</strong> object, skill, and depth heads expose clearer task factors.</li>
      <li><strong>Robust generalization:</strong> improved performance across simulation benchmarks and real-robot settings.</li>
      <li><strong>Released resources:</strong> open-source implementation, model checkpoint, and LIBERO dataset.</li>
    </ul>

    <div class="project-link-list" aria-label="GuidedVLA resources">
      <a class="project-link project-link-primary" href="https://guidedvla.github.io/project_page/" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i> Project</a>
      <a class="project-link" href="https://guidedvla.github.io/project_page/RSS26___GuidedVLA.pdf" target="_blank" rel="noopener noreferrer"><i class="fa fa-file-pdf" aria-hidden="true"></i> Paper</a>
      <a class="project-link" href="https://arxiv.org/abs/2605.12369" target="_blank" rel="noopener noreferrer"><i class="fa fa-scroll" aria-hidden="true"></i> arXiv</a>
      <a class="project-link" href="https://www.bilibili.com/video/BV16nL26uELc/" target="_blank" rel="noopener noreferrer"><i class="fab fa-bilibili" aria-hidden="true"></i> Talk</a>
      <a class="project-link" href="https://mp.weixin.qq.com/s/7SD3ulzXL2Xg6izWhs7Eng" target="_blank" rel="noopener noreferrer"><i class="fa fa-newspaper" aria-hidden="true"></i> 机器之心</a>
      <a class="project-link" href="https://github.com/GuidedVLA/GuidedVLA" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Code</a>
      <a class="project-link" href="https://huggingface.co/ybwowen/pi0-libero-object-depth-skill" target="_blank" rel="noopener noreferrer"><i class="fa fa-cube" aria-hidden="true"></i> Checkpoint</a>
      <a class="project-link" href="https://huggingface.co/datasets/ybwowen/libero" target="_blank" rel="noopener noreferrer"><i class="fa fa-database" aria-hidden="true"></i> Dataset</a>
    </div>
  </div>
</div>

## Publications

<div class="project-block publication-entry">
  <div class="project-title">
    <a href="/publication/2026-05-28-elan4d">
      ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation
    </a>
  </div>

  <div class="project-meta">
    arXiv preprint, 2026
  </div>

  <p class="project-desc">
    Zeyuan He<sup>*</sup>, <strong>Bowen Yang<sup>*</sup></strong>, Zhirui Fang<sup>*</sup>,
    Keru Zhou<sup>*</sup>, Lei Jiang, Jingjing Qian, Fan Mo, Junchi Yan, Philip Torr,
    Xiu Li, Li Jiang, Jialin Yu.
    <span class="project-note">Equal contribution.</span>
  </p>

  <p class="project-desc">
    ELAN4D adds embodiment-centric 4D supervision from future robot keypoint tracks to improve VLA robustness under out-of-distribution perturbations.
  </p>

  <div class="project-link-list" aria-label="ELAN4D publication resources">
    <a class="project-link project-link-primary" href="/publication/2026-05-28-elan4d"><i class="fa fa-link" aria-hidden="true"></i> Publication</a>
    <a class="project-link" href="https://arxiv.org/pdf/2605.30484v1" target="_blank" rel="noopener noreferrer"><i class="fa fa-file-pdf" aria-hidden="true"></i> Paper</a>
    <a class="project-link" href="https://arxiv.org/abs/2605.30484v1" target="_blank" rel="noopener noreferrer"><i class="fa fa-scroll" aria-hidden="true"></i> arXiv</a>
    <a class="project-link" href="/files/elan4d.bib"><i class="fa fa-quote-right" aria-hidden="true"></i> BibTeX</a>
  </div>
</div>

<div class="project-block publication-entry">
  <div class="project-title">
    <a href="/publication/2026-05-12-guidedvla">
      GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization
    </a>
  </div>

  <div class="project-meta">
    Robotics: Science and Systems (RSS), 2026
  </div>

  <p class="project-desc">
    Xiaosong Jia<sup>*</sup>, <strong>Bowen Yang<sup>*</sup></strong>, Zuhao Ge<sup>*</sup>,
    Xian Nie<sup>*</sup>, Yuchen Zhou<sup>*</sup>, Cunxin Fan<sup>*</sup>, et al.
    <span class="project-note">Equal contribution.</span>
  </p>

  <p class="project-desc">
    GuidedVLA specializes VLA action-decoder attention heads toward object grounding, temporal skill logic, and spatial geometry.
  </p>

  <div class="project-link-list" aria-label="GuidedVLA publication resources">
    <a class="project-link project-link-primary" href="/publication/2026-05-12-guidedvla"><i class="fa fa-link" aria-hidden="true"></i> Publication</a>
    <a class="project-link" href="https://guidedvla.github.io/project_page/" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i> Project</a>
    <a class="project-link" href="https://arxiv.org/abs/2605.12369" target="_blank" rel="noopener noreferrer"><i class="fa fa-scroll" aria-hidden="true"></i> arXiv</a>
    <a class="project-link" href="https://www.bilibili.com/video/BV16nL26uELc/" target="_blank" rel="noopener noreferrer"><i class="fab fa-bilibili" aria-hidden="true"></i> Talk</a>
    <a class="project-link" href="https://github.com/GuidedVLA/GuidedVLA" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Code</a>
  </div>
</div>

---

## News

- <strong>May 2026</strong> – Our preprint <strong>ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation</strong> is now available on <a href="https://arxiv.org/abs/2605.30484v1">arXiv</a>.
- <strong>May 2026</strong> – <strong>GuidedVLA</strong> is now open-source, with <a href="https://github.com/GuidedVLA/GuidedVLA">code</a>, <a href="https://huggingface.co/ybwowen/pi0-libero-object-depth-skill">checkpoint</a>, and <a href="https://huggingface.co/datasets/ybwowen/libero">dataset</a> released alongside the <a href="https://arxiv.org/abs/2605.12369">arXiv preprint</a>.
- <strong>Apr 2026</strong> – Our paper <strong>GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization</strong> was accepted to <strong>Robotics: Science and Systems (RSS) 2026</strong>.
- <strong>Oct 2025</strong> – Awarded the <strong>RM Award (Algorithm)</strong>; contributed to SLAM and navigation supporting our team’s <strong>National Championship</strong> at RoboMaster 2025.
- <strong>Sep 2025</strong> – Received the <strong>National Scholarship 2025</strong> (top 0.2% nationwide).
- <strong>Sep 2025</strong> – Joined RethinkLab, SJTU as a research assistant.
- <strong>Aug 2025</strong> – Our team won the <strong>RoboMaster University Championship National Champion (2025)</strong>.
- <strong>Feb 2025</strong> – Selected as <strong>Finalist (Top 2%)</strong> in the Mathematical Contest in Modeling (MCM), Problem B.
- <strong>Sep 2024</strong> – Received the <strong>National Scholarship 2024</strong> (top 0.2% nationwide).
- <strong>Aug 2024 – Aug 2025</strong> – Served as Vice-Captain and Algorithm Lead of Team Jiao Loong, directing work on SLAM, motion planning, and embedded autonomy.
- <strong>Aug 2024</strong> – Our team won the <strong>RoboMaster University Championship National Champion (2024)</strong>.
- <strong>Oct 2023</strong> – Joined Team Jiao Loong, RoboMaster Team of Shanghai Jiao Tong University.
