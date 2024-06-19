import { createApp } from 'vue';
import MessageBox from '../../components/messageBox/index.vue';

// handlerClick: 点击确定，关闭弹窗
export function showMsg(msg, handlerClick) {
  // MessageBox: 创建 app 的时候创建的组件
  // {}: 传递给组件的参数
  const app = createApp(MessageBox, {
    msg,
    onClick: handlerClick
  });

  const div = document.createElement('div');
  document.body.appendChild(div);

  // 将这个实例挂载到新创建的 div 元素上
  app.mount(div);

  // 返回 关闭窗口的函数
  return () => {
    // 卸载 app
    app.unmount();
    // 删除 div
    document.body.removeChild(div);
  };
}
