//[CRUD] JavaScrip BÁSICO !!

const PostJS = { //declara base dos nossos post
    usuarios:[{
        username: 'oweslley',
    }],
    
    post: [{
        id: 1,
        criador: 'oweslley',
        conteudo: 'perdemos o primeiro jogo ontem, 10/04',
    }],
}
//CREATE ------
function criaPost(dados) { //função resposável a criar os post do usuario
    PostJS.post.push({ //const PostJS, objeto POST vai receber o .push'acresimo de conteudo em ultima pocição'
        id: PostJS.post.length + 1, //soma +1 no id do post anterior
        criador: dados.criador, //criador vai receber parametro dados
        conteudo: dados.conteudo //conteudo vai receber parametro dados
    })
}

criaPost({criador: 'oweslley', conteudo: 'hoje eu treinei duro, e vou prourar melhorar 11/04'}) //chama a função e joga os parametros desejados
criaPost({criador: 'oweslley', conteudo: 'hoje vou conseguir treinar? 12/04'})

//READ ------

function pegaPosts() {
    let texto1 = document.getElementById('texto1');
    let texto2 = document.getElementById('texto2');
    let i = PostJS.post[0].criador
    let y = PostJS.post[0].conteudo

    let texto3 = document.getElementById('texto3');
    let texto4 = document.getElementById('texto4');
    let x = PostJS.post[1].criador
    let z = PostJS.post[1].conteudo

    let texto5 = document.getElementById('texto5');
    let texto6 = document.getElementById('texto6');
    let p = PostJS.post[2].criador
    let t = PostJS.post[2].conteudo

    texto1.innerHTML = `<strong>autor:</strong> ${i}`
    texto2.innerHTML = `<strong>conteudo:</strong> ${y}`
    texto3.innerHTML = `<strong>autor:</strong> ${x}`
    texto4.innerHTML = `<strong>conteudo:</strong> ${z}`
    texto5.innerHTML = `<strong>autor:</strong> ${p}`
    texto6.innerHTML = `<strong>conteudo:</strong> ${t}`
   
    //
}

function pegaPostsTroca() { //necessário criação para o atualizaConteudoDoPost funcionar
    return PostJS.post;
}

//UPTADE ------

function atualizaConteudoDoPost(id, novoConteudo) {
    const postQueVaiSerAtualziado = pegaPostsTroca().find((post) => { //.find encontra o primeiro elemento em um array que satisfaça uma condição específica.
        return post.id === id; //nesse caso, ele vai encontrar o elemento de ID explanado em parametro
    });
    console.log(postQueVaiSerAtualziado)
    postQueVaiSerAtualziado.conteudo = novoConteudo //depois de encontrado o elemento em questão, seu conteudo passa a ser o 'novo conteudo' digitado em parametro
}

//DELETE

function apagaPost(id) {
    const listaDePostAtualizada = pegaPosts().filter((postAtual) => { //'.filter' faz uma copia da ARRAY conforme a função desejada
        return postAtual.id !== id; //nesse caso, SEM o post com o ID em parametro 
    })
    PostJS.post = listaDePostAtualizada; //o PostJs original recebe a copia e passa a ser a verdadeira
}

//console.log(pegaPosts())
