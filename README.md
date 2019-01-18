# youtube-downloader
<p>A youtube downloader using node.js. Fast and multiple music converted and downloaded.</p>

# Install
### Git
1. git init
2. git clone https://github.com/tomgal/youtube-downloader.git
3. cd /youtube-downloader

### Node.js
1. npm install
2. npm start


# Configure

### server.js

~~~~
app.use(function(req, res, next) {
    let err = new Error("Sorry, this page was not found")
    err.status = 404
    next(err)
})

//function called
youtubeCore.dl_list_musique(file) ---> file = .txt file where all your youtube video link are listed

app.listen(port)
console.log("Youtube Downloader Server listening on port "+port)

~~~~

### core.js

1. Number of simultaneous music converted

~~~~

let NumberDownloadThread = 20

~~~~

2. Path of your download folder

~~~~

const dw_folder = "./download/"

~~~~


# Information

<p>This is the first version. The project will be updated with an UI, code review etc.</p>

