// Crate loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}


// Create displayCategories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container')
    categories.forEach((item) => {
        const button = document.createElement('button')
        button.classList = 'btn'
        button.innerText = item.category
        categoriesContainer.appendChild(button)
    })
}
loadCategories()


// Create loadVideos

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => loadVideoDisplay(data.videos))
        .catch(error => console.log(error))
}
// Video Objects

const videoDemo = {
    category_id: "1003",
    video_id: "aaac",
    thumbnail: "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
    title: "Laugh at My Pain",
    authors: [
        {
            "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
            "profile_name": "Kevin Hart",
            "verified": false
        }
    ],
    others: {
        "views": "1.1K",
        "posted_date": "13885"
    },
    description: "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
}



const loadVideoDisplay = (videos) => {
    const videosContainer = document.getElementById('video')
    videos.forEach((video) => {
        const divContainer = document.createElement('div')
        divContainer.classList = 'card card-compact'
        divContainer.innerHTML = `
        <figure>
    <img
      src="${video.thumbnail}"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `
        videosContainer.appendChild(divContainer)
    })
}
loadVideos()
