const wrapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data =>{
        render(data)
      })
      .catch(error => console.error("xatolik yuz berdi",error));
      function render(users){
        const cards = users.map(el =>`
             <div class="card">
                  <img src="https://picsum.photos/id/${users.id + 10}/200/200" alt="food">
                   <h1>${el.name}</h1>
                    <p>@${el.username}</p>
                   <a href="mailto:${el.email}">${el.email}</a>
                </div>
            `).join("");
            wrapper.innerHTML = cards;
            
      }
      