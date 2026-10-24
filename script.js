/* ============================================================
   🎂 BIRTHDAY WISHES WEBSITE — SCRIPT.JS
   ============================================================
   
   ╔══════════════════════════════════════════════════════════╗
   ║  ✏️  CUSTOMISATION SECTION — EDIT THE VALUES BELOW!     ║
   ║  Change the name, date, messages, photos, and more.     ║
   ╚══════════════════════════════════════════════════════════╝
   ============================================================ */

const CONFIG = {

  // ── 1. Birthday Person's Name ────────────────────────────
  name: "Sweetheart",

  // ── 2. Birthday Date (YYYY, MM-1, DD) ────────────────────
  //    Note: Months are 0-indexed (January = 0, December = 11)
  //    Example: new Date(2025, 0, 15) = January 15, 2025
  birthdayDate: new Date(2026, 11, 18),  // December 18, 2026

  // ── 3. Birthday Wish (typewriter text) ────────────────────
  birthdayWish:
    "On this special day, I just want you to know how incredibly " +
    "important you are to me. Your smile lights up every room, " +
    "your laughter is the most beautiful melody, and your kindness " +
    "makes the world a better place. Here's to another year of " +
    "beautiful memories, dreams coming true, and all the love " +
    "your heart can hold. Happy Birthday! 🎂💕",

  // ── 4. Personal Letter (shown in the gift box) ───────────
  letterHeading: "Dear Sweetheart,",
  letterBody: [
    "Happy Birthday to the most amazing person I know! 🎉",
    "",
    "Every single day with you feels like a celebration. Your warmth, " +
    "your kindness, your beautiful soul — they make this world so much " +
    "brighter. I am grateful for every moment, every laugh, every " +
    "memory we share together.",
    "",
    "On your special day, I wish you everything your heart desires — " +
    "endless happiness, adventures that take your breath away, and " +
    "all the love this universe has to offer.",
    "",
    "You are my favourite person, my best friend, and my biggest " +
    "inspiration. Never stop being the incredible human that you are. 💖",
    "",
    "Here's to a year filled with magic, surprises, and dreams " +
    "coming true! 🌟"
  ],
  letterSignature: "With all my love ❤️",

  // ── 5. Photo Gallery ──────────────────────────────────────
  //    Replace 'src' with paths to your actual photos.
  //    Set src to "" to show a placeholder icon.
  photos: [
    { src: "photo1.png", caption: "The day we first met 💕", placeholder: "📸" },
    { src: "photo2.png", caption: "Our favourite adventure 🌄", placeholder: "🏔️" },
    { src: "photo3.png", caption: "That unforgettable evening 🌅", placeholder: "🌅" },
    { src: "photo4.png", caption: "Laughing until it hurt 😂", placeholder: "😂" },
    { src: "photo5.png", caption: "Our happy place 🏡", placeholder: "🏡" },
    { src: "photo6.png", caption: "Forever grateful for you 💖", placeholder: "💖" }
  ],

  // ── 6. Final Message ──────────────────────────────────────
  finalMessage: "You deserve all the happiness in the world 💖",
  finalSubtitle: "Thank you for being the most wonderful person",

  // ── 7. Music File ─────────────────────────────────────────
  //    Place your .mp3 file in the same folder and set the name:
  musicFile: "music.mp3",

  // ── 8. Additional Memories / Messages ─────────────────────
  //    (These appear as floating text during celebration)
  memories: [
    "Remember our first adventure? 🌍",
    "Your smile is my favourite thing ✨",
    "Every moment with you is magical 💫",
    "Here's to a million more memories! 🥂"
  ],

  // ── 9. Love Notes (for the Love Notes Jar) ────────────────
  //    Add as many sweet messages as you like!
  loveNotes: [
    "You make my heart smile every single day 💕",
    "I fall in love with you a little more each morning ☀️",
    "Your laugh is my favourite sound in the entire universe 🎵",
    "Being with you feels like coming home 🏡",
    "You are the best thing that ever happened to me ✨",
    "I love the way your eyes light up when you're happy 🌟",
    "Every moment with you is a moment I treasure 💎",
    "You make ordinary days feel extraordinary 🌈",
    "My favourite place in the world is next to you 💖",
    "You are my today and all of my tomorrows 🌅",
    "I would choose you in a hundred lifetimes 💗",
    "Your kindness makes the world a brighter place 🌻",
    "Thank you for being my person 🤗",
    "I love you more than words could ever say 💌",
    "You are the reason I believe in magic ✨"
  ]
};

