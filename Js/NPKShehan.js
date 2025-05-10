// Scroll Animation
// Summary scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.about');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

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

// Education scroll Animation
  window.addEventListener('scroll', function() {
    const box = document.querySelector('.edu');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.edu1');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.edu2');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.edu3');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

// Work Experience scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.work');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

window.addEventListener('scroll', function() {
    const box = document.querySelector('.work0');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

// Project scroll Animation
window.addEventListener('scroll', function() {
    const box = document.querySelector('.Logo1');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.Logo2');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.Logo3');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
  });

  window.addEventListener('scroll', function() {
    const box = document.querySelector('.Logo4');
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add('show');
    }
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

// Auto scroll Animation
// Home auto scroll Animation
document.querySelector('.title1').addEventListener('click', function(){
  document.querySelector('.MyImage').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// summary auto scroll Animation
document.querySelector('.title2').addEventListener('click', function(){
  document.querySelector('.SummaryBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// education auto scroll Animation
document.querySelector('.title3').addEventListener('click', function(){
  document.querySelector('.EsucationBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// work auto scroll Animation
document.querySelector('.title4').addEventListener('click', function(){
  document.querySelector('.workEx').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// skill auto scroll Animation
document.querySelector('.title5').addEventListener('click', function(){
  document.querySelector('.skillBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// Project auto scroll Animation
document.querySelector('.title6').addEventListener('click', function(){
  document.querySelector('.priject').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});

// Contact auto scroll Animation
document.querySelector('.title7').addEventListener('click', function(){
  document.querySelector('.contactBox').scrollIntoView({behavior:'smooth'});

  // Border color
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
});