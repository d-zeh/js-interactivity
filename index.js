console.log('hello world')



let addMovie = event => {
    event.preventDefault();

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    document.querySelector('ul').appendChild(movie)

}

 let form = document.querySelector('form')
 form.addEventListener('submit',addMovie)