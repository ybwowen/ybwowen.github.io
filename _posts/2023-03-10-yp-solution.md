---
title: '于品讲义习题自做'
date: 2023-03-10
permalink: /posts/2023/03/yp-solution/
tags:
  - maths
---

## 前言

ybw自己对yp讲义部分习题的一些解答

**个人色彩浓厚**，也希望大家多斧正斧正。

有些东西可能是纯计算的，我可能会略过或者在我的ipad上完成，就不会写在博客上了。

有些题目比较简单，我就不会详细写了

当然，也可能是因为我比较懒，不想打太多公式。

2023.4.20：最近眼睛不太好，不能长时间在电脑屏幕前打字了，可能会咕一阵子。

## 作业1：可数与不可数，\\(\text{Schroeder - Bernstein}\\) 定理

### 习题 A

A1) 

充分性：反证法易得 (\\(M - \epsilon\\) 为更小的上界)

必要性：再次采用反证法易得

A2)

证明任意非空开区间都至少有一个有理数即可（利用区间长度）

A3) 

平凡

A4)

仅需验证三角不等式，直接平方后配方即可

A5)

由A2) 结论立刻得到

A6) 

对开球的每一维，由A5) 立得

A7)

反证法。

若 Archimedes 公理不成立，则
\\[
\forall x > 0,\ \exists y > 0 \text{ 使得 } \forall n \in \mathbb{N},\ nx < y.
\\]

于是集合
\\[
S = \{\, nx \mid n \in \mathbb{N} \,\}
\\]
有上界，因此存在上确界 \\( M = \sup S \\)。

由 A1) 的结论，存在 \\( n_0 \in \mathbb{N} \\)，使得
\\[
n_0 x > M - \varepsilon.
\\]

取 \\( \varepsilon = x \\)，则
\\[
(n_0 + 1)x > M,
\\]
这与 \\( M \\) 是 \( S \\) 的上确界矛盾。


A8)

为避免混淆，我们改记 \\(\sup X = M\\)

如果我们证明\\(M^2 = 2\\)，那么就可以通过数论证法证明\\(M\\)是无理数了。

反证法。如果\\(M \notin X\\)，则\\(\forall x, M>x  \Rightarrow M^2 > x^2 \Rightarrow M^2 > 2\\)

则必\\(\exists M_0\\)，使得\\(2 < M_0 ^2 < M^2\\)，与\\(M\\)是上确界矛盾。

A9)

对于开区间\\((a,b)\\)，令\\(c = (a+b)/2\\)。

在\\((a,c)\\)中取\\(p\in Q\\)，在\\((c,b)\\)中取\\(q \in Q\\)，则\\(\frac{\sqrt{2}}{2}p+ (1-\frac{\sqrt{2}}{2})q\\)必是无理数

然后再对两个子区间递归处理即可。

### 习题B：可数集和不可数集

B1) B2) B3) 平凡

B4) 对角线即可（经典证明）

B5) 类似的对角线：显然，如果要使用对角线，那么必须可数（比如B4)中的\\(\mathbb{N}\\)）

我们先把\\(X_i(i\in I)\\) 排成一列，其中\\(I\\)是可数的指标集，再将每行展开写即可（因为\\(X_i\\)是可数集）

B6) （其实直观上很显然，我这里锻炼一下如何使用严格的语言）

由\\(X\\)可数知存在单射\\(g: X \rightarrow \mathbb{N}\\)

由于\\(f\\)是满射，故\\(\forall y \in Y\\)，\\(y\\)在\\(X\\)中的原像构成非空集合\\(X_y\\)，任取\\(x_y \in Y\\)，再令\\(h : Y \rightarrow X \longmapsto y \rightarrow x_y\\)，则\\(h\\)必是单射（否则\\(f\\)根本不是映射），则复合映射\\(h \circ g : Y \rightarrow \mathbb{N}\\) 即为所求。

B7) 

7-1：

\\(x \notin J\\) 显然成立。设\\(x \in J\\)且\\(J = [a,b]\\)。若\\(x < (a + b)/ 2\\)，则取\\([\frac{a+b}{2},b]\\)，若\\(x > (a + b) /2\\)，则取\\(I = [a,\frac{a+b}{2}]\\)，若\\(x = (a+b) / 2\\)，任取不包含这个点的子区间即可。

7-2:

由7-1立刻得到。

7-3:

反证法。如果\\(\mathbb{R}\\)是可数集合，那么必然存在7-2中构造的闭区间套，则全体实数均不在这个闭区间套里面，这与闭区间套定理矛盾。

B8)

反证法即可。（与\\(\mathbb{R}\\)是不可数集合矛盾）

B9) 

设区间\\(I = (a,b)\\)（闭区间同理）

构造双射

$$
\begin{equation}
	f(x) = \begin{cases}
	\frac{b-a}{4}\times \frac{1}{x} + \frac{a+3b}{4}, &x \in [1,+\infty)\\
	\frac{b-a}{4}\times x + \frac{a+b}{4}, &x \in (-1,1) \\
    -\frac{b-a}{4}\times \frac{1}{x} + \frac{3a+b}{4}, &x \in(-\infty,-1]
		   \end{cases}
\end{equation}
$$

则实数集\\(\mathbb{R}\\)与任何长度不为零的区间等势，故也不可数。

upd:这里似乎并没有引入集合势的概念，但这并没有关系，我们直接返回到映射层面上来看待这个问题就行了。

B10) 平凡

对于每一个\\(J_i \in \mathcal{J}\\)，由于\\(I\\)是非空集合，所以在\\(J_i\\)中一定能找到一个有理数\\(x_i\\)，则\\(\{x_i\}\\)构成了\\(\mathbb{Q}\\)的子集，自然可数，进而我们可以构造\\(J_i\\)和\\(x_i\\)之间的双射，所以\\(\mathcal{J}\\)可数。

### 习题C \\(\text{Schroeder - Bernstein}\\) 定理

C1) C2) 平凡 （利用可数集性质即可构造双射）

C3) 容易验证\\(X' \cup h(X)\\) 符合条件

C4) 由\\(X'\\)的定义，我们可以知道，\\(X' \cap h(A) = \emptyset\\) 

由 \\(X' \cup h(A) \subset A\\) 知\\(X'\subset A\\) 且 \\(h(A) \subset A\\)

故 \\(h(X') \subset h(A)\\) 且 \\(h(h(A)) \subset h(A)\\)

所以 \\(h(X' \cup h(A) ) \subset h(A)\\)

所以 \\(X' \cup h(X' \cup h(A)) \subset X' \cup h(A)\\) 即 \\(X' \cup h(A) \subset \mathcal{F}\\)

C5) 考虑\\(A_1,A_2 \subset \mathcal{F}\\)，我们证明\\(A_1 \cap A_2 \subset \mathcal{F}\\)

令\\(A_1' = A_1 - X'\\)，\\(A_2' = A_2 - X'\\)

则\\(A_1 \cap A_2 = X' + A_1' \cap A_2'\\)

故我们需要证明：\\(X' \cup h(A_1 \cap A_2) \subset A_1\cap A_2 = X' + A_1' \cap A_2'\\)

<!-- 由于\\(h\\)是单射，我们有 \\(h(A_1) = h(A_1' + X' ) = h(A_1') \cup h(X')\\)

\\(h(A_2) = h(A_2' + X' ) = h(A_2') \cup h(X')\\) -->

由\\(A_1,A_2 \subset \mathcal{F}\\)，我们有
\\(X' \cup h(A_1) \subset A_1 = X' + A_1'\\)
\\(X' \cup h(A_2) \subset A_2 = X' + A_2'\\)

两侧同时取交集，我们有
\\((X' \cup h(A_1)) \cap (X' \cup h(A_2)) \subset X' + A_1' \cap A_2'\\)

由德摩根律，我们知道 
\\((X' \cup h(A_1)) \cap (X' \cup h(A_2)) = X' \cup (h(A_1) \cap h(A_2))\\)

又因为\\(h\\)是**单射**，所以
\\(h(A_1) \cap h(A_2) = h(A_1 \cap A_2)\\)

结合以上几个式子便得到了证明。

我们现在既然有\\(A_1 \cap A_2 \subset \mathcal{F}\\)了，就可以直接归纳了。

>注：因为可能有无穷多个\\(A\\)，我们需要**超限归纳法**，这里的\\(\mathcal{F}\\)是良序的，符合使用超限归纳的条件

upd: 刚才的做法烦了。实际上，直接对\\(A_0\\)用德摩根律，再使用C4)的结论即可。但是如果这里要想使用德摩根律，\\(\mathcal{F}\\)也必须是良序的。

C6)
我们已经知道\\(X' \cup h(A_0) \subseteq A_0\\)，只需要证明\\(X' \cup h(A_0) \supseteq A_0\\)即可。

由C4)结论知，\\(X' \cup h(A_0) \subset \mathcal{F}\\)，

而根据\\(A_0\\)的定义可以得到，\\(\forall x \in A_0\\)，我们有 \\(\forall A \subset \mathcal{F},x \in A\\)

故\\(x \in X' \cup h(A_0)\\)，这就得到了证明。

C7) 假设 \\(f(A_0) \cap g^{-1}(B_0) \not= \emptyset\\)，取其中的一个元素\\(y_0\\)，则我们有
\\(f(x_1) = y_0,g(y_0) = x_2\\)

则有\\(h(x_1) = x_2 \in B_0\\)，与\\(x_1 \in A_0\\)矛盾。

若 \\(f(A_0) \cup g^{-1}(B_0) \not= Y\\)，则取 \\(y \in Y \setminus f(A_0) \cup g^{-1}(B_0)\\)。

令\\(x=g(y)\\)，则\\(x \notin B_0\\)，又\\(x \notin X'\\)，故\\(x \in h(A_0)\\)

而\\(f\\),\\(g\\)都是**单射**，所以必定有\\(f(x) = y\\)，得到矛盾！

C8) 由C7)直接得到

至此，我们证明了\\(\text{Schroeder - Bernstein}\\) 定理！

### 习题D \\(\text{Dedekind}\\) 分割证明的细节

这部分习题没有什么意思，难度也不大，就不写了。

## 作业2：\\(\text{Riemann}\\)重排，\\(\text{Cesàro}\\)求和，\\(\text{Banach-Mazur}\\)游戏

习题A

A1) 令\\(y_n = \sup_{k \ge n} x_k\\)，由于\\(\\{x_i\\}\\)有界，则\\(\\lim_{n \to +\\infty} y_n\\)存在，设其极限为\\(y\\)。

固定任意一个\\(\\varepsilon > 0\\)，由\\(y_n\\)的定义，存在某个\\(x_n\\)，使得
\\[
x_n + \\tfrac{1}{2}\\varepsilon > y_n,
\\]
即
\\[
\\lvert x_n - y_n \\rvert < \\tfrac{1}{2}\\varepsilon.
\\]

而由极限的定义，存在\\(N\\)，使得当\\(n > N\\)时，
\\[
\\lvert y_n - y \\rvert < \\tfrac{1}{2}\\varepsilon.
\\]

于是由三角不等式，
\\[
\\lvert x_n - y \\rvert
\\le \\lvert x_n - y_n \\rvert + \\lvert y_n - y \\rvert
< \\varepsilon.
\\]

因此，
\\[
\\lim_{n \\to +\\infty} x_n
=
\\lim_{n \\to +\\infty} \\sup_{k \\ge n} x_k.
\\]

这就证明了我们可以选取这样一个子列。


A2) 充分性：

直接夹逼即可。

必要性：

设 \\(y_n = \sup_{n \rightarrow + \infty} x_n\\)，\\(z_n = \inf_{n \rightarrow + \infty} x_n\\)

设
\\(\lim_{n \rightarrow + \infty} x_n = x\\)

则对于固定的\\(\epsilon\\)，存在\\(N\\)，使得\\(n > N\\)时，我们有
\\(|x - x_n| < \frac{1}{2} \epsilon\\)

则由\\(y_n\\)，\\(z_n\\)的定义，我们有:
\\(|x_n - z_n| < \frac{1}{2} \epsilon, |x_n - y_n| < \frac{1}{2} \epsilon\\)

仿照A1)做法即可。

A3) 平凡

A4) 由A3)，我们只需要把分母实数化，分实部和虚部讨论即可。

A5) 由\\(\\text{Cauchy}\\)收敛判别法，我们考虑在\\(n_1\\)充分大时，
\\[
\\left| \\sum_{i=n_1}^{n_2} (-1)^{i-1} a_i \\right|
\\]
的大小。

由于\\(\\{a_i\\}\\)收敛到\\(0\\)，根据\\(\\text{Cauchy}\\)列的性质，
对任意\\(\\varepsilon > 0\\)，存在\\(n_1\\)，使得当\\(i > n_1\\)时，
\\[
|a_i| < \\frac{\\varepsilon}{n_2 - n_1 + 1}.
\\]

于是有
\\[
\\left| \\sum_{i=n_1}^{n_2} (-1)^{i-1} a_i \\right|
\\le \\sum_{i=n_1}^{n_2} |a_i|
< (n_2 - n_1 + 1) \\cdot \\frac{\\varepsilon}{n_2 - n_1 + 1}
= \\varepsilon.
\\]

因此该级数满足 Cauchy 收敛条件。


A6) 对实部和虚部分别使用控制收敛法即可。

A7) 由A6) 显然。

A8) 由 \\(\\text{Cauchy}\\) 列的定义，
\\[
|P_{n+p} - P_n| < |a_1 a_2 \\dots a_{n-1}| \\varepsilon
\\]

等价于
\\[
\\left|
a_1 a_2 \\dots a_{n-1}
\\bigl( a_n a_{n+1} \\dots a_{n+p} - 1 \\bigr)
\\right|
< |a_1 a_2 \\dots a_{n-1}| \\varepsilon.
\\]

由于 \\(|a_1 a_2 \\dots a_{n-1}| > 0\\)，两边同除该项，得到
\\[
|a_n a_{n+1} \\dots a_{n+p} - 1| < \\varepsilon.
\\]

得证。


> 我们不一定每次都要将\\(\epsilon\\)归一，只要前面是一个有限的常数即可。

A9) \\(\forall x>y \in \mathbb{R}\\)，考虑\\(e^x - e^y = e^y (e^{x-y} -  1)\\)

故我们只需要证明\\(e^x > 0\\)即可，证明是平凡的。

A10) 显然。

### 习题B

这里仅选择两题，其余都是平凡的

(19) 这里我们直接分别放缩为\\(3n^3\\)和\\(n^3\\)，再利用
\\(\lim_{n \rightarrow +\infty} n^{\frac{1}{n}} = 1\\)
即可。

(20) 提出2019即可。

### 习题C \\(\text{Riemman}\\)重排定理

ipad上已做。

### 习题D \\(\text{Cesàro}\\)求和极限

D1) 固定 \\(\\varepsilon > 0\\)。
由于
\\[
\\lim_{n \\to +\\infty} a_n = a,
\\]
则存在 \\(N_1\\)，使得当 \\(n > N_1\\) 时，
\\[
|a_n - a| < k\\varepsilon,
\\]
其中 \\(k > 0\\) 为待定常数。


我们事实上需要证明存在\\(N_2\\)，\\(n>N_2\\)时，
\\(|\sum_{k=1}^n a_k - na| < n\epsilon\\)

\\(n\\)充分大的时候，上式可以转化为
\\(|\sum_{k=1}^{N_1} a_k - N_3a+ \sum_{k=N_1+1}^{n}a_k - (n-N_3) a| < n\epsilon\\)
其中\\(N_3\\)是一个待定的数，满足\\(N_3<n\\)。

\\(\sum_{k=1}^{N_1} a_k\\)必然有限，记作\\(S\\)，则上式转化为
\\(|S - N_3a + \sum_{k=N_1+1}^{n}a_k - (n-N_3)a| < n\epsilon\\)

即
\\(|S -  N_3a+\sum_{k=N_1+1}^{n}(a_k - a) - (N_1 - N_3)a| < n\epsilon\\)

对左式放缩，我们有
\\(LHS \le |S| + N_3|a| + k(n-N_3)\epsilon + |(N_1 - N_3)a|\\)

则
\\(|S| + N_3|a| + k(n-N_3)\epsilon + |(N_1 - N_3)a|< n\epsilon\\)

等价于
\\((1-k)\epsilon n>|S| + |(N_1 - N_3)a| +N_3|a|-N_3\epsilon k\\)

等价于
\\(n>\frac{|S|+ |(N_1 - N_3)a| +N_3|a|-N_3\epsilon k}{(1-k)\epsilon }\\)

右边的式子必须足够大，即我们有限制
\\(\frac{|S|+ |(N_1 - N_3)a| +N_3|a|-N_3\epsilon k}{(1-k)\epsilon } > N_1\\)

即我们要使得
\\(|S| > (N_1-kN_1 + kN_3)\epsilon - |(N_3 - N_1)a| -N_3|a|\\)

易知
\\(|(N_3 - N_1)a| + N_3|a| \ge |N_1a|\\)

则对右式放缩，我们有
\\(RHS \le ((1-k)N_1 + kN_3)\epsilon - N_1|a|\\)

则我们只需要选取适当的\\(N_3\\)和\\(k\\)，使得
\\(\frac{|S| + N_1|a|}{\epsilon} > (1-k)N_1 + kN_3\\)

我们记\\(S' = \frac{|S| + N_1|a|}{\epsilon} - N_1\\)（因为这是一个定值），则上式转化为
\\(S' > k(N_3-N_1)\\)

考虑两侧正负性。\\(k>0\\)，而\\(S'\\)和\\(N_3 - N_1\\)均可正可负，故我们分情况讨论：

若\\(S' > 0\\)，则我们取\\(N_3 = N_1 + 1\\)，\\(k\\)在\\((0,\min\{S',1\})\\)中任取即可

若\\(S' < 0\\)，则我们直接取\\(N_3 = 0\\)，将\\(S'\\)重新展开，我们需要满足
\\(\frac{|S| + N_1|a|}{\epsilon} > (1-k)N_1\\)

而根据以上信息，我们有
\\(0 \le \frac{|S| + N_1|a|}{\epsilon} < N_1\\)

进而这样的\\(k\\)是一定取得到的。

此时，我们只需要令\\(N_2 \ge N_3\\)即可。

> 注：1.最后一步的成立，事实上用到了介值定理。不过这并不构成循环论证。2. 这题的结论直观上很显然，但是要严格证明，极大的考验了我们的分析技巧。

upd: 我是呆子，这道题有更加简单的方法：
$$
\begin{aligned}
|\frac{a_1 + a_2 + \dots + a_n}{n} - a| &= |\frac{a_1 + a_2 + \dots + a_{N} - Na}{n} + \frac{a_{N+1} - a + a_2 - a+ \dots + a_n -a }{n}| \\
&\le \frac{A}{n} + \frac{n - N}{n}\varepsilon  
\end{aligned}
$$

取 \\(N = \max \{N_1, \lceil \frac{A}{\varepsilon} \rceil\}\\) 即可。

D2) +1,-1的交错数列即可。

