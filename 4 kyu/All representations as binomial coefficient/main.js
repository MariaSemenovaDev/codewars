// Find all ways a given number can be represented as binomial coefficient!
//
//     1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// ...     ...
// Ever seen this before? This is known as Pascal's Triangle, and can be derived like this:
//
// In the middle of the top row, write 1.
// In each following row, leave a gap below a number in the row above.
//     In front of the first and after the last gap of a row, write 1.
// Below each gap of the row above, write the sum of the numbers in front of and after the respective gap.
//     Obviously, 1 occurs infinitely often, and each number a occurs at least once: in second position in the a-th row (0-based counting). Only slightly less obviously, any natural number greater than 1 can only occur only finitely many times in Pascal's Triangle. Singmaster's conjecture states that the number of occurrences does not rise proportional to the size of the respective number. Rather, there is (supposedly) a fixed limit to the number of occurrences, possibly 10 or 12 (although at least 8).
//
// The numbers in Pascal's Triangle are also relevant in combinatorics and known as binomial coefficients. Such a coefficient, effectively the value of a function of two numbers, n and k, represents the number of different ways to choose k items from a total of n items. The coefficient "n-choose-k" is calculated n*(n-1)*(n-2)...*(n-k) / ( 1*2*...*k) (trivially, the value is 1 for k=0 and k=n -- there is exactly one way to "choose" the empty or the whole set). These values also occur in the polynomial expansion of the term (a+b)^n.
//
// Goal
// Your task is to write a function that takes an integer greater than 1 and returns an array of all (n k)-pairs (as two-element int arrays) where the value of "n-choose-k" equals the input, sorted by ascending k (i.e. representing the occurrences of the input in Pascal's Triangle from left to right).

