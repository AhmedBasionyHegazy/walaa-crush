/**
 * Walaa's Sweet Crush - Complete Mobile-First Match-3 Game Engine
 * Handcrafted with love for Walaa ❤️
 */

/* ==========================================================================
   1. Candy SVGs & Definitions
   ========================================================================== */
const CANDY_TYPES = [
  { id: 'strawberry', name: 'Strawberry Heart', color: '#ff2d60', score: 60 },
  { id: 'lemon',      name: 'Lemon Sun Drop',   color: '#ffd600', score: 50 },
  { id: 'orange',     name: 'Orange Star Kiss', color: '#ff9100', score: 50 },
  { id: 'mint',       name: 'Apple Mint Gem',   color: '#00e676', score: 50 },
  { id: 'berry',      name: 'Berry Diamond',    color: '#00b0ff', score: 60 },
  { id: 'plum',       name: 'Royal Plum',       color: '#d500f9', score: 60 }
];

const SVG_ICONS = {
  strawberry: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-straw" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#ff8da1" />
          <stop offset="45%" stop-color="#ff1744" />
          <stop offset="100%" stop-color="#b71c1c" />
        </radialGradient>
      </defs>
      <path d="M50 88 C20 68 8 50 8 32 C8 16 20 8 34 8 C42 8 47 13 50 18 C53 13 58 8 66 8 C80 8 92 16 92 32 C92 50 80 68 50 88 Z"
            fill="url(#grad-straw)" />
      <ellipse cx="32" cy="24" rx="10" ry="6" transform="rotate(-30 32 24)" fill="rgba(255,255,255,0.75)"/>
      <circle cx="24" cy="36" r="3" fill="rgba(255,255,255,0.5)"/>
      <circle cx="68" cy="30" r="4" fill="rgba(255,255,255,0.4)"/>
    </svg>
  `,
  lemon: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-lemon" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fff59d" />
          <stop offset="50%" stop-color="#ffd600" />
          <stop offset="100%" stop-color="#ff6f00" />
        </radialGradient>
      </defs>
      <path d="M50 8 C72 8 88 28 88 52 C88 74 70 90 50 90 C30 90 12 74 12 52 C12 28 28 8 50 8 Z" fill="url(#grad-lemon)"/>
      <circle cx="50" cy="52" r="30" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="4" stroke-dasharray="8 6"/>
      <ellipse cx="36" cy="30" rx="12" ry="7" transform="rotate(-25 36 30)" fill="rgba(255,255,255,0.8)"/>
      <circle cx="30" cy="44" r="3" fill="rgba(255,255,255,0.6)"/>
    </svg>
  `,
  orange: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-orange" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#ffe0b2" />
          <stop offset="45%" stop-color="#ff9800" />
          <stop offset="100%" stop-color="#e65100" />
        </radialGradient>
      </defs>
      <path d="M50 10 L62 34 L88 38 L69 56 L73 82 L50 70 L27 82 L31 56 L12 38 L38 34 Z"
            fill="url(#grad-orange)" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="44" cy="32" rx="9" ry="5" transform="rotate(-20 44 32)" fill="rgba(255,255,255,0.75)"/>
      <circle cx="50" cy="50" r="6" fill="rgba(255,255,255,0.4)"/>
    </svg>
  `,
  mint: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-mint" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#b9f6ca" />
          <stop offset="50%" stop-color="#00e676" />
          <stop offset="100%" stop-color="#007e33" />
        </radialGradient>
      </defs>
      <polygon points="50,8 86,28 86,72 50,92 14,72 14,28" fill="url(#grad-mint)"/>
      <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="3"/>
      <ellipse cx="38" cy="28" rx="8" ry="4" transform="rotate(-15 38 28)" fill="rgba(255,255,255,0.85)"/>
    </svg>
  `,
  berry: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-berry" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#b3e5fc" />
          <stop offset="45%" stop-color="#00b0ff" />
          <stop offset="100%" stop-color="#01579b" />
        </radialGradient>
      </defs>
      <polygon points="50,10 88,50 50,90 12,50" fill="url(#grad-berry)"/>
      <polyline points="28,50 50,28 72,50 50,72 28,50" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="3"/>
      <ellipse cx="42" cy="32" rx="10" ry="5" transform="rotate(-35 42 32)" fill="rgba(255,255,255,0.85)"/>
    </svg>
  `,
  plum: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-plum" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#f8bbd0" />
          <stop offset="45%" stop-color="#d500f9" />
          <stop offset="100%" stop-color="#4a148c" />
        </radialGradient>
      </defs>
      <path d="M12 50 L2 35 L2 65 Z" fill="#d500f9" opacity="0.8"/>
      <path d="M88 50 L98 35 L98 65 Z" fill="#d500f9" opacity="0.8"/>
      <circle cx="50" cy="50" r="38" fill="url(#grad-plum)"/>
      <ellipse cx="38" cy="32" rx="11" ry="6" transform="rotate(-25 38 32)" fill="rgba(255,255,255,0.8)"/>
      <circle cx="62" cy="42" r="5" fill="rgba(255,255,255,0.4)"/>
    </svg>
  `,
  colorBomb: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-bomb" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#5d4037" />
          <stop offset="70%" stop-color="#212121" />
          <stop offset="100%" stop-color="#000000" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#grad-bomb)" stroke="#ffd700" stroke-width="4"/>
      <rect x="30" y="24" width="7" height="4" rx="2" fill="#ff1744" transform="rotate(25 30 24)"/>
      <rect x="62" y="28" width="7" height="4" rx="2" fill="#00e676" transform="rotate(-35 62 28)"/>
      <rect x="70" y="55" width="7" height="4" rx="2" fill="#ffd600" transform="rotate(45 70 55)"/>
      <rect x="45" y="72" width="7" height="4" rx="2" fill="#00b0ff" transform="rotate(15 45 72)"/>
      <rect x="22" y="55" width="7" height="4" rx="2" fill="#d500f9" transform="rotate(-20 22 55)"/>
      <path d="M50 48 C42 40 36 44 36 50 C36 56 50 64 50 64 C50 64 64 56 64 50 C64 44 58 40 50 48 Z" fill="#ff4081"/>
      <text x="50" y="42" font-size="14" text-anchor="middle" fill="#ffd700">👑</text>
    </svg>
  `
};

/* ==========================================================================
   2. Web Audio API Synthesizer (With Mobile Autoplay Support)
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('walaa_sound_muted') === 'true';
    this.initContext();
  }

  initContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  resumeAudio() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('walaa_sound_muted', this.muted);
    return this.muted;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.25, pitchDrop = true) {
    if (this.muted) return;
    try {
      this.initContext();
      this.resumeAudio();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (pitchDrop) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.4), this.ctx.currentTime + duration);
      }

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playPop() {
    this.playTone(520, 'triangle', 0.08, 0.2, false);
  }

  playSwap() {
    this.playTone(380, 'sine', 0.12, 0.2, true);
  }

  playInvalid() {
    this.playTone(200, 'sawtooth', 0.2, 0.15, true);
  }

  playMatch(combo = 1) {
    if (this.muted) return;
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
    const baseIndex = Math.min(notes.length - 2, combo - 1);
    const n1 = notes[baseIndex];
    const n2 = notes[baseIndex + 1];

    this.playTone(n1, 'sine', 0.18, 0.22, false);
    setTimeout(() => this.playTone(n2, 'triangle', 0.22, 0.25, false), 60);
  }

  playSpecial() {
    if (this.muted) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.16, 0.2, false), idx * 45);
    });
  }

  playExplosion() {
    if (this.muted) return;
    this.playTone(120, 'sawtooth', 0.4, 0.35, true);
  }

  playLaser() {
    if (this.muted) return;
    try {
      this.initContext();
      this.resumeAudio();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.28);
    } catch(e) {}
  }

  playWinFanfare() {
    if (this.muted) return;
    const winNotes = [
      { f: 523.25, d: 0.14 },
      { f: 659.25, d: 0.14 },
      { f: 783.99, d: 0.16 },
      { f: 1046.50, d: 0.4 }
    ];
    let time = 0;
    winNotes.forEach(n => {
      setTimeout(() => this.playTone(n.f, 'triangle', n.d, 0.3, false), time);
      time += 120;
    });
  }
}

/* ==========================================================================
   3. Particle & Laser Canvas Effects System (HiDPI Retina Ready)
   ========================================================================== */
class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.beams = [];
    this.running = false;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = rect.width * this.dpr;
    this.canvas.height = rect.height * this.dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  createBurst(x, y, color = '#ff4081', count = 12) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      const isHeart = Math.random() > 0.6;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.random() * 6,
        color,
        isHeart,
        alpha: 1,
        life: 0.025 + Math.random() * 0.035,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }
    this.startLoop();
  }

  createBeam(type, index, cellSize) {
    this.beams.push({
      type,
      index,
      cellSize,
      alpha: 1,
      width: cellSize * 1.1
    });
    this.startLoop();
  }

  createShockwave(x, y, color = '#ff80ab') {
    this.particles.push({
      type: 'shockwave',
      x, y,
      radius: 5,
      maxRadius: 90,
      color,
      alpha: 1
    });
    this.startLoop();
  }

  startLoop() {
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(() => this.update());
    }
  }

  update() {
    const logicalW = this.canvas.width / this.dpr;
    const logicalH = this.canvas.height / this.dpr;
    this.ctx.clearRect(0, 0, logicalW, logicalH);

    // 1. Draw Lasers / Beams
    for (let i = this.beams.length - 1; i >= 0; i--) {
      const b = this.beams[i];
      this.ctx.save();
      this.ctx.globalAlpha = b.alpha;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      this.ctx.shadowColor = '#ff4081';
      this.ctx.shadowBlur = 18;

      if (b.type === 'horizontal') {
        const y = b.index * b.cellSize + b.cellSize / 2;
        this.ctx.fillRect(0, y - b.width / 2, logicalW, b.width);
      } else {
        const x = b.index * b.cellSize + b.cellSize / 2;
        this.ctx.fillRect(x - b.width / 2, 0, b.width, logicalH);
      }
      this.ctx.restore();

      b.alpha -= 0.08;
      b.width *= 0.92;
      if (b.alpha <= 0) this.beams.splice(i, 1);
    }

    // 2. Draw Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      if (p.type === 'shockwave') {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 5;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.stroke();
        this.ctx.restore();

        p.radius += 5;
        p.alpha -= 0.06;
        if (p.alpha <= 0) this.particles.splice(i, 1);
        continue;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.alpha -= p.life;
      p.rotation += p.rotSpeed;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);

      if (p.isHeart) {
        this.ctx.fillStyle = p.color;
        this.ctx.font = `${p.size * 1.7}px serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('❤️', 0, 0);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0 || this.beams.length > 0) {
      requestAnimationFrame(() => this.update());
    } else {
      this.running = false;
    }
  }
}

