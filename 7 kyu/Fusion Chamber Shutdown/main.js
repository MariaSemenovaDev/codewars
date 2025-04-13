// Description:
//     A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below
//
// 1. Hydrogen reacts with Oxygen   = H2O
//     2. Carbon   reacts with Oxygen   = CO2
//     3. Carbon   reacts with Hydrogen = CH4
//     FOR EXAMPLE:
//     (C,H,O) = (45,11,100)
// return no. of water, carbon dioxide and methane molecules
// Output should be like:
//     (5,45,0)
//

// В лаборатории проверяют, как атомы реагируют в ионном состоянии во время ядерного синтеза. Они помещают различные элементы с водородом в камеру с высокой температурой и давлением. По неизвестной причине камера потеряла энергию, и элементы в ней начали выпадать в осадок
// Учитывая количество атомов углерода [C], водорода [H] и кислорода [O] в камере. Рассчитайте, сколько молекул воды [H2O], диоксида углерода [CO2] и метана [CH4] будет получено в порядке убывания сродства реакции
//
// 1. Водород реагирует с кислородом = H2O
// 2. Углерод реагирует с кислородом = CO2
// 3. Углерод реагирует с водородом = CH4
// ДЛЯ ПРИМЕРА:
//     (C,H,O) = (45,11,100)
// верните количество молекул воды, углекислого газа и метана
// Выходные данные должны иметь вид:
//     (5,45,0)



// solution
function burner(c, h, o) {
    const water = Math.min(Math.floor(h / 2), o);
    h -= water * 2;
    o -= water;

    const co2 = Math.min(c, Math.floor(o / 2));
    c -= co2;
    o -= co2 * 2;

    const methane = Math.min(c, Math.floor(h / 4));
    return [water, co2, methane];
}

console.log(burner(45, 11, 100))