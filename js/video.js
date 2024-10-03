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

// const videoDemo = {
//     category_id: "1003",
//     video_id: "aaac",
//     thumbnail: "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     title: "Laugh at My Pain",
//     authors: [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     others: {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     description: "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }



const loadVideoDisplay = (videos) => {
    const videosContainer = document.getElementById('video')
    videos.forEach((video) => {
        const divContainer = document.createElement('div')
        divContainer.classList = 'card card-compact'
        divContainer.innerHTML = `
        <figure class="h-[200px] relative">
    <img class="h-[90%] object-cover rounded-xl"
      src="${video.thumbnail}"
      alt="" />
    ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-3 bg-black rounded-xl p-1 text-white">${video.others.posted_date}</span>` }

      
  </figure>
  <div class="p-0 py-2 flex item-center gap-3">
    <div class="w-8">
    <img class="w-full object-cover rounded-full" src=${video.authors[0].profile_picture} >
    
    </div>

    <div class="font-bold ">
    <h2>${video.title}</h2>
    <div class= "flex item-center gap-2"> <p class="text-gray-600 font-normal text-[14px]">${video.authors[0].profile_name}</p> 
    
    ${video.authors[0].verified == true ? `<img class="w-4 " src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000">` : ''}
    </div>
    
    </div>
    
  </div>
        `
        videosContainer.appendChild(divContainer)
    })
}
loadVideos()
