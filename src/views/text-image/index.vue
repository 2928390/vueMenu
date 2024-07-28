<template>
  <div class="content"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { createTextImage } from './';

onMounted(() => {
  const content = document.querySelector('.content');

  const cvsText = document.createElement('canvas');
  content.appendChild(cvsText);

  createTextImage({
    canvas: cvsText,
    raduis: 10,
    replaceText: '太美',
    source: {
      text: 'kun',
      fontSize: 200
    }
  });

  const cvsImg = document.createElement('canvas');
  const brImg = document.createElement('br');
  content.appendChild(brImg);
  content.appendChild(cvsImg);

  createTextImage({
    canvas: cvsImg,
    replaceText: '驴',
    raduis: 10,
    source: {
      // 注意这里的路径 只能这样写 @ 或者 ./
      img: 'src/assets/迈克尔杰克驴.png',
      width: 600,
      height: 600
    }
  });

  const cvsVideo = document.createElement('canvas');
  const brVideo = document.createElement('br');
  content.appendChild(brVideo);
  content.appendChild(cvsVideo);

  createTextImage({
    canvas: cvsVideo,
    replaceText: 'kun',
    raduis: 6,
    source: {
      // 注意这里的路径 只能这样写 @ 或者 ./
      video: 'src/assets/kun.mp4'
      // width: 600,
      // height: 600
    }
  });
});
</script>

<style lang="scss" scoped></style>
