// Songs array - R2 CDN base URL
const BASE_URL = 'https://pub-71a2a2363f0a4d4b8a2e1e486b26c718.r2.dev';

const songs = [
  // The Marías - Submarine
  { title: "Ride", artist: "The Marías", file: `${BASE_URL}/submarine/1.%20Ride.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Hamptons", artist: "The Marías", file: `${BASE_URL}/submarine/2.%20Hamptons.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Echo", artist: "The Marías", file: `${BASE_URL}/submarine/3.%20Echo.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Run Your Mouth", artist: "The Marías", file: `${BASE_URL}/submarine/4.%20Run%20Your%20Mouth.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Real Life", artist: "The Marías", file: `${BASE_URL}/submarine/5.%20Real%20Life.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Blur", artist: "The Marías", file: `${BASE_URL}/submarine/6.%20Blur.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Paranoia", artist: "The Marías", file: `${BASE_URL}/submarine/7.%20Paranoia.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Lejos de Ti", artist: "The Marías", file: `${BASE_URL}/submarine/8.%20Lejos%20de%20Ti.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Love You Anyway", artist: "The Marías", file: `${BASE_URL}/submarine/9.%20Love%20You%20Anyway.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Ay No Puedo", artist: "The Marías", file: `${BASE_URL}/submarine/10.%20Ay%20No%20Puedo.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "No One Noticed", artist: "The Marías", file: `${BASE_URL}/submarine/11.%20No%20One%20Noticed.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Vicious Sensitive Robot", artist: "The Marías", file: `${BASE_URL}/submarine/12.%20Vicious%20Sensitive%20Robot.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "If Only", artist: "The Marías", file: `${BASE_URL}/submarine/13.%20If%20Only.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },
  { title: "Sienna", artist: "The Marías", file: `${BASE_URL}/submarine/14.%20Sienna.mp3`, cover: `${BASE_URL}/covers/submarine.jpg` },

  // Mitski - Laurel Hell
  { title: "Valentine, Texas", artist: "Mitski", file: `${BASE_URL}/laurel-hell/1.%20Valentine,%20Texas.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Working for the Knife", artist: "Mitski", file: `${BASE_URL}/laurel-hell/2.%20Working%20for%20the%20Knife.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Stay Soft", artist: "Mitski", file: `${BASE_URL}/laurel-hell/3.%20Stay%20Soft.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Everyone", artist: "Mitski", file: `${BASE_URL}/laurel-hell/4.%20Everyone.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Heat Lightning", artist: "Mitski", file: `${BASE_URL}/laurel-hell/5.%20Heat%20Lightning.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "The Only Heartbreaker", artist: "Mitski", file: `${BASE_URL}/laurel-hell/6.%20The%20Only%20Heartbreaker.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Love Me More", artist: "Mitski", file: `${BASE_URL}/laurel-hell/7.%20Love%20Me%20More.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "There's Nothing Left for You", artist: "Mitski", file: `${BASE_URL}/laurel-hell/8.%20There%27s%20Nothing%20Left%20for%20You.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "Should've Been Me", artist: "Mitski", file: `${BASE_URL}/laurel-hell/9.%20Should%27ve%20Been%20Me.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "I Guess", artist: "Mitski", file: `${BASE_URL}/laurel-hell/10.%20I%20Guess.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },
  { title: "That's Our Lamp", artist: "Mitski", file: `${BASE_URL}/laurel-hell/11.%20That%27s%20Our%20Lamp.mp3`, cover: `${BASE_URL}/covers/laurel-hell.jpg` },

  // The Smiths - Louder Than Bombs
  { title: "Is It Really so Strange?", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/1.%20Is%20It%20Really%20so%20Strange%3F.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Sheila Take a Bow", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/2.%20Sheila%20Take%20a%20Bow%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Shoplifters of the World Unite", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/3.%20Shoplifters%20of%20the%20World%20Unite%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Sweet and Tender Hooligan", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/4.%20Sweet%20and%20Tender%20Hooligan%20-%20John%20Peel%20Session,%2012_2_86.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Half a Person", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/5.%20Half%20a%20Person%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "London", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/6.%20London%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Panic", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/7.%20Panic%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Girl Afraid", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/8.%20Girl%20Afraid%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Shakespeare's Sister", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/9.%20Shakespeare%27s%20Sister%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "William, It Was Really Nothing", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/10.%20William,%20It%20Was%20Really%20Nothing%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "You Just Haven't Earned It Yet, Baby", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/11.%20You%20Just%20Haven%27t%20Earned%20It%20Yet,%20Baby.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Heaven Knows I'm Miserable Now", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/12.%20Heaven%20Knows%20I%27m%20Miserable%20Now%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Ask", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/13.%20Ask%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Golden Lights", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/14.%20Golden%20Lights%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Oscillate Wildly", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/15.%20Oscillate%20Wildly%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "These Things Take Time", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/16.%20These%20Things%20Take%20Time%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Rubber Ring", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/17.%20Rubber%20Ring%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Back to the Old House", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/18.%20Back%20to%20the%20Old%20House%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Hand in Glove", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/19.%20Hand%20in%20Glove%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Stretch out and Wait", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/20.%20Stretch%20out%20and%20Wait%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Please, Please, Please", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/21.%20Please,%20Please,%20Please,%20Let%20Me%20Get%20What%20I%20Want%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "This Night Has Opened My Eyes", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/22.%20This%20Night%20Has%20Opened%20My%20Eyes%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Unloveable", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/23.%20Unloveable%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
  { title: "Asleep", artist: "The Smiths", file: `${BASE_URL}/louder-than-bombs/24.%20Asleep%20-%202011%20Remaster.mp3`, cover: `${BASE_URL}/covers/louder-than-bombs.jpg` },
];

// State
let currentSongIndex = 0;
let isPlaying = false;
let activeFilter = 'all';

// Default cover placeholder
const DEFAULT_COVER = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCBmaWxsPSIjMzMzIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIvPjx0ZXh0IGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMTAwIj57c29uZy57YXJ0aXN0fX08L3RleHQ+PC9zdmc+';

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, setting up handlers...');

  // Get elements
  const audioPlayer = document.getElementById('audio-player');
  const songTitle = document.getElementById('song-title');
  const songArtist = document.getElementById('song-artist');
  const songImage = document.getElementById('song-image-img');
  const artGlow = document.getElementById('art-glow');
  const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');
  const progressThumb = document.getElementById('progress-thumb');
  const playPauseBtn = document.getElementById('play-pause');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const currentTimeEl = document.getElementById('current-time');
  const durationTimeEl = document.getElementById('duration-time');
  const closeBtn = document.getElementById('close-btn');
  const minimizeBtn = document.getElementById('minimize-btn');
  const menuBtn = document.getElementById('menu-btn');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuList = document.getElementById('menu-list');
  const queueFilters = document.getElementById('queue-filters');
  const volFill = document.getElementById('volume-fill');
  const volPercent = document.getElementById('vol-percent');
  const volIcon = document.getElementById('vol-icon');
  const volInput = document.getElementById('volume-input');

  console.log('Elements found:', { menuBtn: !!menuBtn, menuOverlay: !!menuOverlay, closeBtn: !!closeBtn });

  // Window controls
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('close clicked');
      try {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('close-app');
      } catch (e) { window.close(); }
    });
  }

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      console.log('minimize clicked');
      try {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('minimize-app');
      } catch (e) {}
    });
  }

  // Queue button - DEBUG
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      console.log('QUEUE BUTTON CLICKED!');
      e.preventDefault();
      e.stopPropagation();
      showMenu();
    });
  } else {
    console.error('menuBtn NOT FOUND');
  }

  // Menu close
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', hideMenu);
  }

  // Filters
  if (queueFilters) {
    queueFilters.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        activeFilter = e.target.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderQueue();
      }
    });
  }

  // Overlay click to close
  if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) hideMenu();
    });
  }

  function showMenu() {
    console.log('showMenu called');
    if (menuOverlay) menuOverlay.classList.add('visible');
    renderQueue();
  }

  function hideMenu() {
    console.log('hideMenu called');
    if (menuOverlay) menuOverlay.classList.remove('visible');
  }

  function renderQueue() {
    if (!menuList) return;
    menuList.innerHTML = '';
    const filtered = activeFilter === 'all' ? songs : songs.filter(s => s.artist === activeFilter);
    filtered.forEach((song, idx) => {
      const actualIdx = songs.indexOf(song);
      const item = document.createElement('div');
      item.className = 'queue-item' + (actualIdx === currentSongIndex ? ' active' : '');
      item.innerHTML = `
        <div class="queue-number">${idx + 1}</div>
        <div class="queue-info">
          <p class="queue-title">${song.title}</p>
          <p class="queue-artist">${song.artist}</p>
        </div>
        <div class="queue-duration">--:--</div>
      `;
      item.addEventListener('click', () => {
        currentSongIndex = actualIdx;
        updatePlayer();
        hideMenu();
      });
      menuList.appendChild(item);
    });
  }

  function updatePlayer(autoPlay = true) {
    const song = songs[currentSongIndex];
    if (songTitle) songTitle.textContent = song.title;
    if (songArtist) songArtist.textContent = song.artist;
    if (songImage) {
      songImage.classList.add('image-transitioning');
      songImage.onerror = () => { songImage.src = DEFAULT_COVER; };
      songImage.src = song.cover + '?t=' + Date.now();
      setTimeout(() => songImage.classList.remove('image-transitioning'), 150);
    }
    if (artGlow) {
      artGlow.style.backgroundImage = `url('${song.cover}?t=${Date.now()}')`;
    }
    if (audioPlayer) {
      audioPlayer.src = song.file;
      audioPlayer.load();
      if (autoPlay) {
        audioPlayer.play().then(() => {
          if (playPauseBtn) playPauseBtn.textContent = '⏸';
          isPlaying = true;
        }).catch(e => console.warn('play error:', e));
      }
    }
  }

  // Player controls
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶';
      } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸';
      }
      isPlaying = !isPlaying;
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
  });

  if (nextBtn) nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
  });

  // Audio events
  if (audioPlayer) {
    audioPlayer.addEventListener('timeupdate', () => {
      if (audioPlayer.duration) {
        const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        if (progressBar) progressBar.value = pct;
        if (progressFill) progressFill.style.width = pct + '%';
        if (progressThumb) progressThumb.style.left = pct + '%';
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        if (durationTimeEl) durationTimeEl.textContent = formatTime(audioPlayer.duration);
      }
    });

    audioPlayer.addEventListener('ended', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      updatePlayer();
    });
  }

  // Progress seek
  if (progressBar) {
    progressBar.addEventListener('input', () => {
      if (audioPlayer && audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
      }
    });
  }

  // Volume
  if (audioPlayer && volInput) {
    audioPlayer.volume = 0.7;
    volInput.value = 0.7;
    if (volFill) volFill.style.width = '70%';
    
    volInput.addEventListener('input', () => {
      audioPlayer.volume = volInput.value;
      if (volFill) volFill.style.width = (volInput.value * 100) + '%';
      if (volPercent) volPercent.textContent = Math.round(volInput.value * 100) + '%';
    });
  }

  // Heart buttons
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('lit');
    });
  });

  // Start first song
  console.log('Setting up complete, starting player...');
  updatePlayer();
});