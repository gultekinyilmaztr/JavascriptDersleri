const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Tıklandı");
});

const liElemanları = document.querySelectorAll("li");

liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    //     console.log(e);
    //     console.log(e.target);
    //     console.log("Liye tıklandı");
    //     e.target.style.color = "blue";
  });
});

const ul = document.querySelector("ul");
//ul.remove();

liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    e.target.remove();
  });
});

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Javascript";

  //ul.append(li);
  ul.prepend(li);

});


