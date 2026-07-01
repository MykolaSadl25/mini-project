const URL = "https://pixabay.com/api/";
const API_KEY = "55978698-0d602613e63391cce9d7defd1";

const listRef = document.querySelector(".gallery");
const formRef = document.querySelector(".search-form");
const endPoint = document.querySelector(".element")
const limit = 12;
let page = 1
let search = ""


async function getImages(search,page) {
  const res = await fetch(`${URL}?key=${API_KEY}&q=${search}&image_type=photo&page=${page}&per_page=${limit}`)
  const images = await res.json();
  return images;
}

formRef.addEventListener("submit",async (e)=>{
    e.preventDefault()
    search = e.currentTarget.elements.query.value;
    const res = await getImages(search,page)
    createItems(res.hitsn)
    
})

function createItems(array) {
  const item = array.map(({tags,webformatURL,largeImageURL,likes,views,comments,downloads,}) => {
      return `<li class="photo-card">
  <img src="${webformatURL}" alt="${tags}" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</li>`}).join("");
listRef.insertAdjacentHTML("beforeend",item)
}


const observer = new IntersectionObserver((entry)=>{
    entry.forEach( async e=>{
        if (e.isIntersecting && search !== "") {
            page+=1
            const res = await getImages(search, page)
            await createItems(res.hits)
        }
    })
},{
    rootMargin:"200px"
})

observer.observe(endPoint)