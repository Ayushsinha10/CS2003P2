var array2 = [];
var movies = document.createElement("div");
var durationdiv = document.createElement("div");
function Item(movie){
    const item = document.createElement("li");

    const Title = document.createElement("button");
    Title.classList.add('Movies');
    let hours = Number(movie.duration)/60;
    hours = ~~hours;
    let minuets = Number(movie.duration)%60;
    Title.textContent = `${movie.movie_title}(${movie.director_name},${movie.title_year},${hours}:${minuets})`;
    Title.onclick = function logs(){
        log(Title, movie);

    }
   
   
    item.appendChild(Title);
  
    return item
}

 function log(Title, movie) { 
        
        const listelement2 = document.querySelector("#Movie_Queue");
     

        const item = document.createElement("li");
           item.appendChild(Title);
          if (!array2.includes(movie)){
            const buffer = item;
            listelement2.appendChild(buffer);
           
            array2.push(movie);
        
          }
          else {
            const listelement = document.querySelector("#Movie_List");
            listelement.appendChild(Item(movie))
            let arr3 = [];
            for (let i = 0; i < array2.length; i++){
                
                if (array2[i] != movie) {
                    arr3.push(array2[i]);
                }
            }
            array2 = arr3;
          }
        
          const listelement = document.querySelector("#Movie_List");
          let cn1 = listelement.childNodes;
          for (let i = 0; i < cn1.length; i++) {
              if(cn1[i].childNodes.length == 0){
                  listelement.removeChild(cn1[i])
              }
  
          }
          let cn2 = listelement2.childNodes;
          for (let i = 0; i < cn2.length; i++) {
              if(cn2[i].childNodes.length == 0){
                  listelement2.removeChild(cn2[i])
              }
  
          }
          metadata(listelement2)
    }
    function Duration(){
        let duration = 0;
        for (let i = 0; i < array2.length; i++){
            duration += Number(array2[i].duration);
            
        }
        let hours = duration/60;
        hours = ~~hours;
        let minuets = duration%60;
        arr = [];
        arr.push(hours)
        arr.push(minuets);
        return arr;
    }

window.onload = function() {
    const listelement = document.querySelector("#Movie_List");
    const array = JSON.parse(jsonData)
    for (let i = 0; i < array.length; i++){
        let currentMovie = array[i];
        listelement.appendChild(Item(currentMovie))

        
    } 
    
    let test = document.getElementsByClassName("Movies");
    test[0].click();
    test[6].click();
    test[29].click();   
    test[74].click();
    
       

   
 

    
}
function metadata(listelement2){
    let arr = Duration();
    durationdiv.textContent =`Total duration: ${arr[0]}:${arr[1]}`
    movies.textContent = `Number of movies: ${array2.length}`
    listelement2.appendChild(movies);
    listelement2.appendChild(durationdiv);

}