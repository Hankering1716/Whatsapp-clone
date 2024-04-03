function sendImage() {
    var imgPreview = document.getElementById("imagePreview").src;
    var imgSrc =   `<img src=${imgPreview} width="300" height="200"`
    document.getElementById("conversationSpeaker").innerHTML += `
    <div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
    <p class="small mb-1"> <br> ${imgSrc} </p>
        </div>` ;   
        document.getElementById("imagePreview").style.display = "none";
        document.getElementById("sendImageButton").style.display = "none";
        document.getElementById(`deleteImageButton`).style.display = 'none'
        document.getElementById("sendWithText").style.display = "none";
}

function deleteImage() {
    document.getElementById("imagePreview").src = "none"
    document.getElementById("imagePreview").style.display = "none";
    document.getElementById("sendImageButton").style.display = "none";
    document.getElementById(`deleteImageButton`).style.display = 'none'
    document.getElementById("sendWithText").style.display = "none";
}
    
function show() {
    document.getElementById(`sendImageButton`).style.display = 'block'
}


function sendMessage() {
    if(document.getElementById('inputSender').value == "") {
        return  document.getElementById('conversationSpeaker').innerHTML += '';
    } 


    var imgPreview = document.getElementById("imagePreview").src;

    var img =  `<img height="200" width="300" src="${imgPreview}" `



    
    document.getElementById('conversationSpeaker').innerHTML += `                        
        <div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
              <p class="small mb-1">${document.getElementById('inputSender').value}  <br>  </p>
        </div>`;    document.getElementById('inputSender').value = "";
    
 


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


function Display() {
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById("nameSpeaker").innerHTML = `<img src="images/Image1NAV.jfif"  width="40" height="30"> Matthew Audio`
    document.getElementById('conversationSpeaker').style.backgroundColor = 'rgba(70, 121, 78, 0.354)'
    document.getElementById("conversationSpeaker").innerHTML = `

    <div class="mb-4 text-dark" >
     

        <div id="Date" class="text-white">Today</div>  
    
        <hr class="w-100 p-3">
  

    </div>
          <div class="p-3 m-4 border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
        <p class="small mb-1">Hey, how's it going?</p>
    </div>
    <div class="d-flex flex-row justify-content-end mb-4 text">
       
        <div class="p-3 m-4 border border-bg-primary text-dark" style="border-radius: 15px; background-color: #fbfbfb;">
            <p class="small mb-1">Not bad, just trying to stay warm in this chilly weather. How about you?</p>
        </div>

        <img src="images/Image1NAV.jfif" class="m-4"alt="Matthew avatar" style="width:45px;height:100%;">
    </div>

    <div class="d-flex flex-row justify-content-start mb-4 text-dark">

        <div class="p-3 m-4 border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
            <p class="small mb-1">Same here, winter seems to linger forever. Any plans for the weekend?</p>
        </div>

    </div>

    <div class="d-flex flex-row justify-content-end mb-4 text-dark">
       
        <div class="p-3 m-4 border border-bg-primary" style="border-radius: 15px; background-color: #fbfbfb;">
            <p class="small mb-1">Not really, just thinking of catching up on some reading. You?</p>
        </div>

        <img src="images/Image1NAV.jfif" class="m-4"alt="Matthew avatar" style="width:45px;height:100%;">
    </div>

    <div class="d-flex flex-row justify-content-start mb-4 text-">

        <div  class="senderLeft p-3 m-4 border border-bg-primary" style="border-radius: 15px; background-color: rgb(49, 49, 175);">
            <p class="small mb-1"> Probably hit the gym and maybe grab dinner with some friends. Speaking of which, any good book recommendations?</p>
        </div>
    </div>

    <div class="d-flex flex-row justify-content-end mb-4 text-dark">
       
        <div class="p-3 m-4 border " style="border-radius: 15px; background-color:white">
            <p class="small mb-1">I'm open to anything really, but I lean towards historical fiction. Thanks for the recommendation!</p>
        </div>

        <img src="images/Image1NAV.jfif" class="m-4"alt="Matthew avatar" style="width:45px;height:100%;">
    </div>

  </div> 
</div>   
    </div>
    `
}
function Display1() {
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById("nameSpeaker").innerHTML = ` <img src="images/image2NAV.jfif" width="30" height="30" class="rounded"> John Doe`
    document.getElementById('conversationSpeaker').style.backgroundColor = 'rgba(70, 121, 78, 0.354)';

    document.getElementById("conversationSpeaker").innerHTML = ` <div id="conversationSpeaker"style="background: rgba(70, 121, 78, 0.354);" >
    <div class="mb-4 text-dark" style="">
     

        <div id="Date" class="text-white">Today</div>  
    
        <hr class="w-100 p-1">
  

    </div>
    <div>
    <div class="d-flex flex-row justify-content-end mb-4 text-dark">
       
            <div class="p-3 m-4 border border-bg-primary text-dark" style="border-radius: 15px; background-color: #fbfbfb;">
                <p class="small mb-1"> What's up? Wanna go city tonight? </p>
            </div>
        </div>

        <div class="p-3 m-4 border border-bg-primary text-white" style="border-radius: 15px; background-color: rgb(49, 49, 175);">                <p class="small mb-1">Ofc, when? </p>
            </div>
        </div>
    
    </div>`
    

    
    document.getElementById("nameSpeaker").innerHTML = `${image} John Doe`
}
function LogOut() {
    document.getElementById('everything').style.display = 'none';
    document.getElementById('inputGroup').style.display = 'none'
    document.getElementById("login").style.display = 'block'
    document.getElementById('loginForm').style.display = '';
}


function sendWithText() {
    var imgPreview = document.getElementById("imagePreview").src;
    var imgSrc =   `<img src=${imgPreview} width="300" height="200"`


    document.getElementById('conversationSpeaker').innerHTML += 
    `<div class="d-flex flex-row  p-3 m-4  border border-bg-primary text-white" style="border-radius: 15px;color:white; background-color: rgb(49, 49, 175);">
          <p class="small mb-1">${document.getElementById("inputSender").value}</p>
          <br>
          ${imgSrc}
    </div> `;
    document.getElementById("imagePreview").src = "";


    document.getElementById("imagePreview").style.display = "none";
    document.getElementById("sendImageButton").style.display = "none";
    document.getElementById(`deleteImageButton`).style.display = 'none'
    document.getElementById("sendWithText").style.display = "none";

}

const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('emailLabel');
const passwordInput = document.getElementById('passwordLabel');
const submitButton = document.getElementById('submitButton');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
    // For now, we'll just log the inputs to the console
    console.log(`Username: ${usernameInput.value}`);
    console.log(`Password: ${passwordInput.value}`);

});
function login() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('everything').style.display = 'block';
    document.getElementById('inputGroup').style.display = '';
    document.getElementById("User").innerHTML = `${document.getElementById("emailLabel").value}`
    document.getElementById("User1").innerHTML = `${document.getElementById("emailLabel").value}`
}



function changeImage() {
    document.getElementById("avatarImg").src = img.src.replace("_t", "_b");
} 
