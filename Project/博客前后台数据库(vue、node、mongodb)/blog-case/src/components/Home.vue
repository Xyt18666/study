<template>
  <el-container class="main_content">
    <el-row class="main_box">
      <el-col :span="16">
        <el-row type="flex" justify="center" class="mian_list">
          <el-col
            :span="22"
            class="list_item"
            v-for="(d, i) in $store.state.mainList"
            :key="i"
          >
            <h3>{{ d.title }}</h3>
            <div class="item_msg">
              <div class="author">
                作者
                <span>{{ d.msg.author }}</span>
              </div>
              --
              <div class="times">
                时间
                <span>{{ d.msg.times }}</span>
              </div>
              --
              <div class="read">
                阅读:
                <span>{{ d.msg.read }}</span>
              </div>
              --
              <div class="comment">
                评论:
                <span>{{ d.msg.comment }}</span>
              </div>
            </div>
            <p class="article">
              {{ d.text }}
            </p>
            <el-button type="warning" @click="toDetails(d, i)"
              >阅读全文</el-button
            >
          </el-col>
        </el-row>
        <el-row>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="listLength"
            :page-size="3"
            :current-page="currentPage"
            @prev-click="preClick"
            @next-click="nextClick"
            v-show="$store.state.isPage"
          ></el-pagination>
        </el-row>
      </el-col>
      <el-col :span="8" class="aside">
        <div class="longin" v-show="isShow == 1">
          <h3><p>登陆</p></h3>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <!-- 
                        :model="ruleForm"  绑定属性
                        :rules="rules"      绑定规则
                        ref="ruleForm"      获取组件

                     -->
            <el-form-item label="用户名" prop="user" :required="true">
              <!-- 
                        prop="user"         绑定属性
                        v-model="ruleForm.user" 绑定属性
                                -->
              <el-input
                type="input"
                v-model="ruleForm.user"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" :required="true">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" :required="true">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="long_but"
              >
                登陆
              </el-button>
            </el-form-item>
          </el-form>
          <p>
            还没注册，
            <router-link to="/longin">马上去注册</router-link>
          </p>
        </div>
        <el-row>
          <el-col :span="24" class="longOk" v-show="isShow == 2">
            <el-button type="text">登录成功</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="creatAction">
            <el-button type="text" @click="showCreatAction">添加版块</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="sendMsg">
            <el-button type="text" @click="showBox">发布信息</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="发布新的文章" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.textarea"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="releaseMsg">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加版块 -->
    <el-dialog title="添加版块" :visible.sync="dialogFormVisible2">
      <el-form :model="form2">
        <el-form-item label="版块标题" :label-width="formLabelWidth">
          <el-input v-model="form2.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="creartAction">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
// import { login, login2 } from "@/api/login/index.js";
// import testApi from "@/api/login/index.js";



