/* 
    Tratamento de erro de persistência no banco de dados
    Assim que o erro cai no catch, seria legal apagar tudoq foi feito no db
*/

const dbInit = async () => {
    try{
    await dbConnect()
    const Product = await ProductModel()
    console.log(Product)
  
    const productList = await Product.findAll({raw: true})
    console.log(productList)
  
    } catch(error) {
      console.log("Process error: ", error)
    }
  
  }
    
  dbInit()