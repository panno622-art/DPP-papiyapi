const list = $("#ft_list");

function save() {
  const todos = list.children().map(function () {
    return $(this).text();
  }).get();

  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos))
                  + "; max-age=31536000; path=/";
}

function load() {
  const match = document.cookie.split("; ").find(c => c.startsWith("todos="));
  if (!match) return;
  try {
    const todos = JSON.parse(decodeURIComponent(match.slice(6)));
    todos.forEach(t => list.append(createTodo(t)));
  } catch (e) {}
}

function createTodo(text) {
  const div = $("<div>").text(text);
  div.click(() => {
    if (confirm('Delete "' + text + '" Yes')) {
      div.remove();
      save();
    }
  });
  return div;
}

$("#new").click(() => {
  const text = prompt("New word:");
  if (text && text.trim()) {
    list.prepend(createTodo(text.trim()));
    save();
  }
});

load();