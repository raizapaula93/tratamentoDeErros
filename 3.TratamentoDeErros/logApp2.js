try{

    const object = JSON.parse('stringJson')
    console.log(object)
} catch(error) {
   
   
   
    const errorObject ={
        type: error.name,
        message: error.message,
        detail: error.stack && error.stack.split('\n')[2].trim()
    }

    saveError(errorObject)


}