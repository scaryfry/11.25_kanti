import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'data.json'); //Ez egy változó, amiben a fájl elérési útvonala van


let data = [

    {name: 'Josh'}, {name: 'Booboo'}, {name: 'Bubu'}
]
//Fájlba írás
try {
    fs.writeFileSync(filePath, JSON.stringify(data)) //Ez a függvény létrehozza a fájlt, ha nem létezik, és beleírja a data tömb tartalmát
}
catch(err){
    console.log(err)
}
//fájlból olvasás
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
rdata.push({name: 'Babszemjanko'});
console.log(rdata);