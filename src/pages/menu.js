function food(category, name, price, ingredients) {
    this.category = category;
    this.name = name;
    this.price = Number(price);
    this.ingredients = ingredients;
}

const makeMenu = (function() {
    const base = document.createElement('div');
    const container = document.createElement('div')
    const h1 = document.createElement('h1');
    const menuItems = [];
    menuItems.push(
        new food('breakfast','Eggs Benedict','13','Toasted English muffin, Ham, Poached Eggs, Hollandaise'),
        new food('breakfast','Quartet Sandwich','12','Brioche Bun, Egg, Honey Mustard, Ham & Cheddar'),
        new food('breakfast','Vegetarian Sandwich','11','Brioche Bun, Egg, Smoked Bacon, Swiss Cheese'),
        new food('lunch','Chicken and Waffles','17','Crispy Chicken + Crispy Waffles'),
        new food('lunch','Turkey BLT','14','Spring Mix, Tomato, Turkey, Bacon, Swiss, Cheddar, Mustard & Mayo'),
        new food('lunch','Grilled Cheese','13','All the Cheese, Grilled Tomato & Bacon')
    );
    console.log(menuItems);

    container.classList.add('title')
    base.classList.add('menu', 'showpage');
    
    h1.textContent = 'Menu';

    base.appendChild(container);
    container.appendChild(h1);
    
    document.querySelector('body').appendChild(base);
}) ();