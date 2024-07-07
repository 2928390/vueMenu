<template>
  <div class="starry-sky">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <div class="layer4"></div>
    <div class="layer5"></div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.starry-sky {
  height: 100%;
  background-color: #000;
}

// x 偏移量 | y 偏移量 | 阴影颜色
// box-shadow: 60px -16px teal;
@function getShadows($n) {
  // #{} 相当于模板字符串中的 ${}
  // random() 生成 0-1 随机数，传入 100 生成 0-100 随机整数
  $shadows: '#{random(100)}vw #{random(100)}vh #fff';

  // from 2：循环的初始值，即 $i 从 2 开始。
  // through $n：指定循环结束的条件
  // @for $i from 1 through 3 会循环生成 1、2、3
  @for $i from 2 through $n {
    $shadows: '#{$shadows}, #{random(100)}vw #{random(100)}vh #fff';
  }

  // '#{random(100)}px' => "50px"
  // unquote() 去掉双引号
  // unquote('#{random(100)}px') => 50px
  @return unquote($shadows);
}

$duration: 400s;
$count: 1000;

@for $i from 1 through 5 {
  // duration 每循环一次 时间减半(允许对带单位的数值进行运算)
  // 400s 200s 100s

  // $duration: $duration / 2;
  $duration: calc($duration / 2);

  // $count: floor($count / 2);
  $count: floor(calc($count / 2));
  .layer#{$i} {
    $size: #{$i}px;
    position: fixed;
    width: $size;
    height: $size;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-shadow: getShadows($count);
    animation: moveup $duration linear infinite;
    &::after {
      content: '';
      position: fixed;
      left: 0;
      top: 100vh;
      // inherit 继承父元素
      border-radius: inherit;
      width: inherit;
      height: inherit;
      box-shadow: inherit;
    }
  }
}

@keyframes moveup {
  to {
    transform: translateY(-100vh);
  }
}
</style>