D3) 取
$$
\begin{equation}
	a_n = \begin{cases}
	k, &n= k^2 (k\in \mathbb{N})\\
    \frac{1}{n^2}, &\text{otherwise}
		   \end{cases}
\end{equation}
$$
即可。

D4) D5) 平凡

D6) 设\\(\sup kb_k = M\\)，则由控制收敛法知

\\(\lim_{n \rightarrow \infty}\frac{1}{n}\sum_{k =1}^n kb_k \le \lim_{n \rightarrow \infty} \frac{1}{n} Mn = M\\)

故 \\(\lim_{n \rightarrow \infty}\frac{1}{n}\sum_{k =1}^n kb_k\\) 收敛，记为\\(p\\)

则由D4)结论，两边取极限，我们便知道
\\(\lim_{n \rightarrow \infty}a_n = \sigma + p\\)

若 \\(p\not=0\\)，则由D1)，我们有
\\(\lim_{n \rightarrow \infty}\sigma_n = \lim_{n \rightarrow \infty}a_n = \sigma + p\\)

矛盾。这就证明了结论。

> 可以看出，通过\\(\text{Cesàro}\\)和，我们也定义了一种收敛的方式

### 习题E \\(\sqrt[n]{x}\\)和\\(b^x\\)的定义

E1) 逆否命题即\\(f(x) = x^n\\)为单射。这是显然的。

E2) 显然 \\(t \in E(x)\\)，且必定有 \\(2x>t\\)。

E3) 若\\(y^n < x\\)，则必存在\\(t\\)，使得 \\(y^n < t^n < x\\)，这与\\(y\\)是一个上界矛盾。

若\\(y^n > x\\)，则必存在\\(y_0\\)，使得 \\(x < y_0^n <y^n\\)，则\\(y_0 < y\\)，这与\\(y\\)是一个确界矛盾。

E4) 由E1)自然得到。

E5) 取\\(x_1 < x_2\\)，令 \\(y_1 = \sup E(x_1)\\)，\\(y_2 = \sup E(x_2)\\)

反证法。假设\\(y_1 = y_2\\)

由于\\(x_1 < x_2\\)，必定存在一个数\\(t_0\\)，使得 \\(t_0 \notin E(x_1)\\)且 \\(t_0 \in E(x_2)\\)。

于是我们便有\\(t_0^n \ge x_1 = y_1^n\\)，即\\(t_0 \ge y_1\\)

又有\\(t_0^n < x_2 = y_2^n\\)，即\\(t_0 < y_2\\)

这就得到了矛盾。

E6) 
我们知道\\(((ab)^{\frac{1}{n}})^n = ab\\)，而\\((a^{\frac{1}{n}}b^{\frac{1}{n}})^n = (a^{\frac{1}{n}})^n(b^{\frac{1}{n}})^n = ab\\)

由E1)即得。

E7) 两边同时\\(nq\\)次方即可

E8) E7) 已经给出了这一点

E9) 展开，通分，利用整数指数时幂的性质即可

E10) 显然的

E11) 这也显然（r此时已然是最大元）

E12) 令
\\[
E(x+y)
=
\\{ b^{t_1} b^{t_2} \\mid t_1, t_2 \\in \\mathbb{Q},\\ t_1 \\le x,\\ t_2 \\le y \\},
\\]
容易证明，集合中的每个元素都可以写成上述形式。


>这种形式可能不是唯一的，但集合元素的唯一性保证了我们这步操作是合法的

而显然，\\(\sup b^{t_1} = \sup E(x) = b^x\\)，\\(\sup b^{t_2} = \sup E(y) = b^y\\)，因此
\\(b^{x+y} = \sup b^{t_1}b^{t_2} = \sup b^{t_1} \sup b^{t_2} = b^x b^y\\)

E13) 这里的\\(e^x\\)即为集合：
\\(E(x) = \{e^t | t \in \mathbb{Q}, t \le x\}\\)
的上确界。

我们设
\\(g(x) = \sum_{i=0}^{\infty} \frac{x^i}{i!}\\)

即级数定义的表达式。

显然有
\\(e^0 = g(0) = 1\\)

在讲义中，我们证明了\\(e\\)的两种定义是等价的，即
\\(e = g(1)\\)

同样在讲义中，利用双指标求和的性质，我们已经证明了

\\(g(x+y) = g(x)g(y)\\)

结合\\(g(0) = 1, g(1)= e\\)，上式即为一个 **\\(\text{Cauchy}\\)方程**，进而我们得到：

\\(g(t) = \sum_{i=0}^{\infty} \frac{t^i}{i!} = e^t,\forall t\in \mathbb{Q}\\)

则
\\(\sup_{t\le x, t \in \mathbb{Q}} e^t = \sup_{t\le x, t \in \mathbb{Q}} \sum_{i=0}^{\infty} \frac{t^i}{i!} = \sum_{i=0}^{\infty} \frac{x^i}{i!}\\)

其中我们用到了\\(\sup t  =x\\)（这是显然的），我们就得到的证明。

> \\(\text{Cauchy}\\)方程是高中数学竞赛的内容，大概丘班的巨佬们一定都知道这个结论吧，所以讲义默认大家会这个东西。

> 在以上两题当中，关于\\(\sup\\)的运算，实际上用到了函数的连续性，尽管讲义至此还没有讲解连续，但是，我们并没有犯循环论证的错误。

### 习题F 根式的逼近

F1) 由均值不等式，我们知道 \\(x_n \ge \sqrt{\alpha}\\)。又有
\\(x_{n+1} - x_n = \frac{1}{2}(\frac{\alpha}{x_n} - x_n) < 0\\)

故\\(\{x_n\}\\)递减。

结合有界性，由单调有界定理，我们不妨设\\(\lim_{n \rightarrow \infty } x_n = A\\)。

等式两边取极限，我们便算得\\(A = \sqrt{\alpha}\\)

F2) 直接代入即可。

F3) F2) 结论反复迭代即可。

F4) F5) 不算了。。。没意思。。。

F6) F7) 递推式迭代一次，我们有
\\(y_{n+1} = \frac{2\alpha + (\alpha + 1)y_{n-1}}{\alpha + 1 + 2y_{n-1}}\\)
直接相减即可。

F8) 由对勾函数的性质，我们容易证明 \\(\{y_{2k-1}\}_{k\ge1}\\) 有下界 \\(\sqrt{\alpha}\\)，而 \\(\{y_{2k-1}\}_{k\ge1}\\) 有上界 \\(\sqrt{\alpha}\\)。

再次利用单调有界定理，借由上述递推式，我们便知道两个子列的极限都是\\(\sqrt{\alpha}\\)，从而原数列的极限也是\\(\alpha\\)。

F9) 不妨仅考虑奇数项。令 \\(\varepsilon_{k} = y_{2k - 1} - \sqrt{\alpha}\\)，则我们有 \\(y_{2k - 1} = \varepsilon_{k} + \sqrt{\alpha}\\) 且 \\(y_{2k + 1} = \varepsilon_{k+1} + \sqrt{\alpha}\\)

代入以上递推式，化简，我们便有
\\(\varepsilon_{k} = \frac{F^k\varepsilon_{1}}{1-F^{k-1}\varepsilon_{1}+F} > \frac{F^k}{1-F^{k-1}}\\)

其中\\(F = \frac{\sqrt{\alpha}-1}{\sqrt{\alpha}+1}\\)。

注意到上式的指数仅仅是\\(k\\)，而\\(\{x_n\}\\)的指数是\\(2^n\\)，所以，\\(\{y_n\}\\)的收敛速度远比\\(\{x_n\}\\)慢。

### 习题G \\(\text{Banach-Mazur}\\)游戏

王老（后手）有必胜策略。

我们利用作业1 B1-7)的结论。我们知道有理数集是可数集，所以我们设\\(\mathbb{Q} = \{r_1,r_2,\dots \}\\)。

在第\\(i\\)次游戏时，直接同 B1-7)中构造\\(L_i\\)以避开\\(r_i\\)即可。

### 习题H 

H1) 我们考虑
\\(S_n = (1+\frac{1}{2})(1+\frac{1}{4})\dots (1+\frac{1}{2^{2^n}})\\)

显然我们有

\\((1-\frac{1}{2})S_n = 1 - \frac{1}{2^{2^{n+1}}} \le 1\\)

所以\\(a_n \le S_n \le 2\\)，进而由单调有界定理即可。

H2) 单射性是显然的，下面证明 \\(f\\) 是满射。

对于 \\(2\\)，我们不难证明
\\[
\\prod_{k=1}^{\\infty} \\left( 1 + \\frac{1}{2^k} \\right) = 2
\\]
（可由 H1) 的结论得到）。

任取 \\(y \\in (1,2)\\)，初始时令
\\[
A_0 = 1.
\\]

我们递归地构造数列。假设已经得到
\\[
A_n = \\prod_{k=1}^{n} \\left( 1 + \\frac{1}{p_k} \\right).
\\]

令 \\(p_{n+1}\\) 为满足
\\[
\\left( 1 + \\frac{1}{p_{n+1}} \\right) A_n \\le y
\\]
的、最小的且满足 \\(p_{n+1} \\ge p_n^2\\) 的整数。

不难证明这样的 \\(p_{n+1}\\) 总是存在，
只需取
\\[
p_{n+1} \\ge \\frac{1}{\\frac{y}{A_n} - 1}.
\\]

若
\\[
\\left( 1 + \\frac{1}{p_{n+1}} \\right) A_n = y,
\\]
则立刻得到结论。

否则有 \\(A_n < y\\)，令
\\[
A_{n+1}
=
\\left( 1 + \\frac{1}{p_{n+1}} \\right) A_n,
\\]
并重复上述过程。

下面只需证明所构造的 \\(\\{A_n\\}\\) 收敛于 \\(y\\)。

显然 \\(\\{A_n\\}\\) 为递增数列且有上界，
只需证明 \\(y\\) 是其上确界。
即对任意 \\(\\varepsilon > 0\\)，存在 \\(n\\)，使得
\\[
y - A_n < \\varepsilon.
\\]

由于 \\(y < 2\\)，我们可以取某个 \\(n_0\\)，使得
\\[
p_{n_0+1} > p_{n_0}^2.
\\]

于是有
\\[
\\left( 1 + \\frac{1}{p_{n_0+1}} \\right) A_{n_0}
<
y
<
\\left( 1 + \\frac{1}{p_{n_0}^2} \\right) A_{n_0}.
\\]

从而
\\[
\\begin{aligned}
\\lvert y - A_{n_0+1} \\rvert
&=
\\left|
y - \\left( 1 + \\frac{1}{p_{n_0+1}} \\right) A_{n_0}
\\right| \\\\
&<
\\left|
\\left( 1 + \\frac{1}{p_{n_0}^2} \\right) A_{n_0}
-
\\left( 1 + \\frac{1}{p_{n_0+1}} \\right) A_{n_0}
\\right| \\\\
&=
\\left| \\frac{1}{p_{n_0}^2} - \\frac{1}{p_{n_0+1}} \\right|.
\\end{aligned}
\\]

于是
\\[
\\lvert y - A_{n_0+1} \\rvert
<
\\frac{1}{p_{n_0}^2}
<
\\frac{1}{2^{2^{n_0}}}.
\\]

只需取 \\(n_0\\) 足够大，使得
\\[
\\frac{1}{2^{2^{n_0}}} < \\varepsilon,
\\]
即可（取两次对数即可做到）。

因此 \\(y\\) 是 \\(\\{A_n\\}\\) 的上确界，
从而 \\(A_n \\to y\\)。

综上，对于任意 \\(y \\in (1,2]\\)，
都能构造出对应的数列，
故 \\(f\\) 是满射。

结合单射性，\\(f\\) 为双射。

H3) 我们在上一次作业中已经证明，任何一个长度不为0的区间都是不可数的。

由H2)，\\(f\\)是双射，所以\\(\mathcal{P}\\)也是不可数的。

### 习题I（2-进制展开）

I1) 直接利用控制收敛法即可。

I2) 假设我们已经固定了前\\(n\\)项。对于第\\(n+1\\)项，我们可以调整的范围为\\([-\frac{1}{2^n},\frac{1}{2^n}]\\)，只要落在这个区间就行了。

我真的懒得写严格过程了。

这TM肯定是个单射。

I3) 感觉可以归纳证明，不过看着计算就恶心，等我有空再算吧。

I4) 直接利用I3)结论即可，答案为2

### 习题J

前排吐槽：yp真的是默认每个人都是天才，，，

首先我们证明：\\(\{a_n\}\\)无界，即收敛于正无穷。

假设\\(\{a_n\}\\)有界，则由单调有界定理，我们不妨设\\(\{a_n\}\\)收敛于\\(A\\)。

对递推式两遍同时取极限，我们便有\\(0 = \frac{1}{\sqrt[k]{A}}\\)，矛盾，因此\\(\{a_n\}\\)不收敛

注意到
\\(\lim_{n \rightarrow \infty} \frac{(a_n)^{k+1}}{n^k} = \lim_{n \rightarrow \infty} (\frac{(a_n)^{\frac{k+1}{k}}}{n})^k\\)

进而我们只需要求得
\\(\lim_{n \rightarrow \infty} \frac{(a_n)^{\frac{k+1}{k}}}{n}\\)
即可。

由 **\\(\text{Stolz}\\) 公式**，我们有
$$
\begin{aligned}
\lim_{n \rightarrow \infty} \frac{(a_n)^{\frac{k+1}{k}}}{n} &\overset{\text{Stolz}}{=} \lim_{n \rightarrow \infty} (a_{n+1})^{\frac{k+1}{k}} - (a_n)^{\frac{k+1}{k}} 
\\ &= \lim_{n \rightarrow \infty} (a_n + a_n^{-\frac{1}{k}})^{\frac{k+1}{k}} - (a_n)^{\frac{k+1}{k}}
\\ &= \lim_{n \rightarrow \infty} (a_n)^{\frac{k+1}{k}} ((1 + a_n^{-\frac{k+1}{k}})^{\frac{k+1}{k}} - 1)
\\ &= \lim_{n \rightarrow \infty} (a_n)^{\frac{k+1}{k}} ({\frac{k+1}{k}}a_n^{-\frac{k+1}{k}}) 
\\ &= \frac{k+1}{k}
\end{aligned}
$$
其中的第四个等号，我们用到了等价无穷小
\\((1+x)^{\alpha} \sim 1 + \alpha x\\)

> 这里使用的\\(\text{Stolz}\\)公式和等价无穷小在yp讲义之前的正文里提都没提，，，大概丘班的巨佬们都会这些东西吧

## 作业3 素数的倒数和，\\(\text{Basel}\\)问题的\\(\text{Euler}\\)证明

### 习题A：连续函数的定义和基本性质

A1) 由\\(\text{Heine}\\)定理，我们就转化为了\\(\text{Cauchy}\\)列收敛。

A2) 显然，\\(I\\)上定义的多项式构成的空间必定是\\(C(I)\\)的子空间，而多项式空间是无限维的，故\\(C(I)\\)是无限维的。

> 关于什么是无限维的线性空间，参见我的高等代数笔记

A3) 这是显然的

A4) 等价距离之间只是差了一个常数而已，这并不影响敛散性。

A5) 这也是显然的（参见作业1中的相关讨论）

A6) 这和极限的四则运算没有本质差别。

A7) 不连续点的集合为 \\(\\mathbb{Q}\\)。

任取 \\(x \\in \\mathbb{Q}\\)。
由于有理数与无理数在 \\(\\mathbb{R}\\) 中稠密，
我们可以构造一列数 \\(\\{y_n\\} \\subset \\mathbb{R} \\setminus \\mathbb{Q}\\)，
使得 \\(y_n \\to x\\)。
于是有
\\[
f(y_n) \\to 0,
\\]
而
\\[
f(x) \\ne 0,
\\]
因此 \\(f\\) 在 \\(x\\) 处不连续。

再任取 \\(x \\in \\mathbb{R} \\setminus \\mathbb{Q}\\)。
对任意 \\(\\varepsilon > 0\\)，
取 \\(n_0\\) 使得
\\[
n_0! > \\left\\lceil \\frac{1}{\\varepsilon} \\right\\rceil.
\\]

考虑集合
\\[
Z = \\left\\{ \\frac{n}{n_0!} \\mid n \\in \\mathbb{Z} \\right\\}.
\\]
该集合是离散的，因此可以选取 \\(\\delta > 0\\)，
使得区间
\\[
I = (x - \\delta, x + \\delta)
\\]
与 \\(Z\\) 不相交。

于是，对任意 \\(y \\in I\\)，若 \\(y\\) 为有理数，
其最简分母必定大于 \\(n_0!\\)，从而
\\[
|f(y)| \\le \\frac{1}{n_0!} < \\varepsilon.
\\]
若 \\(y\\) 为无理数，则 \\(f(y) = 0\\)，结论同样成立。

因此，
\\[
\\forall y \\in I, \\quad |f(y) - f(x)| = |f(y)| < \\varepsilon,
\\]
从而 \\(f\\) 在 \\(x\\) 处连续。


A8) A9) A10) 平凡

### 习题B （级数的基本计算技巧和收敛判断）

B1) 瞄了一眼，高中难度，不做了

B2) 选几个稍微难一点的

(3) \\(n \ge 4\\)时，\\(\sqrt[n]{n} - 1 < \frac{1}{2}\\)，直接放缩即可

(4) 这需要我们分情况讨论了：

如果\\(x > 1\\)，我们有
\\(\sum_{n = 1}^{\infty} \frac{1}{1 + x^n} < \sum_{n = 1}^{\infty} \frac{1}{x^n} = \frac{1}{1 - \frac{1}{x}}\\)
故此时级数收敛

如果\\(0 \le x \le 1\\)，我们有
\\(\sum_{n = 1}^{\infty} \frac{1}{1 + x^n} \ge \sum_{n = 1}^{\infty} \frac{1}{2} = \infty\\)
故此时级数发散

