const makeHome = (function() {
    const base = document.createElement('div');
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const desc = document.createElement('p');
    const desc2 = document.createElement('p');
    
    base.classList.add('home', 'showpage');
    
    h1.textContent = 'AshCafé';
    desc.textContent = "Good day, sir or ma'am; here, we're happy to take yo money and serve you the best coffee found in this beautiful city. If fact, we think we are so good that we'll happily give you a Benjamin if you bring someone here who leaves unsatisfied!"
    desc2.textContent = "Use these quick links on the top of the page to get started!"

    base.appendChild(container);
    container.appendChild(h1);
    container.appendChild(desc);
    container.appendChild(desc2);
    document.querySelector('body').appendChild(base);
}) ();