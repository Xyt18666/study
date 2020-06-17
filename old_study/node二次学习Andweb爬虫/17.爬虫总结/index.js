/*

1. 什么是爬虫？
    通过模拟浏览器的请求， 服务器会根据请求， 返回 所需数据， 将数据解析保存 


2. 爬虫流程：
    1. 目标：确定想要获取的数据
        1. 确定在什么页面（一般详的数据 会在 详情情页）
        2. 确定在哪些页面，可以连接到这些页面（一般分类列表页面 会有 详情页面的数据）
        3. 寻找页面之间 和 数据之间的 规律
   
    2. 分析页面：
        1. 获取数据的方式（正则:麻烦 / cherrio：只能获取html）
        2. 分析数据是通过 ajax 请求的数据 还是 html里自带的数据
        3. 如果 是 ajax ,那么需要获取ajax请求的链接，一般请求的数据都是json,那么就会比较容易解析
        4. 如果 是在 html 中 ，那么就使用 cherrio 的选择器选中

    3. 编写单个数据获取的案例：
        1. 解析出 分类页的 链接 地址
        2. 解析出 列表页的 链接 地址
        3. 解析 详情 链接 地址
        4. 解析详情页里面想要获取的数据
        5. 将数据进行保存到本地 或者 数据库

    
    4. 如果遇到阻碍，进行反爬虫对抗
        1. UserAgent 是否为正常浏览器的信息
            解决： 将请求头设置为 和浏览器 相同的值
        2. 因为爬虫的速度过快，会导致封ip
            解决： 降低速度，或者使用代理
        3. 会设置验证码，只有通过人为的验证码后，才将凭证给到你，那么就需要浏览器的真实的操作
            解决：使用 puppeteer 无界 浏览器 真实模拟





3. 请求数据的库：

    request : 通过库，帮助我们快速实现 http 请求包的 打包

        request.get('请求地址',{
            '请求头字段'："请求value"
        },(res)=>{
            处理返回的内容
        })



    axios : 通过库，帮助我们快速实现 http 请求包的 打包( 优势更明显，先后端通吃)

        axios.get('请求地址',参数对象).then(function(respense){
            处理返回的内容
        })
       
        

    puppeteer : 完全模拟浏览器

        let options = {   配置常用参数
            headless:false, 是否开启无界面
            slowMo:250,  减慢操作速度 
            timeout:3000,  设置超时时间
            defaultViewport:{ 设置可视区大小
                width:1000,
                height:500
            }
        }

        打开浏览器: let browser = await puppeteer.launch(options);  

        打开新页面：
            let page = await browser.newPage()

        获取所有浏览器中的页面：
            let pages = await browser.pages()

        关闭浏览器：
            browser.close()


        将页面跳转至：
            page.goto('地址')

        获取页面的对象：
            let ele = await page.$('选择器')

            点击：
                ele.click()

            聚焦输入框：
                ele.forcus()
            
        写入内容或者按键:
            await page.keyboard.type("写入")
            await page.keyboard.press("ArrowLeft")
            await page.keyboard.down("xx按键")

        鼠标的移动：
            await page.mouse.down()
            await page.mouse.move(0,0)
            await page.mouse.up()

        截获页面请求：
            await page.setRequestInterception(true);
            page.on('request',(request)=>{
                if(你想要的条件){
                    request.continue()
                }else{
                    request.abort([errorCode])
                }

                // request.respond({
                //     status:404,
                //     contentType:'text/plain',
                //     body:'Not Found!'
                // })
                
            })

        获取浏览器的信息和内容：
            page.$eval(selector,(item)=>{return item})
            page.$$eval(selectors,(item)=>{return item})


*/