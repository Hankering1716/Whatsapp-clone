function sendMessage() {
    if(document.getElementById('inputSender').value =="") {
        return  document.getElementById('conversationSpeaker').innerHTML += ''
    }



    document.getElementById('conversationSpeaker').innerHTML += `                        
        <div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
              <p class="small mb-1">${document.getElementById('inputSender').value} <img src="${document.getElementById("imagePreview")}"</p>
        </div>`;

        
    document.getElementById('inputSender').value = ""

    window.scrollTo(0, document.body.scrollHeight);

        

}

document.addEventListener('keydown',event => {

        if(event.key === 'Enter') {
            sendMessage()
        }
});


    

function loadImage() {

    document.getElementById('conversationSpeaker').innerHTML += 
        `<div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-white" style="border-radius: 15px;color:white; background-color: rgb(49, 49, 175);">
              <img class="small mb-1 rounded" src="${document.getElementById("file-input").value}" alt='Image'">
        </div>`;

   
}

