/*Tentando converter string em obj;
String n esta em formato valido (json com uma aspa a mais)
Erro vai pro bloco catch, mas como o erro não é monitorado antes
então o tratamento é genérico
*/

const stringJson = '{"message": "Olá mundo!"}'


try {

	const object = JSON.parse(stringJson)
	console.log(JSON.stringify(object,null,2))

} catch(error) {

	console.log(error)

}