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

@function getShadows($n) {
  $shadows: '#{random(100)}vw #{random(100)}vh #fff';

  @for $i from 2 through $n {
    $shadows: '#{$shadows}, #{random(100)}vw #{random(100)}vh #fff';
  }

  @return unquote($shadows);
}

// random() 生成 0-1 随机数
// 传入 100 生成 0-100 随机整数

// '#{random(100)}px' => "50px"
// unquote() 去掉双引号
// unquote('#{random(100)}px') => 50px
$duration: 400s;
$conut: 1000;

@for $i from 1 through 5 {
  // duration 每循环一次 时间减半(允许对带单位的数值进行运算)
  // 400s 200s 100s

  // $duration: $duration / 2;
  $duration: calc($duration / 2);

  // $conut: floor($conut / 2);
  $conut: floor(calc($conut / 2));
  .layer#{$i} {
    $size: #{$i}px;
    position: fixed;
    width: $size;
    height: $size;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-shadow: getShadows($conut);
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
