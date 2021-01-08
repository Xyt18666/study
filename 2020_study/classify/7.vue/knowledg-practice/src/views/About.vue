<template>
    <div class="about">
        <h1>about</h1>
        <mavon-editor
            ref="editor"
            v-model="doc"
            @save="saveDoc"
            @change="updateDoc"
            :toolbars="markdownOption"
            :ishljs="true"
        ></mavon-editor>
        <div id="div1"></div>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import "highlight.js/styles/googlecode.css";
import hljs from "highlight.js"; //导入代码高亮文件

// --------------------------------------------

import E from "wangeditor";
const editor = new E("#div1");

// ---------------------------------------------------

export default {
    name: "Create",
    components: { mavonEditor },
    data() {
        return {
            doc: "",
            markdownOption: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
        };
    },
    mounted() {
        this.highlighthandle();

        editor.create();
        editor.txt.html("<p>用 JS 设置的内容</p>"); // 重新设置编辑器内容

        console.log(editor.txt.html());
        console.log(editor.txt.text());
    },
    methods: {
        updateDoc(markdown, html) {
            // @change: 当值发生改变时 触发
            // 此时会自动将 markdown 和 html 传递到这个方法中
            console.log("markdown内容: " + markdown);
            console.log("html内容:" + html);
        },
        saveDoc(markdown, html) {
            // @save: 按下 ctrl + s 时触发
            // 此时会自动将 markdown 和 html 传递到这个方法中
            console.log("markdown内容:" + markdown);
            console.log("html内容:" + html);
        },
        async highlighthandle() {
            await hljs;
            let highlight = document.querySelectorAll("code,pre");
            highlight.forEach(block => {
                hljs.highlightBlock(block);
                // console.log(hljs.highlightBlock, block);
            });

            // console.log(hljs);
            // console.log(highlight);
        },
    },
};
</script>
