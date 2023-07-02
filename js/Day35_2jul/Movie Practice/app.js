import { fetchMovieList, fetchMovieAvailability } from "./api.js";

const loader = $('<div id="loader">Loading...</div>');

getMovieList();
const selecetedSeats = [];

async function getMovieList() {
  $("main").append(loader);
  const movies = await fetchMovieList();
  loader.remove();
  createMovieList(movies);
}

function createMovieList(movies) {
  movies.forEach((movie) => {
    const card = createMovieCard(movie);

    $(".movie-holder").append(card);
  });
}

function createMovieCard(movieDetails) {
  const { imgUrl, name } = movieDetails;

  const templateStr = `<a class="movie-link" href="/${name}">
<div class="movie" data-d=${name}>
<div class="movie-img-wrapper" style="background-image:url('${imgUrl}');background-size: cover;">
</div>
<h4>${name}</h4>
</div>
</a>`;

  const domEl = $(templateStr)[0];

  domEl.addEventListener("click", function (e) {
    e.preventDefault();
    // const el = document.querySelectorAll('#booker h3')

    getSeats(name);
  });
  return domEl;
}

async function getSeats(movieName) {
  $("#booker h3").removeClass("v-none");
  $("#booker").append(loader);

  const seats = await fetchMovieAvailability(movieName);
  loader.remove();
  createTicketsGrid(seats);
}

function createGridBox(seats, isRight) {
  const gridBox = $(`<div class="booking-grid"></div>`);

  for (let i = isRight ? 13 : 1; i <= (isRight ? 24 : 12); i++) {
    const isUnavailable = seats.includes(i);
    const gridItem = $(
      `<div id="booking-grid-${i}" class="${
        isUnavailable ? "unavailable-seat" : "available-seat"
      }">${i}</div>`
    )[0];

    gridItem.addEventListener("click", function (e) {
      if (!isUnavailable) {
        selectSeat(i, $(this));
      }
    });
    gridBox.append(gridItem);
  }

  return gridBox;
}

function createTicketsGrid(seats) {
  const lgrid = createGridBox(seats);
  const rgrid = createGridBox(seats, true);

  $("#booker-grid-holder").append(lgrid);
  $("#booker-grid-holder").append(rgrid);
}

function selectSeat(seatNo, gridItem) {
  if (selecetedSeats.includes(seatNo)) {
    const index = selecetedSeats.indexOf(seatNo);
    selecetedSeats.splice(index, 1);
    gridItem.removeClass("selected-seat");
  } else {
    selecetedSeats.push(seatNo);
    gridItem.addClass("selected-seat");
  }
}
