/**
 * Interactivity, Logic & Translations for Premium Wedding Invitation Site
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. TRANSLATION DICTIONARY DATA
  // ==========================================================================
  const translations = {
    uz: {
      title: "Anvar & Laylo — Taklifnoma",
      hero_welcome: "Nikoh Oqshomi",
      hero_quote: "«Sevgi — bu bir-biriga qarash emas, balki bir yo‘nalishda birga qarashdir.»",
      hero_author: "— Jaloliddin Rumiy",
      invite_title: "Xush Kelibsiz",
      invite_body: "Aziz va qadrli insonlar, Biz hayotimizning yangi bosqichiga qadam qo‘ymoqdamiz. Bu kun — faqat marosim emas, bu — ikki qalbning bir yo‘lga aylanishi. Sizning ishtirokingiz biz uchun qadrlidir.",
      details_title: "Tafsilotlar",
      details_body: "Sana: 13.06.2026 | Vaqt: 10:00 | Manzil: Labi Hovuz",
      final_quote: "Ba’zi lahzalar so‘zga sig‘maydi. Ular faqat his qilinadi. Sizni yonimizda ko‘rishdan mamnun bo‘lamiz.",
      save_the_date: "Sanani Saqlab Qo'ying",
      countdown_subtitle: "Tantanaga qolgan vaqt",
      countdown_days: "Kun",
      countdown_hours: "Soat",
      countdown_minutes: "Daqiqa",
      countdown_seconds: "Soniya",
      timeline_subtitle: "Kunning tartibi",
      timeline_title: "Tantanalar Dasturi",
      timeline_desc: "Tantananing har bir bosqichida biz bilan birga bo'lishingizni intizorlik bilan kutamiz.",
      timeline_plov_title: "Ertamgi Osh",
      timeline_plov_desc: "Qarindoshlar, yaqin do'stlar va mahalla ahlini milliy taomimiz — to'y oshi bilan siylash marosimi.",
      timeline_plov_loc: "Manzil: \"Labi Hovuz\" milliy restorani, Buxoro",
      timeline_nikah_title: "Nikoh Marosimi",
      timeline_nikah_desc: "Guvohlar va yaqinlar huzurida o'zaro rozilik va nikoh shartnomasini imzolash marosimi.",
      timeline_nikah_loc: "Manzil: Buxoro markaziy jome masjidi",
      timeline_party_title: "Katta Kecha (To'y Bazmi)",
      timeline_party_desc: "Yosh oila sharafiga dasturxon yoziladi, kuy-qo'shiqlar hamda tabriklar bilan bayramni davom ettiramiz.",
      timeline_party_loc: "Manzil: \"Versailles\" tantanalar saroyi, Buxoro",
      venue_subtitle: "Manzilimiz",
      venue_title: "Tantanali Manzil",
      venue_name: "Labi Hovuz",
      venue_address: "Buxoro shahri, M. Ambarov ko'chasi (Tarixiy markaz)",
      btn_directions: "Yo'nalishni Olish",
      rsvp_subtitle: "Bizga qo'shiling",
      rsvp_title: "Taklifnoma Javobi (RSVP)",
      rsvp_desc: "Qulay joylarni ta'minlashimiz uchun iltimos, 2026-yil 1-iyunga qadar taklifga javob bering.",
      label_name: "Ism-familiyangiz",
      placeholder_name: "Ismingizni kiriting",
      label_attend: "Ishtirok etasizmi?",
      label_yes: "Ha, albatta boraman",
      label_no: "Afsuski, bora olmayman",
      label_guests: "Mehmonlar soni",
      guests_1: "1 kishi",
      guests_2: "2 kishi",
      guests_3: "3 kishi",
      guests_4: "4 kishi",
      guests_5: "5 kishi",
      label_notes: "Istaklar va tilaklar (Ixtiyoriy)",
      placeholder_notes: "Shirin tilaklaringizni yoki izohlaringizni yozing...",
      btn_submit: "RSVPni WhatsApp orqali yuborish",
      success_title: "Rahmat!",
      success_guest: "Hurmatli mehmon,",
      success_message: "Taklifga javobingiz qabul qilindi. Tasdiqlash uchun WhatsApp xabari tayyorlandi. Iltimos, xabarni yuboring.",
      btn_another: "Yana RSVP yuborish",
      footer_text: "Sizni kutamiz. Tashrifingizdan boshimiz ko'kka yetadi.",
      footer_copy: "Nafislik bilan yaratildi • © 2026 Barcha huquqlar himoyalangan",
      sticky_btn: "RSVP saqlash"
    },
    ru: {
      title: "Свадебное Приглашение — Анвар и Лайло",
      hero_welcome: "Свадебное торжество",
      hero_quote: "«Любовь — это не смотреть друг на друга, а смотреть в одном направлении.»",
      hero_author: "— Джалаладдин Руми",
      invite_title: "Добро пожаловать",
      invite_body: "Дорогие и близкие нам люди, Мы вступаем в новый этап жизни. Это больше, чем событие — это момент соединения двух судеб. Для нас важно разделить его с вами.",
      details_title: "Детали",
      details_body: "Дата: 13.06.2026 | Время: 10:00 | Место: Labi Hovuz",
      final_quote: "Есть моменты, которые не нуждаются в объяснении. Они просто становятся памятью. Мы будем рады вашему присутствию.",
      save_the_date: "Сохраните Дату",
      countdown_subtitle: "До свадьбы осталось",
      countdown_days: "Дней",
      countdown_hours: "Часов",
      countdown_minutes: "Минут",
      countdown_seconds: "Секунд",
      timeline_subtitle: "Расписание дня",
      timeline_title: "Хронология событий",
      timeline_desc: "Будем рады видеть вас на каждом этапе нашего праздника.",
      timeline_plov_title: "Утренний Плов",
      timeline_plov_desc: "Традиционное угощение праздничным свадебным пловом для родных, друзей и соседей.",
      timeline_plov_loc: "Место: национальный ресторан \"Labi Hovuz\", Бухара",
      timeline_nikah_title: "Церемония Никах",
      timeline_nikah_desc: "Священный религиозный обряд бракосочетания в кругу самых близких людей.",
      timeline_nikah_loc: "Место: Центральная мечеть Бухары",
      timeline_party_title: "Свадебный банкет",
      timeline_party_desc: "Торжественный вечер с ужином, музыкой, танцами и искренними пожеланиями для молодоженов.",
      timeline_party_loc: "Место: банкетный зал \"Versailles\", Бухара",
      venue_subtitle: "Как добраться",
      venue_title: "Место проведения",
      venue_name: "Labi Hovuz",
      venue_address: "г. Бухара, ул. М. Амбарова (Исторический центр)",
      btn_directions: "Проложить маршрут",
      rsvp_subtitle: "Присоединяйтесь",
      rsvp_title: "Подтверждение присутствия (RSVP)",
      rsvp_desc: "Пожалуйста, ответьте до 1 июня 2026 года, чтобы мы могли позаботиться о вашем комфорте.",
      label_name: "Ваше имя и фамилия",
      placeholder_name: "Введите ваше имя",
      label_attend: "Придете ли вы?",
      label_yes: "Да, с удовольствием приду",
      label_no: "К сожалению, не смогу прийти",
      label_guests: "Количество гостей",
      guests_1: "1 человек",
      guests_2: "2 человека",
      guests_3: "3 человека",
      guests_4: "4 человека",
      guests_5: "5 человек",
      label_notes: "Пожелания (необязательно)",
      placeholder_notes: "Напишите ваши пожелания или предпочтения в еде...",
      btn_submit: "Отправить RSVP через WhatsApp",
      success_title: "Спасибо!",
      success_guest: "Уважаемый гость,",
      success_message: "Ваш ответ принят. Сформировано сообщение для WhatsApp. Пожалуйста, отправьте его.",
      btn_another: "Отправить еще раз",
      footer_text: "Мы ждем вас с нетерпением.",
      footer_copy: "Создано с изысканностью • © 2026 Все права защищены",
      sticky_btn: "Подтвердить RSVP"
    },
    en: {
      title: "Anvar & Laylo — Wedding Invitation",
      hero_welcome: "Wedding Celebration",
      hero_quote: "\"Love does not consist in gazing at each other, but in looking together in the same direction.\"",
      hero_author: "— Jalaluddin Rumi",
      invite_title: "Welcome to Our Story",
      invite_body: "Dearest Friends and Family, We are stepping into a new chapter of our lives. This day is not merely a ceremony; it is the moment two hearts become one path. Your presence is deeply meaningful to us.",
      details_title: "Details",
      details_body: "Date: 13.06.2026 | Time: 10:00 AM | Location: Labi Hovuz",
      final_quote: "Some moments are beyond words. They can only be felt. We would be truly honored to have you by our side.",
      save_the_date: "Save the Date",
      countdown_subtitle: "The Celebration Begins In",
      countdown_days: "Days",
      countdown_hours: "Hours",
      countdown_minutes: "Minutes",
      countdown_seconds: "Seconds",
      timeline_subtitle: "Wedding Day Schedule",
      timeline_title: "Event Timeline",
      timeline_desc: "Please join us for the celebrations scheduled throughout the day.",
      timeline_plov_title: "Morning Plov",
      timeline_plov_desc: "A traditional Uzbek wedding breakfast serving the festive morning Plov to family and friends.",
      timeline_plov_loc: "Location: \"Labi Hovuz\" National Restaurant, Bukhara",
      timeline_nikah_title: "Nikah Ceremony",
      timeline_nikah_desc: "The sacred religious ceremony where marriage vows and contracts are signed.",
      timeline_nikah_loc: "Location: Central Mosque of Bukhara",
      timeline_party_title: "Grand Wedding Reception",
      timeline_party_desc: "An elegant evening of dinner, music, traditional dances, and festive celebrations.",
      timeline_party_loc: "Location: \"Versailles\" Banquet Hall, Bukhara",
      venue_subtitle: "Find Your Way",
      venue_title: "Wedding Venue",
      venue_name: "Labi Hovuz",
      venue_address: "Bukhara city, M. Ambarov Street (Historical Center)",
      btn_directions: "Get Directions",
      rsvp_subtitle: "Join Us",
      rsvp_title: "RSVP",
      rsvp_desc: "Please reply by June 1, 2026, so we can make preparations for your comfortable seating.",
      label_name: "Your Full Name",
      placeholder_name: "Enter your name",
      label_attend: "Will You Attend?",
      label_yes: "Yes, gladly attend",
      label_no: "Regretfully decline",
      label_guests: "Number of Guests",
      guests_1: "1 Person",
      guests_2: "2 People",
      guests_3: "3 People",
      guests_4: "4 People",
      guests_5: "5 People",
      label_notes: "Message / Wishes (Optional)",
      placeholder_notes: "Send your warm wishes or diet preferences...",
      btn_submit: "Send RSVP via WhatsApp",
      success_title: "Thank You!",
      success_guest: "Dear Guest,",
      success_message: "Your RSVP has been processed. We have generated a WhatsApp message. Please send it in the chat.",
      btn_another: "Submit Another RSVP",
      footer_text: "We look forward to celebrating with you.",
      footer_copy: "Designed with elegance • © 2026 All Rights Reserved",
      sticky_btn: "RSVP Now"
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

    // Translate form inputs placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        input.setAttribute('placeholder', translations[lang][key]);
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
  // 3. COUNTDOWN TIMER
  // ==========================================================================
  // Target date: June 13, 2026 at 10:00 AM Bukhara/Tashkent Time
  const targetDate = new Date('2026-06-13T10:00:00+05:00').getTime();
  
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    // If date passed
    if (difference <= 0) {
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minutesEl) minutesEl.innerText = '00';
      if (secondsEl) secondsEl.innerText = '00';
      return;
    }
    
    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Format with leading zero
    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);


  // ==========================================================================
  // 4. BACKGROUND MUSIC CONTROLLER
  // ==========================================================================
  const audio = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const iconMuted = document.getElementById('music-icon-muted');
  const iconPlaying = document.getElementById('music-icon-playing');
  const soundWave = document.getElementById('music-wave');
  
  let isPlaying = false;
  
  function toggleMusic() {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      iconPlaying.style.display = 'none';
      iconMuted.style.display = 'block';
      soundWave.classList.remove('playing');
      isPlaying = false;
    } else {
      audio.play().then(() => {
        iconMuted.style.display = 'none';
        iconPlaying.style.display = 'block';
        soundWave.classList.add('playing');
        isPlaying = true;
      }).catch(error => {
        console.log('Playback blocked. Awaiting interaction:', error);
      });
    }
  }
  
  if (musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
  }
  
  const startAudioOnInteraction = () => {
    if (!isPlaying && audio) {
      audio.play().then(() => {
        if (iconMuted) iconMuted.style.display = 'none';
        if (iconPlaying) iconPlaying.style.display = 'block';
        if (soundWave) soundWave.classList.add('playing');
        isPlaying = true;
      }).catch(() => {});
    }
    document.removeEventListener('click', startAudioOnInteraction);
    document.removeEventListener('touchstart', startAudioOnInteraction);
  };
  
  document.addEventListener('click', startAudioOnInteraction);
  document.addEventListener('touchstart', startAudioOnInteraction);




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


});

