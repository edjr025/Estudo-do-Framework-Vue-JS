//function declaration
function sayHello(){
    console.log('Hello')
}
sayHello()

/*como a função sayHello não tem returno o codigo abaixo sera undefined*/
let x = sayHello()
console.log(x)

//function declaration with params
function sayHello(name){
    console.log('Hello', name)
}

sayHello('Mike')


//function with return
function returnHi(){
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())


function returnHiTo(name){
    return `Hi ${name}`
}

console.log(returnHiTo('Edvaldo'))