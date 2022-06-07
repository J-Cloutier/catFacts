//Example fetch using pokemonapi.co
document.querySelector('.glow-on-hover').addEventListener('click', getFetch)

fetch(`https://api.thecatapi.com/v1/images/search`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].url)
        document.querySelector('img').src = data[0].url
      })

      .catch(err => {
          console.log(`error ${err}`)
      });



function getFetch(){
  const url = `https://catfact.ninja/fact`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.fact
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}

