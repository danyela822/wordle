const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

//Array general (Contiene las otras listas de letras)
const listElements = [];

//Array para almacenar todas las letras que se seleccionen
let myAnswer = []

//Palabra a adivinar
const secretWord = ["d","a","n","y"];

let positions = [];

//Recorrer cada array dentro del array principal
keyboardLetters.map((letters) => {

    //Variable que contiene la lista de letras en la pantalla (Son 3 listas)
    const list = document.createElement("ul");

    //Recorrer cada elemento de un array dentro del array principal
    letters.map(letter => {

        //Variable que contiene cada item de la lista de letas en la pantalla
        const listItem = document.createElement("li");

        switch(letter){
            case "enter":
                //Crear un boton para cada item de la lista
                listItem.innerHTML = `<button onClick="checkWord()" id="${letter}">${letter}</button>`
                break;
            case "delete":
                //Crear un boton para cada item de la lista
                listItem.innerHTML = `<button onClick="deleteLetter()" id="${letter}">${letter}</button>`
                break;
            default:
                //Crear un boton para cada item de la lista
                listItem.innerHTML = `<button onClick="pressLetter()" id="${letter}">${letter}</button>`
                break;
        }
        //Agregar el item a la lista
        list.appendChild(listItem);
    });
    //Agregar las listas de letras a un array general
    listElements.push(list);
});

console.log(listElements);
//Insertar la lista general a la seccion del teclado en la pantalla
keyboard.append(...listElements);

const pressLetter = () =>{
    const button = event.target;
    console.log(button.id);
    if(myAnswer.length < 4){
        myAnswer.push(button.id);
    }
    console.log(myAnswer);
}

const checkWord = () =>{
    console.log("Revisando palabra...");
    //.join une los elementos del array de acuerdo a una condicion
    if(myAnswer.join("") === secretWord.join("")){
        console.log("Ganaste");
    }else{
        for(let i = 0; i < secretWord.length; i++){
            switch (true) {
                case myAnswer[i] === secretWord[i]:
                    positions.push("green");
                    break;
                case secretWord.includes(myAnswer[i]):
                    positions.push("marron");
                    break;
                default: positions.push("grey");
                    break;
            }
        }
    }
    console.log(positions);
}

const deleteLetter = () =>{
    console.log("Borrando letra...");
    //Quita el ultimo elemento del array de la respuesta
    myAnswer.pop();
}