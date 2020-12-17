<template>
  <div class="test">
    <h2>test组件</h2>
    <p>获取dateRea：{{ dateRea.a }}</p>
    <button @click="setA">修改a</button>
    <p>dataRef是:{{ dateRefValue }}</p>
    <button @click="setRef">修改ref</button>
    <p>抽离后的属性：{{ state2.datas }}</p>
    <button @click="setTest">修改抽离后的值</button>
    <p>dateShallowRef:{{ dateShallowRef }}</p>
    <p>dataShallowReactive:{{ dataShallowReactive }}</p>
    <button @click="setShall">修改Shall第一层,触发修改</button>
    <button @click="setShallTow">修改Shall内层,触发修改失败</button>
    <button @click="setrefD">修改Shall内层,主动刷新视图</button>
    <p>标记永远不会被跟踪{{ markrow.qwe }}</p>
    <p>toref：{{ toref }}</p>
    <p>torefs：{{ torefs.qwe.value }}</p>
    <p>myRef：{{ myRef }}</p>
    <p ref="box">ref获取元素</p>
    <p>readonly家族 {{ read + '---' + shallRead }}</p>
    <p>计算属性：{{ newdata }}</p>
    <tele-dom></tele-dom>
    <suspen-se></suspen-se>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  isRef,
  isReactive,
  shallowReactive,
  shallowRef,
  triggerRef,
  toRaw,
  markRaw,
  toRef,
  toRefs,
  readonly,
  shallowReadonly,
  isReadonly,
  computed,
  watch,
  watchEffect,
  provide,
  // inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from 'vue';
import testFn from '../setup/test.js';
import myCustomRef from '../setup/customRef.js';
import TeleDom from './Teleport.vue';
import SuspenSe from './Suspense.vue';

