
$(()=>{
  //creat stats for fighter 1 and cpu
  class $Fighter{
    constructor(hull, attack, defend, wins, attack2){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
      this.wins = 0;
      this.attack2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
  }
  //creat attack
  class $Cpu {
    constructor(hull, attack, defend, wins, attack2){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
      this.wins = 0;
      this.attack2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
  }
  // if attack happens cpu health goes down
  $attack = () => {
    $cpu.hull = $cpu.hull - $player.attack;
  }

  $cpuAttack = () => {
    $player.hull = $player.hull - $cpu.attack;
  }
  $attack2 = () => {
    if(($player.attack2[Math.floor(Math.random()*$player.attack2.length)]) >= 8){
      $cpu.hull = $cpu.hull - 50;
      }
  }
  $attack3 = () => {
    if(($cpu.attack2[Math.floor(Math.random()*$cpu.attack2.length)]) >= 8){
      $player.hull = $player.hull - 50;
      }
  }






  //Create a clickable start button
  let $divStart = $('<div><button class="button">START</button></div>');
  let $instructions = $('<div>')
  //create fighter 1 and 2
  let $fighter = $('<div><button class="button2">CHOOSE</button></div>');
  let $fighter2 = $('<div><button class="button7">CHOOSE</button></div>');
  // let $fighter2 = $('<div><button class="button3">CHOOSE</button></div>');
  //create fighter 1 and 2 fight board
  let $battleScreen = $('<div><button class="button3">ATTACK</button><button class="button4">DEFEND</button><button class="button10">CRITICAL HIT</button></div>');
  let $battleScreen2 = $('<div><button class="button5">ATTACK</button><button class="button6">DEFEND</button><button class="button11">CRITICAL HIT</button></div>');
  let $suddenDeath = $('<div><button class="button8">CONTINUE</button><button class="button9">GIVE UP</button></div>');
  let $message = $('<div>');
  let $message2 = $('<div>');
  let $message3 = $('<div>');
  let $message4 = $('<div>');
  let $message5 = $('<div>');
  let $message6 = $('<div>');
  let $message7 = $('<div>');
  let $message8 = $('<div>');
  let $message9 = $('<div>');
  let $message10 = $('<div>');
  let $message11 = $('<div>');
  let $message12 = $('<div>');
  // let $battleScreen3 = $('<div><button class="button7">ATTACK</button><button class="button8">DEFEND</button></div>');
  // let $battleScreen4 = $('<div><button class="button9">ATTACK</button><button class="button10">DEFEND</button></div>');

  $divStart.addClass('start');
  $message9.addClass('message9').text('You chose Zangeif');
  $message10.addClass('message10').text('You chose Akuma');
  $instructions.addClass('instructions').text('Welcome to the Mayhem Arena. This is a two player game and you can choose which character you prefer. You have the option to attack or defend. This game is best out of three and will go 4 rounds. If no one has won after 4 rounds, there will be a bonus sudden death 5th round. Good Luck!');
  //added navigation to start
  $('h1').append($instructions);
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
    $('h1').remove();
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
  $('h2').append($message9);
  $('.message9').delay(2000).fadeOut();
  $round();
})
$('.button7').on('click' , (event) => {
  $('h2').append($message10);
  $('.message10').delay(2000).fadeOut();
  $round();
})








    $round = () => {
      $($fighter).remove();
      $($fighter2).remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message5.addClass('message5').text('K.O');
      $message.addClass('message').text('ROUND 1');
      $('h2').append($message);
      $('.message').delay(2000).fadeOut();
      // $battleScreen2.addClass('battleScreen2');
      //added alert for round 1
      // $('.image').show();
      // $('.image2').show();
      $('.name').hide();
      $('.name2').hide();
      $('.stats').show().html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      $('.stats2').show().html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      // $('h2').append($battleScreen2);
      //attack and defend buttons for cpu and player1
      $('.button5').on('click' , (event) => {
        $attack();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        // console.log($cpu);
        if($cpu.hull <= 0){
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $player.wins ++;
          $round2();
        }
      })
      $('.button6').on('click' , (event) => {
        // console.log('1');
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $cpu.wins ++;
          $round2();
        }
      })
      $('.button4').on('click' , (event) => {
        console.log('1');
      })
      $('.button10').on('click' , (event) => {
        $attack3();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $cpu.wins ++;
          $round2();
        }
      })
      $('.button11').on('click' , (event) => {
        $attack2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        if($cpu.hull <= 0){
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $player.wins ++;
          $round2();
        }
      })
    };



    //Round 2
    $round2 = () => {
      $player.hull = 100;
      $cpu.hull = 100;
      $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
      console.log($cpu);
      $battleScreen.remove();
      $battleScreen2.remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message6.addClass('message6').text('K.O');
      $message2.addClass('message2').text('ROUND 2');
      $('h2').append($message2);
      $('.message2').delay(2000).fadeOut();
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      $('.button5').on('click' , (event) => {
        $attack();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        console.log($cpu);
        if($cpu.hull <= 0){
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $player.wins ++;
          $round3();
        }
      })
      $('.button6').on('click' , (event) => {
        // console.log('1');
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $cpu.wins ++;
          $round3();
        }
      })
      $('.button4').on('click' , (event) => {
        console.log('1');
      })
      $('.button10').on('click' , (event) => {
        $attack3();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $cpu.wins ++;
          $round3();
        }
      })
      $('.button11').on('click' , (event) => {
        $attack2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        if($cpu.hull <= 0){
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $player.wins ++;
          $round3();
        }
      })
    }



