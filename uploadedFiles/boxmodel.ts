
Box Model Concept:

box-sizing:border-box


height:80px
width:100px



// let name ={
//   firstName:'rohit',
//   lastName :'verma'
// }
// let name2={
//   firstName:'baba',
//   lastName:'sharma'
// }

// let fullName = function(){
//   console.log(this.firstName,this.lastName)
// }

// fullName.call(name)
//let bindedName = fullName.bind(name2)
//bindedName();

margin-top:10px
margin-left:20px
padding-left:10px
border-left: 1px;
border-right:1px;
border-bottom:1px;
border-top:1px


if it's not available::after

80px+10px+1px+1px==92px
width: 132px



psuedo class
bootstrap
Animation
sass


div {
    transform: translate(50px, 100px);
  }
  
div {
    transform: scale(2, 3);
}
div {
    transform: rotate(-20deg);
  }

matrix(n,n,n,n,n,n)	Defines a 2D transformation, using a matrix of six values
matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
translate(x,y)	Defines a 2D translation, moving the element along the X- and the Y-axis
translateX(n)	Defines a 2D translation, moving the element along the X-axis
translateY(n)	Defines a 2D translation, moving the element along the Y-axis
scale(x,y)	Defines a 2D scale transformation, changing the elements width and height
scaleX(n)	Defines a 2D scale transformation, changing the element's width
scaleY(n)	Defines a 2D scale transformation, changing the element's height
rotate(angle)	Defines a 2D rotation, the angle is specified in the parameter
skew(x-angle,y-angle)	Defines a 2D skew transformation along the X- and the Y-axis
skewX(angle)	Defines a 2D skew transformation along the X-axis
skewY(angle)	Defines a 2D skew transformation along the Y-axis

onchange
onclick
onmouseover
onmouseout
onkeydown	
onload	
//array of object iteration
//toLocaleTimeString();

// async.series
// .parallel
// .waterfall
// function getArticle(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching data....");
//       resolve({ id: id, name: "derik" });
//     }, 5000);
//   });
// }

// getArticle("1").then(res=> console.log(res))

// Promise.all()

// Promise.allSettled()

// Promise.any()

// Promise.race()



// async function showImages() {
//   try {
//     const article = await getArticle(10);
//     const place = await getPlaces(article.name);
//     const city = await getCity(place)
//     console.log(city);
//   } catch (err) {
//     console.log("Error: ", err.message);
//   }
// }

// showImages();
//promise chaining

// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);

//  fetch(url, {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: 'follow', // manual, *follow, error
//   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// });

// var crypto = require('crypto');

// var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('abc', 'utf8', 'hex')
// mystr += mykey.final('hex');

// console.log(mystr);

// var crypto = require('crypto');

// var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr);