/* ============================================================
   END OF CUSTOMISATION — Code below runs the magic! ✨
   ============================================================ */

// ── DOM References ──────────────────────────────────────────
const DOM = {
  welcomeScreen:     () => document.getElementById("welcome-screen"),
  btnOpenSurprise:   () => document.getElementById("btn-open-surprise"),
  mainContent:       () => document.getElementById("main-content"),
  welcomeNameDisplay:() => document.getElementById("welcome-name-display"),
  celebrationHeading:() => document.getElementById("celebration-heading"),
  typewriterText:    () => document.getElementById("typewriter-text"),
  candleFlames:      () => document.getElementById("candle-flames"),
  interactiveCake:   () => document.getElementById("interactive-cake-btn"),
  cakeInstruction:   () => document.getElementById("cake-instruction"),
  countdownDisplay:  () => document.getElementById("countdown-display"),
  countdownSubtitle: () => document.getElementById("countdown-subtitle"),
  galleryGrid:       () => document.getElementById("gallery-grid"),
  giftBoxWrapper:    () => document.getElementById("gift-box-wrapper"),
  giftLetter:        () => document.getElementById("gift-letter"),
  letterHeading:     () => document.getElementById("letter-heading"),
  letterBody:        () => document.getElementById("letter-body"),
  letterSignature:   () => document.getElementById("letter-signature"),
  btnReopenGift:     () => document.getElementById("btn-reopen-gift"),
  finalMessage:      () => document.getElementById("final-message"),
  btnReplay:         () => document.getElementById("btn-replay"),
  musicPlayer:       () => document.getElementById("music-player"),
  btnMusicToggle:    () => document.getElementById("btn-music-toggle"),
  musicBars:         () => document.getElementById("music-bars"),
  bgMusic:           () => document.getElementById("bg-music"),
  confettiCanvas:    () => document.getElementById("confetti-canvas"),
  particlesCanvas:   () => document.getElementById("particles-canvas"),
  floatingHearts:    () => document.getElementById("floating-hearts"),
  countdownSection:  () => document.getElementById("countdown-section"),
  fireworksCanvas:   () => document.getElementById("fireworks-canvas"),
  jarBtn:            () => document.getElementById("jar-btn"),
  loveNoteCard:      () => document.getElementById("love-note-card"),
  loveNoteText:      () => document.getElementById("love-note-text"),
  btnNextNote:        () => document.getElementById("btn-next-note"),
  lanternSky:        () => document.getElementById("lantern-sky"),
  btnReleaseLantern: () => document.getElementById("btn-release-lantern"),
  lanternCounter:    () => document.getElementById("lantern-counter"),
  starCanvas:        () => document.getElementById("star-canvas"),
  btnClearStars:     () => document.getElementById("btn-clear-stars"),
  btnHeartConstellation: () => document.getElementById("btn-heart-constellation")
};

// ── State ───────────────────────────────────────────────────
let state = {
  isPlaying: false,
  candlesBlown: false,
  giftOpened: false,
  confettiActive: false,
  typewriterDone: false,
  lanternCount: 0,
  starPoints: [],
  usedNoteIndices: []
};

/* ============================================================
   INITIALISATION
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  populateConfig();
  initParticles();
  bindEvents();
});

function populateConfig() {
  // Set name
  DOM.welcomeNameDisplay().textContent = CONFIG.name;
  DOM.celebrationHeading().textContent = `Happy Birthday, ${CONFIG.name}! 🎉`;
  DOM.letterHeading().textContent = CONFIG.letterHeading;
  DOM.letterSignature().textContent = CONFIG.letterSignature;

  // Populate letter body
  const letterHTML = CONFIG.letterBody
    .map(line => line === "" ? "<br>" : `<p>${line}</p>`)
    .join("");
  DOM.letterBody().innerHTML = letterHTML;

  // Final message
  DOM.finalMessage().textContent = CONFIG.finalMessage;
  const finalSub = document.querySelector("#final-screen .section-subtitle");
  if (finalSub) finalSub.textContent = CONFIG.finalSubtitle;

  // Gallery
  buildGallery();

  // Music source
  const audioSource = DOM.bgMusic().querySelector("source");
  if (audioSource) audioSource.src = CONFIG.musicFile;
  DOM.bgMusic().load();

  // Countdown
  updateCountdown();
}

/* ============================================================
   EVENT BINDINGS
   ============================================================ */
