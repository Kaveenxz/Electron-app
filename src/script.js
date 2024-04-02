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
                <button class="btn-done">Done</button>
            </article>
        `;

        addedNote.appendChild(newNote);

        // Attach event listener to the "Done" button
        const btnDone = newNote.querySelector('.btn-done');
        btnDone.addEventListener('click', function() {
            addedNote.removeChild(newNote); // Remove the note when the button is clicked
        });

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
