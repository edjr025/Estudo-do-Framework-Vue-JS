function run(fn){
   return fn()  //usando o return para funcionar esse trecho >>>> let result = run(Math.random)
}

function sayHello(){
    console.log('hello!!')
}

run(sayHello)

run(function(){
    console.log('run!!!')
})

let result = run(Math.random)
console.log(result)