export default defineComponent({
  components: { TeleDom, SuspenSe },
  setup() {
    console.log('输出setup组合api入口函数');

    /*未抽离的 属性 和 方法 的定义*/
    let dateRea = reactive({
      a: 'a',
      b: 13,
      c: [1, 2, 3],
      d: new Date(),
    });
    /*---用于监听复杂数据，响应视图---*/

    let setA = () => {
      dateRea.a = '修改dateRea中的a';
    };
    /*---修改数据的函数---*/

    /*
        多种方式书写
        function setA() {
          dateRea.a = '修改dateRea中的a';
        }

      */
    let dateRefValue = ref(123);
    /*---ref和reactive一样，也是用来实现响应式数据的方法---*/

    function setRef() {
      dateRefValue.value = '新ref';
    }

    /*未抽离的 属性 和 方法 的定义 end*/

    /*抽离 */
    let { state2, setTest } = testFn();
    /*抽离 end*/

    /*判断是 ref 还是 rea*/
    console.log(isRef(dateRefValue), isReactive(dateRea));
    /*判断是 ref 还是 rea end*/

    /* shallowReactive 和 shallowRef 和 triggerRef */

    /*只有第一层变化才响应*/
    let dateShallowRef = shallowRef({ qq: '456789', list: [4, 965, 3, 5] });
    let dataShallowReactive = shallowReactive({ ww: 'www', obj: { ee: 'ee' } });

    function setShall() {
      dateShallowRef.value = {
        key: 'value新',
      };
      dataShallowReactive.ww = 'wwwqe';
    }
    function setShallTow() {
      dateShallowRef.value.qq = '419';
      dataShallowReactive.obj.ee = 'w12341e';
    }
    function setrefD() {
      dateShallowRef.value.qq = '419';
      triggerRef(dateShallowRef);
    }

    /* shallowReactive 和 shallowRef 和 triggerRef end*/

    /*toRaw*/

    /*
    从reactive或ref中得到原始数据
    做一些不想被监听的事情（提升性能）
    修改原始数据，视图不刷新，但是包装的reactive或ref会变

    */

    let obj2 = toRaw(dateRea);
    let obj3 = toRaw(dateRefValue.value);
    obj2.b = 99999;

    console.log(obj2, obj3);
    console.log(dateRea);

    /*toRaw end*/

    /*markRaw*/
    /*标记某个数据永远不会被追踪*/

    let obj4 = markRaw({ qwe: 'qwe' });
    let markrow = reactive(obj4);
    setTimeout(() => {
      markrow.qwe = 'sdfsdfssdf';
      console.log(markrow.qwe);
    }, 2000);

    /*markRaw end*/

    /*toRef*/
    /*将某一个对象中的属性变成响应式的数据，我们修改响应式数据是会影响到原始数据的,但是并不会触发ui更新*/

    let keys = { asd: 'value' };
    let toref = toRef(keys, 'asd');
    console.log(toref);
    console.log(keys);

    setTimeout(() => {
      toref.value = 'sdfghffhff';
      console.log('修改后', toref);
      console.log('修改后', keys);
    }, 2000);

    /*toRef end*/

    /*toRefs*/
    /*将某一个对象中的属性变成响应式的数据，我们修改响应式数据是会影响到原始数据的,但是并不会触发ui更新*/

    let keys2 = { asd: 'value', qwe: 'qweqwe' };

    let torefs = toRefs(keys2);
    console.log(torefs);
    console.log(keys2);

    setTimeout(() => {
      torefs.qwe.value = 'sdfghffhff';
      console.log('修改后', torefs);
      console.log('修改后', keys2);
    }, 2000);

    /*toRefs end*/

    /* myCustomRef */
    let myRef = myCustomRef('http://musicapi.leanapp.cn/dj/program?rid=336355127', null);
    console.log('myref', myRef);

    setTimeout(() => {
      myRef.value = '修改';
      console.log('myref修改后', myRef);
      // triggerRef(myRef);
    }, 2000);

    /* myCustomRef end*/

    /* ref获取元素 */

    let box = ref(null); // reactive({value: null})

    /* ref获取元素 end */

    /*  readonly shallowReadonly isReadonly*/
    let read = readonly({
      name: 'lnj',
      attr: {
        age: 18,
        height: 1.88,
      },
    });

    let shallRead = shallowReadonly({
      name: 'lnj',
      attr: {
        age: 18,
        height: 1.88,
      },
    });
    console.log(isReadonly(shallRead));

    /*  readonly shallowReadonly isReadonly end*/

    /*生命周期*/
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted', box.value);
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmount');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeActivated');
    });
    onErrorCaptured((err) => {
      console.log('onErrorCaptured', err);
    });
    onRenderTracked((e) => {
      console.log('onRenderTrackede', e);
    });
    onRenderTriggered((e) => {
      console.log('onRenderTriggered', e);
    });

    /*生命周期 end*/

    /* computed、watch 、watchEffect */

    let refc = ref(123);

    let newdata = computed(() => {
      return refc.value + 'computed';
    });
    setTimeout(() => {
      console.log('wer', refc);
      refc.value = 1;
    }, 3000);

    watch(refc, (newData, oldData) => {
      console.log(newData, oldData);

      // console.log('watch监听', newData, oldData);
    });

    watchEffect((onInvalidate) => {
      const token = 132;
      onInvalidate(() => {
        // id has changed or watcher is stopped.
        // invalidate previously pending async operation
        token.cancel();
      });
    });

    /* computed、watch  end*/

    /* provide inject*/
    provide("x","xxx")

    // let xx = inject('x');

    /* provide inject end*/

    return {
      dateRea,
      setA,
      dateRefValue,
      setRef,
      state2,
      setTest,
      dateShallowRef,
      dataShallowReactive,
      setShall,
      setShallTow,
      setrefD,
      markrow,
      toref,
      torefs,
      myRef,
      box,
      read,
      shallRead,
      newdata,
    };
    /*导出属性和方法*/
  },
});
</script>

<style></style>
