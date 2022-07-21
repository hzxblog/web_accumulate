---
sidebarDepth: 3
---

# Flex弹性布局

网页展示就好比一个个盒子堆叠一起，通过调整盒子的大小，位置，样式等，形成各式各样的页面。当我们再开发一个页面的时候我们常规的做法可能是：搭建框架、划分区域、定制排版、嵌入内容、微调和添加样式。

## Flex 布局是什么

Flex是Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box {
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.box {
  display: inline-flex;
}
```
Webkit 内核的浏览器，必须加上`-webkit`前缀。
```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![An Image](./images/bg2015071004.png)


容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 容器的属性

以下6个属性设置在容器上。

---
- [flex-direction](./#flex-direction属性)

- [flex-wrap](./#flex-wrap属性)

- [flex-flow](./#flex-flow属性)

- [justify-content](./#justify-content属性)

- [align-items](./#align-items属性)

- [align-content](./#align-content属性)
---
### flex-direction属性

`flex-direction`属性决定主轴的方向
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

<Css-Flex example="1" />

### flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

<Css-Flex example="2" />

### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

<Css-Flex example="3" />

### align-items属性

`align-items`属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

<Css-Flex example="4" />

### align-content属性

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

<Css-Flex example="5" />

## 项目的属性

以下6个属性设置在项目上。

---
- [order](./#order属性)
- [flex-grow](./#flex-grow属性)
- [flex-shrink](./#flex-shrink属性)
- [flex-basis](./#flex-basis属性)
- [flex](./#flex属性)
- [align-self](./#align-self属性)
---

### order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

<Css-Flex example="6" />

###  flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

<Css-Flex example="7" />

将空间按所有项目的`flex-grow`属性总和进行等分，每个项目按照各自`flex-grow`属性占据空间。

### flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为`1`，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

<Css-Flex example="8" />

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

::: tip
该属性的计算过程如下（以上面为例）：
6个盒子，每个盒子设置宽度为`100px`，父元素宽度设为`500px`，所以超出空间  `600 - 500 = 100` 。

其中第`1`，`3`，`4`，`5`个盒子分别占比为`1`，`1`，`1`，`2`，所以缩小比为`1/5`，`1/5`，`1/5`，`2/5`。

每一项要减去缩小空间后的剩余空间

1：100 - (100 * 1/5) = 80

3：100 - (100 * 1/5) = 80

4：100 - (100 * 1/5) = 80

5：100 - (100 * 2/5) = 60
:::

### flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

<Css-Flex example="9" />

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

## 常见问题

### flex弹性布局模式下文字超出显示省略号

```css
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 0; /* 宽度设置为0 */
  flex: 0 0 1; /* 禁止放大和缩小，基础长度占比为1 */
}

```