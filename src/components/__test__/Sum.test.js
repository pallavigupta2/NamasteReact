import { Sum } from "../Sum"

test("Calulate sum of two number and return the sum.",()=>{
const result = Sum(3,5)

// Aserstion
expect(result).toBe(8);
})