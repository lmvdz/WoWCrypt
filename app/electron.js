'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

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

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title: 'WoW Crypt',
    frame: true,
    minHeight: 600,
    minWidth: 800,
    center: true,
    titleBarStyle: 'hidden',
    show: false
  })

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
  loadingScreen = new BrowserWindow({
    title: 'WoW Crypt',
    frame: false,
    minHeight: 600,
    minWidth: 800,
    center: true,
    titleBarStyle: 'hidden',
    show: false
  })

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
