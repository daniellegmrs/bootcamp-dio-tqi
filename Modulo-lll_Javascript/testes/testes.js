//Questão - Verificar Palíndromo

//Solução 1
function verificarPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

// console.log(verificarPalindromo("abba"))

//Solução 2
function verificarPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){ //verificando metade
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }

        return true;
}

// console.log(verificarPalindromo2("abba"))


//Questão - Substituir Números Pares

//Solução 1
function substituiPares(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!")
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo ${(array[i])} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let arrays = [1, 3, 4, 6, 80, 33, 23, 90];
// substituiPares(arrays);
console.log(substituiPares([]));
console.log(substituiPares(arrays));
console.log(substituiPares(null));
console.log(substituiPares(false));
console.log(substituiPares.arrays);

// colsultar doc MDN W3C