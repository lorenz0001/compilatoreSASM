function leggiFile(nomefile){
    const fs = require('fs');
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Errore nella lettura del file:', err);
        esci();
      }
      return data;
    });
}

function scriviFile(nomefile, contenuto){
    const fs = require('fs');
    fs.writeFile('output.txt', contenuto, 'utf8', (err) => {
        if (err) {
          console.error('Errore nella scrittura del file:', err);
          esci();
        }
    });
}

function esci(){
    Process.exit(1);
}