function Item(movie){
    const item = document.createElement("li");

    const Title = document.createElement("div");
    Title.textContent = `Title: ${movie.movie_title}`;
    item.appendChild(Title);
    return item
}
window.onload = function() {
    const listelement = document.querySelector("#Movie_List");
    const array = JSON.parse(jsonData)
    for (let i = 0; i < array.length; i++){
        let currentMovie = array[i];
        listelement.appendChild(Item(currentMovie))
    }
}