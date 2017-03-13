// function getTempCallback (location, callback){
        

//         callback(undefined,76);

//         callback('City Not found');

// }




// // getTempCallback('Jalandhar',function (err,res) {
// //    if(err){
// //        console.log('Error',err);

// //    } else {
// //        console.log('Success',res);
// //    }
// // })





// function getTempPromise (location) {
//              return new Promise(function(resolve,reject){

//                  setTimeout(function (){
//                             resolve(79);

//                    reject('City Not Found');  
//                  },10000)
            
//              });
// }




// getTempPromise('Jalandhar').then(function(temp){
//       console.log('Promise Temp', temp);
// }, function (err){
//         console.log('Promise Error', err);
// });



function addPromise (a,b){
    return new Promise(function (resolve,reject){

        if( typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject('Please type a number');
        }
    })
}


addPromise(6,10).then(function (res){
    console.log("Result",res);
}, function (err){
    console.log('Error', err);
})