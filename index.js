console.log('hello world')

let message = document.querySelector('#message')



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
    revealMessage();
    message.textContent= `${event.target.parentNode.firstChild.textContent} Deleted`
    
 } 


 let crossOffMovie = event => {
     event.target.classList.toggle('checked')

     if(event.target.classList.contains('checked') === true ){
        message.textContent= `${event.target.textContent} Watched`
     } else {
        message.textContent= `${event.target.textContent} Added Back`
     }

     revealMessage();
     
 }

 let revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
 }