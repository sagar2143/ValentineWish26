// Animation Timeline (reference-style)
let activeTimeline = null;
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  if (!textBoxChars || !hbd || typeof TimelineMax === "undefined") return;

  // Kill previous timeline (language switch restarts)
  if (activeTimeline) {
    activeTimeline.kill();
    activeTimeline = null;
  }

  // Reset inline styles from prior animation
  TweenMax.set(
    [
      ".one",
      ".two",
      ".three",
      ".four",
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
    ],
    { clearProps: "all" }
  );

  const textBoxText = textBoxChars.textContent;
  const hbdText = hbd.textContent;

  textBoxChars.innerHTML = `<span>${textBoxText
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbdText
    .split("")
    .join("</span><span>")}</span>`;

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
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1")
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .from(".girl-dp", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
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

// Language Switcher
const setupLanguage = () => {
  const langBtn = document.getElementById("langSwitch");
  if (!langBtn) return;

  let isBengali = false;
  const lines = {
    en: {
      mainHeading: 'My Dearest <span id="name">Manisha</span>',
      valMsg: 'Happy Valentine\'s Day, my love!',
      idea1: 'I thought a simple wish would do...',
      idea2: 'But my heart wanted more.',
      idea3: 'Since you deserve something <strong>truly special</strong>.',
      idea4: 'Because...',
      idea5: 'You are my everything! <span>:)</span>',
      idea6: '<span>S</span><span>O</span>',
      wishHeading: 'Happy  Valentine\'s  Day,  Beautiful!',
    },
    bn: {
      mainHeading: 'আমার প্রিয় <span id="name">Manisha</span>',
      valMsg: 'শুভ ভালোবাসা দিবস, আমার ভালোবাসা!',
      idea1: 'একটা সাধারণ শুভেচ্ছা দিলেই হয়তো ভাবছিলাম...',
      idea2: 'কিন্তু মন বলল, সে আলাদা।',
      idea3: 'কারণ তুমি আমার কাছে <strong>সবচেয়ে প্রিয়</strong>  একজন।',
      idea4: 'আর...',
      idea5: 'তুমি আমার সবকিছু! <span>:)</span>',
      idea6: '<span>তা</span><span>ই</span>',
      wishHeading: 'শুভ ভালোবাসা দিবস, সুন্দরী!',
    }
  };

  const safeSet = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  langBtn.addEventListener("click", () => {
    isBengali = !isBengali;
    const lang = isBengali ? "bn" : "en";
    langBtn.textContent = isBengali ? "🌐 English" : "🌐 বাংলা";
    safeSet("mainHeading", lines[lang].mainHeading);
    safeSet("valMsg", lines[lang].valMsg);
    safeSet("idea1", lines[lang].idea1);
    safeSet("idea2", lines[lang].idea2);
    safeSet("idea3", lines[lang].idea3);
    safeSet("idea4", lines[lang].idea4);
    safeSet("idea5", lines[lang].idea5);
    safeSet("idea6", lines[lang].idea6);
    safeSet("wishHeading", lines[lang].wishHeading);

    animationTimeline();
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
setupLanguage();
updateCountdown();
setInterval(updateCountdown, 1000);
