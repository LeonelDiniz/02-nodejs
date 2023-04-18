/*
0 - Obter um usuario;
1 - Obter o numero de telefone do usuario a partir do seu ID;
2 - Obter o endereco do usuario pelo ID;
*/

function obterUsuario(callback) {
    setTimeout(function() {
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
            telefone: '981363532',
            ddd: 61
        })
    }, 2000);
}

function obterEndereco(idUsuario) {

}

function resolverUsuario(error, usuario) {
    console.log('usuario', usuario)

}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('Deu ruim em Usuario', error)
        return;

    }
})

obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {

    })
    //const telefone = obterTelefone(usuario.id)

console.log('usuario', usuario)
    //console.log('telefone', telefone)