/* ==========================================================================
   4. Level Configurations
   ========================================================================== */
const LEVELS = [
  {
    id: 1,
    title: 'Level 1: Sweet Beginning',
    shortName: 'Beginning',
    moves: 20,
    targetScore: 2000,
    targetHearts: 0,
    jellies: false,
    stars: [800, 1500, 2000],
    desc: 'Score 2,000 points to win Walaa\'s heart! ❤️'
  },
  {
    id: 2,
    title: 'Level 2: Strawberry Romance',
    shortName: 'Romance',
    moves: 18,
    targetScore: 3500,
    targetHearts: 16,
    jellies: false,
    stars: [1500, 2500, 3500],
    desc: 'Collect 16 Strawberry Hearts for Walaa 🍓'
  },
  {
    id: 3,
    title: 'Level 3: Sweet Jelly Garden',
    shortName: 'Jelly Garden',
    moves: 16,
    targetScore: 4500,
    targetHearts: 0,
    jellies: true,
    stars: [2000, 3500, 4500],
    desc: 'Clear all 16 sweet frosted jelly tiles! 🍮'
  },
  {
    id: 4,
    title: 'Level 4: Sugar Sparkle Craze',
    shortName: 'Sparkle Craze',
    moves: 16,
    targetScore: 6500,
    targetHearts: 0,
    jellies: false,
    specialTarget: 3,
    stars: [3000, 5000, 6500],
    desc: 'Score 6,500 pts & create 3 special candies! ✨'
  },
  {
    id: 5,
    title: 'Level 5: Queen Walaa\'s Finale',
    shortName: 'Queen Finale',
    moves: 18,
    targetScore: 9000,
    targetHearts: 0,
    jellies: true,
    stars: [4000, 7000, 9000],
    desc: 'The Grand Finale challenge for Queen Walaa! 👑'
  },
  {
    id: 99,
    title: 'Endless Sweet Relaxation',
    shortName: 'Endless Zen',
    moves: Infinity,
    targetScore: Infinity,
    targetHearts: 0,
    jellies: false,
    stars: [5000, 15000, 30000],
    desc: 'No move limit! Pure sweet relaxation for Walaa. 🌸'
  }
];

const COMPLIMENTS = [
  'Sweet!',
  'Tasty!',
  'Delicious! 💖',
  'Divine, Walaa! ✨',
  'Sugar Rush! 🍬',
  'Queen of My Heart! 👑',
  'Spectacular Combo! 🌟',
  'Walaa, You Light My World! ❤️',
  'Unstoppable Love! 💕'
];

