import fizzbuzz from "./fizzbuzz.js";
/*
import sumar from "./sumador.js";
import multiplicar from "./multiplicador";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});         */

describe("FizzBuzz", () => {
  it("genera para un solo numero", () => {
    expect(fizzbuzz(1)).toEqual('1');
  });
});
describe("FizzBuzz", () => {
  it("genera para otro numero", () => {
    expect(fizzbuzz(2)).toEqual('2');
  });
});
describe("FizzBuzz", () => {
  it("genera Fizz para 3", () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
});

describe("FizzBuzz", () => {
  it("genera Fizz para multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual('Fizz');
  });
});

describe("FizzBuzz", () => {
  it("genera Buzz para 5", () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
});

describe("FizzBuzz", () => {
  it("genera Buzz para multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual('Buzz');
  });
});

describe("FizzBuzz", () => {
  it("genera FizzBuzz para multiplo de 5 y 3", () => {
    expect(fizzbuzz(45)).toEqual('FizzBuzz');
  });
});

describe("FizzBuzz", () => {
  it("genera un valor para 1 secuencia", () => {
    expect(fizzbuzz(1)).toEqual('1');
  });
});