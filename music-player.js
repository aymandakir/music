// Songs array with placeholder entries
const songs = [
  // ── The Marías · Submarine ──
  { title: "Ride",                    artist: "The Marías", file: "songs/submarine/1. Ride.mp3",                    cover: "assets/covers/submarine.jpg" },
  { title: "Hamptons",                artist: "The Marías", file: "songs/submarine/2. Hamptons.mp3",                cover: "assets/covers/submarine.jpg" },
  { title: "Echo",                    artist: "The Marías", file: "songs/submarine/3. Echo.mp3",                    cover: "assets/covers/submarine.jpg" },
  { title: "Run Your Mouth",          artist: "The Marías", file: "songs/submarine/4. Run Your Mouth.mp3",          cover: "assets/covers/submarine.jpg" },
  { title: "Real Life",               artist: "The Marías", file: "songs/submarine/5. Real Life.mp3",               cover: "assets/covers/submarine.jpg" },
  { title: "Blur",                    artist: "The Marías", file: "songs/submarine/6. Blur.mp3",                    cover: "assets/covers/submarine.jpg" },
  { title: "Paranoia",                artist: "The Marías", file: "songs/submarine/7. Paranoia.mp3",                cover: "assets/covers/submarine.jpg" },
  { title: "Lejos de Ti",             artist: "The Marías", file: "songs/submarine/8. Lejos de Ti.mp3",             cover: "assets/covers/submarine.jpg" },
  { title: "Love You Anyway",         artist: "The Marías", file: "songs/submarine/9. Love You Anyway.mp3",         cover: "assets/covers/submarine.jpg" },
  { title: "Ay No Puedo",             artist: "The Marías", file: "songs/submarine/10. Ay No Puedo.mp3",            cover: "assets/covers/submarine.jpg" },
  { title: "No One Noticed",          artist: "The Marías", file: "songs/submarine/11. No One Noticed.mp3",         cover: "assets/covers/submarine.jpg" },
  { title: "Vicious Sensitive Robot", artist: "The Marías", file: "songs/submarine/12. Vicious Sensitive Robot.mp3", cover: "assets/covers/submarine.jpg" },
  { title: "If Only",                 artist: "The Marías", file: "songs/submarine/13. If Only.mp3",                cover: "assets/covers/submarine.jpg" },
  { title: "Sienna",                  artist: "The Marías", file: "songs/submarine/14. Sienna.mp3",                 cover: "assets/covers/submarine.jpg" },

  // ── Mitski · Laurel Hell ──
  { title: "Valentine, Texas",        artist: "Mitski", file: "songs/laurel-hell/1. Valentine, Texas.mp3",          cover: "assets/covers/laurel-hell.jpg" },
  { title: "Working for the Knife",   artist: "Mitski", file: "songs/laurel-hell/2. Working for the Knife.mp3",     cover: "assets/covers/laurel-hell.jpg" },
  { title: "Stay Soft",               artist: "Mitski", file: "songs/laurel-hell/3. Stay Soft.mp3",                 cover: "assets/covers/laurel-hell.jpg" },
  { title: "Everyone",                artist: "Mitski", file: "songs/laurel-hell/4. Everyone.mp3",                  cover: "assets/covers/laurel-hell.jpg" },
  { title: "Heat Lightning",          artist: "Mitski", file: "songs/laurel-hell/5. Heat Lightning.mp3",            cover: "assets/covers/laurel-hell.jpg" },
  { title: "The Only Heartbreaker",   artist: "Mitski", file: "songs/laurel-hell/6. The Only Heartbreaker.mp3",     cover: "assets/covers/laurel-hell.jpg" },
  { title: "Love Me More",            artist: "Mitski", file: "songs/laurel-hell/7. Love Me More.mp3",              cover: "assets/covers/laurel-hell.jpg" },
  { title: "There's Nothing Left for You", artist: "Mitski", file: "songs/laurel-hell/8. There's Nothing Left for You.mp3", cover: "assets/covers/laurel-hell.jpg" },
  { title: "Should've Been Me",       artist: "Mitski", file: "songs/laurel-hell/9. Should've Been Me.mp3",         cover: "assets/covers/laurel-hell.jpg" },
  { title: "I Guess",                 artist: "Mitski", file: "songs/laurel-hell/10. I Guess.mp3",                  cover: "assets/covers/laurel-hell.jpg" },
  { title: "That's Our Lamp",         artist: "Mitski", file: "songs/laurel-hell/11. That's Our Lamp.mp3",          cover: "assets/covers/laurel-hell.jpg" },

  // ── The Smiths · Louder Than Bombs ──
  { title: "Is It Really so Strange?",    artist: "The Smiths", file: "songs/louder-than-bombs/1. Is It Really so Strange?.mp3",    cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Sheila Take a Bow",           artist: "The Smiths", file: "songs/louder-than-bombs/2. Sheila Take a Bow - 2011 Remaster.mp3",      cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Shoplifters of the World Unite", artist: "The Smiths", file: "songs/louder-than-bombs/3. Shoplifters of the World Unite - 2011 Remaster.mp3", cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Sweet and Tender Hooligan",   artist: "The Smiths", file: "songs/louder-than-bombs/4. Sweet and Tender Hooligan - John Peel Session, 12_2_86.mp3", cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Half a Person",               artist: "The Smiths", file: "songs/louder-than-bombs/5. Half a Person - 2011 Remaster.mp3",    cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "London",                      artist: "The Smiths", file: "songs/louder-than-bombs/6. London - 2011 Remaster.mp3",            cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Panic",                       artist: "The Smiths", file: "songs/louder-than-bombs/7. Panic - 2011 Remaster.mp3",             cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Girl Afraid",                 artist: "The Smiths", file: "songs/louder-than-bombs/8. Girl Afraid - 2011 Remaster.mp3",      cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Shakespeare's Sister",         artist: "The Smiths", file: "songs/louder-than-bombs/9. Shakespeare's Sister - 2011 Remaster.mp3",     cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "William, It Was Really Nothing", artist: "The Smiths", file: "songs/louder-than-bombs/10. William, It Was Really Nothing - 2011 Remaster.mp3", cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "You Just Haven't Earned It Yet, Baby", artist: "The Smiths", file: "songs/louder-than-bombs/11. You Just Haven't Earned It Yet, Baby.mp3",  cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Heaven Knows I'm Miserable Now", artist: "The Smiths", file: "songs/louder-than-bombs/12. Heaven Knows I'm Miserable Now - 2011 Remaster.mp3",   cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Ask",                         artist: "The Smiths", file: "songs/louder-than-bombs/13. Ask - 2011 Remaster.mp3",              cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Golden Lights",               artist: "The Smiths", file: "songs/louder-than-bombs/14. Golden Lights - 2011 Remaster.mp3",     cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Oscillate Wildly",            artist: "The Smiths", file: "songs/louder-than-bombs/15. Oscillate Wildly - 2011 Remaster.mp3",        cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "These Things Take Time",      artist: "The Smiths", file: "songs/louder-than-bombs/16. These Things Take Time - 2011 Remaster.mp3",      cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Rubber Ring",                 artist: "The Smiths", file: "songs/louder-than-bombs/17. Rubber Ring - 2011 Remaster.mp3",     cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Back to the Old House",       artist: "The Smiths", file: "songs/louder-than-bombs/18. Back to the Old House - 2011 Remaster.mp3",        cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Hand in Glove",               artist: "The Smiths", file: "songs/louder-than-bombs/19. Hand in Glove - 2011 Remaster.mp3",     cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Stretch out and Wait",       artist: "The Smiths", file: "songs/louder-than-bombs/20. Stretch out and Wait - 2011 Remaster.mp3",       cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Please, Please, Please",      artist: "The Smiths", file: "songs/louder-than-bombs/21. Please, Please, Please, Let Me Get What I Want - 2011 Remaster.mp3", cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "This Night Has Opened My Eyes", artist: "The Smiths", file: "songs/louder-than-bombs/22. This Night Has Opened My Eyes - 2011 Remaster.mp3",       cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Unloveable",                  artist: "The Smiths", file: "songs/louder-than-bombs/23. Unloveable - 2011 Remaster.mp3",      cover: "assets/covers/louder-than-bombs.jpg" },
  { title: "Asleep",                      artist: "The Smiths", file: "songs/louder-than-bombs/24. Asleep - 2011 Remaster.mp3",           cover: "assets/covers/louder-than-bombs.jpg" },
];

// Variables
let currentSongIndex = 0;
let isPlaying = false;

// Get DOM elements
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
const currentTime = document.getElementById('current-time');
const durationTime = document.getElementById('duration-time');
const timeDisplay = document.getElementById('time-display');

// Volume elements
const volInput = document.getElementById('volume-input');
const volFill = document.getElementById('volume-fill');
const volPercent = document.getElementById('vol-percent');
const volIcon = document.getElementById('vol-icon');

function setSongTitle(name) {
  songTitle.textContent = '';
  songTitle.classList.remove('marquee');
  const span1 = document.createElement('span');
  span1.textContent = name;
  songTitle.appendChild(span1);
  if (songTitle.scrollWidth > songTitle.parentElement.clientWidth) {
    const span2 = document.createElement('span');
    span2.textContent = name;
    songTitle.appendChild(span2);
    songTitle.classList.add('marquee');
  }
}

function updatePlayer(autoPlay = true) {
  const song = songs[currentSongIndex];
  setSongTitle(song.title);
  if (songArtist) songArtist.textContent = song.artist;
  songImage.classList.add('image-transitioning');
  setTimeout(() => {
    console.log('Loading:', songs[currentSongIndex].file);
    audioPlayer.src = song.file;
    songImage.src = song.cover + '?t=' + Date.now();
    if (artGlow) artGlow.style.backgroundImage = `url('${song.cover}?t=${Date.now()}')`;
    audioPlayer.load();
    if (autoPlay) {
      audioPlayer.play().then(() => {
        playPauseBtn.textContent = '⏸';
        playPauseBtn.classList.add('is-playing');
        isPlaying = true;
      }).catch(e => console.warn('Play failed:', e));
    }
    songImage.classList.remove('image-transitioning');
    songImage.classList.add('image-animated');
    setTimeout(() => songImage.classList.remove('image-animated'), 260);
  }, 150);
}

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
    playPauseBtn.classList.remove('is-playing');
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸';
    playPauseBtn.classList.add('is-playing');
  }
  isPlaying = !isPlaying;
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updatePlayer(true);
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updatePlayer(true);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

