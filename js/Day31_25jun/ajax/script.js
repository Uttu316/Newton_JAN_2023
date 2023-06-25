// IIFE

(function () {
  getUsers();
  getPhotos();
})();

function getUsers() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();

  request.onreadystatechange = function (e) {
    if (this.readyState < 4) {
      // show loader
      showLoader();
    } else {
      // stop loader
      stopLoader();
      // check if we recieved error or success response
      if (this.status === 200) {
        // get data and show data to screen
        const jsonData = this.response;
        const data = JSON.parse(jsonData); // converts json into js object
        // console.log(data);
        showList(data);
      } else if (this.status === 401) {
        // you are not authorized to access this request
        console.log("Denied Access");
      } else {
        // something went wrong
        console.log("something went wrong");
      }
    }
  };
}

const data = {
  name: "Utkarsh",
  phone: "87987897",
  message: "iohiwreiou",
};

function sendData(data) {
  const jsondata = JSON.stringify(data); // convert js object into JSON
  const request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/users");
  request.send(jsondata);

  request.onreadystatechange = function (e) {
    if (this.readyState < 4) {
      // show loader
      showLoader();
    } else {
      // stop loader
      stopLoader();
      // check if we recieved error or success response
      if (this.status === 200) {
        // get data and show data to screen
        const jsonData = this.response;
        const data = JSON.parse(jsonData); // converts json into js object
        // console.log(data);
        showList(data);
      } else if (this.status === 401) {
        // you are not authorized to access this request
        console.log("Denied Access");
      } else {
        // something went wrong
        console.log("something went wrong");
      }
    }
  };
}

function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
}

function stopLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

function showList(data) {
  const list = document.getElementById("users-list");
  data.forEach((item) => {
    const listItem = userCard(item);

    list.append(listItem);
  });
}

function userCard(userDetails) {
  const card = document.createElement("li");
  const { name } = userDetails;
  card.innerHTML = name;
  return card;
}

function getPhotos() {
  fetch("https://reqres.in/api/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      console.log(data);
      showPhotos(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

function showPhotos(photos) {
  const photoContainer = document.getElementById("photos");
  photos.forEach((item) => {
    const card = photoCard(item);
    photoContainer.append(card);
  });
}

function photoCard(item) {
  const { avatar, email } = item;
  const card = document.createElement("div");
  const heading = document.createElement("p");
  const image = document.createElement("img");

  image.setAttribute("src", avatar);
  image.style.height = 200;
  image.style.width = 200;
  heading.innerHTML = email;

  card.append(image);
  card.append(heading);

  return card;
}
