const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      // Load the URL
      let URL = process.env.URL 
      if (URL) {
        console.log('Loading remote URL:', URL)
        mainWindow.loadURL(URL)
      } else {
        mainWindow.loadFile('index.html')
      }

      // Open the DevTools.
      mainWindow.webContents.openDevTools()
      
})