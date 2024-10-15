function inserir(num) {
    var resultado = document.getElementById("resultado").innerHTML;
    if (num === "." || num === "+" || num === "-" || num === "*" || num === "/") {
        if (resultado.slice(-2) === '**' && (num === '*' || num === '.' || num === '+' || num === '-' || num === '/')) {
            return;
        }
        if (ultimoCaractereEspecial(resultado)) {
            return; 
        }
    }
    document.getElementById("resultado").innerHTML = resultado + num;
}

function ultimoCaractereEspecial(string) {
    const ultimoCaractere = string.charAt(string.length - 1);
    const penultimoCaractere = string.charAt(string.length - 2);
    
    if (penultimoCaractere === '*' && (ultimoCaractere === '.' || ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '/')) {
        return true;
    }
    
    return ultimoCaractere === '.' || ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '/';
}


function apagarResultado()
{
    document.getElementById("resultado").innerHTML = "";
}

function apagarUm()
{
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function apagarTudo()
{
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("expressao-anterior").innerHTML = "";
}

function calcular()
{
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado)
    {
        if (eval(resultado) === Infinity) {
            alert("Não é possível fazer essa operação")
            document.getElementById("resultado").innerHTML = "";
        }
        else {
            if (eval(resultado) % 1 == 0) {
                document.getElementById("resultado").innerHTML = eval(resultado)
            }
            else {
                document.getElementById("resultado").innerHTML = eval(resultado).toFixed(3);
            }

            document.getElementById("expressao-anterior").innerHTML = resultado;
        }

    }
    else
    {
        document.getElementById("resultado").innerHTML = "";
    } 
}



 function mostrarTooltip(id) {
     var tooltip = document.getElementById(id);
     tooltip.style.display = "block";
}

function tirarTooltip(id) {
    var tooltip = document.getElementById(id);
    tooltip.style.display = "none";
}



