const url = "https://jsonfakery.com/movies/paginated"

let allmovies=[];
function displayMovies(movies) {
    const container = document.querySelector("#movies");
    container.innerHTML = ''; // Clear existing content
    movies.forEach(movie => {
        let card = document.createElement("div");
        card.innerHTML = `<img src="${movie.poster_path}" width="200px"><br>
        <p>${movie.original_title}</p>`;
        container.appendChild(card);
    });
}

async function getdata(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        allmovies = data.data; // Populate allmovies with fetched data
        displayMovies(allmovies);
    } catch (error) {
        alert("Something went wrong");
        console.log("Error!!something went wrong",error);
    }
}

getdata(url);

const search=document.querySelector("#search");

search.addEventListener("input",()=>{
    const searchvalue=search.value.toLowerCase();
    const filteredmovies=allmovies.filter((items)=>items.original_title.toLowerCase().includes(searchvalue));
    displayMovies(filteredmovies);
})













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