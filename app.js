/**
 * Interactivity, Logic & Translations for Premium Wedding Invitation Site
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. TRANSLATION DICTIONARY DATA (ONLY STRICTLY REQUESTED CONTENT)
  // ==========================================================================
  const translations = {
    uz: {
      title: "Anvar & Laylo — Taklifnoma",
      hero_subtitle: "Nikoh To'yi",
      hero_quote: "«Sevgi — bu bir-biriga qarash emas, balki bir yo‘nalishda birga qarashdir.»",
      hero_author: "— Jaloliddin Rumiy",
      invite_body: "Aziz va qadrli insonlar, Biz hayotimizning yangi bosqichiga qadam qo‘ymoqdamiz. Bu kun — faqat marosim emas, bu — ikki qalbning bir yo‘lga aylanishi. Sizning ishtirokingiz biz uchun qadrlidir.",
      details_body: "Sana: 13.06.2026 | Vaqt: 10:00 | Manzil: Labi Hovuz",
      closing_quote: "«Ba’zi lahzalar so‘zga sig‘maydi. Ular faqat his qilinadi. Sizni yonimizda ko‘rishdan mamnun bo‘lamiz.»",
      scroll_open: "Ochish uchun bosing",
      countdown_subtitle: "Tantanaga qolgan vaqt",
      countdown_days: "Kun",
      countdown_hours: "Soat",
      countdown_minutes: "Daqiqa",
      countdown_seconds: "Soniya",
      music_label: "Fon musiqasi",
      footer_closing: "Muhabbat bilan, Anvar & Laylo"
    },
    ru: {
      title: "Свадебное Приглашение — Анвар и Лайло",
      hero_subtitle: "Свадебное Торжество",
      hero_quote: "«Любовь — это не смотреть друг на друга, а смотреть в одном направлении.»",
      hero_author: "— Джалаладдин Руми",
      invite_body: "Дорогие и близкие нам люди, мы делаем шаг в новый этап нашей жизни. Этот день — не просто церемония, а слияние двух сердец в единый путь. Ваше присутствие очень дорого для нас.",
      details_body: "Дата: 13.06.2026 | Время: 10:00 | Место: Лаби Хауз",
      closing_quote: "«Есть моменты, которые не выразить словами. Их можно только почувствовать. Будем рады видеть вас рядом с нами.»",
      scroll_open: "Открыть приглашение",
      countdown_subtitle: "До свадьбы осталось",
      countdown_days: "Дней",
      countdown_hours: "Часов",
      countdown_minutes: "Минут",
      countdown_seconds: "Секунд",
      music_label: "Фоновая музыка",
      footer_closing: "С любовью, Анвар и Лайло"
    },
    en: {
      title: "Anvar & Laylo — Wedding Invitation",
      hero_subtitle: "Wedding Celebration",
      hero_quote: "\"Love does not consist in gazing at each other, but in looking together in the same direction.\"",
      hero_author: "— Jalaluddin Rumi",
      invite_body: "Dear family and friends, we are taking a step into a new chapter of our lives. This day is not just a ceremony, but the union of two hearts into one path. Your presence is very precious to us.",
      details_body: "Date: 13.06.2026 | Time: 10:00 | Venue: Labi Hovuz",
      closing_quote: "\"Some moments are beyond words. They can only be felt. We look forward to seeing you by our side.\"",
      scroll_open: "Scroll to Open",
      countdown_subtitle: "The Celebration Begins In",
      countdown_days: "Days",
      countdown_hours: "Hours",
      countdown_minutes: "Minutes",
      countdown_seconds: "Seconds",
      music_label: "Background Music",
      footer_closing: "With love, Anvar & Laylo"
    }
  };

  let currentLang = 'uz';

  // ==========================================================================
  // 2. TRANSLATION CHANGER FUNCTION (setLanguage)
  // ==========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);

    // Update active button state styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all standard text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Translate page Title
    document.title = translations[lang]['title'] || "Wedding Invitation";
  }

  // Bind Switcher Click Events
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Load language preference from LocalStorage (fallback: uz)
  const savedLang = localStorage.getItem('wedding_lang') || 'uz';
  setLanguage(savedLang);

  // ==========================================================================
  // 3. BACKGROUND MUSIC CONTROLLER & AUTOPLAY LOGIC
  // ==========================================================================
  const audio = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const iconMuted = document.getElementById('music-icon-muted');
  const iconPlaying = document.getElementById('music-icon-playing');
  const soundWave = document.getElementById('music-wave');
  const scrollBtn = document.getElementById('scroll-btn');
  
  let isPlaying = false;

  function playAudio() {
    if (!audio) return;
    audio.play().then(() => {
      if (iconMuted) iconMuted.style.display = 'none';
      if (iconPlaying) iconPlaying.style.display = 'block';
      if (soundWave) soundWave.classList.add('playing');
      if (musicToggle) musicToggle.classList.add('playing');
      isPlaying = true;
    }).catch(error => {
      console.log('Playback blocked. Awaiting interaction:', error);
    });
  }

  function pauseAudio() {
    if (!audio) return;
    audio.pause();
    if (iconPlaying) iconPlaying.style.display = 'none';
    if (iconMuted) iconMuted.style.display = 'block';
    if (soundWave) soundWave.classList.remove('playing');
    if (musicToggle) musicToggle.classList.remove('playing');
    isPlaying = false;
  }
  
  function toggleMusic() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }
  
  if (musicToggle) {
    musicToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering document click
      toggleMusic();
    });
  }
  
  // Interactive handler to bypass browser audio policies
  const startAudioOnInteraction = () => {
    if (!isPlaying) {
      playAudio();
    }
    // Remove document listeners since we interacted
    document.removeEventListener('click', startAudioOnInteraction);
    document.removeEventListener('touchstart', startAudioOnInteraction);
  };
  
  document.addEventListener('click', startAudioOnInteraction);
  document.addEventListener('touchstart', startAudioOnInteraction);

  // Try to play immediately on load (might be blocked, which is handled above)
  playAudio();

  // Scroll to Open button handler
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop propagation to avoid double interaction triggering issues
      
      // Force play audio immediately
      playAudio();
      
      // Smooth scroll to invitation
      const invitationSec = document.getElementById('invitation');
      if (invitationSec) {
        invitationSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ==========================================================================
  // 4. COUNTDOWN TIMER
  // ==========================================================================
  // Target date: June 13, 2026 at 10:00 AM Bukhara/Tashkent Time (UTC+5)
  const targetDate = new Date('2026-06-13T10:00:00+05:00').getTime();
  
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minutesEl) minutesEl.innerText = '00';
      if (secondsEl) secondsEl.innerText = '00';
      return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==========================================================================
  // 5. SCROLL REVEAL (NATIVE INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }

  // ==========================================================================
  // 6. AUTO-START MUSIC ON SCROLL
  // ==========================================================================
  let hasScrolledStart = false;
  const startAudioOnScroll = () => {
    if (hasScrolledStart) return;
    if (window.scrollY > 50) {
      hasScrolledStart = true;
      playAudio();
      window.removeEventListener('scroll', startAudioOnScroll);
    }
  };
  window.addEventListener('scroll', startAudioOnScroll);

});