function bindEvents() {
  // Open surprise
  DOM.btnOpenSurprise().addEventListener("click", openSurprise);

  // Blow out candles
  DOM.interactiveCake().addEventListener("click", blowCandles);
  DOM.interactiveCake().addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); blowCandles(); }
  });

  // Gift box
  DOM.giftBoxWrapper().addEventListener("click", openGift);
  DOM.giftBoxWrapper().addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGift(); }
  });

  // Reopen gift
  DOM.btnReopenGift().addEventListener("click", reopenGift);

  // Replay
  DOM.btnReplay().addEventListener("click", replayExperience);

  // Music toggle
  DOM.btnMusicToggle().addEventListener("click", toggleMusic);

  // Click sparkle / heart effect
  document.addEventListener("click", createClickEffect);

  // Love notes jar
  DOM.jarBtn().addEventListener("click", pickLoveNote);
  DOM.jarBtn().addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickLoveNote(); }
  });
  DOM.btnNextNote().addEventListener("click", pickLoveNote);

  // Wish lanterns
  DOM.btnReleaseLantern().addEventListener("click", releaseLantern);

  // Star constellation canvas
  initStarCanvas();
  DOM.btnClearStars().addEventListener("click", clearStars);
  DOM.btnHeartConstellation().addEventListener("click", drawHeartConstellation);

  // Intersection observer for section reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section").forEach(s => observer.observe(s));
}

/* ============================================================
   WELCOME → OPEN SURPRISE
   ============================================================ */
function openSurprise() {
  const welcome = DOM.welcomeScreen();
  welcome.classList.add("fade-out");

  // Start confetti burst
  launchConfetti();

  // Launch fireworks
  launchFireworks();

  // Show music player
  setTimeout(() => DOM.musicPlayer().classList.remove("hidden"), 600);

  setTimeout(() => {
    welcome.style.display = "none";
    DOM.mainContent().classList.remove("hidden");

    // Trigger section visibility
    setTimeout(() => {
      document.querySelectorAll(".section").forEach((s, i) => {
        setTimeout(() => s.classList.add("visible"), i * 300);
      });
    }, 100);

    // Start typewriter
    setTimeout(() => startTypewriter(), 600);

    // Try to play music
    attemptPlayMusic();
  }, 1000);
}

/* ============================================================
   TYPEWRITER EFFECT
   ============================================================ */
function startTypewriter() {
  const text = CONFIG.birthdayWish;
  const el = DOM.typewriterText();
  let index = 0;
  el.textContent = "";

  function type() {
    if (index < text.length) {
      el.textContent += text[index];
      index++;
      const delay = text[index - 1] === "." || text[index - 1] === "!" || text[index - 1] === "?" ? 120 : 30;
      setTimeout(type, delay);
    } else {
      state.typewriterDone = true;
      // Remove cursor after a brief pause
      setTimeout(() => {
        const cursor = document.querySelector(".typewriter-cursor");
        if (cursor) cursor.style.display = "none";
      }, 2000);
    }
  }

  type();
}

/* ============================================================
   BLOW OUT CANDLES
   ============================================================ */
function blowCandles() {
  if (state.candlesBlown) return;
  state.candlesBlown = true;

  const flames = DOM.candleFlames().querySelectorAll(".flame");
  flames.forEach((flame, i) => {
    setTimeout(() => flame.classList.add("blown-out"), i * 150);
  });

  // Show message
  const instruction = DOM.cakeInstruction();
  setTimeout(() => {
    instruction.classList.remove("cake-instruction");
    instruction.classList.add("cake-blown-msg");
    instruction.textContent = "🌟 Your wish will come true! 🌟";
  }, flames.length * 150 + 300);

  // Mini confetti burst
  launchConfetti(80);

  // Show a floating memory
  showFloatingMemory();
}

