import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'termek.json'); //Ez egy változó, amiben a fájl elérési útvonala van
const termekek = [
    { id: 1, nev: 'Termék 1', leiras: 'Ez az első termék', ar: 1000 },
    { id: 2, nev: 'Termék 2', leiras: 'Ez a második termék', ar: 2000 },
    { id: 3, nev: 'Termék 3', leiras: 'Ez a harmadik termék', ar: 3000 }
];

fs.writeFileSync('termekek.json', JSON.stringify(termekek, null, 2), 'utf-8');

console.log('Termékek:');
termekek.forEach(termek => {
    console.log(`ID: ${termek.id}, Név: ${termek.nev}, Leírás: ${termek.leiras}, Ár: ${termek.ar}`);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Melyik terméket töröljem? (ID): ', (id) => {
    const updatedTermekek = termekek.filter(termek => termek.id !== parseInt(id));
    fs.writeFileSync('termekek.json', JSON.stringify(updatedTermekek, null, 2), 'utf-8');
    console.log('A termék törölve lett.');
    rl.close();
});