// Following from the exercise 3, 4 (JS-P4),
//convert all the readFile and writeFile function to Promise, 
//then use it to complete the process like in exercise 5 (JS-P4). 
//Noted in this	exercise, must use .then() and .catch()
const fs = require('fs')

function readFile(){
    return new Promise((resolve, reject)=>{  
        fs.readFile("out.txt", "utf-8",(err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function writeFile(){
    return new Promise((resolve, reject)=>{
        fs.writeFile("1.txt", "Hello Dear!", (err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Success")
            }
        })
    })
}

readFile().then(res=>{
    console.log(res)
    return writeFile(res)
}).then(res1=>{
    console.log(res1)
}).catch(err=>{
    console.log(err)
})


// each running
// readFile().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

// writeFile().then(res1=>{
//     console.log(res1)
// }).catch(err=>{
//     console.log(err)
// })