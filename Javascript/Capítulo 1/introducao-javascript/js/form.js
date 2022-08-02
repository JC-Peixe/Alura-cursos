var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function(event){

	event.preventDefault();
	var form = document.querySelector('#form-adiciona');
    var paciente = obterPacientesFormulario(form)
	var pacienteTr = montaTr(paciente);

	if(!validaPaciente(paciente)){
		alert('paciente inválido')
		return
	}

    // var nome = form.nome.value;
	// var peso = form.peso.value;
	// var altura = form.altura.value;
	// var gordura = form.gordura.value;
	// var imc = (peso / (altura*altura));

	// var nomeTd = document.createElement('td');
	// var pesoTd = document.createElement('td');
	// var alturaTd = document.createElement('td');
	// var gorduraTd = document.createElement('td');
	// var imcTd = document.createElement('td');

	// nomeTd.textContent = nome;
	// pesoTd.textContent = peso;
	// alturaTd.textContent = altura;
	// gorduraTd.textContent = gordura;
	// imcTd.textContent = calculaImc(peso,altura);

	// pacienteTr.appendChild(nomeTd);
	// pacienteTr.appendChild(pesoTd);
	// pacienteTr.appendChild(alturaTd);
	// pacienteTr.appendChild(gorduraTd);
	// pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);
	form.reset();

} 
);

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

function montaTr(paciente){
	var pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');

	// var nomeTd = document.createElement('td');
	// nomeTd.classList.add('info-nome');
	// nomeTd.textContent = paciente.nome;
	// var nomeTd = montaTd(paciente.nome, "info-nome");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr
}
function montaTd(dado,classe){
	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){
	if(validaPeso(paciente.peso)){
		return true
	} else{
		return false
	}
}