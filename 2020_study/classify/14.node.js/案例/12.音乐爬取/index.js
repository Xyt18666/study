let axios = require('axios')
let fs = require('fs')
let path = require('path')

async function getPage(num){
    let httpUrl = 'http://www.app-echo.com/api/recommend/sound-day?page='+num
    let res = await axios.get(httpUrl)
    // console.log(res.data)
    res.data.list.forEach(function(item,i){
        let title = item.sound.name
        let mp3Url = item.sound.source
        let fileNam = path.parse(mp3Url).name
        let content = `${title},${mp3Url},${fileNam}\n`
        fs.writeFile('music.txt',content,{flag:'a'},function(){
            console.log("写入完成"+title)
        })
        // console.log(title,fileNam,mp3Url)
        dowLog(mp3Url,fileNam)
    })
}

async function dowLog(mp3Url,fileNam){
    let res = await axios.get(mp3Url,{responseType:'stream'})
    let ws = fs.createWriteStream('./mp3/'+fileNam+'.mp3') //创建写入流
    res.data.pipe(ws)//管道写入
    res.data.on('close',function(){//完成后 关闭
        ws.close()
    })
}

getPage(1)