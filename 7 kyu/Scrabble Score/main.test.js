import {expect, test} from 'vitest'
import {scrabbleScore} from "./main";

test('', ()=> {
    const startVal = "cabbage"
    const endVal = scrabbleScore(startVal)

    expect(endVal).toBe(14)
    expect(scrabbleScore("")).toBe(0)
    expect(scrabbleScore("street")).toBe(6)
    expect(scrabbleScore("a")).toBe(1)
})