/* ==========================================================================
   5. Main Game Engine Class
   ========================================================================== */
class WalaaCrushGame {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.grid = [];
    this.jellyGrid = [];
    this.selectedCandy = null;
    this.isProcessing = false;
    this.currentLevelIndex = 0;
    this.score = 0;
    this.movesLeft = 20;
    this.collectedHearts = 0;
    this.createdSpecials = 0;
    this.loveMeterVal = 0;
    this.idleTimer = null;

    // Subsystems
    this.sound = new SoundEngine();
    this.effectsCanvas = document.getElementById('effects-canvas');
    this.particles = new ParticleEngine(this.effectsCanvas);

    // DOM Elements Cache
    this.dom = {
      boardGrid: document.getElementById('board-grid'),
      boardContainer: document.getElementById('board-container'),
      boardBanner: document.getElementById('board-banner'),
      scoreCount: document.getElementById('score-count'),
      movesCount: document.getElementById('moves-count'),
      levelTitle: document.getElementById('level-title'),
      levelGoalDesc: document.getElementById('level-goal-desc'),
      starMeterBar: document.getElementById('star-meter-bar'),
      star1: document.getElementById('star-1'),
      star2: document.getElementById('star-2'),
      star3: document.getElementById('star-3'),
      loveMeterFill: document.getElementById('love-meter-fill'),
      loveMeterText: document.getElementById('love-meter-text'),
      toastContainer: document.getElementById('toast-container'),
      soundIcon: document.getElementById('sound-icon'),
      modalVictory: document.getElementById('modal-victory'),
      modalGameOver: document.getElementById('modal-gameover'),
      modalLevels: document.getElementById('modal-levels'),
      modalInfo: document.getElementById('modal-info'),
      levelSelectorGrid: document.getElementById('level-selector-grid'),
      victoryScore: document.getElementById('victory-score'),
      victoryMoves: document.getElementById('victory-moves'),
      gameoverScore: document.getElementById('gameover-score'),
      gameoverTarget: document.getElementById('gameover-target'),
    };

