class Produto {

    private name:string;
    private value:number;
    private quantity:number;

    constructor(name: string, value: number, quantity: number) {
        this.name = name
        this.value = value
        this.quantity = quantity
    }

    //name
    public SetName(name:string) {
        this.name = name
    }

    public GetName() {
        return this.name
    }

    //value
    public SetValue(value:number) {
        this.value = value
    }

    public GetValue() {
        return this.value
    }

    //quantity
    public SetQuantity(quantity:number) {
        this.quantity = quantity
    }

    public GetQuantity() {
        return this.quantity
    }
}

export default Produto