/* ============================================================
   GIFT BOX
   ============================================================ */
function openGift() {
  if (state.giftOpened) return;
  state.giftOpened = true;

  DOM.giftBoxWrapper().classList.add("opened");

  setTimeout(() => {
    DOM.giftLetter().classList.add("revealed");
    spawnFloatingHearts(15);
  }, 800);
}

function reopenGift() {
  state.giftOpened = false;
  DOM.giftBoxWrapper().classList.remove("opened");
  DOM.giftLetter().classList.remove("revealed");
}

/* ============================================================
   REPLAY
   ============================================================ */
function replayExperience() {
  // Reset state
  state.candlesBlown = false;
  state.giftOpened = false;
  state.typewriterDone = false;
  state.lanternCount = 0;
  state.usedNoteIndices = [];

  // Reset candle flames
  DOM.candleFlames().querySelectorAll(".flame").forEach(f => f.classList.remove("blown-out"));

  // Reset cake instruction
  const instruction = DOM.cakeInstruction();
  instruction.className = "cake-instruction";
  instruction.textContent = "✨ Click the cake to blow out the candles and make a wish! ✨";

  // Reset gift
  DOM.giftBoxWrapper().classList.remove("opened");
  DOM.giftLetter().classList.remove("revealed");

  // Reset love note
  DOM.loveNoteCard().classList.add("hidden");

  // Reset lantern counter
  DOM.lanternCounter().textContent = "Wishes sent: 0";
  DOM.lanternSky().querySelectorAll(".lantern").forEach(l => l.remove());

  // Clear star canvas
  clearStars();

  // Reset sections
  document.querySelectorAll(".section").forEach(s => s.classList.remove("visible"));

  // Hide main, show welcome
  DOM.mainContent().classList.add("hidden");
  DOM.musicPlayer().classList.add("hidden");

  const welcome = DOM.welcomeScreen();
  welcome.style.display = "flex";

  // Needs a frame for the transition to apply
  requestAnimationFrame(() => {
    welcome.classList.remove("fade-out");
  });

  // Pause music
  pauseMusic();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ============================================================
   MUSIC PLAYER
   ============================================================ */
function attemptPlayMusic() {
  const audio = DOM.bgMusic();
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        state.isPlaying = true;
        updateMusicUI();
      })
      .catch(() => {
        // Autoplay blocked — user must click play
        state.isPlaying = false;
        updateMusicUI();
      });
  }
}

function toggleMusic() {
  const audio = DOM.bgMusic();
  if (state.isPlaying) {
    pauseMusic();
  } else {
    audio.play().then(() => {
      state.isPlaying = true;
      updateMusicUI();
    }).catch(() => { /* silently fail if no file */ });
  }
}

function pauseMusic() {
  DOM.bgMusic().pause();
  state.isPlaying = false;
  updateMusicUI();
}

