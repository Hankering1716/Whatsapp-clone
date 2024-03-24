function sendMessage() {
    document.getElementById('conversationSpeaker').innerHTML += `                        
    
        <div class="p-3 m-4 border border-bg-primary text-dark" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
        <p class="small mb-1">${document.getElementById('inputSender').value}</p>
        </div>`

}
