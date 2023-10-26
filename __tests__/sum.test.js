import { Sum } from "../src/components/Sum"
import "@testing-library/jest-dom"


test("testing for the sum function with two numbers",()=>{
    const res=Sum(2,3);
    expect(res).toBe(5);//Assertion
})

