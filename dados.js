let comandosGit = [
    // Comandos Essenciais
    {
        titulo: "git init",
        descricao: "Inicializa um novo repositório Git em um diretório.",
        codigo: "git init",
        tags: "inicializar repositório novo repositório new repository novo repositorio"
    },
    {
        titulo: "git clone",
        descricao: "Cria uma cópia local de um repositório remoto.",
        codigo: "git clone [url-do-repositório]",
        tags: "clonar repositório remoto clonar repositorio remoto copiar repositorio copiar repositório"
    },
    {
        titulo: "git add",
        descricao: "Adiciona modificações de arquivos à área de staging, preparando-os para o commit.",
        codigo: "git add [arquivos]",
        tags: "adicionar arquivos staging preparar commit add arquivos"
    },
    {
        titulo: "git commit",
        descricao: "Cria um novo commit, salvando as alterações da área de staging no histórico do projeto.",
        codigo: "git commit -m 'mensagem do commit'",
        tags: "commit comit salvar alterações histórico commit mensagem comitar alterações comitar alteracoes"
    },
    {
        titulo: "git status",
        descricao: "Mostra o estado atual do repositório, indicando quais arquivos foram modificados, adicionados à área de staging ou não rastreados.",
        codigo: "git status",
        tags: "estado repositório modificações staging status do repositorio status do repositório"
    },
    {
        titulo: "git log",
        descricao: "Exibe o histórico de commits do repositório.",
        codigo: "git log",
        tags: "histórico commits ver log ver logs"
    },

    // Comandos para Gerenciar Branches
    {
        titulo: "git branch",
        descricao: "Lista todas as branches existentes, cria uma nova branch ou exclui uma branch existente.",
        codigo: "git branch",
        tags: "gerenciar branch nova deletar branch listar branches listar branchs"
    },
    {
        titulo: "git checkout",
        descricao: "Alterna entre branches ou restaura um commit específico.",
        codigo: "git checkout [branch]",
        tags: "trocar branch restaurar commit checkout branch"
    },
    {
        titulo: "git merge",
        descricao: "Combina as alterações de uma branch em outra.",
        codigo: "git merge [branch]",
        tags: "combinar merge branch merge integrar"
    },
    {
        titulo: "git rebase",
        descricao: "Reordena e combina commits de uma branch em outra, criando um histórico mais linear.",
        codigo: "git rebase [branch]",
        tags: "reordenar commits linearizar histórico rebase organizar commits"
    },

    // Comandos para Interagir com Repositórios Remotos
    {
        titulo: "git remote",
        descricao: "Gerencia as conexões com repositórios remotos.",
        codigo: "git remote",
        tags: "gerenciar remoto conexões remote adicionar remover"
    },
    {
        titulo: "git fetch",
        descricao: "Baixa as informações de um repositório remoto, mas não as integra ao branch local.",
        codigo: "git fetch [remote]",
        tags: "baixar informações repositório remoto fetch"
    },
    {
        titulo: "git pull",
        descricao: "Baixa as informações de um repositório remoto e as integra ao branch local.",
        codigo: "git pull [remote] [branch]",
        tags: "integrar repositório remoto baixar pull puxar informações baixar informações"
    },
    {
        titulo: "git push",
        descricao: "Envia as alterações locais para um repositório remoto.",
        codigo: "git push [remote] [branch]",
        tags: "enviar alterações repositório remoto push empurrar informações"
    },

    // Outros Comandos Úteis
    {
        titulo: "git diff",
        descricao: "Mostra as diferenças entre commits, branches ou arquivos.",
        codigo: "git diff",
        tags: "comparar diferenças comparar commits branches arquivos diff"
    },
    {
        titulo: "git reset",
        descricao: "Desfaz as últimas alterações, movendo arquivos para a área de staging ou para o diretório de trabalho.",
        codigo: "git reset [opções]",
        tags: "desfazer alterações staging reset arquivos"
    },
    {
        titulo: "git revert",
        descricao: "Desfaz um commit específico, criando um novo commit que reverte as alterações.",
        codigo: "git revert [commit]",
        tags: "reverter commit específico desfazer revert"
    },
    {
        titulo: "git tag",
        descricao: "Cria rótulos para commits específicos, facilitando a identificação de versões importantes.",
        codigo: "git tag [nome-da-tag]",
        tags: "criar tag rótulos commits versão tag"
    }
];
