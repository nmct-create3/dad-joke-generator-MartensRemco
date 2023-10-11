const generateJokeButton = document.querySelector(".js-button");
const jokeDisplay = document.querySelector(".js-joke");
const jokeLoader = document.querySelector(".js-joke-loader");

let loadingDelay


generateJokeButton.addEventListener("click", fetchJoke);

/*const fetchJoke = async () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => response.json())
}


const displayJoke = async () => {
    const {joke} = await fetchJoke();
    jokeDisplay.innerHTML = joke;
}


const init = function () {
    console.log('script loaded');
    displayJoke();
}*/
const ShowLoader = function () {
    loadingDelay = setTimeout(() => {
        jokeLoader.classList.remove("u-hidden");
    }, 500);
    jokeLoader.classList.add("u-hidden");
}
const RemoveLoader = function () {
    if(loadingDelay){
        clearTimeout(loadingDelay);
        loadingDelay = null;
    }
    jokeLoader.classList.add("u-hidden");
    jokeLoader.classList.remove("u-hidden");
}
function showLoader() {
    jokeLoader.classList.remove("u-hidden");
}

function hideLoader() {
    jokeLoader.classList.add("u-hidden");
}

function fetchJoke() {
    const apiUrl = "https://icanhazdadjoke.com/";

    showLoader(); 
    jokeDisplay.textContent = ""; 

    fetch(apiUrl, {
        headers: {
            "Accept": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const jokeText = data.joke;
            jokeDisplay.textContent = jokeText;
        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
        })
        .finally(() => {
            hideLoader();
        });
}

init();