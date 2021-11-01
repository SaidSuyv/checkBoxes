const inputs = document.querySelectorAll('input[type="checkbox"]');
const inputsPadres = document.querySelectorAll('input[class$="#0"]');

document.querySelector('.main-container').addEventListener('click',(e)=>{

  if(e.target && e.target.tagName == 'INPUT'){ // verifica si lo clickeado es un input

    let currClass = e.target.classList[(e.target.classList.length - 1)]; //obtiene la clase del input clickeado
    let currInput = {actualID: currClass.split('#')[0]}; // adjunta el id del input clickeado

    if(e.target.checked){encenderHijos(currInput.actualID);} // si el input esta en checked ejecuta la funcion
    else{apagarHijos(currInput.actualID);} // si no esta en checked, ejecuta la funcion

  }

});

//-- FUNCIONES --

const encenderHijos = (hijosID)=>{

  for(let inp of inputs){ // for en todos los inputs

    let currClass = inp.classList[(inp.classList.length - 1)]; // obtiene la clase del input actual
    let currInput = {parentID: currClass.split('#')[1]}; // adjunta la id del input

    if(hijosID == currInput.parentID){inp.disabled = false;} // habilita los inputs hijos actuales si es igual al parametro
    else{continue;} // si no es igual, continua

  }

};

const apagarHijos = (hijosID)=>{

  for(let inp of inputs){

    let currClass = inp.classList[(inp.classList.length - 1)];

    let currInput = {

      actualID: currClass.split('#')[0],
      parentID: currClass.split('#')[1]

    };

    if(hijosID == currInput.parentID){

      inp.checked = false;
      inp.disabled = true;
      apagarHijos(currInput.actualID); // vuelve a ejecutar la funcion para que los demas hijos sean dehabilitados

    }
    else{continue;}

  }

};

for(let inpPadre of inputsPadres){

  let currClass = inpPadre.classList[(inpPadre.classList.length - 1)];

  let currInput = {actualID: currClass.split('#')[0]};

  apagarHijos(currInput.actualID);
}
