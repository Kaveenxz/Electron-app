document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

function handleClick() {
    const title = document.getElementById("note-title").value;
    const description = document.getElementById("note-description").value;

    if (title.trim() !== "" && description.trim() !== "") {
        const addedNote = document.getElementById("added-note");
        const newNote = document.createElement("div");
        newNote.classList.add("note"); // Add the 'note' class for styling consistency

        newNote.innerHTML = `
            <article>
                <header>
                    <ul class="note-list">
                        <li class="date-time">${getCurrentDateTime()}</li>
                    </ul>
                    <h2>${title}</h2>
                </header>
                <p>${description}</p>
            </article>
        `;

        addedNote.appendChild(newNote);

        document.getElementById("note-title").value = "";
        document.getElementById("note-description").value = "";
    }
}

function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute:'2-digit'
    });
}
