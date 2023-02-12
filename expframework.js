var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');
var jwt = require('jsonwebtoken');
app.use('/static',express.static('public'));
var mongoClient = require('mongodb').MongoClient;
var connectionString = 'mongodb://127.0.0.1:27017';
//var moment = require('moment');
//import {}  from './customModule';
//var customFunc = require('./customModule')
 //var bodyParser = require('body-parser'); 
 app.use(cors());
 app.use(express.json())
 var ejs = require('ejs');
const e = require('express');
 var secretKey='sfajs897njkk_@8788hgjhj78+-';
 // var urlencodedParser = bodyParser.urlencoded({ extended: false });
//  app.use(express.json({limit:'1mb'}));
//console.log(moment("20111031", "YYYYMMDD").fromNow());
app.set('view engine','ejs');


function requiredLogin(req,res,next){
    try{
        if(jwt.verify(req.headers.authentication,secretKey)){
            next();
        }
     }
    catch{
        res.redirect('/logout')
    }
}


function autoIncrementId(){
    //var finalResult;
    mongoClient.connect(connectionString,function(err,response){
            let dbo = response.db('letsupgrade');
            dbo.collection('user').find({id:{$exists:1}},{id:1,_id:0}).toArray(function(err,result){
            let finalResult;
            finalResult = result.map(x=>x.id);
            console.log(finalResult.sort());
            console.log(finalResult.sort()[finalResult.length-1]+1);
            return finalResult.sort()[finalResult.length-1]+1;
             //  response.close();
              
               //finalResult.sort()
            })
    });
   
}
let value = autoIncrementId();
console.log(value);



app.get('/sendFile',function(req,res){
    res.sendFile('./static/jwt.png')
})
app.all('/logout',(req,res)=>{
    res.render('/logout');
    //res.send('<html><body><div style="text-align:center">User is not Authorized to see the respective page</div></body></html>')
})

app.get('/login/:id/userId/:userId',function(req,res){
    console.log(req.params);
    res.send('this is just to check the different routes');
})

app.use('/customMiddleware',function(req,res,next){
    req.query.id=23;
    console.log('middleware request',req.query);
   // res.send('custom middleware');
    next();
})

app.get('/customMiddleware',function(req,res){
    console.log('path',req.query);
    //console.log(res);
    res.send('this is to check the custom middleware');
})


app.get('/user',cors(),function(req,res){
    try{
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('access-control-allow-headers','*');
        // console.log(req.params);
        // console.log(req.query);
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
                let dbo = response.db('letsupgrade');
                let query= {email:req.query.id,password:req.query.password};
                // dbo.collection('user').insertMany([{id:6,age:45,name:'baba'},{id:7,age:50,name:'baba2'},{id:8,age:55,name:'baba3'}]);
                dbo.collection('user').find(query,{_id:0}).toArray(function(err,result){
                console.log(result);
                res.send(result);
                response.close();
                });
            }
            // dbo.createCollection('studentInfo',function(err,result){
            //     if(!err)
            //     console.log(result);
            // })
        })
    }
    catch(e){
        throw e;
    } 
});
app.post('/save',function(req,res){
    
  try{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('access-control-allow-headers','*');
    console.log(req.params);
    let userRecord = {
        id: req.body.id || 4,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
   
    mongoClient.connect(connectionString,function(err,response){
       if(!err){
        let dbo = response.db('letsupgrade');
        dbo.collection('user').insertOne(userRecord,function(err,result){
            if(!err){
                res.send({statusCode:200,msg:'Data has been saved successfully'})
                console.log(result);
                response.close();
            }
        });
       }
    });
    // request.headers
   // console.log(request.headers.authentication);
    //console.log(request.header());
   
    // if(jwt.verify(request.body.token,secretKey)){
    //    console.log('this is decoded')
    // };
    // console.log(jwt.verify(request.body.token,secretKey));

    // if(responseObj.statusCode)
    //     res.send(responseObj);
    // else{
    //     throw 'this is the error';
    // }
    
  }
  catch(e){
    console.log('this is the error',e);
    throw e;
  }

  function handleError(error){
    let errorObj={};
    if(error=='this is the error'){
        errorObj={msg:'please try again',statuCode:504};
        
    }
   res.send(errorObj);
}  
})

app.put('/update',function(req,res){
    try{
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
                let dbo = response.db('letsupgrade');
                dbo.collection('user').updateOne({id:parseInt(req.body.id)},{$set:{name:req.body.name,age:req.body.age}},{upsert:true},function(err,result){
                   if(!err){
                    console.log(result)
                    response.close();
                    res.send({status:200,msg:'data has been updated successfully'})
                   }else{
                    throw err;
                   }
                   
                })
            }
            else{
                throw err;
            }
            
         });
    }
    catch(e){
        throw e;
    }
    
})