function updateMusicUI() {
  const btn = DOM.btnMusicToggle();
  const bars = DOM.musicBars();
  if (state.isPlaying) {
    btn.textContent = "⏸";
    btn.setAttribute("aria-label", "Pause background music");
    bars.classList.add("playing");
  } else {
    btn.textContent = "▶";
    btn.setAttribute("aria-label", "Play background music");
    bars.classList.remove("playing");
  }
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function updateCountdown() {
  const now = new Date();
  let birthday = new Date(
    now.getFullYear(),
    CONFIG.birthdayDate.getMonth(),
    CONFIG.birthdayDate.getDate()
  );

  // If birthday has passed this year, use next year
  if (now > birthday) {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  const diff = birthday - now;

  // Check if today IS the birthday
  const isToday =
    now.getDate() === CONFIG.birthdayDate.getDate() &&
    now.getMonth() === CONFIG.birthdayDate.getMonth();

  const container = DOM.countdownDisplay();

  if (isToday) {
    container.innerHTML = `
      <div class="birthday-today-msg">🎉 Today is the day! Happy Birthday! 🎉</div>
    `;
    DOM.countdownSubtitle().textContent = "The celebration is NOW!";
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  container.innerHTML = `
    <div class="countdown-item">
      <span class="countdown-number">${days}</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${hours}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${minutes}</span>
      <span class="countdown-label">Minutes</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${seconds}</span>
      <span class="countdown-label">Seconds</span>
    </div>
  `;

  DOM.countdownSubtitle().textContent = "The big day is coming soon!";
}

// Update countdown every second
setInterval(updateCountdown, 1000);

/* ============================================================
   PHOTO GALLERY
   ============================================================ */
function buildGallery() {
  const grid = DOM.galleryGrid();
  grid.innerHTML = "";

  CONFIG.photos.forEach((photo, i) => {
    const card = document.createElement("div");
    card.className = "polaroid";
    card.style.animationDelay = `${i * 0.15}s`;

    let imgHTML;
    if (photo.src && photo.src.trim() !== "") {
      imgHTML = `
        <div class="polaroid-img-wrap">
          <img
            src="${photo.src}"
            alt="${photo.caption}"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'polaroid-placeholder\\'>${photo.placeholder || '📷'}<span>Add your photo</span></div>'"
          />
        </div>`;
    } else {
      imgHTML = `
        <div class="polaroid-img-wrap">
          <div class="polaroid-placeholder">
            ${photo.placeholder || "📷"}
            <span>Add your photo</span>
          </div>
        </div>`;
    }

    card.innerHTML = `
      <div class="polaroid-tape" aria-hidden="true"></div>
      ${imgHTML}
      <p class="polaroid-caption">${photo.caption}</p>
    `;

    grid.appendChild(card);
  });
}

/* ============================================================
   CONFETTI ENGINE (Canvas)
   ============================================================ */
function launchConfetti(particleCount = 200) {
  const canvas = DOM.confettiCanvas();
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = [
    "#f8a4c8", "#c9b1ff", "#ffd700", "#ff6b95",
    "#ffd6c4", "#e76f9a", "#b39ddb", "#fff176",
    "#81d4fa", "#a5d6a7"
  ];

  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      speedX: (Math.random() - 0.5) * 4,
      speedY: Math.random() * 4 + 2,
      opacity: 1,
      shape: Math.random() > 0.5 ? "rect" : "circle"
    });
  }

  let frameCount = 0;
  const maxFrames = 300;

  function animate() {
    frameCount++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;
      p.speedY += 0.04; // gravity
      p.speedX *= 0.99;

      if (frameCount > maxFrames * 0.7) {
        p.opacity -= 0.01;
      }

      if (p.opacity <= 0) return;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    if (frameCount < maxFrames) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();

  // Handle resize
  const resizeHandler = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resizeHandler);
  setTimeout(() => window.removeEventListener("resize", resizeHandler), maxFrames * 16);
}

/* ============================================================
   BACKGROUND PARTICLES (floating stars & sparkles)
   ============================================================ */
function initParticles() {
  const canvas = DOM.particlesCanvas();
  const ctx = canvas.getContext("2d");

  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const count = Math.min(80, Math.floor(window.innerWidth / 15));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      type: Math.random() > 0.7 ? "heart" : "star"
    });
  }

  function drawStar(cx, cy, size, opacity) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.shadowBlur = size * 3;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const method = i === 0 ? "moveTo" : "lineTo";
      ctx[method](cx + size * Math.cos(angle), cy + size * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(cx, cy, size, opacity) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#f8a4c8";
    ctx.shadowColor = "#f8a4c8";
    ctx.shadowBlur = size * 2;
    ctx.beginPath();
    const s = size * 0.6;
    ctx.moveTo(cx, cy + s);
    ctx.bezierCurveTo(cx - s * 2, cy - s, cx, cy - s * 2, cx, cy - s * 0.5);
    ctx.bezierCurveTo(cx, cy - s * 2, cx + s * 2, cy - s, cx, cy + s);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += p.pulseSpeed;

      // Wrap around
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

      if (p.type === "heart") {
        drawHeart(p.x, p.y, p.size, currentOpacity);
      } else {
        drawStar(p.x, p.y, p.size, currentOpacity);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================================
   FLOATING HEARTS (Gift reveal)
   ============================================================ */
function spawnFloatingHearts(count = 12) {
  const container = DOM.floatingHearts();
  const hearts = ["💕", "💖", "💗", "💓", "❤️", "🩷", "💜", "✨"];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (Math.random() * 1 + 1) + "rem";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    container.appendChild(heart);

    // Cleanup
    setTimeout(() => heart.remove(), 6000);
  }
}

/* ============================================================
   FLOATING MEMORY (after blowing candles)
   ============================================================ */
function showFloatingMemory() {
  if (CONFIG.memories.length === 0) return;

  const memory = CONFIG.memories[Math.floor(Math.random() * CONFIG.memories.length)];
  const el = document.createElement("div");
  el.style.cssText = `
    position: fixed;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Dancing Script', cursive;
    font-size: 1.3rem;
    color: var(--clr-pink-deep);
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    padding: 16px 32px;
    border-radius: 50px;
    box-shadow: 0 8px 30px rgba(231,111,154,0.2);
    z-index: 997;
    opacity: 0;
    transition: all 1s ease;
    white-space: nowrap;
    pointer-events: none;
  `;
  el.textContent = memory;
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(-20px)";
  });

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-50%) translateY(-60px)";
    setTimeout(() => el.remove(), 1000);
  }, 3000);
}

