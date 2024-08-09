const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                       <img src = "${user.avatarUrl}" alt  = "Foto do perfil do usuário" /> 
                                       <div class = "data">
                                          <h1> ${user.name ?? "Não possui nome cadastrado 😢"} </h1>
                                          <p> ${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                          <p> ${user.login ?? "Não possui login cadastrado 😢"}</p>
                                          <p class = "seguidores">👥 ${user.followers ?? "Não possui seguidores 😢"} seguidores</p>
                                          <p class = "seguidores">✔️ ${user.following ?? "Não está seguindo ninguém 😢"} seguindo </p>
                                       </div>
                                  </div> `

    let repositoriesItens = ""

    user.repositories.forEach(repo => repositoriesItens +=   `<li>
                                                                  <a href="${repo.html_url}" target = "_blank">${repo.name}
                                                                  <div class="information">
                                                                    <p> 👀${repo.watchers} </p>
                                                                    <p> 🍽️${repo.forks} </p>
                                                                    <p> ✨${repo.stargazers_count} </p> 
                                                                    <p> 🎇${repo.language ?? "indefinido"} </p>
                                                                  </div>
                                                                  </a>
                                                              </li>`
)
   if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class = "repositories section"> 
                                        <h2>Repositórios</h2> 
                                        <ul>${repositoriesItens}</ul>
                                     </div>`
}

    let eventsItens = ""

    user.events.forEach(event => {
      
        const eventName = event.repo.name
        const eventCommits = event.payload.commits
        
        if (event.type === "PushEvent") {
           eventCommits.forEach(msg => {
            const eventMsg = msg.message
                                           eventsItens +=
                                                       `<li> 
                                                         <p><span>${eventName}</span> - ${eventMsg}</p> 
                                                        </li>`
  }
 )
} else if (event.type === "CreateEvent") {
                                           eventsItens +=
                                                      `<li>
                                                         <p><span>${eventName}</span> - não há commits</p>
                                                       </li>`
  }
 }
) 
      if (user.events.length > 0) {
          this.userProfile.innerHTML += `<div class = "events">
                                            <h3>Eventos</h3>
                                            <ul>${eventsItens}</ul>
                                         </div>`

}else { 
      this.userProfile.innerHTML += `<div class = "events">
                                            <h3>Eventos</h3>
                                              <ul>
                                                <li>Sem eventos</li>
                                              </ul>
                                     </div>`
 }
},
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
}

export { screen }
























