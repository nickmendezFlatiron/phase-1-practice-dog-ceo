
//prints images to DOM
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded' ,() => {
  fetch(imgUrl)
    .then(res => res.json())
    .then(obj => {
      let pics = obj.message
      pics.forEach(img => {
        let dogPics = document.querySelector('#dog-image-container')
        let picture = document.createElement('img')
        picture.src = img
        dogPics.appendChild(picture)
      })
    })
  } 
)


//prints list of breeds
//change font color of clicked on li
//filters breeds depending on the drop down value
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded' ,() =>{
  fetch(breedUrl)
    .then(res => res.json())
    .then(obj => { 
      let breeds = obj.message
      breeds = Object.keys(breeds)
     // console.log(breeds)
     let breeding = []
      breeds.forEach(breed => {
        let breedList = document.querySelector('#dog-breeds')
        let li = document.createElement('li')
       
        li.innerText = breed
        breedList.appendChild(li)
        breeding.push(breed)
        console.log(breeding)
        li.classList = `${breed.charAt(0)}`
        li.addEventListener('click', () => {
          li.style.color = '#66ddaa'
        })
        const dropDown = document.querySelector('#breed-dropdown')
        dropDown.addEventListener('change', e => {
        breedList.innerHTML = ''
        breeding.forEach(element =>{
          if(element.charAt(0) === e.target.value){
            let breedList = document.querySelector('#dog-breeds')
            let li = document.createElement('li')
            li.innerText = element
            breedList.appendChild(li)
          }
        })
      })
      })
    })
  }
)