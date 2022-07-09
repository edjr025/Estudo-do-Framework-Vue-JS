//Anonymous function
// (function(a, b, c){
//     return a + b + c
// })

//Anonymous function
// IIFE - Immediately Invoked Function Expression
(function(a,b,c){
    let x = 3
    console.log(`result: ${a + b + c}`)
    console.log(x)
})(1,2,3);


(function(a,b,c){
    let x = 300
    console.log(`result: ${a + b + c}`)
    console.log(x)
})(1,2,3);

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))()