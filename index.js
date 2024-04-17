function menuInEachPage() { //menu in each page
    document.getElementById("menuDiv").innerHTML = "<nav id='menu'>\
    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>\
    <ul>\
    <li id = 'icon' class = 'navIconLi'><img class = 'navIcon' src='photoSource/icon/capybara-Icon.svg'></li>\
      <li id = 'navHome'><a href='index.html'>Home</a></li>\
      <li id = 'navSong'><a href='song.html'>Song</a></li>\
      <li><a class='dropdown-arrow' href='aboutreference.html'>About</a>\
        <ul class='sub-menus'>\
          <li><a href='findThem.html'>FindThem</a></li>\
          <li><a href='Form.html'>Quiz</a></li>\
        </ul>\
      </li>\
    </ul>\
  </nav>";}
  menuInEachPage();

  
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '12px';
    }
  }

  //quiz.html
  function print_result() {
    var mark = 0;
    var qSongAns = document.getElementById("qSongAnsField").value.toUpperCase();
    var selectElement = document.getElementById('qon');
    var selectedOptionId = selectElement.options[selectElement.selectedIndex].id;
    var quote, img;
 
    var nameField = document.getElementById("nameField");
    var name = nameField ? nameField.value : "Capybara Senpai";
    if (name === "") {
        name = "Capybara Senpai";
    }


    if (qSongAns === "CAPYBARA") {
      mark ++;
    }
    if (document.getElementById("whyPopular-3").checked) {
      mark ++;
    }
    if (document.getElementById("qWhere1").checked) {
      mark ++;
    }
    if (selectedOptionId === "qon0") {
      mark++;
    }
    if (document.getElementById("Qcharacters-1").checked && document.getElementById("Qcharacters-4").checked 
    && !document.getElementById("Qcharacters-0").checked && !document.getElementById("Qcharacters-2").checked 
    && !document.getElementById("Qcharacters-3").checked && !document.getElementById("Qcharacters-5").checked 
    && !document.getElementById("Qcharacters-6").checked && !document.getElementById("Qcharacters-7").checked 
    && !document.getElementById("Qcharacters-8").checked) {
      mark += 2;
    }else if (document.getElementById("Qcharacters-1").checked && !document.getElementById("Qcharacters-4").checked 
    && !document.getElementById("Qcharacters-0").checked && !document.getElementById("Qcharacters-2").checked 
    && !document.getElementById("Qcharacters-3").checked && !document.getElementById("Qcharacters-5").checked 
    && !document.getElementById("Qcharacters-6").checked && !document.getElementById("Qcharacters-7").checked 
    && !document.getElementById("Qcharacters-8").checked){
      mark++;
    }else if (!document.getElementById("Qcharacters-1").checked && document.getElementById("Qcharacters-4").checked 
    && !document.getElementById("Qcharacters-0").checked && !document.getElementById("Qcharacters-2").checked 
    && !document.getElementById("Qcharacters-3").checked && !document.getElementById("Qcharacters-5").checked 
    && !document.getElementById("Qcharacters-6").checked && !document.getElementById("Qcharacters-7").checked 
    && !document.getElementById("Qcharacters-8").checked){
      mark++;
    }

    if (mark == 6){
      quote = "<div class = \"resultsIn\"> Congratulations! " + name + ", You are the grand capybara master!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/expert.jpg\" class = \"square\"></div>";
    }else if (mark == 5){
      quote = "<div class = \"resultsIn\"> Good job! " + name + ", You are an capybara expert! </div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/mark5.jpg\" class = \"square\"></div>";
    }else if (mark == 4){
      quote = "<div class = \"resultsIn\"> Nice try! " + name + ", Keep it up! Follow the Capybara instagram!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/mark4.jpg\" class = \"square\"></div>";
    }else if (mark == 3){
      quote = "<div class = \"resultsIn\"> Good effort! " + name + ",  You should watch more Capybara video ! </div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/mark3.jpg\" class = \"square\"></div>";
    }else if (mark == 2){
      quote = "<div class = \"resultsIn\"> Yikes! " + name + ", You really should go through the website one more time!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/study.jpg\" class = \"square\"></div>";
    }else if (mark == 1){
      quote = "<div class = \"resultsIn\"> Oh no! " + name + ", The capybara police is coming for you!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/capybaraPolice.jpg\" class = \"square\"></div>";
    }else if (mark == 0){
      quote = "<div class = \"resultsIn\"> Oh no! " + name + ", The capybara police is going to arrest you due to your violate of capybara space security law!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"photoSource/Quiz/capybaraPolice.jpg\" class = \"square\"></div>";
    }
    document.getElementById("demo").innerHTML = "<div class = \"results\">" + quote 
    + img + "<div class = \"resultsIn\"> Marks : " + mark  + "/6 </div></div>";
	}

  function reset(){
  }
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
 
  window.addEventListener("scroll", reveal);
