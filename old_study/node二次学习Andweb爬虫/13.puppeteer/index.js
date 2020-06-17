/*
puppeteer  无界面浏览器  ，谷歌官方维护的

安包 cnpm i puppeteer

作用：
1. 生成页面PDF
2. 抓取SPA(单页应用) 并 生成预渲染内容
3. 自动提交表单，进行ui测试，键盘输入等
4. 创建一个实时更新的自动化测试环境，使用最新的js 和 谷歌浏览器 执行测试
5. 捕获网站的 timeline trace ，用来帮助分析问题 
6. 测试浏览器拓展


用于 ：爬虫 、 测试
*/ 

let puppeteer = require('puppeteer');


async function test(){
    //实例开启浏览器 ，可以传入一个对象，可以配置为无界面浏览器（性能好），反之可有界面
    let browser = await puppeteer.launch({
        headless:false,// 有界面
        defaultViewport:{//设置视窗大小
            width:1000,
            height:800
        }
    });
                                         

        let page = await browser.newPage()   //打开一个新页面 
        // await page.goto('https://www.baidu.com')

        await page.goto('https://www.xiaopian.com/')

        // await page.screenshot({path:'screenshot.png'})//截屏

                                           //选择器   回调函数
        let elesments = await page.$$eval(".contain li a",(elements)=>{//获取页面内容
            // console.log(elements)
            let eles = [];//创建一个数组去收集元素的信息
            elements.forEach(function(item,i){
                console.log(item.innerHTML)//此时获取到了 标签内的内容
                
                if(item.getAttribute('href') != "#"){
                    var eleObj = {
                        href:item.getAttribute('href'),
                        text:item.innerText
                    }
                    eles.push(eleObj)
                }
               
            })
            return eles
        })
        // console.log(elesments)//此时获取到想要的链接和标题

        let moveNew = await browser.newPage()

        
        // await moveNew.goto('https://www.xiaopian'+elesments[1].href)//打开最新页面





        //打开方法二

        // let eleHeader = await page.$$(".contain li a")//获取页面对象
        // eleHeader[1].click() //模拟点击进入



        //模拟 搜索框搜索
        inputEle = await page.$('.search .formhue')//找到搜索框
        await inputEle.focus() //光标进入输入框
        await page.keyboard.type("如影随心") //输入要搜索的内容

        let btnEle = await page.$('.searchr input')//点击搜索
        await btnEle.click()





        // await page.on('console',function(...args){ //监听 控制台输出
        //     console.log(args)
        // })


}


test()