如果\\(-1 < x < 0\\)，我们有
\\(\sum_{n = 1}^{\infty} \frac{1}{1 + x^n} \ge \sum_{k = 1}^{\infty} \frac{1}{1 + x^{2k - 1}} \ge \sum_{k = 1}^{\infty} 1 = \infty\\)
故此时级数发散

如果\\(x < -1\\)，当\\(n\\)充分大的时候，我们必然有
\\(\sum_{n = 1}^{\infty} \frac{1}{1 + x^n} < \sum_{n = 1}^{\infty} |\frac{1}{1 + x^n} |< \sum_{n = 1}^{\infty} |\frac{1}{x^n}| = \frac{1}{1 - |\frac{1}{x}|}\\)
故此时级数收敛

(7) 我们有
\\(\frac{1}{n^{1+\frac{1}{n}}} = \frac{1}{n^\frac{1}{n}} \times \frac{1}{n}\\)

我们容易证明\\(\{\frac{1}{n^{\frac{1}{n}}}\}\\)是一个单调递增的数列\\((n \ge 2)\\)时。令 \\(A = \frac{1}{\sqrt{2}}\\)，则我们有
\\(\sum_{n = 2}^{\infty} \frac{1}{n^{1 + \frac{1}{n}}} > A \times \sum_{n = 2}^{\infty} \frac{1}{n}\\)

故级数肯定是发散的

> 直观上，\\(n\\)充分大的时候，\\(\frac{1}{n^{1 + \frac{1}{n}}}\\)与\\(\frac{1}{n}\\) 是十分接近的，但是差一点点，这个级数收敛了（比如如果不是\\(\frac{1}{n}\\)而是\\(0.000000000001\\)）

(9) 我们有
\\(\ln \frac{n^{n + \frac{1}{n}}}{(n + \frac{1}{n})^{n}} = (n + \frac{1}{n}) \ln n - n \ln \frac{n+1}{n}\\)

\\(n\\)充分大的时候，我们有
$$
\begin{aligned}
\ln \frac{n^{n + \frac{1}{n}}}{(n + \frac{1}{n})^{n}} &= (n + \frac{1}{n}) \ln n - n \ln \frac{n+1}{n} \\
&= n \ln n + \frac{1}{n} \ln n - n \ln \frac{n+1}{n} \\
&>  n (\ln n - \ln \frac{n+1}{n})
\\
&>  n (\ln n - \ln 2) \rightarrow \infty
\end{aligned} 
$$

进而原级数发散。

(10) 我们易知
$$
\begin{aligned}
|\frac{\sqrt{n}}{n+1} - \frac{\sqrt{n+1}}{n+2}| &= |\frac{\sqrt{n}(n+2) - \sqrt{n+1}(n+1)}{(n+1)(n+2)}| \\
&< \frac{\sqrt{n+1}(n+1) - \sqrt{n}(n+1)}{(n+1)(n+2)} \\
&= \frac{\sqrt{n+1} - \sqrt{n}}{n+2} \\
&= \frac{1}{(n+2)(\sqrt{n+1}+\sqrt{n})} \\
&< \frac{1}{n^{\frac{3}{2}}}
\end{aligned} 
$$

由控制收敛法和之前的结论，即知原级数收敛。

或：我们可以直接使用\\(\text{Dirichlet}\\)判别法。

(11) 必然发散（原数列不收敛于0）

> 这个真的很水，但是我一直以为这玩意收敛，想了我三四天。。。

(12) 变形，我们可得：
$$
a_n = \frac{1 + 2 + \dots + \frac{1}{n}}{n} \\
b_n = \sin nx
$$

其中，\\(\{a_n\}\\)必然收敛于\\(0\\)，而\\(b_n\\)的部分和必然是有界的。

那么，由\\(\text{Dirichlet}\\)判别法，原级数收敛。

> 1. 我们用到了调和级数的近似估计（大约等于\\(\ln n\\)），这个在讲义很后面的部分才会出现 
> 2. \\(\sum \sin nx\\) 是一个经典结论，可以用欧拉公式证明

B3)

(1) 由\\(\text{Dirichlet}\\)判别法显然收敛。
可以证明这并不绝对收敛的（这在下面的习题当中即将会证明）

(2) 由\\(\text{Dirichlet}\\)判别法显然收敛。取奇数项，容易证明这并不绝对收敛。

(3) 由\\(\text{Dirichlet}\\)判别法显然收敛。容易证明这并不绝对收敛。

(4) \\(n\\)充分大时，我们有
$$
\frac{n^{10}}{a^n} < (\frac{2}{a+1})^n
$$
容易证明这肯定是绝对收敛的。

### 习题C （递减正项级数的凝聚收敛法）

C1) 
由单调性，显然。

C2)
在上式中取\\(k = 1,2,\dots,n\\)，累加，我们便有
$$
(b-1)\sum_{k = 1}^n b^{k - 1} f(b^k) \le \sum_{j = 1}^{b^n - 1}f(j) \le (b-1)\sum_{k = 1}^n b^{k - 1} f(b^{k - 1})
$$

稍作变形，我们有
$$
\frac{b-1}{b}\sum_{k = 1}^n b^{k} f(b^k) \le \sum_{j = 1}^{b^n - 1}f(j) \le (b-1)\sum_{k = 1}^n b^{k} f(b^k) + (b-1)f(1)
$$

同时取极限，我们便有
$$
\frac{b-1}{b}\sum_{k = 1}^{\infty} b^{k} f(b^k) \le \sum_{j = 1}^{\infty}f(j) \le (b-1)\sum_{k = 1}^{\infty} b^{k} f(b^k)
$$

若 \\(\sum_{n = 1}^{\infty}f(n)\\) 收敛，则由左边的不等式，\\(\sum_{n = 1}^{\infty} b^n f(b^n)\\) 收敛

若 \\(\sum_{n = 1}^{\infty}f(n)\\) 发散，则由右边的不等式，\\(\sum_{n = 1}^{\infty} b^n f(b^n)\\) 发散

反之同理。

综上，两个级数必然同时收敛同时发散。

> 通过后者来判断前者收敛的方法被称之为 **（\\(\text{Cauchy}\\)）凝聚检验法**，

C3) 由凝聚检验法，取\\(b = 2\\)，我们便有
$$
\sum_{n = 1}^{\infty} b^n f(b^n) = \sum_{n = 1}^{\infty} \frac{2^n}{2^n n\log2} = \sum_{n = 1}^{\infty} \frac{1}{n\log2}
$$
则原级数必然发散。

C4) 由凝聚检验法，取\\(b = 2\\)，我们便有
$$
\begin{aligned}
\sum_{n = 1}^{\infty} b^n f(b^n) &= \sum_{n = 1}^{\infty} \frac{2^n}{2^n n\log2 (\log n(\log 2))} = \sum_{n = 1}^{\infty} \frac{1}{n\log2 (\log n(\log 2))} \\ 
&= \sum_{n = 1}^{\infty} \frac{1}{n\log2 (\log n + \log \log 2)} > \sum_{n = 1}^{\infty} \frac{1}{2\log2 \times n \log n }
\end{aligned}
$$
则原级数必然发散。

C5) 由凝聚检验法，取\\(b = 2\\)，我们便有
$$
\sum_{n = 1}^{\infty} b^n f(b^n) = \sum_{n = 1}^{\infty} \frac{2^n}{2^{ns}} = \sum_{n = 1}^{\infty} \frac{1}{2^{n(s-1)}}
$$
这里就显然了。

C6) 在C3) 和 C4) 的基础上稍作修改，不难证明。

### 习题D 实数列\\(\{a_n\}_{n\ge1}\\)的上下极限的刻画

D1) D2) 由极限 显然。

D3) 如果数列无界，则必然可以推出聚点为正无穷或者负无穷。

如果数列有界，直接由\\(\text{Bolzano-Weistrass}\\)列紧性定理得到。

D4) 由D3) 证明 显然

D5) 令 \\(t = \sup E\\)， \\(b_n = \sup_{m \ge n} a_m\\) 。我们考虑使用反证法。

如果 \\(t < \lim \sup _{n \rightarrow \infty} a_n = \lim_{n \rightarrow \infty} b_n\\)，则当\\(n\\)充分大时（以下我们都默认\\(n\\)充分大），我们必然有\\(t + \varepsilon < b_n\\)，其中\\(\varepsilon\\)是任意大于\\(0\\)的一个数。

我们考虑构造\\(\{c_n\}\\)。如果\\(a_n \ge b_n - \varepsilon / 2\\)，则我们把\\(a_n\\)加入数列\\(\{c_n\}\\)中。容易证明\\(\{c_n\}\\)必定是无限列（否则与上极限条件和\\(b_n\\)定义矛盾）

于是\\(\{c_n\}\\)必定收敛于一个 \\(\ge \lim_{n \rightarrow \infty} b_n - \varepsilon / 2 > t\\) 的值，记作\\(x\\)，则\\(x\\)为\\(\{a_n\}\\)一个聚点，与\\(t\\)为\\(E\\)上确界矛盾。

如果 \\(t > \lim \sup _{n \rightarrow \infty} a_n = \lim_{n \rightarrow \infty} b_n\\)，那么\\(n\\)充分大时（以下我们都默认\\(n\\)充分大），我们必定有 \\(t - \varepsilon> b_n\\)，其中\\(\varepsilon\\)是任意大于\\(0\\)的一个数。

由于\\(t = \sup E\\)，那么，必定\\(\exists x \in E\\)，使得 \\(\sup b_n + \varepsilon / 2< x < t\\)

于是我们必然有 \\(x > \sup b_n + \varepsilon/2 \ge b_n + \varepsilon/2 \ge a_n + \varepsilon / 2\\)，即 \\(x - \varepsilon / 2> a_n\\)，由极限的保号性，\\(n\\)充分大时\\(\{a_n\}\\)的任意一个收敛子列的极限值必定 \\(\le x - \varepsilon / 2\\)，这与\\(x\\)是一个聚点矛盾。

综上，我们必定有\\(\sup E = \limsup a_n\\)。另一个命题是同理的。

D6) i) 令
\\[
t = \\limsup a_n,
\\qquad
b_n = \\sup_{m \\ge n} a_m.
\\]

则当 \\(n\\) 充分大时，有
\\[
|b_n - t| < \\frac{\\varepsilon}{2}.
\\]

我们构造数列 \\(\\{c_n\\}\\)。
若
\\[
a_n \\ge b_n - \\frac{\\varepsilon}{2},
\\]
则将 \\(a_n\\) 取入 \\(\\{c_n\\}\\)。

容易证明 \\(\\{c_n\\}\\) 是无限序列，
否则将与上极限的定义及 \\(b_n\\) 的构造矛盾。

于是对充分大的 \\(n\\)，有
\\[
\\begin{aligned}
|c_n - t|
&\\le |c_n - b_n| + |b_n - t| \\\\
&< \\varepsilon.
\\end{aligned}
\\]

因此 \\(\\{c_n\\}\\) 收敛于 \\(t\\)，
说明 \\(t\\) 是 \\(\\{a_n\\}\\) 的一个聚点，
即
\\[
\\sup E \\in E.
\\]


ii) 否则必定会与上确界和上极限条件矛盾，细节就不展开了，与之前是类似的。

D7) \\(0,1,0,2,0,3, \dots \\)

D8) \\(0,1,0,1,2,0,1,2,3, \dots\\)

### 习题E 素数的倒数和

\\(s > 1\\)时，我们有
$$
\sum_{p \in \mathcal{P}} \frac{1}{p^s} < \sum_{n = 1}^{\infty} \frac{1}{n^s}
$$

故必然收敛。

下面我们考虑\\(0 < s <1\\)的情况。

考虑部分和
$$
S_m = \sum_{n = 1}^{m} \frac{1}{n^s}
$$

设\\(\mathcal{P}_m\\)为\\(m\\)以内所有质数的集合。记\\(a\\)为\\(n\\)的质因数分解中最大的指数。

则我们必定有
$$
S_m = \sum_{n = 1}^{m} \frac{1}{n^s} < \prod_{p \in \mathcal{P}_m}(1 + p^{-s} + p^{-2s} + \dots + p^{-as}) \le \prod_{p \in \mathcal{P}_m}\frac{1}{1 - p^{-s}}
$$

两边同时取对数，我们便有
$$
\ln S_m < \sum_{p \in \mathcal{P}_m} - \ln (1 - p^{-s})
$$

我们有常用不等式
$$
\ln (x+1) \le x
$$

用\\(-x\\)代换\\(x\\)，我们有
$$
\ln (1-x) \le -x \Rightarrow -\ln (1-x) \le x
$$

所以
$$
\ln S_m < \sum_{p \in \mathcal{P}_m} - \ln (1 - p^{-s}) \le \sum_{p \in \mathcal{P}_m} p^{-s}
$$

两边同时取极限，我们便有
$$
\ln \sum_{n = 1}^{\infty} \frac{1}{n^s} <\sum_{p \in \mathcal{P}} \frac{1}{p^s}
$$

由于左边在\\(0 < s < 1\\)时发散，故右边此时也必然是发散的。

> 这便可以直接推出素数有无穷多个

### 习题F \\(\text{Basel}\\) 问题的 \\(\text{Euler}\\) “证明”

又是一道默认每个人搞过数学竞赛的题。

（1）根据第二类\\(\text{Chebyshev}\\)多项式及其零点分布，我们知道
$$
f_{2n}(\cos \theta) = \frac{\sin(2n + 1)\theta}{\sin \theta} = 2^{2n} \prod_{k = 1}^{2n} (\cos \theta - \cos \frac{k\pi}{2n + 1})
$$

将第\\(1\\)项和第\\(n\\)项配对，第\\(2\\)项和第\\(n-1\\)项配对，以此类推，结合诱导公式和平方差公式，我们便得到：
$$
f_{2n}(\cos \theta) = \frac{\sin(2n + 1)\theta}{\sin \theta} = 2^{2n} \prod_{k = 1}^{n} (\cos^2 \theta - \cos^2 \frac{k\pi}{2n + 1})
$$

稍作变形，我们便知道

$$
\begin{aligned}
\frac{\sin(2n + 1)\theta}{\sin \theta} &= 2^{2n} \prod_{k = 1}^{n} (\sin^2 \frac{k\pi}{2n + 1} - \sin^2 \theta) \\
&= 2^{2n} \prod_{k = 1}^{n} \sin^2 \frac{k\pi}{2n + 1}(1 - \frac{\sin^2 \theta}{\sin^2 \frac{k\pi}{2n + 1}})
\end{aligned}
$$

故我们只需要证明
$$
\prod_{k = 1}^{n} \sin^2 \frac{k\pi}{2n + 1} = \frac{2n + 1}{2^{2n}}
$$

类似地，我们有
$$
\prod_{k = 1}^{n} \sin^2 \frac{k\pi}{2n + 1} = \prod_{k = 1}^{2n} \sin \frac{k\pi}{2n + 1}
$$

于是我们等价于证明
$$
\prod_{k = 1}^{n - 1} \sin \frac{k\pi}{n} = \frac{n}{2^{n - 1}}
$$

这个的证明方法有很多，我这里选取一种经典的证明：

考虑\\(n\\)次单位根\\(\omega_k\\)，其中\\(k = 0,1,\dots n-1\\)。我们显然有
$$
z^n - 1 = \prod_{k = 0}^{n - 1} (z - w_k)
$$
将左边因式分解，我们有
$$
(z - 1)(1 + z + \dots + z ^{n-1}) = \prod_{k = 0}^{n - 1} (z - w_k)
$$

故
$$
1 + z + \dots + z ^{n-1} = \prod_{k = 1}^{n - 1} (z - w_k)
$$

代入\\(z = 1\\)，我们便有

$$
n = \prod_{k = 1}^{n - 1} (1 - w_k)
$$

两边同时平方，结合单位根性质
$$
\omega_k \omega_{n - k} = 1
$$

我们便有
$$
\begin{aligned}
n^2 &= \prod_{k = 1}^{n - 1} (1 - w_k)(1 - w_k^{-1}) \\
&= \prod_{k = 1}^{n - 1} (2 - (\cos \frac{2k\pi}{n} + \cos \frac{2(n-k)\pi}{n} + (\sin \frac{2k\pi}{n} + \sin \frac{2(n-k)\pi}{n})i)) \\
&= \prod_{k = 1}^{n - 1} (2 - 2\cos \frac{2k\pi}{n} ) \\
&= \prod_{k = 1}^{n - 1} (4\sin^2 \frac{k\pi}{n} )
\end{aligned}
$$

两边同时开方即得证。

> 第二类\\(\text{Chebyshev}\\)多项式的性质可以在网上查阅。

（2）
（我不保证我的做法正确）

根据（1），我们已经有
$$
\frac{\sin((2n + 1)\theta)}{(2n + 1)\sin \theta} = \prod_{k = 1}^{n} (1 - \frac{\sin^2 \theta}{\sin^2 (\frac{k\pi}{2n + 1})})
$$

我们考虑固定 \\(\alpha = (2n+1)\theta\\)，则我们有 \\(\theta = \frac{\alpha}{2n+1}\\)，上式即化为

$$
\frac{\sin \alpha }{(2n + 1)\sin \frac{\alpha}{2n + 1}} = \prod_{k = 1}^{n} (1 - \frac{\sin^2 \frac{\alpha}{2n+1}}{\sin^2 (\frac{k\pi}{2n + 1})})
$$

在上式中让\\(n \rightarrow \infty\\)，则
$$
\frac{\sin \alpha}{\alpha} = \lim_{n \rightarrow \infty} \prod_{k = 1}^{n} (1 - \frac{\sin^2 \frac{\alpha}{2n+1}}{\sin^2 (\frac{k\pi}{2n + 1})})
$$

我们考虑用

$$
\frac{\frac{\alpha^2}{(2n + 1)^2}}{ \frac{k^2\pi^2}{(2n + 1)^2}} = \frac{\alpha^2}{k^2\pi^2}
$$

来代换
$$
\frac{\sin^2 \frac{\alpha}{2n+1}}{\sin^2 (\frac{k\pi}{2n + 1})}
$$

如果我们能够证明这样代换的误差充分小的话，我们就有
$$
\frac{\sin \alpha}{\alpha} = \prod_{k = 1}^{\infty} (1 - \frac{\alpha^2}{k^2 \pi^2})
$$

令\\(x = \frac{a}{\pi}\\)，我们就有

$$
\frac{\sin \pi x}{\pi x} = \prod_{k = 1}^{\infty} (1 - \frac{x^2}{k^2})
$$

就得到了证明

令
$$
f(k) = \frac{\sin^2 \frac{\alpha}{2n+1}}{\sin^2 (\frac{k\pi}{2n + 1})}
$$

