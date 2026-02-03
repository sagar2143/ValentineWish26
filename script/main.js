// Animation Timeline (English)
let activeTimeline = null;
let currentLang = "en";
let baseText = null;

const collectBaseText = () => {
  const byId = (id) => document.getElementById(id);
  const idea6Spans = document.querySelectorAll("#idea6 span");
  const nameEl = byId("name");
  const mainHeading = byId("mainHeading");
  const nameText = nameEl ? nameEl.textContent : "";
  const headingText = mainHeading ? mainHeading.textContent : "";
  const mainHeadingPrefix = headingText.replace(nameText, "").trim() || "My Dearest";

  return {
    mainHeadingPrefix,
    greetingText: byId("greetingText")?.textContent || "",
    introText: byId("introText")?.textContent || "",
    valMsg: byId("valMsg")?.textContent || "",
    chatboxText: byId("chatboxText")?.textContent || "",
    sendBtn: byId("sendBtn")?.textContent || "",
    idea1: byId("idea1")?.textContent || "",
    idea2: byId("idea2")?.textContent || "",
    idea3HTML: byId("idea3")?.innerHTML || "",
    idea4: byId("idea4")?.textContent || "",
    idea5HTML: byId("idea5")?.innerHTML || "",
    idea6a: idea6Spans[0]?.textContent || "",
    idea6b: idea6Spans[1]?.textContent || "",
    wishHeading: byId("wishHeading")?.textContent || "",
    wishText: byId("wishText")?.textContent || "",
    galleryTitle: byId("galleryTitle")?.textContent || "",
    closingLine: byId("closingLine")?.textContent || "",
    replay: byId("replay")?.textContent || "",
    surpriseText: byId("surpriseText")?.textContent || "",
    startTitle: byId("startTitle")?.textContent || "",
    startSubtitle: byId("startSubtitle")?.textContent || "",
    startBtn: byId("startBtn")?.textContent || "",
    endingCard: byId("endingCard")?.textContent || "",
    musicPlay: "Play Music",
    musicPause: "Pause Music",
    countdownPrefix: "Valentine's Day in",
  };
};

const translations = {
  bn: {
    mainHeadingPrefix: "আমার প্রিয়",
    greetingText: "আমি বুবুকে আরও বেশি ভালোবাসি!",
    introText: "ভ্যালেন্টাইনস ডে এখনও কিছুটা দূরে, কিন্তু আমার ভালোবাসা আর অপেক্ষা করতে পারে না।",
    valMsg: "শুভ ভ্যালেন্টাইনস ডে, আমার ভালোবাসা!",
    chatboxText: "তোমার সাথে প্রতিটি মুহূর্ত আমার প্রিয়। তুমি কি আমার চিরকালের ভ্যালেন্টাইন হবে?",
    sendBtn: "পাঠাও",
    idea1: "ভেবেছিলাম একটা সহজ শুভেচ্ছাই যথেষ্ট...",
    idea2: "কিন্তু আমার হৃদয় চেয়েছিল আরও...",
    idea3HTML: "কারণ তুমি <strong>সত্যিই বিশেষ</strong>।",
    idea4: "কারণ...",
    idea5HTML: "তুমি আমার সবকিছু! <span>:) </span>",
    idea6a: "ত",
    idea6b: "ো",
    wishHeading: "শুভ ভ্যালেন্টাইনস ডে, সুন্দরী!",
    wishText: "“তোমার চোখে কত অদ্ভুত অদ্ভুত অঙ্গভঙ্গি, তোমার সেই বাতাসগুলো আমার নিঃশ্বাসকে ঘুড়ি বানায়।”",
    galleryTitle: "আমাদের স্মৃতি",
    closingLine: "আশা করি এতে তুমি হাসলে, আমার ভালোবাসা।",
    replay: "আবার দেখতে চাইলে ক্লিক করো।",
    surpriseText: "শুধু মনে করিয়ে দিতে চেয়েছিলাম যে...",
    startTitle: "শুরু করতে ট্যাপ করুন",
    startSubtitle: "তোমার জন্যই এই ছোট্ট মুহূর্ত।",
    startBtn: "শুরু",
    endingCard: "সবসময় তোমার ❤",
    musicPlay: "সঙ্গীত চালু",
    musicPause: "সঙ্গীত বন্ধ",
    countdownPrefix: "ভ্যালেন্টাইন ডে হতে বাকি",
  },
};

const ensureBaseText = () => {
  if (!baseText) baseText = collectBaseText();
};

