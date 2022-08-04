var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function(event){

	event.preventDefault();
	var form = document.querySelector('#form-adiciona');
    var paciente = obterPacientesFormulario(form)
	// var pacienteTr = montaTr(paciente);
	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibirMensagensErro(erros);

		// var mensagemErro = document.querySelector("#mensagem-erro");
		// mensagemErro.textContent = erros;
		return;
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

	adicionaPacienteTabela (paciente);

	// var tabela = document.querySelector('#tabela-pacientes');
	// tabela.appendChild(pacienteTr);
	
	form.reset();
	var mensagemErro = document.querySelector('#mensagens-erro');
	mensagemErro.innerHTML = ""

} 
);

function adicionaPacienteTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);

}

function exibirMensagensErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = ""
	erros.forEach(function(erro){
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
	});

}

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
	var erros = [];
	if(paciente.nome.length==0){
		erros.push('O nome não pode ser em branco')
	}
	if(!validaPeso(paciente.peso))	erros.push('Peso é inválido');

	if(!validaAltura(paciente.altura)){
		erros.push('Altura é inválida!')
	};
	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco")
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco")
	}
	if(paciente.altura.length == 0){
		erros.push("A Altura não pode ser em branco")
	}
	return erros;
}