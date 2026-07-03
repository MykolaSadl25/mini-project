var e={};e=(function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return r(t[a][1][e]||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n,a,s,c,l,u,d,f=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),a=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(s=o('\n		<div class="basicLightbox '.concat(a.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=r(c,"IMG"),u=r(c,"VIDEO"),d=r(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===u&&s.classList.add("basicLightbox--video"),!0===d&&s.classList.add("basicLightbox--iframe"),s),m=function(e){var n;return!1!==t.onClose(v)&&(n=function(){if("function"==typeof e)return e(v)},f.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(f)||f.parentElement.removeChild(f),n()},410),!0)};!0===t.closable&&f.addEventListener("click",function(e){e.target===f&&m()});var v={element:function(){return f},visible:function(){return i(f)},show:function(e){var n;return!1!==t.onShow(v)&&(n=function(){if("function"==typeof e)return e(v)},document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),n()})},10),!0)},close:m};return v}},{}]},{},[1])(1);let t=document.querySelector(".gallery"),n=document.querySelector(".search-form"),o=document.querySelector(".element"),r=1,i="",a=null;async function s(e,t){let n=await fetch(`https://pixabay.com/api/?key=55978698-0d602613e63391cce9d7defd1&q=${e}&image_type=photo&page=${t}&per_page=12`);return await n.json()}function c(e){let n=e.map(({tags:e,webformatURL:t,largeImageURL:n,likes:o,views:r,comments:i,downloads:a})=>`<li class="photo-card">
  <img src="${t}" alt="${e}" data-src="${n}"/>
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${o}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${r}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${i}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${a}
    </p>
  </div>
</li>`).join("");t.insertAdjacentHTML("beforeend",n)}function l(e){"Escape"===e.code&&(a.close(),a=null)}n.addEventListener("submit",async e=>{e.preventDefault(),i=e.currentTarget.elements.query.value,c((await s(i,r)).hits)}),new IntersectionObserver(e=>{e.forEach(async e=>{if(e.isIntersecting&&""!==i){r+=1;let e=await s(i,r);await c(e.hits)}})},{rootMargin:"200px"}).observe(o),t.addEventListener("click",t=>{if("IMG"!==t.target.nodeName)return;let n=t.target.dataset.src;(a=e.create(`
    <div class="modal">
       <img src="${n}" alt="#"/>
    </div>
`)).show(),a&&window.addEventListener("keydown",l)}),a||window.removeEventListener("keydown",l);
//# sourceMappingURL=mini-project.3c0b62e8.js.map
