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

// Title Bar size Animation
// Pc, Lap or Tab size
function toggleMenu() {
  const titleBar = document.getElementById("titleBar");
  if (titleBar.style.display === "none" || titleBar.style.display === "") {
    titleBar.style.display = "flex";
    titleBar.style.flexDirection = "column";
    titleBar.style.animation = "slideIn 0.3s ease";
  } else {
    titleBar.style.display = "none";
  }
}

// Mobile size
function updateLayout() {
  const width = window.innerWidth;
  const topBar = document.querySelector(".top-bar");
  const titleBar = document.getElementById("titleBar");

  if (width <= 767) {
    topBar.style.display = "block";
    titleBar.style.display = "none"; // hide by default on mobile
  } else {
    topBar.style.display = "none";
    titleBar.style.display = "flex";
    titleBar.style.flexDirection = "row";
  }
}

// On load
window.addEventListener("load", updateLayout);
// On resize
window.addEventListener("resize", updateLayout);

// Auto scroll Animation
// Home auto scroll Animation
document.querySelector('.title1').addEventListener('click', function(){
  document.getElementById('bac-video').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// About auto scroll Animation
document.querySelector('.title2').addEventListener('click', function(){
  document.querySelector('.aboutBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// Project auto scroll Animation
document.querySelector('.title3').addEventListener('click', function(){
  document.querySelector('.productBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// Contact auto scroll Animation
document.querySelector('.title4').addEventListener('click', function(){
  document.querySelector('.contactBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// Scroll Animation
// About scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.about1');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about2');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about3');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about4');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about5');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about6');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about7');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.about8');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

// View Projects tab
// Image (Design/Edit) tab view
document.querySelector('.type').addEventListener('click', function(){
    document.querySelector('.Images').classList.remove('hidden');
    document.querySelector('.logo').classList.add('hidden');
    document.querySelector('.Packing').classList.add('hidden');
    document.querySelector('.Media').classList.add('hidden');
    document.querySelector('.Animation').classList.add('hidden');

    // Video Stop
    const Videos = document.querySelectorAll('.video');
    Videos.forEach(function(video) {
      video.pause();
      video.currentTime=0;
    });

    // Border color
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
});

// Logo tab view
document.querySelector('.type1').addEventListener('click', function(){
    document.querySelector('.logo').classList.remove('hidden');
    document.querySelector('.Images').classList.add('hidden');
    document.querySelector('.Packing').classList.add('hidden');
    document.querySelector('.Media').classList.add('hidden');
    document.querySelector('.Animation').classList.add('hidden');

    // Video Stop
    const Videos = document.querySelectorAll('.video');
    Videos.forEach(function(video) {
      video.pause();
      video.currentTime=0;
    });
    
    // Border color
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
});

// Packing tab view
document.querySelector('.type2').addEventListener('click', function(){
    document.querySelector('.Packing').classList.remove('hidden');
    document.querySelector('.Images').classList.add('hidden');
    document.querySelector('.logo').classList.add('hidden');
    document.querySelector('.Media').classList.add('hidden');
    document.querySelector('.Animation').classList.add('hidden');

    // Video Stop
    const Videos = document.querySelectorAll('.video');
    Videos.forEach(function(video) {
      video.pause();
      video.currentTime=0;
    });

    // Border color
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
});

// Media tab view
document.querySelector('.type3').addEventListener('click', function(){
    document.querySelector('.Media').classList.remove('hidden');
    document.querySelector('.Images').classList.add('hidden');
    document.querySelector('.logo').classList.add('hidden');
    document.querySelector('.Packing').classList.add('hidden');
    document.querySelector('.Animation').classList.add('hidden');

    // Video Stop
    const Videos = document.querySelectorAll('.video');
    Videos.forEach(function(video) {
      video.pause();
      video.currentTime=0;
    });

    // Border color
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
});

// Animation/edit tab view
document.querySelector('.type4').addEventListener('click', function(){
    document.querySelector('.Animation').classList.remove('hidden');
    document.querySelector('.Images').classList.add('hidden');
    document.querySelector('.logo').classList.add('hidden');
    document.querySelector('.Packing').classList.add('hidden');
    document.querySelector('.Media').classList.add('hidden');

    // Video Stop
    const Videos = document.querySelectorAll('.video');
    Videos.forEach(function(video) {
      video.pause();
      video.currentTime=0;
    });

    // Border color
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
});

// Video stop
const videoBox = document.querySelector('.Media');
const vid = videoBox.querySelectorAll('.video');

vid.forEach(video => {
  video.addEventListener('play', function(){
    vid.forEach(v => {
      if (v !== video){
        v.pause();
        v.currentTime=0;
      }
    });
  });
});

// Video stop
const videoBox1 = document.querySelector('.Animation');
const vid1 = videoBox1.querySelectorAll('.video');

vid1.forEach(video => {
  video.addEventListener('play', function(){
    vid1.forEach(v => {
      if (v !== video){
        v.pause();
        v.currentTime=0;
      }
    });
  });
});

// Image full screen view
const wrapper = document.querySelector('.productBox');
const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');

wrapper.querySelectorAll('.img').forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImage.src = img.src;
    overlay.style.display = 'flex';
  });
});

// Close overlay on click
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  fullscreenImage.src = "";
});

// Contact scroll Animation
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