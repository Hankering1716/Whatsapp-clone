function sendMessage() {
    if(document.getElementById('inputSender').value =="") {
        return  document.getElementById('conversationSpeaker').innerHTML += ''
    }
    document.getElementById('conversationSpeaker').innerHTML += `                        
    
        <div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-dark" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
              <p class="small mb-1">${document.getElementById('inputSender').value}</p>
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

    var preview = document.getElementById('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  
    document.getElementById('conversationSpeaker').innerHTML += 
`<div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-dark" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
              <p class="small mb-1">${document.getElementById('file').preview}</p>
        </div>`;

        document.getElementById('file').value = "";
}
