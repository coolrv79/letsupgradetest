var http = require('http');
var os = require('os');

var crypto = require('crypto-js');
var key = "Baba0987_&";


function check(){
    console.log('check')
}
function encryptDecrpt(){
    let encryptedData = crypto.AES.encrypt('this is my name', key).toString();
    console.log(encryptedData);
    
    let decryptData = crypto.AES.decrypt(encryptedData,key).toString(crypto.enc.Utf8);;
    console.log(decryptData);

    return {
        encryptedValue : encryptedData,
        decryptedValue : decryptData
    }
    
    console.log(crypto.MD5('this is rohit'));
}
module.exports = encryptDecrpt;


// process.on('SIGINT',function(){
//     console.log('check');
// });
//     setTimeout(() => {
//         console.log('Exiting.');
//         console.log(process.pid);
//         console.log(process.kill(process.pid, 'SIGINT'));
//     }, 10000);
// http.createServer(function(req,res){
//     console.log(os.totalmem());
//     res.write('this is new server');
//     //process.kill(process.pid,'')
//     res.end();
// }).listen(4587);