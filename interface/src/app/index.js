const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

function createWindow () {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
            contextIsolation: false,
        },
    })

    require("@electron/remote/main").enable(win.webContents)

    win.loadFile('./../client/dist/index.html');
    win.setClosable(true);
    win.webContents.openDevTools();
}
const boots = async () => {
    await app.whenReady();
    await createWindow();
}

boots();