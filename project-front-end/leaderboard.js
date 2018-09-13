function getAllGames(){
  return fetch('http://localhost:3000/api/v1/games')
    .then(resp=>resp.json())
    .then(sortGames)
}
function sortGames(games){
  games.sort(function(a, b){
    if (b.score < a.score)
      return -1;
    if (b.score > a.score)
      return 1;
    return 0;
  })
  console.log(games)
}

document.addEventListener('DOMContentLoaded', () => {

  let elements = []
  let container = document.querySelector('#container')
  // Add each row to the array
  container.querySelectorAll('.row').forEach(el => elements.push(el))
  // Clear the container
  container.innerHTML = ''
  // Sort the array from highest to lowest
  elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
  // Put the elements back into the container
  elements.forEach(e => container.appendChild(e))
})



getAllGames()
