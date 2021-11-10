const categoriesEl = document.querySelectorAll('ul#categories .item');
const categoriesNum = `Number of categories: ${categoriesEl.length}`;
console.log(categoriesNum)

const items = document.querySelectorAll('ul#categories .item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}
    
Element: ${itemsLength}`);
});