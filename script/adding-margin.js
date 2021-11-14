const marginHijos = (parent,margin) =>{

  for(let inp of inputs){ // for en todos los inputs

    let currClass = inp.classList[(inp.classList.length - 1)]; // obtiene la clase del input actual
    let currInput = {actualID: currClass.split('#')[0], parentID: currClass.split('#')[1]}; // adjunta la id del input

    if(parent == currInput.parentID){

      margin += 1;
      inp.parentElement.style.marginLeft = margin.toString() + 'em';
      marginHijos(currInput.actualID,margin);
      margin -= 1;

    } // habilita los inputs hijos actuales si es igual al parametro
    else{continue;} // si no es igual, continua
  }

}

for(let inpPadre of inputsPadres){

  let currClass = inpPadre.classList[(inpPadre.classList.length - 1)];

  let currInput = {actualID: currClass.split('#')[0]};

  marginHijos(currInput.actualID,0);

}
