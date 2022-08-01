// console.log('Olá, mundo!')
// 			var titulo = document.querySelector('h1');
// 			titulo.textContent = "Peixe Personal"
// 			var subtitulo = document.querySelector('.subtitulo')
// 			subtitulo.textContent = "Clientes do site"
	
// // var paciente = document.querySelector('#primeiro-paciente');

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes)

for(var i = 0 ; i < pacientes.length; i++){
	console.log(pacientes[i]);
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector('.info-peso');
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector('.info-altura');
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector('.info-imc');

	var pesoValido = true;
	var alturaValida = true;
	if(peso <=0 || peso>= 1000){
		console.log('peso inválido')
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add ("paciente-invalido");
	}
	if(altura<=0 || altura >= 3){
		console.log ('Altura inválida')
		alturaValida = false;
		tdImc.textContent = "Altura Inválida!"
		paciente.classList.add ("paciente-invalido");

		// paciente.style.backgroundColor = "red";
		// paciente.style.color = "white";
	}
	if (pesoValido && alturaValida){
	var imc = calculaImc(peso,altura);
	tdImc.textContent = imc;
	}
}
function calculaImc(peso, altura){
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2)
}


// botaoAdicionar.addEventListener('click',function(event){

// 	event.preventDefault();
// 	console.log("Eu sou o botão");
// } );

// titulo.addEventListener('click', function(){
// 	alert("Fui clicado via função anônima...")
// })

// titulo.addEventListener('click', function(){
// 	alert("Fui clicado via função anônima...")
// });
// titulo.addEventListener('click', mostraMensagem);
// function mostraMensagem(){
// 	alert('eu fui clicado!')
//}
// var tdPeso = paciente.querySelector('.info-peso');
// var peso = tdPeso.textContent;
// var tdAltura = paciente.querySelector('.info-altura');
// var altura = tdAltura.textContent;

// var tdImc = paciente.querySelector('.info-imc');

// var pesoValido = true;
// var alturaValida = true;
// if(peso <=0 || peso>= 1000){
// 	console.log('peso inválido')
// 	pesoValido = false;
// 	tdImc.textContent = "Peso inválido!";
// }
// if(altura<=0 || altura >= 3.0){
// 	console.log ('Altura inválida')
// 	alturaValida = false;
// 	tdImc.textContent = "Altura Inválida!"
// }

// if (pesoValido && alturaValida){
// var imc = peso/(altura*altura)
// tdImc.textContent = imc;

// }

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(tdAltura);
// console.log(altura);
// console.log(imc)