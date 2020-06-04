var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function ( event ) {
	event.preventDefault();

	// Dados do paciente novo
	var formAdiciona = document.querySelector("#form-adiciona");
	var novoPaciente = dadosDoFormularioPaciente ( formAdiciona );

	// Criando o paciente novo
	var pacienteTr = criaTr ( novoPaciente );

	// Colocando o paciente na tabela
	var tabelaPacientes = document.querySelector("#tabela-pacientes");
	tabelaPacientes.appendChild(pacienteTr);

	formAdiciona.reset();

});

function dadosDoFormularioPaciente ( formAdiciona ) {

	var paciente = {
		nome: formAdiciona.nome.value,
		peso: formAdiciona.peso.value,
		altura: formAdiciona.altura.value,
		gordura: formAdiciona.gordura.value,
		imc: formAdiciona.peso.value / (formAdiciona.altura.value * formAdiciona.altura.value)
	}
	return paciente;
}

function criaTr ( novoPaciente ) {

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	// Colocando as Td(s) na Tr
	pacienteTr.appendChild(criaTd(novoPaciente.nome, "info-nome"));
	pacienteTr.appendChild(criaTd(novoPaciente.peso, "info-peso"));
	pacienteTr.appendChild(criaTd(novoPaciente.altura, "info-altura"));
	pacienteTr.appendChild(criaTd(novoPaciente.gordura, "info-gordura"));
	pacienteTr.appendChild(criaTd(novoPaciente.imc, "info-imc"));

	return pacienteTr;

}

function criaTd (dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}