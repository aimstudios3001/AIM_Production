// Add video for web body
const video = document.getElementById('bac-video');

function startVideoBac(){
    video.setAttribute('autoplay', true);

    // Catch error
    video.onplay().catch(function(error){
        console.error("video error: ", error);
    });
}

window.addEventListener('load', startVideoBac);

window.addEventListener('resize', function(){
    video.style.width=this.window.innerWidth+'px';
    video.style.height=this.window.innerHeight+'px';
});

// Type Writer Animation
const aboutText="A I M Production is a creative and innovative hub specializing in the fields of IT and digital "+
            "media. Our mission is to deliver high-quality digital solutions and experiences through a diverse range of "+
            "services. Under the Aim Production umbrella, three dedicated creative teams collaborate to bring ideas to life:";
const logoSubText = "Graphic Design, Software Development & Game Development";
const element = document.querySelector('.aboutBox');
const element1 = document.querySelector('.mainSubT');

// AIM Production about Type Writer Animation
let index = 0;
function typeWriterAboutText(){
    if(index < aboutText.length){
        element.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeWriterAboutText, 18); // Typing Speed
    }
}
typeWriterAboutText();

// AIM Production Logo sub title Type Writer Animation
let index1 = 0;
function typeWriterLogoSubText(){
    if(index1 < logoSubText.length){
        element1.textContent += logoSubText.charAt(index1);
        index1++;
        setTimeout(typeWriterLogoSubText, 90);  // Typing Speed
    }
}
typeWriterLogoSubText();