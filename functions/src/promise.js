const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('he'),1000)
})



async function getData(){
    try{
        const data= await promise;
        console.log(data);
    }
 catch(err){
    console.log('error'+err);
 }
}

getData();