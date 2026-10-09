# 常微分方程 · 课堂笔记

> ⚠️ **内容由 AI 生成，请谨慎甄别**，作者会在有空的时候审核（真能审核完吗？）


> 第 1 章　一阶微分方程与可降阶方程 ｜ 第 2 章　线性微分方程 ｜ 第 3 章　线性微分方程组
>
> 含各章例题、习题与习题解答；公式为 LaTeX，可在 GitHub / Obsidian 直接渲染。
>
> 本版生成于 2026-10-09 21:45。

# 第 1 章　一阶微分方程与可降阶方程

## §1　可分离变量方程与齐次方程

### 一、可分离变量方程

形如

$$\frac{dy}{dx}=\varphi(x)\psi(y)$$

的方程称为**可分离变量方程**：右端是一个只含 x 的函数与一个只含 y 的函数的乘积。当 ψ(y) ≠ 0 时，把两个变量分离到等号两侧：

$$\frac{1}{\psi(y)}dy=\varphi(x)dx$$

两边分别积分，即得通解

$$\int\frac{1}{\psi(y)}dy=\int\varphi(x)dx+C$$

> 注：分离变量时用到了 ψ(y) ≠ 0。使 ψ(y₀) = 0 的常数函数 y ≡ y₀ 也可能是解，应在最后单独检查并补入通解（通常表现为常数 C 取某个特殊值）。

#### 例 1

求解 $\frac{dy}{dx}$ = 2xy。

**解**：此时 φ(x) = 2x，ψ(y) = y。当 y ≠ 0 时分离变量：

$$\frac{1}{y}dy=2x\,dx$$

积分得 ln|y| = x² + C₁，即

$$|y|=e^{C_1}e^{x^2}$$

去掉绝对值并记 C = ±$e^{C_{1}}$，得 y = $Ce^{x^{2}}$。又 y ≡ 0 也是解，它恰好对应 C = 0，所以**通解为**

$$y=Ce^{x^2}$$

其中 C 为任意常数。

> 注：这里不再写“C 为任意非零常数”，因为 y ≡ 0 已经被吸收进 C = 0。

#### 例 2

求解 $\frac{dy}{dx}$ = $\frac{(1 + y^{2})}{(1 + x^{2})}$。

**解**：分离变量得

$$\frac{1}{1+y^2}dy=\frac{1}{1+x^2}dx$$

两边积分：

$$\arctan y=\arctan x+C$$

这就是通解的隐式形式；也可以写成 y = tan(arctan x + C)，即

$$y=\frac{x+\tan C}{1-x\tan C}$$

### 二、齐次方程

形如

$$\frac{dy}{dx}=g\left(\frac{y}{x}\right)$$

的方程称为**齐次方程**：右端只依赖比值 $\frac{y}{x}$。作代换

$$u=\frac{y}{x}, \qquad y=ux$$

则

$$\frac{dy}{dx}=x\frac{du}{dx}+u$$

原方程化为

$$x\frac{du}{dx}+u=g(u) \qquad\Longrightarrow\qquad \frac{du}{dx}=\frac{g(u)-u}{x}$$

这是一个可分离变量方程。分三种情形讨论（与课堂笔记一致）：

① 当 g(u) − u ≠ 0 时，分离变量并积分：

$$\int\frac{1}{g(u)-u}du=\int\frac{1}{x}dx=\ln|x|+c=\ln|cx|$$

② 若存在 u₀ 使 g(u₀) − u₀ = 0，则 u = u₀ 也是解，对应过原点的直线 y = u₀x；

③ 若 g(u) − u ≡ 0，则原方程就是 $\frac{dy}{dx}$ = $\frac{y}{x}$，通解为 y = cx。

#### 例 3

求解

$$\frac{dy}{dx}=\frac{xy}{x^2+y^2}$$

**解**：这是齐次方程。令 y = ux，则 $\frac{dy}{dx}$ = x·$\frac{du}{dx}$ + u，代入得

$$x\frac{du}{dx}+u=\frac{ux^2}{x^2+u^2x^2}=\frac{u}{1+u^2}$$

移项：

$$x\frac{du}{dx}=\frac{u}{1+u^2}-u=\frac{u-u-u^3}{1+u^2}=-\frac{u^3}{1+u^2}$$

分离变量（u ≠ 0）：

$$-\frac{1+u^2}{u^3}du=\frac{1}{x}dx$$

两边积分。注意

$$\int\frac{1+u^2}{u^3}du=\int\left(\frac{1}{u^3}+\frac{1}{u}\right)du=-\frac{1}{2u^2}+\ln|u|$$

所以

$$-\frac{1}{2u^2}+\ln|u|=-\ln|x|+c \qquad\Longrightarrow\qquad \ln|ux|=\frac{1}{2u^2}+c$$

把 u = $\frac{y}{x}$ 代回，注意 ux = y：

$$\ln|y|=\frac{x^2}{2y^2}+c$$

故通解为

$$y=Ce^{\frac{x^2}{2y^2}}$$

其中 C 为任意常数。

#### 例 4

求解 $\frac{dy}{dx}$ = $\frac{xy}{(x^{2} + y^{2})}$ 也可以先取倒数化为 $\frac{dx}{dy}$ = $\frac{(x^{2}+y^{2})}{(xy)}$ = $\frac{x}{y}$ + $\frac{y}{x}$，再令 v = $\frac{x}{y}$ 求解，结果相同。这提示：**齐次方程的两个变量地位对称**，哪个变量作分子都可以试。

### 习题 1.1

1. 求 $\frac{dy}{dx}$ = $\frac{x}{y}$ 的通解，并写出过点 (0, 1) 的特解。
2. 求 $\frac{dy}{dx}$ = $e^{x-y}$ 的通解。
3. 求 $\frac{dy}{dx}$ = $\frac{(x + y)}{x}$ 的通解。
4. 求 $\frac{dy}{dx}$ = $\frac{y}{x}$ + tan($\frac{y}{x}$) 的通解（0 < $\frac{y}{x}$ < $\frac{\pi }{2}$）。
5. 求 (x² + y²)dx − xy dy = 0 的通解。

## §2　一阶线性微分方程与伯努利方程

### 一、一阶线性微分方程

形如

$$\frac{dy}{dx}+P(x)y=f(x)$$

的方程称为**一阶线性微分方程**。当 f(x) ≡ 0 时称为**齐次线性方程**，当 f(x) ≢ 0 时称为**非齐次线性方程**。

#### 1. 齐次线性方程的通解

$$\frac{dy}{dx}+P(x)y=0 \qquad\Longrightarrow\qquad \frac{dy}{y}=-P(x)dx$$

两边积分得 ln|y| = −∫P(x)dx + ln|C|，于是

$$y=Ce^{-\int P(x)dx}$$

#### 2. 常数变易法（非齐次方程通解）

把齐次通解中的常数 C 换成待定函数 C(x)，设非齐次方程有形如

$$y=C(x)e^{-\int P(x)dx}$$

的解。求导：

$$\frac{dy}{dx}=C'(x)e^{-\int P(x)dx}-C(x)P(x)e^{-\int P(x)dx}$$

代回非齐次方程，含 C(x) 的两项正好抵消：

$$C'(x)e^{-\int P(x)dx}=f(x) \qquad\Longrightarrow\qquad C'(x)=f(x)e^{\int P(x)dx}$$

再积分求出 C(x)，即得**通解公式**

$$y=e^{-\int P(x)dx}\left[\int f(x)e^{\int P(x)dx}dx+c\right]$$

> 结构提示：通解 = 齐次方程通解 + 非齐次方程的一个特解，这正是上一章“非齐次通解结构定理”在一阶情形下的体现。

#### 例 1

求 y′ − $\frac{y}{x}$ = x²（x > 0）的通解。

**解**：P(x) = −$\frac{1}{x}$，f(x) = x²。

$$\int P(x)dx=-\ln x, \qquad e^{-\int P(x)dx}=x, \qquad e^{\int P(x)dx}=\frac{1}{x}$$

代入通解公式：

$$y=x\left[\int x^2\cdot\frac{1}{x}dx+c\right]=x\left[\int x\,dx+c\right]=x\left[\frac{x^2}{2}+c\right]$$

即

$$y=\frac{x^3}{2}+cx$$

#### 例 2

求 y′ + y = $e^{-x}$ 的通解。

**解**：P(x) = 1，f(x) = $e^{-x}$，故 $e^{-\int P dx}$ = $e^{-x}$，$e^{\int P dx}$ = $e^{x}$。

$$y=e^{-x}\left[\int e^{-x}e^{x}dx+c\right]=e^{-x}(x+c)$$

> 例 2 说明：非齐次项与齐次解“同型”时会出现因子 x（共振），与二阶方程重根情形是同一个道理。

### 二、伯努利方程

形如

$$\frac{dy}{dx}+P(x)y=f(x)y^n \qquad (n\neq 0,\ n\neq 1)$$

的方程称为**伯努利方程**。两端除以 $y^{n}$：

$$\frac{1}{y^n}\frac{dy}{dx}+\frac{1}{y^{n-1}}P(x)=f(x)$$

作代换

$$z=y^{1-n}$$

则 $\frac{dz}{dx}$ = (1 − n)$y^{-n}$·$\frac{dy}{dx}$，代入并整理，方程化为**一阶线性方程**

$$\frac{dz}{dx}+(1-n)P(x)z=(1-n)f(x)$$

按 §2 一的方法解出 z 后，再由 z = $y^{1-n}$ 代回即得通解。

> 注：n > 0 时，y ≡ 0 显然也是解，最后要单独补充；若 n < 0，则 y = 0 不是解。

#### 例 3

求 y′ + $\frac{y}{x}$ = y²（x > 0）的通解。

**解**：这是 n = 2 的伯努利方程，P(x) = $\frac{1}{x}$，f(x) = 1。令 z = $y^{1-2}$ = $y^{-1}$，得线性方程

$$\frac{dz}{dx}-\frac{1}{x}z=-1$$

这里 P̃(x) = −$\frac{1}{x}$，f̃(x) = −1，故 $e^{-\int P̃ dx}$ = x，$e^{\int P̃ dx}$ = $\frac{1}{x}$：

$$z=x\left[\int(-1)\frac{1}{x}dx+c\right]=x\left[-\ln x+c\right]$$

代回 z = $\frac{1}{y}$：

$$\frac{1}{y}=x(c-\ln x) \qquad\Longrightarrow\qquad y=\frac{1}{x(c-\ln x)}$$

另外 y ≡ 0 也是解（对应 n > 0 的特殊情形），可写成 c → ∞ 的极限。

#### 例 4

求 y′ − y = y² 的通解。

**解**：n = 2，P(x) = −1，f(x) = 1。令 z = $y^{-1}$：

$$\frac{dz}{dx}+z=-1$$

故 z = −1 + $ce^{-x}$，即

$$y=\frac{1}{ce^{-x}-1}$$

### 习题 1.2

1. 求 y′ + $\frac{y}{x}$ = $e^{x}$（x > 0）的通解。
2. 求 y′ − 2y = $e^{2x}$ 的通解。
3. 求 xy′ + y = x² 的通解（提示：左端恰为 (xy)′）。
4. 求 y′ + y = y²$e^{x}$ 的通解（伯努利方程）。
5. 求 y′ − $\frac{y}{x}$ = −$\frac{y^{2}}{x}$ 的通解（伯努利方程）。

## §3　全微分方程与积分因子

### 一、全微分方程

设有方程

$$P(x,y)dx+Q(x,y)dy=0 \qquad (1)$$

若左端恰好是某个二元函数 u(x, y) 的全微分，即

$$P(x,y)dx+Q(x,y)dy=du(x,y)$$

则称 (1) 为**全微分方程**（也叫恰当方程）。此时 du = 0，故

$$u(x,y)=c$$

就是 (1) 的通解；并称 u(x, y) 为 P dx + Q dy 的一个**原函数**。

**判定条件**：P dx + Q dy 为全微分，当且仅当

$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$

理由：由 du = ($\frac{\partial u}{\partial x}$)dx + ($\frac{\partial u}{\partial y}$)dy 可知 $\frac{\partial u}{\partial x}$ = P，$\frac{\partial u}{\partial y}$ = Q；再由二阶混合偏导相等 $\frac{\partial ^{2}u}{\partial x\partial y}$ = $\frac{\partial ^{2}u}{\partial y\partial x}$ 即得。反之在单连通区域内 P、Q 有连续偏导时，该条件也是充分的。

#### 求原函数 u 的三种方法

- **法 1（偏积分）**：由 $\frac{\partial u}{\partial x}$ = P 对 x 积分，得 u = ⋯ + C(y)；再由 $\frac{\partial u}{\partial y}$ = Q 定出 C(y)；
- **法 2（线积分）**：u = $\int _{(x_{0},y_{0})}^{(x,y)}$ P dx + Q dy，沿折线路径积分（结果与路径无关，起点 (x₀,y₀) 任取，通解为 u = C）；
- **法 3（分项组合）**：把 P dx + Q dy 拆成若干已知全微分之和。

#### 例 1

$$\frac{2xy+1}{y}dx+\frac{y-x}{y^{2}}dy=0$$

**解**：记 P = $\frac{(2xy + 1)}{y}$ = 2x + $\frac{1}{y}$，Q = $\frac{(y - x)}{y^{2}}$ = $\frac{1}{y}$ − $\frac{x}{y^{2}}$，则

$$\frac{\partial P}{\partial y}=-\frac{1}{y^{2}}, \qquad \frac{\partial Q}{\partial x}=-\frac{1}{y^{2}}$$

两者相等，故是**全微分方程**。设通解为 u(x, y) = c。

**法 1**：由 $\frac{\partial u}{\partial x}$ = 2x + $\frac{1}{y}$ 对 x 积分，

$$u=x^{2}+\frac{x}{y}+C(y)$$

再由 $\frac{\partial u}{\partial y}$ = −$\frac{x}{y^{2}}$ + C′(y) 应等于 Q = $\frac{1}{y}$ − $\frac{x}{y^{2}}$，得

$$C'(y)=\frac{1}{y} \qquad\Longrightarrow\qquad C(y)=\ln|y|+c_1$$

故

$$u(x,y)=x^{2}+\frac{x}{y}+\ln|y|+c_1$$

通解为 x² + $\frac{x}{y}$ + ln|y| = C。

**法 2**：取从 (0, 1) 到 (x, y) 的折线路径 (0,1) → (x,1) → (x,y)：

$$u=\int_{0}^{x}\left(2x+1\right)dx+\int_{1}^{y}\left(\frac{1}{y}-\frac{x}{y^{2}}\right)dy$$

$$=x^{2}+x+\left[\ln|y|+\frac{x}{y}\right]_{1}^{y}=x^{2}+x+\ln|y|+\frac{x}{y}-x=x^{2}+\ln|y|+\frac{x}{y}$$

与法 1 结果一致（C 为任意常数）。

**法 3（分项组合）**：把左端拆开

$$\frac{2xy+1}{y}dx+\frac{y-x}{y^{2}}dy=2x\,dx+\frac{1}{y}dx+\frac{1}{y}dy-\frac{x}{y^{2}}dy$$

其中

$$2x\,dx=d(x^{2}), \qquad \frac{1}{y}dy=d(\ln|y|), \qquad \frac{1}{y}dx+x\,d\left(\frac{1}{y}\right)=d\left(\frac{x}{y}\right)$$

（用了 d($\frac{1}{y}$) = −($\frac{1}{y^{2}}$)dy），故原式为

$$d\left(x^{2}+\ln|y|+\frac{x}{y}\right)$$

通解 x² + ln|y| + $\frac{x}{y}$ = C。

### 二、积分因子

若 P dx + Q dy = 0 不是全微分方程，但存在函数 μ(x, y) ≢ 0 使

$$\mu(x,y)P(x,y)dx+\mu(x,y)Q(x,y)dy=0 \qquad (2)$$

成为全微分方程，则称 μ(x, y) 为 (1) 的一个**积分因子**。

> 注：只要求 μ ≠ 0，(1) 与 (2) 同解，所以乘积分因子不会改变通解集。

#### 积分因子的求法

因为 μP dx + μQ dy 为全微分，所以

$$\frac{\partial(\mu P)}{\partial y}=\frac{\partial(\mu Q)}{\partial x}$$

展开：

$$\frac{\partial\mu}{\partial y}P+\mu\frac{\partial P}{\partial y}=\frac{\partial\mu}{\partial x}Q+\mu\frac{\partial Q}{\partial x}$$

即

$$\frac{\partial\mu}{\partial y}P-\frac{\partial\mu}{\partial x}Q=\mu\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)$$

这是一个一阶偏微分方程，一般不易求解。但若 μ 只依赖一个变量，就能化为一阶常微分方程：

**（i）μ = μ(x)**：此时 $\frac{\partial \mu }{\partial y}$ = 0，上式化为