    this.initBackgroundHearts();
    this.initGlobalTouchUnlock();
    this.initEvents();
    this.loadLevel(0);
  }

  /* ------------------------------------------------------------------------
     Mobile Audio Unlocking on First Gesture
     ------------------------------------------------------------------------ */
  initGlobalTouchUnlock() {
    const unlock = () => {
      this.sound.resumeAudio();
      window.removeEventListener('touchstart', unlock, true);
      window.removeEventListener('pointerdown', unlock, true);
      window.removeEventListener('click', unlock, true);
    };
    window.addEventListener('touchstart', unlock, true);
    window.addEventListener('pointerdown', unlock, true);
    window.addEventListener('click', unlock, true);
  }

  /* ------------------------------------------------------------------------
     Floating Romantic Ambient Background
     ------------------------------------------------------------------------ */
  initBackgroundHearts() {
    const container = document.getElementById('hearts-bg');
    if (!container) return;
    const heartIcons = ['💖', '💕', '🍬', '✨', '🌸', '❤️'];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'floating-heart';
      el.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.animationDuration = `${9 + Math.random() * 12}s`;
      el.style.animationDelay = `${Math.random() * 8}s`;
      el.style.fontSize = `${1 + Math.random() * 1.2}rem`;
      container.appendChild(el);
    }
  }

  /* ------------------------------------------------------------------------
     Event Handlers & UI Controls
     ------------------------------------------------------------------------ */
  initEvents() {
    // Sound Toggle
    document.getElementById('btn-sound').addEventListener('click', () => {
      const isMuted = this.sound.toggleMute();
      this.dom.soundIcon.textContent = isMuted ? '🔇' : '🔊';
    });
    if (this.sound.muted) this.dom.soundIcon.textContent = '🔇';

    // Hint Button
    document.getElementById('btn-hint').addEventListener('click', () => {
      this.showHint();
    });

    // Restart Button
    document.getElementById('btn-restart').addEventListener('click', () => {
      this.loadLevel(this.currentLevelIndex);
    });

    // Level Select Modal Trigger
    document.getElementById('btn-levels').addEventListener('click', () => {
      this.renderLevelSelector();
      this.openModal(this.dom.modalLevels);
    });
    document.getElementById('btn-close-levels').addEventListener('click', () => {
      this.closeModal(this.dom.modalLevels);
    });

    // Love Letter & Rules Modal
    document.getElementById('btn-info').addEventListener('click', () => {
      this.openModal(this.dom.modalInfo);
    });
    document.getElementById('btn-close-info').addEventListener('click', () => {
      this.closeModal(this.dom.modalInfo);
    });

    // Victory Actions
    document.getElementById('btn-replay-level').addEventListener('click', () => {
      this.closeModal(this.dom.modalVictory);
      this.loadLevel(this.currentLevelIndex);
    });
    document.getElementById('btn-next-level').addEventListener('click', () => {
      this.closeModal(this.dom.modalVictory);
      const nextIdx = (this.currentLevelIndex + 1) % LEVELS.length;
      this.loadLevel(nextIdx);
    });

    // Game Over Actions
    document.getElementById('btn-retry').addEventListener('click', () => {
      this.closeModal(this.dom.modalGameOver);
      this.loadLevel(this.currentLevelIndex);
    });
    document.getElementById('btn-gameover-menu').addEventListener('click', () => {
      this.closeModal(this.dom.modalGameOver);
      this.renderLevelSelector();
      this.openModal(this.dom.modalLevels);
    });

    // Window Resize / Orientation Change
    window.addEventListener('resize', () => {
      this.particles.resize();
      this.renderGridVisuals();
    });
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.particles.resize();
        this.renderGridVisuals();
      }, 150);
    });
  }

  openModal(modalEl) {
    modalEl.classList.add('active');
  }

  closeModal(modalEl) {
    modalEl.classList.remove('active');
  }

  /* ------------------------------------------------------------------------
     Level Loading & Initialization
     ------------------------------------------------------------------------ */
  loadLevel(index) {
    this.currentLevelIndex = index;
    const lvl = LEVELS[index];

    this.score = 0;
    this.movesLeft = lvl.moves;
    this.collectedHearts = 0;
    this.createdSpecials = 0;
    this.loveMeterVal = 0;
    this.selectedCandy = null;
    this.isProcessing = false;

    // Setup Jelly Grid
    this.jellyGrid = [];
    for (let r = 0; r < this.rows; r++) {
      this.jellyGrid[r] = [];
      for (let c = 0; c < this.cols; c++) {
        if (lvl.jellies && r >= 2 && r <= 5 && c >= 2 && c <= 5) {
          this.jellyGrid[r][c] = true;
        } else {
          this.jellyGrid[r][c] = false;
        }
      }
    }

    this.updateHUD();
    this.generateValidInitialBoard();
    this.renderBoardDOM();
    this.showBanner(lvl.title);
    this.resetIdleTimer();
  }

  /* ------------------------------------------------------------------------
     Board Generation
     ------------------------------------------------------------------------ */
  generateValidInitialBoard() {
    let attempts = 0;
    do {
      attempts++;
      this.grid = [];
      for (let r = 0; r < this.rows; r++) {
        this.grid[r] = [];
        for (let c = 0; c < this.cols; c++) {
          let forbidden = [];
          if (c >= 2 && this.grid[r][c-1]?.type === this.grid[r][c-2]?.type) {
            forbidden.push(this.grid[r][c-1].type);
          }
          if (r >= 2 && this.grid[r-1][c]?.type === this.grid[r-2][c]?.type) {
            forbidden.push(this.grid[r-1][c].type);
          }

          const available = CANDY_TYPES.filter(t => !forbidden.includes(t.id));
          const chosen = available[Math.floor(Math.random() * available.length)];

          this.grid[r][c] = {
            r, c,
            type: chosen.id,
            special: null
          };
        }
      }
    } while (!this.hasPossibleMoves() && attempts < 100);
  }

  /* ------------------------------------------------------------------------
     DOM Rendering
     ------------------------------------------------------------------------ */
  renderBoardDOM() {
    this.dom.boardGrid.innerHTML = '';

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const tile = document.createElement('div');
        tile.className = `cell-tile ${(r + c) % 2 === 0 ? 'tile-light' : 'tile-dark'}`;
        if (this.jellyGrid[r][c]) tile.classList.add('has-jelly');
        tile.dataset.r = r;
        tile.dataset.c = c;
        this.dom.boardGrid.appendChild(tile);

        const candyData = this.grid[r][c];
        if (candyData) {
          const candyEl = this.createCandyElement(candyData, r, c);
          this.dom.boardGrid.appendChild(candyEl);
        }
      }
    }
    this.renderGridVisuals();
  }

  createCandyElement(candy, r, c) {
    const el = document.createElement('div');
    el.className = 'candy';
    el.dataset.r = r;
    el.dataset.c = c;
    el.id = `candy-${r}-${c}`;

    if (candy.special === 'striped-h') el.classList.add('striped-horizontal');
    if (candy.special === 'striped-v') el.classList.add('striped-vertical');
    if (candy.special === 'wrapped') el.classList.add('wrapped');
    if (candy.special === 'color-bomb') el.classList.add('color-bomb');

    if (candy.special === 'color-bomb') {
      el.innerHTML = SVG_ICONS.colorBomb;
    } else {
      el.innerHTML = SVG_ICONS[candy.type] || SVG_ICONS.strawberry;
    }

    this.attachInteractionHandlers(el, r, c);
    return el;
  }

  renderGridVisuals() {
    const boardWidth = this.dom.boardGrid.clientWidth;
    const cellSize = boardWidth / 8;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const candyEl = document.getElementById(`candy-${r}-${c}`);
        if (candyEl) {
          candyEl.style.width = `${cellSize * 0.92}px`;
          candyEl.style.height = `${cellSize * 0.92}px`;
          candyEl.style.left = `${c * cellSize + cellSize * 0.04}px`;
          candyEl.style.top = `${r * cellSize + cellSize * 0.04}px`;
        }
      }
    }
  }

  /* ------------------------------------------------------------------------
     Rock-Solid Mobile Touch & Desktop Mouse Controller
     ------------------------------------------------------------------------ */
  attachInteractionHandlers(candyEl, r, c) {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;
    let gestureActive = false;

    // --- MOBILE TOUCH EVENTS ---
    candyEl.addEventListener('touchstart', (e) => {
      if (this.isProcessing) return;
      this.sound.resumeAudio();

      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      gestureActive = true;
      isSwiping = false;
    }, { passive: true });

    candyEl.addEventListener('touchmove', (e) => {
      if (!gestureActive || this.isProcessing) return;
      if (e.cancelable) e.preventDefault(); // Stop mobile page bounce / scrolling

      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      const threshold = 16; // Snappy mobile threshold

      if (!isSwiping && (Math.abs(dx) > threshold || Math.abs(dy) > threshold)) {
        isSwiping = true;
        gestureActive = false;

        let targetR = r;
        let targetC = c;

        if (Math.abs(dx) > Math.abs(dy)) {
          targetC += dx > 0 ? 1 : -1;
        } else {
          targetR += dy > 0 ? 1 : -1;
        }

        if (this.isValidCoord(targetR, targetC)) {
          this.attemptSwap(r, c, targetR, targetC);
        }
      }
    }, { passive: false });

    candyEl.addEventListener('touchend', (e) => {
      if (!gestureActive || this.isProcessing) return;
      gestureActive = false;

      // If no swipe occurred, it's a direct tap!
      if (!isSwiping) {
        this.handleCandyClick(r, c);
      }
    }, { passive: true });

    candyEl.addEventListener('touchcancel', () => {
      gestureActive = false;
      isSwiping = false;
    }, { passive: true });

    // --- DESKTOP MOUSE EVENTS ---
    candyEl.addEventListener('mousedown', (e) => {
      if (this.isProcessing || e.button !== 0) return;
      startX = e.clientX;
      startY = e.clientY;
      gestureActive = true;
      isSwiping = false;
    });

    candyEl.addEventListener('mousemove', (e) => {
      if (!gestureActive || this.isProcessing) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const threshold = 20;

      if (!isSwiping && (Math.abs(dx) > threshold || Math.abs(dy) > threshold)) {
        isSwiping = true;
        gestureActive = false;

        let targetR = r;
        let targetC = c;

        if (Math.abs(dx) > Math.abs(dy)) {
          targetC += dx > 0 ? 1 : -1;
        } else {
          targetR += dy > 0 ? 1 : -1;
        }

        if (this.isValidCoord(targetR, targetC)) {
          this.attemptSwap(r, c, targetR, targetC);
        }
      }
    });

    candyEl.addEventListener('mouseup', () => {
      if (!gestureActive || this.isProcessing) return;
      gestureActive = false;
      if (!isSwiping) {
        this.handleCandyClick(r, c);
      }
    });
  }

  handleCandyClick(r, c) {
    this.sound.playPop();
    this.resetIdleTimer();
    this.clearHints();

    if (!this.selectedCandy) {
      this.selectedCandy = { r, c };
      const el = document.getElementById(`candy-${r}-${c}`);
      if (el) el.classList.add('selected');
      return;
    }

    const prevR = this.selectedCandy.r;
    const prevC = this.selectedCandy.c;

    // Clicked the same candy -> Deselect
    if (prevR === r && prevC === c) {
      this.clearSelection();
      return;
    }

    // Check adjacency
    const dist = Math.abs(prevR - r) + Math.abs(prevC - c);
    if (dist === 1) {
      this.clearSelection();
      this.attemptSwap(prevR, prevC, r, c);
    } else {
      // Pick new candy directly
      this.clearSelection();
      this.selectedCandy = { r, c };
      const el = document.getElementById(`candy-${r}-${c}`);
      if (el) el.classList.add('selected');
    }
  }

  clearSelection() {
    if (this.selectedCandy) {
      const el = document.getElementById(`candy-${this.selectedCandy.r}-${this.selectedCandy.c}`);
      if (el) el.classList.remove('selected');
      this.selectedCandy = null;
    }
  }

  /* ------------------------------------------------------------------------
     Swap & Match Processing Pipeline
     ------------------------------------------------------------------------ */
  async attemptSwap(r1, c1, r2, c2) {
    this.isProcessing = true;
    this.clearHints();
    this.clearSelection();
    this.sound.playSwap();

    // Animate visual swap
    await this.animateSwapVisual(r1, c1, r2, c2);

    // Swap data
    const temp = this.grid[r1][c1];
    this.grid[r1][c1] = this.grid[r2][c2];
    this.grid[r2][c2] = temp;
    this.grid[r1][c1].r = r1;
    this.grid[r1][c1].c = c1;
    this.grid[r2][c2].r = r2;
    this.grid[r2][c2].c = c2;

    // Check Special Combos
    const specialComboTriggered = await this.checkSpecialCandyCombos(r1, c1, r2, c2);

    if (specialComboTriggered) {
      this.deductMove();
      await this.processBoardCascades();
      this.isProcessing = false;
      this.checkLevelConditions();
      this.resetIdleTimer();
      return;
    }

    // Check Standard Matches
    const matches = this.findMatches().matches;

    if (matches.length > 0) {
      this.deductMove();
      await this.processBoardCascades();
      this.checkLevelConditions();
    } else {
      // Invalid swap: Revert!
      this.sound.playInvalid();
      await this.animateSwapVisual(r1, c1, r2, c2);
      const revert = this.grid[r1][c1];
      this.grid[r1][c1] = this.grid[r2][c2];
      this.grid[r2][c2] = revert;
      this.grid[r1][c1].r = r1;
      this.grid[r1][c1].c = c1;
      this.grid[r2][c2].r = r2;
      this.grid[r2][c2].c = c2;
    }

    this.isProcessing = false;
    this.resetIdleTimer();
  }

  async animateSwapVisual(r1, c1, r2, c2) {
    const el1 = document.getElementById(`candy-${r1}-${c1}`);
    const el2 = document.getElementById(`candy-${r2}-${c2}`);
    if (!el1 || !el2) return;

    const cellSize = this.dom.boardGrid.clientWidth / 8;
    const top1 = `${r1 * cellSize + cellSize * 0.04}px`;
    const left1 = `${c1 * cellSize + cellSize * 0.04}px`;
    const top2 = `${r2 * cellSize + cellSize * 0.04}px`;
    const left2 = `${c2 * cellSize + cellSize * 0.04}px`;

    el1.style.transition = 'top 0.2s cubic-bezier(0.2, 0.9, 0.3, 1.2), left 0.2s cubic-bezier(0.2, 0.9, 0.3, 1.2)';
    el2.style.transition = 'top 0.2s cubic-bezier(0.2, 0.9, 0.3, 1.2), left 0.2s cubic-bezier(0.2, 0.9, 0.3, 1.2)';

    el1.style.top = top2;
    el1.style.left = left2;
    el2.style.top = top1;
    el2.style.left = left1;

    await this.wait(210);

    el1.id = `candy-${r2}-${c2}`;
    el1.dataset.r = r2;
    el1.dataset.c = c2;

    el2.id = `candy-${r1}-${c1}`;
    el2.dataset.r = r1;
    el2.dataset.c = c1;

    el1.style.transition = '';
    el2.style.transition = '';
  }

  /* ------------------------------------------------------------------------
     Special Candy Combinations
     ------------------------------------------------------------------------ */
  async checkSpecialCandyCombos(r1, c1, r2, c2) {
    const cA = this.grid[r1][c1];
    const cB = this.grid[r2][c2];
    if (!cA || !cB) return false;

    const cellSize = this.dom.boardGrid.clientWidth / 8;

    // 1. Color Bomb + Color Bomb
    if (cA.special === 'color-bomb' && cB.special === 'color-bomb') {
      this.showToast('SUPER BOARD CLEAR! 🌟');
      this.sound.playExplosion();
      this.particles.createShockwave(this.effectsCanvas.width / (2 * this.particles.dpr), this.effectsCanvas.height / (2 * this.particles.dpr), '#ffd700');

      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          this.destroyCandy(r, c, 100);
        }
      }
      await this.wait(350);
      return true;
    }

    // 2. Color Bomb + Regular / Striped
    if (cA.special === 'color-bomb' || cB.special === 'color-bomb') {
      const bomb = cA.special === 'color-bomb' ? cA : cB;
      const target = cA.special === 'color-bomb' ? cB : cA;
      const targetColor = target.type;

      this.sound.playLaser();
      this.destroyCandy(bomb.r, bomb.c, 250);

      const matchingCells = [];
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (this.grid[r][c] && this.grid[r][c].type === targetColor) {
            matchingCells.push({ r, c });
          }
        }
      }

      if (target.special && target.special.startsWith('striped')) {
        this.showToast('STRIPED RAINBOW SHOWER! 🌈');
        for (const cell of matchingCells) {
          if (this.grid[cell.r][cell.c]) {
            this.grid[cell.r][cell.c].special = Math.random() > 0.5 ? 'striped-h' : 'striped-v';
            const el = document.getElementById(`candy-${cell.r}-${cell.c}`);
            if (el) el.classList.add(this.grid[cell.r][cell.c].special === 'striped-h' ? 'striped-horizontal' : 'striped-vertical');
          }
        }
        await this.wait(200);
        for (const cell of matchingCells) {
          this.triggerSpecialCandy(cell.r, cell.c);
          this.destroyCandy(cell.r, cell.c, 150);
        }
      } else {
        this.showToast(`COLOR SPLASH! 💖`);
        for (const cell of matchingCells) {
          this.destroyCandy(cell.r, cell.c, 120);
        }
      }
      await this.wait(350);
      return true;
    }

    // 3. Striped + Wrapped
    if ((cA.special?.startsWith('striped') && cB.special === 'wrapped') ||
        (cB.special?.startsWith('striped') && cA.special === 'wrapped')) {
      this.showToast('MEGA CROSS BLAST! 💥');
      this.sound.playLaser();
      this.sound.playExplosion();

      const centerR = r2;
      const centerC = c2;

      [-1, 0, 1].forEach(offset => {
        const r = centerR + offset;
        const c = centerC + offset;
        if (this.isValidCoord(r, 0)) this.particles.createBeam('horizontal', r, cellSize);
        if (this.isValidCoord(0, c)) this.particles.createBeam('vertical', c, cellSize);
      });

      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (Math.abs(r - centerR) <= 1 || Math.abs(c - centerC) <= 1) {
            this.destroyCandy(r, c, 80);
          }
        }
      }
      await this.wait(350);
      return true;
    }

    // 4. Striped + Striped
    if (cA.special?.startsWith('striped') && cB.special?.startsWith('striped')) {
      this.showToast('CROSS LASER! ⚡');
      this.sound.playLaser();
      this.particles.createBeam('horizontal', r2, cellSize);
      this.particles.createBeam('vertical', c2, cellSize);

      for (let c = 0; c < this.cols; c++) this.destroyCandy(r2, c, 60);
      for (let r = 0; r < this.rows; r++) this.destroyCandy(r, c2, 60);

      await this.wait(300);
      return true;
    }

    // 5. Wrapped + Wrapped
    if (cA.special === 'wrapped' && cB.special === 'wrapped') {
      this.showToast('DOUBLE LOVE BOMB! 💣');
      this.sound.playExplosion();
      this.particles.createShockwave(c2 * cellSize + cellSize / 2, r2 * cellSize + cellSize / 2, '#ff4081');

      for (let r = r2 - 2; r <= r2 + 2; r++) {
        for (let c = c2 - 2; c <= c2 + 2; c++) {
          if (this.isValidCoord(r, c)) this.destroyCandy(r, c, 90);
        }
      }
      await this.wait(350);
      return true;
    }

    return false;
  }

  /* ------------------------------------------------------------------------
     Match Finder
     ------------------------------------------------------------------------ */
  findMatches() {
    const matchedCoords = new Set();
    const specialCreations = [];

    // Horizontal matches
    for (let r = 0; r < this.rows; r++) {
      let runLength = 1;
      for (let c = 1; c <= this.cols; c++) {
        const curr = c < this.cols ? this.grid[r][c] : null;
        const prev = this.grid[r][c - 1];

        if (curr && prev && curr.type === prev.type && curr.special !== 'color-bomb') {
          runLength++;
        } else {
          if (runLength >= 3) {
            const startC = c - runLength;
            const matchCells = [];
            for (let i = startC; i < c; i++) {
              matchedCoords.add(`${r},${i}`);
              matchCells.push({ r, c: i });
            }

            if (runLength >= 5) {
              const mid = matchCells[Math.floor(matchCells.length / 2)];
              specialCreations.push({ r: mid.r, c: mid.c, type: prev.type, special: 'color-bomb' });
            } else if (runLength === 4) {
              const mid = matchCells[1];
              specialCreations.push({ r: mid.r, c: mid.c, type: prev.type, special: 'striped-v' });
            }
          }
          runLength = 1;
        }
      }
    }

    // Vertical matches
    for (let c = 0; c < this.cols; c++) {
      let runLength = 1;
      for (let r = 1; r <= this.rows; r++) {
        const curr = r < this.rows ? this.grid[r][c] : null;
        const prev = this.grid[r - 1][c];

        if (curr && prev && curr.type === prev.type && curr.special !== 'color-bomb') {
          runLength++;
        } else {
          if (runLength >= 3) {
            const startR = r - runLength;
            const matchCells = [];
            for (let i = startR; i < r; i++) {
              matchedCoords.add(`${i},${c}`);
              matchCells.push({ r, c });
            }

            if (runLength >= 5) {
              const mid = matchCells[Math.floor(matchCells.length / 2)];
              specialCreations.push({ r: mid.r, c: mid.c, type: prev.type, special: 'color-bomb' });
            } else if (runLength === 4) {
              const mid = matchCells[1];
              specialCreations.push({ r: mid.r, c: mid.c, type: prev.type, special: 'striped-h' });
            }
          }
          runLength = 1;
        }
      }
    }

    const matchesArray = Array.from(matchedCoords).map(str => {
      const [r, c] = str.split(',').map(Number);
      return { r, c };
    });

    return { matches: matchesArray, specialCreations };
  }

  /* ------------------------------------------------------------------------
     Board Cascades Pipeline
     ------------------------------------------------------------------------ */
  async processBoardCascades() {
    let combo = 0;

    while (true) {
      const matchResult = this.findMatches();
      const matches = matchResult.matches;
      if (matches.length === 0) break;

      combo++;
      this.sound.playMatch(combo);

      if (combo >= 2) {
        const msg = COMPLIMENTS[Math.min(COMPLIMENTS.length - 1, combo - 1)];
        this.showToast(msg);
      }

      // 1. Trigger specials
      for (const m of matches) {
        this.triggerSpecialCandy(m.r, m.c);
      }

      // 2. Clear jelly
      for (const m of matches) {
        if (this.jellyGrid[m.r][m.c]) {
          this.jellyGrid[m.r][m.c] = false;
          const tile = document.querySelector(`.cell-tile[data-r="${m.r}"][data-c="${m.c}"]`);
          if (tile) tile.classList.remove('has-jelly');
          this.addScore(150);
        }
      }

      // 3. Destroy matched candies
      for (const m of matches) {
        const candy = this.grid[m.r][m.c];
        if (candy && candy.type === 'strawberry') {
          this.collectedHearts++;
        }
        this.destroyCandy(m.r, m.c, 60 * combo);
      }

      // 4. Place specials
      for (const spec of matchResult.specialCreations) {
        this.createdSpecials++;
        this.grid[spec.r][spec.c] = {
          r: spec.r,
          c: spec.c,
          type: spec.type,
          special: spec.special
        };
        const el = this.createCandyElement(this.grid[spec.r][spec.c], spec.r, spec.c);
        this.dom.boardGrid.appendChild(el);
        this.particles.createShockwave(
          spec.c * (this.dom.boardGrid.clientWidth / 8) + 25,
          spec.r * (this.dom.boardGrid.clientWidth / 8) + 25,
          '#ffd700'
        );
        this.sound.playSpecial();
      }

      await this.wait(240);

      // 5. Gravity
      await this.applyGravity();

      // 6. Refill
      await this.refillEmptyCells();

      await this.wait(180);
    }

    if (!this.hasPossibleMoves()) {
      await this.reshuffleBoard();
    }
  }

  triggerSpecialCandy(r, c) {
    const candy = this.grid[r][c];
    if (!candy || !candy.special) return;

    const cellSize = this.dom.boardGrid.clientWidth / 8;

    if (candy.special === 'striped-h') {
      this.sound.playLaser();
      this.particles.createBeam('horizontal', r, cellSize);
      for (let col = 0; col < this.cols; col++) this.destroyCandy(r, col, 50);
    } else if (candy.special === 'striped-v') {
      this.sound.playLaser();
      this.particles.createBeam('vertical', c, cellSize);
      for (let row = 0; row < this.rows; row++) this.destroyCandy(row, c, 50);
    } else if (candy.special === 'wrapped') {
      this.sound.playExplosion();
      this.particles.createShockwave(c * cellSize + cellSize / 2, r * cellSize + cellSize / 2, '#ff4081');
      for (let row = r - 1; row <= r + 1; row++) {
        for (let col = c - 1; col <= c + 1; col++) {
          if (this.isValidCoord(row, col)) this.destroyCandy(row, col, 80);
        }
      }
    }
  }

  destroyCandy(r, c, points = 60) {
    const candy = this.grid[r][c];
    if (!candy) return;

    const el = document.getElementById(`candy-${r}-${c}`);
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = this.dom.boardGrid.getBoundingClientRect();
      const x = rect.left - parentRect.left + rect.width / 2;
      const y = rect.top - parentRect.top + rect.height / 2;

      const candyInfo = CANDY_TYPES.find(t => t.id === candy.type);
      this.particles.createBurst(x, y, candyInfo ? candyInfo.color : '#ff4081');
      el.remove();
    }

    this.grid[r][c] = null;
    this.addScore(points);
    this.chargeLoveMeter(points);
  }

  /* ------------------------------------------------------------------------
     Gravity & Refilling
     ------------------------------------------------------------------------ */
  async applyGravity() {
    const cellSize = this.dom.boardGrid.clientWidth / 8;
    let anyDropped = false;

    for (let c = 0; c < this.cols; c++) {
      let emptyRow = this.rows - 1;

      for (let r = this.rows - 1; r >= 0; r--) {
        if (this.grid[r][c] !== null) {
          if (r !== emptyRow) {
            anyDropped = true;
            this.grid[emptyRow][c] = this.grid[r][c];
            this.grid[r][c] = null;
            this.grid[emptyRow][c].r = emptyRow;
            this.grid[emptyRow][c].c = c;

            const el = document.getElementById(`candy-${r}-${c}`);
            if (el) {
              el.id = `candy-${emptyRow}-${c}`;
              el.dataset.r = emptyRow;
              el.style.transition = 'top 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)';
              el.style.top = `${emptyRow * cellSize + cellSize * 0.04}px`;
            }
          }
          emptyRow--;
        }
      }
    }

    if (anyDropped) await this.wait(230);
  }

  async refillEmptyCells() {
    const cellSize = this.dom.boardGrid.clientWidth / 8;

    for (let c = 0; c < this.cols; c++) {
      let spawnCount = 0;
      for (let r = this.rows - 1; r >= 0; r--) {
        if (this.grid[r][c] === null) {
          spawnCount++;
          const randomType = CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)].id;
          this.grid[r][c] = {
            r, c,
            type: randomType,
            special: null
          };

          const el = this.createCandyElement(this.grid[r][c], r, c);
          el.style.width = `${cellSize * 0.92}px`;
          el.style.height = `${cellSize * 0.92}px`;
          el.style.left = `${c * cellSize + cellSize * 0.04}px`;
          el.style.top = `${-spawnCount * cellSize}px`;
          this.dom.boardGrid.appendChild(el);

          setTimeout(() => {
            el.style.transition = 'top 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)';
            el.style.top = `${r * cellSize + cellSize * 0.04}px`;
          }, 20);
        }
      }
    }
    await this.wait(290);
  }

  /* ------------------------------------------------------------------------
     Move Detection & Board Reshuffling
     ------------------------------------------------------------------------ */
  hasPossibleMoves() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.grid[r][c]?.special === 'color-bomb') return true;
        if (c < this.cols - 1 && this.checkVirtualSwapMatch(r, c, r, c + 1)) return true;
        if (r < this.rows - 1 && this.checkVirtualSwapMatch(r, c, r + 1, c)) return true;
      }
    }
    return false;
  }

  checkVirtualSwapMatch(r1, c1, r2, c2) {
    const cA = this.grid[r1][c1];
    const cB = this.grid[r2][c2];
    if (!cA || !cB) return false;

    this.grid[r1][c1] = cB;
    this.grid[r2][c2] = cA;

    const matches = this.findMatches().matches;

    this.grid[r1][c1] = cA;
    this.grid[r2][c2] = cB;

    return matches.length > 0;
  }

  async reshuffleBoard() {
    this.showBanner('Reshuffling Candies... 🍭');
    this.sound.playSwap();
    await this.wait(600);

    let solvable = false;
    while (!solvable) {
      const candyPool = [];
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (this.grid[r][c]) {
            candyPool.push({ type: this.grid[r][c].type, special: this.grid[r][c].special });
          }
        }
      }

      candyPool.sort(() => Math.random() - 0.5);

      let idx = 0;
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          this.grid[r][c] = {
            r, c,
            type: candyPool[idx].type,
            special: candyPool[idx].special
          };
          idx++;
        }
      }

      if (this.findMatches().matches.length === 0 && this.hasPossibleMoves()) {
        solvable = true;
      }
    }

    this.renderBoardDOM();
    await this.wait(300);
  }

  /* ------------------------------------------------------------------------
     Hint System
     ------------------------------------------------------------------------ */
  showHint() {
    this.clearHints();
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (c < this.cols - 1 && this.checkVirtualSwapMatch(r, c, r, c + 1)) {
          this.highlightCandy(r, c);
          this.highlightCandy(r, c + 1);
          return;
        }
        if (r < this.rows - 1 && this.checkVirtualSwapMatch(r, c, r + 1, c)) {
          this.highlightCandy(r, c);
          this.highlightCandy(r + 1, c);
          return;
        }
      }
    }
  }

  highlightCandy(r, c) {
    const el = document.getElementById(`candy-${r}-${c}`);
    if (el) el.classList.add('hint');
  }

  clearHints() {
    document.querySelectorAll('.candy.hint').forEach(el => el.classList.remove('hint'));
  }

  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.showHint();
    }, 5000);
  }

  /* ------------------------------------------------------------------------
     Scoring, Love Meter, HUD & Star Ratings
     ------------------------------------------------------------------------ */
  addScore(pts) {
    this.score += pts;
    this.dom.scoreCount.textContent = this.score.toLocaleString();

    const lvl = LEVELS[this.currentLevelIndex];
    if (lvl.stars) {
      const pct = Math.min(100, (this.score / lvl.stars[2]) * 100);
      this.dom.starMeterBar.style.width = `${pct}%`;

      if (this.score >= lvl.stars[0]) this.dom.star1.classList.add('achieved');
      if (this.score >= lvl.stars[1]) this.dom.star2.classList.add('achieved');
      if (this.score >= lvl.stars[2]) this.dom.star3.classList.add('achieved');
    }
  }

  chargeLoveMeter(pts) {
    this.loveMeterVal = Math.min(100, this.loveMeterVal + pts * 0.045);
    this.dom.loveMeterFill.style.width = `${this.loveMeterVal}%`;
    this.dom.loveMeterText.textContent = `${Math.floor(this.loveMeterVal)}%`;

    if (this.loveMeterVal >= 100) {
      this.triggerLoveRush();
    }
  }

  triggerLoveRush() {
    this.loveMeterVal = 0;
    this.dom.loveMeterFill.style.width = '0%';
    this.dom.loveMeterText.textContent = '0%';

    this.showBanner('WALAA LOVE RUSH! ❤️');
    this.showToast('Sweet Love Shower! 💖');
    this.sound.playWinFanfare();

    let placed = 0;
    for (let r = 0; r < this.rows && placed < 2; r++) {
      for (let c = 0; c < this.cols && placed < 2; c++) {
        if (this.grid[r][c] && !this.grid[r][c].special) {
          this.grid[r][c].special = 'color-bomb';
          const el = document.getElementById(`candy-${r}-${c}`);
          if (el) {
            el.className = 'candy color-bomb';
            el.innerHTML = SVG_ICONS.colorBomb;
          }
          placed++;
        }
      }
    }
    this.addScore(1000);
  }

  deductMove() {
    const lvl = LEVELS[this.currentLevelIndex];
    if (lvl.moves !== Infinity) {
      this.movesLeft--;
      this.dom.movesCount.textContent = this.movesLeft;
    }
  }

  updateHUD() {
    const lvl = LEVELS[this.currentLevelIndex];
    this.dom.levelTitle.textContent = lvl.shortName;
    this.dom.levelGoalDesc.textContent = lvl.desc;
    this.dom.movesCount.textContent = lvl.moves === Infinity ? '∞' : lvl.moves;
    this.dom.scoreCount.textContent = '0';
    this.dom.starMeterBar.style.width = '0%';
    this.dom.star1.classList.remove('achieved');
    this.dom.star2.classList.remove('achieved');
    this.dom.star3.classList.remove('achieved');
    this.dom.loveMeterFill.style.width = '0%';
    this.dom.loveMeterText.textContent = '0%';
  }

  /* ------------------------------------------------------------------------
     Level Objectives & Win / Loss
     ------------------------------------------------------------------------ */
  checkLevelConditions() {
    const lvl = LEVELS[this.currentLevelIndex];

    let win = false;
    if (lvl.jellies) {
      let jelliesLeft = 0;
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (this.jellyGrid[r][c]) jelliesLeft++;
        }
      }
      if (jelliesLeft === 0 && this.score >= lvl.targetScore) win = true;
    } else if (lvl.targetHearts > 0) {
      if (this.collectedHearts >= lvl.targetHearts && this.score >= lvl.targetScore) win = true;
    } else if (lvl.specialTarget > 0) {
      if (this.createdSpecials >= lvl.specialTarget && this.score >= lvl.targetScore) win = true;
    } else if (this.score >= lvl.targetScore) {
      win = true;
    }

    if (win) {
      this.handleVictory();
      return;
    }

    if (lvl.moves !== Infinity && this.movesLeft <= 0) {
      this.handleGameOver();
    }
  }

  handleVictory() {
    this.sound.playWinFanfare();
    this.dom.victoryScore.textContent = this.score.toLocaleString();
    this.dom.victoryMoves.textContent = this.movesLeft;
    this.openModal(this.dom.modalVictory);

    const savedLevel = parseInt(localStorage.getItem('walaa_max_level') || '0', 10);
    if (this.currentLevelIndex + 1 > savedLevel) {
      localStorage.setItem('walaa_max_level', this.currentLevelIndex + 1);
    }
  }

  handleGameOver() {
    const lvl = LEVELS[this.currentLevelIndex];
    this.sound.playTone(220, 'sawtooth', 0.5, 0.25, true);
    this.dom.gameoverScore.textContent = this.score.toLocaleString();
    this.dom.gameoverTarget.textContent = lvl.targetScore.toLocaleString();
    this.openModal(this.dom.modalGameOver);
  }

  /* ------------------------------------------------------------------------
     Level Selector Modal
     ------------------------------------------------------------------------ */
  renderLevelSelector() {
    this.dom.levelSelectorGrid.innerHTML = '';
    const maxUnlocked = parseInt(localStorage.getItem('walaa_max_level') || '0', 10);

    LEVELS.forEach((lvl, idx) => {
      const card = document.createElement('div');
      card.className = `level-card-select ${idx === this.currentLevelIndex ? 'active-level' : ''}`;
      
      const num = document.createElement('div');
      num.className = 'level-number';
      num.textContent = lvl.id === 99 ? '∞' : lvl.id;

      const name = document.createElement('div');
      name.className = 'level-name-small';
      name.textContent = lvl.shortName;

      const stars = document.createElement('div');
      stars.className = 'level-stars-small';
      stars.textContent = idx <= maxUnlocked ? '⭐⭐⭐' : '🔒';

      card.appendChild(num);
      card.appendChild(name);
      card.appendChild(stars);

      card.addEventListener('click', () => {
        this.closeModal(this.dom.modalLevels);
        this.loadLevel(idx);
      });

      this.dom.levelSelectorGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------------
     Toasts & Board Banners
     ------------------------------------------------------------------------ */
  showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 1200);
  }

  showBanner(msg) {
    this.dom.boardBanner.textContent = msg;
    this.dom.boardBanner.classList.add('show');
    setTimeout(() => {
      this.dom.boardBanner.classList.remove('show');
    }, 1400);
  }

  /* ------------------------------------------------------------------------
     Helper Utilities
     ------------------------------------------------------------------------ */
  isValidCoord(r, c) {
    return r >= 0 && r < this.rows && c >= 0 && c < this.cols;
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Start Game when DOM is Ready
window.addEventListener('DOMContentLoaded', () => {
  window.walaaGame = new WalaaCrushGame();
});
