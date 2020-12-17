import { customRef } from 'vue';

function myCustomRef(path, initValue) {
  let values = initValue;
  return customRef((track, trigger) => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        values = data;
        trigger();
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      get() {
        track(); // 告诉Vue这个数据需要追踪变化
        console.log('get', values);
        return values;
      },
      set(newValue) {
        console.log('set', newValue);
        values = newValue;
        trigger(); // 告诉Vue触发界面更新,只有在修改value的时候才会调用
      },
    };
  });
}

export default myCustomRef;
