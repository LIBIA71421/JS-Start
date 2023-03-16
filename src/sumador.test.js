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
