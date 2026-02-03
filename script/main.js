// Animation Timeline (English)
let activeTimeline = null;

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
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=0.5")
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=0.2")
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .from(".girl-dp", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" }, "+=1")
    .staggerTo(".eight svg", 0.8, { visibility: "visible", opacity: 0, scale: 70, repeat: 1, repeatDelay: 0.4 }, 0.25)
    .from(".gallery", 0.6, { opacity: 0, y: 12 }, "-=0.5")
    .staggerFrom(".memories img", 0.6, { opacity: 0, y: 24, scale: 0.95, ease: Power2.easeOut }, 0.2)
    .to(".gallery", 0.7, { opacity: 0, y: 10 }, "+=2")
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  const replyBtn = document.getElementById("replay");
  if (replyBtn) {
    replyBtn.addEventListener("click", () => {
      tl.restart();
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
  countdown.textContent = `Valentine's Day in ${days}d ${hours}h ${mins}m ${secs}s`;
};

fetchData().then(() => {
  animationTimeline();
});
updateCountdown();
setInterval(updateCountdown, 1000);

// Music autoplay + toggle
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");
  if (!music || !toggle) return;

  const setLabel = () => {
    toggle.textContent = music.paused ? "Play Music" : "Pause Music";
  };

  const tryPlay = () => {
    const playPromise = music.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        setLabel();
      });
    }
  };

  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
    setLabel();
  });

  setLabel();
  tryPlay();
});