audioPlayer.addEventListener('timeupdate', () => {
  if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    progressFill.style.width = `${progress}%`;
    progressThumb.style.left = `${progress}%`;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    durationTime.textContent = formatTime(audioPlayer.duration);
  } else {
    progressBar.value = 0;
    progressFill.style.width = '0%';
    progressThumb.style.left = '0%';
    currentTime.textContent = '0:00';
    durationTime.textContent = '0:00';
  }
});

audioPlayer.addEventListener('loadedmetadata', () => {
  if (!isNaN(audioPlayer.duration)) {
    durationTime.textContent = formatTime(audioPlayer.duration);
  }
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
  progressFill.style.width = `${progressBar.value}%`;
  progressThumb.style.left = `${progressBar.value}%`;
});

audioPlayer.addEventListener('ended', () => {
  nextSong();
});

playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

const heartBtns = document.querySelectorAll('.heart-btn');
heartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('lit');
    btn.classList.add('pop');
  });
  btn.addEventListener('animationend', () => {
    btn.classList.remove('pop');
  });
});

let lastVolume = 0.7;
audioPlayer.volume = 0.7;
volFill.style.width = '70%';

function updateVolumeIcon(volume) {
  let iconSvg = volume === 0
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
    : volume < 0.4
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
  volIcon.innerHTML = iconSvg;
}

