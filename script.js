let option;
let items = [];

while (option != 3) {
    option = Number(prompt("Olá usuário! Digite o número da opção desejada:\n1. Cadastrar um item na lista\n2. Mostrar itens cadastrados\n3. Sair do programa"))
    
    
    /* if (option == 1) {
        let item = prompt("Cadastre um item na lista.")
        items.push(item)
    } 
    else if (option == 2) {
        if (items.length == 0) {
            alert("Não existe nenhum programa cadastrado.")
        } else {
            alert(items)
        }
    } */

    switch (option) {
        case 1:
            let item = prompt("Cadastre um item na lista.")
            items.push(item)
            break
        case 2:
            if (items.length == 0) {
                alert("Não existe nenhum programa cadastrado.")
            } else {
                alert(items)
            }
            break
        case 3:
            alert("Tchau!")
            break
        default:
            alert("Opção inválida. Tente novamente")

    }
}

