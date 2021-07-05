const padres = document.getElementsByName('father');
const hijos = document.getElementsByName('son');
const nietos = document.getElementsByName('grandSon');
const bisNietos = document.getElementsByName('grandGrandSon');
let checkBoxes = [padres, hijos, nietos, bisNietos];

/*
    CLASE QUE SOLO EJECUTA FUNCIONES COMO PADRE E HIJO
*/
class clasePadre {
    constructor(padre, hijo) {
        this.padre = padre;
        this.hijo = hijo;
    }

    prenderHijo(elementosParaApagar) {

        this.padre.addEventListener('click', () => {
            if (this.padre.checked) {
                this.hijo.disabled = false;
            } else {
                this.apagar(elementosParaApagar);
            }
        });
    }

    apagar(prueba){
        prueba.forEach(element =>{
                element.disabled = true;
                element.checked = false;
        })
    }
}

for (let i = 0; i < checkBoxes[0].length; i++) {
    for (let x of hijos) {
        let idPadre = x.getAttribute('id').charAt(0);
        let padreId = checkBoxes[0][i].getAttribute('id').charAt(0);
        let elementos = [];

        checkBoxes[1].forEach(element =>{

            let a = element.getAttribute('id').charAt(0);

            if(a == padreId){
                elementos.push(element);
            }

        });

        checkBoxes[2].forEach(element =>{

            let a = element.getAttribute('id').charAt(0);

            if(a == padreId){
                elementos.push(element);
            }

        });

        checkBoxes[3].forEach(element =>{

            let a = element.getAttribute('id').charAt(0);

            if(a == padreId){
                elementos.push(element);
            }

        });

        const PadreHijo = new clasePadre(checkBoxes[0][i], x);

        if (idPadre == padreId) {
            PadreHijo.prenderHijo(elementos);
        }
    }
}

for (let i = 0; i < checkBoxes[1].length; i++) {
    for (let x of nietos) {
        let idDelPadreTotal = x.getAttribute('id').charAt(0);
        let idDelPadreHijo = x.getAttribute('id').charAt(2);
        let hijoId = checkBoxes[1][i].getAttribute('id').charAt(2);
        let hijoIdPadre = checkBoxes[1][i].getAttribute('id').charAt(0);
        let padresId = [];
        let elementos = [];

        checkBoxes[0].forEach(element => {
            padresId.push(element.getAttribute('id').charAt(0));
        });

        checkBoxes[2].forEach(element =>{

            let a = element.getAttribute('id').charAt(2);
            let b = element.getAttribute('id').charAt(0);

            if((a == idDelPadreHijo)&&(b == idDelPadreTotal)){
                elementos.push(element);
            }

        });

        checkBoxes[3].forEach(element =>{

            let a = element.getAttribute('id').charAt(2);
            let b = element.getAttribute('id').charAt(0);

            if((a == idDelPadreHijo)&&(b == idDelPadreTotal)){
                elementos.push(element);
            }
        });

        const HijoNieto = new clasePadre(checkBoxes[1][i], x);

        for (let a in padresId) {
            if (padresId[a] === idDelPadreTotal) {
                if (hijoId == idDelPadreHijo) {
                    if (hijoIdPadre == idDelPadreTotal) {
                        HijoNieto.prenderHijo(elementos);
                    }
                }
            }
        }
    }
}

for (let i = 0; i < checkBoxes[2].length; i++) {
    for (let x of bisNietos) {
        let idDelPadreTotal = x.getAttribute('id').charAt(0);
        let idDelHijoTotal = x.getAttribute('id').charAt(2);
        let bisNietoId = x.getAttribute('id').charAt(3);
        let nietoIdPadreTotal = checkBoxes[2][i].getAttribute('id').charAt(0);
        let nietoIdHijoPadre = checkBoxes[2][i].getAttribute('id').charAt(2);
        let nietoIdPadre = checkBoxes[2][i].getAttribute('id').charAt(3);
        let padresId = [];
        let hijosId = [];
        let hijosIdPadre = [];
        let elementos = [];

        checkBoxes[0].forEach(element => {
            padresId.push(element.getAttribute('id').charAt(0));
        });

        checkBoxes[1].forEach(element => {
            hijosId.push(element.getAttribute('id').charAt(2));
        });

        checkBoxes[1].forEach(element => {
            hijosIdPadre.push(element.getAttribute('id').charAt(0));
        });

        checkBoxes[3].forEach(element =>{

            let a = element.getAttribute('id').charAt(3);
            let b = element.getAttribute('id').charAt(2);
            let c = element.getAttribute('id').charAt(0);

            if((a == bisNietoId)&&(b == idDelHijoTotal)&&(c == idDelPadreTotal)){
                elementos.push(element);
            }

        });

        const NietoBisnieto = new clasePadre(checkBoxes[2][i], x);

        for (let a in padresId) {
            if (padresId[a] == idDelPadreTotal) {
                for (let b in hijosId) {
                    if (hijosId[b] == idDelHijoTotal) {
                        for (let c in hijosIdPadre) {
                            if (hijosIdPadre[c] == idDelPadreTotal) {
                                if (bisNietoId == nietoIdPadre) {
                                    if (nietoIdHijoPadre == idDelHijoTotal) {
                                        if (nietoIdPadreTotal == idDelPadreTotal) {
                                            NietoBisnieto.prenderHijo(elementos);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
/* 
const unificacion = (indice, grupo) =>{
    for(let i = 0; i < indice.length; i++){
        for(let x of grupo){
            let infoDeX = {
                idPadre: x.getAttribute('id').charAt(0),
                idHijo: x.getAttribute('id').charAt(2),
                idNieto: x.getAttribute('id').charAt(3)
            };
            let infoDeIndiceGeneral = {
                idPadreGeneral: indice[i].getAttribute('id').charAt(0),
                idHijoGeneral: indice[i].getAttribute('id').charAt(2),
                idNietoGeneral: indice[i].getAttribute('id').charAt(3)
            }
        }
    }
}

unificacion(checkBoxes[0], hijos); */