$$-\frac{d\mu}{dx}Q=\mu\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)$$

即

$$\frac{1}{\mu}\frac{d\mu}{dx}=\frac{1}{Q}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)\triangleq\varphi(x)$$

左端只含 x，故**右端必须也只含 x**（这是能求 μ(x) 的前提）。于是

$$\ln|\mu|=\int\varphi(x)dx+\ln|c| \qquad\Longrightarrow\qquad \mu=ce^{\int\varphi(x)dx}$$

**（ii）μ = μ(y)**：同理可得

$$\frac{1}{\mu}\frac{d\mu}{dy}=-\frac{1}{P}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)\triangleq\varphi(y) \qquad\Longrightarrow\qquad \mu=e^{\int\varphi(y)dy}$$

> 实用套路：先算 ($\frac{1}{Q}$)($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$)，若只含 x 就用 μ(x)；再算 −($\frac{1}{P}$)($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$)，若只含 y 就用 μ(y)。两者都不行时，可尝试分项组合凑已知全微分。

#### 常用积分因子（记住可大幅提速）

$$\mu=\frac{1}{x^{2}}: \qquad \frac{x\,dy-y\,dx}{x^{2}}=d\left(\frac{y}{x}\right)$$

$$\mu=\frac{1}{y^{2}}: \qquad \frac{y\,dx-x\,dy}{y^{2}}=d\left(\frac{x}{y}\right)$$

$$\mu=\frac{1}{xy}: \qquad \frac{x\,dy+y\,dx}{xy}=d(\ln|xy|)$$

$$\mu=\frac{1}{x^{2}+y^{2}}: \qquad \frac{y\,dx-x\,dy}{x^{2}+y^{2}}=d\left(\arctan\frac{x}{y}\right) \qquad (y\neq 0)$$

$$\mu=\frac{1}{x^{2}+y^{2}}: \qquad \frac{x\,dx+y\,dy}{x^{2}+y^{2}}=\frac{1}{2}d\left(\ln(x^{2}+y^{2})\right)$$

此外 $\frac{1}{(x^{2} - y^{2})}$、$\frac{1}{(xy)}$ 等也是常见形式；$\frac{1}{\sqrt{xy}}$ 则适用于 $x\,dy+y\,dx=0$ 型方程（此时 $d(2\sqrt{xy})=0$），对 $y\,dx-x\,dy=0$ 并不适用。

#### 例 2

$$y\,dx-x\,dy=0$$

**解**：P = y，Q = −x，$\frac{\partial P}{\partial y}$ = 1，$\frac{\partial Q}{\partial x}$ = −1，两者不等，**不是**全微分方程。

**（i）试 μ = μ(x)**：

$$\frac{1}{Q}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)=\frac{1}{-x}\left[1-(-1)\right]=-\frac{2}{x}=\varphi(x)$$

只含 x，可行。取

$$\mu=e^{\int-\frac{2}{x}dx}=\frac{1}{x^{2}}$$

于是

$$\frac{y\,dx-x\,dy}{x^{2}}=0$$

注意 $\frac{(y dx - x dy)}{x^{2}}$ = −d($\frac{y}{x}$)，故得

$$d\left(\frac{y}{x}\right)=0 \qquad\Longrightarrow\qquad \frac{y}{x}=c$$

即通解 y = cx。

**（ii）试 μ = μ(y)**：

$$\varphi(y)=-\frac{1}{P}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)=-\frac{1}{y}\left[1-(-1)\right]=-\frac{2}{y}$$

只含 y，可行。取

$$\mu=e^{\int-\frac{2}{y}dy}=\frac{1}{y^{2}}$$

于是

$$\frac{y\,dx-x\,dy}{y^{2}}=d\left(\frac{x}{y}\right)=0 \qquad\Longrightarrow\qquad \frac{x}{y}=c$$

即通解 x = cy。

> 同一个方程有两个积分因子，得到形式不同但等价的通解（y = cx 与 x = cy）。**积分因子不唯一**，选哪个只看计算是否方便。

### 习题 1.3

1. 验证 (2x + y)dx + (x + 2y)dy = 0 是全微分方程，并求通解。
2. 求 (3x² + 2y)dx + (2x − 3y²)dy = 0 的通解。
3. 求 (y + 1)dx − x dy = 0 的通解（先找只含 x 的积分因子）。
4. 求 xy dx + (y² − x²)dy = 0 的通解（提示：积分因子只含 y）。
5. 用积分因子 μ = $\frac{1}{(x^{2} + y^{2})}$ 与 μ = $\frac{1}{(xy)}$ 分别求 y dx − x dy = 0 的通解，并说明两者为何等价。

## §4　可降阶的二阶微分方程

二阶方程一般不好解，但下列三类**缺项**的二阶方程可以通过代换把阶数降下来，化成 §2 的一阶方程。

### 一、y″ = f(x) 型：直接积分两次

右端只含 x，逐次积分即可：

$$y'=\int f(x)dx+c_1 \qquad\Longrightarrow\qquad y=\int\left(\int f(x)dx+c_1\right)dx+c_2$$

#### 例 1

求 y″ = x·$e^{x}$ 的通解。

**解**：先积分一次得

$$y'=\int xe^{x}dx+c_1=(x-1)e^{x}+c_1$$

再积分一次（分部积分）：

$$y=\int\left[(x-1)e^{x}+c_1\right]dx+c_2=(x-2)e^{x}+c_1x+c_2$$

### 二、y″ = f(x, y′) 型：令 p = y′（不显含 y）

令 p = $\frac{dy}{dx}$，则 y″ = $\frac{dp}{dx}$，原方程化为一阶方程

$$\frac{dp}{dx}=f(x,p) \qquad (*)$$

设 (*) 的解为 p = φ(x, c₁)，则由 $\frac{dy}{dx}$ = φ(x, c₁) 再积分一次，即得原方程的通解

$$y=\int\varphi(x,c_1)dx+c_2$$

> 要点：这类方程的特点是**方程中不出现 y**，因此可以把 y′ 整体当作未知函数。

#### 例 2

求 (1 + x²)y″ = 2x·y′ 的通解。

**解**：令 p = y′，则 y″ = $\frac{dp}{dx}$，代入得

$$(1+x^2)\frac{dp}{dx}=2xp \qquad\Longrightarrow\qquad \frac{dp}{p}=\frac{2x}{1+x^2}dx$$

积分：

$$\ln|p|=\int\frac{2x}{1+x^2}dx=\ln(1+x^2)+c_1$$

故 p = c₁(1 + x²)，即 $\frac{dy}{dx}$ = c₁(1 + x²)。再积分一次：

$$y=c_1\left(x+\frac{x^3}{3}\right)+c_2$$

#### 例 3

求 y″ + (y′)² = 0 的通解。

**解**：方程中不出现 x 只是“缺项”，仍属本型（右端为 f(x, p) = −p²）。令 p = y′：

$$\frac{dp}{dx}=-p^2 \qquad\Longrightarrow\qquad \frac{dp}{p^2}=-dx$$

积分得 −$\frac{1}{p}$ = −x + c，即

$$p=\frac{1}{x-c_1}$$

（把任意常数写成 −c₁ 只是记号方便）。于是

$$y=\int\frac{1}{x-c_1}dx+c_2=\ln|x-c_1|+c_2$$

注意：上面除以 $p^{2}$ 时隐含 $p \neq  0$；被略去的 $p \equiv  0$ 分支给出常数解 $y \equiv  C$（代回原方程成立），它不包含在上述通解中，需单独列出——与例 4、例 5 的处理一致。

### 三、y″ = f(y, y′) 型：令 p = y′，并把 y 看作自变量（不显含 x）

令 p = $\frac{dy}{dx}$，则由复合函数求导得

$$y''=\frac{dp}{dx}=\frac{dp}{dy}\cdot\frac{dy}{dx}=p\frac{dp}{dy}$$

原方程化为关于 p(y) 的一阶方程

$$p\frac{dp}{dy}=f(y,p)$$

设其解为 p = φ(y, c₁)，再由 $\frac{dy}{dx}$ = φ(y, c₁) 分离变量积分，得到通解。

> 要点：这类方程**不出现 x**，于是把 x 换成 y 当自变量、把 y′ 换成 p(y)，阶数就降下来了。

#### 例 4

求 (y′)² − y·y″ = 0 的通解。

**解**：令 p = y′，则 y″ = p·$\frac{dp}{dy}$，代入得

$$p^2-y\cdot p\frac{dp}{dy}=0 \qquad\Longrightarrow\qquad p\left(p-y\frac{dp}{dy}\right)=0$$

① 若 p = 0，则 y = 常数，显然是解（它对应下面 c₁ = 0 的情形）；

② 若 p ≠ 0，则

$$p=y\frac{dp}{dy} \qquad\Longrightarrow\qquad \frac{dp}{p}=\frac{dy}{y} \qquad\Longrightarrow\qquad \ln|p|=\ln|y|+c_1$$

即 p = c₁y。再由 $\frac{dy}{dx}$ = c₁y 分离变量：

$$\frac{dy}{y}=c_1dx \qquad\Longrightarrow\qquad \ln|y|=c_1x+c_2$$

所以通解为

$$y=c_2e^{c_1x}$$

（c₁ = 0 时即 y = c₂，把情形 ① 也包含进来了。）

#### 例 5

求 2y·y″ + (y′)² = 0 的通解。

**解**：令 p = y′，y″ = p·$\frac{dp}{dy}$：

$$2y\cdot p\frac{dp}{dy}+p^2=0 \qquad\Longrightarrow\qquad p\left(2y\frac{dp}{dy}+p\right)=0$$

p = 0 给出 y = 常数（含在后面结果中）。当 p ≠ 0 时

$$\frac{dp}{p}=-\frac{dy}{2y} \qquad\Longrightarrow\qquad \ln|p|=-\frac{1}{2}\ln|y|+c \qquad\Longrightarrow\qquad p=\frac{c_1}{\sqrt{y}} \quad (c_1>0)$$

另一支 $p<0$ 由 $c_1$ 取负号一并表示。

于是 $\frac{dy}{dx}$ = $\frac{c_{1}}{\sqrt{y}}$，分离变量得 √y·dy = c₁dx，积分：

$$\frac{2}{3}y^{\frac{3}{2}}=c_1x+c_2 \qquad\Longrightarrow\qquad y=\left(c_1x+c_2\right)^{\frac{2}{3}}$$

（$c_1\neq 0$；在 $c_1x+c_2=0$ 处 $y'$ 不存在，故通解在 $y\neq 0$ 的区间上成立。）

### 习题 1.4

1. 求 y″ = sin x 的通解。
2. 求 y″ = $\frac{1}{x^{2}}$（x > 0）的通解。
3. 求 x·y″ = y′（x > 0）的通解。
4. 求 y″ = y′ + x 的通解。
5. 求 y·y″ + (y′)² = 0 的通解（提示：左端恰为 (y·y′)′）。

## §5　微分方程的简单应用

### 一、建模的一般步骤

1. **设变量**：把要研究的量设为未知函数（如 x(t)、T(t)、y(x)），并注明单位；
2. **列方程**：抓住“变化率就是导数”这一点，用物理定律（冷却定律、质量守恒、牛顿第二定律）或几何条件（切线、法线、面积）写出含导数的等式；
3. **定条件**：由题设写出初始条件（如 T(0) = 100）或边界条件；
4. **解方程**：按前几节的方法求通解，再用初始条件定出特解；
5. **作检验**：把结果代回原方程和实际情境，检查量纲、单调性、极限是否合理。

> 关键提示：题面出现“速率”“增长速度”“冷却速度”“浓度变化”“切线斜率”这类词，几乎都是在提示你写 $\frac{dy}{dt}$ 或 $\frac{dy}{dx}$。

### 二、指数增长与衰减模型

若某量的变化率与其当前值成正比，即

$$\frac{dN}{dt}=kN$$

则分离变量积分得

$$N(t)=N_0e^{kt}$$

其中 N₀ = N(0)。k > 0 时为增长（人口、细菌、复利）；k < 0 时为衰减（放射性、药物代谢）。

#### 例 1（放射性衰变与半衰期）

已知镭的衰变速率与当时的质量成正比：1 g 镭经过 1600 年后剩下 0.5 g。求任意时刻 t（年）剩余的质量。

**解**：设 t 时刻质量为 M(t) g。由题意

$$\frac{dM}{dt}=-kM \qquad (k>0) \qquad\Longrightarrow\qquad M(t)=M_0e^{-kt}$$

由 M₀ = 1、M(1600) = 0.5 得

$$e^{-1600k}=0.5 \qquad\Longrightarrow\qquad k=\frac{\ln 2}{1600}$$

代回得

$$M(t)=e^{-\frac{\ln 2}{1600}t}=2^{-\frac{t}{1600}}$$

即每过 1600 年质量减半，这正是“半衰期”的含义；一般地，半衰期 T 与 k 的关系是 k = $\frac{\ln 2}{T}$。

### 三、牛顿冷却定律

物体温度 T 的变化率与它和周围介质温度 $T_{a}$ 之差成正比：

$$\frac{dT}{dt}=-k\left(T-T_a\right) \qquad (k>0)$$

这是可分离变量方程（也可看作一阶线性方程），解得

$$T(t)=T_a+\left(T_0-T_a\right)e^{-kt}$$

其中 T₀ = T(0)。它说明物体温度以指数方式趋近环境温度。

#### 例 2

100 °C 的水放在 20 °C 的房间里，10 分钟后水温降到 60 °C。问总共需要多长时间降到 25 °C？

**解**：$T_{a}$ = 20，$T_{0}$ = 100，故

$$T(t)=20+80e^{-kt}$$

由 T(10) = 60：$80e^{-10k}$ = 40，即 $e^{-10k}$ = 0.5，得 k = $\frac{ln2}{10}$。于是

$$T(t)=20+80\cdot 2^{-\frac{t}{10}}$$

令 T = 25：

$$80\cdot 2^{-\frac{t}{10}}=5 \qquad\Longrightarrow\qquad 2^{-\frac{t}{10}}=\frac{1}{16}=2^{-4} \qquad\Longrightarrow\qquad t=40$$

所以从开始计时起 **40 分钟**后降到 25 °C，即在 10 分钟之后再等 **30 分钟**。

### 四、混合问题（一阶线性模型）

容器中溶液的浓度变化由“流入的盐 − 流出的盐”决定。设 t 时刻容器中该物质的总量为 x(t)，则

$$\frac{dx}{dt}=c_{in}q_{in}-c_{out}q_{out}$$

其中 $q_{in}$、$c_{in}$ 分别为流入的流量与浓度，$q_{out}$、$c_{out}$ 为流出侧的流量与浓度；流出浓度按“充分搅拌后均匀”取 $c_{out}$ = $\frac{x(t)}{V(t)}$。

#### 例 3

容器内原有 100 L 盐水，含盐 10 kg。以 3 L/min 的速率注入含盐 0.5 kg/L 的盐水，同时以 2 L/min 的速率流出（充分搅拌）。求任意时刻容器中的含盐量。

**解**：设 t 时刻含盐 x(t) kg，容器内液体体积为

$$V(t)=100+(3-2)t=100+t$$

流入盐的速率为 3 × 0.5 = 1.5 kg/min，流出盐的速率为

$$2\cdot\frac{x(t)}{100+t}$$

于是

$$\frac{dx}{dt}=1.5-\frac{2x}{100+t}, \qquad x(0)=10$$

整理成一阶线性方程：

$$\frac{dx}{dt}+\frac{2}{100+t}x=1.5$$

积分因子为 μ = (100 + t)²（因为 ∫$\frac{2}{(100+t)}dt$ = 2ln(100+t)），于是

$$\frac{d}{dt}\left[x(100+t)^2\right]=1.5(100+t)^2$$

积分得 x(100 + t)² = 0.5(100 + t)³ + C。代入 x(0) = 10：

$$10\cdot 100^2=0.5\cdot 100^3+C \qquad\Longrightarrow\qquad C=-400000$$

故

$$x(t)=0.5(100+t)-\frac{400000}{(100+t)^2}$$

### 五、几何应用

几何题的条件通常落在**切线**或**法线**上。过点 (x, y) 的切线方程为

$$Y-y=y'(X-x)$$

它在 y 轴上的截距为 y − x·y′；法线斜率为 −$\frac{1}{y′}$。

#### 例 4

求一曲线，使其上任一点处的**切线在 y 轴上的截距等于原点到该点的距离**。

**解**：设曲线为 y = y(x)，点 (x, y) 处切线在 y 轴的截距为 y − x·y′，原点到该点的距离为 √(x² + y²)。由题意

$$y-xy'=\sqrt{x^2+y^2}$$

这是齐次方程。改写为

$$y'=\frac{y-\sqrt{x^2+y^2}}{x}$$

