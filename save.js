// my-readfile.js
const fsPromises = require("fs/promises"); // pour utiliser les Promises API du module fs
const myReadFile = async () => {
  try {
    // readFile retourne une promise et pas le texte du fichier!!!
    const p1 = fsPromises.readFile("hello.txt", "utf-8"); // exécution de readFile
    const p2 = fsPromises.appendFile("hello.txt", "some new data\n"); // exécution de appendFile
    console.log(p1); // Affiche l'objet p1 qui est une promise
    console.log(p2); // Affiche l'objet p2 qui est une promise
    let txt1 = await p1;
    await p2; // pas de valeur de retour pour appendFile
    console.log(p1); // Affiche l'objet p1 qui est une promise
    console.log(p2); // Affiche l'objet p2 qui est une promise
  } catch (e) {
    // On gère les erreurs comme dans un code synchrone
    console.log(e.message);
  }
};
myReadFile();
