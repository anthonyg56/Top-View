

var artProfile = document.getElementById('artistProfile');
var Icon = document.getElementById('icon');
var tiles= document.getElementById('art');
var URL = "";

var hiphopLinks = document.getElementById('hipHopLink');
hiphopLinks.addEventListener('click', function(){
  myFunction(hiphopLinks.id);
});

var producerLinks = document.getElementById('producersLink');
producerLinks.addEventListener('click', function(){
  myFunction(producerLinks.id);
});

var cinemaLinks = document.getElementById('cinemaLink');
cinemaLinks.addEventListener('click', function(){
  myFunction(cinemaLinks.id);
});

var bandLinks = document.getElementById('bandsLink');
bandLinks.addEventListener('click', function(){
  myFunction(bandLinks.id);
});

var featuredLinks = document.getElementById('featuredLink');
featuredLinks.addEventListener('click', function(){
  myFunction(featuredLinks.id);
});

var eventLinks = document.getElementById('eventsLink');
eventLinks.addEventListener('click', function(){
  myFunction(eventLinks.id);
});



function myFunction(link){
  console.log(link)
  Icon.style.display = "block";
  switch(link){
    case 'hipHopLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/5ecfc067afc6f200c2ff8c3d89655667a933f392/photographerContent.json";
      break;
    case 'producersLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/5ecfc067afc6f200c2ff8c3d89655667a933f392/vlogblogsContent.json";
      break;
    case 'cinemaLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/5ecfc067afc6f200c2ff8c3d89655667a933f392/musicContent.json";
      break;
    case 'bandsLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/5ecfc067afc6f200c2ff8c3d89655667a933f392/merchContent.json";
      break;
    case 'featuredLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/6ca99677f5c3c47eb478167143551069bee60b12/interviewContent.json";
      break;
    case 'eventsLink':
      URL = "https://gist.githubusercontent.com/anthonyg56/90e3dea879a757844afc2344b577e0f2/raw/5ecfc067afc6f200c2ff8c3d89655667a933f392/featuredContent.json";
      break;
  }
  console.log(URL);
  ajaxCall(false);
};

function ajaxCall(bool, num){
  var request= new XMLHttpRequest();
  num = num || 0;
  request.open('GET', URL);

  request.onload = function(){ //Function that excutes when the page loads
    if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(request.responseText);
      if(bool === false){
        renderHTML(data);
      }else{
        loadProfile(data, num);
      };
    }else{
      console.log('request error');
    }
  };

  request.onerror = function(){//error handeling
    console.log('error');
  };

  request.send();
};

function renderHTML(info){
  var html = "";
  artProfile.innerHTML = ``;

  html += '<h1 style="color: white; font-size: 4em; font-weight: 600; margin-top: 100px;">Local ' + info[0].genre + ' Artists</h1>';
  for (var x = 0; x < info.length; x++) {
    html += '<div class="container text-center" id="hipHopDiv" style="border-radius: 25px; margin: 35px auto; background: rgba(0, 157, 250, .7); padding: 0; box-shadow: 3px 5px 6px ;">' + 
              '<div class="row" style="padding: 0;">' + 
                '<div class="col-sm-6 col-lg-6 col-md-6" id="hipHopPics">' +
                  '<img src="' + info[x].pic + '" class="img-responsive">' +
                  /*'<a href"#""><img style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" src="../img/png/play.png"/></a>' + */
                '</div>' + 
                '<div class="col-sm-6 col-lg-6 col-md-6" id="hipHopInfo" style="padding: 20px 0; height">' +
                  '<h2  style="letter-spacing: 2px; font-weight: 600; color: white; margin: 30px auto; font-size: 2.5em">' + info[x].name + '</h2>' +
                  '<a onclick="ajaxCall(true, ' + x +')" style=" background-color: #00bbfa; color: white; font-weight: 600; border-radius: 25px; padding: 15px 30px; font-size: 1.5em; text-decoration: none;' +
                  '">View Profile</a>' +
                '</div>' +
              '</div>' +
            '</div>';
  }

  html += '<div>' +
            '<button onclick="renderHTML(null)" style="background-color: #00bbfa; color: #fff; font-weight: 600; border-radius: 25px; border-color: #00bbfa; padding: 15px 45px 15px 45px; font-size: 2em; font-family: "lato"; text-decoration: none;"> Go Back To Artists </button>' +
          '</div>';
  artProfile.insertAdjacentHTML('afterbegin', html);
};

function loadProfile(g, y){

  var html = "";
  /*tiles.innerHTML = ``;*/
  artProfile.innerHTML = ``;
  html = '<div class="container text-center" style="margin: 75px auto 45px auto; font-family: "lato";">' +
            '<div class="row" style="padding: 25px 0 10px 0;">' + 
              '<h1 style="color: white; font-size: 4.5em; font-weight: 600; letter-spacing: 3px;">'+ g[y].name + '</h1>' +
            '</div>' +
            '<div class="row" style="margin: 20px auto; padding: 45px 20px 45px 20px; background: rgba(0, 157, 250, .7); border-radius: 25px;">' +
              '<div class="col-sm-6 col-lg-6 col-md-6">' +
                '<img src="' + g[y].pic +'" class="img-responsive"/ style="border-radius: 25px;">'+
              '</div>'+
              '<div class="col-sm-6 col-lg-6 col-md-6">' +
                '<h2 style="font-weight: 600; color: white; padding: 8px 0; letter-spacing: 2px;">About ' + g[y].name + '</h2>' +
                '<p style="color: white">'+ g[y].bio + '</p>' +
                '<br>' +
                '<ul class="social-media">' +
                  '<li style="display: inline; padding: 0 15px 0 15px;"><a style="text-decoration:none; color: white; font-size: 1.5em; font-weight: 400;" href="' + g[y].website + '" style="text-decoration: none; color:"> Website </a></li>' +
                  '<li style="display: inline; padding: 0 15px 0 15px;"><a style=":hover{color: #DAA520;}" href="'+ g[y].twitter +'"><img src="../img/png/social-media-icons/png/twitter.png"></a></li>' +
                  '<li style="display: inline; padding: 0 15px 0 15px;"><a href="'+ g[y].soundcloud +'"><img src="../img/png/social-media-icons/png/soundcloud.png"></a></li>' +
                  '<li style="display: inline; padding: 0 15px 0 15px;"><a href="'+ g[y].insta +'"><img src="../img/png/social-media-icons/png/insta.png"></a></li>' +
                  '<li style="display: inline; padding: 0 15px 0 15px;"><a href="'+ g[y].youtube +'"><img src="../img/png/social-media-icons/png/youtube.png"></a></li>' +
                '</ul>'+
              '</div>' +
            '</div>' +
            '<div class="row" style="padding-top: 35px;">' +
              g[y].player +
            '</div>' +
          '</div>' +
          '<div>' +
            '<button onclick="ajaxCall(false)" style="background-color: #00bbfa; color: #fff; font-weight: 600; border-radius: 25px; border-color: #00bbfa; padding: 15px 45px 15px 45px; font-size: 2em; text-decoration: none; margin-: 0 auto 30px auto; font-family: \"lato\"; "> Go Back to ' + g[y].genre +  ' Artists </button>' +
          '</div>' ;
  artProfile.insertAdjacentHTML('afterbegin', html);
};

$(document).ready(function() {

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {

      var href = $(this).attr('href');
      var sectionOffset = $(href).offset().top;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    }) 
  });
  alert("Tap On One Of The Boxes To View People Making A Difference In Their Craft!");
});