$$
g(k) = \frac{\alpha^2}{k^2\pi^2}
$$

取一个阈值 \\(B = n^{0.1}\\)。

\\(k > B\\)时，我们显然有
$$
f(k) < \frac{C_1}{k^2}
$$

其中\\(C_1\\)是一个与\\(k\\)无关的常数。

进而我们一定有
$$
\ln (1 - f(k)) < \frac{C_2}{k^2}
$$

所以
$$
\prod_{k = B + 1}^{n} (1 - f(k)) = \exp{C_2 \sum_{k = B + 1}^{n} \frac{1}{k^2}} \le \exp{\frac{C_3}{B}}
$$

\\(n \rightarrow \infty\\) 时，也有 \\(B \rightarrow \infty\\)，进而我们有
$$
\prod_{k = B + 1}^{\infty} (1 - f(k)) = 1
$$

\\(k \le B\\)时，我们必定有
$$
f(k) \le g(k) \times (1 + c n^{-1.8})
$$

所以我们有
$$
\prod_{k = 1}^{B} \frac{1 - f(k)}{1 - g(k)} \le (1 + cn^{-1.8})^B
$$

以上的\\(c,c'\\)都是一个与\\(k\\)无关的常数

所以，对于\\(k \le B\\)的项，我们做这样的代换，就得到了结论。

根据乘积级数的 \\(\text{Cauchy}\\) 收敛准则，我们

> \\(Euler\\)观察到\\(\frac{\sin \pi x}{ \pi x}\\)的零点恰好是\\(1,-1,2,-2,\dots,n,-n\dots\\) 如果这个函数的行为和多项式类似的话，我们便有：
>$$
\frac{\sin \pi x}{\pi x} = c(1 - x)(1 + x)\dots(n - x)(n + x)\dots = c\prod_{n = 1}^{\infty} (1 - \frac{x^2}{n^2})
>$$
> 通过在\\(0\\)处取极限，得到\\(c = 1\\)。不过\\(Euler\\)并没有证明这种做法的正确性，而这种多项式逼近的严格证明需要用到\\(\text{Weistrass}\\)分解定理。

> （2）的结论式中，比较两边\\(x^3\\)的系数，我们知道（其中\\(\sin x\\)采用级数定义）：
> $$
> \sum_{n = 1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
> $$
> 这便是\\(\text{Basel}\\)问题的解
>（事实上，我们也可以考虑比较（1）中结论式两边\\(x^3\\)的系数）

> 鸣谢戴江齐巨佬对我解答此题给予的帮助！

## 作业4

### 习题A：距离空间上的拓扑与连续性

A1) - A7) 类比讲义中的做法即可，这里不再赘述。

A8) 前两问是平凡的。

在作业二中我们证明过，函数收敛当且仅当每一个分量收敛，于是显然。

A9) 近乎显然

A10) 加法映射连续显然。矩阵乘法映射可以考虑为若干个实数加法和乘法映射的复合，于是也显然。

A11) 我是不是在学习高等代数【捂脸

我们取行列式映射 \\(\det: GL_n(\mathbb{R}) \rightarrow \mathbb{R} \ \setminus \{0\}\\)。

由于 \\(\mathbb{R} \ \setminus \{0\} = (- \infty, 0) \cup (0, +\infty)\\)，故 \\(\mathbb{R} \ \setminus \{0\}\\) 是开集，所以根据连续函数的拓扑定义，我们自然得到\\(GL_n(R)\\)是开集。

> 当然，这里我们必须得证明行列式映射 \\(\det: M_n(\mathbb{R}) \rightarrow R\\)是一个连续映射：考虑映射 \\(f: M_n(R) \rightarrow (V_n, V_n,\dots,V_n)\\)，其中\\(V_n\\)为\\(n\\)维向量空间，显然，\\(f\\)是连续的。
>
> 再考虑映射 \\(g: (V_n, V_n,\dots,V_n) \rightarrow \mathbb{R}\\)，其中 \\(g\\) 即计算行列式。根据行列式的性质，\\(g\\)必定是一个\\(n\\)重线性映射，故\\(g\\)也必定是连续的（多重线性映射必定是连续映射，证明参见任何一本高等代数教材），所以行列式映射也必然是连续的。

A12) 由A11) 结合连续函数的拓扑定义，这是显然的。

### 函数的连续性
### 习题B

没有什么太大意思，暂时先不做了，有空再补。

### 习题C

C1) 讲义暂时还没有引入导数，那我们不使用求导的做法

令 \\(f(x) = x^3 + 2x - 1\\)，易见\\(f(0) < 0\\)，\\(f(1) > 0\\)，所以\\((0,1)\\)中必定存在零点\\(x_0\\)。

根据代数基本定理，我们令 \\(f(x) = (x - x_0)(x^2 + bx + c)\\)。比较系数，我们有 \\(b = x_0\\) 且 \\(c = x_0^2 + 2\\)。

此时，\\(\Delta = b^2 - 4c < 0\\)，所以\\(x_0\\)是唯一的根。

C2) 令\\(f(x) = x - \lambda \sin x\\)。我们知道\\(f(0) = 0\\)。当\\(x \rightarrow \infty\\)时，我们还有\\(f(x) \rightarrow \infty\\)，所以根据介值定理，一定存在零点

C3) 令\\(f(x) = \sin x - \frac{1}{x}\\)。 考虑取 \\(x_k = 2k\pi \\) 和 \\(y_k = 2k\pi + \frac{\pi}{2}\\)，其中 \\(k = 1,2\dots\\)，则我们显然有 \\(f(x_k) < 0\\) 并且 \\(f(y_k) > 0\\)，故该函数有无穷多个零点

C4) 代入\\(x = 0\\)和\\(1\\)即可。

C5) 取\\(x = 0\\)和\\(100\\)即可

C6) 代入\\(x = 1\\)和\\(2\\)即可。

C7) 根据题意，我们任取\\(f(a) = f(b)\\)，则 \\([a,b]\\)上，根据闭区间最大最小值定理，我们必然能取到一点\\(x_0\\)，使得\\(f(x_0)\\)为\\([a,b]\\)上的最大值。我们把这个最大值记作\\(M\\)。根据题意，必定有\\(M > f(a)\\)。

我们下面分两种情况讨论：

如果闭区间上存在两点\\(x_0\\)，\\(x_1\\)，有 \\(f(x_0) = f(x_1) = M\\)，则我们记\\(m\\)为\\([x_0,x_1]\\)上的最小值。我们取\\(y = \max \{m, \frac{f(a) + M}{2}\}\\)，则根据介值定理，我们能够找到至少\\(3\\)个点满足\\(f(x) = y\\)，矛盾。

如果闭区间上只存在一点\\(x_0\\)，有 \\(f(x_0) = M\\)，根据题意，闭区间外必然存在另外一点\\(x_1\\)，使得\\(f(x_1) = M\\)。不妨设\\(x_0 < x_1\\)，任取 \\([c,d]\\) 满足 \\(c < x_1 < d\\) 且 \\(c > b\\)。

如果\\(M\\)不为 \\([c,d]\\) 上的最小值，我们找到最小值点\\(m\\)。任取\\(y \in (m,M)\\)，采用与上一种情况类似的方法，我们找到三个函数值相同的点，矛盾。

如果\\(M\\)是 \\([c,d]\\) 上的最小值，那么我们必然有\\(f(b) < M < f(c)\\)，故 \\((b,c)\\) 上必然存在一点\\(x_2\\)使得\\(f(x_2) = M\\)，同样矛盾。

综上，\\(f\\)不可能是连续函数。

C8) 我们先证明：极值必定只能在端点处取到

设 \\(f(c)\\) 为 \\(f(x)\\) 在 \\([a,b]\\) 的最小值（最大值同理），且 \\(a \not= c\\)，则我们必定有 \\(f(a) > f(c)\\) 且 \\(f(b) > f(c)\\)。任取 \\(y \in (f(c), f(a))\\)，由于\\(f\\)是连续的，根据介值定理，\\((a,c)\\) 和 \\((c,b)\\) 上都存在一点，使得函数值等于\\(y\\)，这与单射矛盾。

再证明必定严格递增。

若存在 \\(a < c < d < b\\)，使得 \\(f(c) > f(d)\\)，那么由于\\(f\\)连续且\\(f(c) > f(a)\\)，由介值定理，类似地，这必定与单射条件矛盾。

而单射的条件保证了严格性（即不可能相等），得证。

### 习题D

仅挑几个出来计算，剩下的都（近乎）是平凡的。

(11) 这题很有意思，有很多中做法。我们可以考虑直接使用\\(\text{L'hôpital}\\)法则，或者令\\(x = t + 1\\)后再使用小\\(o\\)记号的性质，不过最精彩的做法实际上是做代换\\(x \rightarrow \frac{1}{x}\\)，则上式化为
$$
\lim_{x \rightarrow 1} (\frac{mx^m}{x^m - 1} - \frac{nx^n}{x^n - 1})
$$

结果与原式相同，那么，我们直接将其与原式相加，便得到答案为\\(\frac{m - n}{2}\\)

(15) 取对数后直接使用\\(\text{L'hôpital}\\)法则即可，答案为\\(\sqrt{ab}\\)
> 上式便是著名的（关于\\(a,b\\)的）\\(x\\)次幂平均，上面的结果表明几何平均就是\\(0\\)次幂平均

(16) 令 \\(t = \frac{1}{x}\\)，利用等价无穷小 \\((1+x)^{\alpha} \sim 1 + \alpha x\\)  即可。

(17) 令 \\(t = \sqrt{1 + x^2} + x\\)，则上式转化为
$$
\lim_{t \rightarrow 1} 2 \frac{t^n - \frac{1}{t^n}}{t - \frac{1}{t}} = 2n
$$

(18) 典型的\\(1^{\infty}\\)极限。

把 \\(\sin x\\) 拆成 \\(1 + \sin x -1 \\)，则我们相当于要求 \\(\lim_{x \rightarrow \frac{\pi}{2}} (\sin x - 1) \tan x\\)。

利用万能公式代换，我们可以算的以上极限为\\(0\\)，故原式的极限为\\(1\\)。

(20) 我们有：
$$
\lim_{x \rightarrow \infty} \frac{\sqrt{x + \sqrt{x}}}{\sqrt{x}} = \lim_{x \rightarrow \infty} \sqrt{1 + \frac{\sqrt{x}}{x}} = 1
$$

故直接代换，我们只需要考察
$$
\lim_{x \rightarrow \infty} = x^{\frac{1}{2} - \alpha}
$$

即可。

(21) 与(20)同理，最后的结果是
$$
\lim_{x \rightarrow \infty} = x^{\frac{1}{8} - \alpha}
$$

### 问题E 

在作业3 A7)中构造的\\(\text{Riemman}\\)函数显然是符合这个条件的。又因为 \\(A\\) 和 \\(\mathbb{Q}\\) 都是可数集，我们必然能够找到\\(f: A \rightarrow \mathbb{Q}\\) 的一个映射，将其与\\(\text{Riemman}\\)函数复合即可。

### 问题F

构造函数\\(g(x) = f(x) - x\\)，由 \\(g(0) \ge 0\\) 并且 \\(f(0) \le 0\\)，根据介值定理，\\(g(x)\\)必定有零点，故\\(f\\)必定有不动点。

### 问题G

我不会，参见[知乎上一位巨佬的解答](https://www.zhihu.com/question/590561006)。

## 作业5：有无穷多素数的拓扑证明

### 习题A：连续，一致连续和一致收敛

A1) 如果\\(e^x\\)在\\(I\\)上一致连续，那么\\(\forall \varepsilon > 0\\)，存在\\(\delta > 0\\)，使得对于\\(\forall x < y \in I\\)，只要\\(|x - y| < \delta\\)，就有\\(|e^x - e^y| < \varepsilon\\)。
而我们有
$$
e^y - e^x = e^x (e^{y - x} - 1) 
$$

若此时\\(I = \mathbb{R}\\)，\\(e^x\\)无界，故不可能一致连续。

如果此时\\(I = (-\infty,0]\\)，我们有
$$
e^y - e^x = e^x (e^{y - x} - 1) \le e^{y - x} - 1 
$$

我们只需要取\\(\delta = \ln (\varepsilon + 1)\\)即可。

A2) 幂函数可以看成指数函数和对数函数的复合，于是显然

A3) 直接套指数函数和对数函数的性质就行了

A4) 我们考虑
$$
\lim_{n \rightarrow \infty} \sup_{x \in I} |f_n(x) - 0| = \lim_{n \rightarrow \infty} \sup_{x \in I} |x^n|
$$

如果\\(I = [0,a]\\)，则根据单调性，上式即为
$$
\lim_{n \rightarrow \infty} a^n = 0
$$

如果\\(I = [0,1)\\)，我们证明：\\(\forall n >0\\)，有
$$
\sup_{x \in I} x^n = 1
$$

我们只需要对于\\(\forall \varepsilon > 0\\)，找到一个\\(x_0 \in I\\)，使得\\(x_0^n > 1 - \varepsilon\\)，即\\(x_0 > \sqrt[n]{1 - \varepsilon}\\)，得证。

因此，上述极限值就为\\(1\\)，函数列并不一致收敛。

A5) 逐点收敛性是显然的，但我们有\\(f(\frac{1}{n}) = \frac{1}{2}\\)，故并不一致收敛。

A6) 逐点收敛性是显然的，下面我们证明\\(f\\)一致收敛到\\(x\\)：

\\(x > 0\\)时，我们有
$$
|f_n(x) - x| = \frac{x}{1+nx} = \frac{1}{\frac{1}{x} + n} < \frac{1}{n}
$$

\\(n\\)充分大即可。

\\(x < 0\\)的情况是类似的。

A7) 与A5)类似的方法，这是显然的

A8) 不表，讲义后面会详细介绍\\(\text{Riemman}\\)和。

A9) 设右式的极限值为\\(A\\)，则对于\\(\forall \varepsilon > 0\\)，当\\(x \ge M\\)时，我们有
$$
|f(x+1) - f(x)| < \varepsilon
$$

也就是说
$$
|f(x_0+n) - f(x_0)| < n\varepsilon
$$

其中\\(x_0\\)从\\([M,\infty]\\)中任取且确定，\\(n\\)是任意正整数。

于是我们便有
$$
\frac{|f(x_0+n) - f(x_0)|}{x_0 + n} < \frac{n}{x_0 + n}\varepsilon < \varepsilon
$$

于是
$$
\frac{|f(x_0 + n)|}{x_0 + n} \le \frac{|f(x_0+n) - f(x_0)|}{x_0 + n} + \frac{|f(x_0)|}{x_0+n} < \varepsilon + \frac{|f(x_0)|}{x_0+n}
$$

使\\(n\\)充分大即可。

> 这可以被视作\\(\text{Stolz}\\)定理在函数上的一个推广，我们的证明方式也是模仿\\(\text{Stolz}\\)定理的证明

### 习题B / C

暂时略去，有空再补。

### 习题D

D1) 由于函数 \\(f\\) 有界，
对任意 \\(\\varepsilon > 0\\)，
我们可以将值域划分为有限个长度不超过 \\(\\varepsilon\\) 的区间。
由于 \\(f\\) 单调，
这些值域区间在定义域中对应为一组互不相交的区间，
从而得到定义域上的一个划分。

设这些定义域区间的长度集合为
\\[
X = \\{ \\Delta x_i \\},
\\]
其中每个 \\(\\Delta x_i\\) 对应函数值变化不超过 \\(\\varepsilon\\)。

若 \\(|x - y| < \\delta\\)，
并且 \\(\\delta \\le 2 \\inf X\\)，
则 \\(x\\) 与 \\(y\\) 至多落在相邻的两个划分区间中，
由单调性可知
\\[
|f(x) - f(y)| < \\varepsilon.
\\]

因此，只需证明
\\[
\\inf X > 0.
\\]

下面使用反证法。
若 \\(\\inf X = 0\\)，
则集合 \\(X\\) 中存在一列 \\(\\{\\Delta x_n\\}\\)，
使得
\\[
\\Delta x_n \\to 0.
\\]

于是对任意 \\(\\epsilon > 0\\)，
存在无限多个区间长度 \\(\\Delta x_n < \\epsilon\\)。
而每一个这样的区间，
都会对应函数值至少变化 \\(\\varepsilon\\)。

由于这些区间两两不交，
且数量无限，
函数值的累计变化将无界，
从而推出 \\(f\\) 在定义域上无界。

这与 \\(f\\) 有界的假设矛盾。
因此，
\\[
\\inf X > 0,
\\]
从而 \\(f\\) 在定义域上是一致连续的。


D2) 必要性：

我们首先证明一个常用结论：

> 有限区间 \\(I\\) 上的一致连续函数 \\(f\\) 必定有界。

若 \\(I\\) 为闭区间，则由闭区间最大最小值定理结论立刻成立。

下面讨论 \\(I\\) 为开区间（一开一闭的情形完全类似）。
设
\\[
I = (a,b).
\\]

由于 \\(f\\) 在 \\(I\\) 上一致连续，
取 \\(\\varepsilon = 1\\)，
存在 \\(\\delta > 0\\)，
使得当 \\(|x - y| < \\delta\\) 时，
有
\\[
|f(x) - f(y)| < 1.
\\]

固定一点 \\(x_0 \\in (a,b)\\)，
由于 \\([x_0 - \\delta, x_0 + \\delta] \\cap I\\) 为闭区间，
函数 \\(f\\) 在该区间上有界，设其值域被 \\([-M,M]\\) 所包含。

对任意 \\(x \\in I\\)，
可以用有限个长度小于 \\(\\delta\\) 的区间将 \\([x_0,x]\\) 覆盖，
由一致连续性反复应用上式，
即可得到 \\(|f(x)|\\) 受同一常数控制。
因此 \\(f\\) 在 \\(I\\) 上有界。

此外，由一致连续性还可推出，
\\(f\\) 在端点处存在单侧极限，
即
\\[
\\lim_{x \\to a^{+}} f(x), \\qquad \\lim_{x \\to b^{-}} f(x)
\\]
均存在。

于是可在端点处补充定义
\\[
f(a) = \\lim_{x \\to a^{+}} f(x), 
\\qquad
f(b) = \\lim_{x \\to b^{-}} f(x),
\\]
从而将 \\(f\\) 延拓为闭区间 \\([a,b]\\) 上的连续函数。

