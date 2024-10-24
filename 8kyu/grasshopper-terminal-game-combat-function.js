// Description:
// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.


// Solution:
function combat(health, damage) {
        let newHealth = health - damage
        if(newHealth >= 0){
        return newHealth
    } else {
        return newHealth = 0;
    }
  }
  
// более изящное решение:

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

//
function combat(health, damage) {
    if (health - damage < 0){
      return 0;
    }else{
      return health - damage;
    }
  }