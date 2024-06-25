import fs from "fs-extra"

const src='file.txt'

const dest ='destination/file.txt'

fs.move(src,dest,(err)=>{
    if(err){
        return console.log("Something went wrong")
    }
    console.log("Sucessfully Moved File")
})