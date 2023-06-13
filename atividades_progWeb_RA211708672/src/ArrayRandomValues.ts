import Produto from "./Produto"

class ArrayRandomValues {

    private productsArray:Array<Produto> = [];

    public SetProductsArray(array:Array<Produto>) {
        this.productsArray = array
    }

    public GetProductsArray() {
        return this.productsArray
    }

    public AddProductToArray(produto:Produto) {
        this.productsArray.push(produto)
    }

    public GetProductsArrayLength() {
        return this.productsArray.length
    }

    public GenerateRandomNumber() {
        return Math.floor(Math.random() * this.productsArray.length)
    }

    public GetRandomProductFromArray() {
        const random = this.GenerateRandomNumber()
        return this.productsArray[random]
    }
}

export default ArrayRandomValues