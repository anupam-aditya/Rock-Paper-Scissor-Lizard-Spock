$(document).ready(function()
{
  // DISPLAY RULES
  $(".rules-text").click(function()
  {
    $(".rules").addClass("animate__fadeIn");
    if($(".rules").hasClass("animate__fadeOut"))
      $(".rules").removeClass("animate__fadeOut");
    $(".rules").addClass("show-item");
  });
  $(".rules .close-button").click(function()
  {
    $(".rules").addClass("animate__fadeOut");
    $(".rules").removeClass("animate__fadeIn");
    setTimeout(function()
    {
      $(".rules").removeClass("show-item");
    },1500);
  });
  $(".rules-content").click(function(e)
  {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  });
  $(".rules-background").click(function()
  {
    $(".rules").addClass("animate__fadeOut");
    $(".rules").removeClass("animate__fadeIn");
    setTimeout(function()
    {
      $(".rules").removeClass("show-item");
    },1500);
  });
  // DISPLAY RULES
  // GAME JS
  // CHOICE DETECTION
  var choice = ["lizar","sciss","spock","rocky","paper"];
  $(".play-buttons").click(function(e)
  {
    if(screen.width>600)
      $(".buttons-section").addClass("animate__slideOutDown");
    else
      $(".buttons-section").addClass("animate__slideOutLeft");
    setTimeout(function()
    {
      $(".buttons-section").addClass("hide-item");
    },1500);
    var ab = e.target.id.slice(0,5);
    console.log(ab);
    var ch = 0;
    if(choice[0]===ab)
    {
      $(".player-choice-button").css('background-color','#8a5be5');
      $(".player-choice-image").attr('src','images/icon-lizard.svg');
      $(".player-choice-display").css('background-color','#fff');
      ch = 0;
    }
    else if(choice[1]===ab)
    {
      $(".player-choice-button").css('background-color','#eaa61f');
      $(".player-choice-image").attr('src','images/icon-scissors.svg');
      $(".player-choice-display").css('background-color','#fff');
      ch = 1;
    }
    else if(choice[2]===ab)
    {
      $(".player-choice-button").css('background-color','#50bed3');
      $(".player-choice-image").attr('src','images/icon-spock.svg');
      $(".player-choice-display").css('background-color','#fff');
      ch = 2;
    }
    else if(choice[3]===ab)
    {
      $(".player-choice-button").css('background-color','#de3754');
      $(".player-choice-image").attr('src','images/icon-rock.svg');
      $(".player-choice-display").css('background-color','#fff');
      ch = 3;
    }
    else if(choice[4]===ab)
    {
      $(".player-choice-button").css('background-color','#496aef');
      $(".player-choice-image").attr('src','images/icon-paper.svg');
      $(".player-choice-display").css('background-color','#fff');
      ch = 4;
    }
    setTimeout(function()
    {
      if(screen.width>600)
        $(".match-section").addClass("animate__slideInUp");
      else
        $(".match-section").addClass("animate__slideInRight");
      $(".match-section").removeClass("hide-item");
    },1500);
    const rndInt = Math.floor(Math.random() * 5);
    setTimeout(function()
    {
      if(rndInt===0)
      {
        $(".house-choice-button").css('background-color','#8a5be5');
        $(".house-choice-image").attr('src','images/icon-lizard.svg');
        $(".house-choice-display").css('background-color','#fff');
      }
      else if(rndInt===1)
      {
        $(".house-choice-button").css('background-color','#eaa61f');
        $(".house-choice-image").attr('src','images/icon-scissors.svg');
        $(".house-choice-display").css('background-color','#fff');
      }
      else if(rndInt===2)
      {
        $(".house-choice-button").css('background-color','#50bed3');
        $(".house-choice-image").attr('src','images/icon-spock.svg');
        $(".house-choice-display").css('background-color','#fff');
      }
      else if(rndInt===3)
      {
        $(".house-choice-button").css('background-color','#de3754');
        $(".house-choice-image").attr('src','images/icon-rock.svg');
        $(".house-choice-display").css('background-color','#fff');
      }
      else if(rndInt===4)
      {
        $(".house-choice-button").css('background-color','#496aef');
        $(".house-choice-image").attr('src','images/icon-paper.svg');
        $(".house-choice-display").css('background-color','#fff');
      }
    },3000);
    // CHOICE DETECTION
    result(ch,rndInt)
  });
  $(".play-again").click(function()
  {
    playAgain();
  });
  $(".play-again-mobile").click(function()
  {
    playAgainMobile();
  });
});
function result(ch,rndInt)
{
  $(".play-again").addClass("animate__fadeIn");
  setTimeout(function()
  {
    if(ch===rndInt)
    {
      if(screen.width>600)
        $(".result-text").text("DRAW");
      else
        $(".result-text-mobile").text("DRAW");
      var audio = new Audio('sound/Vine-boom-sound-effect.mp3');
      audio.play();
    }
    else if(ch===0&&(rndInt===2||rndInt===4))
    {
      winChange();
    }
    else if(ch===1&&(rndInt==0||rndInt==4))
    {
      winChange();
    }
    else if(ch===2&&(rndInt==3||rndInt==1))
    {
      winChange();
    }
    else if(ch===3&&(rndInt==0||rndInt==1))
    {
      winChange();
    }
    else if(ch===4&&(rndInt==3||rndInt==2))
    {
      winChange();
    }
    else
    {
      if(screen.width>600)
        $(".result-text").text("YOU LOSE");
      else
        $(".result-text-mobile").text("YOU LOSE");
      var audio = new Audio('sound/you-lose-game-over.mp3');
      audio.play();
    }
    if(screen.width>600)
      $(".play-again").removeClass("hide-item");
    else
      $(".play-again-mobile").removeClass("hide-item");
  },4500);
  setTimeout(function()
  {
    if(screen.width>600)
      $(".play-again-button").removeClass("hide-item");
    else
      $(".play-again-button-mobile").removeClass("hide-item");
  },4000);
}
function winChange()
{
  if(screen.width>600)
    $(".result-text").text("YOU WIN");
  else
    $(".result-text-mobile").text("YOU WIN");
  var ab = parseInt($(".score-value").text());
  ab = ab+1;
  $(".score-value").addClass("animate__fadeIn");
  $(".score-value").text(ab);
  var audio = new Audio('sound/applause10.mp3');
  audio.play();
}
function playAgain()
{
  $(".house-choice-button").css('background-color','');
  $(".house-choice-image").attr('src','');
  $(".house-choice-display").css('background-color','#182341');
  $(".buttons-section").addClass("animate__slideInUp");
  $(".buttons-section").removeClass("animate__slideOutDown");
  $(".buttons-section").removeClass("hide-item");
  $(".match-section").addClass("hide-item");
  $(".play-again").addClass("hide-item");
  $(".play-again-button").addClass("hide-item");
}
function playAgainMobile()
{
  $(".house-choice-button").css('background-color','');
  $(".house-choice-image").attr('src','');
  $(".house-choice-display").css('background-color','#182341');
  $(".buttons-section").addClass("animate__slideInRight");
  $(".buttons-section").removeClass("animate__slideOutLeft");
  $(".buttons-section").removeClass("hide-item");
  $(".match-section").addClass("hide-item");
  $(".play-again-mobile").addClass("hide-item");
  $(".play-again-button-mobile").addClass("hide-item");
}
