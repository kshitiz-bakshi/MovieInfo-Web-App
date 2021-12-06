const key = "e1e16497";
const apiurl = "https://www.omdbapi.com/?apikey=" + key;
const title = localStorage.getItem("Title");
var searchUrl = apiurl + "&t=" + title;
searchUrl = searchUrl.replace(' ', '+');
localStorage.removeItem("Title");

getdata(searchUrl);
async function getdata(url) {
    // console.log(url)
    const response = await fetch(url);
    const data = await response.json();

    var res = data.Response;
    // console.log(res);
    const div = document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('h1');

    div.style.color = "white";
    div.setAttribute('class','image');
    image.src = data.Poster;
    div.appendChild(text);
    div.appendChild(image);
    text.innerHTML = data.Title;
    // console.log(data.Title);
    document.getElementById("main").appendChild(div);
    


    const a = document.getElementById('Genre');
    a.innerHTML='<b>Genre</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Genre;
    const b = document.getElementById('Released');
    b.innerHTML='<b>Released </b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Released;
    const c = document.getElementById('Rated');
    c.innerHTML='<b>Rated</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Rated;
    const d = document.getElementById('imdbRating');
    d.innerHTML='<b>imdbRating</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.imdbRating;
    const e = document.getElementById('Director');
    e.innerHTML='<b>Director</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Director;
    const f = document.getElementById('Writer');
    f.innerHTML='<b>Writer</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Writer;
    const g = document.getElementById('Actors');
    g.innerHTML='<b>Actors</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ' + data.Actors;

    const plot = document.getElementById('plot');
    plot.innerHTML="<b>Plot : </b>" + data.Plot;

    const anc = document.getElementById('imdb');
    anc.href="https://www.imdb.com/title/"+data.imdbID;


}
