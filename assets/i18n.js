/**
 * Assobiacão Web — i18n
 * Suporte a PT-BR, EN, ES, FR
 * Usa seletores CSS + data-i18n-nav para mapear tradução sem alterar o HTML principal.
 */
(function () {
  'use strict';

  // ── Traduções ───────────────────────────────────────────────────────────────

  const T = {
    'pt-BR': {
      nav: { features: 'Funcionalidades', howItWorks: 'Como funciona', prizes: 'Prêmios', download: 'Baixar o app' },
      heroLabel: 'Disponível nas lojas',
      heroTitle: 'O assobio virou<br /><span class="accent">competição.</span>',
      heroSub: 'Participe de torneios temáticos, receba pontuação da nossa IA e dispute com assobiadores de todo o Brasil.<br/> <b>O palco é seu</b>.',
      heroNote: '📱 Gratuito para iOS e Android',
      featuresTag: 'Funcionalidades',
      featuresTitle: 'Tudo que um assobiador precisa',
      featuresSub: 'Do torneio ao ranking, do assobio à insígnia — o Assobiacão tem tudo.',
      f1Title: 'Torneios Temáticos', f1Desc: 'Cada torneio tem uma música de referência. Assobie a melodia, dispute com outros participantes e suba no ranking.',
      f2Title: 'Pontuação com IA', f2Desc: 'Nossa inteligência artificial analisa melodia, ritmo, afinação e clareza do seu assobio e devolve uma nota detalhada.',
      f3Title: 'Ranking & XP', f3Desc: 'Ganhe XP a cada envio, suba de nível, conquiste insígnias e apareça no topo do ranking do torneio.',
      f4Title: 'Comunidade', f4Desc: 'Assista e curta os assobios de outros participantes. Um feed inteiro dedicado à arte do assobio.',
      howTag: 'Como funciona', howTitle: 'Três passos para competir', howSub: 'É simples, rápido e gratuito.',
      s1Title: 'Escolha um torneio', s1Desc: 'Navegue pelos torneios ativos. Cada um traz uma música diferente — do forró ao rock, do samba ao pop. Veja os participantes e a premiação antes de entrar.',
      s2Title: 'Grave seu assobio', s2Desc: 'Abra a câmera dentro do app, ouça a música de referência, respire fundo e assobie. O tempo varia de torneio para torneio. Revise antes de enviar.',
      s3Title: 'Receba sua nota', s3Desc: 'Nossa IA analisa melodia, ritmo, afinação e clareza em segundos. Acompanhe sua posição no ranking em tempo real e compartilhe o resultado.',
      prizesNote: '* Valores de prêmio podem variar por torneio. Confira os detalhes dentro do app.',
      podiumSub1: 'por torneio', podiumSub2: 'por torneio', podiumSub3: 'por torneio',
      podiumTitle1: 'Campeão', podiumTitle2: 'Vice-campeão', podiumTitle3: '3° colocado',
      podiumRank1: '1° lugar', podiumRank2: '2° lugar', podiumRank3: '3° lugar',
      downloadTitle: 'Pronto para<br /><span class="accent">assobiar?</span>',
      downloadSub: 'Baixe gratuitamente, entre no primeiro torneio e mostre que o seu assobio vale ouro.',
      downloadNote: 'Gratuito · iOS e Android · Sem anúncios',
      footerTerms: 'Termos de Uso',
      footerCopy: '© {year} Assobiacão',
      scrollHint: 'Explorar',
      scoresTag: 'Análise inteligente',
      scoresTitle: 'Cinco dimensões do assobio perfeito',
      scoresSub: 'Nossa IA avalia cada aspecto do seu assobio e entrega um breakdown detalhado para você evoluir.',
      scoreMelody: 'Melodia', scoreRhythm: 'Ritmo', scorePitch: 'Afinação', scoreClarity: 'Clareza', scoreDuration: 'Duração',
      mockupHeader: 'Análise da IA — Torneio Copa 2026',
      mockupScoreLabel: 'pontuação final',
      prizesTag: '💰 Prêmios em dinheiro',
      prizesTitle: 'Seu talento<br /><span class="money">assobiolistico</span><br />vale muito.',
      prizesMeme: 'Sim, <em>assobiolistico</em> é uma palavra agora. E sim, você pode ganhar dinheiro de verdade com isso!',
      badgeScoreLbl: 'Pontuação', badgeXpLbl: 'Conquistado', badgeTrophyLbl: 'No ranking',
    },
    en: {
      nav: { features: 'Features', howItWorks: 'How it works', prizes: 'Prizes', download: 'Download' },
      heroLabel: 'Available on stores',
      heroTitle: 'Whistling became<br /><span class="accent">competition.</span>',
      heroSub: 'Join themed tournaments, get scored by our AI and compete with whistlers all across Brazil.<br/> <b>The stage is yours</b>.',
      heroNote: '📱 Free for iOS and Android',
      featuresTag: 'Features',
      featuresTitle: 'Everything a whistler needs',
      featuresSub: 'From tournament to leaderboard, from whistle to badge — Assobiacão has it all.',
      f1Title: 'Themed Tournaments', f1Desc: 'Each tournament has a reference song. Whistle the melody, compete with other participants and climb the rankings.',
      f2Title: 'AI Scoring', f2Desc: 'Our artificial intelligence analyzes melody, rhythm, pitch and clarity of your whistle and returns a detailed score.',
      f3Title: 'Ranking & XP', f3Desc: 'Earn XP with every submission, level up, unlock badges and appear at the top of the tournament rankings.',
      f4Title: 'Community', f4Desc: 'Watch and like other participants\' whistles. A whole feed dedicated to the art of whistling.',
      howTag: 'How it works', howTitle: 'Three steps to compete', howSub: 'Simple, fast and free.',
      s1Title: 'Choose a tournament', s1Desc: 'Browse active tournaments. Each one features a different song — from forró to rock, from samba to pop. See participants and prizes before joining.',
      s2Title: 'Record your whistle', s2Desc: 'Open the camera in the app, listen to the reference music, take a deep breath and whistle. Time varies by tournament. Review before submitting.',
      s3Title: 'Get your score', s3Desc: 'Our AI analyzes melody, rhythm, pitch and clarity in seconds. Track your ranking position in real time and share the result.',
      prizesNote: '* Prize amounts may vary by tournament. Check details in the app.',
      podiumSub1: 'per tournament', podiumSub2: 'per tournament', podiumSub3: 'per tournament',
      podiumTitle1: 'Champion', podiumTitle2: 'Runner-up', podiumTitle3: '3rd place',
      podiumRank1: '1st place', podiumRank2: '2nd place', podiumRank3: '3rd place',
      downloadTitle: 'Ready to<br /><span class="accent">whistle?</span>',
      downloadSub: 'Download for free, join your first tournament and show the world your whistle is golden.',
      downloadNote: 'Free · iOS & Android · No ads',
      footerTerms: 'Terms of Use',
      footerCopy: '© {year} Assobiacão',
      scrollHint: 'Explore',
      scoresTag: 'Intelligent Analysis',
      scoresTitle: 'Five dimensions of the perfect whistle',
      scoresSub: 'Our AI evaluates every aspect of your whistle and delivers a detailed breakdown to help you improve.',
      scoreMelody: 'Melody', scoreRhythm: 'Rhythm', scorePitch: 'Pitch', scoreClarity: 'Clarity', scoreDuration: 'Duration',
      mockupHeader: 'AI Analysis — Copa 2026 Tournament',
      mockupScoreLabel: 'final score',
      prizesTag: '💰 Cash prizes',
      prizesTitle: 'Your<br /><span class="money">whistling talent</span><br />is worth it.',
      prizesMeme: 'Yes, you can win real money with your whistling. Download the app and show what you\'ve got!',
      badgeScoreLbl: 'Score', badgeXpLbl: 'Earned', badgeTrophyLbl: 'In ranking',
    },
    es: {
      nav: { features: 'Funcionalidades', howItWorks: 'Cómo funciona', prizes: 'Premios', download: 'Descargar' },
      heroLabel: 'Disponible en tiendas',
      heroTitle: 'El silbido se convirtió en<br /><span class="accent">competición.</span>',
      heroSub: 'Únete a torneos temáticos, recibe puntuación de nuestra IA y compite con silbadores de todo Brasil.<br/> <b>El escenario es tuyo</b>.',
      heroNote: '📱 Gratis para iOS y Android',
      featuresTag: 'Funcionalidades',
      featuresTitle: 'Todo lo que un silbador necesita',
      featuresSub: 'Del torneo al ranking, del silbido a la insignia — Assobiacão lo tiene todo.',
      f1Title: 'Torneos Temáticos', f1Desc: 'Cada torneo tiene una canción de referencia. Silba la melodía, compite con otros participantes y sube en el ranking.',
      f2Title: 'Puntuación con IA', f2Desc: 'Nuestra inteligencia artificial analiza melodía, ritmo, afinación y claridad de tu silbido y devuelve una nota detallada.',
      f3Title: 'Ranking & XP', f3Desc: 'Gana XP con cada envío, sube de nivel, consigue insignias y aparece en lo más alto del ranking del torneo.',
      f4Title: 'Comunidad', f4Desc: 'Mira y dale «me gusta» a los silbidos de otros participantes. Un feed dedicado al arte del silbido.',
      howTag: 'Cómo funciona', howTitle: 'Tres pasos para competir', howSub: 'Simple, rápido y gratuito.',
      s1Title: 'Elige un torneo', s1Desc: 'Navega por los torneos activos. Cada uno trae una música diferente — del forró al rock, del samba al pop. Ve participantes y premios antes de entrar.',
      s2Title: 'Graba tu silbido', s2Desc: 'Abre la cámara en la app, escucha la música de referencia, respira hondo y silba. El tiempo varía por torneo. Revisa antes de enviar.',
      s3Title: 'Recibe tu nota', s3Desc: 'Nuestra IA analiza melodía, ritmo, afinación y claridad en segundos. Sigue tu posición en el ranking en tiempo real y comparte el resultado.',
      prizesNote: '* Los valores de los premios pueden variar por torneo. Consulta los detalles en la app.',
      podiumSub1: 'por torneo', podiumSub2: 'por torneo', podiumSub3: 'por torneo',
      podiumTitle1: 'Campeón', podiumTitle2: 'Subcampeón', podiumTitle3: '3er clasificado',
      podiumRank1: '1er lugar', podiumRank2: '2do lugar', podiumRank3: '3er lugar',
      downloadTitle: '¿Listo para<br /><span class="accent">silbar?</span>',
      downloadSub: 'Descarga gratis, entra en el primer torneo y demuestra que tu silbido vale oro.',
      downloadNote: 'Gratis · iOS y Android · Sin anuncios',
      footerTerms: 'Términos de uso',
      footerCopy: '© {year} Assobiacão',
      scrollHint: 'Explorar',
      scoresTag: 'Análisis inteligente',
      scoresTitle: 'Cinco dimensiones del silbido perfecto',
      scoresSub: 'Nuestra IA evalúa cada aspecto de tu silbido y entrega un desglose detallado para que puedas mejorar.',
      scoreMelody: 'Melodía', scoreRhythm: 'Ritmo', scorePitch: 'Afinación', scoreClarity: 'Claridad', scoreDuration: 'Duración',
      mockupHeader: 'Análisis de IA — Torneo Copa 2026',
      mockupScoreLabel: 'puntuación final',
      prizesTag: '💰 Premios en efectivo',
      prizesTitle: 'Tu talento<br /><span class="money">silbador</span><br />vale mucho.',
      prizesMeme: '¡Sí, puedes ganar dinero de verdad con tu silbido! Descarga el app y demuéstralo.',
      badgeScoreLbl: 'Puntuación', badgeXpLbl: 'Conseguido', badgeTrophyLbl: 'En ranking',
    },
    fr: {
      nav: { features: 'Fonctionnalités', howItWorks: 'Comment ça marche', prizes: 'Prix', download: 'Télécharger' },
      heroLabel: 'Disponible sur les stores',
      heroTitle: 'Le sifflement est devenu<br /><span class="accent">compétition.</span>',
      heroSub: 'Participez à des tournois thématiques, recevez une note de notre IA et concourez avec des siffleurs de tout le Brésil.<br/> <b>La scène est à vous</b>.',
      heroNote: '📱 Gratuit pour iOS et Android',
      featuresTag: 'Fonctionnalités',
      featuresTitle: 'Tout ce dont un siffleur a besoin',
      featuresSub: 'Du tournoi au classement, du sifflement au badge — Assobiacão a tout.',
      f1Title: 'Tournois Thématiques', f1Desc: 'Chaque tournoi a une chanson de référence. Sifflez la mélodie, concourez avec d\'autres participants et grimpez dans le classement.',
      f2Title: 'Score par IA', f2Desc: 'Notre IA analyse la mélodie, le rythme, la justesse et la clarté de votre sifflement et renvoie une note détaillée.',
      f3Title: 'Classement & XP', f3Desc: 'Gagnez des XP à chaque soumission, montez de niveau, débloquez des badges et apparaissez en tête du classement du tournoi.',
      f4Title: 'Communauté', f4Desc: 'Regardez et aimez les sifflements des autres participants. Un fil entier dédié à l\'art du sifflement.',
      howTag: 'Comment ça marche', howTitle: 'Trois étapes pour concourir', howSub: 'Simple, rapide et gratuit.',
      s1Title: 'Choisissez un tournoi', s1Desc: 'Parcourez les tournois actifs. Chacun propose une musique différente — du forró au rock, du samba au pop. Consultez les participants et les prix avant de rejoindre.',
      s2Title: 'Enregistrez votre sifflement', s2Desc: 'Ouvrez la caméra dans l\'app, écoutez la musique de référence, respirez profondément et sifflez. Le temps varie selon le tournoi. Révisez avant d\'envoyer.',
      s3Title: 'Recevez votre note', s3Desc: 'Notre IA analyse la mélodie, le rythme, la justesse et la clarté en quelques secondes. Suivez votre position dans le classement en temps réel et partagez le résultat.',
      prizesNote: '* Les montants des prix peuvent varier par tournoi. Consultez les détails dans l\'app.',
      podiumSub1: 'par tournoi', podiumSub2: 'par tournoi', podiumSub3: 'par tournoi',
      podiumTitle1: 'Champion', podiumTitle2: 'Finaliste', podiumTitle3: '3ème place',
      podiumRank1: '1ère place', podiumRank2: '2ème place', podiumRank3: '3ème place',
      downloadTitle: 'Prêt à<br /><span class="accent">siffler ?</span>',
      downloadSub: 'Téléchargez gratuitement, participez à votre premier tournoi et montrez que votre sifflement vaut de l\'or.',
      downloadNote: 'Gratuit · iOS et Android · Sans publicités',
      footerTerms: 'Conditions d\'utilisation',
      footerCopy: '© {year} Assobiacão',
      scrollHint: 'Explorer',
      scoresTag: 'Analyse intelligente',
      scoresTitle: 'Cinq dimensions du sifflement parfait',
      scoresSub: 'Notre IA évalue chaque aspect de votre sifflement et fournit un bilan détaillé pour vous aider à progresser.',
      scoreMelody: 'Mélodie', scoreRhythm: 'Rythme', scorePitch: 'Justesse', scoreClarity: 'Clarté', scoreDuration: 'Durée',
      mockupHeader: 'Analyse IA — Tournoi Copa 2026',
      mockupScoreLabel: 'score final',
      prizesTag: '💰 Prix en argent',
      prizesTitle: 'Votre talent de<br /><span class="money">siffleur</span><br />vaut beaucoup.',
      prizesMeme: 'Oui, vous pouvez gagner de l\'argent en sifflant. Téléchargez l\'app et montrez ce que vous valez !',
      badgeScoreLbl: 'Score', badgeXpLbl: 'Obtenu', badgeTrophyLbl: 'Au classement',
    },
  };

  // ── Config ──────────────────────────────────────────────────────────────────

  const LANGUAGES = [
    { code: 'pt-BR', label: 'Português', flag: '🇧🇷' },
    { code: 'en',    label: 'English',   flag: '🇺🇸' },
    { code: 'es',    label: 'Español',   flag: '🇪🇸' },
    { code: 'fr',    label: 'Français',  flag: '🇫🇷' },
  ];
  const STORAGE_KEY = 'assobiacao_lang';

  // ── Detect ──────────────────────────────────────────────────────────────────

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && T[saved]) return saved;
    const nav = (navigator.language || 'pt-BR');
    if (T[nav]) return nav;
    const prefix = nav.split('-')[0];
    return Object.keys(T).find(k => k.startsWith(prefix)) || 'pt-BR';
  }

  // ── Apply ───────────────────────────────────────────────────────────────────

  function html(el, val) {
    if (!el || val === undefined) return;
    el.innerHTML = val.replace(/{year}/g, new Date().getFullYear());
  }
  function text(el, val) {
    if (!el || val === undefined) return;
    el.textContent = val.replace(/{year}/g, new Date().getFullYear());
  }
  function nthChild(selector, n) {
    const els = document.querySelectorAll(selector);
    return els[n] || null;
  }

  function applyTranslations(lang) {
    const t = T[lang] || T['pt-BR'];

    // Nav links
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
      const key = el.getAttribute('data-i18n-nav');
      if (t.nav[key]) text(el, t.nav[key]);
    });

    // Hero
    const heroLabel = document.querySelector('.hero-label');
    if (heroLabel) {
      const dot = heroLabel.querySelector('.dot');
      heroLabel.innerHTML = (dot ? dot.outerHTML + ' ' : '') + t.heroLabel;
    }
    html(document.querySelector('.hero-title'), t.heroTitle);
    html(document.querySelector('.hero-sub'), t.heroSub);
    text(document.querySelector('.hero-note'), t.heroNote);

    // Hero badge labels
    const badgeFloats = document.querySelectorAll('.badge-float');
    if (badgeFloats[0]) text(badgeFloats[0].querySelector('.badge-lbl'), t.badgeScoreLbl);
    if (badgeFloats[1]) text(badgeFloats[1].querySelector('.badge-lbl'), t.badgeXpLbl);
    if (badgeFloats[2]) text(badgeFloats[2].querySelector('.badge-lbl'), t.badgeTrophyLbl);

    // Scroll hint
    text(document.querySelector('.scroll-hint-label'), t.scrollHint);

    // Features
    text(document.querySelector('.features .section-tag'), t.featuresTag);
    text(document.querySelector('.features .section-title'), t.featuresTitle);
    text(document.querySelector('.features .section-sub'), t.featuresSub);
    const fcards = document.querySelectorAll('.feature-card');
    [['f1Title','f1Desc'],['f2Title','f2Desc'],['f3Title','f3Desc'],['f4Title','f4Desc']].forEach(([tk,dk], i) => {
      if (fcards[i]) {
        text(fcards[i].querySelector('.feature-title'), t[tk]);
        text(fcards[i].querySelector('.feature-desc'), t[dk]);
      }
    });

    // How it works
    text(document.querySelector('.how .section-tag'), t.howTag);
    text(document.querySelector('.how .section-title'), t.howTitle);
    text(document.querySelector('.how .section-sub'), t.howSub);
    const steps = document.querySelectorAll('.step');
    [['s1Title','s1Desc'],['s2Title','s2Desc'],['s3Title','s3Desc']].forEach(([tk,dk], i) => {
      if (steps[i]) {
        text(steps[i].querySelector('.step-title'), t[tk]);
        text(steps[i].querySelector('.step-desc'), t[dk]);
      }
    });

    // Scores section
    text(document.querySelector('.scores .section-tag'), t.scoresTag);
    text(document.querySelector('.scores .section-title'), t.scoresTitle);
    text(document.querySelector('.scores .section-sub'), t.scoresSub);
    const scoreKeys = ['scoreMelody', 'scoreRhythm', 'scorePitch', 'scoreClarity', 'scoreDuration'];
    document.querySelectorAll('.score-label').forEach((el, i) => { if (scoreKeys[i]) text(el, t[scoreKeys[i]]); });
    text(document.querySelector('.mockup-header'), t.mockupHeader);
    text(document.querySelector('.mockup-score-label'), t.mockupScoreLabel);
    document.querySelectorAll('.breakdown-name').forEach((el, i) => { if (scoreKeys[i]) text(el, t[scoreKeys[i]]); });

    // Prizes header
    text(document.querySelector('.prizes-tag'), t.prizesTag);
    html(document.querySelector('.prizes-title'), t.prizesTitle);
    html(document.querySelector('.prizes-meme'), t.prizesMeme);

    // Prizes podium
    text(document.querySelector('.prizes-note'), t.prizesNote);
    const places = document.querySelectorAll('.podium-place');
    // order: silver(2°), gold(1°), bronze(3°) — matches DOM order
    const podiumData = [
      { title: t.podiumTitle2, rank: t.podiumRank2, sub: t.podiumSub2 },
      { title: t.podiumTitle1, rank: t.podiumRank1, sub: t.podiumSub1 },
      { title: t.podiumTitle3, rank: t.podiumRank3, sub: t.podiumSub3 },
    ];
    places.forEach((place, i) => {
      if (podiumData[i]) {
        text(place.querySelector('.podium-rank'), podiumData[i].rank);
        text(place.querySelector('.podium-title'), podiumData[i].title);
        text(place.querySelector('.podium-sub'), podiumData[i].sub);
      }
    });

    // Download
    html(document.querySelector('.download-title'), t.downloadTitle);
    html(document.querySelector('.download-sub'), t.downloadSub);
    text(document.querySelector('.download-note'), t.downloadNote);

    // Footer
    text(document.querySelector('.footer-links a[href="/termos"]'), t.footerTerms);
    const footerCopy = document.querySelector('.footer-copy');
    text(footerCopy, t.footerCopy);

    // HTML lang
    document.documentElement.lang = lang;

    // Update switcher label
    const sw = document.getElementById('lang-switcher');
    if (sw) {
      const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];
      const flagEl = sw.querySelector('.lang-flag');
      const codeEl = sw.querySelector('.lang-code');
      if (flagEl) flagEl.textContent = current.flag;
      if (codeEl) codeEl.textContent = lang.split('-')[0].toUpperCase();
      sw.querySelectorAll('.lang-dropdown li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-lang') === lang);
      });
    }
  }

  // ── Build switcher ──────────────────────────────────────────────────────────

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
      }
      #lang-switcher .lang-btn {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 7px 14px; border-radius: 20px;
        border: none;
        background: #FF6B00;
        color: #fff;
        font-size: 13px; font-weight: 700; letter-spacing: 0.4px;
        cursor: pointer; white-space: nowrap;
        transition: background 0.15s, box-shadow 0.15s;
        box-shadow: 0 2px 8px rgba(255,107,0,0.35);
        line-height: 1;
      }
      #lang-switcher .lang-flag { font-size: 16px; line-height: 1; }
      #lang-switcher .lang-code { font-size: 12px; font-weight: 800; letter-spacing: 0.5px; }
      #lang-switcher .lang-btn:hover { background: #E05500; box-shadow: 0 3px 12px rgba(255,107,0,0.45); }
      #lang-switcher .lang-chevron { opacity: 0.75; }
      #lang-switcher .lang-dropdown {
        position: absolute; top: calc(100% + 8px); right: 0;
        background: #fff; border: 1px solid #e5e5e5;
        border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        min-width: 160px; z-index: 9999;
        padding: 4px; list-style: none; margin: 0;
      }
      #lang-switcher .lang-dropdown li {
        display: flex; align-items: center; gap: 8px;
        padding: 10px 14px; border-radius: 8px;
        font-size: 13px; font-weight: 600; color: #333;
        cursor: pointer; transition: background 0.1s;
      }
      #lang-switcher .lang-dropdown li:hover { background: #f5f5f5; }
      #lang-switcher .lang-dropdown li.active { color: #FF6B00; background: #fff4ee; font-weight: 800; }
      /* Compact on narrow desktop: hide text label */
      @media (max-width: 960px) {
        #lang-switcher .lang-code,
        #lang-switcher .lang-chevron { display: none; }
        #lang-switcher .lang-btn { padding: 7px 10px; }
      }
      /* Mobile: nav-right is position:absolute (out of flow), so nav has
         only logo + lang-switcher as flex children — space-between handles
         positioning automatically. No overrides needed here. */
      @media (max-width: 768px) {
        #lang-switcher { margin-left: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildSwitcher(currentLang) {
    const wrapper = document.createElement('div');
    wrapper.id = 'lang-switcher';
    const current = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
    wrapper.innerHTML = `
      <button class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Idioma / Language">
        <span class="lang-flag">${current.flag}</span>
        <span class="lang-code">${currentLang.split('-')[0].toUpperCase()}</span>
        <svg class="lang-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <ul class="lang-dropdown" role="listbox" style="display:none">
        ${LANGUAGES.map(l => `
          <li role="option" data-lang="${l.code}" class="${l.code === currentLang ? 'active' : ''}">
            <span>${l.flag}</span>${l.label}
          </li>
        `).join('')}
      </ul>`;

    const btn = wrapper.querySelector('.lang-btn');
    const dd  = wrapper.querySelector('.lang-dropdown');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = dd.style.display !== 'none';
      dd.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!open));
    });
    dd.addEventListener('click', e => {
      const li = e.target.closest('li[data-lang]');
      if (!li) return;
      const code = li.getAttribute('data-lang');
      localStorage.setItem(STORAGE_KEY, code);
      applyTranslations(code);
      window.dispatchEvent(new CustomEvent('assobiacao-lang', { detail: { lang: code } }));
      dd.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', () => { dd.style.display = 'none'; btn.setAttribute('aria-expanded','false'); });
    return wrapper;
  }

  // ── Init ────────────────────────────────────────────────────────────────────

  function init() {
    injectStyles();
    const lang = detectLang();
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);

    // Inject switcher into .nav-end (right column of the 3-col grid nav)
    const navEnd = document.querySelector('.nav-end');
    if (navEnd) {
      navEnd.appendChild(buildSwitcher(lang));
    }

    // Dispara no próximo tick — garante que scripts carregados depois
    // (terms-i18n.js) já registraram seus listeners.
    setTimeout(function () {
      window.dispatchEvent(new CustomEvent('assobiacao-lang', { detail: { lang: lang } }));
    }, 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
