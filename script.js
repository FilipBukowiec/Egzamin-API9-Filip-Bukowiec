const button1 = document.getElementById("Button1");
button1.addEventListener("click", () => {
  button1.innerText = "Filip Bukowiec";
});

const button2 = document.querySelector(".btn2");
button2.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("animation");
  button2.after(newDiv);
  button2.innerText = "Mój loader";
}, { once: true } );

const button3 = document.getElementById("Button3");
button3.addEventListener("click", () => {
  window.alert(
    "Swoją przygodę z Frontendem rozpocząłem w 2022r. Mam nadzieję, że jestem na dobrej drodze. Pozdrawiam, Filip Bukowiec"
  );
});

const button4 = document.getElementById("Button4");
button4.addEventListener("click", () => location.href="https://github.com/FilipBukowiec");