const doSomethingAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ?   setTimeout(()=> resolve('Do something async'), 3000)
        :   reject(new Error('Test error'))
    })
}

const doSomeThing = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomeThing();
console.log('After');

const anotherfunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}

console.log('Before 1');
anotherfunction();
console.log('After 2');