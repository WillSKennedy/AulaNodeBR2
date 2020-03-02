/*
obter um usuario
obter numero de telefone de usuario pelo ID
obter o endereço pelo ID
*/

function obTerUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '982051870',
            ddd: 71
        })
    }, 2000);
}


function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)

}

obTerUsuario(function resolverUsuario(error, usuario){
    // null || "" 0 === false
    if(error) {
        console.error('DEU RUIM em USUÁRIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.error('DEU RUIM em ENDEREÇO', error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })

    })
    
})
// const telefone = obterTelefone(usuario.id)

// console.log('usuario', usuario)
// console.log('telefone', telefone)
