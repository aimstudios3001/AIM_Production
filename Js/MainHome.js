// Data Load
// Image Load
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const src = el.getAttribute("data-src");
          if (src) {
            el.src = src;
            if (el.tagName === 'VIDEO') {
              el.load();
            }
            obs.unobserve(el);
          }
        }
      });
    });

    document.querySelectorAll('[data-src]').forEach(el => {
      observer.observe(el);
    });
  });

  // Video Load
  document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector('source[data-src]');
        if (source && !source.src) {
          source.src = source.getAttribute('data-src');
          video.load(); // required to reload sources
          obs.unobserve(video);
        }
      }
    });
  });

  document.querySelectorAll('video').forEach(video => {
    observer.observe(video);
  });
});

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
        setTimeout(typeWriterAboutText, 10); // Typing Speed
    }
}
typeWriterAboutText();

// AIM Production Logo sub title Type Writer Animation
let index1 = 0;
function typeWriterLogoSubText(){
    if(index1 < logoSubText.length){
        element1.textContent += logoSubText.charAt(index1);
        index1++;
        setTimeout(typeWriterLogoSubText, 50);  // Typing Speed
    }
}
typeWriterLogoSubText();

// Scroll Animation
// Subject scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.sujectBox1');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.sujectBox2');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.sujectBox3');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

// Contact scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.foterName');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.devName');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

window.addEventListener('scroll', function() {
    const box = document.querySelector('.Email');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.Number');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

// Media scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.Facebook');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.youtube');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.tiktok');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.linkedin');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

    window.addEventListener('scroll', function() {
    const box = document.querySelector('.whatsApp');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });