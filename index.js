function menuInEachPage() { //menu in each page
    document.getElementById("menuDiv").innerHTML = "<nav id='menu'>\
    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>\
    <ul>\
      <li id = 'navHome'><a href='index.html'>Home</a></li>\
      <li id = 'navSong'><a href='song.html'>Song</a></li>\
      <li><a class='dropdown-arrow' href='http://'>About</a>\
        <ul class='sub-menus'>\
          <li><a href='findThem.html'>FindThem</a></li>\
          <li><a href='http://'>Diet</a></li>\
          <li><a href='http://'>Reproduction</a></li>\
        </ul>\
      </li>\
      <li><a href='Form.html'>Quiz</a></li>\
      <li><a class='dropdown-arrow' href='http://'>Gallery</a>\
        <ul class='sub-menus'>\
          <li><a href='http://'>Photo</a></li>\
          <li><a href='http://'>Video</a></li>\
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
    if (mark == 7){
      quote = "<div class = \"resultsIn\"> Congratulations! " + name + ", You are the grand capybara master!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"expert.jpg\" class = \"square\"></div>";
    }else if (mark == 6){
      quote = "<div class = \"resultsIn\"> Good job! " + name + ", You are an capybara expert! </div>";
      img = "<divclass = \"resultsIn\"> <img src = \"pro.jpg\" class = \"square\"></div>";
    }else if (mark == 5){
      quote = "<div class = \"resultsIn\"> Nice try! " + name + ", You should watch more Capybara video ! </div>";
      img = "<divclass = \"resultsIn\"> <img src = \"ColumbusZoo.png\" class = \"square\"></div>";
    }else if (mark == 4){
      quote = "<div class = \"resultsIn\"> Good effort! " + name + ", Keep it up! Follow the Capybara instagram!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"ColumbusZoo.png\" class = \"square\"></div>";
    }else if (mark == 3){
      quote = "<div class = \"resultsIn\"> Good effort! " + name + ", Keep it up! Follow the Capybara instagram!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"mark3.jpg\" class = \"square\"></div>";
    }else if (mark == 2){
      quote = "<div class = \"resultsIn\"> Yikes! " + name + ", You really should go through the website one more time!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"study.jpg\" class = \"square\"></div>";
    }else if (mark == 1){
      quote = "<div class = \"resultsIn\"> Oh no! " + name + ", The capybara police is coming for you!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"capybaraPolice.jpg\" class = \"square\"></div>";
    }else if (mark == 0){
      quote = "<div class = \"resultsIn\"> Oh no! " + name + ", The capybara police is going to arrest you due to your violate of capybara space security law!</div>";
      img = "<divclass = \"resultsIn\"> <img src = \"capybaraPolice.jpg\" class = \"square\"></div>";
    }
    document.getElementById("demo").innerHTML = "<div class = \"results\">" + quote 
    + img + "<div class = \"resultsIn\"> Marks : " + mark  + "/7 </div></div>";
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
        document.getElementById('unmute-button').innerHTML = '<img id ="soundImg" class = "unmuted" src = "sound-on.svg">';
        video.muted = false;
    }else{
    document.getElementById('unmute-button').innerHTML = '<img id ="soundImg" class = "soundImg" src = "mute-audio.svg">';
    video.muted = true;
    }
}
var lyrics = [  //lyrics"CAP ! ", "PY ! ","BA ! ","RA ! ",
  "CAPYBARA",
  "CAPYBARA",
  "CAPYBARA~",
  "CAPYBARA",
  "CAPYBARA",
  "CAPYBARA~",
  "CAPYBARA ",
  
];

var lyricsIndex = 0;

setInterval(function() {
  var lyricsDiv = document.getElementById('lyrics');
  lyricsDiv.textContent = lyrics[lyricsIndex];
  lyricsIndex = (lyricsIndex + 1) % lyrics.length;
}, 250);  // Change lyrics every 500 milliseconds (0.5 seconds)