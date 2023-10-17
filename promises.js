const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task done")
    } , 1000)
})

promiseOne.then(function(){
    console.log("promise completed")
})
promiseOne.catch(function(error){
    console.log("Error found")
})

