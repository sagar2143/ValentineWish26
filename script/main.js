// Surprise Me Button Logic
document.addEventListener('DOMContentLoaded', function() {
  const surpriseBtn = document.getElementById('surpriseBtn');
  const surpriseMsg = document.getElementById('surpriseMsg');
  const messages = [
    'You are the reason my heart beats a little faster.',
    'Every day with you is Valentine\'s Day!',
    'Sending you a thousand hugs and kisses!',
    'You light up my world like nobody else.',
    'You are my sunshine on a cloudy day.',
    'Love you to the moon and back!',
    'You make every moment magical.',
    'Forever and always, you have my heart.',
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
  if (!langBtn) return;

  let isBengali = false;
  const lines = {
    en: {
      mainHeading: 'My Dearest <span id="name">Manisha</span>',
      valMsg: 'Happy Valentine\'s Day, my love!',
      idea1: 'I thought a simple wish would do...',
      idea2: 'But my heart wanted more.',
      idea3: 'Because you deserve something <strong>truly special</strong>.',
      idea4: 'Because...',
      idea5: 'You are my everything!',
      idea6: '<span>So...</span>',
      wishHeading: 'Happy Valentine\'s Day, Beautiful!',
    },
    bn: {
      mainHeading: 'আমার প্রিয় <span id="name">Manisha</span>',
      valMsg: 'শুভ ভালোবাসা দিবস, আমার ভালোবাসা!',
      idea1: 'একটা সাধারণ শুভেচ্ছা দিলেই হয়তো ভাবছিলাম...',
      idea2: 'কিন্তু মন বলল, আরও একটু বেশি স্পেশাল।',
      idea3: 'কারণ তুমি আমার <strong>সবচেয়ে প্রিয়</strong> কিছু।',
      idea4: 'কারণ...',
      idea5: 'তুমি আমার সবকিছু!',
      idea6: '<span>তাই...</span>',
      wishHeading: 'শুভ ভালোবাসা দিবস, সুন্দরী!',
    }
  };

  function safeSet(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  langBtn.addEventListener('click', () => {
    isBengali = !isBengali;
    const lang = isBengali ? 'bn' : 'en';
    langBtn.textContent = isBengali ? '🌐 English' : '🌐 বাংলা';
    safeSet('mainHeading', lines[lang].mainHeading);
    safeSet('valMsg', lines[lang].valMsg);
    safeSet('idea1', lines[lang].idea1);
    safeSet('idea2', lines[lang].idea2);
    safeSet('idea3', lines[lang].idea3);
    safeSet('idea4', lines[lang].idea4);
    safeSet('idea5', lines[lang].idea5);
    safeSet('idea6', lines[lang].idea6);
    safeSet('wishHeading', lines[lang].wishHeading);
    animateText();
  });
});

// Text reveal (simple, stable)
function animateText() {
  const targets = [
    '#mainHeading',
    '#greetingText',
    '#valMsg',
    '#idea1',
    '#idea2',
    '#idea3',
    '#idea4',
    '#idea5',
    '#idea6',
    '#wishHeading',
  ];

  targets.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const text = el.innerHTML;
    const chars = [];
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '<') {
        const end = text.indexOf('>', i);
        if (end !== -1) {
          chars.push(text.slice(i, end + 1));
          i = end;
          continue;
        }
      }
      chars.push(ch);
    }
    let output = '';
    let delayIndex = 0;
    chars.forEach((ch) => {
      if (ch.startsWith('<')) {
        output += ch;
      } else if (ch === ' ') {
        output += ' ';
      } else {
        const delay = (delayIndex * 0.02).toFixed(2);
        output += `<span style="--d:${delay}s">${ch}</span>`;
        delayIndex += 1;
      }
    });
    el.classList.add('reveal');
    el.innerHTML = output;
  });
}
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
        musicBtn.textContent = 'Pause Music';
        playing = true;
      } else {
        bgMusic.pause();
        musicBtn.textContent = 'Play Music';
        playing = false;
      }
    });
    bgMusic.addEventListener('ended', () => {
      musicBtn.textContent = 'Play Music';
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
// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("./customize.json")
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

resolveFetch();

// Run text animation after base content is ready
document.addEventListener('DOMContentLoaded', function() {
  animateText();
});