/* ============================================================
   CLICK SPARKLE / HEART EFFECT
   ============================================================ */
function createClickEffect(e) {
  const emojis = ["✨", "💖", "🌟", "💕", "⭐", "🩷", "💫"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const el = document.createElement("span");
  el.className = "sparkle-click";
  el.textContent = emoji;
  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 800);
}

/* ============================================================
   FIREWORKS ENGINE (Canvas)
   ============================================================ */
function launchFireworks() {
  const canvas = DOM.fireworksCanvas();
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const rockets = [];
  const sparks = [];
  const colors = ["#f8a4c8", "#c9b1ff", "#ffd700", "#ff6b95", "#81d4fa", "#ffd6c4", "#b39ddb"];
  let frame = 0;
  const maxFrames = 400;

  function spawnRocket() {
    rockets.push({
      x: Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
      y: canvas.height,
      targetY: Math.random() * canvas.height * 0.3 + 60,
      speed: 4 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: []
    });
  }

  function explode(x, y, color) {
    const count = 40 + Math.floor(Math.random() * 30);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 1.5 + Math.random() * 3;
      sparks.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        life: 1,
        decay: 0.012 + Math.random() * 0.01,
        size: 2 + Math.random() * 2
      });
    }
  }

  function animate() {
    frame++;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";

    // Spawn rockets periodically
    if (frame < maxFrames * 0.7 && frame % 30 === 0) {
      spawnRocket();
    }

    // Update rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 6) r.trail.shift();
      r.y -= r.speed;

      // Draw trail
      r.trail.forEach((t, j) => {
        ctx.beginPath();
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = j / r.trail.length * 0.5;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Draw rocket
      ctx.beginPath();
      ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = r.color;
      ctx.fill();

      if (r.y <= r.targetY) {
        explode(r.x, r.y, r.color);
        rockets.splice(i, 1);
      }
    }

    // Update sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.04; // gravity
      s.vx *= 0.99;
      s.life -= s.decay;

      if (s.life <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.life;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (frame < maxFrames || sparks.length > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

/* ============================================================
   LOVE NOTES JAR
   ============================================================ */
function pickLoveNote() {
  const notes = CONFIG.loveNotes;
  if (notes.length === 0) return;

  // Reset if all notes used
  if (state.usedNoteIndices.length >= notes.length) {
    state.usedNoteIndices = [];
  }

  // Pick a random unused note
  let idx;
  do {
    idx = Math.floor(Math.random() * notes.length);
  } while (state.usedNoteIndices.includes(idx));

  state.usedNoteIndices.push(idx);

  const noteCard = DOM.loveNoteCard();
  const noteText = DOM.loveNoteText();

  // Animate out then in
  noteCard.classList.add("hidden");
  setTimeout(() => {
    noteText.textContent = notes[idx];
    noteCard.classList.remove("hidden");
    noteCard.style.animation = "none";
    noteCard.offsetHeight; // trigger reflow
    noteCard.style.animation = "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  }, 150);

  // Spawn hearts
  spawnFloatingHearts(6);
}

/* ============================================================
   WISH LANTERNS
   ============================================================ */
function releaseLantern() {
  const sky = DOM.lanternSky();
  const lantern = document.createElement("div");
  lantern.className = "lantern";
  lantern.innerHTML = `<span>🏮</span><div class="lantern-glow"></div>`;

  // Random horizontal position
  const leftPos = 10 + Math.random() * 80;
  lantern.style.left = leftPos + "%";

  // Random duration
  const duration = 5 + Math.random() * 4;
  lantern.style.animationDuration = duration + "s";

  // Slight random sway
  const sway = (Math.random() - 0.5) * 40;
  lantern.style.setProperty("--sway", sway + "px");

  sky.appendChild(lantern);

  // Cleanup after animation
  setTimeout(() => lantern.remove(), duration * 1000 + 500);

  // Update counter
  state.lanternCount++;
  DOM.lanternCounter().textContent = `Wishes sent: ${state.lanternCount}`;

  // Mini confetti burst
  if (state.lanternCount % 3 === 0) {
    launchConfetti(40);
  }
}

/* ============================================================
   STAR WISH CONSTELLATION
   ============================================================ */
function initStarCanvas() {
  const canvas = DOM.starCanvas();
  const ctx = canvas.getContext("2d");

  // Make canvas responsive
  function resizeStarCanvas() {
    const wrapper = canvas.parentElement;
    const maxW = Math.min(800, wrapper.clientWidth - 40);
    canvas.width = maxW;
    canvas.height = Math.floor(maxW * 0.56);
    redrawStars();
  }
  resizeStarCanvas();
  window.addEventListener("resize", resizeStarCanvas);

  // Click to place stars
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    state.starPoints.push({ x, y, size: 2 + Math.random() * 3 });
    redrawStars();
  });

  // Touch support
  canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.changedTouches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    state.starPoints.push({ x, y, size: 2 + Math.random() * 3 });
    redrawStars();
  });
}

function redrawStars() {
  const canvas = DOM.starCanvas();
  const ctx = canvas.getContext("2d");

  // Clear and redraw background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw connecting lines between nearby stars
  ctx.strokeStyle = "rgba(201, 177, 255, 0.25)";
  ctx.lineWidth = 1;
  state.starPoints.forEach((p1, i) => {
    state.starPoints.forEach((p2, j) => {
      if (i >= j) return;
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (dist < 120) {
        ctx.globalAlpha = 1 - dist / 120;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });
  });
  ctx.globalAlpha = 1;

  // Draw each star
  state.starPoints.forEach(p => {
    drawCanvasStar(ctx, p.x, p.y, p.size);
  });
}

function drawCanvasStar(ctx, cx, cy, size) {
  ctx.save();
  ctx.fillStyle = "#ffd700";
  ctx.shadowColor = "#ffd700";
  ctx.shadowBlur = size * 6;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const method = i === 0 ? "moveTo" : "lineTo";
    ctx[method](cx + size * Math.cos(angle), cy + size * Math.sin(angle));
  }
  ctx.closePath();
  ctx.fill();

  // Bright center
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.5, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.shadowBlur = size * 3;
  ctx.shadowColor = "#fff";
  ctx.fill();
  ctx.restore();
}

function clearStars() {
  state.starPoints = [];
  redrawStars();
}

function drawHeartConstellation() {
  const canvas = DOM.starCanvas();
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = Math.min(w, h) * 0.012;

  // Clear existing
  state.starPoints = [];

  // Heart parametric equation
  const heartPoints = [];
  for (let t = 0; t < Math.PI * 2; t += 0.15) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    heartPoints.push({
      x: cx + x * scale + (Math.random() - 0.5) * 4,
      y: cy + y * scale + (Math.random() - 0.5) * 4,
      size: 2 + Math.random() * 2.5
    });
  }

  // Animate placing stars one by one
  heartPoints.forEach((pt, i) => {
    setTimeout(() => {
      state.starPoints.push(pt);
      redrawStars();
    }, i * 60);
  });
}

/* ============================================================
   WINDOW RESIZE — Resize canvases
   ============================================================ */
window.addEventListener("resize", () => {
  const confetti = DOM.confettiCanvas();
  if (confetti) {
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
  }
  const fw = DOM.fireworksCanvas();
  if (fw) {
    fw.width = window.innerWidth;
    fw.height = window.innerHeight;
  }
});