下面设 \\(\\{x_i\\} \\subset I\\) 为任意一个 \\(\\text{Cauchy}\\) 列。
由于 \\([a,b]\\) 为闭集，
\\(\\{x_i\\}\\) 的极限必定属于 \\([a,b]\\)。
由一致连续性的定义，
对应的函数值序列 \\(\\{f(x_i)\\}\\) 亦为 \\(\\text{Cauchy}\\) 列。

（事实上，这一步可以直接由一致连续的定义验证，
无需借助连续性。）

---

充分性：

根据题设条件，
若 \\(\\{x_i\\} \\to a\\)，
则对应的 \\(\\{f(x_i)\\}\\) 必定收敛，
从而在端点处可同样补充定义，
使 \\(f\\) 延拓为闭区间上的函数。

此外，由条件亦可推出 \\(f\\) 在 \\(I\\) 上有界。
于是，\\(f\\) 可以视为定义在闭区间上的连续函数，
根据 Heine 定理，
\\(f\\) 在 \\(I\\) 上必定一致连续。

D3) 由于 \\(f\\) 一致连续，
取 \\(\\varepsilon = 1\\)，
则存在 \\(\\delta > 0\\)，
使得当 \\(|x - y| < \\delta\\) 时，
有
\\[
|f(x) - f(y)| < 1.
\\]

不妨设 \\(b = a + n\\delta\\)，其中 \\(n \\in \\mathbb{N}\\)。
由三角不等式，
\\[
\\begin{aligned}
|f(b) - f(a)|
&\\le |f(b) - f(b - \\delta)|
   + |f(b - \\delta) - f(b - 2\\delta)| + \\cdots
   + |f(a + \\delta) - f(a)| \\\\
&\\le n.
\\end{aligned}
\\]

对任意 \\(x \\in I\\)，
存在整数 \\(m\\)，使得
\\[
m\\delta \\le x < (m + 1)\\delta.
\\]

于是由一致连续性，
\\[
|f(x) - f(m\\delta)| < 1.
\\]

同理，由上一步的估计，
\\[
|f(m\\delta) - f(0)| \\le |m|.
\\]

因此由三角不等式，
\\[
|f(x) - f(0)| \\le 1 + |m|.
\\]

注意到 \\(|m| \\le \\frac{|x|}{\\delta} + 1\\)，
于是
\\[
\\begin{aligned}
|f(x)|
&\\le |f(x) - f(0)| + |f(0)| \\\\
&\\le 2 + |f(0)| + \\frac{|x|}{\\delta}.
\\end{aligned}
\\]

因此存在常数 \\(a,b > 0\\)，
使得对所有 \\(x\\)，
\\[
|f(x)| \\le a|x| + b,
\\]
其中可以取
\\[
a = \\delta^{-1}, \\qquad b = 2 + |f(0)|.
\\]


D4) 对任意 \\(\\varepsilon > 0\\)，
由 \\(f\\) 的一致连续性，
存在 \\(\\delta > 0\\)，
使得当 \\(|x - y| < \\delta\\) 时，
有
\\[
|f(x) - f(y)| < \\frac{1}{3}\\varepsilon.
\\]

将区间 \\([0,1]\\) 划分为有限个长度不超过 \\(\\delta\\) 的子区间
\\[
[k\\delta, (k+1)\\delta].
\\]
在每个子区间中任取一点 \\(x_k\\)。

根据题设条件，
对每个 \\(x_k\\)，
存在整数 \\(n_k\\)，
使得当 \\(n > n_k\\) 时，
有
\\[
|f(x_k + n)| < \\frac{2}{3}\\varepsilon.
\\]

令
\\[
n = \\max \\{ n_k \\},
\\]
由于区间数有限，故 \\(n < +\\infty\\)。

现在任取 \\(x > n\\)，
存在整数 \\(n'\\) 及某个 \\(k\\)，
使得
\\[
n' + k\\delta \\le x < n' + (k+1)\\delta.
\\]

于是由一致连续性，
\\[
|f(x) - f(n' + x_k)| < \\frac{1}{3}\\varepsilon,
\\]
而由 \\(n' \\ge n\\) 的选取，
\\[
|f(n' + x_k)| < \\frac{2}{3}\\varepsilon.
\\]

因此
\\[
\\begin{aligned}
|f(x)|
&\\le |f(x) - f(n' + x_k)| + |f(n' + x_k)| \\\\
&< \\frac{1}{3}\\varepsilon + \\frac{2}{3}\\varepsilon \\\\
&= \\varepsilon.
\\end{aligned}
\\]

这就证明了
\\[
\\lim_{x \\to +\\infty} f(x) = 0.
\\]


> 需要注意的是，
若仅假设 \\(f\\) 连续而非一致连续，
则当函数在无穷远处振幅增长过快时，
上述结论不再成立。


D5)
(a) 对于任意的 \\(\varepsilon > 0\\) ，当 \\(|f(x) - f(y)| < \varepsilon\\) 时，只需要取\\(\delta = \frac{\varepsilon}{L}\\)即可。

(b) \\(f(x) = \sqrt{x}\\) 在 \\([0,1]\\) 上一致连续，但是
$$
\frac{f(x) - f(y)}{x - y} = \frac{\sqrt{x} - \sqrt{y}}{x - y} = \frac{1}{\sqrt{x} + \sqrt{y}}
$$

显然不满足\\(\text{Lipschitz}\\)条件。

(c) 
由于\\(f\\)满足\\(\text{Lipschitz}\\)条件，因此，\\(f\\)必定一致连续。

由D3)，我们能够找到一个一次函数，使得
$$
|f(x)| \le a|x| + b
$$

即
$$
|\frac{f(x)}{x}| \le a + \frac{b}{|x|} \le a + \frac{b}{|a|}
$$

于是，我们就有

$$
\begin{aligned}
|\frac{\frac{f(x)}{x} - \frac{f(y)}{y}}{x - y}| &= |\frac{yf(x) - xf(y)}{xy(x - y)}| \\
&\le |\frac{yf(x) - yf(y)}{xy(x - y)}| + |\frac{(y - x)f(y)}{xy(x - y)}| \\
&= |\frac{f(x) - f(y)}{x(x - y)}| + |\frac{f(y)}{xy}| \\
&\le |\frac{L}{x}| + |\frac{f(y)}{xy}| \\
&\le \frac{1}{|a|} (|L| + \frac{f(y)}{y}) \\
&\le \frac{1}{|a|} (|L| + a + \frac{b}{|a|})
\end{aligned}
$$

因此，\\(\frac{f(x)}{x}\\)满足\\(\text{Lipschitz}\\)条件，所以 \\(\frac{f(x)}{x}\\) 一致收敛。

> 根据上面的习题，我们可以看出，\\(\text{Lipschitz}\\)条件是较一致连续更强的一个光滑性条件。

### 习题E

与上一次作业相同，此处略去

### 习题F 计算极限

F1) 作变量代换\\(x \rightarrow t + \pi\\)，分类使用等价无穷小即可，答案为 \\((-1)^{m - n}\frac{m}{n}\\)

F2) 利用两个等价无穷小
$$
\cos x \sim 1 - \frac{1}{2}x^2 \\
(1 + x)^{\alpha} \sim 1 + \alpha x
$$

即可，答案为\\(3\\)

F3) 利用和差化积公式即可，答案为\\(0\\)

F4) 再用等价无穷小即可，答案为\\(\frac{1}{2}\\)

F5) 答案为0

### 问题G

据说要用\\(\text{Baire}\\)纲定理，等我补完再说。

Mathoverstack上有一个[解法](https://math.stackexchange.com/questions/2570173/does-lim-n-rightarrow-inftyf-leftnx-right-0-quad-forall-x0-imply-lim)，供大家参考。

### 问题H

设\\(\varphi\\)的不动点为\\(a_1,a_2 \dots a_m\\)。

我们称数列\\(\{x_n\}\\)为正链，如果\\(x_{n + 1} = \varphi(x_n)\\)；称其为反链，如果\\(x_{n + 1} \in \varphi^{-1}(x_n)\\)。

由于\\(f \circ \varphi = f\\)，一条链中所有元素的函数值都是相同的。因此，我们可以看到，\\(f\\)在很多点处的值都是相同的。我们能不能用许多链来“拼”出\\(f\\)呢？

受此启发，我们证明如下引理：

> 对于任意的\\(x \in \mathbb{R}\\)，存在正链或者反链\\(\{x_n\}\\)，使得\\(x_1 = x\\)，并且\\(\{x_n\}\\)收敛到某一个不动点\\(a_k\\)

如果\\(x = a_k(k = 1,2,\dots,m)\\)，则平凡。下面设\\(x \not= a_k\\)。我们需要分情况讨论。

如果\\(x > a_m\\)，由于\\(a_m\\)是最后一个不动点，结合第一个条件，对于任意的\\(y > a_m\\)，我们必定有\\(\varphi(y) > y\\)（否则，根据介值定理，必然在\\(a_m\\)后还存在一个不动点）。

因此，根据介值定理，我们必定能够找到\\(x' \in (a_m, x)\\)，使得\\(\varphi(x') = x\\)。令\\(x_1  = x\\)，反复迭代以上操作，我们便构建了反链\\(\{x_n\}\\)。根据单调有界定理，极限必然存在，设其为\\(A\\)。根据以上构造，我们事实上有 \\(x_n = \varphi(x_{n + 1})\\)。对等式两边取极限，再利用 \\(\varphi\\) 的连续性，我们就有
$$
\lim_{n \rightarrow + \infty} x_n = \lim_{n \rightarrow + \infty} \varphi(x_{n + 1}) = \varphi(\lim_{n \rightarrow + \infty} x_{n + 1})
$$

即
$$
A = \varphi(A)
$$

再结合\\(a_m\\)必定为\\(\{x_n\}\\)的一个上界，我们便知道\\(A = a_m\\)，即该反链收敛于\\(a_m\\)。

如果\\(a_k < x < a_{k + 1}\\)，这时候，我们又可以分出两种小情况：

如果此时我们有\\(\varphi(y) > y\\)，则我们便可以构造正链\\(\{x_n\}\\)，其中\\(x_1 = x\\)，\\(x_{n + 1} = \varphi(x_n)\\)。类似地，再次根据单调有界定理，这条正链收敛于\\(a_{k + 1}\\)

如果此时我们有\\(\varphi(y) < y\\)，则我们便可以构造反链\\(\{x_n\}\\)，构造方式类似于\\(x > a_m\\)的情况。类似地，我们可以证明，这条反链收敛于\\(a_k\\)。

引理证毕。

根据引理，对于任意\\(x \in \mathbb{R}\\)，都能构造出一条链\\(\{x_n\}\\)收敛到某个不动点\\(a_k\\)。因此，我们有\\(f(x) = f(a_k)\\)。

所以，我们有\\(f(x) = \{a_1, a_2, \dots, a_m\}\\)。所以，\\(f\\)为取值有限的连续函数，故\\(f\\)为常值函数。（取值有限的连续函数必定为常值函数，通过介值定理就很容易得到证明）

> 可以看出，构造这种“链”对于解决不动点问题是一个很有效的方式

### 问题I

前排吐槽：这个跟前面两题简直不是一个难度的东西。。。

如果\\(\{a_n\}\\)有界，则根据连续性，我们必定有 \\(f(a_n)\\) 有界，这就立刻得到了结论。

如果\\(\{a_n\}\\)无界，通过选取子列，我们不妨设\\(a_n \rightarrow + \infty\\)。此时，我们有
$$
\lim_{n \rightarrow + \infty} \frac{f(a_n)}{n} = \lim_{n \rightarrow + \infty} \frac{f(a_n)}{a_n} \times \frac{a_n}{n}
$$

由于 \\(\{\frac{a_n}{n}\}\\) 有界，结合 \\(\lim_{x \rightarrow +\infty} \frac{f(x)}{x} = 0\\)，我们便知道以上极限为0。

### 课外补充：拓扑空间的定义

这并不是我学习的重点，故暂时省略。

## 期中考试：连续函数环的极大理想

### 题目A

粗略的看了一眼，都比较简单，我就不展开写了。

### 题目B

B1) 直接利用比较判别法即可。

B2) 根据二项式定理，此时我们有
$$
a_k^{*} = \frac{1}{2^k} \sum_{i = 0}^k C_n^i z^i = \frac{1}{2^k} (1 + z)^k
$$

故此时我们有
$$
|a_k^{*}| =  |\frac{1}{2^k} (1 + z)^k| = \frac{1}{2^k} |1 + z|^k = |\frac{1 + z}{2}|^k
$$

而我们又有
$$
|1 + z| \le 1 + |z| < 2
$$

所以原级数必定绝对收敛。

B3) 只需要将实部和虚部分开即可。

B4) 取\\(z = -2\\)，由\\(\text{Dirichlet}\\)判别法即知此时收敛。

B5) 根据 B2) 的估计，
若 \\(|z| = 1\\) 且 \\(z \\neq 1, -1\\)，
则在
\\[
|1 + z| \\le 1 + |z|
\\]
中三角不等式无法取等，
从而有
\\[
\\left| \\frac{1 + z}{2} \\right| < 1.
\\]

因此，
\\[
\\sum a_k^{*}
\\]
为绝对收敛级数，结论成立。


B6) 结论可由定义直接验证，过程平凡，略去。

B7) 由 B6) 的结论，
并注意到当 \\(n > q\\) 时，
级数中仅有有限项与 \\(n\\) 有关。

因此，对每一项分别取极限即可，
从而得到
\\[
\\lim_{n \\to +\\infty} a_n^{*} = 0.
\\]


B8) 由于
\\[
\\lim_{n \\to +\\infty} a_n = 0,
\\]
对任意 \\(\\varepsilon > 0\\)，
存在 \\(N_1\\)，
使得当 \\(n > N_1\\) 时，
有
\\[
|a_n| < \\frac{\\varepsilon}{2}.
\\]


于是，对于任意的\\(n > N_1\\)，我们有：

$$
\begin{aligned}
a_n^{*} = \frac{1}{2^n} \sum_{i = 0}^n C_n^i a_i &= \frac{1}{2^n} (\sum_{i = 0}^{N_1} C_n^i a_i + \sum_{i = N_1 + 1}^{n} C_n^i a_i) \\
&< \frac{1}{2^n} (\sum_{i = 0}^{N_1} C_n^i a_i + \sum_{i = N_1 + 1}^{n} C_n^i \varepsilon) \\
&< \frac{1}{2^n} (\sum_{i = 0}^{N_1} C_n^i a_i) + \varepsilon /2 
\end{aligned}
$$

取充分大 \\(n\\) 使 \\(\frac{1}{2^n} (\sum_{i = 0}^{N_1} C_n^i a_i) < \varepsilon / 2\\) 即可。

B9) 设\\(\lim_{n \rightarrow \infty} a_n = A\\)，令\\(b_n = a_n - A\\)，则\\(\lim_{n \rightarrow \infty} b_n = 0\\)。根据B8)，我们就有\\(\lim_{n \rightarrow \infty} b_n^* = 0\\)。

我们有
$$
\begin{aligned}
b_n^{*} &= \frac{1}{2^n} \sum_{i = 0}^n C_n^i b_i \\
&= \frac{1}{2^n} \sum_{i = 0}^n C_n^i (a_i - A) \\
&= \frac{1}{2^n} \sum_{i = 0}^n C_n^ia_i - A\frac{1}{2^n} \sum_{i = 0}^n  C_n^i \\
&= a_n^* - A
\end{aligned}
$$

两边同时取极限，我们就有
$$
\lim_{n \rightarrow +\infty} a_n^* = A = \lim_{n \rightarrow +\infty} a_n
$$

B10) 未必。取\\(a_k = (-1)^k\\)，根据二项式定理，我们必定有\\(a_n^* = 0\\)，而此时\\(\{a_n\}\\)并不收敛。

B11) 我们有
$$
\begin{aligned}
U_n &= 2^n S_n^* \\
&= 2^n \sum_{k = 0}^n a_k^* \\
&= 2^n \sum_{k = 0}^n \sum_{i = 0}^k \frac{1}{2^k} C_k^i a_i \\
&= \sum_{k = 0}^n 2^{n - k} \sum_{i = 0}^k  C_k^i a_i \\
\end{aligned}
$$

此时，我们令\\(b_i = C_k^i\\)。为了得到\\(S_k\\)，我们考虑使用\\(\text{Abel}\\)求和公式，则我们有：

$$
\begin{aligned}
 \sum_{i = 0}^k b_i a_i &= S_kb_k + \sum_{i = 0}^{k - 1}S_i(b_i - b_{i + 1}) \\
 &= S_k + \sum_{i = 0}^{k - 1}S_i( C_k^i - C_k^{i + 1})
\end{aligned} 
$$

则
$$
\begin{aligned}
 U_n &= \sum_{k = 0}^n 2^{n - k}(S_k + \sum_{i = 0}^{k - 1}S_i( C_k^i - C_k^{i + 1})) 
\end{aligned}
$$

考虑计算\\(S_i\\)前的系数，我们便有
$$
\begin{aligned}
 U_n &= \sum_{i = 0}^n (2^{n - i} + \sum_{k = i + 1}^n 2^{n - k}(C_k^i - C_k^{i + 1}))S_i \\ 
 &= \sum_{i = 0}^n (2^{n - i} + \sum_{k = i + 1}^{n - 1} 2^{n - k}(C_k^i - C_{k + 1}^{i + 1}) + C_n^i - 2^{n - i - 1})S_i \\ 
 &= \sum_{i = 0}^n (2^{n - i - 1} + C_n^i - \sum_{k = i + 1}^{n - 1} 2^{n - k} C_k^{i + 1})S_i \\ 
  &= \sum_{i = 0}^n (C_n^i - \sum_{k = i + 2}^{n - 1} 2^{n - k} C_k^{i + 1})S_i \\ 
\end{aligned}
$$

因此，我们只需要证明
$$
\sum_{k = i + 2}^n 2^{n - k} C_k ^{i + 1} = 0
$$

我们再次考虑使用\\(\text{Abel}\\)求和公式：
$$
\begin{aligned}
\sum_{k = i + 2}^n 2^{n - k} C_k ^{i + 1} &= 2^n \sum_{k = i + 2}^n \frac{1}{2^k} C_k ^{i + 1} \\
&= 2^n \sum_{k = 1}^{n - i - 1} \frac{1}{2^{i + 1 + k}} C_{i + 1 +k} ^{i + 1} \\
&= 2^n (\frac{1}{2^n}C_{n + 1}^{i + 2} + \sum_{k = 1}^{n - i - 2} \frac{1}{2^{i + k +2}} (C_{i + 2 + k}^{i + 2} - 1))\\
&= 2^n (\frac{1}{2^n}C_{n + 1}^{i + 2} - \frac{1}{2^{i + 1}} + \frac{1}{2^{n}} + \sum_{k = 1}^{n - i - 2} \frac{1}{2^{i + k +2}} C_{i + 2 + k}^{i + 2})
\end{aligned} 
$$

