import './pages/navbar'
import './pages/menu';
import './pages/home';
import './pages/about';
import './events';
import './reset.css';
import './style.css';

const makeCredits = (function() {
    const body = document.querySelector('body');
    const credits = document.createElement('span');
    const cr1 = document.createElement('p');

    credits.id = 'credits';
    cr1.textContent = 'Background image by Emre Can Acer | Menu content from 2Ten Coffee Roasters | © AshkanArabim';

    credits.appendChild(cr1);
    body.appendChild(credits);
}) ();