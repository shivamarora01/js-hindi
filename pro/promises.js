const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task done")
        resolve()
    } , 1000)
})

promiseOne.then(function(){
    console.log("promise completed")
})
promiseOne.catch(function(error){
    console.log("Error found")
})


// Direct access without Creating variable
// resolve inform krega then ko ki aap kaam krlo ab 
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task done")
        resolve()
    } , 1000)
})
.then(function(){
    console.log("promise completed")
})
.catch(function(error){
    console.log("Error found")
})


// setTimeout , then , catch sab callback receive krte hai
new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"shivam" , email:"shivamarora.07.sa@gmail.com"})
    } , 1000)
})
.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let bug = true;
        if(!bug){
            resolve({username:"shivam" , work:"error free"})
        }
        else{
            reject("Please Do Debugging !")
        }
    })
})

promiseFour.then((user) => {
    // console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
})

.catch((err) => {
    console.log(err);
})



const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let bug = false;
        if(!bug){
            resolve({username:"shivam" , work:"error free"})
        }
        else{
            reject("Please Do Debugging !")
        }
    } , 1000)
})

async function consumepromiseFive(){
    try{
        const response =  await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumepromiseFive()



// async await se fetching uthana 

async function getallUsers(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("error")
    }
}
getallUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("error")
})