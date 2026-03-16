const url = "https://jsonfakery.com/movies/paginated"

const popup = document.querySelector(".popup");
const popupImg = document.querySelector("#popup-img");
const close = document.querySelector("#close");
const title = document.querySelector(".title");
const description = document.querySelector("#desc")

let allmovies = [];
let container, card;

function displayMovies(movies) {
    container = document.querySelector("#movies");
    container.innerHTML = ''; // Clear existing content
    movies.forEach(movie => {
        card = document.createElement("div");
        card.innerHTML = `<img src="${movie.poster_path}" width="200px"><br>
        <p>${movie.original_title}</p>`;

        const imgElement = card.querySelector("img");
        imgElement.addEventListener("click", () => openPopup(movie));

        container.appendChild(card);
    });
}

function openPopup(movie) {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent background scroll
    popupImg.src = movie.poster_path;
    title.innerHTML = movie.original_title;
    description.innerHTML = `${movie.overview} <br> Release date:- ${movie.release_date} <br> Rating:- ${movie.vote_average}`;
}

async function getdata(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        allmovies = data.data; // Populate allmovies with fetched data
        displayMovies(allmovies);
    } catch (error) {
        alert("Something went wrong");
        console.log("Error!!something went wrong", error);
    }
}

getdata(url);

const search = document.querySelector("#search");

search.addEventListener("input", () => {
    const searchvalue = search.value.toLowerCase();
    const filteredmovies = allmovies.filter((items) => items.original_title.toLowerCase().includes(searchvalue));
    displayMovies(filteredmovies);
});

function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "auto"; // restore page scroll
}

close.addEventListener("click", closePopup);

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        closePopup();
    }
});












// const container = document.querySelector("#movies");
//     const cachedData = localStorage.getItem('moviesData');

//     if (cachedData) {
//         const data = JSON.parse(cachedData);
//         displayMovies(data, container);
//     } else {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);
//             localStorage.setItem('moviesData', JSON.stringify(data));
//             displayMovies(data, container);
//         } catch (error) {
//             console.log(error);
//         }
//     }
