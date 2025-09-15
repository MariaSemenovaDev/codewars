// Our Setup
// Alice and Bob work in an office. When the workload is light and the boss isn't looking, they sometimes play simple word games for fun. This is one of those days!
//
// Today's Game
// Alice and Bob are playing what they like to call Mutations, where they take turns trying to "think up" a new four-letter word (made up of four unique letters) that is identical to the prior word except for only one letter. They just keep on going until their memories fail out.
//
//     Their Words
// Alice and Bob have memories of the same size, each able to recall 10 to 2000 different four-letter words. Memory words and initial game word are randomly taken from the same list of 4000 (unique, four-letter, lowercased) words, any of which may appear in both memories.
//
//     The expression to "think up" a new word means that for their turn, the player must submit as their response word the first valid, unused word that appears in their memory (by lowest array index), as their memories are ordered from the most "memorable" words to the least.
//
//     The Rules
// a valid response word must contain four unique letters
// 1 letter is replaced while the other 3 stay in position
// it must be the lowest indexed valid word in that memory
// this word cannot have already been used during the game
// the final player to provide a valid word will win the game
// if 1st player fails 1st turn, 2nd can win with one word
// when both players fail the initial word, there is no winner
// Your Task
// To determine the winner!
//
//     Some Examples
// alice = plat,rend,bear,soar,mare,pare,flap,neat,clan,pore
//
// bob   = boar,clap,farm,lend,near,peat,pure,more,plan,soap
//
// In the case of word = "send" and first = 0:
// Alice responds to send with rend
//     Bob responds to rend with lend
//     Alice has no valid response to lend
// Bob wins the game.
//     In the case of word = "flip" and first = 1:
// Bob has no valid response to flip
// Alice responds to flip with flap
//     Alice wins the game.
//     In the case of word = "calm" and first = 1:
// Bob has no valid response to calm
// Alice has no valid response to calm
// Neither wins the game.
//     In the case of word = "more" and first = 1:
// Bob has no valid response to more **
// Alice responds to more with mare
//     Alice wins the game.
//     In the case of word = "maze" and first = 0:
// Alice responds to maze with mare
//     Bob responds to mare with more **
// Alice responds to more with pore
//     Bob responds to pore with pure
//     Alice responds to pure with pare
//     Bob has no valid response to pare
// Alice wins the game.
// ** Note that in these last two cases, Bob cannot use mere because it has two e's.
//
// Input
// alice ~ a(n) array/list/tuple/vector (10 <= size <= 2000) of four-letter words
// bob ~ a(n) array/list/tuple/vector (10 <= size <= 2000) of four-letter words
// word ~ the initial four-letter challenge word of the game
// first ~ an integer (either 0 for Alice or 1 for Bob)
//     Output
// 0 if Alice wins
// 1 if Bob wins
// -1 if both fail
// Enjoy!

const used = new Set([word]);

function isValid(from, to) {
    if (to.length !== 4) return false;
    if (new Set(to).size !== 4) return false; // уникальные буквы
    if (used.has(to)) return false;
    let diff = 0;
    for (let i = 0; i < 4; i++) if (from[i] !== to[i]) diff++;
    return diff === 1;
}

function move(memory, from) {
    for (let w of memory) {
        if (isValid(from, w)) return w;
    }
    return null;
}

let turn = first; // 0=Alice, 1=Bob
while (true) {
    const memory = turn === 0 ? alice : bob;
    const next = move(memory, word);
    if (!next) {
        // если первый же ход
        if (used.size === 1) {
            // пробуем другого
            const other = turn === 0 ? bob : alice;
            const alt = move(other, word);
            if (alt) return turn === 0 ? 1 : 0;
            return -1;
        }
        return turn === 0 ? 1 : 0;
    }
    used.add(next);
    word = next;
    turn = 1 - turn;
}