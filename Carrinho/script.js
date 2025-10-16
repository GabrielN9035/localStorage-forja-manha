$(document).ready(function(){
    //recuperação carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atrobui a uma variavel a lista do html
    const listaElement = $("#lista")
    //atribuir o total a variavel total do id do html
    const totalElement = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            //criando um elemento de linha de lista para cada item com descrição e preço
            const listaItem = $("<li>").text(`${item.desc} - Preco: $${item.preco.toFixed(2)}`)

            //criar uma botão de remover o item
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function(){

            
                removerItem(index)
            })

            listaItem.append(removeButton)
            listaElement.append(listaItem)

            totalPreco += item.preco
        })
        totalElement.text(`Total: $${totalPreco.toFixed(2)}`)
    }

    function removerItem(index){
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()
    }

    exibirCarrinho()
})