app.delete('/delete',function(req,res){
    try{
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
                let dbo = response.db('letsupgrade');
                dbo.collection('user').deleteOne({id:parseInt(req.body.id)},function(err,result){
                 if(!err){
                     console.log(result);
                     res.send({statusCode:200,msg:'Record has been deleted Successfully',data:result});
                 }
                 else{
                    throw err;
                 }
                })
            }
            else{
                throw err;
            }
           
        })
    }
    catch(e){
        throw e;
    } 
})

app.delete('/deleteAll',function(req,res){
    console.log(req.body);
    try{
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
               let dbo = response.db('letsupgrade');
               for(let i=0;i<req.body?.id?.length;i++){
                dbo.collection('user').deleteMany({id:parseInt(req?.body?.id?.[i])},function(err,result){
                    if(!err){
                        console.log(result);
                        
                    }
                    else{
                       throw err;
                    }
                   })
               }
               res.send({statusCode:200,msg:'All the record has been deleted Successfully'});  
            }
            else{
                throw err;
            }
           
        })
    }
    catch(e){
        throw e;
    }
   
})

app.get('/aggregate',function(req,res){
    try{
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
                let dbo = response.db('letsupgrade');
                dbo.collection('user').aggregate([{
                    $lookup:{
                            from:'employee',
                            localField:'empId',
                            foreignField:'id',
                            as:'userDetails'
                        }
                    }]).toArray(function(err,result){
                        if(!err){
                            res.send(result);
                        }
                    })
            }
          });
    }
    catch(e){
        throw e;
    }
})

app.post('/saveStudentRecord',function(req,res){
    
    try{
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('access-control-allow-headers','*');
      console.log(req.params);
      let studentRecord = {
          rollNumber: parseInt(req.body.rollNumber) ,
          name:req.body.name ,
          age:parseInt(req.body.age),
         // class:req.body.className
      }
     
      mongoClient.connect(connectionString,function(err,response){
         if(!err){
          let dbo = response.db('letsupgrade');
          dbo.collection('student').insertOne(studentRecord,function(err,result){
              if(!err){
                  res.send({statusCode:200,msg:'Student data has been saved successfully '})
                  console.log(result);
                  response.close();
              }
              else{
                throw err;
              }
          });
         }
      });
     
      
    }
    catch(e){
      console.log('this is the error',e);
      throw e;
    } 
  })
app.post('/dropCollection',(req,res)=>{
    try{
        mongoClient.connect(connectionString,function(err,response){
            if(!err){
               let dbo = response.db('letsupgrade');
               dbo.collection(req.body.collectionName).drop(function(err,result){
                  if(!err){
                      console.log(result);
                      res.send(result);
                  }
                  else{
                    throw err;
                  }
               })
            }
            else{
               throw e
            }
            
       });
    }
    catch(e){
        throw e;
    }
   
})

app.post('/validate',function(req,res){
    // calling the database and validate the credentials 
    let credential = {
        username: req.body.username,
        password:req.body.password
    }
   let token = jwt.sign(credential,secretKey,{expiresIn:5*60});
   let responseObj= {
        userName:  req.body.username,
        token :token
   }
   res.send(responseObj);
})



app.get('/*',function(req,res){
    res.send('<html><body><div style="text-align:center">404 Page not Found</div></body></html>')
    //res.send('this is the default route');
})




app.listen(9707);


