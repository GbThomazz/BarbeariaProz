// Função para aplicar a máscara no CPF
function mascaraCpf(campo) {
    var valor = campo.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
    }
    campo.value = valor;
}

// Função para aplicar a máscara no telefone
function mascaraTelefone(campo) {
    var valor = campo.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (valor.length <= 11) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata o telefone
    }
    campo.value = valor;
}

// Função de validação do formulário de agendamento
function testa_form() {
    var form = document.forms["formclientes"];
    var camposObrigatorios = ["nome", "data", "filial", "cpf", "horario", "profissional", "telefone", "Servicos"];

    for (var i = 0; i < camposObrigatorios.length; i++) {
        var campo = form[camposObrigatorios[i]].value.trim();
        if (campo === "") {
            alert(`Por favor, preencha o campo '${camposObrigatorios[i]}' corretamente.`);
            return false;
        }
    }

    var cpf = form["cpf"].value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        alert("O CPF deve conter exatamente 11 dígitos numéricos.");
        return false;
    }

    var telefone = form["telefone"].value.replace(/\D/g, '');
    if (telefone.length !== 11) {
        alert("O telefone deve conter exatamente 11 dígitos numéricos.");
        return false;
    }

    alert("Agendamento realizado com sucesso!");
    return true;
}