//round 3
    $round3 = () => {
      $player.hull = 100;
      $cpu.hull = 100;
      $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
      $battleScreen.remove();
      $battleScreen2.remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      $message7.addClass('message7').text('K.O');
      $message3.addClass('message3').text('ROUND 3');
      $('h2').append($message3);
      $('.message3').delay(2000).fadeOut();
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      $('.button5').on('click' , (event) => {
        $attack();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        console.log($cpu);
        if($cpu.hull <= 0){
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $player.wins ++;
          if ($player.wins === 3){
            playerWin();
          } else {
            $round4();
          }
        }
      })
      $('.button6').on('click' , (event) => {
        // console.log('1');
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $cpu.wins ++;
          if ($cpu.wins === 3){
            cpuWin();
          } else {
            $round4();
          }
        }
      })
      $('.button4').on('click' , (event) => {
        console.log('1');
      })
      $('.button10').on('click' , (event) => {
        $attack3();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $cpu.wins ++;
          if ($cpu.wins === 3){
            cpuWin();
          } else {
            $round4();
          }
        }
      })
      $('.button11').on('click' , (event) => {
        $attack2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
        if($cpu.hull <= 0){
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $player.wins ++;
          if ($player.wins === 3){
            playerWin();
          } else {
            $round4();
          }
        }
      })
    }




    //round 4
        $round4 = () => {
          $player.hull = 100;
          $cpu.hull = 100;
          $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
          $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
          $battleScreen.remove();
          $battleScreen2.remove();
          $battleScreen.addClass('battleScreen');
          $battleScreen2.addClass('battleScreen2');
          $message8.addClass('message8').text('K.O');
          $message4.addClass('message4').text('ROUND 4');
          $('h2').append($message4);
          $('.message4').delay(2000).fadeOut();
          $('h3').append($battleScreen);
          $('h3').append($battleScreen2);
          $('.button5').on('click' , (event) => {
            $attack();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
            console.log($cpu);
            if($cpu.hull <= 0){
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('.button8').on('click' , (event) => {
              $cpu.wins ++;
              $suddenDeath.remove();
              $('.message8').delay(2000).fadeOut();
              $player.wins ++;
              if ($player.wins === 3){
                playerWin();
              } else {
                $round5();
              }
            })
          }
            $('.button9').on('click' , (event) => {
              console.log('kjasb');
              // $start();
            })

          })
          $('.button6').on('click' , (event) => {
            // console.log('1');
          })
          $('.button3').on('click' , (event) => {
            $cpuAttack();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('.button8').on('click' , (event) => {
              $cpu.wins ++;
              $suddenDeath.remove();
              if ($cpu.wins === 3){
                cpuWin();
              } else {
                $round5();
              }
            })
            }
          })
          $('.button4').on('click' , (event) => {
            console.log('1');
          })
          $('.button10').on('click' , (event) => {
            $attack3();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('.button8').on('click' , (event) => {
              $cpu.wins ++;
              $suddenDeath.remove();
              if ($cpu.wins === 3){
                cpuWin();
              } else {
                $round5();
              }
            })
            }

          })
          $('.button11').on('click' , (event) => {
            $attack2();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
            if($cpu.hull <= 0){
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('.button8').on('click' , (event) => {
              $cpu.wins ++;
              $suddenDeath.remove();
              $('.message8').delay(2000).fadeOut();
              $player.wins ++;
              if ($player.wins === 3){
                playerWin();
              } else {
                $round5();
              }
            })
          }
          })
        }





        $round5 = () => {
          $player.hull = 100;
          $cpu.hull = 100;
          $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
          $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
          $battleScreen.remove();
          $battleScreen2.remove();
          $battleScreen.addClass('battleScreen');
          $battleScreen2.addClass('battleScreen2');
          $message11.addClass('message11').text('K.O');
          $message12.addClass('message12').text('SUDDEN DEATH');
          $('h2').append($message12);
          $('.message12').delay(2000).fadeOut();
          $('h3').append($battleScreen);
          $('h3').append($battleScreen2);
          $('.button5').on('click' , (event) => {
            $attack();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
            console.log($cpu);
            // if($cpu.hull <= 0){
            //   $suddenDeath.addClass('sudddenDeath');
            //   $('h2').append($suddenDeath);
            //   $('h2').append($message11);
            //   $('.message11').delay(2000).fadeOut();
            //   $player.wins ++;
            //   if ($player.wins === 3){
            //     playerWin();
            //   } else {
            //     $round5();
            //   }
            // }
          })
          $('.button6').on('click' , (event) => {
            // console.log('1');
          })
          $('.button3').on('click' , (event) => {
            $cpuAttack();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $('h2').append($message11);
              $('.message11').delay(2000).fadeOut();
              $cpu.wins ++;
              if ($cpu.wins === 3){
                cpuWin();
              } else {
                $round5();
              }
            }
          })
          $('.button4').on('click' , (event) => {
            console.log('1');
          })
          $('.button10').on('click' , (event) => {
            $attack3();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $('h2').append($message7);
              $('.message7').delay(2000).fadeOut();
              $cpu.wins ++;
              if ($cpu.wins === 3){
                cpuWin();
              } else {
                $round4();
              }
            }
          })
          $('.button11').on('click' , (event) => {
            $attack2();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
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
