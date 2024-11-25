import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'osztály.json'); //Ez egy változó, amiben a fájl elérési útvonala van
let data = [
    {firstname: 'Josh', surname: 'Andras'},
    {firstname: 'Booboo', surname: 'Bubu'}, 
    {firstname: 'Bubu', surname: 'Bubu'} 
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
data.push({firstname: 'Arpad', surname: 'Vezer'}); //Ez a függvény hozzáad egy új elemet a rdata tömbhöz
data.push({firstname: 'Miskolc', surname: 'Vasútállomás'}); //Ez a függvény hozzáad egy új elemet a rdata tömbhöz
FileWrite(filePath, data);
let rdata = FileRead(filePath);