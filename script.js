let parent = document.querySelector(".just-block");
let parent2 = document.querySelector(".server-things");
let parent3 = document.querySelector(".last-one");
let xmlURL = "https://fakestoreapi.com/products";
let xml = new XMLHttpRequest();

xml.open("GET", xmlURL);
xml.onload = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    /* console.log(xml.response); */
    let json = JSON.parse(xml.response);
    console.log(json, "546878998898");
    let a = json.slice(0, 3);
    console.log(a, "564665");
    let b = json.slice(3, 9);
    console.log(b, "asdasdsad7878");
    let c = json.slice(9, 13);
    console.log(c);

    a.map((items) => {
      let block1 = document.createElement("div");
      block1.classList.add("div-biv");
      block1.innerHTML = ` <img src="${items.image}" alt=""> <h1>${items.title}</h1> <strong>${items.price}</strong>`;
      parent.append(block1);
    });

    b.map((items) => {
      let block2 = document.createElement("div");
      block2.classList.add("div-div");
      block2.innerHTML = ` <img src="${items.image}" alt=""> <h1>${items.title}</h1> <strong>${items.price}</strong>`;
      parent2.append(block2);
    });

    c.map((items) => {
      let block3 = document.createElement("div");
      block3.classList.add("div-ziv");
      block3.innerHTML = ` <img src="${items.image}" alt=""> <h1>${items.title}</h1> <strong>${items.price}</strong>`;
      parent3.append(block3);
    });
  } else console.error("404 not found");
};
xml.send();

gsap.from(".gsap-txt", {
  opacity: 0,
  duration: 2.7,
  y: -1000,
});
gsap.from(".gsap-txt1", {
  opacity: 0,
  duration: 1.8,
  x: -1000,
  delay: 1,
});

gsap.from(".btn-gsap", {
  opacity: 0,
  duration: 2.7,
  y: -1000,
});
gsap.from(".txtfor-gsap", {
  opacity: 0,
  duration: 2,
  stagger: -1.5,
  y: -75,
});
gsap.from(".name-btn", {
  stagger: -1.5,
  opacity: 0,
  duration: 2,
  x: -75,
});
