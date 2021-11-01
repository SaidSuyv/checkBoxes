const prueba = document.querySelector('.father');

prueba.addEventListener('click', function(e) {
  if (e.target && e.target.tagName == 'INPUT') {
    let index = e.target.id.length - 1;
    switch (e.target.id.length) {
      case 3:
        if (e.target.id[index] == 0) {
          if (e.target.checked) {
            const hijos = document.getElementsByName('son');
            for (let x of hijos) {
              if (x.id[0] == e.target.id[0]) {
                x.disabled = false;
              }
            }
          } else {
            const hijos = [document.getElementsByName('son'), document.getElementsByName('grandSon'), document.getElementsByName('grandGrandSon')];
            for (let i = 0; i < hijos.length; i++) {
              for (let x of hijos[i]) {
                if (x.id[0] == e.target.id[0]) {
                  x.disabled = true;
                  x.checked = false;
                }
              }
            }
          }
        } else {
          if (e.target.checked) {
            const bisNietos = document.getElementsByName('grandSon');
            for (let x of bisNietos) {
              if (x.id[index] == e.target.id[index] && x.id[0] == e.target.id[0]) {
                x.disabled = false;
              }
            }
          } else {
            const hijos = [document.getElementsByName('grandSon'), document.getElementsByName('grandGrandSon')];
            for (let i = 0; i < hijos.length; i++) {
              for (let x of hijos[i]) {
                if (x.id[index] == e.target.id[index] && x.id[0] == e.target.id[0]) {
                  x.disabled = true;
                  x.checked = false;
                }
              }
            }
          }
        }
        break;
      case 4:
        if (e.target.checked) {
          const bisNietos = document.getElementsByName('grandGrandSon');
          for (let x of bisNietos) {
            if (x.id[index] == e.target.id[index] && x.id[index - 1] == e.target.id[index - 1] && x.id[0] == e.target.id[0]) {
              x.disabled = false;
            }
          }
        } else {
          const bisNietos = document.getElementsByName('grandGrandSon');
          for (let x of bisNietos) {
            if (x.id[index] == e.target.id[index] && x.id[index - 1] == e.target.id[index - 1] && x.id[0] == e.target.id[0]) {
              x.disabled = true;
              x.checked = false;
            }
          }
        }
        break;
    }
  }
});
