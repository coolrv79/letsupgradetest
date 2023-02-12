var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url == '/upload'){
        let form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
           console.log(files); 
           let filePath = files.fileUpload.filepath;
           let originalFilePath = 'C:/Users/MSUSERSL123/Documents/letsupgrade/node-Basics/uploadedFiles/'+files.fileUpload.originalFilename;
           console.log(originalFilePath);
           console.log(filePath)
           fs.rename(filePath,originalFilePath,function(err){
            if(!err){
                console.log('file has been moved');
                res.write('file has been moved');
                res.end()
            }
            
           })
        })
    }
    else{
        res.write('this is not the correct path to upload the files,please use /upload path');
        res.end();
    }
}).listen(8090);