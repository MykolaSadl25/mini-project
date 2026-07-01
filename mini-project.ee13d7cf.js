let e=document.querySelector(".gallery"),t=document.querySelector(".search-form"),a=document.querySelector(".element"),s=1,i="";async function c(e,t){let a=await fetch(`https://pixabay.com/api/?key=55978698-0d602613e63391cce9d7defd1&q=${e}&image_type=photo&page=${t}&per_page=12`);return await a.json()}function n(t){let a=t.map(({tags:e,webformatURL:t,largeImageURL:a,likes:s,views:i,comments:c,downloads:n})=>`<li class="photo-card">
  <img src="${t}" alt="${e}" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${s}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${i}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${c}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${n}
    </p>
  </div>
</li>`).join("");e.insertAdjacentHTML("beforeend",a)}t.addEventListener("submit",async e=>{e.preventDefault(),i=e.currentTarget.elements.query.value,n((await c(i,s)).hitsn)}),new IntersectionObserver(e=>{e.forEach(async e=>{if(e.isIntersecting&&""!==i){s+=1;let e=await c(i,s);await n(e.hits)}})},{rootMargin:"200px"}).observe(a);
//# sourceMappingURL=mini-project.ee13d7cf.js.map
