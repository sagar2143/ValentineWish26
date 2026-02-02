// Surprise Me Button Logic
document.addEventListener('DOMContentLoaded', function() {
  const surpriseBtn = document.getElementById('surpriseBtn');
  const surpriseMsg = document.getElementById('surpriseMsg');
  const messages = [
    'You are the reason my heart beats a little faster. 💓',
    'Every day with you is Valentine’s Day!',
    'Sending you a thousand hugs and kisses! 😘',
    'You light up my world like nobody else.',
    'তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার।',
    'You are my sunshine on a cloudy day.',
    'Love you to the moon and back! 🌙',
    'তোমার হাসি আমার পৃথিবী বদলে দেয়।',
    'You make every moment magical.',
    'Forever and always, you have my heart.'
  ];
  if (surpriseBtn && surpriseMsg) {
    surpriseBtn.addEventListener('click', () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      surpriseMsg.textContent = msg;
      surpriseMsg.style.color = '#ff4d6d';
      surpriseMsg.style.fontSize = '1.15rem';
    });
  }
});
// Language Switcher Logic
document.addEventListener('DOMContentLoaded', function() {
  const langBtn = document.getElementById('langSwitch');
  let isBengali = false;
  const lines = {
    en: {
      mainHeading: 'My Dearest <span id="name">Manisha</span>',
      valMsg: 'Happy Valentine’s Day, My Love! <span aria-label="heart" role="img">💖</span>',
      idea1: 'I thought a simple wish would do…',
      idea2: 'But my heart wanted more...',
      idea3: 'Because you deserve something <strong>Truly Special</strong>.',
      idea4: 'since...',
      idea5: 'You are my everything! <span aria-label="love" role="img">💘</span>',
      idea6: '<span>So…</span>',
      wishHeading: 'Happy Valentine’s Day, Beautiful!'
    },
    bn: {
      mainHeading: 'আমার প্রিয় <span id="name">Manisha</span>',
      valMsg: 'শুভ ভালোবাসা দিবস, আমার ভালোবাসা! <span aria-label="heart" role="img">💖</span>',
      idea1: 'একটা সাধারণ শুভেচ্ছা দিলেই হতো ভাবছিলাম…',
      idea2: 'কিন্তু মন বলল, ও একটু বেশি স্পেশাল।',
      idea3: 'কারণ তুমি আমার <strong>সবচেয়ে প্রিয়</strong> কিছু।',
      idea4: 'আর...',
      idea5: 'তুমি আমার সবকিছু! <span aria-label="love" role="img">💘</span>',
      idea6: '<span>তাই…</span>',
      wishHeading: 'শুভ ভালোবাসা দিবস, সুন্দরী!'
    }
  };
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      isBengali = !isBengali;
      const lang = isBengali ? 'bn' : 'en';
      langBtn.textContent = isBengali ? '🌐 English' : '🌐 বাংলা';
      document.getElementById('mainHeading').innerHTML = lines[lang].mainHeading;
      document.getElementById('valMsg').innerHTML = lines[lang].valMsg;
      document.getElementById('idea1').innerHTML = lines[lang].idea1;
      document.getElementById('idea2').innerHTML = lines[lang].idea2;
      document.getElementById('idea3').innerHTML = lines[lang].idea3;
      document.getElementById('idea4').innerHTML = lines[lang].idea4;
      document.getElementById('idea5').innerHTML = lines[lang].idea5;
      document.getElementById('idea6').innerHTML = lines[lang].idea6;
      document.getElementById('wishHeading').innerHTML = lines[lang].wishHeading;
    });
  }
});
// Love Meter Animation
document.addEventListener('DOMContentLoaded', function() {
  const fill = document.getElementById('loveMeterFill');
  const label = document.getElementById('loveMeterLabel');
  if (fill && label) {
    setTimeout(() => {
      fill.style.width = '100%';
      label.textContent = '100% Love!';
    }, 800);
  }
});
// Valentine's Day Countdown Logic
function updateCountdown() {
  const countdown = document.getElementById('valCountdown');
  if (!countdown) return;
  const now = new Date();
  let year = now.getFullYear();
  const valentine = new Date(year, 1, 14, 0, 0, 0); // Feb 14
  if (now > valentine) valentine.setFullYear(year + 1);
  const diff = valentine - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  countdown.textContent = `Valentine's Day in ${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
// Love Note Popup Logic
document.addEventListener('DOMContentLoaded', function() {
  const noteBtn = document.getElementById('noteBtn');
  const noteModal = document.getElementById('noteModal');
  const closeNote = document.querySelector('.close-note');
  if (noteBtn && noteModal && closeNote) {
    noteBtn.addEventListener('click', () => {
      noteModal.style.display = 'flex';
    });
    closeNote.addEventListener('click', () => {
      noteModal.style.display = 'none';
    });
    noteModal.addEventListener('click', (e) => {
      if (e.target === noteModal) noteModal.style.display = 'none';
    });
  }
});
// Background Music Player Logic
document.addEventListener('DOMContentLoaded', function() {
  const musicBtn = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic'); // src is now Song1.mp3
  let playing = false;
  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      if (!playing) {
        bgMusic.play();
        musicBtn.textContent = '⏸️ Pause Music';
        playing = true;
      } else {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Play Music';
        playing = false;
      }
    });
    bgMusic.addEventListener('ended', () => {
      musicBtn.textContent = '🎵 Play Music';
      playing = false;
    });
  }
});
// Virtual Hug Button Logic
document.addEventListener('DOMContentLoaded', function() {
  const hugBtn = document.getElementById('hugBtn');
  const hugModal = document.getElementById('hugModal');
  const closeHug = document.querySelector('.close-hug');
  if (hugBtn && hugModal && closeHug) {
    hugBtn.addEventListener('click', () => {
      hugModal.style.display = 'flex';
    });
    closeHug.addEventListener('click', () => {
      hugModal.style.display = 'none';
    });
    hugModal.addEventListener('click', (e) => {
      if (e.target === hugModal) hugModal.style.display = 'none';
    });
  }
});
// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
