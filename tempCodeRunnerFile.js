import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'timetable.json'); //Ez egy változó, amiben a fájl elérési útvonala van


let data = [
    {Monday:['Math', 'English', 'English','Physics'],
    Tuesday:['History', 'Physics', 'PE', 'IT'],
    Wednesday:['Math', 'English', 'Biology', 'Math'],
    Thursday:['Math', 'English', 'Biology', 'History', 'Physics'], 
    Friday:['Math', 'English']}
]

function FileWrite(filePath, data){
    try {
        fs.writeFileSync(filePath, JSON.stringify(data)) //Ez a függvény létrehozza a fájlt, ha nem létezik, és beleírja a data tömb tartalmát
    }
    catch(err){
        console.log(err)
    }
}
function FileRead(filePath){
    let content = '';
    let rdata;
    try {
       content = fs.readFileSync(filePath, 'utf-8'); //Ez a függvény beolvassa a fájl tartalmát
       rdata = JSON.parse(content); 
    }catch(err){
        console.log(err);
    }
    console.log(content);
    console.log(rdata);
    return rdata;
}
function AddLesson(day, lesson){
    let rdata = FileRead(filePath);
    rdata[0][day].push(lesson);
    FileWrite(filePath, rdata);
}
