let http = require("http")
let server = http.createServer()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
server.on('request',function(req,ress){
    if(req.url=='/'){
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbase = db.db("test");
            dbase.collection('test'). find({}).toArray(function(err,res){
                if(!err){
                    ress.end(JSON.stringify(res))
                    db.close();
                }
            })
            
          });
    }
})
server.listen(3000,function(err){
    if(!err){
        console.log("打开localhost:3000")
    }
})

 

