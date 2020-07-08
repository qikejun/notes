# virtual Dom
### 选择题

1. 下面关于虚拟 DOM 的说法正确的是：(A,B,C,D)

   A. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高程序的性能。

   B. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高开发效率。

   C. 虚拟 DOM 可以维护程序的状态，通过对比两次状态的差异更新真实 DOM。

   D. 虚拟 DOM 本质上是 JavaScript 对象，可以跨平台，例如服务器渲染、Weex 开发等。

   > 解析:
   >
   > 虚拟DOM: 是用js对象描述的 DOM 对象, 不是真实的 DOM 节点;
   >
   > A. 操作DOM本身就是一件繁琐的事情,经常会进行DOM节点的重绘,反复处理没有变换的DOM节点;
   >
   > B. 操作虚拟无需,繁琐的调用DOM API;
   >
   > C. 通过状态创建虚拟DOM树,通过 diff 算法判断前后虚拟DOM差异,更新变化的DOM节点
   >
   > D. 

2. 下面关于 Snabbdom 库的描述错误的是：(D)

   A. Snabbdom 库是一个高效的虚拟 DOM 库，Vue.js 的虚拟 DOM 借鉴了 Snabbdom 库。

   B. 使用 h() 函数创建 VNode 对象，描述真实 DOM 结构。

   C. Snabbdom 库本身可以处理 DOM 的属性、事件、样式等操作。

   D. 使用 patch(oldVnode, null) 可以清空页面元素

   > 解析:
   >
   > D. 使用 patch(oldVnode, '!'),创建注释节点,达到清空页面元素的效果

### 简答题

1. 请简述 patchVnode 函数的执行过程。

   patchVnode:

   * 作用 

     当新旧节点不相同时,对比新旧两个虚拟 DOM 的差异, 更新到相应的节点上;

     1. 对比新旧节点之前

        a. 执行 prepatch

        当用户定义了 prepatch ,则执行 prepatch;  

        b. 执行 update

        当新节点的data属性有定义时(!==undefined), 

        (1) . 先执行模块中的 `update` 钩子函数;

        (2). 当 `data.hook` 以及`data.hook.update`有定义时,调用 update 钩子函数;

     2. 对比新旧节点

        a. 首先判断新节点的`text`是否有定义 

        * 新节点 text 为 undefined
          1. 首先判断新旧节点是否都有 children, 有则 使用 diff 算法对比新旧子节点,更新子节点差异
          2. 只有新节点有children, 旧节点有text,清空 DOM 的 textContent , 把新节点的children 更新到DOM中;
          3. 只有 旧节点 有children,删除  DOM 中的children
          4.  旧节点 有 text,则清空 DOM textContent

        * 有定义
          1. 首先判断 旧节点是否有 children, 有则 删除 旧节点;
          2. 将新节点的 text 更新到 DOM 元素

     3. 更新 DOM

        当data.hook以及data.hook.postpatch有定义时,执行 postpatch