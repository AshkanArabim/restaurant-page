const makeAbout = (function() {
    const div = document.createElement('div');
    const title = document.createElement('h1');

    div.appendChild(title);
    title.textContent = 'about';
    document.querySelector('body').appendChild(div);

    div.classList.add('about');
}) ();