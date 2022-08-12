function food(name, price, desc, imagelink) {
    this.name = name;
    this.price = Number(price);
    this.desc = desc;
    this.imagelink = imagelink;
}

const makeMenu = (function() {
    const div = document.createElement('div');
    const title = document.createElement('h1');

    div.appendChild(title);
    title.textContent = 'menu';
    document.querySelector('body').appendChild(div);

    div.classList.add('menu');
}) ();