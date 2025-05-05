import {expect, test} from 'vitest'
import {evenChars} from "./main";

test('',()=> {

    const startString1 = "abcdefghijklm"
    const startString2 = "e"

const endString1 = evenChars(startString1)
const endString2 = evenChars(startString2)

expect(endString1).toStrictEqual(["b", "d", "f", "h", "j", "l"])
expect(endString2).toStrictEqual("invalid string")
})