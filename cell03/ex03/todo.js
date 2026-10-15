const list = document.getElementById("ft_list");

    function save() {
      const todos = [...list.children].map(d => d.textContent);
      document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos))
                      + "; max-age=31536000; path=/";
    }

    function load() {
      const match = document.cookie.split("; ").find(c => c.startsWith("todos="));
      if (!match) return;
      try {
        const todos = JSON.parse(decodeURIComponent(match.slice(6)));
        todos.forEach(t => list.appendChild(createTodo(t)));
      } catch (e) {}
    }

    function createTodo(text) {
      const div = document.createElement("div");
      div.textContent = text;
      div.onclick = () => {
        if (confirm('Delete "' + text + '" Yes')) {
          div.remove();
          save();
        }
      };
      return div;
    }

    document.getElementById("new").onclick = () => {
      const text = prompt("New word:");
      if (text && text.trim()) {
        list.prepend(createTodo(text.trim()));
        save();
      }
    };

    load();


    