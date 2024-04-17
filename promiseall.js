const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },2000)
})
const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved")
    },500)
})
const promise3 = new Promise((_,reject)=>{
    setTimeout(()=>{
        reject("Promise 3 rejected")
    },1000)
})

const promiseArray = [promise1,promise2,promise3]

Promise.all(promiseArray)
.then((results)=>{
    console.log("All promises resolved",results)
})
.catch((error)=>{
    console.log("Atleast one promise rejected",error)
})