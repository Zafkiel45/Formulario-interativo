const form = document.querySelector('#form');
const span = document.querySelectorAll('.error');
const campos = document.querySelectorAll('.campos');
const button = document.getElementById('button')

/*
    A função Error(idx) é responsável por adicionar os elementos quando se encontra um erro no formulário. 
    o argumento "idx" foi passado para deixar mais dinâmico. Irei explicar nos comentários mai abaixo.

    |
    |
    V
*/ 

function Error(idx) {
    span[idx].style.display = 'block';
    campos[idx].style.borderBottom = '1px solid rgb(176, 55, 55)';
}
/*

    A função RemoveError(idx) é responsável por remover os elementos quando não se encontra mais nenhum erro, ou seja, está tudo ok com as informações passadas no formulário. As instruções passadas é alteradada para "none" quando tudo está ok, assim ocultando os "span" com os avisos e em relação a borda de "campos", basta deixarmos vazio que irá remover as intruções passadas de quando havia um erro.

    |
    |
    V

*/ 
function RemoveError(idx) {
    span[idx].style.display = 'none';
    campos[idx].style.border = '';
}

/*

    As duas funções posteriores fazem a mesma coisa, porém com elementos diferentes. No topo do programa eu peguei todos os elementos com a classe "campos" e "error". logo temos uma lista de elementos que é consultada entre "[]". Aqui entra o explicação do idx. Ele foi passado para tornar as coisas mais dinâmicas e economizar escrita de código. então quando passamos o valor de argumento "Error(0)", esse 0 é passado para dentro do "[]", assim pegando o primeira elemento da lista. Eventualmente basta somar +1 no argumento para manipular outros elementos da lista. 
    
    |
    |
    V

*/ 

function CheckName() {
    if(campos[0].value.length <= 3) {
        Error(0); // chama a função "Error()" caso o comprimeto do valor de campos[0] for menor ou igual a 3
    } else {
        RemoveError(0)
         // caso não haja erros, então remove todos os avisos e estilos aplicados quando o formulário não era válido
    }
}

campos[1].addEventListener('input', function(){
    if(campos[1].value.length < 8) {
        Error(1)
    } else {
        RemoveError(1)
    }
})

//===================================================================================================================

button.addEventListener('click', function() {
    if(campos[0].value.length == 0 && campos[1].value.length == 0) {
    window.alert('Verifique seu nome de usuário e sua senha e tente novamente')

    } else if(campos[0].value.length == 0 ) {
        window.alert('Verifique seu nome de usuário e tente novamente')
    } else if(campos[1].value.length == 0) {
        window.alert('Verifique a sua senha e tente novamente')
    }

    form.reset() //Limpa os campos do formulário.
})