//require
const Youtube = require("youtube-mp3-downloader")
const ffmpeg = require("ffmpeg-binaries")
const dw_folder = "./download/"
const fs = require('fs');

//variable
let MusicQueue = []
let NumberDownloadThread = 20
let downloaded = []
let bool = true
let progressCntrol = []

//Youtube Instance
const YD = new Youtube({
    "ffmpegPath": ffmpeg,
    "outputPath": dw_folder,    
    "youtubeVideoQuality": "highest",       
    "queueParallelism": NumberDownloadThread,                 
    "progressTimeout": 2000             
})

function dl_list_musique(file)
{
    MusicQueue = readFileToArray(file)
    MusicQueue.forEach((element, idx)=> {
        console.log("Lancement du téléchargement de la musique "+(idx+1)+"/"+MusicQueue.length)
        SimpleDownload(element, (idx+1))
    })
}

function readFileToArray(file)
{
    let contents = fs.readFileSync(file, 'utf8');
    let array = contents.split("\n")
    array.forEach((element, idx) => {
        array[idx] = element.replace("https://www.youtube.com/watch?v=", '')
    })
    return array
}

function SimpleDownload(uri ,musique)
{
    YD.download(uri)
    
    YD.on("finished", function(err, data) {
        if(downloaded.indexOf(data.videoTitle) < 0)
        {
            console.log("La musique '"+data.videoTitle+"' a été téléchargée avec succès !")
            downloaded.push(data.videoTitle)
        }
    })
        
    YD.on("error", function(error) {
        console.log(error)
    })

    // YD.on("progress", function(progress) {
    //     let id = progress.videoId
    //     let percentage = Math.round((progress.progress.percentage)*1)/1
    //     let key = id+":"+percentage.toString()
    //     let msg = "Video "+id+" : "+percentage.toString()+"%"
    //     if(bool)
    //     {
    //         if(progressCntrol.indexOf(key) < 0 && bool)
    //         {
    //             bool = false
    //             console.log(msg)
    //             progressCntrol.push(key)
    //             bool = true
    //         }
    //     }
    //     else
    //     {
    //         while(!bool)
    //         {
    //             if(progressCntrol.indexOf(key) < 0 && bool)
    //             {
    //                 bool = false
    //                 console.log(msg)
    //                 progressCntrol.push(key)
    //                 bool = true
    //             }
    //         }
    //     }
    // })
}

module.exports = {
    SimpleDownload,
    dl_list_musique,
    readFileToArray
}