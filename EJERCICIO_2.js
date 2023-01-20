// Ejercicio 2

// A partir de un array de calificaciones, comparar si la calificación es mayor o igual a 70 imprimir junto a la calificación la palaba "aprueba" caso contrario "reprueba".

let notes = [60, 98, 50, 100];
const note = 70;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= note) {
        console.log(notes[i], "APROBADO MI REY FELICEZ VACACIONES");
    }
    else {
        console.log(notes[i], "REPROBADO MI REY")
    }
}