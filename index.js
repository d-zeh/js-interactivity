console.log('hello world')



let addMovie = event => {
    event.preventDefault();

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener("click", crossOffMovie);


    movie.appendChild(movieTitle)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

 let form = document.querySelector('form')
 form.addEventListener('submit',addMovie)


 let deleteMovie = event => {
    event.target.parentNode.remove();
 }


 let crossOffMovie = event => {
     event.target.classList.toggle('checked')
 }