//Song.html
function unmute() {
    var video = document.getElementById('background-video');
    if (video.muted == true){
        document.getElementById('unmute-button').innerHTML = '<img id ="soundImg" class = "unmuted" src = "photoSource/icon/sound-on.svg">';
        video.muted = false;
    }else{
    document.getElementById('unmute-button').innerHTML = '<img id ="soundImg" class = "soundImg" src = "photoSource/icon/mute-audio.svg">';
    video.muted = true;
    }
}
var lyrics = [  //lyrics"CAP ! ", "PY ! ","BA ! ","RA ! ",
  "CAPYBARA",
  "CAPYBARA",
  "CAPYBARA CAPYBARA",
  "CAPYBARA",
  "CAPYBARA",
  "CAPYBARA CAPYBARA CAPYBARA",
  "CAPYBARA ",
  
];

var lyricsIndex = 0;

setInterval(function() {
  var lyricsDiv = document.getElementById('lyrics');
  lyricsDiv.textContent = lyrics[lyricsIndex];
  lyricsIndex = (lyricsIndex + 1) % lyrics.length;
}, 500);  // Change lyrics every 500 milliseconds (0.5 seconds)

var button = document.getElementById('toggleButton');//For toogleButton
var div = document.getElementById('fadeDiv');
var body = document.body;

var toggle = false;

function toggleSongInfo() {
  if (toggle === false) {
    document.getElementById('toogleDiv').innerHTML = `<div id='fadeDiv' style='animation: bounceRightIn 2s ease-in 0s 1 normal none;'>
    <h1>The <br><br>Capybara<br><br>Song</h1><p>The Capybara  are back in a big way thanks to a silly song on TikTok. The world's biggest 
    rodent is now taking over the massive video-sharing app, TikTok. Thanks to a catchy new song about capybaras which sparked the trend is
     by a Russian artist and it's just called “Capybara” in Russian. It sort of sounds like a song from a children's show. The lyrics go, 
     “Ca-py-bara capybara capybara capybara capybara capybara.” It's just a little earworm that's super easy to sing to.</p></div>`;
    toggle = true;
  } else {
    document.getElementById('toogleDiv').innerHTML = `<div id='fadeDiv' style='animation: BounceRightOut 2s ease-in 0s 1 normal none;'>
    <h1>The <br><br>Capybara<br><br>Song</h1><p>The Capybara  are back in a big way thanks to a silly song on TikTok. The world's biggest 
    rodent is now taking over the massive video-sharing app, TikTok. Thanks to a catchy new song about capybaras which sparked the trend 
    is by a Russian artist and it's just called “Capybara” in Russian. It sort of sounds like a song from a children's show. The lyrics go,
     “Ca-py-bara capybara capybara capybara capybara capybara.” It's just a little earworm that's super easy to sing to.</p></div>`;
    toggle = false;
    setTimeout(function(){
      document.getElementById('toogleDiv').innerHTML = "";
    }, 2000);
  }
}

const indexPhoto = [
  {
    src: "photoSource/Index/Capybara.jpg",
    alt: "Image description",
    styleA : "animation: change1 2s ease-in 0s 1 normal backwards;",
    text: "Capybara are chill and tolerance. <br><br> They can interact with other animals peacefully.",
    textClass: "imageText"
  },
  {
    src: "photoSource/Index/capybarawithBB.jpg",
    alt: "Image description",
    styleA : "animation: change2 2s ease-in 0s 1 normal backwards;",
    text: "Capybaras are able to reproduce <br><br> once a year in favorable conditions. <br><br> They breed in the water.",
    textClass: "imageText1"
  },
  {
    src: "photoSource/Index/longCapyEat.jpg",
    alt: "Image description",
    styleA : "animation: change3 2s ease-in 0s 1 normal backwards;",
    text: "Capybara are herbivores,<br><br> use their long, sharp teeth<br> <br> for grazing on grass and<br> <br> waterplants.",
    textClass: "imageText longCapyEat"
  }
];

let currentIndex = 0;
function changeImage() {
  document.querySelector('.imageContainer').innerHTML = 
    `<img class="scrollImage" src="${indexPhoto[currentIndex].src}" alt="${indexPhoto[currentIndex].alt}" style ="${indexPhoto[currentIndex].styleA}">
    <div class="${indexPhoto[currentIndex].textClass}"  style ="${indexPhoto[currentIndex].styleA}">${indexPhoto[currentIndex].text}</div>`;

  currentIndex = (currentIndex + 1) % indexPhoto.length;
}

// Change image every 10 seconds
setInterval(changeImage, 10000);