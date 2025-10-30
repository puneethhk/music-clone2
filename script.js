console.log("welcome to music");

// Initialze the Variables
let songIndex=0;
let audioElement = new Audio('C:\Users\punee\OneDrive\Desktop\music project clone\Kuchiku_Kuchiku_ft._Dr.Vishnuvardhan,_Ambarish,Tara,Umashree(128k).m4a');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs=[
    {songName:"baro pailwan",filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"baro pailwan",filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"baro pailwan",filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"baro pailwan",filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
]
let audioElement = new Audio('C:\Users\punee\OneDrive\Desktop\music project clone\Kuchiku_Kuchiku_ft._Dr.Vishnuvardhan,_Ambarish,Tara,Umashree(128k).m4a');
//audioElemeny.play();

//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})