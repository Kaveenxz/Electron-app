document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  });

  function handleClick() {
    const title = document.getElementById("note-title").value;
    const description = document.getElementById("note-description").value;

    if (title.trim() !== "" && description.trim() !== "") {
      const addedNote = document.getElementById("added-note");
      const newNote = document.createElement("div");

      newNote.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
      `;

      addedNote.appendChild(newNote);

      document.getElementById("note-title").value = "";
      document.getElementById("note-description").value = "";
    }
  }