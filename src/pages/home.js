const makeHome = (function() {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const about = document.createElement('p');

    div.appendChild(title);
    div.appendChild(about);
    title.textContent = 'This is a nice restaurant';
    about.textContent = "C'mon n' give us yo money. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, illo.";
    content.appendChild(div);

    div.classList.add('home','showpage');
}) ();