此时，我们得到了相同的结构的一个递推关系式，将后面展开，代入初始的条件，我们便可以算的上式的值为\\(0\\)

B12) 

我们有
$$
\begin{aligned}
S_n^* = \frac{1}{2^n}U_n &= \frac{1}{2^n}\sum_{k = 0}^n C_{n + 1}^{k + 1} S_k \\ &= \frac{1}{2^n}\sum_{k = 0}^n (C_{n}^{k} + C_n^{k + 1}) S_k  \\ &= \frac{1}{2^n}\sum_{k = 0}^n C_{n}^{k} S_k + \frac{1}{2} \times \frac{1}{2^{n - 1}}\sum_{k = 0}^{n - 1} C_{n}^{k} S_k - \frac{1}{2^n} \sum_{k = 0}^n S_k
\end{aligned}
$$

两边同时取极限。根据B8)，前两项必然收敛。对于最后一项，我们考虑使用\\(\text{Abel}\\)求和：
$$
\begin{aligned}
\frac{1}{2^n}\sum_{k = 0}^n S_k = \frac{S_n}{2^n}- \sum_{k = 0}^{n - 1} \frac{k + 1}{2^n} S_k
\end{aligned}
$$

对于上式的前一项，由于\\(\{S_n\}\\)收敛，故\\(\{S_n\}\\)有界，又因为\\(\{\frac{1}{2^n}\}\\)收敛于\\(0\\)，因此该项必定收敛于\\(0\\)。

对于上式的后一项，因为 \\(\sum_{k = 0}^{n-1}\frac{k + 1}{2^n} = \frac{n(n+1)}{2^{n + 1}}\\) 极限值为零，且\\(\{S_k\}\\)收敛，因此，根据\\(\text{Abel}\\)判别法，上式必定收敛。

综上，我们就得到了\\(\{S_n^*\}\\)必定收敛。

> 可以看到，\\(\text{Abel}\\)求和在解决上一道题目中发挥了巨大的作用。

> 该公式有什么应用呢？以下是GPT-4给出的答案（翻译之后的版本）：
>
> 平滑：该公式可用于通过找到其项的加权平均值来平滑给定序列。 这在信号处理或时间序列分析等应用中非常有用，在这些应用中降噪是一个共同的目标。
>
>离散卷积：公式可以用来对原始序列\\(a_n\\)和一个二项式序列进行离散卷积，在图像处理、计算机视觉、统计分析等各个领域都有用处。
>
>逼近连续函数：该公式可用于通过在离散样本之间进行插值来逼近连续函数。 这在数值分析和模拟技术中特别有用，在这些技术中需要对连续函数进行精确近似。
>
>多项式插值：该公式可用于对给定序列进行多项式插值，可用于曲线拟合和函数逼近应用。

### 题目C：\\(C([a,b])\\)的极大理想

C1) 平凡。显然有
\\[
I([a,b]) = \\{0\\}.
\\]

C2) 若 \\(1 \\in I\\)，
则对任意 \\(f \\in C([a,b])\\)，
有
\\[
f = f \\cdot 1 \\in I,
\\]
从而 \\(I = C([a,b])\\)，
与 \\(I\\) 为真理想矛盾。

若 \\(f \\in I\\) 在 \\([a,b]\\) 上无零点，
则 \\(f\\) 在 \\([a,b]\\) 上处处非零，
从而存在连续函数 \\(g = f^{-1}\\)，
使得
\\[
f \\cdot g = 1,
\\]
再次推出 \\(1 \\in I\\)，矛盾。

因此，\\(I\\) 中的任一函数必定在 \\([a,b]\\) 上有零点。

C3) 设
\\[
V(f) = \\{x \\in [a,b] \\mid f(x) = 0\\}.
\\]

只需证明
\\[
A = \\{x \\in [a,b] \\mid f(x) \\neq 0\\}
\\]
为开集。

任取 \\(x \\in A\\)，
由连续函数的保号性，
存在 \\(\\delta > 0\\)，
使得
\\[
(x-\\delta, x+\\delta) \\subset A.
\\]
因此 \\(A\\) 为开集，从而 \\(V(f)\\) 为闭集。

再设
\\[
V(I) = \\bigcap_{f \\in I} V(f).
\\]
等价地，
\\[
[a,b] \\setminus V(I)
= \\{x \\in [a,b] \\mid \\exists f \\in I,\\ f(x) \\neq 0\\}.
\\]

同理可证该集合为开集，
因此 \\(V(I)\\) 为闭集。


\\(I = \{0\}\\)。

C4) 结论由定义直接得到，过程平凡，略去。

C5) 设 \\(\\mathfrak{m}\\) 为 \\(C([a,b])\\) 的极大理想。

对任意 \\(f \\in C([a,b])\\)，
记
\\[
W(f) = \\{x \\in [a,b] \\mid f(x) \\neq 0\\}
= [a,b] \\setminus V(f),
\\]
显然 \\(W(f)\\) 为开集。

考虑开集族
\\[
\\mathcal{U}(\\mathfrak{m})
= \\bigcup_{f \\in \\mathfrak{m}} W(f).
\\]

若 \\(\\mathcal{U}(\\mathfrak{m}) \\neq [a,b]\\)，
则存在 \\(c \\in [a,b]\\)，
使得对任意 \\(f \\in \\mathfrak{m}\\)，
均有 \\(f(c) = 0\\)，
即
\\[
V(\\mathfrak{m}) = \\{c\\},
\\]
结论成立。

若 \\(\\mathcal{U}(\\mathfrak{m})\\) 为 \\([a,b]\\) 的开覆盖，
由于 \\([a,b]\\) 紧，
存在有限子覆盖
\\[
\\mathcal{V} = \\{W(f_1), \\dots, W(f_n)\\},
\\qquad f_i \\in \\mathfrak{m}.
\\]

设
\\[
F = f_1^2 + f_2^2 + \\cdots + f_n^2.
\\]
则 \\(F \\in \\mathfrak{m}\\)，
且对任意 \\(x \\in [a,b]\\)，
至少存在一个 \\(f_i(x) \\neq 0\\)，
从而
\\[
F(x) > 0.
\\]

因此 \\(F\\) 在 \\([a,b]\\) 上处处非零，
存在连续函数 \\(G = F^{-1}\\)，
使得
\\[
F \\cdot G = 1.
\\]
这与 \\(\\mathfrak{m}\\) 为真理想矛盾。

故只能是第一种情形，
即存在唯一一点 \\(c \\in [a,b]\\)，
使得
\\[
\\mathfrak{m}
= \\{f \\in C([a,b]) \\mid f(c) = 0\\}.
\\]


C6) 由上述结论直接验证即可。

## 作业6：高木贞治函数

ipad上已做，这部分也没有很难的习题，我就不发在博客上了。

\\(\text{Tagaki}\\) 函数的性质不是我学习的重点，故在此跳过。

## 作业7：\\(\text{Émile Borel}\\) 引理

### 习题A：中值定理和\\(\text{Talyor}\\)展开

ipad上已经证明。注意运用\\(\text{Lagrange}\\)余项的\\(\text{Talyor}\\)展开。

### 习题B/C/D

平凡。

### 习题E

E1) 如果\\(P_n(x)\\)有重根，则根据函数求导的\\(\text{Lebniz}\\)公式，这些重根必定为\\(P_n'(x)\\)的根。

剩下的根记为\\(b_1, b_2, \dots, b_m\\)。根据 \\(\text{Rolle}\\) 中值定理，必定存在\\(c_i \in (b_i, b_{i + 1})\\)，使得
$$
f'(c_i) = 0
$$

故\\(P_n(x)\\)的导数的零点必定为实数。

E2) 记\\(P(x) = (x^2 - 1)^{n}\\)。
则\\(P\\)的根为\\(\{-1,1\}\\)，根据E1)，我们便得到了结论。

E3) 
我们先证明一个引理：
> 如果存在 \\(a,b \in R \cup \{-\infty, +\infty\}, a< b\\)，使得\\(f^{(k)}(a) = f^{(k)}(b) = 0\\) 对于\\(k = 0,1,\dots, n - 1\\)成立，那么\\(f^{(n)}\\)在\\((a,b)\\)有至少\\(n\\)个不同的零点。

对于\\(k = 0\\)的情况，由A4)的推广\\(\text{Rolle}\\)定理，我们必定能找到一个导数的零点。

\\(k \le 1\\) 时，利用归纳假设，反复在零点之间运用A4)的结论，引理就得到了证明。

根据引理，如果我们能够得到
$$
\lim_{x \rightarrow a^{+}} f^{(k)}(x) = \lim_{x \rightarrow b^{-}} f^{(k)}(x) = 0
$$
对于任意的\\(k = 0,1,\dots,n-1\\)成立，我们就立刻得到结论。

根据\\(\text{Lebniz}\\)公式，我们有
$$
f^k(x) = \sum_{j = 0}^k C_k^j \frac{n!}{(n - j)!} x^{n - j} (-1)^{k - j}e^{-x}
$$

显然，我们有
$$
f^k(0) = 0
$$
$$
\lim_{x \rightarrow +\infty} f^{(k)}(x) = 0
$$

于是得证。

E4) 我们有递推式
$$
H_{n + 1}(x) = 2x H_n(x) - H_n'(x)
$$

边界条件
$$
H_0(x) = 1 \\
H_0'(x) = 0
$$

因此，\\(H_n\\)也一定是一个多项式。

设\\(H_n\\)的\\(n\\)个根为\\(x_1, x_2, \dots, x_n\\)。则它们也是
$$
\frac{d^n}{dx^n}(e^{-x^2}) = \frac{H_n(x)}{(-1)^n e^{x^2}}
$$
的根。

注意到
$$
\lim_{x \rightarrow - \infty} \frac{H_n(x)}{(-1)^n e^{x^2}} = \lim_{x \rightarrow + \infty} \frac{H_n(x)}{(-1)^n e^{x^2}} = 0
$$

考虑使用（螺旋）归纳法。显然，\\(H_1(x)\\) 具有一个实根。

对于\\(-\infty = x_0 < x_1 < x_2 < \dots < x_n < x_{n + 1} = +\infty\\)。再次根据A4)的推广的\\(\text{Rolle}\\)定理，我们便一定能找到 \\(\frac{d^{n + 1}}{dx^{n + 1}}(e^{-x^2})\\)的\\(n + 1\\)个实根，进而\\(H_{n+1}\\)也必定有\\(n + 1\\)实根。

> 我没有尝试直接对\\(e^{-x^2}\\)求\\(n\\)阶导数，感觉有点烦，所以换了一种做法。

### 习题F \\(\text{Émile Borel}\\) 定理

F1) 直接验证导数定义不难。

F2) 这就是连续函数的复合。后面的性质是不难验证的。

F3) 将F2)中公式的\\(2\\)改为\\(b\\)，\\(1\\)改为\\(a\\)即可。

F4) 令
\\[
\\phi(x) = \\mathcal{X}(|x|),
\\]
即可满足题设要求。


F5) 将函数项级数分拆为
\\[
f(x) = \\sum_{k = 0}^{N} f_k(x) + \\sum_{k = N + 1}^{\\infty} f_k(x).
\\]

对任意 \\(\\varepsilon > 0\\)，
由级数 \\(\\sum f_k'\\) 的一致收敛性及 \\(\\text{Cauchy}\\) 判别法，
存在 \\(N\\)，
使得
\\[
\\sum_{k = N + 1}^{\\infty} \\|f_k'\\|_{\\infty} < \\varepsilon.
\\]

对每个 \\(k \\le N\\)，
由导数定义，
存在 \\(\\delta_k > 0\\)，
使得当 \\(|x - x_0| < \\delta_k\\) 时，
有
\\[
\\left|
\\frac{f_k(x) - f_k(x_0)}{x - x_0} - f_k'(x_0)
\\right|
< \\frac{\\varepsilon}{N+1}.
\\]

取
\\[
\\delta = \\min_{k \\le N} \\delta_k,
\\]
则当 \\(|x - x_0| < \\delta\\) 时，
有
\\[
\\sum_{k = 0}^{N}
\\left|
\\frac{f_k(x) - f_k(x_0)}{x - x_0} - f_k'(x_0)
\\right|
< \\varepsilon.
\\]

考虑整体差值：
\\[
\\begin{aligned}
\\left|
\\frac{f(x) - f(x_0)}{x - x_0}
- \\sum_{k = 0}^{\\infty} f_k'(x_0)
\\right|
&\\le
\\sum_{k = 0}^{N}
\\left|
\\frac{f_k(x) - f_k(x_0)}{x - x_0} - f_k'(x_0)
\\right| \\\\
&\\quad +
\\sum_{k = N + 1}^{\\infty}
\\left|
\\frac{f_k(x) - f_k(x_0)}{x - x_0}
- f_k'(x_0)
\\right|.
\\end{aligned}
\\]

F6) 

upd：这道题的证明之前存在一些问题，现在已经更新

由于\\(\{f_k'\}\\)在\\(I\\)上一致收敛，因此，对于任意的\\(\varepsilon > 0\\)，我们有
$$
||\sum_{k = 0}^{+\infty} f_k'(x)||_{\infty} < \varepsilon
$$

我们只需对F5)中的证明稍加修改，即
$$
\begin{aligned}
|\sum_{k = N + 1}^{+ \infty}(\frac{ f_k(x) - f_k(x_0)}{x - x_0} - f_k'(x))| 
&= |\sum_{k = N + 1}^{+ \infty}(f_k'(\zeta_k) - f_k'(x))| \\
&\le  |\sum_{k = N + 1}^{+ \infty} f_k'(\zeta_k)| + ||\sum_{k = N + 1}^{+ \infty}f_k'(x)||_{\infty} \\
&\le 2||\sum_{k = N + 1}^{+ \infty}f_k'(x)||_{\infty} \\
&\le 2 \varepsilon
\end{aligned}
$$

即可。

> 这便是**逐项求导定理**。可以看到，在\\(\sum f_k\\)逐点收敛的情况下，\\(\sum f_k'\\)绝对收敛或者一致收敛，我们都能够逐项求导。

F7) 平凡。

F8)
有
$$
f_k(x) = \frac{a_k}{k!} x^k \mathcal{X}(t_kx)
$$
求导得
$$
f_k'(x) = \frac{a_k}{(k - 1)!} x^{k - 1} \mathcal{X}(t_kx) + t_k \frac{a_k}{k!} x^k \mathcal{X}'(t_kx)
$$

根据之前的命题，我们知道\\(\mathcal{X}\\)在\\(x = 0\\)处的任意阶导数为\\(0\\)，且\\(\mathcal{X}(0) = 1\\)

故
$$
f_k'(x) = \frac{a_k}{(k - 1)!} x^{k - 1} \mathcal{X}(t_kx)
$$

以此类推，我们便有
$$
f_k^{(n)} = \begin{cases}
0, &n < k \\
a_k, &n = k \\
0, &n > k
\end{cases}
$$

F9) 
考虑使用归纳法。

$$
\begin{aligned}
f_k^{(n + 1)} &= \frac{d}{dx} (a_k \sum_{l = 0}^n C_n^l \frac{t_k^{n - l}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l)}(t_k x)) \\
&=  (a_k \sum_{l = 0}^n C_n^l(\frac{t_k^{n - l}}{(k - l - 1)!} x^{k - l - 1} \mathcal{X}^{(n - l)}(t_k x) + \frac{t_k^{n - l + 1}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l + 1)}(t_k x)) )\\
&=  (a_k \sum_{l = 0}^n C_n^l\frac{t_k^{n - l}}{(k - l - 1)!} x^{k - l - 1} \mathcal{X}^{(n - l)}(t_k x) + \sum_{l = 0}^n C_n^l \frac{t_k^{n - l + 1}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l + 1)}(t_k x) )\\
&= a_k ( \sum_{l = 1}^{n + 1}C_n^{l - 1}\frac{t_k^{n + 1 - l}}{(k - l)!} x^{k - l} \mathcal{X}^{(n + 1 - l)}(t_k x) + \sum_{l = 0}^n C_n^l \frac{t_k^{n - l + 1}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l + 1)}(t_k x) )\\
&= a_k ( \sum_{l = 1}^{n + 1}C_n^{l - 1}\frac{t_k^{n + 1 - l}}{(k - l)!} x^{k - l} \mathcal{X}^{(n + 1 - l)}(t_k x) + \sum_{l = 0}^n C_n^l \frac{t_k^{n - l + 1}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l + 1)}(t_k x) )\\
&= a_k ( \sum_{l = 0}^{n + 1}C_{n + 1}^l \frac{t_k^{n + 1 - l}}{(k - l)!} x^{k - l} \mathcal{X}^{(n + 1 - l)}(t_k x) )
\end{aligned}
$$

边界条件是容易验证的。

F10) 
我们证明，
$$
f(x) = \sum_{k = 0}^{+\infty} f_k(x)
$$

如果我们可以对上面的函数项级数逐项求导的话，根据F8)，我们便立刻得到答案。

下面我们证明，函数项级数
$$
\sum_{k = 0}^{+\infty} f_k^{(n)}(x)
$$
在包含\\(0\\)的一个有界闭区间上绝对收敛，其中\\(n\\)为任意的一个正整数。

\\(k < 2n\\) 时，导数必定为\\(0\\)。\\(k \ge 2n\\)时，我们限制\\(|x| < 1 / t_k\\)，则根据F9)，我们就有
$$
\begin{aligned}
f_k^{(n)} &= a_k \sum_{l = 0}^n C_n^l \frac{t_k^{n - l}}{(k - l)!} x^{k - l} \mathcal{X}^{(n - l)}(t_k x) \\
&\le a_k \sum_{l = 0}^n C_n^l \frac{t_k^{n - k}}{(k - l)!} \mathcal{X}^{(n - l)}(t_k x)\\
\end{aligned}
$$

由于\\(\mathcal{X} \in C_{\infty}\\)，故\\(\mathcal{X}^{(l)}\\)在闭区间上必定有界，设\\(X_n = \sup_{l \le n} \mathcal{X}^{(l)}\\)。

而我们有
$$
\begin{aligned}
\sum_{l = 0}^n C_n^l \frac{1}{(k - l)!} &\le (\sum_{l = 0}^n C_n^l)(\sum_{l = 0}^n \frac{1}{(k - l)!}) \le 2^ne
\end{aligned}
$$