export default {
  data() {
    // 自定义表单验证方式
    var userIsTrue = (rule, value, callback) => {
      // 请求后端，判断此用户是否已经注册
      setTimeout(() => {
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 表单双向绑定属性
      ruleForm: {
        user: "18666142570",
        pass: "654321",
        checkPass: "654321",
      },
      // ruleForm: {
      //   user: "18733678267",
      //   pass: "123456",
      //   checkPass: "123456",
      // },
      // 绑定验证规则
      rules: {
        user: [
          { validator: userIsTrue, trigger: "blur" },
          { min: 11, max: 11, message: "必须是合法手机号", trigger: "blur" },
        ],
        /*
                可以混合验证
                */

        // 失焦触发
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
      listLength: 0,
      currentPage: 1,
      dialogFormVisible: false,
      form: {
        name: "",
        textarea: "",
      },
      form2: {
        name: "",
      },
      formLabelWidth: "120px",
      dialogFormVisible2: false,
      isShow: 1,
    };
  },
  created() {
    this.getMsg();
    this.getListLength();
    this.routerCheck();
  },
  mounted() {
    console.log(this);

    // 测试封装的api
    // login({
    //   rUserNmae: this.ruleForm.user,
    //   rPassWord: this.ruleForm.pass,
    // }).then((d) => {
    //   console.log(d);
    // });
    // login2({
    //   rUserNmae: this.ruleForm.user,
    //   rPassWord: this.ruleForm.pass,
    // }).then((d) => {
    //   console.log("login2", d);
    // });

    // testApi
    //   .login({
    //     rUserNmae: this.ruleForm.user,
    //     rPassWord: this.ruleForm.pass,
    //   })
    //   .then((d) => {
    //     console.log(d);
    //   });
  },
  watch: {
    $route: "routerCheck",
  },
  methods: {
    creartAction() {
      this.dialogFormVisible2 = false;
      console.log(this.$store.state.userId);
      this.$http
        .post("http://localhost:8088/api/creartaction", {
          id: this.$store.state.userId,
          datas: this.form2.name,
        })
        .then((d) => {
          console.log(d);
        });
      let old = JSON.parse(JSON.stringify(this.$store.state.allData));
      old[this.form2.name] = [];
      console.log(old);

      this.$store.commit("setAllData", old);
    },
    showCreatAction() {
      if (this.$store.state.userId) {
        this.dialogFormVisible2 = true;
      } else {
        alert("先登录");
      }
    },
    showBox() {
      if (this.$store.state.allData) {
        this.dialogFormVisible = true;
      } else {
        alert("先登录");
      }
    },
    releaseMsg() {
      this.dialogFormVisible = false;
      console.log("发布信息");
      let oneMsg = {
        title: this.form.name,
        msg: {
          author: this.$store.state.userId,
          times: new Date().toLocaleDateString(),
          read: 0,
          comment: 0,
        },
        text: this.form.textarea,
        commentList: [],
      };
      console.log(oneMsg);

      let old = JSON.parse(JSON.stringify(this.$store.state.mainList));
      old.unshift(oneMsg);

      this.$store.commit("setMainList", old);

      if (this.$store.state.section) {
        //   非首页，获取到是哪个用户，哪个分组，并为他添加
        console.log(this.$store.state.userId, this.$store.state.section);
        this.$http
          .post("http://localhost:8088/api/releasemsg", {
            id: this.$store.state.userId,
            section: this.$store.state.section,
            datas: oneMsg,
          })
          .then((d) => {
            console.log(d);
          });
      } else {
        old.pop();
        this.$store.commit("setMainList", old);
        //   首页无需任何参数，直接添加
        this.$http
          .post("http://localhost:8088/api/releasemsg", {
            id: null,
            section: "mainList",
            datas: oneMsg,
          })
          .then((d) => {
            console.log(d);
          });
      }
    },
    routerCheck() {
      if (this.$route.path == "/home") {
        this.$store.commit("setIsPage", true);
        this.$store.commit("setMainList", this.$store.state.homeList);
        this.$store.commit("setSection", null);
      } else {
        console.log("执行切换homepath");

        this.$store.commit("setIsPage", false);
        this.$store.commit(
          "setMainList",
          this.$store.state.allData[this.$route.params.id]
        );

        this.$store.commit("setSection", this.$route.params.id);
      }
    },
    toDetails(datas, i) {
      // 判断是否登录

      console.log(datas, i);
      this.$store.commit("setListIndex", i);

      if (this.$store.state.allData) {
        console.log("进入详情");
        this.$router.push({
          name: "details",
          id: new Date().getTime(),
          params: datas,
        });
      } else {
        alert("请先登录");
      }
    },
    getDatas() {
      this.$http
        .post("http://localhost:8088/api/longin", {
          rUserNmae: this.ruleForm.user,
          rPassWord: this.ruleForm.pass,
        })
        .then((ids) => {
          this.$store.commit("setUserId", ids.data.data.id);

          if (ids.data.data.id) {
            this.$http
              .post("http://localhost:8088/api/getmsg", ids.data.data)
              .then((d) => {
                console.log("头部信息", d.data.data);

                this.$store.commit("setAllData", d.data.data);
                console.log(this.$store.state.allData);
                this.$router.push("/home");
                this.$refs.ruleForm.resetFields();

                this.isShow = 2;
              });
          } else {
            this.$router.push("/administration");
          }
        });
    },
    getMsg() {
      if (this.$route.params.data) {
        this.$http
          .post("http://localhost:8088/api/getmsg", this.$route.params.data)
          .then((d) => {
            this.$store.commit("setAllData", d.data.data);
            console.log(d.data.data);
          });
      }
    },
    getMainList(page = 1) {
      this.$http
        .post("http://localhost:8088/api/getmainlist", { pages: page })
        .then((d) => {
          console.log(d);
          this.$store.commit("setMainList", d.data.data);
          console.log(this.$store.state);
        });
    },
    getListLength() {
      this.$http.post("http://localhost:8088/api/getlistlength").then((d) => {
        this.listLength = d.data.data;
        console.log(this.listLength);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // 检验方法
        if (valid) {
          this.$message({
            message: "登陆成功",
            type: "success",
          });
          this.getDatas();
          // 登陆
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    preClick() {
      this.currentPage--;
      console.log("pre");
      this.getMainList(this.currentPage);
      console.log(this.currentPage);
    },
    nextClick() {
      this.currentPage++;
      console.log("next");
      this.getMainList(this.currentPage);
      console.log(this.currentPage);
    },
  },
};
</script>

<style>
.main_content {
  width: 960px !important;
}
.main_box {
  width: 100%;
}
.mian_list {
  flex-flow: column wrap;
}
.list_item {
  background: #fff;
  margin: 20px 0;
  padding: 20px;
}
.list_item h3 {
  text-align: center;
}
.list_item .item_msg {
  display: flex;
  justify-content: center;
}
.aside .longin {
  margin: 20px 0;
  padding: 20px;
  background: #fff;
}
.longin .long_but {
  width: 100%;
}
.longin > p {
  text-align: right;
}
.sendMsg,
.creatAction,
.longOk {
  background: #fff;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
