
//爬取图片


//安包  cnpm install cheerio
let cheerio = require('cheerio')
// 获取html文档的内容  类似于 jq


let axios = require('axios')

let fs = require('fs')
let url = require('url')
let path = require('path')



axios.get('https://www.fabiaoqing.com/bqb/lists/type/hot/page/3.html').then(function(res){
    // console.log(res.data)  //此时拿到数据

    let $ = cheerio.load(res.data) //解析 html

    $('body .bqba').each((i,ele)=>{
    //   console.log($(ele).attr('href'))  //此时获取到了 href路径
        let pageUrl = 'https://www.fabiaoqing.com' + $(ele).attr('href')
        let title = $(ele).find('h1.header').text()  //拿到标题
       
        fs.mkdir('./imgs/'+title,function(err){
            if(err){
                console.log(err)
            }else{
                console.log("创建目录成功")
            }
        }) // 创建与标题对应的文件夹
        // console.log(title)
        parsePage(pageUrl,title)
        // console.log(pageUrl)
    })

})

async function parsePage(url,title){
    let res = await axios.get(url);
    let $ = cheerio.load(res.data)
    $('.swiper-wrapper img').each((i,ele)=>{
        let imgUrl = $(ele).attr('data-original')  //此时获取到了 所有图片路径
        // console.log(imgUrl)

        let extName = path.extname(imgUrl)//获取扩展名
        let imgPath = `./imgs/${title}/${title}-${i}${extName}`
        let ws = fs.createWriteStream(imgPath) //创建写入流
        axios.get(imgUrl,{responseType:'stream'}).then(function(res){
           res.data.pipe(ws)//管道写入
           console.log(imgUrl+"加载完成")

           res.data.on('close',function(){//完成后 关闭
               ws.close()
           })
        })
    })

}