因此，我们有
$$
\begin{aligned}
\sum_{k = 0}^{\infty}||f_k^{(n)}(x)||_{\infty} &= \sum_{k = 2n}^{\infty}||f_k^{(n)}(x)||_{\infty} \\
&\le 2^n e X_n \sum_{k = 2n}^{\infty}  t_k^{n - k}
\end{aligned}
$$

取 \\(t_k = \frac{1}{2 X_n}\\) 即可。

剩下的习题讲义上注明（不交作业），我也不较真思考了，时间实在是有限。

## 作业8：\\(\text{Sturm-Louville}\\)理论的一个例子

### 基本习题：凸函数的研究

### 习题A

A1) A2) A3) 平凡。（直接代入凸函数的等价定义即可）

A4) 设 \\(c = ta + (1 - t)b\\)，令\\(M = \max \{f(a), f(b)\}\\)，则
$$
f(c) = f(ta + (1 - t)b) \le tf(s) + (1 - t)f(b) \le M(t + 1 - t) = M
$$

又有\\(f(c) \le M\\)，因此，\\(f(c) = M \\)。

如果\\(M = f(b)\\)，则根据凸函数的等价定义，我们有
$$
\frac{f(b) - f(a)}{b - a} \le \frac{f(b) - f(c)}{b - c} = 0
$$

故此时有\\(f(a) = f(b)\\)。

如果\\(M = f(a)\\)，则根据凸函数的等价定义，我们有
$$
\frac{f(b) - f(a)}{b - a} \ge \frac{f(c) - f(a)}{c - a} = 0 
$$

故此时亦有\\(f(a) = f(b)\\)。

设\\(f(d) = \sup_{x \in [a,b]} f(x)\\)。如果\\(f(d) > M\\)，则我们有
$$
\frac{f(d) - f(a)}{d - a} \le \frac{f(b) - f(a)}{b - a} \le \frac{f(b) - f(d)}{b - d} < 0
$$
但是\\(\frac{f(d) - f(a)}{d - a} > 0\\)，这就导出了矛盾，从而得证。

A5) 如果我们能够找到两点\\(a < b\\)，使得
$$
\frac{f(b) - f(a)}{b - a} > 0
$$
那么，对于任意的\\(x > b\\)，根据凸函数的定义，我们有
$$
\frac{f(b) - f(a)}{b - a} \le \frac{f(x) - f(a)}{x - a}
$$

即
$$
f(x) \ge \frac{f(b) - f(a)}{b - a}(x - a) + f(a)
$$

这与\\(f(x)\\)有界矛盾。

如果我们能够找到两点，使得
$$
\frac{f(b) - f(a)}{b - a} < 0
$$

类似地，我们能推出矛盾。

从而\\(f\\)必定是一个常值函数。

A6) 利用局部最小值的定义，结合凸函数的性质立刻得到。

A7) 
在A5)中，我们得到了
$$
f(x) \ge \frac{f(b) - f(a)}{b - a}(x - a) + f(a)
$$

让\\(b \rightarrow a\\)，式子就变为
$$
f(x) \ge f'(a)(x - a) + f(a)
$$

就得到了结论。

> 这便是高中数学竞赛中，证明不等式时常用的**切线法**。

### 习题B 凸函数与不等式

B1) 
(1) (3) 高中课内常见的不等式，直接利用导数证明即可。

(2) 这等价于
$$
(x^{\alpha} + y^{\alpha})^{\frac{\beta}{\alpha}} > (x^{\beta} + y^{\beta})
$$
由于\\(x^{\frac{\beta}{\alpha}}\\)是凸函数，我们直接利用\\(\text{Jensen}\\)不等式即可。

> 这便是著名的**幂平均不等式**。

(4) 直接求导即可（打公式太烦了，我不想写那么多了。。。）

B2) 高中题。取对数之后同构，求出\\(\frac{x}{\ln x}\\)的极值，答案为\\(e\\)

B3) 取对数，利用\\(f(x) = x \ln x\\)的凸性，直接利用\\(\text{Jensen}\\)不等式即可。

B4) B5) \\(\text{Young}\\) 不等式和 \\(\text{Holder}\\) 不等式都是利用 \\(\text{Jensen}\\) 不等式证明的，也是高中数学竞赛的基本内容，可以在网上查阅证明。

### 导数的性质和应用：复习
### 习题C

我们先做C3)

C3) 考虑任意一个闭区间\\([-c,c]\\)。我们令\\(M = \sup_{x \in [-c, c]} f^{(l)}(x)\\) (\\(f^{(l)}(x)\\)必定连续)，则我们有
$$
|f^{(n)}(x)| \le CM
$$

考虑使用反向归纳法。根据\\(\text{Lagrange}\\)中值定理，对于任意的\\(x \in [-c,c]\\)，存在\\(\zeta \in (0,x)\\)，使得
$$
\frac{f^{(n - 1)}(x)}{x} = f^{(n)}(\zeta) \le CM 
$$

则
$$
f^{(n - 1)}(x) \le CMc
$$

不断地向下归纳，我们就有\\(x \in [-c,c]\\)时，
$$
f^{(k)}(x) \le CMc^{n - k}
$$

代入\\(k = l\\)，我们就有
$$
f^{(l)}(x) \le CMc^{n - l}
$$

自然我们也有
$$
M \le CMc^{n - l}
$$

让\\(Cc^{n - l} < 1\\)，即\\(c < C^{\frac{-1}{n - l}}\\)时，我们便有\\(M = 0\\)。也就是说，对于任意的\\(x \in [-c,c]\\)，，对于\\(k = 0,1,2,\dots n\\)，我们都有
$$
f^{(k)}(x) = 0
$$

将函数分别向左和向右平移\\(c\\)，我们得到了同样的初始条件，因此，我们在\\([-2c,-c]\\)和\\([c,2c]\\)上也有一样的结论。

反复迭代下去，我们就有
$$
f(x) \equiv 0
$$

> 这道题是一个很好的样本，它向我们说明了以下几点：
>
> 1. \\(\text{Lagrange}\\)中值定理是沟通低阶导数和高阶导数不等关系的桥梁
> 2. 如果高阶导数被低阶导数限制，利用（闭区间上的）\\(\text{Lagrange}\\)中值定理，我们就很容易证明低阶导数是有界的。
> 3. 通过导数这样的局部性质，我们可以将局部“粘起来”，得到整体的性质。
>
> C3)的解题也为我们解决C组其他题目提供了一个范本。

C1) 
取\\(x = 0\\)，我们有
$$
|\lambda g'(0)| \le 0
$$

由于\\(\lambda \not= 0\\)，因此，\\(g'(0) = 0\\)

<!--
根据导数的定义，对于任意的\\(\varepsilon > 0\\)，存在\\(\delta > 0\\)，使得当\\(|x| \le \delta\\)时，我们有
$$
|\frac{g(x)}{x}| < \varepsilon
$$


即
$$
|g(x)| \le \varepsilon x
$$
-->

对题目中的不等式进行一些变形，我们得到：
$$
\lambda|g'(x)| - |g(x)f(x)| \le |g(x)|
$$


即
$$
|g'(x)|  \le \frac{|g(x)|(1 + |f(x)|)}{\lambda}
$$

设\\(\sup_{x \in [0,1]} f(x) = M\\)，则
$$
|g'(x)|  \le \frac{|g(x)|(1 + M)}{\lambda} = C |g(x)|
$$
其中\\(C = \frac{1 + M}{\lambda}\\)

根据C3)的结论，我们必定有\\(g(x) \equiv 0\\)

C2) 我们令\\(M = \sup_{x \in (-c,c)} f'(x)\\)，其中\\(c \in (0,1)\\)。根据\\(\text{Lagrange}\\)中值定理，对于任意的\\(x \in (-c,c)\\)，存在\\(\zeta\\)，使得
$$
\frac{f(x)}{x} = f'(\zeta) \le M
$$

也即
$$
|f(x)| \le|Mx| \le cM
$$

因此，我们有
$$
|f''(x)| \le (1 + c)M 
$$

再次根据\\(\text{Lagrange}\\)中值定理，对于任意的\\(x \in (-1,1)\\)，存在\\(\zeta\\)，使得
$$
\frac{f'(x)}{x} = f''(\zeta) \le (1 + c)M
$$

即
$$
|f'(x)|\le (1 + c) M|x| \le (1 + c)c M
$$

取\\(c = \frac{1}{2}\\)。类似地，我们就有\\(M = 0\\)，则\\(x \in (-c,c)\\)时，我们就有
$$
f'(x) \equiv 0
$$
$$
f''(x) \equiv 0
$$
$$
f(x) \equiv 0
$$

与C3)中类似的想法，我们可以扩展到\\((-1,1)\\)上。

C4) 这道题我们当然可以直接计算\\(x^k\\)之前的系数，不过，我们最好还是用上C3)的结论。

对\\(P(x)\\)求\\(n\\)阶导数，我们有

$$
P^{(n)}(x) = \sum_{k = 0}^{n + 1} C_{n + 1}^k (-1)^k \frac{d^n}{dx^n}((x - k)^n) = n!\sum_{k = 0}^{n + 1} C_{n + 1}^k (-1)^k  = 0
$$

对\\(P(x)\\)求\\(l\\)阶导数，我们有
$$
\begin{aligned}
P^{(l)}(x) &= \sum_{k = 0}^{n + 1} C_{n + 1}^k (-1)^k \frac{d^l}{dx^l}((x - k)^n) \\
&= n^{\underline{l}}\sum_{k = 0}^{n + 1} C_{n + 1}^k (-1)^k (x - k)^{n - l} \\
\end{aligned}
$$

代入\\(x = k\\)，我们有
$$
\begin{aligned}
P^{(l)}(k) &= 0
\end{aligned}
$$

根据C3)的结论，我们立刻得到了证明。

C5) 
(i) 利用\\(\text{Talyor}\\)展开的\\(\text{Peano}\\)余项公式直接得到

(ii) 

任取\\(x_0 \in I\\)。利用无穷\\(\text{Taylor}\\)级数，我们有
$$
f(x) = \sum_{k = 0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k
$$

因此，如果我们能够找到一点\\(x_0\\)，使得\\(f\\)在\\(x_0\\)处的任意阶导数为\\(0\\)，我们就得到了证明。

由于\\(E\\)是一个有界的无穷集，根据连续性，我们可以使得\\(E\\)为一个有界的闭集。

我们知道，在\\(\mathbb{R}\\)上，有界闭性等价于紧性等价于列紧性。因此，\\(E\\)必定存在聚点。

设\\(x_0\\)是\\(E\\)的一个聚点，即存在\\(\{x_n\} \subset E\\)使得\\(x_n \rightarrow x_0\\)，则根据连续性，我们有\\(f(x_0)\\)。

根据\\(\text{Rolle}\\)中值定理，\\(x_n\\)和\\(x_{n + 1}\\)也存在一点\\(y_n\\)，使得\\(f'(y_n) = 0\\)。

再由夹逼定理，我们知道\\(y_n \rightarrow x_0\\)，因此，根据连续性，我们有\\(f'(x_0) = 0\\)。

反复进行这样的操作，我们就证明了，\\(f\\)在\\(x_0\\)处的任意阶导数为\\(0\\)。

C6) 
由于\\(\lim_{x \rightarrow 1^{-}} f(x) = 0\\)且\\(f\\)在\\((0,1)\\)上连续，我们不妨补充定义\\(f(1) = 0\\)。

根据\\(\text{Lagrange}\\)中值定理，存在\\(\zeta \in (x,1)\\)，使得
$$
\frac{f'(x)}{x - 1} =  f''(\zeta)
$$

因此，我们有
$$
|\frac{f'(x)}{1 - x}| =  |f''(\zeta)|  \le \frac{C}{(1 - \zeta)^2}
$$

也即
$$
|f'(x)(1 - x)| \le C(\frac{1 - x}{1 - \zeta})^2
$$

因此，对于任意的\\(\varepsilon > 0\\)，我们只需要适当的选取\\(x\\)即可。

> C组习题充分的向我们展示了\\(\text{Lagrange}\\)中值定理的强大。

### 习题D/习题E

直接求导即可，不详细写了

### 习题F

F1) 直接求导，我们有
$$
g'(x) = \frac{f'(x)(x - x_0)^r - rf(x)(x - x_0)^{r - 1}}{(x - x_0)^{2r}} = \frac{f'(x)(x - x_0) - rf(x)}{(x - x_0)^{r + 1}}
$$

也就是说
$$
f'(x) = g'(x)(x - x_0)^r + \frac{rf(x)}{x - x_0}
$$

代入
$$
f(x) = g(x)(x - x_0)^r
$$

有
$$
f'(x) = g'(x)(x - x_0)^r + rg(x)(x - x_0)^{r - 1}
$$

也就是
$$
f'(x) = (x - x_0)^{r - 1}(g'(x)(x - x_0) + rg(x))
$$

\\(x = x_0\\)时，后面一项不为\\(0\\)。故根据定义，\\(x_0\\)必定为\\(f'(x)\\)的\\(r-1\\)-重根。

F2) 反复使用\\(\text{Rolle}\\)定理即可。

F3) F4) 根据F1) F2) 平凡。

### 习题G

G1) 这和作业7的A8)是一样的。我们只需要利用带\\(\text{Lagrange}\\)余项的\\(\text{Talyor}\\)公式即可。

G2) 不难验证。

G3) 在\\(\mathbb{R}^n\\)每一维上运用G1)的结论即可。

\\(\text{Sturm-Louville}\\)理论不是我学习的重点，大家可以在网上查阅相关的资料。

## 作业9：\\(\text{Dini}\\)定理，多项式逼近与\\(\text{Weierstrass-Stone}\\)定理

### 习题A

积分自然的在赋范线性空间上的推广，这里不再深究细节。

### 习题B

太多了，有空慢慢补。

### 习题W

W1)
不妨先考虑 \\(K \\subset \\mathbb{R}\\) 的情形。
若结论在 \\(\\mathbb{R}\\) 上成立，
则可自然推广到 \\(\\mathbb{R}^n\\)。

由于 \\(K\\) 紧，
根据 \\(\\text{Heine–Borel}\\) 定理，
\\(K\\) 为有界闭集。

又由于对每个 \\(n\\)，
\\(f_n \\in C(K)\\)，
且 \\(K\\) 紧，
因此 \\(\\{f_n\\}\\) 在 \\(K\\) 上一致连续；
同理，极限函数 \\(f\\) 亦在 \\(K\\) 上一致连续。

取任意 \\(\\varepsilon > 0\\)。
由一致连续性，
存在 \\(\\delta_1 > 0\\)，
使得当 \\(|x-y| < \\delta_1\\) 时，
对任意 \\(n\\) 有
\\[
|f_n(x) - f_n(y)| < \\frac{\\varepsilon}{3}.
\\]
同样存在 \\(\\delta_2 > 0\\)，
使得
\\[
|f(x) - f(y)| < \\frac{\\varepsilon}{3}.
\\]

令
\\[
\\delta = \\min\\{\\delta_1, \\delta_2\\}.
\\]

由于 \\(K\\) 有界，
可将 \\(K\\) 覆盖为有限个长度不超过 \\(\\delta\\) 的闭区间
\\[
K \\subset \\bigcup_{i=1}^m I_i,
\\]
其中 \\(m < +\\infty\\)。

对每个区间 \\(I_i\\)，
任选一点 \\(x_i \\in I_i \\cap K\\)。
由于 \\(f_n(x_i) \\to f(x_i)\\)，
存在 \\(N_i\\)，
使得当 \\(n \\ge N_i\\) 时，
\\[
|f_n(x_i) - f(x_i)| < \\frac{\\varepsilon}{3}.
\\]

令
\\[
N = \\max_{1 \\le i \\le m} N_i.
\\]

此时对任意 \\(x \\in K\\)，
设 \\(x \\in I_i\\)，
由三角不等式，
当 \\(n \\ge N\\) 时，
\\[
\\begin{aligned}
|f_n(x) - f(x)|
&\\le |f_n(x) - f_n(x_i)|
+ |f_n(x_i) - f(x_i)|
+ |f(x_i) - f(x)| \\\\
&< \\frac{\\varepsilon}{3}
+ \\frac{\\varepsilon}{3}
+ \\frac{\\varepsilon}{3}
= \\varepsilon.
\\end{aligned}
\\]

因此，\\(f_n \\to f\\) 在 \\(K\\) 上一致收敛。

> 这就是著名的\\(\text{Dini}\\)**定理**。（我的）证明中使用的\\(\text{Lesbegue}\\)数和对区间的划分，事实上都需要\\(\mathbb{R}\\)上的序关系。因此，我们不能把\\(K\\)扩展到任意的紧集上。

W2) 利用归纳法容易证明，这里不详细展开了。

W3) 结合W1)和W2)即可得到。

W4) 前排吐槽：\\(p_{n,k}\\)应该写成\\(p_{n,k}(x)\\)，否则真的很容易误导人。。。

我们考虑研究\\(x^i\\)项前面的系数。

常数项只有\\(k = 0\\)时存在贡献，此时为\\(0\\)

\\(x\\)前面的系数只有\\(k = 0,1\\)时有贡献，计算可知为\\(\frac{1}{n}\\)

\\(x^2\\)前面的系数只有\\(k = 0,1,2\\)时有贡献，计算可知为\\(-\frac{1}{n}\\)

下面考虑\\(i = 3,4\dots n\\)时的情况。我们记\\([x^{k}](P(x))\\)为\\(P(x)\\)中\\(x^k\\)的系数，则我们有
$$
[x^i](\text{原式}) = [x^{i - 2}](\sum_{k = 0}^n C_n^k x^k (1 - x)^{n - k}) - \frac{2}{n}[x^{i - 1}](\sum_{k = 0}^n kC_n^k x^k (1 - x)^{n - k}) \\ + \frac{1}{n^2}[x^i](\sum_{k = 0}^n k^2C_n^k x^k (1 - x)^{n - k})
$$

我们分别处理。

对于第一项，我们有
$$
\begin{aligned}
[x^{i}](\sum_{k = 0}^n C_n^k x^k (1 - x)^{n - k}) &= \sum_{k = 0}^i C_n^k [x^{i - k}] ((1 - x)^{n - k})\\
&= \sum_{k = 0}^i C_n^k C_{n - k}^{i - k} (-1)^{i - k} \\
&= \sum_{k = 0}^i C_n^i C_{i}^{k} (-1)^{i - k} \\
&= C_n^i \sum_{k = 0}^i  C_{i}^{k} (-1)^{i - k} \\
&= 0
\end{aligned}
$$

