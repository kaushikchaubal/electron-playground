const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      // and load the index.html of the app.
      let URL = process.env.URL 
      if (URL) {
        console.log('Loading remote URL:', URL)
        win.loadURL(URL)
      } else {
        win.loadFile('index.html')
      }
      
})