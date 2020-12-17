import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';


export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
            <h1>tsx测试</h1>
          <RouterLink to="/app3">app3</RouterLink> 
         
        </div>
        <RouterView/>
      </>
    );
  }
});