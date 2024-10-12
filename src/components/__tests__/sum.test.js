import { Sum } from "../Sum"

 test("sum of 2 and 3 is :",() => {
    const result = Sum(2,3);
    // Assersion is not mandetory
    expect(result).toBe(5);
 })