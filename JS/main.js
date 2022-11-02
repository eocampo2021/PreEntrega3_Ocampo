//Simulador de compuertas logicas v0.1

//En esta version se realiza la simulacion de una compuerta AND y OR.
//Primero el usuario debe seleccionar el tipo de compuerta.
//Luego, debe ingresar dos valores de entrada booleanas y el simulador entregará el resultado.
//Se aplíca restricción básica de inputs. :)

//Modificaciones v0.2
//En esta version se agregan objetos, funciones y arrays.
//un objetos sera la compuertas con metodos por tipo de compuerta
//una funciones comprobará que las inputs sean validos.
//los inputs del usuarios seran alojados en un array que las funciones tomaran como argumentos.



//-----------------------------------------------------

let inputOne;
let inputTwo;

const input1_AND = document.querySelector('#input1_AND');
//const input1_AND_Label = document.querySelector('#form-label');
const input2_AND = document.querySelector('#input2_AND');
const input1_OR = document.querySelector('#input2_OR');
const input2_OR = document.querySelector('#input2_OR');

const btnCalcularAND = document.querySelector('#btn-calcular_AND');
const btnCalcularOR = document.querySelector('#btn-calcular_OR');
const resultadoAND = document.querySelector('#txt-resultado_AND');
const resultadoOR = document.querySelector('#txt-resultado_OR');
const inputsVal = document.querySelector('#input1_AND');

console.log({
input1_AND,
resultadoAND
});
//console.log(input1_AND)
//resultado.innerText = '1234';
//input1_AND.value = "1";
//input2_AND.value = "1";
//input1_OR.value = "0";
//input2_OR.value = "0";


btnCalcularAND.addEventListener('click', btnAND_OnClick);
btnCalcularOR.addEventListener('click', btnOR_OnClick);
//input1_AND.addEventListener('change', Validate);

function Validate(){
	let valor = input1_AND.value
    while (isNaN(valor) || ((valor != 0) && (valor != 1))){                                        
        alert('Estas escribiendo valores invalidos! '); 
        valor =(prompt('Debes escribir un numero para la '+ texto + ' entrada (0 o 1):'));
    }  
}


const inputsAND = [input1_AND.value, input2_AND.value] // array de inputs
const inputsOR = [input1_OR.value, input2_OR.value] // array de inputs



 class Compuerta {
	constructor(entrada1, entrada2){
		this.entrada1 = entrada1;
		this.entrada2 = entrada2;
	}
	resultadoAND(){
		let resolverAND;
		if (this.entrada1 == 1 && this.entrada2 == 1 ){resolverAND = 1};
		if (this.entrada1 == 0 || this.entrada2 == 0 ){resolverAND = 0};
		return resolverAND;
	}
	resultadoOR(){
		let resolverOR;
		if (this.entrada1 == 0 && this.entrada2 == 0 ){resolverOR = 0};
		if (this.entrada1 == 1 || this.entrada2 == 1 ){resolverOR = 1};
		return resolverOR;
	}
} 

/* function comprobarInputCompuerta(texto){       //funcion para coprobar que la input de la compuerta sea valida
    let valor =  prompt('Ingresa el valor de la '+ texto + ' entrada (0 o 1)',0);
    while (isNaN(valor) || ((valor != 0) && (valor != 1))){                                        
        alert('Estas escribiendo valores invalidos! '); 
        valor =(prompt('Debes escribir un numero para la '+ texto + ' entrada (0 o 1):'));
    }  
    return valor
}
 */





function btnAND_OnClick(){
	//console.log(input1_AND.value);
	//console.log(input2_AND.value);
	const compuertaAND = new Compuerta(input1_AND.value,input2_AND.value);
    resultadoAND.innerText = "RESULTADO : " + compuertaAND.resultadoAND();

}

function btnOR_OnClick(){
	const compuertaOR = new Compuerta(input1_OR.value,input2_OR.value);
    resultadoOR.innerText = "RESULTADO : " + compuertaOR.resultadoOR();
}




/* 
let inputOne;
let inputTwo;

alert("  A continuación debes seleccionar el tipo de Compuerta, y luego sus dos entradas")
let tipoCompuerta = parseInt( prompt('  1 = Compuerta tipo AND ;   2 = Compuerta tipo OR',1) );


while( tipoCompuerta != 1 && tipoCompuerta != 2 )  {
	tipoCompuerta = parseInt(prompt('Debes Seleccionar 1 o 2 (1=AND, 2=OR)',1));  
}

 */