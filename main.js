const wrapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data =>{
        render(data)
      })
      .catch(error => console.error("xatolik yuz berdi",error));
      function render(users){
        const cards = users.map(el =>`
             <div class="card">
                  <img src="https://picsum.photos/id/${el.id + 10}/600/200" alt="food">
                   <h1>${el.title}</h1>
                    <p>@${el.url}</p>
                   <a href="mailto:${el.thumbnailUrl}">${el.thumbnailUrl}</a>
                </div>
            `).join("");
            wrapper.innerHTML = cards;
            
      }
      