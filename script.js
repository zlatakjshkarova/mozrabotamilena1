const searchInput = document.getElementById('searchInput')
const list = document.querySelector('#list')

//метод indexOf - ищет подстроку в строке
//Возвращает позицию первого совпадения, а если  оно не найдено то верно -1
// синтаксис: строка.indexOf(что_ищем,[откуда начать поиск])
//let str = "всем привет я изучаю javaScript"
//let letter = "и"

//функция проверяет содержит ли строка full в себе подстроку chunk
//если строка содержит подстроку то функция вернет true иначе -false
function isMatching(full, chunk) {
    let pos = full.toLowerCase().indexOf(chunk.toLowerCase());
    return pos != -1;
}

searchInput.addEventListener('keyup', () => {
    let items = document.querySelectorAll('.item');
    let value = searchInput.value;
    for (let item of items) {
        if (isMatching(item.textContent, value) == true) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    }
})