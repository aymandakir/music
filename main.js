const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 650,
    frame: false,
    transparent: true,
    alwaysOnTop: false,
    resizable: true,
    minWidth: 360,
    minHeight: 600,
    skipTaskbar: false,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();

  ipcMain.on('close-app', () => {
    win.close();
  });

  ipcMain.on('minimize-app', () => {
    win.minimize();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});