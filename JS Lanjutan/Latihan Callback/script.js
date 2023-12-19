// $('.search-btn').on('click', function() {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=cfdf2551&s=" + $('.input-keyword').val(),
//         success: (results) => {
//           const movies = results.Search;
//           let cards = "";
//           movies.forEach((movie) => {
//             cards += showCards(movie);
//           });
//           $(".movie-container").html(cards);
//           $(".modal-detail-btn").on("click", function () {
//             $.ajax({
//               url: "http://www.omdbapi.com/?apikey=cfdf2551&i=" + $(this).data("imdbid"),
//               success: (movie) => {
//                 const movieDetail = showMovieDetail(movie);
//                 $(".modal-body").html(movieDetail);
//               },
//               error: (e) => {
//                 console.log(e.responseText);
//               },
//             });
//           });
//         },
//         error: (e) => {
//           console.log(e.responseText);
//         },
//       });
// });

// fetch
// const searchBtn = document.querySelector(".search-btn");
// searchBtn.addEventListener("click", function () {
//   const inputKey = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=cfdf2551&s=" + inputKey.value)
//     .then(response => response.json())
//     .then(results => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach(movie => (cards += showCards(movie)));

//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       const modalDetailBtn = document.querySelectorAll(".modal-detail-btn");
//       modalDetailBtn.forEach(modalBtn => {
//         modalBtn.addEventListener("click", function () {
//           fetch("http://www.omdbapi.com/?apikey=cfdf2551&i=" + this.dataset.imdbid)
//             .then(response => response.json())
//             .then(movie => {
//               const movieDetail = showMovieDetail(movie);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             })
//             .catch((err) => console.log(err.responseText));
//         });
//       });
//     });
// });

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function () {
  try {
    const inputKey = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKey.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=cfdf2551&s=" + keyword)
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((results) => {
      if(results.Response === "False") {
        throw new Error(results.Error);
      }
      return results.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((movie) => (cards += showCards(movie)));

  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener("click", async function (e) {
  try {
    if (e.target.classList.contains("modal-detail-btn")) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    }
  } catch(err) {
    alert(err);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=cfdf2551&i=" + imdbid)
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((movie) => {
      if(movie.Response === "False") {
        throw new Error(movie.Error);
      }
      return movie;
    });
}

function updateUIDetail(movie) {
  const movieDetail = showMovieDetail(movie);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(movie) {
  return `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${movie.Poster}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                </div>
            </div>
        </div>`;
}

function showMovieDetail(movie) {
  return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${movie.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong> ${movie.Director}o</li>
                        <li class="list-group-item"><strong>Actors : </strong> ${movie.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong><br> ${movie.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>`;
}
