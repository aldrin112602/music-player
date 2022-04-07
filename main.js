let audio = document.getElementById('audio');
let audioName = document.getElementById('fileName');
let range = document.querySelector('#length');
let curr = document.querySelector('#current');
let dur = document.querySelector('#duration');
let rotate = document.querySelector('.top');
let duration;
let playing = false;
let root = '../Music/';
let music_list = [
  'y2mate.com - Best Pop Music Playlist 2020  Post Malone Greatest Hits Full Album 2020.mp3', 
  'y2mate.com - ＨＯＵＳＥ¹ LoFi House Mix.mp3',
  'y2mate.com - NON STOP OPM SONGS OF DARYL ONGFeatured Artist for 2019TAGALOG SINGERSMUSIKANG TAGALOGATIN TO.mp3',
  'y2mate.com - Sa Aking Puso Cover by Jenzen Guino and McKevin.mp3',
  'y2mate.com - YOURE STILL THE ONE  JENZEN GUINO COVER.mp3'
];
list = 0;
audio.src = root + music_list[list];
audioName.innerText = music_list[list];

autoNext = () => {
    setTimeout(() => {
         duration = audio.duration;
         range.max = duration;
         setInterval(() => {
             range.value = audio.currentTime;
             dur.innerText = Math.floor(Math.floor(parseInt(duration)/60)/60) + ':' + Math.floor((parseInt(duration)/60)%60) + ':' + Math.floor(parseInt(duration) % 60);
             
             curr.innerText = Math.floor(Math.floor(parseInt(audio.currentTime)/60)/60) + ':' + Math.floor((parseInt(audio.currentTime)/60)%60) + ':' + Math.floor(parseInt(audio.currentTime) % 60);
             if(audio.currentTime == duration) {
                  next();
              }
         },100);

    },100);
};

autoNext();
playPauseAudio = () => {
    let btn = document.getElementById('btn');
    if(!playing) {
       playing = true;
       document.querySelector('.row').style.opacity = '1';
       audio.play();
       btn.classList = 'fas fa-pause';
       rotate.style.animation = 'Animation 4s linear 0s infinite';
    } else {
       playing = false;
       document.querySelector('.row').style.opacity = '0';
       audio.pause();
       btn.classList = 'fas fa-play';
       rotate.style.animation = 'none';
    }
    autoNext();
}

range.oninput = () => {
      audio.currentTime = range.value;
      autoNext();
}

 previous = () => {
       list--;
       if(list < 0) {
           list = music_list.length - 1;
       }
       audio.src = root + music_list[list];
       if(playing) {
           audio.play();
       }
       audioName.innerText = music_list[list];
        autoNext();
 }

next = () => {
       list++;
       if(list == music_list.length) {
            list = 0;
       }
       audio.src = root + music_list[list];
       if(playing) {
          audio.play();
       }
       audioName.innerText = music_list[list];
        autoNext();
 } 
