# Music Player Widget

A beautiful, frameless Electron music player widget that floats on your desktop.

## Features

- Frameless, transparent window that stays on top
- Drag the title bar to move the widget
- Play/pause, previous/next controls
- Progress bar for seeking
- Time display
- Favorite songs with heart buttons
- Close button in top-right corner

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

```bash
npm start
```

## Adding Songs

1. Create the folder structure:
   ```bash
   mkdir songs
   mkdir assets/covers
   ```

2. Add your `.mp3` files to the `songs/` folder.

3. Add corresponding `.jpg` cover images to the `assets/covers/` folder.

4. Update the `songs` array in `music-player.js` with your song data:
   ```javascript
   const songs = [
     { title: "Artist - Song Name", file: "songs/your-song.mp3", cover: "assets/covers/your-cover.jpg" },
     // Add more songs...
   ];
   ```

## Controls

- **Play/Pause**: Click the center button
- **Previous/Next**: Use the arrow buttons
- **Seek**: Drag the progress bar
- **Favorite**: Click the heart buttons
- **Close**: Click the × button in the top-right corner
- **Move**: Drag the title bar

The widget will automatically play the next song when the current one ends.