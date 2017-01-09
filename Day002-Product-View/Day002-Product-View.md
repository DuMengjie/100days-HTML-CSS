# Day002-Product-View

**设计图**

![原图](img/preview.png)

**知识点**

+ Sass
+ Grunt
+ flex布局
+ `background-size`属性
+ 纯CSS绘制三角形
+ CSS隐藏文字及以图代字

## 小讲堂

### background-size属性

| 值          | 描述                                       |
| ---------- | ---------------------------------------- |
| length     | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置高度。如果只给出一个值，第二个是设置为"atuo(自动)" |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" |
| cover      | 此值是将图片放大，以适合铺满整个容器，这个主要运用在，当图片小于容器时，又无法使用background-repeat来实现时，我们就可以采用cover;将背景图片放大到适合容器的大小，但这种方法会使用背景图片失真 |
| contain    | 此值刚好与cover相反，其主要是将背景图片缩小，以适合铺满整个容器，这个主要运用在，当背景图片大于元素容器时，而又需要将背景图片全部显示出来，此时我们就可以使用contain将图片缩小到适合容器大小为止，这种方法同样会使用图片失真 |

### 纯CSS绘制三角形

本案例中用CSS绘制了一个左上三角形

```css
#triangle-topleft { 
  width: 0; 
  height: 0; 
  border-top: 100px solid red; 
  border-right: 100px solid transparent; 
}
```

绘制三角形的步骤一般为：

1. 新建一个元素，一般为块级元素，如果是行内元素需要`display:block`
2. 把它的宽高设置为`height:0; width:0;`
3. 设置边框`border`属性实现三角形

###  CSS隐藏文字及以图代字

**伪对象覆盖法**

使用伪对象来代替多出来的标签，能让图片覆盖文字，也能在图片无法加载时显示文字。

```html
<!--HTML-->
<a class="mylogo" target="_blank" href="#">LOGO</a>
```

```css
.mylogo {
  overflow: hidden;
  position: relative;
  display: block;
  width: 88px;
  height: 31px;
}

.mylogo:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(img/logo.jpg) no-repeat;
}
```

**text-indent负值法**

该方法通过属性 text-indent 设置一个较大的值，使文字超出显示器的边界，达到隐藏文字的效果。

```html
<!--HTML-->
<a class="mylogo" target="_blank" href="#">LOGO</a>
```

```css
.mylogo {
  text-indent: -9999px;
  
  display: block;
  width:88px;
  height: 31px;
  background: url(img/logo.jpg) no-repeat;
}
```
**text-indent:100%法**

```html
<!--HTML-->
<a class="mylogo" target="_blank" href="#">LOGO</a>
```

```css
.mylogo {
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  
  display: block;
  width: 88px;
  height: 31px;
  background: url(img/logo.jpg) no-repeat;
}
```
**其他**

flex布局、Sass和Grunt这几个话题有点大，可以另写一篇文章了，先给自己挖个坑，有时间再分析。

## 参考文章

Flex 布局教程：语法篇：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool

Flex 布局教程：实例篇：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

SASS用法指南：http://www.ruanyifeng.com/blog/2012/06/sass.html

CSS 图片替换文字：http://code.ciaoca.com/style/image-replacement/

纯CSS画的基本图形：http://www.jb51.net/css/41448.html