const applyLanguage = (lang) => {
  ensureBaseText();
  currentLang = lang;
  const isBn = lang === "bn";
  const data = isBn ? translations.bn : baseText;
  const byId = (id) => document.getElementById(id);
  const nameEl = byId("name");
  const mainHeading = byId("mainHeading");
  const nameText = nameEl ? nameEl.textContent : "";
  if (mainHeading) {
    mainHeading.innerHTML = `${data.mainHeadingPrefix} <span id="name">${nameText}</span>`;
  }
  if (byId("greetingText")) byId("greetingText").textContent = data.greetingText;
  if (byId("introText")) byId("introText").textContent = data.introText;
  if (byId("valMsg")) byId("valMsg").textContent = data.valMsg;
  if (byId("chatboxText")) byId("chatboxText").textContent = data.chatboxText;
  if (byId("sendBtn")) byId("sendBtn").textContent = data.sendBtn;
  if (byId("idea1")) byId("idea1").textContent = data.idea1;
  if (byId("idea2")) byId("idea2").textContent = data.idea2;
  if (byId("idea3")) byId("idea3").innerHTML = data.idea3HTML;
  if (byId("idea4")) byId("idea4").textContent = data.idea4;
  if (byId("idea5")) byId("idea5").innerHTML = data.idea5HTML;
  if (byId("idea6")) byId("idea6").innerHTML = `<span>${data.idea6a}</span><span>${data.idea6b}</span>`;
  if (byId("wishHeading")) byId("wishHeading").textContent = data.wishHeading;
  if (byId("wishText")) byId("wishText").textContent = data.wishText;
  if (byId("galleryTitle")) byId("galleryTitle").textContent = data.galleryTitle;
  if (byId("closingLine")) byId("closingLine").textContent = data.closingLine;
  if (byId("replay")) byId("replay").textContent = data.replay;
  if (byId("surpriseText")) byId("surpriseText").textContent = data.surpriseText;
  if (byId("startTitle")) byId("startTitle").textContent = data.startTitle;
  if (byId("startSubtitle")) byId("startSubtitle").textContent = data.startSubtitle;
  if (byId("startBtn")) byId("startBtn").textContent = data.startBtn;
  if (byId("endingCard")) byId("endingCard").textContent = data.endingCard;

  const langToggle = byId("langToggle");
  if (langToggle) langToggle.textContent = isBn ? "English" : "বাংলা";
  document.documentElement.setAttribute("lang", isBn ? "bn" : "en");
  updateCountdown();
};

const resetVisibility = () => {
  if (typeof TweenMax === "undefined") return;
  TweenMax.set(
    [
      ".one",
      ".two",
      ".three",
      ".four",
      ".gallery",
      ".five",
      ".six",
      ".seven",
      ".eight",
      ".nine",
      ".idea-1",
      ".idea-2",
      ".idea-3",
      ".idea-4",
      ".idea-5",
      ".idea-6",
      ".wish-hbd",
      ".wish h5",
      ".fake-btn",
    ],
    { clearProps: "all" }
  );
  TweenMax.set(".eight svg", { visibility: "hidden", opacity: 0, scale: 1 });
  TweenMax.set(".baloons img", { opacity: 1, y: 0 });
  TweenMax.set(".six", { opacity: 1, y: 0, zIndex: 1 });
  TweenMax.set(".four", { opacity: 1, scale: 1, y: 0 });
};

const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  if (!textBoxChars || !hbd || typeof TimelineMax === "undefined") return;

  if (activeTimeline) {
    activeTimeline.kill();
    activeTimeline = null;
  }

  resetVisibility();

  const textBoxText = textBoxChars.textContent;
  const hbdText = hbd.textContent;

  textBoxChars.innerHTML = `<span>${Array.from(textBoxText)
    .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
    .join("")}</span>`;

  hbd.innerHTML = `<span>${Array.from(hbdText)
    .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
    .join("")}</span>`;

  const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

  const tl = new TimelineMax();
  activeTimeline = tl;

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=0")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=0.5")
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=3")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1.2")
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .from(".girl-dp", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" }, "+=1")
    .staggerTo(".eight svg", 0.6, { visibility: "visible", opacity: 0, scale: 60, repeat: 1, repeatDelay: 0.2 }, 0.2)
    .from(".gallery", 0.8, { opacity: 0, y: 12 }, "-=2.8")
    .from(".gallery-title", 0.6, { opacity: 0, y: 8 }, "-=0.5")
    .staggerFrom(".memories img", 0.9, { opacity: 0, y: 24, scale: 0.95, ease: Power2.easeOut }, 0.35)
    .to(".gallery", 0.7, { opacity: 0, y: 10 }, "+=4.5")
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .from("#surpriseText", 0.8, { opacity: 0, y: 10 }, "+=0.2")
    .to(".last-smile", 0.5, { rotation: 90 }, "+=0.3")
    .to("#endingScreen", 0.6, { opacity: 1 }, "+=0.2")
    .to("#endingScreen", 0.8, { opacity: 0 }, "+=2");

  const replyBtn = document.getElementById("replay");
  if (replyBtn) {
    replyBtn.addEventListener("click", () => {
      tl.restart();
      const music = document.getElementById("bgMusic");
      if (music) {
        music.currentTime = 0;
        music.play();
      }
    });
  }
};

