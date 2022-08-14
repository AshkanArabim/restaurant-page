const makeMenu = (function() {
    function Food(category, name, price, desc) {
        this.category = category;
        this.name = name;
        this.price = Number(price);
        this.desc = desc;
    }

    const base = document.createElement('div');
    const titleContainer = document.createElement('div')
    const h1 = document.createElement('h1');
    const menuItems = [];
    const sections = ['breakfast','lunch','drinks'];
    
    h1.textContent = 'Menu';

    titleContainer.classList.add('title')
    base.classList.add('menu', 'showpage');

    base.appendChild(titleContainer);
    titleContainer.appendChild(h1);
    
    menuItems.push(
        new Food('breakfast','Eggs Benedict','13','Toasted English muffin, Ham, Poached Eggs, Hollandaise'),
        new Food('breakfast','Quartet Sandwich','12','Brioche Bun, Egg, Honey Mustard, Ham & Cheddar'),
        new Food('breakfast','Vegetarian Sandwich','11','Brioche Bun, Egg, Smoked Bacon, Swiss Cheese'),
        new Food('lunch','Chicken and Waffles','17','Crispy Chicken + Crispy Waffles'),
        new Food('lunch','Turkey BLT','14','Spring Mix, Tomato, Turkey, Bacon, Swiss, Cheddar, Mustard & Mayo'),
        new Food('lunch','Grilled Cheese','13','All the Cheese, Grilled Tomato & Bacon'),
        new Food('drinks','Espresso','3',"Good ol' Espresso"),
        new Food('drinks','Latte','4','Coffee and some Milk'),
        new Food('drinks','Mango Smoothie','6','A smoothie of Mango')
    );
    console.log(menuItems);

    for (let sectionIndex in sections) {
        const section = document.createElement('div');
        sectionTitle = document.createElement('h2');
        section.id = sections[sectionIndex];
        sectionTitle.textContent = sections[sectionIndex];
        section.appendChild(sectionTitle);

        for (let foodIndex in menuItems) {
            if (menuItems[foodIndex].category === sections[sectionIndex]) {
                const menuItemHolder = document.createElement('div');
                const itemName = document.createElement('h3');
                const itemPrice = document.createElement('h4');
                const itemDesc = document.createElement('p');
                const nameAndPrice = document.createElement('div');

                menuItemHolder.id = menuItems[foodIndex].name;

                itemName.textContent = menuItems[foodIndex].name;
                itemPrice.textContent = `$${menuItems[foodIndex].price}`;
                itemDesc.textContent = menuItems[foodIndex].desc;

                menuItemHolder.appendChild(nameAndPrice);
                nameAndPrice.appendChild(itemName);
                nameAndPrice.appendChild(itemPrice);
                menuItemHolder.appendChild(itemDesc);
                section.appendChild(menuItemHolder);
            }
        }

        base.appendChild(section)
    }
    
    document.querySelector('body').appendChild(base);
}) ();