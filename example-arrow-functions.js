// var names = ['Andxrew',"bhavarshg","Arsh"];





// names.forEach((name)=>{
//     console.log('arrowFun',name);
// })

// names.forEach((name)=> console.log(name));


// var returMe = (name) => name+'!';

// console.log(returMe('Bhavarsh'));


// var person = {
//     name: 'Bhavarsh',
//     greet: function () {
//           names.forEach( (name) =>{
//               console.log(this.name + ' says hi to ' + name);
//           });
//     }
// }



// person.greet();



function add (a,b){
    return a+b;
}





var addStatement = (a,b)=>{
    return a+b;
}



var addExpression = (a,b)=> a+b;



console.log(add(1,3));
console.log(addStatement(1,4));
console.log(addExpression(2,-4));