// Custom data
const fetchData = () => {
  return fetch("./customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).forEach((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document.getElementById(customData).setAttribute("src", data[customData]);
          } else {
            const el = document.getElementById(customData);
            if (el) el.innerText = data[customData];
          }
        }
      });
    });
};

// Countdown
let lastCountdownMinute = null;
const updateCountdown = () => {
  const countdown = document.getElementById('valCountdown');
  if (!countdown) return;
  const now = new Date();
  let year = now.getFullYear();
  const valentine = new Date(year, 1, 14, 0, 0, 0);
  if (now > valentine) valentine.setFullYear(year + 1);
  const diff = valentine - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  ensureBaseText();
  const label = currentLang === "bn" ? translations.bn.countdownPrefix : baseText.countdownPrefix;
  countdown.textContent = `${label} ${days}d ${hours}h ${mins}m ${secs}s`;
  if (lastCountdownMinute !== mins) {
    lastCountdownMinute = mins;
    countdown.classList.remove("pulse-on-minute");
    void countdown.offsetWidth;
    countdown.classList.add("pulse-on-minute");
    setTimeout(() => countdown.classList.remove("pulse-on-minute"), 650);
  }
};

fetchData().then(() => {
  ensureBaseText();
  applyLanguage(currentLang);
  // Start is triggered by user tap (overlay)
});
updateCountdown();
setInterval(updateCountdown, 1000);

// Music + Start overlay
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");
  const langToggle = document.getElementById("langToggle");
  const overlay = document.getElementById("startOverlay");
  const startBtn = document.getElementById("startBtn");
  const heartCanvas = document.getElementById("heartBurst");
  if (!music || !toggle || !overlay || !startBtn) return;

  const setLabel = () => {
    ensureBaseText();
    const playLabel = currentLang === "bn" ? translations.bn.musicPlay : baseText.musicPlay;
    const pauseLabel = currentLang === "bn" ? translations.bn.musicPause : baseText.musicPause;
    toggle.textContent = music.paused ? playLabel : pauseLabel;
    if (music.paused) {
      toggle.classList.remove("pulse");
    } else {
      toggle.classList.add("pulse");
    }
  };

  const startAll = () => {
    music.currentTime = 0;
    const playPromise = music.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        setLabel();
      });
    }
    overlay.style.display = "none";
    applyLanguage(currentLang);
    animationTimeline();
    setLabel();
  };

  startBtn.addEventListener("click", startAll);

  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
    setLabel();
  });

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "bn" : "en";
      applyLanguage(nextLang);
      const overlayVisible = overlay && overlay.style.display !== "none";
      if (!overlayVisible) {
        animationTimeline();
      }
      setLabel();
    });
  }

  music.addEventListener("ended", () => {
    music.pause();
    music.currentTime = 0;
    setLabel();
  });

  setLabel();
});

// Heart burst on click/tap
(() => {
  const canvas = document.getElementById("heartBurst");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const hearts = [];
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const spawn = (x, y) => {
    for (let i = 0; i < 14; i++) {
      hearts.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 1.2) * 4,
        size: 10 + Math.random() * 8,
        life: 60 + Math.random() * 20,
      });
    }
  };

  const drawHeart = (x, y, size) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 16, size / 16);
    ctx.fillStyle = "rgba(255,77,109,0.85)";
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.bezierCurveTo(-10, -16, -22, -2, 0, 16);
    ctx.bezierCurveTo(22, -2, 10, -16, 0, -6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.x += h.vx;
      h.y += h.vy;
      h.vy += 0.05;
      h.life -= 1;
      if (h.life <= 0) {
        hearts.splice(i, 1);
        continue;
      }
      drawHeart(h.x, h.y, h.size);
    }
    requestAnimationFrame(tick);
  };
  tick();

  window.addEventListener("pointerdown", (e) => {
    spawn(e.clientX, e.clientY);
  });
})();
