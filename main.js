// Import the "modules"
const {app, BrowserWindow, pcMain} = require("electron")
const path = require("path")

app.whenReady().then(()=> createWindow());

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({
        title:"Azulio's Launcher",
        height:600,
        width:1000,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(path.join(__dirname, "./web/index.html"))

}

app.on("activate", ()=>{
    if(mainWindow === null){
        createWindow()
    }
});

app.on("window-all-closed", ()=>{
    app.quit();
});