令 u = $\frac{y}{x}$（即 y = ux，y′ = xu′ + u）：

$$xu'+u=u-\sqrt{1+u^2} \qquad\Longrightarrow\qquad xu'=-\sqrt{1+u^2}$$

分离变量并积分：

$$\int\frac{du}{\sqrt{1+u^2}}=-\int\frac{dx}{x} \qquad\Longrightarrow\qquad \ln\left(u+\sqrt{1+u^2}\right)=-\ln x+c$$

即 u + √(1 + u²) = $\frac{c}{x}$。令 s = $\frac{c}{x}$，则由 √(1 + u²) = s − u 两边平方可解出

$$u=\frac{s^2-1}{2s}=\frac{c^2-x^2}{2cx}$$

因此

$$y=xu=\frac{c^2-x^2}{2c}$$

所求曲线是**抛物线族** y = $\frac{(c^{2} - x^{2})}{(2c)}$（开口向下、顶点在 y 轴上的抛物线）。

> 检验：把 y = $\frac{(c^{2} - x^{2})}{(2c)}$ 代入原方程，左端 y − xy′ = $\frac{(c^{2}-x^{2})}{(2c)}$ + $\frac{x^{2}}{c}$ = $\frac{(c^{2}+x^{2})}{(2c)}$，右端 √(x²+y²) = $\sqrt{x^{2}+\frac{(c^{2}-x^{2})^{2}}{4c^{2}}}$ = $\frac{c^{2}+x^{2}}{2c}$，两边相等。

### 习题 1.5

1. 细菌繁殖速率与当时的细菌数成正比，3 小时后细菌数变为原来的 2 倍。问几小时后变为原来的 8 倍？
2. 物体在 20 °C 的空气中由 100 °C 冷却到 60 °C 用了 20 分钟。求温度 T(t) 的表达式，并求降到 30 °C 所需的时间。
3. 容器内盛有 100 L 清水，以 2 L/min 注入含盐 1 kg/L 的盐水，同时以 2 L/min 流出（体积不变，充分搅拌）。求 t 时刻的含盐量 x(t)。
4. 质量为 m 的物体自由下落，所受空气阻力与速度成正比（大小为 kv，k > 0）。求速度 v(t) 及所谓的“终极速度”。
5. 求一曲线，使其上任一点处的**法线都通过原点**。

## 习题解答

### 习题 1.1

**1.** 求 $\frac{dy}{dx}$ = $\frac{x}{y}$ 的通解，并写出过点 (0, 1) 的特解。

解：分离变量得 y dy = x dx，积分得 y² = x² + C。代入 x = 0，y = 1 定出 C = 1，故特解为

$$y^2-x^2=1$$

**2.** 求 $\frac{dy}{dx}$ = $e^{x-y}$ 的通解。

解：把右端写成 $e^{x}$·$e^{-y}$，分离变量：$e^{y}dy$ = $e^{x}dx$，积分得

$$e^{y}=e^{x}+C \qquad\Longrightarrow\qquad y=\ln\left(e^{x}+C\right)$$

要求 $e^{x}$ + C > 0。

**3.** 求 $\frac{dy}{dx}$ = $\frac{(x + y)}{x}$ 的通解。

解：右端 = 1 + $\frac{y}{x}$，是齐次方程。令 u = $\frac{y}{x}$，则 xu′ + u = 1 + u，即 xu′ = 1，故 u = ln|x| + C，

$$y=x\ln|x|+Cx$$

**4.** 求 $\frac{dy}{dx}$ = $\frac{y}{x}$ + tan($\frac{y}{x}$) 的通解（0 < $\frac{y}{x}$ < $\frac{\pi }{2}$）。

解：令 u = $\frac{y}{x}$，则 xu′ + u = u + tan u，即 xu′ = tan u。分离变量：

$$\frac{du}{\tan u}=\frac{dx}{x} \qquad\Longrightarrow\qquad \ln|\sin u|=\ln|x|+C$$

故 sin u = Cx，即

$$\sin\frac{y}{x}=Cx$$

**5.** 求 (x² + y²)dx − xy dy = 0 的通解。

解：化为 $\frac{dy}{dx}$ = $\frac{x}{y}$ + $\frac{y}{x}$，是齐次方程。令 u = $\frac{y}{x}$：xu′ + u = $\frac{1}{u}$ + u，即 xu′ = $\frac{1}{u}$，于是 u du = $\frac{dx}{x}$，积分得

$$\frac{u^2}{2}=\ln|x|+C \qquad\Longrightarrow\qquad y^2=2x^2\left(\ln|x|+C\right)$$

### 习题 1.2

**1.** 求 y′ + $\frac{y}{x}$ = $e^{x}$（x > 0）的通解。

解：P = $\frac{1}{x}$，∫P dx = ln x，故 y = ($\frac{1}{x}$)[∫x $e^{x}dx$ + C]，而 ∫x $e^{x}dx$ = (x − 1)$e^{x}$，所以

$$y=\frac{(x-1)e^{x}+C}{x}$$

**2.** 求 y′ − 2y = $e^{2x}$ 的通解。

解：P = −2，$e^{-\int P dx}$ = $e^{2x}$，$e^{\int P dx}$ = $e^{-2x}$：

$$y=e^{2x}\left[\int e^{2x}e^{-2x}dx+C\right]=e^{2x}\left(x+C\right)$$

**3.** 求 xy′ + y = x² 的通解。

解：左端恰为 (xy)′，故 (xy)′ = x²，积分得 xy = $\frac{x^{3}}{3}$ + C，即

$$y=\frac{x^2}{3}+\frac{C}{x}$$

**4.** 求 y′ + y = y²$e^{x}$ 的通解（伯努利方程）。

解：n = 2，令 z = $y^{-1}$，得 z′ − z = −$e^{x}$。这是一阶线性方程（P̃ = −1，f̃ = −$e^{x}$）：

$$z=e^{x}\left[\int(-e^{x})e^{-x}dx+C\right]=e^{x}\left(C-x\right)$$

故

$$y=\frac{e^{-x}}{C-x}$$

**5.** 求 y′ − $\frac{y}{x}$ = −$\frac{y^{2}}{x}$ 的通解（伯努利方程）。

解：n = 2，P = −$\frac{1}{x}$，f = −$\frac{1}{x}$，令 z = $y^{-1}$，得

$$z'+\frac{1}{x}z=\frac{1}{x}$$

于是 z = ($\frac{1}{x}$)[∫($\frac{1}{x}$)·x dx + C] = ($\frac{1}{x}$)(x + C) = 1 + $\frac{C}{x}$，故

$$y=\frac{x}{x+C}$$

### 习题 1.3

**1.** 验证 (2x + y)dx + (x + 2y)dy = 0 是全微分方程，并求通解。

解：$\frac{\partial P}{\partial y}$ = 1，$\frac{\partial Q}{\partial x}$ = 1，两者相等，是全微分方程。取 u = x² + xy + y²，则 $\frac{\partial u}{\partial x}$ = 2x + y，$\frac{\partial u}{\partial y}$ = x + 2y，故通解为

$$x^2+xy+y^2=C$$

**2.** 求 (3x² + 2y)dx + (2x − 3y²)dy = 0 的通解。

解：$\frac{\partial P}{\partial y}$ = 2 = $\frac{\partial Q}{\partial x}$，是全微分方程。由 $\frac{\partial u}{\partial x}$ = 3x² + 2y 积分得 u = x³ + 2xy + C(y)；再由 $\frac{\partial u}{\partial y}$ = 2x + C′(y) = 2x − 3y² 得 C′(y) = −3y²，即 C(y) = −y³。故

$$x^3+2xy-y^3=C$$

**3.** 求 (y + 1)dx − x dy = 0 的通解。

解：P = y + 1，Q = −x，$\frac{\partial P}{\partial y}$ = 1，$\frac{\partial Q}{\partial x}$ = −1，不是全微分方程。计算

$$\frac{1}{Q}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)=\frac{2}{-x}=-\frac{2}{x}=\varphi(x)$$

只含 x，取 μ = $e^{\int \frac{-2}{x} dx}$ = $\frac{1}{x^{2}}$。方程化为

$$\frac{y+1}{x^2}dx-\frac{1}{x}dy=0$$

注意 d[$\frac{y+1}{x}$] = $\frac{x dy-(y+1)dx}{x^{2}}$，故上式即 −d[$\frac{y+1}{x}$] = 0，通解为

$$\frac{y+1}{x}=C \qquad\Longrightarrow\qquad y=Cx-1$$

**4.** 求 xy dx + (y² − x²)dy = 0 的通解（提示：积分因子只含 y）。

解：P = xy，Q = y² − x²，$\frac{\partial P}{\partial y}$ = x，$\frac{\partial Q}{\partial x}$ = −2x。计算

$$-\frac{1}{P}\left(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x}\right)=-\frac{3x}{xy}=-\frac{3}{y}=\varphi(y)$$

只含 y，取 μ = $e^{\int \frac{-3}{y} dy}$ = $\frac{1}{y^{3}}$。方程化为

$$\frac{x}{y^2}dx+\left(\frac{1}{y}-\frac{x^2}{y^3}\right)dy=0$$

它的两个偏导满足 $\frac{\partial P}{\partial y}$ = −$\frac{2x}{y^{3}}$ = $\frac{\partial Q}{\partial x}$，故是全微分方程。由 $\frac{\partial u}{\partial x}$ = $\frac{x}{y^{2}}$ 得 u = $\frac{x^{2}}{2y^{2}}$ + C(y)，再由 $\frac{\partial u}{\partial y}$ = −$\frac{x^{2}}{y^{3}}$ + C′(y) = $\frac{1}{y}$ − $\frac{x^{2}}{y^{3}}$ 得 C′(y) = $\frac{1}{y}$，即 C(y) = ln|y|。通解为

$$\frac{x^2}{2y^2}+\ln|y|=C$$

**5.** 用 μ = $\frac{1}{(x^{2} + y^{2})}$ 与 μ = $\frac{1}{(xy)}$ 分别求 y dx − x dy = 0 的通解。

解：取 μ = $\frac{1}{(x^{2} + y^{2})}$，得

$$\frac{y\,dx-x\,dy}{x^2+y^2}=d\left(\arctan\frac{x}{y}\right)=0 \qquad\Longrightarrow\qquad \frac{x}{y}=c$$

取 μ = $\frac{1}{(xy)}$，得

$$\frac{y\,dx-x\,dy}{xy}=\frac{dx}{x}-\frac{dy}{y}=d\left(\ln\left|\frac{x}{y}\right|\right)=0 \qquad\Longrightarrow\qquad \frac{x}{y}=c$$

两者等价，因为 $\frac{x}{y}$ = 常数 就是同一个通解（积分因子不唯一）。

### 习题 1.4

**1.** 求 y″ = sin x 的通解。

解：y′ = −cos x + c₁，故

$$y=-\sin x+c_1x+c_2$$

**2.** 求 y″ = $\frac{1}{x^{2}}$（x > 0）的通解。

解：y′ = −$\frac{1}{x}$ + c₁，故

$$y=-\ln x+c_1x+c_2$$

**3.** 求 x·y″ = y′（x > 0）的通解。

解：令 p = y′，则 x·$\frac{dp}{dx}$ = p，即 $\frac{dp}{p}$ = $\frac{dx}{x}$，得 p = c₁x。再积分：

$$y=\frac{c_1}{2}x^2+c_2$$

**4.** 求 y″ = y′ + x 的通解。

解：令 p = y′，得 p′ − p = x。由通解公式（P̃ = −1，f̃ = x）：

$$p=e^{x}\left[\int xe^{-x}dx+c_1\right]=e^{x}\left[-(x+1)e^{-x}+c_1\right]=c_1e^{x}-x-1$$

再积分：

$$y=c_1e^{x}-\frac{x^2}{2}-x+c_2$$

**5.** 求 y·y″ + (y′)² = 0 的通解（提示：左端恰为 (y·y′)′）。

解：由 (y·y′)′ = (y′)² + y·y″ = 0 得 y·y′ = c₁，即 y dy = c₁dx，积分得 y² = c₁x + c₂，故

$$y^2=c_1x+c_2$$

（令 p = y′、按 §4 三的方法计算，结果相同。）

### 习题 1.5

**1.** 细菌繁殖速率与当时细菌数成正比，3 小时后变为原来的 2 倍。几小时后变为 8 倍？

解：N′ = kN，N(3) = 2N₀，故 N(t) = $N_{0}e^{kt}$ 且 $e^{3k}$ = 2，即 N(t) = N₀·$2^{\frac{t}{3}}$。由 $2^{\frac{t}{3}}$ = 8 = 2³ 得

$$t=9$$

即 9 小时后变为原来的 8 倍。

**2.** 由 100 °C 冷却到 60 °C 用了 20 分钟，环境 20 °C。求 T(t) 与降到 30 °C 的时间。

解：T(t) = 20 + $80e^{-kt}$，由 T(20) = 60 得 $e^{-20k}$ = $\frac{1}{2}$，即

$$T(t)=20+80\cdot 2^{-\frac{t}{20}}$$

令 T = 30：80·$2^{\frac{-t}{20}}$ = 10，即 $2^{\frac{-t}{20}}$ = $\frac{1}{8}$ = $2^{-3}$，得 t = 60 分钟。

**3.** 100 L 清水，以 2 L/min 注入含盐 1 kg/L 的盐水，同时以 2 L/min 流出。求 x(t)。

解：体积不变（100 L），流出浓度为 $\frac{x}{100}$，故

$$\frac{dx}{dt}=2-\frac{x}{50}, \qquad x(0)=0$$

这是一阶线性方程，积分因子 $e^{\frac{t}{50}}$：

$$xe^{\frac{t}{50}}=100e^{\frac{t}{50}}+C \qquad\Longrightarrow\qquad x=100+Ce^{-\frac{t}{50}}$$

代入 x(0) = 0 得 C = −100，故

$$x(t)=100\left(1-e^{-\frac{t}{50}}\right)$$

**4.** 自由下落，空气阻力 kv（k > 0），求 v(t) 与终极速度。

解：由牛顿第二定律 m·$\frac{dv}{dt}$ = mg − kv，整理得

$$\frac{dv}{dt}+\frac{k}{m}v=g$$

积分因子 $e^{\frac{kt}{m}}$，解得 v = $\frac{mg}{k}$ + $Ce^{\frac{-kt}{m}}$。由 v(0) = 0 得 C = −$\frac{mg}{k}$，故

$$v(t)=\frac{mg}{k}\left(1-e^{-\frac{k}{m}t}\right)$$

当 t → ∞ 时 v → $\frac{mg}{k}$，即**终极速度**为 $\frac{mg}{k}$。

**5.** 求一曲线，使其上任一点处的法线都通过原点。

解：点 (x, y) 处法线斜率为 −$\frac{1}{y′}$，法线过原点，故

