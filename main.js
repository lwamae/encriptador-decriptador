let texto;

function encriptarFuncion(){
    texto = document.getElementById("texto-ingresado").value;
    // regex expression
    if(/([A-ZáàâãéèêÉíïÍóôõöÓúÚçñ])/.test(texto)){
        alert("El texto no esta en el siguiente formato: \nSolo letras minúsculas y sin acentos");
    } else if(texto.length == 0) {        
        alertEmptyText();
    }else{
        const reemplazo = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        Object.keys(reemplazo).forEach((key) => {
            texto = texto.replaceAll(key, reemplazo[key]);
        });
        //console.log(texto);
        document.querySelector(".sin-resultados").style.display = "none";
        document.querySelector(".box-texto-encriptado").style.display = "flex";
        document.querySelector(".texto-encriptado").innerHTML = texto;
    }
};

function desencriptarFuncion(){
    texto = document.getElementById("texto-ingresado").value;
    if(/([A-ZáàâãéèêÉíïÍóôõöÓúÚçñ])/.test(texto)){
        alert("El texto no esta en el siguiente formato: \nSolo letras minúsculas y sin acentos");
    } else if(texto.length == 0) {
        alertEmptyText();
    }else{
        const reemplazo = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        Object.keys(reemplazo).forEach((key) => {
            texto = texto.replaceAll(key, reemplazo[key]);
        });
        document.querySelector(".sin-resultados").style.display = "none";
        document.querySelector(".box-texto-encriptado").style.display = "flex";
        document.querySelector(".texto-encriptado").innerHTML = texto;
    }
};

function copiarFuncion(){
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado: "+texto);
    });
};

function alertEmptyText(){
    document.querySelector(".sin-resultados").style.display = "flex";
    document.querySelector(".box-texto-encriptado").style.display = "none";
    alert("Ingrese el texto que desees encriptar o desencriptar");
}