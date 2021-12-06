const key = "e1e16497";
const apiurl = "https://www.omdbapi.com/?apikey=" + key;
const form = document.getElementById("form");
const search = document.getElementById("Movie");
const main = document.getElementById("main");
var data = "";

async function getdata(url) {
    const response = await fetch(url);
    data = await response.json();

    let result  = data.Response;
    if (result == "False" && data.Error == "Movie not found!") {
        const div = document.createElement('div')
        div.style.width = "400px";
        div.style.height = "30px";
        div.style.color = "white";
        div.innerHTML = "NO MOVIE FOUND!";
        alert("NO MOVIE FOUND!")

        document.getElementById("main").appendChild(div);

    }
    if (result == "False" && data.Error == "Too many results.") {
        const div = document.createElement('div')
        div.style.width = "400px";
        div.style.height = "30px";
        div.style.color = "white";
        div.innerHTML = "Too many results....";
        alert("Too many results....")

        document.getElementById("main").appendChild(div);

    }
    else {
        var i = 0;
        data.Search.forEach(element => {
            const div = document.createElement('div')
            const anc = document.createElement('a');
            const image = document.createElement('img');
            div.style.color = "white";
            div.innerHTML = element.Title;
            image.src = element.Poster;
            var ref = apiurl + "&t=" + element.Title;
            ref = ref.replace(' ', '+');
            anc.href = "./html/result.html";
            i = i + 1;
            image.setAttribute('id', i);
            div.appendChild(anc);
            anc.appendChild(image);
            document.getElementById("main").appendChild(div);
        });
    }
}

var searchUrl = "";
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    var searchTerm = search.value;
    searchTerm = searchTerm.replace(' ', '+');

    if (searchTerm) {
        searchUrl = apiurl + "&s=" + searchTerm
        getdata(searchUrl);
        search.value = "";
    }
});


const the = document.querySelector('main');
the.addEventListener("click", movieSelect, false);


function movieSelect(e) {
    if (e.target != e.currentTarget) {
        var clicked = e.target.id;
        localStorage.setItem("Title", data.Search[clicked - 1].Title);

    }
}