$$-\frac{1}{y'}\cdot(-x)=-y \qquad\Longrightarrow\qquad y'=-\frac{x}{y}$$

分离变量得 y dy = −x dx，积分得 x² + y² = c。所求曲线是以原点为圆心的**圆族**。

> 检验：圆 x² + y² = c 上任一点处半径即为法线方向，它当然过圆心（原点）。

# 第 2 章　线性微分方程


## §1 二阶线性微分方程解的结构

### 一、二阶线性微分方程的形式

$$\frac{d^2y}{dx^2}+p(x)\frac{dy}{dx}+q(x)y=f(x) \qquad (1)$$

$$\frac{d^2y}{dx^2}+p(x)\frac{dy}{dx}+q(x)y=0 \qquad (2)$$

f(x) ≢ 0（不恒为零），称 (1) 为二阶非齐次线性微分方程

f(x) ≡ 0，称 (1) 为二阶齐次线性微分方程，(2) 为 (1) 对应的齐次方程

### 二、二阶线性微分算子

1. 符号：L = $\frac{d^{2}}{dx^{2}}$ + p(x)·$\frac{d}{dx}$ + q(x)

$$L[y]=\left(\frac{d^2}{dx^2}+p(x)\frac{d}{dx}+q(x)\right)y=\frac{d^2y}{dx^2}+p(x)\frac{dy}{dx}+q(x)y$$

(1) 转化为 L[y] = f(x)，(2) 转化为 L[y] = 0

2. 性质：设函数 y = y(x)，y₁ = y₁(x)，y₂ = y₂(x) 二阶可导，c，c₁，c₂ 为常数，则

(1) L[cy] = c·L[y]

(2) L[y₁ + y₂] = L[y₁] + L[y₂]

即 L[c₁y₁ + c₂y₂] = c₁L[y₁] + c₂L[y₂]

### 三、叠加原理

定理 1：设 y₁ = y₁(x)，y₂ = y₂(x) 都是 L[y] = 0 的解，c₁，c₂ 是常数，则 c₁y₁ + c₂y₂ 也是 L[y] = 0 的解 —— 解的线性组合仍是解

### 四、函数线性相关与线性无关

设 y₁ = y₁(x)，y₂ = y₂(x) 是定义在某区间上的函数，若存在不全为 0 的常数 k₁，k₂ 使 k₁y₁(x) + k₂y₂(x) = 0，则线性相关

注：设 y₁(x) 与 y₂(x) 线性相关，则存在不全为 0 的 k₁，k₂ 使得 k₁y₁(x) + k₂y₂(x) = 0

设 k₁ ≠ 0，则 y₁(x) = −($\frac{k_{2}}{k_{1}}$)·y₂(x)（乘积形式才是严格的等价表述）；若进一步有 y₂(x) ≠ 0，也可写成 $\frac{y_{1}(x)}{y_{2}(x)}$ = −$\frac{k_{2}}{k_{1}}$。

### 五、二阶齐次线性微分方程解的结构定理

定理 2：设 y₁(x) 与 y₂(x) 是 L[y] = 0 的线性无关的解，c₁，c₂ 是任意常数，则 L[y] = 0 的通解是

$$y=c_1y_1(x)+c_2y_2(x)$$

### 六、非齐次通解的结构定理

定理 3：设 ỹ(x) 是 L[y] = f(x) 的一个特解，Y = c₁y₁(x) + c₂y₂(x) 是 L[y] = 0 的通解，则

$$y=\tilde{y}(x)+Y$$

是 L[y] = f(x) 的通解

### 七、广义叠加原理

定理 4：设 y₁，y₂ 分别是 L[y] = f₁(x)，L[y] = f₂(x) 的解，则 y₁ + y₂ 是 L[y] = f₁(x) + f₂(x) 的解

定理 5：设 y₁ + i·y₂ 是方程 L[y] = f₁(x) + i·f₂(x) 的解（L 为实系数算子），则 y₁，y₂ 分别是 L[y] = f₁(x) 和 L[y] = f₂(x) 的解。（比较两端的实部与虚部即得：L[y₁ + i y₂] = L[y₁] + iL[y₂] = f₁ + i f₂。）

## §2 二阶常系数线性微分方程

### §2.1 二阶常系数齐次线性微分方程

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=0 \qquad (1)$$

设 y = $e^{rx}$ 是 (1) 的解，r 是待定常数

则 $\frac{dy}{dx}$ = r·$e^{rx}$，$\frac{d^{2}y}{dx^{2}}$ = r²·$e^{rx}$，代入 (1)，得

$$r^2e^{rx}+pre^{rx}+qe^{rx}=0$$

$$r^2+pr+q=0$$

—— (1) 的特征方程，记为 (2)

### ① p² − 4q > 0 时，(1) 有两个不相等的实根 r₁，r₂

则 y₁ = $e^{r_{1}x}$，y₂ = $e^{r_{2}x}$ 都是 (1) 的解

又 $\frac{y_{2}}{y_{1}}$ = $e^{(r_{2}-r_{1})x}$ ≠ 常数，故 y₁ 与 y₂ 线性无关

∴ (1) 的通解为 y = c₁y₁ + c₂y₂

### ② p² − 4q = 0，(1) 有两个相等实根 r₁ = r₂ = r

则 y₁ = $e^{rx}$ 是 (1) 的解

设 y = u·$e^{rx}$ 是 (1) 的解，可有 y′，y″，代入 L[y] 得一方程

化简有

$$\frac{d^2u}{dx^2}=0$$

取 u = x，则 y₂ = x·$e^{rx}$ 是 (1) 的解，显然 y₁，y₂ 线性无关

∴ (1) 的通解为

$$y=(c_1+c_2x)e^{rx}$$

### ③ p² − 4q < 0，(1) 有两个复根 r₁，r₂ = α ± iβ

$$y_1=e^{r_1x}=e^{(\alpha+i\beta)x}=e^{\alpha x}e^{i\beta x}$$

$$y_2=e^{r_2x}=e^{\alpha x}e^{-i\beta x}$$


$$e^{ix}=\cos x+i\sin x$$

$$e^{-ix}=\cos x-i\sin x$$

$$\Rightarrow \quad y_1=e^{\alpha x}(\cos\beta x+i\sin\beta x)$$

$$y_2=e^{\alpha x}(\cos\beta x-i\sin\beta x)$$

令

$$y_1^{*}=\frac{1}{2}(y_1+y_2)=e^{\alpha x}\cos\beta x, \qquad y_2^{*}=\frac{1}{2i}(y_1-y_2)=e^{\alpha x}\sin\beta x$$

$\frac{y_{1}*}{y_{2}*}$ = cot βx ≠ 常数，y₁* 与 y₂* 线性无关

（严格地说，比值在 βx = kπ 处无意义；也可由 Wronski 行列式 $W=\beta e^{2\alpha x}\neq 0$ 直接判定线性无关。）

∴ (1) 的通解为

$$y=e^{\alpha x}(c_1\cos\beta x+c_2\sin\beta x)$$

eg: (1) $\frac{d^{2}y}{dx^{2}}$ + 3 $\frac{dy}{dx}$ − 10y = 0

解：r² + 3r − 10 = 0

$$(r+5)(r-2)=0$$

∴ 通解为 y = $c_{1}e^{-5x}$ + $c_{2}e^{2x}$，c₁，c₂ 为任意常数

(2) $\frac{d^{2}y}{dx^{2}}$ − 4 $\frac{dy}{dx}$ + 4y = 0

解：r² − 4r + 4 = 0，r₁ = r₂ = 2

∴ 通解为 y = (c₁ + c₂x)$e^{2x}$，其中 c₁，c₂ 为任意常数

(3) $\frac{d^{2}y}{dx^{2}}$ + 4 $\frac{dy}{dx}$ + 7y = 0

解：r² + 4r + 7 = 0

$$r=\frac{-4\pm\sqrt{16-28}}{2}=-2\pm\sqrt{3}i$$

∴ 通解为 y = $e^{-2x}$(c₁cos√3x + c₂sin√3x)，c₁，c₂ 为任意常数

### §2.2 二阶常系数非齐次线性微分方程

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=f(x) \qquad (1)$$

### 一、f(x) = $P_{n}$(x)·$e^{\alpha x}$，其中 $P_{n}$(x) 是 n 次多项式

设 ỹ = Q(x)·$e^{\alpha x}$ 是 (1) 的特解，Q(x) 是待定多项式

$$\frac{d\tilde{y}}{dx}=\frac{dQ}{dx}e^{\alpha x}+\alpha Qe^{\alpha x}=\left(\frac{dQ}{dx}+\alpha Q\right)e^{\alpha x}$$

$$\frac{d^2\tilde{y}}{dx^2}=\left(\frac{d^2Q}{dx^2}+\alpha\frac{dQ}{dx}\right)e^{\alpha x}+\left(\frac{dQ}{dx}+\alpha Q\right)e^{\alpha x}\alpha=\left(\frac{d^2Q}{dx^2}+2\alpha\frac{dQ}{dx}+\alpha^2Q\right)e^{\alpha x}$$

代入 (1) 式，得

$$\frac{d^2Q}{dx^2}+(2\alpha+p)\frac{dQ}{dx}+(\alpha^2+p\alpha+q)Q=P_n(x) \qquad (2)$$

① α² + pα + q ≠ 0，即 α 不是特征方程的根

这时 Q(x) 是 n 次多项式

设 Q(x) = $a_{0}x^{n}$ + $a_{1}x^{n-1}$ + … + $a_{n-1}x$ + $a_{n}$ ≜ $Q_{n}$(x)

∴ ỹ = $Q_{n}$(x)·$e^{\alpha x}$

② α² + pα + q = 0 但 2α + p ≠ 0，即 α 是特征方程的单根

此时 (2) 式化为

$$\frac{d^2Q}{dx^2}+(2\alpha+p)\frac{dQ}{dx}=P_n(x)$$

取 Q(x) = x·$Q_{n}$(x)，这时 ỹ = x·$Q_{n}$(x)·$e^{\alpha x}$

③ α² + pα + q = 0 且 2α + p = 0，即 α 是二重根

$$\tilde{y}=x^2Q_n(x)e^{\alpha x}$$

综上，

$$\tilde{y}=x^kQ_n(x)e^{\alpha x}$$

k = 0，α 不为特征根时

k = 1，α 是单根

k = 2，α 是二重根

eg. (1) $\frac{d^{2}y}{dx^{2}}$ + 5 $\frac{dy}{dx}$ + 6y = 1·$e^{3x}$

解：r² + 5r + 6 = 0 ⇒ r₁ = −2，r₂ = −3

α 不是特征方程的特征根

∴ 特解形如 ỹ = Q·$e^{3x}$

(2) $\frac{d^{2}y}{dx^{2}}$ + 5 $\frac{dy}{dx}$ + 6y = 3x·$e^{-2x}$

α = −2 是特征方程的单根

∴ 特解形如 ỹ = x(ax + b)·$e^{-2x}$

(3) $\frac{d^{2}y}{dx^{2}}$ + 2 $\frac{dy}{dx}$ + y = −(3x² + 1)$e^{-x}$

r² + 2r + 1 = 0，r = −1，α = −1 是二重根

∴ ỹ = x²(ax² + bx + c)·$e^{-x}$

eg(4) 求 $\frac{d^{2}y}{dx^{2}}$ + $\frac{dy}{dx}$ + 2y = x² − 3 的一个特解

解：r² + r + 2 = 0，r = $\frac{(-1 \pm  \sqrt{1-8})}{2}$

α = 0 不是特征方程的根

∴ ỹ = (ax² + bx + c)·$e^{\alpha x}$ = ax² + bx + c

ỹ′ = 2ax + b，ỹ″ = 2a

代入原方程，解得 a = $\frac{1}{2}$，b = −$\frac{1}{2}$，c = −$\frac{7}{4}$

∴ ỹ = $\frac{1}{2}$ x² − $\frac{1}{2}$ x − $\frac{7}{4}$

(5) 求 $\frac{d^{2}y}{dx^{2}}$ + y = (x − 2)·$e^{3x}$ 的通解

解：r² + 1 = 0 ⇒ r = ±i

∴ $\frac{d^{2}y}{dx^{2}}$ + y = 0 的通解 Y = c₁cos x + c₂sin x

∵ α = 3 不是特征根

∴ ỹ = (ax + b)·$e^{3x}$ 是原方程的一个特解

$$\frac{d\tilde{y}}{dx}=ae^{3x}+3(ax+b)e^{3x}$$

$$\frac{d^2\tilde{y}}{dx^2}=3ae^{3x}+(3ax+a+3b)e^{3x}\cdot 3=(9ax+6a+9b)e^{3x}$$

代入原方程，解得

$$a=\frac{1}{10}$$

$$b=-\frac{13}{50}$$

∴ ỹ = ($\frac{x}{10}$ − $\frac{13}{50}$)$e^{3x}$

∴ 原方程通解 y = c₁cos x + c₂sin x + ($\frac{x}{10}$ − $\frac{13}{50}$)$e^{3x}$

(6) $\frac{d^{2}y}{dx^{2}}$ − 2 $\frac{dy}{dx}$ − 3y = (x² + 1)$e^{-x}$

解：r² − 2r − 3 = 0 ⇒ r = 3 或 r = −1

∴ $\frac{d^{2}y}{dx^{2}}$ − 2 $\frac{dy}{dx}$ − 3y = 0 的通解为 Y = $c_{1}e^{3x}$ + $c_{2}e^{-x}$

α = −1 是特征方程的单根

∴ 特解形如 ỹ = x(ax² + bx + c)·$e^{-x}$　（套用公式 2）

$$Q(x)=x(ax^2+bx+c)=ax^3+bx^2+cx$$

$$\frac{d^2Q}{dx^2}+(2\alpha+p)\frac{dQ}{dx}+(\alpha^2+p\alpha+q)Q=x^2+1$$

$$6ax+2b-4(3ax^2+2bx+c)=x^2+1$$

$$-12a=1$$

$$6a-8b=0$$

$$2b-4c=1$$

$$\Rightarrow \quad a=-\frac{1}{12}, \qquad b=-\frac{1}{16}, \qquad c=-\frac{9}{32}$$

∴ 特解 ỹ = −x($\frac{1}{12}$ x² + $\frac{1}{16}$ x + $\frac{9}{32}$)·$e^{-x}$

∴ 原方程通解为 y = Y + ỹ = $c_{1}e^{3x}$ + $c_{2}e^{-x}$ − x($\frac{1}{12}$ x² + $\frac{1}{16}$ x + $\frac{9}{32}$)·$e^{-x}$

### 二、f(x) = $P_{n}$(x)$e^{\alpha x}\cos$ βx 或 $P_{n}$(x)$e^{\alpha x}\sin$ βx 解法一

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=P_n(x)e^{\alpha x}\cos\beta x \qquad (1)$$

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=P_n(x)e^{\alpha x}\sin\beta x \qquad (2)$$

欧拉公式：$e^{i\beta x}$ = cos βx + i sin βx

$$\Rightarrow \quad P_n(x)e^{(\alpha+i\beta)x}=P_n(x)e^{\alpha x}\cos\beta x+iP_n(x)e^{\alpha x}\sin\beta x$$

考察方程

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=P_n(x)\cdot e^{(\alpha+i\beta)x} \qquad (3)$$

设 (3) 有特解 ỹ = ỹ₁ + i ỹ₂，则 ỹ₁ 和 ỹ₂ 分别为 (1)(2) 的特解

1. $\frac{d^{2}y}{dx^{2}}$ − y = sin x

解：r² − 1 = 0 ⇒ r = ±1

∴ 齐次方程通解为 Y = $c_{1}e^{x}$ + $c_{2}e^{-x}$　（n = 0，α = 0，β = 1）

构造方程

$$\frac{d^2y}{dx^2}-y=e^{ix}$$

设其特解为 ỹ = a·$e^{ix}$

$$\frac{d\tilde{y}}{dx}=iae^{ix}, \qquad \frac{d^2\tilde{y}}{dx^2}=-ae^{ix}$$

代入原方程，−a − a = 1 ⇒ a = −$\frac{1}{2}$

∴ ỹ = −$\frac{1}{2}$ $e^{ix}$ = −$\frac{1}{2}$ (cos x + i sin x)

∴ 原方程特解为 ỹ₁ = −$\frac{1}{2}$ sin x，通解 y = Y + ỹ₁ = $c_{1}e^{x}$ + $c_{2}e^{-x}$ − $\frac{1}{2}$ sin x

2. $\frac{d^{2}y}{dx^{2}}$ − y = $e^{x}\cos$ 2x

解：r² − 1 = 0，r = ±1

齐次方程通解为 Y = $c_{1}e^{x}$ + $c_{2}e^{-x}$　（n = 0，α = 1，β = 2）

构造方程

$$\frac{d^2y}{dx^2}-y=e^{(1+2i)x}$$

设其特解为 ỹ = a·$e^{(1+2i)x}$

$$\frac{d\tilde{y}}{dx}=a(1+2i)e^{(1+2i)x}, \qquad \frac{d^2\tilde{y}}{dx^2}=a(-3+4i)e^{(1+2i)x}$$

∴ a(−3 + 4i) − a = 1 ⇒ a = $\frac{1}{(-4 + 4i)}$ = −$\frac{1}{4}$ · $\frac{1}{(1 - i)}$ = −$\frac{1}{8}$ (1 + i)

∴ ỹ = −$\frac{1}{8}$ (1 + i)·$e^{(1+2i)x}$ = −$\frac{1}{8}$ (1 + i)·$e^{x}$(cos 2x + i sin 2x) = −$\frac{e^{x}}{8}$ [(cos 2x − sin 2x) + i(sin 2x + cos 2x)]

∴ 原方程特解为 ỹ₁ = −$\frac{e^{x}}{8}$ (cos 2x − sin 2x)

### 三、解法二

将 Pₙ(x)$e^{\alpha x}\cos$ βx 或 Pₙ(x)$e^{\alpha x}\sin$ βx 改写为

$$f(x)=\left[P_n^1(x)\cos\beta x+P_n^2(x)\sin\beta x\right]e^{\alpha x}$$

由欧拉公式

$$e^{i\beta x}=\cos\beta x+i\sin\beta x \qquad e^{-i\beta x}=\cos\beta x-i\sin\beta x$$

$$\Rightarrow \quad \cos\beta x=\frac{e^{i\beta x}+e^{-i\beta x}}{2} \qquad \sin\beta x=\frac{e^{i\beta x}-e^{-i\beta x}}{2i}=\frac{-e^{i\beta x}+e^{-i\beta x}}{2}i$$

$$\therefore \quad f(x)=\left[P_n^1\cdot\frac{e^{i\beta x}+e^{-i\beta x}}{2}+P_n^2\cdot\frac{-e^{i\beta x}+e^{-i\beta x}}{2}i\right]\cdot e^{\alpha x}$$

$$=\left[\frac{P_n^1-P_n^2i}{2}\cdot e^{i\beta x}+\frac{P_n^1+P_n^2i}{2}\cdot e^{-i\beta x}\right]\cdot e^{\alpha x}$$

$$=\frac{P_n^1-P_n^2i}{2}\cdot e^{(\alpha+i\beta)x}+\frac{P_n^1+P_n^2i}{2}\cdot e^{(\alpha-i\beta)x}$$

令

$$g(x)=\frac{P_n^1(x)-P_n^2(x)i}{2}\cdot e^{(\alpha+i\beta)x}$$

设 m = max{n, l}，其中 n、l 为两个多项式 $P_{n}^{1}(x)$ 与 $P_{n}^{2}(x)$ 的次数（本页两式同为 n 次，故 m = n）

则 f(x) = g(x) + ḡ(x)

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=f(x) \qquad (1)$$

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=g(x) \qquad (2)$$

$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=\bar{g}(x) \qquad (3)$$


则方程特解形如

$$\tilde{y}=x^k\left[R_m^1\cos\beta x+R_m^2\sin\beta x\right]e^{\alpha x}$$


设 α + iβ 是特征方程的 k 重根（k = 0 或 1）

则 (2) 的特解形如

$$\tilde{y}_2=x^k\cdot Q_m(x)e^{(\alpha+i\beta)x}$$

设 $Q_{m}$(x) = $\frac{1}{2}$[$R_{m}^{1}$(x) − i·$R_{m}^{2}$(x)]

$$\tilde{y}_2=\frac{1}{2}x^k\left(R_m^1-iR_m^2\right)e^{\alpha x}(\cos\beta x+i\sin\beta x)$$

$$=\frac{1}{2}x^k\left(R_m^1\cos\beta x+iR_m^1\sin\beta x-iR_m^2\cos\beta x+R_m^2\sin\beta x\right)e^{\alpha x}$$

$$=\frac{1}{2}x^k\left[\left(R_m^1\cos\beta x+R_m^2\sin\beta x\right)+i\left(R_m^1\sin\beta x-R_m^2\cos\beta x\right)\right]e^{\alpha x}$$

类似地，(3) 的特解形如

$$\tilde{y}_3=\overline{\tilde{y}_2}$$

$$\therefore \quad \tilde{y}=\tilde{y}_2+\tilde{y}_3=\tilde{y}_2+\overline{\tilde{y}_2}$$

$$=x^k\left(R_m^1\cos\beta x+R_m^2\sin\beta x\right)e^{\alpha x}$$

1. $\frac{d^{2}y}{dx^{2}}$ − y = sin x

解：r² − 1 = 0 ⇒ r = ±1

齐次方程通解 Y = $c_{1}e^{x}$ + $c_{2}e^{-x}$　　m = 0，α = 0，β = 1

i 不是特征方程的根，k = 0

设 ỹ = a cos x + b sin x

$$\frac{d\tilde{y}}{dx}=-a\sin x+b\cos x \qquad \frac{d^2\tilde{y}}{dx^2}=-a\cos x-b\sin x$$

可得 a = 0，b = −$\frac{1}{2}$

$$\therefore \quad \tilde{y}=-\frac{1}{2}\sin x$$

$$\therefore \quad y=c_1e^{x}+c_2e^{-x}-\frac{1}{2}\sin x$$

2. $\frac{d^{2}y}{dx^{2}}$ − y = $e^{x}\cos$ 2x

解：r² − 1 = 0 ⇒ r = ±1

齐次方程通解 Y = $c_{1}e^{x}$ + $c_{2}e^{-x}$　　m = 0，α = 1，β = 2

1 + 2i 不是特征方程的根

∴ ỹ = (a cos 2x + b sin 2x)$e^{x}$

$$\frac{d\tilde{y}}{dx}=(-2a\sin 2x+2b\cos 2x)e^{x}+(a\cos 2x+b\sin 2x)e^{x}$$

$$=\left[(a+2b)\cos 2x+(-2a+b)\sin 2x\right]e^{x}$$

$$\frac{d^2\tilde{y}}{dx^2}=\left[-2(a+2b)\sin 2x+2(-2a+b)\cos 2x\right]e^{x}+\left[(a+2b)\cos 2x+(-2a+b)\sin 2x\right]e^{x}$$


$$=\left[(-4a-3b)\sin 2x+(-3a+4b)\cos 2x\right]e^{x}$$

代入原方程，可解得 a = −$\frac{1}{8}$，b = $\frac{1}{8}$

$$\therefore \quad \tilde{y}=-\frac{1}{8}e^{x}\left(\cos 2x-\sin 2x\right)$$


∴ 通解 y = Y + ỹ = $c_{1}e^{x}$ + $c_{2}e^{-x}$ − ($\frac{1}{8}$)$e^{x}$(cos 2x − sin 2x)

3. $\frac{d^{2}y}{dx^{2}}$ − y = $e^{x}\cos$ 2x + sin x

解：① 对应的齐次方程通解 Y = $c_{1}e^{x}$ + $c_{2}e^{-x}$

② $\frac{d^{2}y}{dx^{2}}$ − y = $e^{x}\cos$ 2x 的解 ỹ₁ = −($\frac{1}{8}$)$e^{x}$(cos 2x − sin 2x)

③ $\frac{d^{2}y}{dx^{2}}$ − y = sin x 的特解 ỹ₂ = −($\frac{1}{2}$)sin x

∴ 原方程通解为 y = Y + ỹ₁ + ỹ₂

### 四、推广至高阶

eg. 1. y''' + 3y'' + 3y' + y = $e^{x}$

解：齐次方程特征方程 r³ + 3r² + 3r + 1 = 0 ⇒ (r+1)³ = 0


$$r_1=r_2=r_3=-1$$

则 对应的齐次方程的解为 Y = (c₁ + c₂x + c₃x²)·$e^{-x}$

α = 1 不是特征方程的根

∴ ỹ = a·$e^{x}$，解得 a = $\frac{1}{8}$

$$\therefore \quad \tilde{y}=\frac{1}{8}e^{x}$$

$$\therefore \quad y=Y+\tilde{y}=(c_1+c_2x+c_3x^2)e^{-x}+\frac{1}{8}e^{x}$$

## §3 二阶变系数微分方程

### 一、变量替换法

1. 欧拉方程：

$$a_0x^n\frac{d^ny}{dx^n}+a_1x^{n-1}\frac{d^{n-1}y}{dx^{n-1}}+\cdots+a_{n-1}x\frac{dy}{dx}+a_ny=f(x)$$

其中 a₀，⋯，aₙ 是已知常数，f(x) 是已知函数

以二阶欧拉方程为例　a₀x²·$\frac{d^{2}y}{dx^{2}}$ + a₁x·$\frac{dy}{dx}$ + a₂y = f(x) ⋯ (1)

当 x > 0 时，令 x = $e^{t}$，t = ln x　（x < 0 时，令 x = −$e^{t}$）

$$\frac{dy}{dx}=\frac{dy}{dt}\cdot\frac{dt}{dx}=\frac{1}{x}\frac{dy}{dt}$$

$$\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{1}{x}\frac{dy}{dt}\right)=\frac{1}{x^2}\left(\frac{d^2y}{dt^2}-\frac{dy}{dt}\right)$$

代入 (1) 得 a₀·$\frac{d^{2}y}{dt^{2}}$ + (a₁ − a₀)·$\frac{dy}{dt}$ + a₂y = f($e^{t}$)　（或 f(−$e^{t}$)）

eg. x²·$\frac{d^{2}y}{dx^{2}}$ + x·$\frac{dy}{dx}$ = 6 ln x − $\frac{1}{x}$

解：令 x = $e^{t}$，则 t = ln x

$$\frac{d^2y}{dt^2}=6t-e^{-t}$$

$$\frac{dy}{dt}=3t^2+e^{-t}+c_1$$

$$y=t^3-e^{-t}+c_1t+c_2$$

$$\therefore \quad y=(\ln x)^3-\frac{1}{x}+c_1\ln x+c_2$$

2. 降阶　$\frac{d^{2}y}{dx^{2}}$ + p(x)·$\frac{dy}{dx}$ + q(x)y = 0　(1)

设 (1) 有一个已知的非零解 y₁

令 y = y₁u，则 y′ = y₁′u + y₁u′，y″ = y₁″u + 2y₁′u′ + y₁u″

$$y_1u''+(2y_1'+py_1)u'+(y_1''+py_1'+qy_1)u=0$$

∴ y₁ 是 (1) 的解

$$\therefore \quad y_1''+py_1'+qy_1=0$$

$$\therefore \quad y_1u''+(2y_1'+py_1)u'=0$$

令 z = u′，则 y₁·$\frac{dz}{dx}$ = −(2y₁′ + py₁)z

$$\frac{dz}{z}=-2\frac{dy_1}{y_1}-p\,dx$$

$$\ln|z|=-2\ln|y_1|-\int p\,dx+\ln|c_2|$$

$$\ln|z|=\ln\frac{1}{y_1^2}+\ln e^{-\int p(x)dx}+\ln|c_2|$$

z = ($\frac{c_{2}}{y_{1}^{2}}$)·$e^{-\int p(x)dx}$，z = 0 也是解

$$\therefore \quad u=c_1+c_2\int\frac{1}{y_1^2}e^{-\int p(x)dx}dx$$

∴ (1) 的通解为 y = y₁·u = y₁(c₁ + c₂∫($\frac{1}{y_{1}^{2}}$)·$e^{-\int p(x)dx}dx$)

eg. 已知 y = $\frac{\sin x}{x}$ 是 $\frac{d^{2}y}{dx^{2}}$ + ($\frac{2}{x}$)y′ + y = 0 的一个解，求通解

解：y₁ = $\frac{\sin x}{x}$，p = $\frac{2}{x}$

∴ 通解为 y = y₁[c₁ + c₂∫($\frac{1}{y_{1}^{2}}$)$e^{-\int p(x)dx}dx$]

$$=\frac{\sin x}{x}\left(c_1+c_2\int\frac{1}{\sin^2 x}\,dx\right)$$

$$=\frac{1}{x}\left(c_1\sin x+c_2\cos x\right)$$

注：$\frac{d^{2}y}{dx^{2}}$ + p(x)·$\frac{dy}{dx}$ + q(x)y = f(x) ⋯ (2)

$\frac{d^{2}y}{dx^{2}}$ + p(x)·$\frac{dy}{dx}$ + q(x)y = 0 ⋯ (1)

设 (1) 有非零解 y₁，令 y = y₁u，代入 (2)，得

$$y_1u''+(2y_1'+py_1)u'=f(x) \qquad (3)$$


令 z = u′，代入 (3)　y₁·$\frac{dz}{dx}$ + (2y₁′ + py₁)z = f(x)

∴ 降阶对非齐次线性方程也适用

### 某些特殊的二阶变系数方程变常系数的

$$\frac{d^2y}{dx^2}+P(x)\frac{dy}{dx}+Q(x)y=0$$

其中 P(x) 一阶导数连续，Q(x) 连续，且 P²(x) + 2P'(x) − 4Q(x) = a

令 y = uv，y' = u'v + uv'，y'' = u''v + 2u'v' + uv''

代入原方程

$$vu''+(2v'+Pv)u'+(v''+Pv'+Qv)u=0 \qquad (2)$$

取 v = $e^{-\int (\frac{P}{2})dx}$，则 2v' + Pv = 0

$$v'=-\frac{P}{2}e^{-\int\frac{P}{2}dx},\qquad v''=\left(-\frac{P'}{2}+\frac{P^2}{4}\right)e^{-\int\frac{P}{2}dx}$$

则

$$v''+Pv'+Qv=-\frac{1}{4}\left(P^2+2P'-4Q\right)v=-\frac{a}{4}v$$

则 (2) 化为

$$u''-\frac{a}{4}u=0$$

例：

$$4\frac{d^2y}{dx^2}+4x\frac{dy}{dx}+(x^2+1)y=0$$

解：

$$\frac{d^2y}{dx^2}+x\frac{dy}{dx}+\frac{x^2+1}{4}y=0$$

$$P(x)=x,\qquad Q(x)=\frac{1}{4}(x^2+1)$$

$$a=P^2+2P'-4Q=x^2+2-(x^2+1)=1$$

$$v=e^{-\int\frac{x}{2}dx}=e^{-\frac{x^2}{4}}$$

$$u''-\frac{1}{4}u=0,\qquad r^2-\frac{1}{4}=0,\qquad r=\pm\frac{1}{2}$$

∴ u = $c_{1}e^{\frac{x}{2}}$ + $c_{2}e^{\frac{-x}{2}}$

∴ y = $e^{\frac{-x^{2}}{4}}$($c_{1}e^{\frac{x}{2}}$ + $c_{2}e^{\frac{-x}{2}}$) 为通解

### 二、常数变易法

对于

$$y''+py'+qy=f(x) \qquad (1)$$

假设 (1) 有通解 y = c₁y₁(x) + c₂y₂(x)

设 y = u₁y₁ + u₂y₂ 是 (1) 的解，其中 u₁，u₂ 为未知函数

$$y'=u_1'y_1+u_1y_1'+u_2'y_2+u_2y_2'$$

$$=\left(u_1'y_1+u_2'y_2\right)+\left(u_1y_1'+u_2y_2'\right)$$

令

$$u_1'y_1+u_2'y_2=0 \qquad (2)$$

$$y'=u_1y_1'+u_2y_2'$$

⇒

$$y''=u_1'y_1'+u_1y_1''+u_2'y_2'+u_2y_2''$$

$$=\left(u_1y_1''+u_2y_2''\right)+\left(u_1'y_1'+u_2'y_2'\right)$$

代入 (1) 得

$$(u_1y_1''+u_2y_2'')+(u_1'y_1'+u_2'y_2')+(u_1y_1'+u_2y_2')p(x)+(u_1y_1+u_2y_2)q(x)=f(x)$$

⇒

$$u_1'y_1'+u_2'y_2'=f(x) \qquad (3)$$

联立 (2)(3)，方程组有唯一解

$$u_1'=\varphi_1(x),\qquad u_2'=\varphi_2(x)$$

∴

$$u_1=\int\varphi_1(x)dx,\qquad u_2=\int\varphi_2(x)dx$$

∴ (1) 有特解

$$\tilde{y}=y_1\int\varphi_1(x)dx+y_2\int\varphi_2(x)dx$$

∴ 通解为 y = Y + ỹ

例：

$$y''-2y'+y=\frac{e^x}{x} \qquad (1)$$

解：

$$r^2-2r+1=0$$

⇒

$$r_1=r_2=1$$

∴ 齐次方程通解为

$$Y=(c_1+c_2x)e^x$$

$$y_1=e^x,\qquad y_2=xe^x$$

设 y = $u_{1}e^{x}$ + $u_{2}xe^{x}$ 为 (1) 的一个解

$$u_1'y_1+u_2'y_2=0,\qquad u_1'y_1'+u_2'y_2'=f(x)$$

⇒

$$u_1'e^x+u_2'xe^x=0,\qquad u_1'e^x+u_2'(x+1)e^x=\frac{e^x}{x}$$

⇒

$$u_1'+u_2'x=0,\qquad u_1'+u_2'(1+x)=\frac{1}{x}$$

∴

$$u_2'=\frac{1}{x},\qquad u_1'=-1$$

∴

$$u_2=\ln|x|,\qquad u_1=-x$$

∴ (1) 的通解为

$$y=Y+\tilde{y}=\left(c_1+c_2x-x+x\ln|x|\right)e^x$$

$$=\left(c_1+c_3x+x\ln|x|\right)e^x$$

## 附录　一阶方程解法小结与特征根对照表

1.

$$\frac{dy}{dx}=\varphi(x)\psi(y)$$

解：

$$\frac{1}{\psi(y)}dy=\varphi(x)dx$$

$$\int\frac{1}{\psi(y)}dy=\int\varphi(x)dx$$

2.

$$\frac{dy}{dx}=g\left(\frac{y}{x}\right)$$

解：令 u = $\frac{y}{x}$，即 y = ux

于是

$$\frac{dy}{dx}=x\frac{du}{dx}+u$$

原方程变换

$$x\frac{du}{dx}+u=g(u)$$

$$\frac{du}{dx}=\frac{g(u)-u}{x}$$

①

$$\int\frac{1}{g(u)-u}du=\ln|cx|=\ln|x|+c \qquad (g(u)-u\neq 0)$$

② 若 ∃u₀，g(u₀) − u₀ = 0，则 u = u₀ 亦为一解

③ 若 g(u) − u ≡ 0，则 $\frac{dy}{dx}$ = $\frac{y}{x}$，⇒ y = cx


eg：

$$\frac{dy}{dx}=\frac{xy}{x^2+y^2}$$

解：令 y = ux，$\frac{dy}{dx}$ = x·$\frac{du}{dx}$ + u

$$x\frac{du}{dx}+u=\frac{ux^2}{x^2+u^2x^2}=\frac{u}{1+u^2}$$

$$x\frac{du}{dx}=\frac{u}{1+u^2}-\frac{u+u^3}{1+u^2}=-\frac{u^3}{1+u^2}$$

$$-\int\frac{1+u^2}{u^3}du=\int\frac{1}{x}dx$$

$$-\int\frac{1}{u^3}du-\int\frac{1}{u}du=\int\frac{1}{x}dx$$

$$\frac{1}{2u^2}-\ln|u|=\ln|x|+c$$

3.

$$\frac{dy}{dx}+P(x)y=f(x)$$

解：

$$y=e^{-\int P(x)dx}\left[\int f(x)e^{\int P(x)dx}dx+c\right]$$

4.

$$\frac{dy}{dx}+P(x)y=f(x)\cdot y^n$$

⇒

$$\frac{1}{y^n}\frac{dy}{dx}+\frac{1}{y^{n-1}}P(x)=f(x)$$

令

$$z=y^{1-n}$$

原方程变为

$$\frac{dz}{dx}+(1-n)P(x)z=(1-n)f(x)$$

**5. $\frac{d^{2}y}{dx^{2}}$ = f(x)　积分两次**

**6. $\frac{d^{2}y}{dx^{2}}$ = f(x, $\frac{dy}{dx}$)**

解：令 $\frac{dy}{dx}$ = p，于是 $\frac{d^{2}y}{dx^{2}}$ = $\frac{dp}{dx}$

代入原方程

$$\frac{dp}{dx}=f(x,p) \qquad (*)$$

设 (*) 的解为 p = φ(x, c₁)

则 $\frac{dy}{dx}$ = φ(x, c₁)

原方程同解，y = ∫ φ(x, c₁) dx + c₂

**7. $\frac{d^{2}y}{dx^{2}}$ = f(y, $\frac{dy}{dx}$)**

解：暂时把 y 作为方程的自变量

令 $\frac{dy}{dx}$ = p，于是 $\frac{d^{2}y}{dx^{2}}$ = $\frac{dp}{dx}$ = ($\frac{dp}{dy}$)·($\frac{dy}{dx}$) = p·$\frac{dp}{dy}$

代入原方程得

$$p\frac{dp}{dy}=f(y,p)$$

eg. ($\frac{dy}{dx}$)² − y·$\frac{d^{2}y}{dx^{2}}$ = 0

解：令 p = $\frac{dy}{dx}$

$$p^2-y\cdot p\frac{dp}{dy}=0$$

p = y·$\frac{dp}{dy}$　或　p = 0

注：p = 0 即 y = 常数，也是一支解。另一支由下面的积分给出：

∫ ($\frac{1}{p}$) dp = ∫ ($\frac{1}{y}$) dy + c₁

即 p = c₁ y

即 $\frac{dy}{dx}$ = c₁ y ⇒ y = c₂ $e^{c_{1} x}$


eg. (1 + x²)·$\frac{d^{2}y}{dx^{2}}$ = 2x·$\frac{dy}{dx}$

解：(1 + x²)·$\frac{dp}{dx}$ = 2x·p

$$\frac{dp}{dx}=\frac{2x}{1+x^2}p$$

$$\frac{1}{p}dp=\frac{2x}{1+x^2}dx$$

$$\ln|p|=\int\frac{1}{p}dp=\int\frac{2x}{1+x^2}dx=\int\frac{1}{1+x^2}dx^2=\ln|1+x^2|+c_1$$

∴ p = (1 + x²)·c₁

即 $\frac{dy}{dx}$ = c₁(1 + x²)

∴ y = c₁(x + $\frac{1}{3}x^{3}$) + c₂

**全微分方程：**

**1. 设有 P(x, y)dx + Q(x, y)dy = 0　(1)**

若 (1) 左端可以表示成某个二元函数 u(x, y) 的全微分

即 P(x, y)dx + Q(x, y)dy = du(x, y)

则称方程 (1) 为全微分方程

故 u(x, y) = c 是 (1) 的通解，称 u(x, y) 为 P(x, y)dx + Q(x, y)dy 的一个原函数

du = Pdx + Qdy ⟺ $\frac{\partial u}{\partial x}$ = P，$\frac{\partial u}{\partial y}$ = Q

Pdx + Qdy 为全微分 ⟺ $\frac{\partial P}{\partial y}$ = $\frac{\partial Q}{\partial x}$

eg1：

$$\frac{2xy+1}{y}dx+\frac{y-x}{y^2}dy=0$$

解：$\frac{\partial P}{\partial y}$ = −$\frac{1}{y^{2}}$，$\frac{\partial Q}{\partial x}$ = −$\frac{1}{y^{2}}$ = $\frac{\partial P}{\partial y}$

∴ 是全微分方程，设 u(x, y) = c 是方程通解

法 1：$\frac{\partial u}{\partial x}$ = 2x + $\frac{1}{y}$

$$u=x^2+\frac{x}{y}+C(y)$$

$\frac{\partial u}{\partial y}$ = −$\frac{x}{y^{2}}$ + C′(y) = $\frac{(y - x)}{y^{2}}$

∴ C′(y) = $\frac{1}{y}$ ⇒ C(y) = ln|y| + c₁

∴ u(x, y) = x² + $\frac{x}{y}$ + ln|y| + c₁

法 2：

$$u(x,y)=\int_{(0,1)}^{(x,y)}\frac{2xy+1}{y}dx+\frac{y-x}{y^2}dy$$

$$=\int_{(0,1)}^{(x,1)}+\int_{(x,1)}^{(x,y)}$$

$$=\int_0^x (2x+1)dx+\int_1^y \left(\frac{1}{y}-\frac{x}{y^2}\right)dy$$

$$=x^2+x+\ln|y|+\frac{x}{y}-x$$

$$=x^2+\ln|y|+\frac{x}{y}$$

法 3　分项组合微分方法

$$\frac{2xy+1}{y}dx+\frac{y-x}{y^2}dy$$

$$=2x dx+\frac{1}{y}dx+\frac{1}{y}dy-\frac{x}{y^2}dy$$

$$=2x dx+\frac{1}{y}dy+\left(\frac{1}{y}dx+x d\frac{1}{y}\right)$$

$$=d\left(x^2+\ln|y|+\frac{x}{y}\right)$$

u = x² + ln|y| + $\frac{x}{y}$ + c₁

注：d($\frac{1}{y}$) = −($\frac{1}{y^{2}}$)dy

**2. 积分因子**

设方程 P(x, y)dx + Q(x, y)dy = 0　(1)　不是全微分方程

若 P、Q 在点 (x₀, y₀) 的某邻域内有连续偏导数，且该点处 P、Q 不同时为零，则可证存在 μ(x, y) ≠ 0，使

∃ μ(x, y)，μ(x, y)P(x, y)dx + μ(x, y)Q(x, y)dy = 0　(2) 是全微分方程

称 μ(x, y) 为 (1) 的一个积分因子

注：(1) 与 (2) 同解


$$d(xy)=x dy+y dx$$

$$d\left(\frac{x}{y}\right)=\frac{y dx-x dy}{y^2}$$

$$d\left(\mathrm{arctan}\frac{x}{y}\right)=\frac{y dx-x dy}{x^2+y^2}$$

积分因子的求法

∵ μP dx + μQ dy = 0 是全微分方程

∴ $\frac{\partial (\mu P)}{\partial y}$ = $\frac{\partial (\mu Q)}{\partial x}$

$\frac{\partial \mu }{\partial y}$·P + μ·$\frac{\partial P}{\partial y}$ = $\frac{\partial \mu }{\partial x}$·Q + μ·$\frac{\partial Q}{\partial x}$

$\frac{\partial \mu }{\partial y}$·P − $\frac{\partial \mu }{\partial x}$·Q = μ·($\frac{\partial Q}{\partial x}$ − $\frac{\partial P}{\partial y}$)

(i) μ = μ(x)　则

− $\frac{d\mu }{dx}$·Q = μ·($\frac{\partial Q}{\partial x}$ − $\frac{\partial P}{\partial y}$)


($\frac{1}{\mu }$)·($\frac{d\mu }{dx}$) = ($\frac{1}{Q}$)·($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$) ≜ φ(x)

($\frac{1}{\mu }$)dμ = φ(x)dx

ln|μ| = ∫ φ(x)dx + ln|c|

∴ μ = c·$e^{\int  \varphi (x)dx}$

(ii) μ = μ(y)　则

$\frac{d\mu }{dy}$·P = μ·($\frac{\partial Q}{\partial x}$ − $\frac{\partial P}{\partial y}$)

($\frac{1}{\mu }$)·($\frac{d\mu }{dy}$) = −($\frac{1}{P}$)·($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$) ≜ φ(y)

同理 μ = $e^{\int  \varphi (y)dy}$

eg1：

$$y dx-x dy=0$$

解：$\frac{\partial P}{\partial y}$ = 1，$\frac{\partial Q}{\partial x}$ = −1，不是全微分

∴ ($\frac{1}{Q}$)·($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$) = −($\frac{1}{x}$)·[1 − (−1)] = −$\frac{2}{x}$

∴ μ = $e^{-\int  (\frac{2}{x})dx}$ = $\frac{1}{x^{2}}$

∴

$$\frac{y\,dx-x\,dy}{x^{2}}=0 \qquad\Longleftrightarrow\qquad \frac{x\,dy-y\,dx}{x^{2}}=d\left(\frac{y}{x}\right)=0$$

是全微分方程，故通解为 $\frac{y}{x}$ = c


(2) φ(y) = −($\frac{1}{P}$)·($\frac{\partial P}{\partial y}$ − $\frac{\partial Q}{\partial x}$) = −($\frac{1}{y}$)·[1 − (−1)] = −$\frac{2}{y}$

∴ μ = $e^{\int  \varphi (y)dy}$ = $\frac{1}{y^{2}}$

∴

$$\frac{y dx-x dy}{y^2}=0$$

是全微分方程

即 d($\frac{x}{y}$) = 0

∴ 通解为 $\frac{x}{y}$ = c

注：$\frac{1}{(xy)}$，$\frac{1}{(x^{2}\pm y^{2})}$ 都是积分因子

① p² − 4q > 0 时，(1) 有两个不相等的实根 r₁，r₂

**特征方程的根　　微分方程通解中对应的项**

1. 单重实根 r　　对应一项 $ce^{rx}$

2. k 重实根 r　　对应 k 项 (c₁ + c₂x + ⋯ + $c_{k} x^{k-1}$)·$e^{rx}$

3. 单重复数根 r₁,₂ = α ± βi　　对应两项 $e^{\alpha x}$(c₁ cos βx + c₂ sin βx)

4. k 重复数根 r₁,₂ = α ± βi　　对应 2k 项 $e^{\alpha x}$[(a₁ + a₂x + ⋯ + $a_{k} x^{k-1}$)cos βx + (b₁ + b₂x + ⋯ + $b_{k} x^{k-1}$)sin βx]

② p² − 4q = 0 时，(1) 有两个相等实根 r₁ = r₂ = r

设 y = u·$e^{rx}$ 是 (1) 的解，把 y′，y″ 代入原 (1) 得一方程

化简有

$$u''=0$$

取 u = x，则 y₂ = x $e^{rx}$ 是 (1) 的解，显然 y₁，y₂ 线性无关

∴ (1) 的通解为

$$y=(c_1+c_2x)\cdot e^{rx}$$

③ p² − 4q < 0，(1) 有两个复根 r₁,₂ = α ± iβ

$$y_1=e^{r_1x}=e^{(\alpha+i\beta)x}=e^{\alpha x}e^{i\beta x} \qquad y_2=e^{r_2x}=e^{\alpha x}e^{-i\beta x}$$

$$e^{i\beta x}=\cos\beta x+i\sin\beta x \qquad e^{-i\beta x}=\cos\beta x-i\sin\beta x$$

⇒

$$y_1=e^{\alpha x}(\cos\beta x+i\sin\beta x) \qquad y_2=e^{\alpha x}(\cos\beta x-i\sin\beta x)$$

令

$$y_1^*=\frac{1}{2}(y_1+y_2)=e^{\alpha x}\cos\beta x \qquad y_2^*=\frac{1}{2i}(y_1-y_2)=e^{\alpha x}\sin\beta x$$

$\frac{y_{1}*}{y_{2}*}$ = cot βx ≠ 常数，y₁* 与 y₂* 线性无关

∴ (1) 的通解为

$$y=e^{\alpha x}(c_1\cos\beta x+c_2\sin\beta x)$$

# 第 3 章　线性微分方程组

## §1　微分方程组的基本概念

### 一、微分方程组及其标准形

含有 n 个未知函数的一阶微分方程组，通常写成

$$\frac{dx_1}{dt}=f_1(t,x_1,x_2,\cdots,x_n)$$

$$\frac{dx_2}{dt}=f_2(t,x_1,x_2,\cdots,x_n)$$

$$\vdots$$

$$\frac{dx_n}{dt}=f_n(t,x_1,x_2,\cdots,x_n)$$

把 n 个未知函数与右端看作列向量，记

$$x=(x_1,x_2,\cdots,x_n)^T, \qquad f=(f_1,f_2,\cdots,f_n)^T$$

（右上角的 T 表示转置），则方程组可以紧凑地写成**向量形式**

$$\frac{dx}{dt}=f(t,x)$$

**高阶方程可以化为一阶方程组**，这是研究方程组的主要动机之一。以二阶方程 y″ + p(t)y′ + q(t)y = f(t) 为例，令 x₁ = y、x₂ = y′，则

$$x_1'=x_2, \qquad x_2'=-q(t)x_1-p(t)x_2+f(t)$$

一般地，n 阶方程 $y^{(n)}$ = F(t, y, y′, ⋯, $y^{(n-1)}$) 只要令 x₁ = y、x₂ = y′、⋯、xₙ = $y^{(n-1)}$，就能化为 n 个一阶方程。

#### 线性微分方程组

若右端关于未知函数是线性的，则方程组形如

$$\frac{dx}{dt}=A(t)x+f(t)$$

其中 A(t) = $(a_{ij}(t))_{n\times n}$ 称为**系数矩阵**，f(t) = $(f_{1}(t), ⋯, f_{n}(t))^{T}$ 称为**非齐次项**。写成分量形式是

$$\frac{dx_i}{dt}=\sum_{j=1}^{n}a_{ij}(t)x_j+f_i(t), \qquad i=1,2,\cdots,n$$

- 当 f(t) ≡ 0 时，称 **齐次线性微分方程组**：x′ = A(t)x；
- 当 f(t) ≢ 0 时，称 **非齐次线性微分方程组**；
- 当 A(t) ≡ A 为常数矩阵时，称 **常系数线性微分方程组**，这是本章 §3 的主题。

> 记号约定：本章用 A = $(a_{ij})_{n\times n}$ 表示矩阵、用 x = $(x_{1}, ⋯, x_{n})^{T}$ 表示列向量；涉及具体数值时按分量写出。

### 二、基本概念

**初值问题（Cauchy 问题）**：给定方程与初始条件

$$\frac{dx}{dt}=f(t,x), \qquad x(t_0)=x^0$$

**存在唯一性定理**：设 A(t) 与 f(t) 都在区间 [a, b] 上连续，则对任意 t₀ ∈ [a, b] 和任意常向量 x⁰，上述初值问题在 [a, b] 上存在唯一解。也就是说，线性方程组的解由初始条件完全决定。

**线性相关与线性无关**：设 φ₁(t), ⋯, $\varphi _{m}$(t) 是区间 [a, b] 上的 m 个 n 维向量函数。若存在**不全为零**的常数 c₁, ⋯, $c_{m}$ 使

$$c_1\varphi_1(t)+c_2\varphi_2(t)+\cdots+c_m\varphi_m(t)=0 \qquad (\forall t\in[a,b])$$

则称这组向量函数**线性相关**；否则称**线性无关**。

**Wronski 行列式**：把 n 个 n 维向量函数 φ₁(t), ⋯, $\varphi _{n}$(t) 依次作为第 1 列到第 n 列排成矩阵，其行列式

$$W(t)=\mathrm{det}\left(\varphi_1(t),\varphi_2(t),\cdots,\varphi_n(t)\right)$$

称为这组向量函数的 Wronski 行列式。以 n = 2 为例，若 φ₁ = $(\varphi _{11}, \varphi _{21})^{T}$、φ₂ = $(\varphi _{12}, \varphi _{22})^{T}$，则

$$W(t)=\varphi_{11}(t)\varphi_{22}(t)-\varphi_{12}(t)\varphi_{21}(t)$$

#### 例 1

把二阶方程 y″ − 3y′ + 2y = $e^{t}$ 化为一阶线性方程组。

**解**：令 x₁ = y、x₂ = y′，则 x₁′ = x₂；又由原方程解出 y″ = 3y′ − 2y + $e^{t}$，即 x₂′ = 3x₂ − 2x₁ + $e^{t}$。于是

$$x_1'=x_2$$

$$x_2'=-2x_1+3x_2+e^{t}$$

写成本节的形式即 x′ = Ax + f，其中 A = $(a_{ij})_{2\times 2}$ 满足 a₁₁ = 0、a₁₂ = 1、a₂₁ = −2、a₂₂ = 3，f = $(0, e^{t})^{T}$。

#### 例 2

判断向量函数 φ₁(t) = $(e^{t}, e^{t})^{T}$ 与 φ₂(t) = $(e^{-t}, -e^{-t})^{T}$ 是否线性无关。

**解**：计算 Wronski 行列式

$$W(t)=e^{t}\cdot(-e^{-t})-e^{-t}\cdot e^{t}=-1-1=-2$$

因为 W(t) ≡ −2 ≠ 0，故 φ₁ 与 φ₂ 线性无关。

> 注：两个向量函数若线性相关，则 W(t) ≡ 0；对线性方程组的解来说，反过来也成立（见 §2），但**对一般的向量函数组，W(t) ≡ 0 并不保证线性相关**。

#### 例 3

写出与三阶方程 y‴ − y″ + 2y′ − y = 0 等价的一阶方程组。

**解**：令 x₁ = y、x₂ = y′、x₃ = y″，则由 y‴ = y″ − 2y′ + y 得

$$x_1'=x_2, \qquad x_2'=x_3, \qquad x_3'=x_1-2x_2+x_3$$

### 习题 3.1

1. 把 y″ + 4y′ + 3y = sin t 化为一阶线性方程组，并写出系数矩阵的元素。
2. 把三阶方程 y‴ = y″ + y′ + y 化为一阶线性方程组。
3. 判断 φ₁(t) = $(1, 0)^{T}$ 与 φ₂(t) = $(t, 1)^{T}$ 是否线性相关。
4. 求 φ₁ = $(\cos t, -\sin t)^{T}$ 与 φ₂ = $(\sin t, \cos t)^{T}$ 的 Wronski 行列式，并判断线性相关性。
5. 验证 x₁ = cos t、x₂ = −sin t 是方程组 x₁′ = x₂、x₂′ = −x₁ 的解，并写出满足 x(0) = $(1, 0)^{T}$ 的解。

## §2　线性微分方程组的一般理论

本节讨论齐次组 x′ = A(t)x 与非齐次组 x′ = A(t)x + f(t) 的解的结构，其中 A(t)、f(t) 在区间 [a, b] 上连续。

### 一、齐次线性方程组解的结构

**性质 1（叠加原理）**：若 φ₁(t)、φ₂(t) 是齐次组的解，则对任意常数 c₁、c₂，c₁φ₁ + c₂φ₂ 也是解。

**性质 2**：x(t) ≡ 0 是齐次组的解（平凡解）。

由性质 1 知，齐次组的全体解构成一个线性空间。更进一步：

**定理 1**：齐次线性方程组 x′ = A(t)x 的全体解构成一个 **n 维线性空间**。

证明思路：由 §1 的存在唯一性定理，解由初始值 x(t₀) 唯一确定；取定 t₀ 后，映射“解 → 它的初值”是线性空间之间的同构，而初值可以取遍整个 n 维空间，故解空间是 n 维的。

由此引出两个基本概念。

**基本解组**：齐次组的 n 个线性无关的解 φ₁(t), ⋯, φₙ(t) 称为它的一个**基本解组**。

**基解矩阵**：以基本解组为列构成的 n×n 矩阵

$$\Phi(t)=\left(\varphi_1(t),\varphi_2(t),\cdots,\varphi_n(t)\right)$$

称为齐次组的一个**基解矩阵**。它满足矩阵方程

$$\Phi'(t)=A(t)\Phi(t), \qquad \mathrm{det}\,\Phi(t)\neq 0$$

**通解**：若 Φ(t) 是基解矩阵，则齐次组的通解为

$$x(t)=\Phi(t)c, \qquad c=(c_1,c_2,\cdots,c_n)^T$$

其中 c 为任意常向量。反过来，对任意给定的常向量 c，Φ(t)c 都是解；而任给一个解 φ(t)，由基解矩阵可逆可得 c = $Φ^{-1}$(t₀)φ(t₀)，故通解确实包含了全部解。

**Wronski 行列式与线性无关（定理 2）**：设 φ₁, ⋯, φₙ 是齐次组的 n 个解，则它们线性无关，当且仅当存在某一点 t₀ 使

$$W(t_0)=\mathrm{det}\left(\varphi_1(t_0),\cdots,\varphi_n(t_0)\right)\neq 0$$

而且只要在某一点不为零，就在整个区间上处处不为零。

**Liouville 公式（定理 3）**：

$$W(t)=W(t_0)e^{\int_{t_0}^{t}\mathrm{tr}\,A(s)\,ds}$$

其中 tr A(s) = a₁₁(s) + a₂₂(s) + ⋯ + aₙₙ(s) 是系数矩阵的迹。这个公式说明：**不必解出方程，也能计算 Wronski 行列式**。

#### 例 1

验证 φ₁(t) = $(e^{3t}, e^{3t})^{T}$ 与 φ₂(t) = $(e^{-t}, -e^{-t})^{T}$ 是方程组

$$x_1'=x_1+2x_2, \qquad x_2'=2x_1+x_2$$

的基本解组，并用 Liouville 公式核对 Wronski 行列式。

**解**：先验证 φ₁：它的两个分量都是 $e^{3t}$，而右端 x₁ + 2x₂ = $3e^{3t}$、2x₁ + x₂ = $3e^{3t}$，正好等于 ($e^{3t}$)′ = $3e^{3t}$，故是解。

再验证 φ₂：两分量为 $e^{-t}$ 与 −$e^{-t}$，右端 x₁ + 2x₂ = $e^{-t}$ − $2e^{-t}$ = −$e^{-t}$，等于 ($e^{-t}$)′ = −$e^{-t}$；2x₁ + x₂ = $2e^{-t}$ − $e^{-t}$ = $e^{-t}$，等于 (−$e^{-t}$)′ = $e^{-t}$。故也是解。

计算 Wronski 行列式：

$$W(t)=e^{3t}\cdot(-e^{-t})-e^{-t}\cdot e^{3t}=-2e^{2t}\neq 0$$

所以两者线性无关，构成基本解组，通解为

$$x(t)=c_1\left(e^{3t},e^{3t}\right)^T+c_2\left(e^{-t},-e^{-t}\right)^T$$

即 x₁ = $c_{1}e^{3t}$ + $c_{2}e^{-t}$，x₂ = $c_{1}e^{3t}$ − $c_{2}e^{-t}$。

用 Liouville 公式核对：tr A = a₁₁ + a₂₂ = 1 + 1 = 2，取 t₀ = 0，则

$$W(t)=W(0)e^{\int_{0}^{t}2\,ds}=(-2)e^{2t}=-2e^{2t}$$

与直接计算一致。

#### 例 2

设 A(t) 满足 tr A(t) = 2t，且某组解的 Wronski 行列式满足 W(0) = 1，求 W(t)。

**解**：由 Liouville 公式

$$W(t)=W(0)e^{\int_{0}^{t}2s\,ds}=e^{t^2}$$

### 二、非齐次线性方程组解的结构

**性质 3**：若 ψ₁、ψ₂ 是非齐次组 x′ = A(t)x + f(t) 的解，则 ψ₁ − ψ₂ 是对应齐次组 x′ = A(t)x 的解。

**性质 4**：若 ψ 是非齐次组的一个解，φ 是齐次组的解，则 ψ + φ 也是非齐次组的解。

**定理 4（通解结构）**：非齐次组的通解 = 它的一个特解 + 对应齐次组的通解：

$$x(t)=\Phi(t)c+\psi(t)$$

#### 常数变易法

设齐次组的基解矩阵为 Φ(t)，把通解 Φ(t)c 中的常向量 c 换成待定向量函数 v(t)，即设非齐次组的解形如

$$x(t)=\Phi(t)v(t)$$

代入非齐次组 x′ = A(t)x + f(t)：

$$\Phi'(t)v(t)+\Phi(t)v'(t)=A(t)\Phi(t)v(t)+f(t)$$

利用 Φ′ = A(t)Φ，左端第一项与右端第一项相消，得

$$\Phi(t)v'(t)=f(t) \qquad\Longrightarrow\qquad v'(t)=\Phi^{-1}(t)f(t)$$

积分后得到**非齐次组的通解公式**

$$x(t)=\Phi(t)\left[c+\int_{t_0}^{t}\Phi^{-1}(s)f(s)\,ds\right]$$

满足初始条件 x(t₀) = x⁰ 的特解则取 c = $Φ^{-1}$(t₀)x⁰。

#### 例 3

用常数变易法求方程组 x₁′ = x₂、x₂′ = −x₁ + 1 的一个特解。

**解**：对应齐次组 x₁′ = x₂、x₂′ = −x₁ 的基本解组是

$$\varphi_1(t)=\left(\cos t,-\sin t\right)^T, \qquad \varphi_2(t)=\left(\sin t,\cos t\right)^T$$

以它们为两列构成基解矩阵 Φ(t)。注意这两列单位正交，且 det Φ(t) = cos²t + sin²t = 1，故 Φ(t) 是正交矩阵，从而

$$\Phi^{-1}(t)=\Phi^T(t)$$

后者的第 1 行是 φ₁ 的分量 (cos t, −sin t)，第 2 行是 φ₂ 的分量 (sin t, cos t)。非齐次项 f(t) = $(0, 1)^{T}$，故

$$\Phi^{-1}(s)f(s)=\left(-\sin s,\ \cos s\right)^T$$

积分（取 t₀ = 0）：

$$\int_{0}^{t}\Phi^{-1}(s)f(s)\,ds=\left(\cos t-1,\ \sin t\right)^T$$

于是

$$x(t)=\Phi(t)\left[c+\left(\cos t-1,\ \sin t\right)^T\right]$$

取 c = 0 得到一个特解

$$x_p(t)=\left(1-\cos t,\ \sin t\right)^T$$

**检验**：$x_{p}$ 的两个分量满足 x₁′ = sin t = x₂ 与 x₂′ = cos t = −x₁ + 1，确是解。

所以原方程组的通解为

$$x(t)=c_1\left(\cos t,-\sin t\right)^T+c_2\left(\sin t,\cos t\right)^T+\left(1-\cos t,\ \sin t\right)^T$$

### 习题 3.2

1. 验证 φ₁ = $(1, 1)^{T} e^{3t}$、φ₂ = $(1, -1)^{T} e^{-t}$ 是 x′ = Ax（A = $(a_{ij})_{2\times 2}$，a₁₁ = 1, a₁₂ = 2, a₂₁ = 2, a₂₂ = 1）的基本解组，并写出通解。
2. 对第 1 题的方程组，用 Liouville 公式求 W(t)，并与直接计算的结果比较。
3. 用常数变易法求 x₁′ = x₂、x₂′ = −x₁ + 1 满足 x(0) = $(0, 0)^{T}$ 的特解。
4. 设 Φ(t) 是 x′ = A(t)x 的基解矩阵，C 为非奇异常数矩阵，证明 Ψ(t) = Φ(t)C 也是基解矩阵。
5. 写出非齐次组 x′ = A(t)x + f(t) 满足 x(t₀) = x⁰ 的解的表达式（用基解矩阵表示）。

## §3　常系数线性微分方程组的解法

本节讨论常系数齐次组 x′ = Ax 与非齐次组 x′ = Ax + f(t)，其中 A 为 n×n 常数矩阵。

### 一、矩阵指数 $e^{At}$

对常数矩阵 A，定义**矩阵指数**

$$e^{At}=E+At+\frac{1}{2!}A^2t^2+\cdots+\frac{1}{k!}A^kt^k+\cdots$$

其中 E 为 n 阶单位矩阵。该级数对一切实数 t 收敛，因而 $e^{At}$ 是 n×n 矩阵函数。

**基本性质**：

1. $e^{A\cdot 0}$ = E；
2. ($e^{At}$)′ = A $e^{At}$ = $e^{At}$ A；
3. $e^{A(s+t)}$ = $e^{As} e^{At}$；
4. $e^{At}$ 可逆，且 $(e^{At})^{-1}$ = $e^{-At}$；
5. 若 AB = BA，则 $e^{A+B}$ = $e^{A} e^{B}$；A 与 B 不可交换时一般不成立。

由性质 1 与 2 立刻可知：**$e^{At}$ 就是满足 Φ(0) = E 的基解矩阵**（称为标准基解矩阵）。于是常系数齐次组的初值问题

$$x'=Ax, \qquad x(0)=x^0$$

的解为

$$x(t)=e^{At}x^0$$

而通解为 x(t) = $e^{At}c$（c 为任意常向量）。

**两种可直接写出 $e^{At}$ 的情形**：

- 若存在可逆矩阵 P 使 $P^{-1}AP$ = diag(λ₁, ⋯, λₙ)（即 A 可对角化），则

$$e^{At}=P\,\mathrm{diag}\left(e^{\lambda_1t},\cdots,e^{\lambda_nt}\right)P^{-1}$$

- 若 A 的谱只有一个特征值 λ，且 (A − $\lambda E)^{k}$ = 0（k 为某个正整数），则

$$e^{At}=e^{\lambda t}\left[E+(A-\lambda E)t+\frac{(A-\lambda E)^2}{2!}t^2+\cdots+\frac{(A-\lambda E)^{k-1}}{(k-1)!}t^{k-1}\right]$$

### 二、特征值法

**情形 1：A 有 n 个线性无关的特征向量**

设 $v_{i}$ 是对应于特征值 $\lambda _{i}$ 的特征向量（即 $Av_{i}$ = $\lambda _{i} v_{i}$，i = 1, 2, ⋯, n；$\lambda _{i}$ 允许重复，只要求这 n 个特征向量线性无关），则

$$x_i(t)=v_ie^{\lambda_it}, \qquad i=1,2,\cdots,n$$

是一组基本解组（把它们代入方程组：$x_{i}$′ = $\lambda _{i} v_{i} e^{\lambda _{i} t}$，而 A $x_{i}$ = ($Av_{i}$)$e^{\lambda _{i} t}$ = $\lambda _{i} v_{i} e^{\lambda _{i} t}$，两者相等）。于是通解为

$$x(t)=c_1v_1e^{\lambda_1t}+c_2v_2e^{\lambda_2t}+\cdots+c_nv_ne^{\lambda_nt}$$

**情形 2：A 有复特征值**

实矩阵的复特征值成共轭对出现。设 λ = α + iβ（β ≠ 0）是特征值，对应特征向量 v = u + iw（u、w 为实向量），则由

$$x(t)=(u+iw)e^{(\alpha+i\beta)t}$$

取实部与虚部，得到两个线性无关的**实值解**

$$x_1(t)=e^{\alpha t}\left(u\cos\beta t-w\sin\beta t\right)$$

$$x_2(t)=e^{\alpha t}\left(u\sin\beta t+w\cos\beta t\right)$$

**情形 3：A 的重特征值（且特征向量个数不足）**

以二重根 λ 为例。若对应 λ 只有一个线性无关的特征向量 v，再求满足

$$(A-\lambda E)w=v$$

的向量 w（称为**广义特征向量**），则有两个线性无关的解

$$x_1(t)=ve^{\lambda t}, \qquad x_2(t)=\left(vt+w\right)e^{\lambda t}$$

若 λ 是 k 重根且只有一个特征向量，则依次求 w₂, ⋯, $w_{k}$ 使 (A − λE)$w_{j}$ = $w_{j-1}$（j = 2, ⋯, k），相应的 k 个解为

$$x_j(t)=e^{\lambda t}\left[\frac{t^{j-1}}{(j-1)!}v+\frac{t^{j-2}}{(j-2)!}w_2+\cdots+tw_{j-1}+w_j\right]$$

#### 例 1（两个单重实特征值）

求解 x₁′ = x₁ + 2x₂，x₂′ = 2x₁ + x₂。

**解**：系数矩阵的元素为 a₁₁ = 1、a₁₂ = 2、a₂₁ = 2、a₂₂ = 1。特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=(1-\lambda)^2-4=0 \qquad\Longrightarrow\qquad \lambda_1=3, \quad \lambda_2=-1$$

对 λ₁ = 3，解 (A − 3E)v = 0，即 −2v₁ + 2v₂ = 0，取 v₁ = $(1, 1)^{T}$；

对 λ₂ = −1，解 (A + E)v = 0，即 2v₁ + 2v₂ = 0，取 v₂ = $(1, -1)^{T}$。

两者线性无关，故通解为

$$x(t)=c_1\left(1,1\right)^Te^{3t}+c_2\left(1,-1\right)^Te^{-t}$$

即

$$x_1(t)=c_1e^{3t}+c_2e^{-t}, \qquad x_2(t)=c_1e^{3t}-c_2e^{-t}$$

#### 例 2（一对共轭复特征值）

求解 x₁′ = x₂，x₂′ = −x₁。

**解**：系数矩阵元素 a₁₁ = 0、a₁₂ = 1、a₂₁ = −1、a₂₂ = 0。特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=\lambda^2+1=0 \qquad\Longrightarrow\qquad \lambda=\pm i$$

取 λ = i（即 α = 0，β = 1），解 (A − iE)v = 0，即 −iv₁ + v₂ = 0，故 v₂ = iv₁。取 v₁ = 1，得

$$v=\left(1,i\right)^T=\left(1,0\right)^T+i\left(0,1\right)^T \qquad\Longrightarrow\qquad u=\left(1,0\right)^T, \quad w=\left(0,1\right)^T$$

代入公式（α = 0，β = 1）：

$$x_1(t)=\left(1,0\right)^T\cos t-\left(0,1\right)^T\sin t=\left(\cos t,-\sin t\right)^T$$

$$x_2(t)=\left(1,0\right)^T\sin t+\left(0,1\right)^T\cos t=\left(\sin t,\cos t\right)^T$$

故通解为

$$x(t)=c_1\left(\cos t,-\sin t\right)^T+c_2\left(\sin t,\cos t\right)^T$$

即 x₁ = c₁cos t + c₂sin t，x₂ = −c₁sin t + c₂cos t。这与直接消元得到的结果一致（由 x₁″ = −x₁ 出发）。

#### 例 3（二重特征值）

求解 x₁′ = x₁ + x₂，x₂′ = x₂。

**解**：系数矩阵元素 a₁₁ = 1、a₁₂ = 1、a₂₁ = 0、a₂₂ = 1，特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=(1-\lambda)^2=0 \qquad\Longrightarrow\qquad \lambda=1$$

即 λ = 1 是二重特征根。

解 (A − E)v = 0：A − E 的元素为 a₁₁ = 0、a₁₂ = 1、a₂₁ = 0、a₂₂ = 0，得 v₂ = 0，故只有一个线性无关的特征向量 v = $(1, 0)^{T}$。

再解广义特征向量方程 (A − E)w = v，即 w₂ = 1，得 w = $(0, 1)^{T}$。于是两个线性无关的解是

$$x_1(t)=\left(1,0\right)^Te^{t}, \qquad x_2(t)=\left[\left(1,0\right)^Tt+\left(0,1\right)^T\right]e^{t}=\left(t,1\right)^Te^{t}$$

通解为

$$x(t)=c_1\left(1,0\right)^Te^{t}+c_2\left(t,1\right)^Te^{t}$$

即 x₁ = (c₁ + c₂t)$e^{t}$，x₂ = $c_{2}e^{t}$。由 §3 一的公式也可以直接写出标准基解矩阵：

$$e^{At}=e^{t}\left[E+(A-E)t\right]=\left(1,t;\ 0,1\right)e^{t}$$

上式按行给出该矩阵：第 1 行为 (1, t)，第 2 行为 (0, 1)。

### 三、非齐次常系数方程组

对 x′ = Ax + f(t)，用常数变易法（§2）取基解矩阵 Φ(t) = $e^{At}$，得通解

$$x(t)=e^{At}c+e^{At}\int_{t_0}^{t}e^{-As}f(s)\,ds$$

取 t₀ = 0 时上式即 $x(t)=e^{At}c+\int_{0}^{t}e^{A(t-s)}f(s)\,ds$，满足 x(0) = x⁰ 的特解取 c = x⁰（t₀ 取一般值时 c = x⁰ + ∫$_{0}^{t_{0}}e^{-As}f$(s)ds）。若 f(t) 是 $e^{\mu t}$ 与多项式的乘积，也可用待定系数法：设 $x_{p}$(t) = $e^{\mu t}$(b₀ + b₁t + ⋯ + $b_{m}t^{m}$)（$b_{j}$ 为待定常向量），代入比较同次幂的系数；**若 μ 恰是 A 的特征值**，则须乘 $t^{s}$，即改设 $x_{p}$(t) = $t^{s}e^{\mu t}$(b₀ + ⋯ + $b_{m}t^{m}$)，其中 s 为 μ 在 A 的 Jordan 标准形中所属最大块的阶数（几何重数不足的阶数；A 可对角化时 s = 1）。

#### 例 4

求 x₁′ = x₂、x₂′ = −x₁ + 1 的通解。

**解**：对应齐次组的基本解组与基解矩阵同例 2：

$$\varphi_1=\left(\cos t,-\sin t\right)^T, \qquad \varphi_2=\left(\sin t,\cos t\right)^T, \qquad \Phi^{-1}(t)=\Phi^T(t)$$

非齐次项 f(t) = $(0, 1)^{T}$。取 t₀ = 0：

$$e^{-As}f(s)=\left(-\sin s,\ \cos s\right)^T \qquad\Longrightarrow\qquad \int_{0}^{t}e^{-As}f(s)\,ds=\left(\cos t-1,\ \sin t\right)^T$$

于是

$$x(t)=e^{At}c+e^{At}\left(\cos t-1,\ \sin t\right)^T$$

取 c = 0 得特解 $x_{p}$(t) = $(1 - \cos t, \sin t)^{T}$。**检验**：$x_{p}$ 满足 x₁′ = sin t = x₂ 与 x₂′ = cos t = −x₁ + 1。故通解为

$$x(t)=c_1\left(\cos t,-\sin t\right)^T+c_2\left(\sin t,\cos t\right)^T+\left(1-\cos t,\ \sin t\right)^T$$

> 注：非齐次组的通解中，特解并不唯一——把特解换成 $x_{p}$ 加上任一齐次解，仍然是特解。

### 习题 3.3

1. 求 x₁′ = 3x₁ − 2x₂、x₂′ = 2x₁ − 2x₂ 的通解。
2. 求 x₁′ = x₁ − x₂、x₂′ = x₁ + x₂ 的通解。
3. 求 x₁′ = x₁ − x₂、x₂′ = x₁ + 3x₂ 的通解。
4. 求 x₁′ = x₂ + 1、x₂′ = −x₁ 的通解。
5. 对元素为 a₁₁ = 2、a₁₂ = 1、a₂₁ = 0、a₂₂ = 2 的矩阵 A，求标准基解矩阵 $e^{At}$。

## 习题解答

### 习题 3.1

**1.** 把 y″ + 4y′ + 3y = sin t 化为一阶线性方程组，并写出系数矩阵的元素。

解：令 x₁ = y、x₂ = y′，则 x₁′ = x₂，且由 y″ = −4y′ − 3y + sin t 得 x₂′ = −3x₁ − 4x₂ + sin t。故

$$x_1'=x_2, \qquad x_2'=-3x_1-4x_2+\sin t$$

系数矩阵的元素为 a₁₁ = 0、a₁₂ = 1、a₂₁ = −3、a₂₂ = −4，非齐次项 f = $(0, \sin t)^{T}$。

**2.** 把三阶方程 y‴ = y″ + y′ + y 化为一阶线性方程组。

解：令 x₁ = y、x₂ = y′、x₃ = y″，则

$$x_1'=x_2, \qquad x_2'=x_3, \qquad x_3'=x_1+x_2+x_3$$

**3.** 判断 φ₁(t) = $(1, 0)^{T}$ 与 φ₂(t) = $(t, 1)^{T}$ 是否线性相关。

解：Wronski 行列式为

$$W(t)=1\cdot 1-t\cdot 0=1\neq 0$$

故两者线性无关。

**4.** 求 φ₁ = $(\cos t, -\sin t)^{T}$ 与 φ₂ = $(\sin t, \cos t)^{T}$ 的 Wronski 行列式，并判断线性相关性。

解：

$$W(t)=\cos t\cdot\cos t-\sin t\cdot(-\sin t)=\cos^2t+\sin^2t=1\neq 0$$

故两者线性无关。

**5.** 验证 x₁ = cos t、x₂ = −sin t 是方程组 x₁′ = x₂、x₂′ = −x₁ 的解，并写出满足 x(0) = $(1, 0)^{T}$ 的解。

解：x₁′ = −sin t = x₂，x₂′ = −cos t = −x₁，故确为解。又 x₁(0) = 1、x₂(0) = 0，恰好满足初始条件，所以所求的解就是

$$x(t)=\left(\cos t,-\sin t\right)^T$$

这个方程组由二阶标量方程 x₁″ + x₁ = 0 化来（因为 x₁″ = x₂′ = −x₁）。

### 习题 3.2

**1.** 验证 φ₁ = $(1, 1)^{T} e^{3t}$、φ₂ = $(1, -1)^{T} e^{-t}$ 是 x′ = Ax（a₁₁ = 1, a₁₂ = 2, a₂₁ = 2, a₂₂ = 1）的基本解组，并写出通解。

解：对 φ₁，两分量均为 $e^{3t}$，而右端第一式为 x₁ + 2x₂ = $3e^{3t}$、第二式为 2x₁ + x₂ = $3e^{3t}$，都等于 ($e^{3t}$)′，故是解；对 φ₂，两分量为 $e^{-t}$ 与 −$e^{-t}$，右端第一式为 $e^{-t}$ − $2e^{-t}$ = −$e^{-t}$ = ($e^{-t}$)′，第二式为 $2e^{-t}$ − $e^{-t}$ = $e^{-t}$ = (−$e^{-t}$)′，故也是解。

$$W(t)=e^{3t}\cdot\left(-e^{-t}\right)-e^{-t}\cdot e^{3t}=-2e^{2t}\neq 0$$

两者线性无关，构成基本解组。通解为

$$x(t)=c_1\left(1,1\right)^Te^{3t}+c_2\left(1,-1\right)^Te^{-t}$$

**2.** 对第 1 题的方程组，用 Liouville 公式求 W(t)，并与直接计算比较。

解：tr A = a₁₁ + a₂₂ = 2，取 t₀ = 0：

$$W(t)=W(0)e^{\int_{0}^{t}2\,ds}=(-2)e^{2t}$$

与第 1 题直接算得的 −$2e^{2t}$ 一致。

**3.** 用常数变易法求 x₁′ = x₂、x₂′ = −x₁ + 1 满足 x(0) = $(0, 0)^{T}$ 的特解。

解：由 §2 例 3，通解为

$$x(t)=\Phi(t)c+\left(1-\cos t,\ \sin t\right)^T$$

而 Φ(0) = E，故 x(0) = c + $(0, 0)^{T}$ = c。由 x(0) = $(0, 0)^{T}$ 得 c = $(0, 0)^{T}$，于是

$$x(t)=\left(1-\cos t,\ \sin t\right)^T$$

**4.** 设 Φ(t) 是 x′ = A(t)x 的基解矩阵，C 为非奇异常数矩阵，证明 Ψ(t) = Φ(t)C 也是基解矩阵。

解：先验证它是解矩阵：

$$\Psi'(t)=\Phi'(t)C=A(t)\Phi(t)C=A(t)\Psi(t)$$

再验证可逆性：det Ψ(t) = det Φ(t)·det C，其中 det Φ(t) ≠ 0（Φ 是基解矩阵）、det C ≠ 0（C 非奇异），故 det Ψ(t) ≠ 0。所以 Ψ(t) 的 n 个列向量线性无关且都是解，即 Ψ(t) 也是基解矩阵。

**5.** 写出非齐次组 x′ = A(t)x + f(t) 满足 x(t₀) = x⁰ 的解。

解：通解为 x(t) = Φ(t)[c + $\int _{t_{0}}^{t}Φ^{-1}$(s)f(s)ds]。令 t = t₀，得 x(t₀) = Φ(t₀)c = x⁰，故 c = $Φ^{-1}$(t₀)x⁰。于是

$$x(t)=\Phi(t)\left[\Phi^{-1}(t_0)x^0+\int_{t_0}^{t}\Phi^{-1}(s)f(s)\,ds\right]$$

### 习题 3.3

**1.** 求 x₁′ = 3x₁ − 2x₂、x₂′ = 2x₁ − 2x₂ 的通解。

解：特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=(3-\lambda)(-2-\lambda)+4=\lambda^2-\lambda-2=0 \qquad\Longrightarrow\qquad \lambda_1=2, \quad \lambda_2=-1$$

λ₁ = 2 时，A − 2E 的元素为 a₁₁ = 1、a₁₂ = −2、a₂₁ = 2、a₂₂ = −4，由 v₁ − 2v₂ = 0 取 v₁ = $(2, 1)^{T}$；

λ₂ = −1 时，A + E 的元素为 a₁₁ = 4、a₁₂ = −2、a₂₁ = 2、a₂₂ = −1，由 2v₁ − v₂ = 0 取 v₂ = $(1, 2)^{T}$。

故通解为

$$x(t)=c_1\left(2,1\right)^Te^{2t}+c_2\left(1,2\right)^Te^{-t}$$

**2.** 求 x₁′ = x₁ − x₂、x₂′ = x₁ + x₂ 的通解。

解：特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=(1-\lambda)^2+1=0 \qquad\Longrightarrow\qquad \lambda=1\pm i$$

取 λ = 1 + i（α = 1，β = 1），解 (A − (1+i)E)v = 0，即 −iv₁ − v₂ = 0，故 v₂ = −iv₁。取 v₁ = 1 得

$$v=\left(1,-i\right)^T=\left(1,0\right)^T+i\left(0,-1\right)^T \qquad\Longrightarrow\qquad u=\left(1,0\right)^T,\quad w=\left(0,-1\right)^T$$

于是

$$x_1(t)=e^{t}\left(\cos t,\ \sin t\right)^T, \qquad x_2(t)=e^{t}\left(\sin t,\ -\cos t\right)^T$$

通解为

$$x(t)=c_1e^{t}\left(\cos t,\sin t\right)^T+c_2e^{t}\left(\sin t,-\cos t\right)^T$$

**3.** 求 x₁′ = x₁ − x₂、x₂′ = x₁ + 3x₂ 的通解。

解：特征方程为

$$\mathrm{det}\left(A-\lambda E\right)=(1-\lambda)(3-\lambda)+1=(\lambda-2)^2=0 \qquad\Longrightarrow\qquad \lambda=2$$

即 λ = 2 是二重特征根。

A − 2E 的元素为 a₁₁ = −1、a₁₂ = −1、a₂₁ = 1、a₂₂ = 1，由 −v₁ − v₂ = 0 取特征向量 v = $(1, -1)^{T}$。

再解 (A − 2E)w = v，即 −w₁ − w₂ = 1，取 w = $(0, -1)^{T}$。于是两个解为

$$x_1(t)=\left(1,-1\right)^Te^{2t}, \qquad x_2(t)=\left[\left(1,-1\right)^Tt+\left(0,-1\right)^T\right]e^{2t}=\left(t,-t-1\right)^Te^{2t}$$

通解为

$$x(t)=c_1\left(1,-1\right)^Te^{2t}+c_2\left(t,-t-1\right)^Te^{2t}$$

**4.** 求 x₁′ = x₂ + 1、x₂′ = −x₁ 的通解。

解：对应齐次组的基本解组为 $(\cos t, -\sin t)^{T}$ 与 $(\sin t, \cos t)^{T}$。观察到一个特解

$$x_p(t)=\left(0,-1\right)^T$$

因为此时 $x_{p}$′ = $(0, 0)^{T}$，而右端为 $(x_{2} + 1, -x_{1})^{T}$ = $(-1 + 1, 0)^{T}$ = $(0, 0)^{T}$，两边相等。故通解为

$$x(t)=c_1\left(\cos t,-\sin t\right)^T+c_2\left(\sin t,\cos t\right)^T+\left(0,-1\right)^T$$

**5.** 对元素为 a₁₁ = 2、a₁₂ = 1、a₂₁ = 0、a₂₂ = 2 的矩阵 A，求标准基解矩阵 $e^{At}$。

解：A = 2E + N，其中 N 的元素为 n₁₁ = 0、n₁₂ = 1、n₂₁ = 0、n₂₂ = 0，且 N² = 0。由于 2E 与 N 可交换，由性质 5 得

$$e^{At}=e^{2Et}e^{Nt}=e^{2t}\left(E+Nt\right)$$

按行写出结果：第 1 行为 ($e^{2t}$, $te^{2t}$)，第 2 行为 (0, $e^{2t}$)。可以验证它满足 Φ(0) = E 与 Φ′(t) = AΦ(t)。
