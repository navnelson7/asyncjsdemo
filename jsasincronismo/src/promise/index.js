const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('mamalona');
        }else{
            reject('que cagada riky');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(true);
            },3000)
        }else{
            const error = new Error('algo no sucedio');
            reject(error);
        }
    })
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err =>  console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of resultas', response);
    })
    .catch(err => {
        console.error(err);
    });