const theme = document.getElementById("theme");
const panel = document.querySelector("section");
const panel__input = document.getElementById("panel__input");
const container = document.querySelector("main");
const done = document.getElementById("done");
const optoin = document.getElementById("option");
const pr = document.getElementById("item");

var count = 0;
/**Enter new to-do item */
done.addEventListener("click", addnew);
function addnew() {
  const panel = document.querySelector("section");
  const todoinput = document.getElementById("todo-input").value;
  const newInput = document.getElementById("panel__new-input");
  const toggle = theme.getAttribute("aria-selected");

  if (todoinput === "") {
    alert("Can't be empty.");
  }

  if (todoinput != "") {
    const div = document.createElement("div");
    div.id = "panel__new-input";
    panel.appendChild(div);

    const div1 = document.createElement("div");
    div1.id = "done1";
    div.appendChild(div1);

    div1.addEventListener("click", drawline);

    const p = document.createElement("p");
    p.textContent = todoinput;
    div.appendChild(p);

    if (toggle === "false") {
      div.style.backgroundColor = "hsl(235, 24%, 19%)";
    } else {
      div.style.backgroundColor = "hsl(236, 33%, 92%)";
    }
    const btn = document.createElement("button");
    btn.id = "cross";
    div.appendChild(btn);

    btn.addEventListener("click", delTodo);

    function drawline() {
      const newInput1 = document.getElementById("todo-input").value;
      div1.id = "img-checked";
      div.classList.add("completed");
    }
    count++;
    console.log(count);
    pr.textContent = count + " Items Left";
  }
}

/**Change theme of website*/
function changeTheme() {
  const toggle = theme.getAttribute("aria-selected");
  var x = document.getElementsByTagName("BODY")[0];
  const newInput = document.querySelectorAll("#panel__new-input");
  newInput.forEach((node) => {
    if (toggle === "false") {
      node.style.backgroundColor = "hsl(236, 33%, 92%)";
      x.style.backgroundColor = "hsl(0, 0%, 98%)";
      panel__input.style.backgroundColor = "hsl(236, 33%, 92%)";
      theme.setAttribute("aria-selected", "true");
      optoin.style.backgroundColor = "hsl(236, 33%, 92%)";
    }
    if (toggle === "true") {
      node.style.backgroundColor = "hsl(235, 24%, 19%)";
      x.style.backgroundColor = "hsl(235, 24%, 19%)";
      panel__input.style.backgroundColor = "hsl(235, 24%, 19%)";
      theme.setAttribute("aria-selected", "false");
      optoin.style.backgroundColor = "hsl(235, 24%, 19%)";
    }
  });
}

function completed() {
  count=0;
  const newInput = document.querySelectorAll("#panel__new-input");
  newInput.forEach((node) => {
    if (!node.classList.contains("completed")) {
      node.remove();
    }
    if (node.classList.contains("completed")) {
     count++;
    }
  });
  pr.textContent = count + " Items Left";
}

/**Delete the to-do item */
function delTodo() {
  const newInput = document.getElementById("panel__new-input");
  const cross = document.getElementById("cross");
  newInput.remove();
  if (count > 0) {
    count = count - 1;
    pr.textContent = count + " Items Left";
  }
}
count = 0;
