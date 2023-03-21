import fizzbuzz from "./fizzbuzz.js";

function fizzbuzz_secuencia(num) {
    let cadenaS = "";
    let i = 0;
    for (i = 1; i <= num; i++){
        if (cadenaS == ""){
            cadenaS =  fizzbuzz(i).toString();
        }
    }
    return cadenaS;
}
export default fizzbuzz_secuencia;