/*
Em ambiente de produção, os erros são salvos em documentos
No código de exemplo está sendo implementada uma função que recebe
um objeto e grava um arquivo JSON com  o erro usando a data e hora do erro
 como nome 
 */

const fs = require('fs')


const saveError = (errorObject) =>{
    const date = (new Date()).toJSON()
    const errorString = JSON.stringify(errorObject,null,2)
    fs.writeFile(`${date}.json`, errorString, (err) =>{//grava o erro usando a data e hora como nome
        if (err) return console.log(err);
    })
}