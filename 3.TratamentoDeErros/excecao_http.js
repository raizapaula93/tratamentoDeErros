/* 
 Normalmente em requisições o erro vem como status code
 e o tratamento é para dar detalhes sobre o erro
 */


const axios = require('axios');

const search = async (term) => {
 try {
  const response = await axios.get(`https://swapi.dev/api/people/${term}`)
  console.log(response.data)
  return response.data
 } catch (error) {
   const errorResponse = { statusCode: error.response.status, body: error.response.data }
   console.log(errorResponse)
   return errorResponse
 }
}

search('roberto')