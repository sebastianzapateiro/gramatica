//Se definen las producciones
let A = [['i', 'B'], ['you', 'D'], ['he', 'B'], ['she', 'B'], ['it', 'B'], ['we', 'D'], ['they', 'D']];
let B = ['was'];
let D = ['were'];
// Se debe tomar en cuenta que You puede ser interpretado con was o were, por lo que opta por lo siguiente:
/* 
   Crear una producción de you con was, y que seguido usea a, an o the.
   Crear una producción de you con were que no acepte a, an o the.
*/




//Se realiza un split sobre el input



export const gramatica = (input) => {
    let inputSplit = input.split(' ');
    let respuesta = '';

    for (let i = 0; i < A.length; i++) {
        if (inputSplit[0].toLowerCase() === A[i][0]) {
            switch (A[i][1]) {
                case 'B':
                    if (inputSplit[1].toLowerCase() === B[0]) {
                        respuesta = `La sentencia "${input}" es valida `;
                    }
                    else {
                        respuesta = `La sentencia "${input}" no es valida `;
                    }
                    break;

                case 'D':
                    if (inputSplit[1].toLowerCase() === D[0]) {
                        respuesta = `La sentencia "${input}" es valida `;

                    }
                    else {
                        respuesta = `La sentencia "${input}" no es valida `;
                    }
                    break;
                default:
                    console.log("No entra");
            }
        }
    }

    return respuesta;

}