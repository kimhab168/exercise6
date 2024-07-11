// Callback Hell with Mock Database
// Implement a series of nested asynchronous functions to simulate querying a mock database, 
//processing the data and then outputting the result. 
//Each step should rely on the completion of the previous one.

//a.Create a mock database: 
//[{id: 1, name: “sok”}, {id: 2, name; “sao”}, {id: 3, name: “pisey”}]
const mockdatabase = [{id: 1, name:"sok"},{id: 2, name:"sao"},{id: 3, name:"pisey"}];

//b.Write a function that could get user info by its id.
//Note the user object should return after 2 seconds. If the user is not found, it should return an error.
function getUserByID(id, callback){
    setTimeout(()=>{
        const user = mockdatabase.find((user)=>user.id === id)
        if(user){
            callback(null, user)
        }else{
            callback("User not found!")
        }
    },2000)
}


//c.Write a function that could process the user data by capitalizing the user name.
// Note, the process data should be execute around 1.5 seconds


//just make if use ArrayObj and convert to capitalizing the user name each objects
function processDataArrObj(userArr, callback){
    setTimeout(()=>{
        
        const newName = userArr.map((user)=>{
            const newData = {...user, name: user.name.toUpperCase()}
            return newData
        })
        callback(newName)// newName
    },1500)
}

//c.
function processData(userObj, callback){
    setTimeout(()=>{
            const newData = {...userObj, name: userObj.name.toUpperCase()}
            callback(newData)
        },1500)
}


//d.Execute and Process: Use example b and c in order. 
//Finally print the processed user data to the console
//Note: This exercise should only use a callback function.
id = 2
getUserByID(id,(err,user)=>{
    if(user){
        processData(user,(user)=>{ //user = newName
            if(user){
                console.log("User found:\n",user)
            }
        })
    }else{
        console.log(err)
    }
})