import Matemagica from '../src/Matemagica'
import {describe, expect, test} from '@jest/globals'


describe('Operações matematicas', () => {

    test('Teste - Essa operação deve retornar a soma de dois números', () => {
        const matemagica = new Matemagica()
        matemagica.SetX(5)
        matemagica.SetY(5)

        expect(matemagica.GetSum()).toBe(10)
    })

    test('Teste - Essa operação deve retornar a subtração de dois números', () => {
        const matemagica = new Matemagica()
        matemagica.SetX(5)
        matemagica.SetY(5)

        expect(matemagica.GetSub()).toBe(0)
    })


    test('Teste - Essa operação deve retornar a multiplicação de dois números', () => {
        const matemagica = new Matemagica()
        matemagica.SetX(5)
        matemagica.SetY(5)

        expect(matemagica.GetMultiply()).toBe(25)
    })

    test('Teste - Essa operação deve retornar a divisão de dois números', () => {
        const matemagica = new Matemagica()
        matemagica.SetX(5)
        matemagica.SetY(5)

        expect(matemagica.GetDivision()).toBe(1)
    })
})