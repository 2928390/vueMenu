<template>
  <div class="content">
    <section>
      <div>
        <p>
          亲爱的松: <br />
          见字如晤，展信舒颜。<br />
          你在听吗，当你看到这封信的时候，我已经是国家一级保护动物了。<br />
          你再打我你得踩缝纫机，时间过得真快，我离开那片山岗已经好几百多年了。<br />
          现在吃的好，睡得也好，也不用担心有人半夜打我。<br />
          哦对了，我还认识了一只猴子，有机会介绍你们认识。<br />
          松，我想你了，今夜的风和景阳那晚你我初遇时吹得一样令人心动，而唯一不同的是，我再也见不到你了。<br />
          树欲静而风不止，虎皮痒而松不在。<br />
          我多希望你能回来看看我哪怕一眼，只要你来，无论多远，我等你!<br />
          松，你还会打俺么?
        </p>
        <!-- 下面的p覆盖上面的p -->
        <p class="eraser">
          <!-- 行盒 -->
          <span class="text">
            亲爱的松: <br />
            见字如晤，展信舒颜。<br />
            你在听吗，当你看到这封信的时候，我已经是国家一级保护动物了。<br />
            你再打我你得踩缝纫机，时间过得真快，我离开那片山岗已经好几百多年了。<br />
            现在吃的好，睡得也好，也不用担心有人半夜打我。<br />
            哦对了，我还认识了一只猴子，有机会介绍你们认识。<br />
            松，我想你了，今夜的风和景阳那晚你我初遇时吹得一样令人心动，而唯一不同的是，我再也见不到你了。<br />
            树欲静而风不止，虎皮痒而松不在。<br />
            我多希望你能回来看看我哪怕一眼，只要你来，无论多远，我等你!<br />
            松，你还会打俺么?
          </span>
        </p>
      </div>
    </section>
    <section>
      <p>大晚上天上哪会掉阳光，不过是我在前院大战时溅射的火花罢了 ——戴天帝</p>
    </section>
    <section>
      <h1>爱一个人是藏不住的，但爱两个人一定要藏住了</h1>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// gsap 动画库
import { gsap } from 'gsap';

// 引入插件 ScrollTrigger
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册插件
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = document.querySelectorAll('section');

  sections.forEach((dom) => {
    /**
     * 参数一: 要操作的元素
     * 参数二: 开始状态
     * 参数三: 结束状态
     */
    gsap.fromTo(
      dom,
      {
        // 开始状态：负的视口高度的一半
        backgroundPositionY: `-${window.innerHeight / 2}px`
      },
      {
        // 开始状态：正的视口高度的一半
        backgroundPositionY: `${window.innerHeight / 2}px`,
        // 动画的时间函数 none 匀速
        ease: 'none',
        // 动画时间 - 测试(注释后将动画与滚动条同步)
        // duration: 7,

        // 将动画绑定到滚动条上（随时间变化 => 随滚动条变化）
        scrollTrigger: {
          // 要触发那个元素的动画
          trigger: dom,
          // 将这个动画与滚动条连接
          scrub: true
        }
      }
    );
  });
});
</script>

<style lang="scss">
.content {
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;

    &:nth-child(1) {
      background-image: url('../../assets/1080-4.jpg');
      div {
        position: relative;
        top: -60px;
        margin: 20px auto;
        width: 60%;
        // text-align: center;
        // 必须为 fff
        color: #fff;
        // 混合：span 的黑背景，变为父级的背景图片的的颜色
        mix-blend-mode: difference;

        .eraser {
          position: absolute;
          // 这里等同于 top:0 right:0 bottom:0 left:0
          inset: 0;
          // 透明的起始位置
          $p: 5%;

          .text {
            color: transparent;
            // 行内盒背景颜色跟随文字，每行之间有空隙
            // 透明色变到 20%，黑色从 30% 开始，到结束
            background-image: linear-gradient(to right, transparent #{$p}, #000 #{$p + 10%});
            // 宽高 100%
            background-size: 100% 100%;
            // forwards：动画结束后，元素将停留在最后一个关键帧的样式
            animation: erase 10s linear forwards;
          }

          @keyframes erase {
            to {
              // 透明默认为 20%，最终透明要为 100%，将背景宽度改为 500% 即可
              background-size: #{100% * calc(100% / $p)} 100%;
            }
          }
        }
      }
    }

    &:nth-child(2) {
      background-image: url('../../assets/1080-1.jpg');

      p {
        font-size: 24px;
        font-weight: 500;
        color: transparent;

        background: linear-gradient(#fe4e00 50%, transparent 50%) center center / 100vw 100vh fixed;
        // 设置背景为线性渐变，从橙色(#fe4e00)过渡到透明(transparent)，过渡点在各自颜色的50%位置
        background-image: linear-gradient(#fe4e00 50%, transparent 50%);
        // 渐变的起始点位于元素的中心位置（水平和垂直方向均居中）。
        background-position: center center;
        // 渐变的大小被设置为覆盖整个视口宽度(100vw)和视口高度(100vh)
        background-size: 100vw 100vh;
        // 背景图像固定，不随页面的其余部分滚动
        background-attachment: fixed;

        // 背景附着方式
        background-clip: text;
        -webkit-background-clip: text;

        // 文字描边
        -webkit-text-stroke: 1px #fe4e00;
      }
    }

    &:nth-child(3) {
      background-image: url('../../assets/1080-3.jpg');
      h1 {
        color: #fff;
        // 背景颜色：混合
        mix-blend-mode: difference;

        // right bottom: 指定了背景图像的位置
        // 设置了一个线性渐变背景，从右向左颜色从 #ec695c 变化到 #61c454，并且背景图像不重复，初始位置在元素的右下角（默认左上）
        background: linear-gradient(to right, #ec695c, #61c454) no-repeat right bottom;
        // 设置背景大小为水平方向0宽度，垂直方向2像素高，意味着初始时背景线条不可见
        background-size: 0 2px;
        transition: background-size 1300ms;

        &:hover {
          // 默认 right
          background-position-x: left;
          background-size: 100% 2px;
        }
      }
    }
  }
}

// from 2：循环的初始值，即 $i 从 2 开始。
// through $n：指定循环结束的条件
// @for $i from 1 through 3 会循环生成 1、2、3
@for $i from 1 through 3 {
  section:nth-child(#{$i}) {
    // unquote() 去掉引号，unquote('#345') => #345
    background-color: unquote('##{random(10)}#{random(10)}#{random(10)}');
    // 随机背景图片
    // background-image: url('https://picsum.photos/1920/1080?#{random(100)}');
  }
}
</style>
