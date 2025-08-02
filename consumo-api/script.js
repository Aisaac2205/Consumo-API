const apiKey = "0eddb09e10msh80019c4c75cf40bp165ff3jsn19cc472c1ad7";
const apiHost = "shazam.p.rapidapi.com";

const searchBtn = document.getElementById("searchBtn");
const artistInput = document.getElementById("artistInput");
const tracksContainer = document.getElementById("tracksContainer");

function buscarCanciones() {
  const artist = artistInput.value.trim();
  if (!artist) return alert("Por favor, escribe el nombre de un artista.");

  tracksContainer.innerHTML = `<p class="text-center text-muted">Buscando canciones...</p>`;

  fetch(`https://${apiHost}/search?term=${encodeURIComponent(artist)}&locale=en-US&offset=0&limit=5`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": apiHost,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const tracks = data.tracks?.hits || [];
      tracksContainer.innerHTML = "";

      if (tracks.length === 0) {
        tracksContainer.innerHTML = `<p class="text-center text-muted">No se encontraron canciones.</p>`;
        return;
      }

      tracks.forEach(({ track }) => {
        const card = document.createElement("div");
        card.className = "col-md-4 col-lg-3";
        card.innerHTML = `
          <div class="card h-100 shadow song-card">
            <img src="${track.images?.coverart || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${track.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${track.title}</h5>
              <p class="card-text text-muted">${track.subtitle}</p>
              <a href="${track.url}" target="_blank" class="btn btn-outline-primary mt-auto">Escuchar</a>
            </div>
          </div>
        `;
        tracksContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error al obtener las canciones.");
    });
}

searchBtn.addEventListener("click", buscarCanciones);
// Al presionar Enter dentro del input
artistInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buscarCanciones();
  }
});