const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrArr = []

const ingredientsUl =document.querySelector('ul#ingredients')
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsLi = ingredients[i];

  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.append(ingredientsLi)
  ingrArr.push(ingredientsEl)
};
console.log(ingrArr)

ingredientsUl.append(...ingrArr)
