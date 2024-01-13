console.log('hello world')



let addMovie = event => {

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
}