const makeNavbar = (function() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const selector = document.createElement('div');
    selector.classList.add('selector');
    
    const names = ['menu','home','about'];
    for(let nameIndex in names) {
        window[names[nameIndex]] = document.createElement('li');
        window[names[nameIndex]].id = `${names[nameIndex]}btn`;
        window[names[nameIndex]].textcontent = names[nameIndex];
        
        ul.appendChild(window[names[nameIndex]]);
    }
    
    content.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(selector);
}) ();