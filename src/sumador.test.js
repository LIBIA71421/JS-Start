import fizzbuzz from "./fizzbuzz.js";
import fizzbuzz_secuencia from "./secuenciador.js";
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
  it("retorna un valor para 1 secuencia", () => {
    expect(fizzbuzz_secuencia(1)).toEqual('1');
  });
});

describe("FizzBuzz", () => {
  it("retorna dos valores para 2 secuencias", () => {
    expect(fizzbuzz_secuencia(2)).toEqual('1,2');
  });
});

describe("FizzBuzz", () => {
  it("retorna secuencias con Fizz", () => {
    expect(fizzbuzz_secuencia(3)).toEqual('1,2,Fizz');
  });
});

describe("FizzBuzz", () => {
  it("retorna secuencias con Buzz", () => {
    expect(fizzbuzz_secuencia(5)).toEqual('1,2,Fizz,4,Buzz');
  });
});

describe("FizzBuzz", () => {
  it("retorna secuencias con FizzBuzz", () => {
    expect(fizzbuzz_secuencia(15)).toEqual('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
  });
});