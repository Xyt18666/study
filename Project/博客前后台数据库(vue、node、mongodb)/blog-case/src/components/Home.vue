<template>
    <el-container class="main_content">
        <el-row class="main_box">
            <el-col :span="18">
                <el-row type="flex" justify="center">
                    <el-col :span="22" class="list_item">
                        <h3>标题</h3>
                        <div class="item_msg">
                            <div class="author">
                                作者
                                <span>what</span>
                            </div>
                            --
                            <div class="times">
                                时间
                                <span>2020.12.8</span>
                            </div>
                            --
                            <div class="read">
                                阅读:
                                <span>0</span>
                            </div>
                            --
                            <div class="comment">
                                评论:
                                <span>0</span>
                            </div>
                        </div>
                        <p class="article">
                            内容
                        </p>
                        <el-button type="warning">阅读全文</el-button>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6" class="aside">
                <div class="longin">
                    <h3><p>登陆</p></h3>
                    <el-form
                        :model="ruleForm"
                        status-icon
                        :rules="rules"
                        ref="ruleForm"
                        label-width="80px"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="用户名" prop="user">
                            <el-input
                                type="input"
                                v-model="ruleForm.user"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input
                                type="password"
                                v-model="ruleForm.pass"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
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
                </div>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
    data() {
        var userIsTrue = (rule, value, callback) => {
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
            ruleForm: {
                user: "18733678267",
                pass: "123456",
                checkPass: "123456",
            },
            rules: {
                user: [{ validator: userIsTrue, trigger: "blur" }],
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
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
    height: 300px;
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
</style>
