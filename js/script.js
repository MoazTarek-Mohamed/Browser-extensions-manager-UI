let logo = document.querySelector("header div a img");
let backgroundIconDiv = document.querySelector("header div div");
let backgroundIcon = document.querySelector("header div div img");
let headerContainer = document.querySelector("header .container");
let lists = document.querySelectorAll(".main .container ul li");
let mainDiv = document.querySelector(".main > div");
let toggleButton = document.querySelectorAll(".toggleButton");

backgroundIconDiv.addEventListener("click", () => {
  document.body.classList.toggle("moon");
  document.body.classList.toggle("sun");
  mainDiv.classList.toggle("dark");
  mainDiv.classList.toggle("light");

  lists.forEach((list) => {
    if (list.classList.contains("ActiveButtonLight")) {
      list.classList.remove("ActiveButtonLight");
      list.classList.add("ActiveButtonDark");
    } else if (list.classList.contains("ActiveButtonDark")) {
      list.classList.remove("ActiveButtonDark");
      list.classList.add("ActiveButtonLight");
    }
  });
  toggleButton.forEach((btn) => {
    btn.classList.toggle("dark");
    btn.classList.toggle("light");
    btn.parentElement.parentElement.classList.toggle("dark");
    btn.parentElement.parentElement.classList.toggle("light");
  });

  if (document.body.classList.contains("moon")) {
    backgroundIcon.setAttribute("src", "assets/images/icon-sun.svg");
    logo.setAttribute("src", "assets/images/logo-white.svg");
  } else {
    backgroundIcon.setAttribute("src", "assets/images/icon-moon.svg");
    logo.setAttribute("src", "assets/images/logo.svg");
  }
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    const text = list.textContent.trim().toLowerCase();
    if (text === "all") {
      let maindiv1 = document.querySelectorAll(".all");
      maindiv1.forEach((div) => {
        div.style.display = "block";
      });
    } else if (text === "active") {
      let maindiv1 = document.querySelectorAll(".all");
      let maindiv2 = document.querySelectorAll(".all.active");
      let maindiv3 = document.querySelectorAll(".all.inactive");
      maindiv1.forEach((div) => {
        div.style.display = "none";
      });
      maindiv2.forEach((div) => {
        div.style.display = "block";
      });
      maindiv3.forEach((div) => {
        div.style.display = "none";
      });
    } else if (text === "inactive") {
      let maindiv1 = document.querySelectorAll(".all");
      let maindiv2 = document.querySelectorAll(".all.active");
      let maindiv3 = document.querySelectorAll(".all.inactive");
      maindiv1.forEach((div) => {
        div.style.display = "none";
      });
      maindiv2.forEach((div) => {
        div.style.display = "none";
      });
      maindiv3.forEach((div) => {
        div.style.display = "block";
      });
    }
  });
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    lists.forEach((li) => {
      li.classList.remove("ActiveButtonLight");
      li.classList.remove("ActiveButtonDark");
    });
    if (document.body.classList.contains("sun")) {
      list.classList.add("ActiveButtonLight");
    } else {
      list.classList.add("ActiveButtonDark");
    }
  });
});

toggleButton.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.classList.toggle("inactive");
    el.parentElement.parentElement.classList.toggle("active");
    el.classList.toggle("ButtonInactive");
  });
});

async function getdata() {
  try {
    let data = await fetch("./data.json");
    data = await data.json();

    const textCont = document.getElementsByClassName("textContent");

    for (let i = 0; i < textCont.length; i++) {
      let newH3 = document.createElement("h3");
      let newP = document.createElement("p");
      newH3.append(data[i].name);
      newP.append(data[i].description);
      textCont[i].append(newH3, newP);
    }
  } catch (err) {
    console.log(err);
  }
}

getdata();

let removeButtons = document.querySelectorAll(".remove");
removeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
  });
});

