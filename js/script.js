// $ CONSEGNA

// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// * Non è necessario creare date casuali, inventatele
// * Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash 
// * (https://unsplash.it/300/300?image=3)

// # Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// # Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter 
// dei likes relativo.

// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali 
//  dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il
// contatore e cambiare il colore del bottone.

// # Consigli del giorno:
//  Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!



// $ -----------------------------------------------------------------------
// $ SVOLGIMENTO
// $ -----------------------------------------------------------------------

// # MILESTONE 1

// Creiamo un array di post

const createPost = (id, author, photo, date, description, image, likesNuber) => {
    const newPost = {
        "id": id,
        "author": author,
        "photo": photo,
        "date": date,
        "description": description,
        "image": image,
        "likesNumber": likesNuber,
    }

    return newPost;
}

const postsList = [
    { "id": 0, "author": 'Tunnuzzoo', "photo": 'https://unsplash.it/300/300?image=3', "date": '21/04/2021', "description": 'description', "image": 'https://unsplash.it/300/300?image=170', "likesNumber": 23 },
    { "id": 0, "author": 'Instafraa', "photo": 'https://unsplash.it/300/300?image=2', "date": '21/04/2021', "description": 'description', "image": 'https://unsplash.it/300/300?image=171', "likesNumber": 89 },
    { "id": 0, "author": 'cavallo pazzo', "photo": 'https://unsplash.it/300/300?image=1', "date": '12/01/2013', "description": 'description', "image": 'https://unsplash.it/300/300?image=172', "likesNumber": 124 },
];

// # Milestone 2

const postsContainer = document.getElementById('container');


for (let i = 0; i < postsList.length; i++) {
    const currentPost = postsList[i];

    currentPost["id"] = i + 1;

    const newDate = changeDate(currentPost["date"]);

    let postInsert = `
        <div id="${currentPost["id"]}" class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${currentPost["photo"]} alt="Phil Mangione" />
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${currentPost["author"]}</div>
                        <div class="post-meta__time">${newDate}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${currentPost["description"]}</div>
            <div class="post__image">
                <img src=${currentPost["image"]} alt=${currentPost["photo"]} />
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <button id="btn-${currentPost["id"]}" class="like-button js-like-button" data-postid="${currentPost["id"]}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </button>
                    </div>
                    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${currentPost["likesNumber"]}</b> persone
                    </div>
                </div>
            </div>
        </div>
    `;

    postsContainer.innerHTML += postInsert;
}

// # MILESTONE 3

const buttons = document.querySelectorAll('.js-like-button');
const likes = document.querySelectorAll('.js-likes-counter');

for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];

    currentButton.addEventListener('click', (event) => {

        if (currentButton.classList.contains('clicked')) {
            // Qui bersagliamo il post all'i-esima posizione che corrisponde proprio a post legato al button
            // sul quale sto definendo l'addEventListener
            let currentPost = postsList[i];

            // Decremento il numero di likes, questo però è fatto SOLO nell'array ma non in pagina
            currentPost["likesNumber"]--;

            // Decremento il numero di likes in pagina
            likes[i].innerHTML = currentPost["likesNumber"];

            //Elimina l'effetto di click sul bottone (Mostra il bordo e colora il testo)
            currentButton.classList.remove('clicked');
        } else {
            //Aggiunge l'effetto di click sul bottone (Mostra il bordo e colora il testo)
            currentButton.classList.add('clicked');

            // Qui bersagliamo il post all'i-esima posizione che corrisponde proprio a post legato al button
            // sul quale sto definendo l'addEventListener
            let currentPost = postsList[i];

            // Incremento il numero di likes, questo però è fatto SOLO nell'array ma non in pagina
            currentPost["likesNumber"]++;

            // Incremento il numero di likes in pagina
            likes[i].innerHTML = currentPost["likesNumber"];
        }
    })
}

function changeDate(date) {
    let americanDate = '';

    const day = date[0] + date[1] + date[2];
    const mounth = date[3] + date[4] + date[5];
    const year = date[6] + date[7] + date[8] + date[9];

    return americanDate = mounth + day + year;
}

