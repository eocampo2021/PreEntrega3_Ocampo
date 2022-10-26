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


let inputOne;
let inputTwo;

//document.write('<div class="alert alert-danger" role="alert">Simulador de compuertas logicas v0.2</div>');
alert("  Simulador de compuertas logicas v0.2")
alert("  A continuación debes seleccionar el tipo de Compuerta, y luego sus dos entradas")
let tipoCompuerta = parseInt( prompt('  1 = Compuerta tipo AND ;   2 = Compuerta tipo OR',1) );


while( tipoCompuerta != 1 && tipoCompuerta != 2 )  {
	tipoCompuerta = parseInt(prompt('Debes Seleccionar 1 o 2 (1=AND, 2=OR)',1));  
}



class Compuerta {
	constructor(tipo, entrada1, entrada2){
		this.tipo = tipo.toUpperCase();
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

function comprobarInputCompuerta(texto){       //funcion para coprobar que la input de la compuerta sea valida
    let valor =  prompt('Ingresa el valor de la '+ texto + ' entrada (0 o 1)',0);
    while (isNaN(valor) || ((valor != 0) && (valor != 1))){                                        
        alert('Estas escribiendo valores invalidos! '); 
        valor =(prompt('Debes escribir un numero para la '+ texto + ' entrada (0 o 1):'));
    }  
    return valor
}

inputOne = comprobarInputCompuerta('primera');
inputTwo = comprobarInputCompuerta('segunda');

const inputs = [inputOne, inputTwo] // array de inputs


if(tipoCompuerta == 1){
	const compuertaAND = new Compuerta("Compuerta tipo AND", inputOne,inputTwo);
    alert('La salida de las compuerta AND es:  ' + compuertaAND.resultadoAND() );
}else{
	const compuertaOR = new Compuerta("Compuerta tipo OR", inputs[0],inputs[1]);
  	alert('La salida de las compuerta OR es:  ' + compuertaOR.resultadoOR() );
		 
}

