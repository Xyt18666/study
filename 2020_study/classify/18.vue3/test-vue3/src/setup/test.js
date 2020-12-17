import { reactive } from 'vue';

function testFn() {
  let state2 = reactive({
    datas: '抽离后的属性',
  });

  function setTest() {
    state2.datas = '抽离的方法';
  }

  return { state2, setTest };
}

export default testFn;
