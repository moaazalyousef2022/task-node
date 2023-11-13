const fs=require("fs")
//1-
const object={
    fname:"ahmad",
    lname:"hossam",
    age:22,
    city:"alex"
}
//2-
const objectJson=JSON.stringify(object)

//3-
fs.writeFileSync("dataTask1.json",objectJson)
//4-
const readJson=fs.readFileSync("dataTask1.json").toString()
// console.log(readJson)
//5-
const jsobj=JSON.parse(readJson)
// console.log(jsobj)
//6-
jsobj.fname="adel"
jsobj.lname="ahmed"
jsobj.age="40"
jsobj.city="cairo"

//7-
const  objJs=JSON.stringify(jsobj)
//8-
fs.writeFileSync("dataTask1.json",objJs)
