import Produto from '../src/Produto'
import ArrayRandomValues from '../src/ArrayRandomValues'
import {describe, expect, test} from '@jest/globals'

const produtos:Array<Produto> = [
    new Produto('Nintendo Switch', 2000, 30),
    new Produto('Playstation 4', 3000, 20),
    new Produto('Xbox Series X', 4000, 40),
    new Produto('Playstation 5', 4500, 50)
]

describe('Array random values', () => {

    test('Teste - Adicionar um produto ao array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        const produto = new Produto('Playstation 4 Pro', 3500, 10)
        arrayRandomValues.AddProductToArray(produto)

        const productsArrayLength = arrayRandomValues.GetProductsArrayLength()
        expect(productsArrayLength).toBeGreaterThan(0)
    })

    test('Teste - Gerar um número aleatório', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.SetProductsArray(produtos)

        const randomNumber = arrayRandomValues.GenerateRandomNumber()
        expect(typeof randomNumber).toBe('number')
    })

    test('Teste - Pegar um produto aleatório do array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.SetProductsArray(produtos)

        const randomProduct = arrayRandomValues.GetRandomProductFromArray()
        expect(randomProduct).toBeInstanceOf(Produto)
    })
})