volInput.addEventListener('input', () => {
  const v = parseFloat(volInput.value);
  audioPlayer.volume = v;
  volFill.style.width = (v * 100) + '%';
  volPercent.textContent = Math.round(v * 100) + '%';
  updateVolumeIcon(v);
  if (v > 0) lastVolume = v;
});

volIcon.addEventListener('click', () => {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume = 0;
    volInput.value = 0;
    volFill.style.width = '0%';
    volPercent.textContent = '0%';
    updateVolumeIcon(0);
  } else {
    audioPlayer.volume = lastVolume;
    volInput.value = lastVolume;
    volFill.style.width = (lastVolume * 100) + '%';
    volPercent.textContent = Math.round(lastVolume * 100) + '%';
    updateVolumeIcon(lastVolume);
  }
});

updateVolumeIcon(0.7);

const closeBtn = document.getElementById('close-btn');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    try {
      const { ipcRenderer } = require('electron');
      ipcRenderer.send('close-app');
    } catch (e) {
      window.close();
    }
  });
}

const minimizeBtn = document.getElementById('minimize-btn');
if (minimizeBtn) {
  minimizeBtn.addEventListener('click', () => {
    try {
      const { ipcRenderer } = require('electron');
      ipcRenderer.send('minimize-app');
    } catch (e) {}
  });
}

