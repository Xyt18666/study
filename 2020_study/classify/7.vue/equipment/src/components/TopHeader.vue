<template lang="pug">
.top-header 
    h2 设备管理
    //- h2(@mouseover="show=true"  @mouseout="show=false" ) 用户名:{{name}} 
    //-     ul(v-show="show")
    //-         li(@click="setPassWord") 修改密码
    //-         li(@click="logOut") 退出

    <el-dropdown class="user" @command="onClick">
        <span class="el-dropdown-link">
            <span>{{ userData.name }}</span>  
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="changePw">修改密码</el-dropdown-item>
            <el-dropdown-item command="logOut">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="修改密码" :visible="showChangePw" @close="showChangePw = false" :width="'500px'" >
        <div class="change-pw-form">
            <el-form label-width="100px">
                <el-form-item label="旧密码">
                    <el-input type="password" v-model="old"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input type="password" v-model="news"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input type="password"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="showChangePw = false">取消</el-button>
            <el-button type="primary" @click="onChangePw">确定</el-button>
        </div>
    </el-dialog>
 
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "亚",
      show: false,
      old: "",
      news: ""
    };
  },
  computed: {
    ...mapState(["userData"])
  },
  methods: {
    ...mapMutations(["setUserData"]),
    changePw() {
      this.showChangePw = true;
    },
    onClick(val) {
      // if (val === 'changePw') {
      //     this.changePw();
      // }
      this[val]();

      // obj = { a: function() {} };
      // let val = 'a';
      // obj.a();
      // obj[val]();

      // callbackName = 'fn';
      // window[callbackName] = function() {};
      // function fn() {}
    },
    who() {
      this.$http.post("equipment/who").then(res => {
        console.log(res, "how");
        if (res.data.code !== 0) {
          this.$router.push({
            name: "Login"
          });
        } else {
          this.setUserData(res.data.data);
          // console.log(this.userData);
        }
      });
    },
    onChangePw() {
      console.log("修改密码调用接口");
      //     http://api.jxsjs.com/equipment/reset-password
      // POST 参数oldPw, newPw
      this.$http
        .post("equipment/reset-password", {
          oldPw: this.old,
          newPw: this.news
        })
        .then(res => {
          console.log(res);
        });
    },
    logOut() {
      this.$http.post("equipment/logout").then(res => {
        this.$router.push({
          name: "Login"
        });
        console.log(res);
      });
    },
    setPassWord() {
      // 弹框 重置 密码
    }
  },
  created() {
    this.who();
  }
};
</script>

<style lang="sass">
.top-header
    display: flex
    justify-content: space-between
    height: 60px
    background: #0079c4
    color: #fff
    font: bold 18px/60px ""
    padding-left: 30px
    h2
        margin: 0
        position: relative
        ul
            top: 30px
            width: 200px
            position: absolute
            background: #0f0
</style>
