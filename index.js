const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
  ];

const listElements = [];

//Recorrer cada array dentro del array principal
keyboardLetters.map((letters) => {

    //Variable que contiene la lista de letras en la pantalla (Son 3 listas)
    const list = document.createElement("ul");

    //Recorrer cada elemento de un array dentro del array principal
    letters.map(letter => {

        //Variable que contiene cada item de la lista de letas en la pantalla
        const listItem = document.createElement("li");

        //Crear un boton para cada item de la lista
        listItem.innerHTML = `<button onClick="pressLetter()" id="${letter}">${letter}</button>`

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
}