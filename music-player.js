// Songs array with placeholder entries
const songs = [
  { title: "Artist 1 - Song Name 1", file: "songs/song1.mp3", cover: "assets/covers/cover1.jpg" },
  { title: "Artist 2 - Song Name 2", file: "songs/song2.mp3", cover: "assets/covers/cover2.jpg" },
  { title: "Artist 3 - Song Name 3", file: "songs/song3.mp3", cover: "assets/covers/cover3.jpg" }
];

// Variables
let currentSongIndex = 0;
let isPlaying = false;

// Get DOM elements
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');
const songImage = document.getElementById('song-image-img');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const timeDisplay = document.getElementById('time-display');

// Function to update the player with current song
function updatePlayer() {
  songTitle.textContent = songs[currentSongIndex].title;
  audioSource.src = songs[currentSongIndex].file;
  songImage.src = songs[currentSongIndex].cover;
  audioPlayer.load();
}

// Function to toggle play/pause
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}

// Function to go to previous song
function prevSong() {
  const wasPlaying = isPlaying;
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updatePlayer();
  if (wasPlaying) {
    audioPlayer.play();
  }
}

// Function to go to next song
function nextSong() {
  const wasPlaying = isPlaying;
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updatePlayer();
  if (wasPlaying) {
    audioPlayer.play();
  }
}

// Helper function to format time as m:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Event listener for audio time update
audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
  timeDisplay.textContent = `${formatTime(audioPlayer.currentTime)} / ${formatTime(audioPlayer.duration)}`;
});

// Event listener for progress bar input
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});

// Event listener for audio ended
audioPlayer.addEventListener('ended', () => {
  nextSong();
});

// Button click listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Heart buttons toggle active class
const heartBtns = document.querySelectorAll('.heart-btn');
heartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

// Close button
document.getElementById('close-btn').addEventListener('click', () => {
  const { ipcRenderer } = require('electron');
  ipcRenderer.send('close-app');
});

// Initialize player on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  updatePlayer();
});