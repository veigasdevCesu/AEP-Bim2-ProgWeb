class Matemagica {
    private x: number
    private y: number

    //sum
    private Sum() {
        return this.x + this.y
    }

    public GetSum() {
        return this.Sum()
    }

    //sub
    private Sub() {
        return this.x - this.y
    }

    public GetSub() {
        return this.Sub()
    }

    //multiply
    private Multiply() {
        return this.x * this.y
    }

    public GetMultiply() {
        return this.Multiply()
    }

    //division
    private Division() {
        return this.x / this.y
    }

    public GetDivision() {
        return this.Division()
    }

    //X
    public SetX(x: Number) {
        if (typeof x != 'number') {
            return console.log("Erro. insira um número válido.")
        }
        this.x = x
    }

    public GetX() {
        return this.x
    }

    //Y
    public SetY(y: Number) {
        if (typeof y != 'number') {
            return console.log("Erro. insira um número válido.")
        }
        this.y = y
    }

    public GetY() {
        return this.y
    }
}

export default Matemagica