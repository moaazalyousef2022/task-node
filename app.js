const yargs=require("yargs")
const task2=require("./Task2")
yargs.command({
command:"add",
describe:"add person",
builder:{
id:{
    describe:"add id",
    demandOption:true,
    type:"string"
},
fname:{
    describe:"add first name",
    demandOption:true,
    type:"string"
},
lname:{
    describe:"add lirst name",
    demandOption:true,
    type:"string"
},
age:{
    describe:"add  older you",
    demandOption:true,
    type:"string"
},
city:{
    describe:"add  city",
    demandOption:true,
    type:"string"
}

},
handler:(x)=>{
task2.addPerson(x.id,x.fname,x.lname,x.age,x.city)
}
})
yargs.command({
    command:"delete",
    builder:{
        id:{
            describe:"delete id item",
            demandOption:true,
            type:"string"

        }
    },
    handler:(x)=>{
        task2.deletePerson(x.id)
    }
})
yargs.command({
    command:"read",
    handler:()=>{
        task2.readall()
    }
})


yargs.command({
    command:"find",
    handler:(x)=>{
        task2.readPerson(x.id)
    }
})

yargs.parse()