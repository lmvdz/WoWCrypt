'use strict'

const electron = require('electron')
const {Menu} = require('electron')
const app = electron.app
const path = require('path')
const BrowserWindow = electron.BrowserWindow

let menuTemplate = [
  {
    label: "WoW Crypt",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]
  }, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]
  }, {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "CmdOrCtrl+R",
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      }, {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      }, {
        type: 'separator'
      }, {
        role: 'resetzoom'
      }, {
        role: 'zoomin'
      }, {
        role: 'zoomout'
      }, {
        type: 'separator'
      }, {
        role: 'togglefullscreen'
      }
    ]
  }, {
    role: 'Help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://github.com/XeonPowder/WoWCrypt') }
      }
    ]
  }
]
let mainWindowTemplate = {
  title: 'WoW Crypt',
  frame: true,
  minHeight: 600,
  minWidth: 800,
  center: true,
  show: false
}
let loadingScreenTemplate = {
  title: 'WoW Crypt',
  frame: false,
  minHeight: 600,
  minWidth: 800,
  center: true,
  show: false
}
let mainWindow
let loadingScreen
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
  config.loadingURI = `file://${__dirname}/dist/loading.html`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
  config.loadingURI = `file://${__dirname}/dist/loading.html`
}
function darwin () {
  // Edit menu.
  menuTemplate[1].submenu.push(
    {
      type: 'separator'
    }, {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        }, {
          role: 'stopspeaking'
        }
      ]
    }
  )
}
function createWindow () {
  /**
   * Initial window options
   */
  process.platform === 'darwin' ? darwin() : null
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))

  mainWindow = new BrowserWindow(mainWindowTemplate)

  mainWindow.loadURL(config.url)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    if (loadingScreen) {
      let loadingScreenBounds = loadingScreen.getBounds()
      mainWindow.setBounds(loadingScreenBounds)
      loadingScreen.close()
    }
  })

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))

    let installExtension = require('electron-devtools-installer')

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

function createLoadingScreen () {
  loadingScreen = new BrowserWindow(loadingScreenTemplate)

  loadingScreen.loadURL(config.loadingURI)

  loadingScreen.webContents.on('did-finish-load', () => {
      loadingScreen.show()
      createWindow()
  })

  loadingScreen.on('closed', () => loadingScreen = null)
}

app.on('ready', () => {
  createLoadingScreen()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (loadingScreen === null) {
    createLoadingScreen()
  }
})
