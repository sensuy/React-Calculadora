import React from 'react';
import ReactDom from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('teste do calculadoraService', () => {
	const [calcular, SOMA, SUBTRACAO] = CalculadoraService();

	it('deve garantir que 1 + 4 = 5.', () => {
		let soma = calcular(1, 4, SOMA);
		expect(soma).toEqual(5);
	});

	it('deve garantir que 1 -4 = -3', () => {
		let subtracao = calcular(1, 4, SUBTRACAO);
		expect(subtracao).toEqual(-3);
	})

});