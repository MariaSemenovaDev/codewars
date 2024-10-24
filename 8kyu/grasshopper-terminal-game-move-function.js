// Description:
//Функция перемещения в терминальной игре
// В этой игре герой перемещается слева направо. Игрок бросает кубик и перемещается на количество мест, указанное кубиком, два раза. Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

// Solution

function move (position, roll) {
  let newPosition = position + roll * 2
  return  newPosition
  }

//решение стрелочной функцией
const move = (position, roll) => position + roll * 2

//решение без let
function move (position, roll) {
  return position + roll * 2
}



  // тут мои выдумки если бы кубик должен был рандомно кидаться

// let firstPosition = Math.ceil(Math.random() * 6)
// let secondPosition = Math.ceil(Math.random() * 6)

// console.log(firstPosition, secondPosition);
//
