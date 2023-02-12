// var http = require('http');
var url = require('url');
// var fs = require('fs');
var http = require('http');
var fs = require('fs');
var event = require('events');

var xml2Js =  require('xml2js');
var lodash = require('lodash');
var parseString = xml2Js.parse;
var newModule = require('./newModule.js')


var eventEmitter = new event.EventEmitter();

//console.log(process.env);
//var formidable = require('formidable');
http.createServer(function (req, res) {
   
    let result = lodash.max([8,80,3,0,1]);
    console.log(lodash.flattenDeep([1,[2,[3,4]]]));
    console.log(result);
    var xml = "<root><text>Hello xml2js!</text> <id>1</id><name>Rohit</name></root>"

    try{
        parseString(xml, function (err, result) {
            if(!err){
                console.log(JSON.parse(JSON.stringify(result)))
            }
               // console.log(result);
            else
                throw err;
        });
    }
    catch(e){

    }
   
    let queryData = url.parse(req.url, true);
    var customeventHandler = function () {
        res.write('the event handler has been attached successfully');
    }
    
    eventEmitter.on('customEvents', customeventHandler);
    if(queryData.query.id == 3){
        eventEmitter.emit('customEvents');
    }
    res.write('this is to check the events functionality');
    res.end();
    // fs.open('../jsFile.js','w', function(err, data) {
    //     console.log(data);
    //    // res.write(data);
    //     res.end();
    // });
        // fs.unlink('newfile1.txt',function(err,data){
        //     console.log(data);
        // })
        // fs.rename('newfile.txt','renamedFile.txt',function(err,data){
        //     console.log(data);
        // })
        // fs.readFile('../js1.html', function(err, data) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     return res.end();
        // });
       
    // fs.appendFile('../form.html', 'any random content', function (err,data) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //     //res.write(data);
    //     res.end();

    // });

    // fs.open('newfile.txt','w',function(err,data){
    //     console.log(data);
    //     res.end();
    // })
//    fs.writeFile('newfile.txt','certain content',function(err,result){
//     console.log(result);
//     res.end();
//    }) 
}).listen(8080);




    //console.log(req.url)
// let queryData = url.parse(req.url, true);
// console.log(queryData)
//let sqlQuery = 'select *from main_table where id='+queryData.id;
 //res.writeHead(200,{'content-type':'application/json','authentication':'djhfkd89948242`=-=09'});
//    res.write( ' query search'+queryData.query.id);
//    res.write('query pathname'+queryData.pathname);
//    res.write('query search'+queryData.search);
//    res.write('query search'+queryData.query);
// res.end(); 
   // res.send('hey this is our server')
