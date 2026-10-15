const b = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let size = 200, i = 0;

function render() {
  b.style.width = b.style.height = size + "px";
  b.style.backgroundColor = colors[i];
}

b.onclick = () => {
  size += 10;
  i = (i + 1) % 3;
  if (size > 420) { size = 200; i = 0; }
  render();
};

b.onmouseleave = () => {
  size = Math.max(200, size - 5);
  i = (i + 2) % 3;
  render();
};