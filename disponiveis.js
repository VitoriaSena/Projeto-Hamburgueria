document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8080/produtos')
        .then(response => response.json())
        .then(data => {
            const containerTop = document.getElementById('container-top');
            const containerBottom = document.getElementById('container-bottom');

            data.forEach(produto => {
                const div = document.createElement('div');
                div.setAttribute('data-name', produto.name);

                const img = document.createElement('img');
                img.classList.add('allimg');
                img.src = `./img/${produto.name.replace(/\s+/g, '_')}.png`;
                img.alt = `Imagem de ${produto.name}`;
                if (produto.quantidade <= 0) {
                    img.classList.add('unavailable');
                }

                const h3 = document.createElement('h3');
                h3.classList.add('NomeH');
                h3.textContent = produto.name;

                const span = document.createElement('span');
                span.classList.add('preco');
                span.textContent = produto.price;

                const button = document.createElement('button');
                button.classList.add('botão');
                button.textContent = '+';

                const p = document.createElement('p');
                p.classList.add('paragrafos');
                p.textContent = produto.description;

                div.appendChild(img);
                div.appendChild(h3);
                div.appendChild(span);
                div.appendChild(button);
                div.appendChild(p);

                if (containerTop.children.length < 3) {
                    containerTop.appendChild(div);
                } else {
                    containerBottom.appendChild(div);
                }
            });
        })
        .catch(error => console.error('Erro ao buscar produtos:', error));
});