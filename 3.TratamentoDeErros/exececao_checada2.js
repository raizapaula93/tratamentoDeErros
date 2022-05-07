/* Neste caso, estamos fazendo uma verificação do tipo de erro
    que pode ter acontecido(levantamento prévio)
    Pode-se também criar tratamento de erros totalmente customizados para a necessidade da app.
    Neste caso foi feito com o CustomError
*/

try {

    const object = JSON.pare(stringJson)
    throw { name: "CustomError", message: "Deu ruim geral!" }

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Ocorreu o seguinte erro de sintaxe', error.message)
    } else if (error instanceof TypeError) {
        console.log('Ocorreu o seguinte erro de tipagem', error.message)
    } else if (error instanceof ReferenceError) {
        console.log('Ocorreu o seguinte erro de referência', error.message)
    } else {
        console.log('Error genérico', error.anme, error.message)
    }


}