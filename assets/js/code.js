let url
let url_api = "https://rickandmortyapi.com/api/character"//endpoint, personajes
let url_locations = "https://rickandmortyapi.com/api/location" //endpoint, location
let url_episodes = "https://rickandmortyapi.com/api/episode"//endpoint, episodes

function personajes() {
    url = fetch(url_api)
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ''
    url.then(res => res.json())//convierte en json
        .then(data => {
            console.log(data)
            for (const miguel of data.results) {
                contenido.innerHTML += `
                <div class = "col-4">
                <div class="card">
                <img src="${miguel.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${miguel.name}</h5>
                    <h5 class="card-title">Estado: ${miguel.status}</h5>
                    <h5 class="card-title">Origen: ${miguel.origin.name}</h5>
                    <h5 class="card-title">Número de episodios donde aparece: ${miguel.episode.length}</h5>
                </div>
                </div>
                </div>`
            }
        }).catch(error => console.log(error))
}

function locations() {
    url = fetch(url_locations)
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ''
    url.then(res => res.json())//convierte en json
        .then(data => {
            console.log(data)
            for (const miguel of data.results) {
                contenido.innerHTML += `<div class ="col-4">
                <h5>Nombre: ${miguel.name}</h1>
                <h5>Estado: ${miguel.status}</h5>
                <h5>Origen: ${miguel.type}</h5> <br><br><br>
                </div>`
            }
        }).catch(error => console.log(error))
}

function episodes() {
    url = fetch(url_episodes)
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ''
    url.then(res => res.json())//convierte en json
        .then(data => {
            console.log(data)
            for (const miguel of data.results) {
                contenido.innerHTML += `<div class ="col-4">
                <h5>Episodio numero: ${miguel.id}</h5>
                <h5>Nombre: ${miguel.name}</h5>
                <h5>Estado: ${miguel.air_date}</h5>
                <h5>Origen: ${miguel.episode}</h5>
                <h5>Cantidad de personajes que aparecen: ${miguel.characters.length}</h5> <br><br><br>
                </div>`
            }
        }).catch(error => console.log(error))
}

function buscar() {
    let palabra = document.getElementById("consulta").value
    if (document.getElementById("consulta").value == null) {
        console.log("error")
    } else {
        url = fetch(url_api + "?name=" + palabra)
        let contenido = document.getElementById("contenido")
        contenido.innerHTML = ''
        url.then(res => res.json())//convierte en json
            .then(data => {
                console.log(data)
                for (const miguel of data.results) {
                    contenido.innerHTML += `
            <div class = "col-4">
            <div class="card">
            <img src="${miguel.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${miguel.name}</h5>
                <h5 class="card-title">Estado: ${miguel.status}</h5>
                <h5 class="card-title">Origen: ${miguel.origin.name}</h5>
                <h5 class="card-title">Número de episodios donde aparece: ${miguel.episode.length}</h5>
            </div>
            </div>
            </div>`
                }
            }).catch(error => console.log(error))
    }
}

function paginacion(pagina) {
    url = fetch(url_api + "?page=" + pagina)
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ''
    url.then(res => res.json())//convierte en json
        .then(data => {
            console.log(data)
            for (const miguel of data.results) {
                contenido.innerHTML += `
                <div class = "col-4">
                <div class="card">
                <img src="${miguel.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${miguel.name}</h5>
                    <h5 class="card-title">Estado: ${miguel.status}</h5>
                    <h5 class="card-title">Origen: ${miguel.origin.name}</h5>
                    <h5 class="card-title">Número de episodios donde aparece: ${miguel.episode.length}</h5>
                </div>
                </div>
                </div>`
            }
        }).catch(error => console.log(error))
}
paginacion(1)




