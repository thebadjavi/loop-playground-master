/**
 * Mi dia a dia
 * 
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un sim en Villa Lobo.  Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 * 
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora.
 * 
 * Ejemplo:
 * 
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna" 
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */

let hora_actual = 8;
let hora_dormir = 24;



while (hora_actual<hora_dormir) {

    if(hora_actual==8){
        console.log("son las "+hora_actual +" el sim se despierta")
        hora_actual++;
    }
    if(hora_actual==9){
        console.log("son las "+hora_actual +" el sim desayuna")
        hora_actual++;
    }
    if(hora_actual<=16){
        console.log("son las "+hora_actual +" el sim estudia Front End")
        hora_actual++;
        
    }
    if(hora_actual==17){
        console.log("son las "+hora_actual +" el sim se echa siesta")
        hora_actual++;
    }
    if(hora_actual>=18){
        console.log("son las "+hora_actual +" el sim tiene tiempo libre")
        hora_actual++;
    }
    if(hora_actual==22){
        console.log("son las "+hora_actual +" el sim cena")
        hora_actual++;
    }
    if(hora_actual==23){
        console.log("son las "+hora_actual +" el sim se va a dormir")
        hora_actual++;
        break;
    }
    /*
    switch (hora_actual) {
        case 8:
            console.log("el sim se despierta")
          break;
      
          case 9:
            console.log("el sim desayuna")
            break;
         case 10:
            console.log("Nos encontramos en el primer trimestre")
            break;
        case 11:
            console.log("Nos encontramos en el segundo trimestre")
            break;
        case 12:
            console.log("Nos encontramos en el segundo trimestre")
           break;
        case 13:
            console.log("Nos encontramos en el segundo trimestre")
            break;
        case 14:
            console.log("Nos encontramos en el tercer trimestre")
           break;
                            
        case 15:
            console.log("Nos encontramos en el tercer trimestre")
            break;
        case 16:
            console.log("Nos encontramos en el tercer trimestre")
            break;
        case 17:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
        case 18:
            console.log("Nos encontramos en el cuarto trimestre")
           break;
        case 19:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
        case 20:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
        case 21:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
        case 22:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
        case 23:
            console.log("Nos encontramos en el cuarto trimestre")
            break;
      
        default:
          alert('The result is strange. Really.');
      } */
}


