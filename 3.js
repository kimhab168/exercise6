// Following from the exercise 3, 4 (JS-P4),
//convert all the readFile and writeFile function to Promise, 
//then use it to complete the process like in exercise 5 (JS-P4).
//Noted in this exercise, must use async & await.
const fs = require('fs')
const { resolve } = require('path')
function ToReadFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile("out.txt","utf-8" ,(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function ToWriteFile() {
    return new Promise((resolve,reject)=>{
        const content = "Are you cousin?"
        fs.writeFile("1.txt",content,(err)=>{
            if(err){
                reject(err)
            }else{
                resolve("Write Success ")
            }
        })
    })
}

async function readWrite(){
    try{
        const data = await ToReadFile()
        console.log(data)
        const data2 = await ToWriteFile()
        console.log(data2)
    
    }catch(err){
        console.log(err)
    }
}

readWrite()