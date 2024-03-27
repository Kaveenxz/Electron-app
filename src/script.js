function handleClick() {
    const noteTitle = document.getElementById("note-title").value;
    const noteDesc = document.getElementById("note-description").value;

    console.log(noteDesc, noteTitle);

    // Send IPC message to the main process
    require('electron').ipcRenderer.send('add-work', { title: noteTitle, description: noteDesc });
}
