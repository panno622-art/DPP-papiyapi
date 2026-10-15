const b = $("#balloon");
const colors = ["red", "green", "blue"];
let size = 200, i = 0;

function render() {
  b.css({
    width: size + "px",
    height: size + "px",
    "background-color": colors[i]
  });
}

b.click(() => {
  size += 10;
  i = (i + 1) % 3;
  if (size > 420) { size = 200; i = 0; }
  render();
});

b.mouseleave(() => {
  size = Math.max(200, size - 5);
  i = (i + 2) % 3;
  render();
});