其中我们用到了组合恒等式
$$
C_n^k C_{n - k}^{i - k} = C_n^i C_{i}^{k}
$$
以及二项式定理。

对于第二项，我们有
$$
\begin{aligned}
- \frac{2}{n}[x^{i}](\sum_{k = 0}^n kC_n^k x^k (1 - x)^{n - k}) &= - \frac{2}{n}(\sum_{k = 0}^n kC_n^k [x^{i - k}]((1 - x)^{n - k})) \\
&= - \frac{2}{n}(\sum_{k = 0}^n kC_n^k C_{n - k}^{i - k} (-1)^{i - k}) \\
&= C_n^i \sum_{k = 0}^i  kC_{i}^{k} (-1)^{i - k} \\
&= C_n^i \sum_{k = 0}^i  iC_{i - 1}^{k - 1} (-1)^{i - k} \\
&= C_n^i i \sum_{k = 0}^i  C_{i - 1}^{k - 1} (-1)^{i - k} \\
&= 0
\end{aligned}
$$

边界情况的讨论略去。其中我们用到了吸收公式
$$
kC_i^k = iC_{i - 1}^{k - 1}
$$

对于第三项，反复使用两遍吸收公式，我们依然得到结果为\\(0\\)（需验证边界条件）。

\\(i = n + 1, n + 2\\)的情况直接求解，能得到前面的系数为\\(0\\)。

因此等式得证。

> 这道题目中我们遇到了许多常见的组合恒等式。

W5) 根据二项式定理，我们有
$$
\sum_{k = 0}^n p_{n,k}(x) = \sum_{k = 0}^n C_n^k x^k (1 - x)^{n - k} = 1
$$

于是
$$
f(x) = f(x) \sum_{k = 0}^n p_{n,k}(x) = \sum_{k = 0}^n f(x) p_{n,k}(x)
$$

于是平凡。

> \\(B_{f,n}(x)\\)即为著名的\\(\text{Bernstein}\\)多项式。

W6)

前排吐槽：尽管有了前两问的提示，这一问的难度依然不小。

由于 \\(f \\in C([0,1])\\)，
根据闭区间上的一致连续性定理，
\\(f\\) 在 \\([0,1]\\) 上一致连续。

因此，对任意 \\(\\varepsilon > 0\\)，
存在 \\(\\delta > 0\\)，
使得当 \\(x,y \\in [0,1]\\) 且
\\(|x-y| < \\delta\\) 时，
有
\\[
|f(x) - f(y)| < \\varepsilon.
\\]

理想情况下，
我们希望对所有 \\(k\\) 都有
\\(|f(x) - f(\\tfrac{k}{n})| < \\varepsilon\\)，
但当 \\(|x - \\tfrac{k}{n}| \\ge \\delta\\) 时，
这一估计不再成立。

因此，我们将误差项分开处理。

根据 W5) 的结论，
有
\\[
\\begin{aligned}
|f(x) - B_{f,n}(x)|
&\\le
\\sum_{\\substack{0 \\le k \\le n \\\\ |x - \\frac{k}{n}| < \\delta}}
|f(x) - f(\\tfrac{k}{n})| p_{n,k}(x) \\\\
&\\quad +
\\sum_{\\substack{0 \\le k \\le n \\\\ |x - \\frac{k}{n}| \\ge \\delta}}
|f(x) - f(\\tfrac{k}{n})| p_{n,k}(x).
\\end{aligned}
\\]

对第一项，由一致连续性，
当 \\(|x - \\tfrac{k}{n}| < \\delta\\) 时，
有
\\[
|f(x) - f(\\tfrac{k}{n})| < \\varepsilon.
\\]

因此，
\\[
\\begin{aligned}
\\sum_{|x - \\frac{k}{n}| < \\delta}
|f(x) - f(\\tfrac{k}{n})| p_{n,k}(x)
&\\le
\\varepsilon
\\sum_{|x - \\frac{k}{n}| < \\delta} p_{n,k}(x) \\\\
&\\le
\\varepsilon
\\sum_{k=0}^{n} p_{n,k}(x)
= \\varepsilon.
\\end{aligned}
\\]

对第二项，当 \\(|x - \\tfrac{k}{n}| \\ge \\delta\\) 时，
有
\\[
1 \\le \\frac{(x - \\tfrac{k}{n})^2}{\\delta^2}.
\\]

因此，
\\[
\\begin{aligned}
\\sum_{|x - \\frac{k}{n}| \\ge \\delta}
|f(x) - f(\\tfrac{k}{n})| p_{n,k}(x)
&\\le
\\frac{1}{\\delta^2}
\\sum_{k=0}^{n} p_{n,k}(x)
\\left(x - \\frac{k}{n}\\right)^2.
\\end{aligned}
\\]

由 W4) 的结论，
\\[
\\sum_{k=0}^{n} p_{n,k}(x)
\\left(x - \\frac{k}{n}\\right)^2
= \\frac{x(1-x)}{n}
\\le \\frac{1}{4n}.
\\]

从而
\\[
\\sum_{|x - \\frac{k}{n}| \\ge \\delta}
|f(x) - f(\\tfrac{k}{n})| p_{n,k}(x)
\\le
\\frac{1}{4n\\delta^2}.
\\]

> 由此，我们用\\(\text{Berstein}\\)多项式逼近了一个连续函数。

W7) 平凡（多项式环一定是封闭的）

W8) 根据W3)，我们只需要证明\\(P(f) \in \mathcal{A}\\)。由于\\(P\\)是一个多项式，根据子代数的定义（线性空间 + 乘法封闭），这是显然的。

W9) 平凡

W10) 

我们有
$$
f \wedge g(x) = \frac{1}{2} (f + g - |f - g|)
$$
$$
f \vee g(x) = \frac{1}{2} (f + g + |f - g|)
$$

因此显然。

W11) 由于\\(P(K)\\)是一个子代数，结合W8) W10)，这是显然的。

W12) 

第一步：根据\\(K\\)的紧性，我们只需要证明\\(\{U_y\}\\)是\\(K\\)的一组开覆盖即可。根据\\(\varphi_y(y)\\)的定义，结合介值定理，这是显然的。

第二步：由第一步，结合\\(\mathcal{A}\\)是\\(\wedge \vee \\)-封闭的，这是平凡的。

第三步：\\(\varphi_{x_0}\\)即可。

W13) 根据W12)，我们只需要满足W12)题干中的条件即可，而\\(\mathcal{A}\\)包含所有常数值函数使得我们一定能够做到这一点。

W14) 取\\(\mathcal{A}\\)的闭包\\(\bar{\mathcal{A}}\\)，则根据W11), \\(\bar{\mathcal{A}}\\)是\\(\wedge \vee \\)-封闭的。

由于\\(\mathcal{A}\\)包含了常值函数，结合\\(\mathcal{A}\\)是一个子代数，我们就知道\\(\mathbb{Q} \subset \mathcal{A}\\)（这与\\(\text{Cauchy}\\)方程的处理方法是类似的）。

结合\\(\bar{\mathcal{A}}\\)是\\(\mathcal{A}\\)的闭包，我们就有\\(\mathbb{R} \subset \mathcal{A}\\)（利用实数的有理逼近，或者说有理数在实数中是稠密的）

因此，根据W13)，我们就有\\(\bar{\mathcal{A}}\\)在\\(C(K)\\)上稠密。

又因为我们可以用\\(\mathcal{A}\\)的函数来逼近\\(\bar{\mathcal{A}}\\)中的函数，因此，\\(\mathcal{A}\\)一定在\\(C(K)\\)上稠密。

> 至此，我们证明了著名的\\(\text{Weierstrass-Stone}\\)定理。它给出了在一般的子代数上逼近一个连续函数的方法。

W15) 由于\\(P(K)\\)是一个子代数，于是显然。

> 多项式的逼近也被称作\\(\text{Weierstrass}\\)逼近定理。

W16) 根据各种各样的三角恒等变换公式（如和差化积公式等），我们很容易发现，我们可以通过定义在\\([0,2\pi]\\)上的正弦和余弦函数的线性组合和成绩生成一个子代数\\(\mathcal{A}\\)。

容易看出，\\(T(x) \subset \mathcal{A}\\)。因此，根据\\(\text{Weierstrass-Stone}\\)定理，我们就得到了结论。

> 这其实也是连续函数的一个\\(\text{Fourier}\\)级数逼近。

## 作业10：\\(\zeta(2)\\)的无理性 

### 习题A

A1) 
我其实怀疑这道题有问题。

由于\\([0,1]\\)是一个有界闭区间，因此，在\\([0,1]\\)上逐点收敛的一列函数也必定是一致收敛的（利用一致连续性）。因此，我们是无法构造出来这样的函数的。

A2) 
考虑
$$
\int_{100}^{n} \frac{dx}{x \log ^{\alpha}(x)} = \int_{100}^{n} \frac{d \log x}{\log ^{\alpha}(x)} = \frac{\log^{1 - \alpha} x}{1 - \alpha}\bigg |_{100}^{n}
$$

于是显然。

A3) （近乎平凡，为了熟悉定义，我还是展开写一下吧）

考虑任意的\\(I' = [a,b) \subset I\\)上的反常积分。设\\(F\\)的原函数为\\(G\\)，根据\\(\text{Newton-Leibniz}\\)公式，我们有
$$
\int_{a}^{b_n} F(x) = G(b_n) - G(a)
$$
其中\\(\{b_n\} \rightarrow b\\)。

由于\\(F\\)在\\(I\\)上的反常积分收敛，因此\\(\{G(b_n)\}\\)是收敛的。

因此，对于任意的\\(\varepsilon > 0\\)，根据极限收敛的\\(\text{Cauchy}\\)法则，存在\\(N\\)，使得\\(n_2 > n_1 > N\\)时，我们有
$$
|G(n_1) - G(n_2)| < \varepsilon
$$
即
$$
|\int_{a}^{b_{n_2}} F(x) - \int_{a}^{b_{n_1}} F(x)| = |\int_{b_{n_1}}^{b_{n_2}} F(x)| < \varepsilon
$$

而我们有
$$
|\int_{b_{n_1}}^{b_{n_2}} f(x)| < |\int_{b_{n_1}}^{b_{n_2}} |f(x)| | <|\int_{b_{n_1}}^{b_{n_2}} F(x)| < \varepsilon
$$

因而
$$
\int_{a}^{b_{n}} f(x)
$$
必定收敛。因此，我们一定有\\(f\\)在区间\\(I\\)上反常可积。

A4) 都是平凡的（(3)换元即可）

A5) A6) 平凡

A7) 积分的结果为\\(\frac{22}{7} - \pi\\)。

由于这个积分是一个有理函数的积分，因此肯定是可以解出来的。当然，我们也可以反复使用区间再现公式来简化计算，由于公式太多，我就不详细写了。

我们考虑将积分因子放到\\(x^4(1 - x)^4\\)，结果是\\(\frac{1}{630}\\)，可见他们已经很接近了。

A8) 

第一步：可以看出，\\(k = 0,1,\dots n - 1\\)时，由于\\(0\\)和\\(\frac{a}{b}\\)都是\\(n\\)重根，因此，此时它们的导数一定是\\(0\\)。
\\(k \ge n\\)时，\\(n!\\)已经被约掉，系数都是整数，导数自然是整数。

第二步：考虑使用分部积分
$$
\begin{aligned}
\int_{0}^{\pi} f_{a,b;n}(x) \sin(x) dx &= - \int_{0}^{\pi} f_{a,b;n}(x) d(\cos(x))\\
&= - f_{a,b;n}(x) \cos(x) \bigg |_{0}^{\pi} + \int_{0}^{\pi} f_{a,b;n}'(x) \cos(x) dx \\
&= 2f_{a,b;n}(x) \bigg |_{0}^{\pi} + \int_{0}^{\pi} f_{a,b;n}'(x) d(\sin x) \\ 
&= 2f_{a,b;n}(x) \bigg |_{0}^{\pi} + (f_{a,b;n}'(x) \sin x) \bigg |_{0}^{\pi} - \int_{0}^{\pi} f_{a,b;n}''(x) \sin(x) dx\\ 
&= 2f_{a,b;n}(x) \bigg |_{0}^{\pi} - \int_{0}^{\pi} f_{a,b;n}''(x) \sin(x) dx\\ 
\end{aligned}
$$

于是我们就得到了一个递推关系式。结合第一步的结论，我们很容易看出这个积分一定是一个整数。

第三步：

根据均值不等式，我们有
$$
\frac{x^n(a - bx)^n}{n!} \le \frac{a^{2n}}{2^{2n}b^n n!}
$$

\\(n\\)充分大时，上式显然小于\\(\frac{1}{2}\\)。

因此，\\(n\\)充分大时，我们有
$$
0 < \int_{0}^{\pi} f_{a,b;n}(x) \sin(x) dx < \frac{1}{2} \int_{0}^{\pi}\sin(x) dx \le 1
$$

这与这个积分结果为整数是矛盾的。因此，我们就证得了\\(\pi\\)是无理数。

A9) 参考之前讲义中的内容，这部分证明是不难的。

A10) 

$$
\begin{aligned}
\int_{0}^{1} f(x) dx + \int_{0}^{1} g(y) dy &= \int_{0}^{1} f(x) dx + \int_{0}^{1} g(f(x)) d(f(x)) \\
&= \int_{0}^{1} f(x) dx + \int_{0}^{1} x d(f(x)) \\
&= \int_{0}^{1} f(x) dx + xf(x) \bigg |_{0}^{1} - \int_{0}^{1} f(x) dx \\
&= xf(x) \bigg |_{0}^{1} = 1
\end{aligned}
$$

A11) 有点烦，有空补一下公式。

A12) 由讲义中证明的引理，我们只需要说明 \\([a,b] \times [c,d]\\) 是紧的距离空间即可，而这是显然的。

### 习题B（关于\\(\zeta(2)\\)）

B1) B2) 平凡。

B3) 充分性：由B2)中右侧的不等式显然。

必要性：\\(p = 1\\)时显然不反常可积。

B4) 结合B2) 和 B3) 这是显然的。

B5) 只需证明
$$
\lim_{x \rightarrow 0} \frac{h(x)}{2 \sin \frac{x}{2}} = -1
$$

而
$$
\lim_{x \rightarrow 0} \frac{\frac{x^2}{2 \pi} - x}{2 \sin \frac{x}{2}} = \lim_{x \rightarrow 0} \frac{\frac{x^2}{2 \pi} - x}{x} = -1
$$

B6) 由分部积分公式即可得到答案为\\(\frac{1}{k^2}\\)，这里不再详细展开。

B7) 高中题，给左边乘上\\(2 \sin(\frac{x}{2})\\)，利用积化和差公式进行三角恒等变换便可得到\\(\lambda = \frac{1}{2}\\)

B8) 利用分部积分公式，我们有
$$
\begin{aligned}
\int_{0}^{\pi} \phi(x) \sin ((n + \frac{1}{2})x) dx &= (-  \frac{\phi(x)}{n + \frac{1}{2}} \cos ((n + \frac{1}{2})x)) \bigg |_{0}^{\pi} + \int_{0}^{\pi} \phi'(x) \frac{\cos ((n + \frac{1}{2})x)}{n + \frac{1}{2}}  dx \\
&= \frac{\phi(0)}{n + \frac{1}{2}} + \int_{0}^{\pi} \phi'(x) \frac{\cos ((n + \frac{1}{2})x)}{n + \frac{1}{2}}  dx \\
&\le \frac{\phi(0)}{n + \frac{1}{2}} + \frac{1}{n + \frac{1}{2}}\int_{0}^{\pi} \phi'(x) dx \\
&= \frac{\phi(\pi)}{n + \frac{1}{2}}
\end{aligned}
$$

当\\(n \rightarrow \infty\\)时，上式极限自然为\\(0\\)。

B9) 取B8)中的\\(\phi(x) = \varphi(x)\\)，我们有
$$
\int_{0}^{\pi} \varphi(x) \sin ((n + \frac{1}{2})x) dx = \int_{0}^{\pi} \frac{h(x)}{2 \sin (\frac{x}{2})} \sin ((n + \frac{1}{2})x) dx 
$$

根据B7)，我们有
$$
\begin{aligned}
\int_{0}^{\pi} \frac{h(x)}{2 \sin (\frac{x}{2})} \sin ((n + \frac{1}{2})x) dx &= 
\int_{0}^{\pi} h(x)(\sum_{k = 0}^n \cos(kx) + \frac{1}{2})dx \\
&= \int_{0}^{\pi} h(x)(\sum_{k = 0}^n \cos(kx))dx + \frac{1}{2} \int_{0}^{\pi} h(x) dx 
\end{aligned}
$$

对于第二项，我们有
$$
\frac{1}{2} \int_{0}^{\pi} h(x) dx = \frac{1}{2}(\frac{x^3}{6\pi} - \frac{x^2}{2}) \bigg |_{0}^{\pi} = -\frac{\pi^2}{6}
$$

对于第一项，我们有
$$
\int_{0}^{\pi} (\sum_{k = 0}^n h(x) \cos(kx))dx = \sum_{k = 0}^n (\int_{0}^{\pi} h(x) \cos(kx)dx) = \sum_{k = 1}^n \frac{1}{k^2}
$$

\\(n \rightarrow \infty\\)时，根据B6) 和 B8)，代入上式，我们就有
$$
\sum_{k = 1}^{\infty} \frac{1}{k^2} = \frac{\pi}{6}
$$

> 我们曾经利用第二类\\(\text{Chebyshev}\\)多项式证明过这个结论（即\\(\text{Basel}\\)问题），这里我们利用积分得到了另一种证明方法。

B10) B11) 平凡

B12) 易见
$$
g_n'(x) = F_n''(x)\sin (\pi x) + \pi^2 F_n(x) \sin (\pi x)
$$

再代入\\(F_n(x)\\)和\\(F_n''(x)\\)即可，具体过程我就略去了。

由此，我们就有
$$
a^n f_n(x) \sin (\pi x) = \frac{g'(x)}{\pi ^2}
$$

代入到积分当中，我们就有
$$
A_n = \frac{1}{\pi}(\pi F_n(1) - \pi F_n(0))
$$

所以\\(A_n\\)必定是一个整数。

B13)

我们有
$$
a^n f_n(x) \le a^n \frac{1}{4^n n!}
$$

\\(n\\)充分大即可。

B14) 由B13) 显然

> 至此，我们证明了\\(\pi^2\\)是一个无理数，思想和我们证明\\(\pi\\)是无理数是类似的。

### 习题C

等待更新，正在计算中。