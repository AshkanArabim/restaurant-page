const makeAbout = (function() {
    const base = document.createElement('div');
    const container = document.createElement('div')
    const h1 = document.createElement('h1');
    const aboutContent = [
        "I remember when I was a child, I always wanted to serve coffee. I used to serve coffee to every man I saw crossing by our shantytown. See, I am self built. I realized that I can make so much money doing the thing I enjoyed the most. I started charging people for it. At first, they hated me for doing such an inhumane thing, but the moment they tasted my coffee, they absolutely loved it. My coffee was so good, if fact, that some of my customers experienced withdrawal syndromes when I closed on Saturday and Sunday mornings.",
        "Many people ask about what makes my coffee so good, and I can only tell them that it’s a secret ingredient. In fact, it’s so secret that not even the police should know about it. If they do, they’ll want to take it all for themselves. The ingredient is so amazing that I have to order it at very high prices from South American countries; because the weather over here isn’t very good for its growth; or at least that’s what I’ve heard. ",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id nemo maiores magnam voluptatibus sequi nobis voluptatum ullam possimus fugit reiciendis odio quis tenetur, fuga amet earum quos cumque enim, maxime modi? Consequuntur dolor accusamus accusantium expedita temporibus esse ipsam voluptatem similique vitae. Odio sint temporibus corporis voluptates ducimus reprehenderit odit laudantium, molestiae repellendus error doloremque, earum quidem debitis nulla! Debitis dignissimos provident illum quae modi quo hic omnis quas earum. Impedit, dignissimos exercitationem accusantium aspernatur eos nulla, corporis iure deleniti qui optio doloremque perferendis possimus architecto ad cumque nesciunt. Corrupti assumenda placeat nesciunt dolor a vero odio nam labore?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos architecto minus quis, quos modi alias in labore odio? Cupiditate impedit eos repudiandae blanditiis molestias earum quis, inventore quam qui distinctio nemo, odio harum nulla soluta molestiae ducimus. Cum iure atque aperiam eaque quidem facere corporis, ab veritatis voluptate ea, asperiores aliquam quod tenetur quo molestiae impedit suscipit sapiente voluptatum. Saepe quos velit accusamus, deleniti ea recusandae quaerat placeat repellendus vel, accusantium, esse hic voluptatum! Modi dolores delectus necessitatibus, exercitationem voluptate tempora a soluta repellat totam magni sed earum. Laboriosam corporis praesentium, cum quia cumque voluptatibus. Fuga nulla molestias ipsam.",
        "I really like my business and I hope you do too!",
    ]

    container.classList.add('title')
    base.classList.add('about', 'showpage');
    
    h1.textContent = 'A short history lesson';

    base.appendChild(container);
    container.appendChild(h1);

    for (let paraIndex in aboutContent) {
        p = document.createElement('p');
        p.textContent = aboutContent[paraIndex];
        container.appendChild(p);
    }
    
    document.querySelector('body').appendChild(base);
}) ();