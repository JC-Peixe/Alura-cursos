var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click',function(event){

	event.preventDefault();
	var form = document.querySelector('#form-adiciona');
    var paciente = obterPacientesFormulario(form)

    // var nome = form.nome.value;
	// var peso = form.peso.value;
	// var altura = form.altura.value;
	// var gordura = form.gordura.value;
	// var imc = (peso / (altura*altura));
	

	var pacienteTr = document.createElement('tr');

	var nomeTd = document.createElement('td');
	var pesoTd = document.createElement('td');
	var alturaTd = document.createElement('td');
	var gorduraTd = document.createElement('td');
	var imcTd = document.createElement('td');

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso,altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);

	console.log(form.peso.value);
	console.log(form.altura.value);

} );
function obterPacientesFormulario(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
	    altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
