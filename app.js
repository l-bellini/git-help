function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;         

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";


    for (let comando of comandosGit) {                

        console.log(comando.codigo);

        titulo = comando.titulo.toLowerCase();
        descricao = comando.descricao.toLowerCase();
        codigo = comando.codigo.toLowerCase();
        tags = comando.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado"> 
                <h2>${comando.titulo}</h2> 
                <p class="descricao-meta">${comando.descricao}</p> 
                <code>${comando.codigo}</code>
            </div>`;
        }                
    
    }
    
    if (!resultados) {
        resultados = `<p>Ops... Nenhum comando encontrado.</p>`;        
    }

    section.innerHTML = resultados;
}
