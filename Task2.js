const fs=require("fs")
const addPerson=(id,fname,lname,age,city)=>
{
const allData=loadData()
const dblId=allData.filter((e)=>{
return e.id===id
})
if(dblId.length==0){
allData.push({
id,fname,lname,age,city

})
saveAlldata(allData)
}else{
    console.log("Error")
}
}

const loadData=()=>
{
    try{
        const readData=fs.readFileSync("dataTask2.json").toString()
        return JSON.parse(readData)
    }catch{
        return[]
    }

}
const saveAlldata=(allData)=>{
const  saveAlldatajson=JSON.stringify(allData)
fs.writeFileSync("dataTask2.json",saveAlldatajson)
}

const deletePerson=(id)=>{
    const allData=loadData()
    const itemID=allData.filter((e)=>{
        return e.id!==id
    })
    saveAlldata(itemID)
}

const readall=()=>{
    const allData=loadData()
    const readitems=allData.forEach((e)=>{
        console.log(e.fname,e.lname,e.city)
    })
}


const readPerson=(id)=>{
    const allData=loadData()
    const readitem=allData.find((e)=>{
      return e.id==id
    })
    console.log(readitem)
}


module.exports={
    addPerson,deletePerson,readPerson,readall
}