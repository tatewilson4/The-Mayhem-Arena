
$(()=>{
  //creat stats for fighter 1 and cpu
  class $Fighter{
    constructor(hull, attack, defend, wins){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
      this.wins = 0;
    }
  }
  //creat attack
  class $Cpu {
    constructor(hull, attack, defend, wins){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
      this.wins = 0;
    }
  }

  // if attack happens cpu health goes down
  $attack = () => {
    $cpu.hull = $cpu.hull - $player.attack;
  }

  $cpuAttack = () => {
    $player.hull = $player.hull - $cpu.attack;
  }



  //Create a clickable start button
  let $divStart = $('<div><button class="button">START</button></div>');
  //create fighter 1 and 2
  let $fighter = $('<div><button class="button2">CHOOSE</button></div>');
  let $fighter2 = $('<div><button class="button7">CHOOSE</button></div>');
  // let $fighter2 = $('<div><button class="button3">CHOOSE</button></div>');
  //create fighter 1 and 2 fight board
  let $battleScreen = $('<div><button class="button3">ATTACK</button><button class="button4">DEFEND</button></div>');
  let $battleScreen2 = $('<div><button class="button5">ATTACK</button><button class="button6">DEFEND</button></div>');
  let $message = $('<div>');
  let $message2 = $('<div>');
  let $message3 = $('<div>');
  let $message4 = $('<div>');
  // let $battleScreen3 = $('<div><button class="button7">ATTACK</button><button class="button8">DEFEND</button></div>');
  // let $battleScreen4 = $('<div><button class="button9">ATTACK</button><button class="button10">DEFEND</button></div>');
  $divStart.addClass('start');
  $('h1').append($divStart);
  $('.image').hide();
  $('.image2').hide();
  $('.name').hide();
  $('.name2').hide();
  $('.stats').hide();
  $('.stats2').hide();


//remove click button
//add choose fighter buttons


  $('.button').on('click' , (event) => {
    $(event.target).parent().remove();
    $('.name').show().text('ZANGIEF // POWER');
    $('.name2').show().text('AKUMA // SPEED');
    $('h2').append($fighter2)
    $('h2').append($fighter);
    $('.name').show();
    $('.name2').show();
    $('.image').show();
    $('.image2').show();
    // $fighter2.addClass('fighter2')
    // $('h2').append($fighter2);
$('.button2').on('click' , (event) => {
  $round();
})
$('.button7').on('click' , (event) => {
  $round();
})








    $round = () => {
      $($fighter).remove();
      $($fighter2).remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message.addClass('message').text('ROUND 1');
      $('h1').append($message);
      $('.message').delay(2000).fadeOut();
      // $battleScreen2.addClass('battleScreen2');
      //added alert for round 1
      // $('.image').show();
      // $('.image2').show();
      $('.name').hide();
      $('.name2').hide();
      $('.stats').show().html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend);
      $('.stats2').show().html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend);
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      // $('h2').append($battleScreen2);
      //attack and defend buttons for cpu and player1
      $('.button3').on('click' , (event) => {
        $attack();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend);
        // console.log($cpu);
        if($cpu.hull <= 0){
          alert('You killed cpu, do you want to continue to the next round?' , 'Yes/No');
          $player.wins ++;
          $round2();
        }
      })
      $('.button4').on('click' , (event) => {
        // console.log('1');
      })
      $('.button5').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend);
        if($player.hull <= 0){
          alert('You were killed, do you want to continue to the next round?');
          $cpu.wins ++;
          $round2();
        }
      })
      $('.button6').on('click' , (event) => {
        console.log('1');
      })
    };



    //Round 2
    $round2 = () => {
      $player.hull = 100;
      $cpu.hull = 100;
      console.log($cpu);
      $battleScreen.remove();
      $battleScreen2.remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message2.addClass('message2').text('ROUND 2');
      $('h1').append($message2);
      $('.message2').delay(2000).fadeOut();
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      $('.button3').on('click' , (event) => {
        $attack();
        console.log($cpu);
        if($cpu.hull <= 0){
          alert('You killed cpu, do you want to continue to the next round?' , 'Yes/No');
          $player.wins ++;
          $round3();
        }
      })
      $('.button4').on('click' , (event) => {
        // console.log('1');
      })
      $('.button5').on('click' , (event) => {
        $cpuAttack();
        if($player.hull <= 0){
          alert('You were killed, do you want to continue to the next round?');
          $cpu.wins ++;
          $round3();
        }
      })
      $('.button6').on('click' , (event) => {
        console.log('1');
      })
    }



//round 3
    $round3 = () => {
      $player.hull = 100;
      $cpu.hull = 100;
      $battleScreen.remove();
      $battleScreen2.remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message3.addClass('message3').text('ROUND 3');
      $('h1').append($message3);
      $('.message3').delay(2000).fadeOut();
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      $('.button3').on('click' , (event) => {
        $attack();
        console.log($cpu);
        if($cpu.hull <= 0){
          alert('You killed cpu, do you want to continue to the next round?' , 'Yes/No');
          $player.wins ++;
          if ($player.wins === 3){
            playerWin();
          } else {
            $round4();
          }
        }
      })
      $('.button4').on('click' , (event) => {
        // console.log('1');
      })
      $('.button5').on('click' , (event) => {
        $cpuAttack();
        if($player.hull <= 0){
          alert('You were killed, do you want to continue to the next round?');
          $cpu.wins ++;
          if ($cpu.wins === 3){
            cpuWin();
          } else {
            $round4();
          }
        }
      })
      $('.button6').on('click' , (event) => {
        console.log('1');
      })
    }




    //round 4
        $round4 = () => {
          $player.hull = 100;
          $cpu.hull = 100;
          $battleScreen.remove();
          $battleScreen2.remove();
          $battleScreen.addClass('battleScreen');
          $battleScreen2.addClass('battleScreen2');
          $message4.addClass('message4').text('ROUND 4');
          $('h1').append($message4);
          $('.message4').delay(2000).fadeOut();
          $('h3').append($battleScreen);
          $('h3').append($battleScreen2);
          $('.button3').on('click' , (event) => {
            $attack();
            console.log($cpu);
            if($cpu.hull <= 0){
              alert('You killed cpu, do you want to continue to the next round?' , 'Yes/No');
              $player.wins ++;
              if ($player.wins === 3){
                playerWin();
              } else {
                $round5();
              }
            }
          })
          $('.button4').on('click' , (event) => {
            // console.log('1');
          })
          $('.button5').on('click' , (event) => {
            $cpuAttack();
            if($player.hull <= 0){
              alert('You were killed, do you want to continue to the next round?');
              $cpu.wins ++;
              if ($cpu.wins === 3){
                cpuWin();
              } else {
                $round5();
              }
            }
          })
          $('.button6').on('click' , (event) => {
            console.log('1');
          })
        }

//player and cpu win scenerio
const playerWin = () => {
  console.log('You win');
}
const cpuWin = () => {
  console.log('You loose');
}

});


















//creat a variable for cpu and fighter
const $cpu = new $Cpu('Bad');
const $player = new $Fighter('player');
});
