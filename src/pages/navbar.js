const makeNavbar = (function() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const selector = document.createElement('div');
    selector.classList.add('selector');
    
    const names = ['menu','home','about'];
    for(let nameIndex in names) {
        let element = window[names[nameIndex]];

        element = document.createElement('li');
        element.id = `${names[nameIndex]}btn`;
        element.textcontent = names[nameIndex];

        ul.appendChild(element);
    }

    nav.appendChild(ul);
    ul.appendChild(selector);
    content.appendChild(nav);
    
    console.log(content);
    console.log(nav);
}) ();