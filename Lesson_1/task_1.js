// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

alert('Задание № 1');

{
    const Tc = prompt('Задайте температуру в градусах по Цельсию: ');

    const Tf = (9 / 5) * Tc + 32;

    alert('Температура по Цельсию = ' + Tc + '/ Температура по Фаренгейту = ' + Tf);
}