const menuOverlay = document.getElementById('menu-overlay');
const menuBtn = document.getElementById('menu-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const menuList = document.getElementById('menu-list');
const queueFilters = document.getElementById('queue-filters');

let activeFilter = 'all';

function renderQueue() {
  menuList.innerHTML = '';
  const filteredSongs = activeFilter === 'all' ? songs : songs.filter(song => song.artist === activeFilter);
  filteredSongs.forEach((song, filteredIndex) => {
    const actualIndex = songs.indexOf(song);
    const item = document.createElement('div');
    item.classList.add('queue-item');
    item.setAttribute('data-song-index', actualIndex);
    if (actualIndex === currentSongIndex) item.classList.add('active');
    
    const track = document.createElement('div');
    track.classList.add('queue-number');
    const activeEq = document.createElement('div');
    activeEq.classList.add('queue-eq');
    activeEq.innerHTML = '<div></div><div></div><div></div>';
    track.textContent = filteredIndex + 1;
    if (actualIndex === currentSongIndex) track.replaceWith(activeEq);

    const info = document.createElement('div');
    info.classList.add('queue-info');
    const title = document.createElement('p');
    title.classList.add('queue-title');
    title.textContent = song.title;
    const artist = document.createElement('p');
    artist.classList.add('queue-artist');
    artist.textContent = song.artist;
    info.append(title, artist);

    const duration = document.createElement('div');
    duration.classList.add('queue-duration');
    duration.textContent = song.duration ? formatTime(song.duration) : '--:--';

    item.append(track, info, duration);
    item.addEventListener('click', () => {
      currentSongIndex = actualIndex;
      updatePlayer(true);
      renderQueue();
      hideMenu();
    });
    menuList.append(item);
  });
}

function showMenu() {
  menuOverlay.classList.add('visible');
  renderQueue();
}

function hideMenu() {
  menuOverlay.classList.remove('visible');
}

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  showMenu();
});

menuCloseBtn.addEventListener('click', hideMenu);

queueFilters.addEventListener('click', (event) => {
  if (event.target.classList.contains('filter-btn')) {
    activeFilter = event.target.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderQueue();
  }
});

menuOverlay.addEventListener('click', (event) => {
  if (event.target === menuOverlay) hideMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  // Preload all song durations
  songs.forEach((song, index) => {
    const tempAudio = new Audio();
    tempAudio.src = song.file;
    tempAudio.addEventListener('loadedmetadata', () => {
      song.duration = tempAudio.duration;
    });
  });
  updatePlayer();
});
