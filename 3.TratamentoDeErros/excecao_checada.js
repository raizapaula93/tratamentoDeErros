try {
	const customerList = []
if(customerList.length <1){
	throw{
	 name: "CustomerListError",
	 message: "A lista de clientes não pode ser vazia",
	 code: 9000
	}
     }

} catch(error) {
	console.log(error)
}