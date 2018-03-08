
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
  $revive = () => {
    $player.hull = $player.hull + 50;
  }
  $revive2 = () => {
    $cpu.hull = $cpu.hull + 50;
  }
  // $playerUpgrade = () => {
  //
  // }








  //Create a clickable start button
  let $divStart = $('<div><button class="button">START</button></div>');
  let $instructions = $('<div>')
  //create fighter 1 and 2
  let $fighter = $('<div><button class="button2">CHOOSE</button></div>');
  let $fighter2 = $('<div><button class="button7">CHOOSE</button></div>');
  // let $fighter2 = $('<div><button class="button3">CHOOSE</button></div>');
  //create fighter 1 and 2 fight board
  let $battleScreen = $('<div><button class="button3">ATTACK</button><button class="button4">REVIVE POTION</button><button class="button10">CRITICAL HIT</button></div>');
  let $battleScreen2 = $('<div><button class="button5">ATTACK</button><button class="button6">REVIVE POTION</button><button class="button11">CRITICAL HIT</button></div>');
  let $suddenDeath = $('<div><button class="button8">CONTINUE</button><button class="button9">GIVE UP</button></div>');
  let $upgrade = $('<div><button class="button12">UPGRADE</button><button class="button13">PASS</button></div>');
  let $upgrade2 = $('<div><button class="button14">UPGRADE</button><button class="button15">PASS</button></div>');
  let $upgrade3 = $('<div><button class="button16">UPGRADE</button><button class="button17">PASS</button></div>');
  let $upgrade4 = $('<div><button class="button18">UPGRADE</button><button class="button19">PASS</button></div>');
  let $upgrade5 = $('<div><button class="button20">UPGRADE</button><button class="button21">PASS</button></div>');
  let $upgrade6 = $('<div><button class="button22">UPGRADE</button><button class="button23">PASS</button></div>');
  let $upgrade7 = $('<div><button class="button24">UPGRADE</button><button class="button25">PASS</button></div>');
  let $upgrade8 = $('<div><button class="button26">UPGRADE</button><button class="button27">PASS</button></div>');
  let $upgrade9 = $('<div><button class="button28">UPGRADE</button><button class="button29">PASS</button></div>');
  let $upgrade10 = $('<div><button class="button30">UPGRADE</button><button class="button31">PASS</button></div>');
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
  let $message13 = $('<div>');
  let $message14 = $('<div>');
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
          $upgrade2.addClass('upgrade2');
          $('h2').append($upgrade2);
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $player.wins ++;
          $('.button14').on('click' , (event) => {
          $player.attack = $player.attack + 10;
          $upgrade2.remove();
          $round2();
          })
          $('.button15').on('click' , (event) => {
            $upgrade2.remove();
            $round2();
          })
        }
      })
      $('.button6').on('click' , (event) => {
        $revive();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $upgrade.addClass('upgrade');
          $('h2').append($upgrade);
          $('h2').append($message5);
          $('.message5').delay(2000).fadeOut();
          $cpu.wins ++;
          $('.button12').on('click' , (event) => {
          $cpu.attack = $cpu.attack + 10;
          $upgrade.remove();
          $round2();
        })
        $('.button13').on('click' , (event) => {
          $upgrade.remove();
          $round2();
        })
      }
    })
      $('.button4').on('click' , (event) => {
        $revive2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
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
          $upgrade.addClass('upgrade');
          $cpu.attack = $cpu.attack + 10;
          $('h2').append($upgrade);
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
        if($cpu.hull <= 0){
          $upgrade3.addClass('upgrade3')
          $('h2').append($upgrade3);
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $player.wins ++;
          $('.button16').on('click' , (event) => {
          $player.attack = $player.attack + 10;
          $upgrade3.remove();
          $round3();
          })
          $('.button17').on('click' , (event) => {
            $upgrade3.remove();
            $round3();
          })
        }
      })
      $('.button6').on('click' , (event) => {
        $revive();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $upgrade4.addClass('upgrade4');
          $('h2').append($upgrade4);
          $('h2').append($message6);
          $('.message6').delay(2000).fadeOut();
          $cpu.wins ++;
          $('.button18').on('click' , (event) => {
          $cpu.attack = $cpu.attack + 10;
          $upgrade4.remove();
          $round3();
          })
          $('.button19').on('click' , (event) => {
            $upgrade4.remove();
            $round3();
          })
        }
      })
      $('.button4').on('click' , (event) => {
        $revive2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
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
        if($cpu.hull <= 0){
          $upgrade5.addClass('upgrade5');
          $('h2').append($upgrade5);
          $('h2').append($message7);
          $player.wins ++;
          $('.message7').delay(2000).fadeOut();
          $('.button20').on('click' , (event) => {
          if ($player.wins === 3){
            $upgrade5.remove();
            $message13.addClass('message13')
            $('h2').append($message13);
          } else {
            $player.attack = $player.attack + 10;
            $upgrade5.remove();
            $round4();
          }
          })
          $('.button21').on('click' , (event) => {
            if ($player.wins === 3){
              $upgrade5.remove();
              $message13.addClass('message13')
              $('h2').append($message13);
            } else {
            $upgrade5.remove();
            $round4();
          }
        });
        }
      })
      $('.button6').on('click' , (event) => {
        $revive();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
      })
      $('.button3').on('click' , (event) => {
        $cpuAttack();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $upgrade6.addClass('upgrade6');
          $('h2').append($upgrade6);
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $cpu.wins ++;
          $('.button22').on('click' , (event) => {
          if ($cpu.wins === 3){
            $upgrade6.remove();
            $message14.addClass('message14')
            $('h2').append($message14);
          } else {
            $cpu.attack = $cpu.attack + 10;
            $upgrade6.remove();
            $round4();
          }
          })
          $('.button23').on('click' , (event) => {
            if ($cpu.wins === 3){
              $upgrade6.remove();
              $message14.addClass('message14')
              $('h2').append($message14);
            } else {
            $upgrade6.remove();
            $round4();
          }
          })
        }
      })
      $('.button4').on('click' , (event) => {
        $revive2();
        $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
      })
      $('.button10').on('click' , (event) => {
        $attack3();
        $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
        if($player.hull <= 0){
          $('h2').append($message7);
          $('.message7').delay(2000).fadeOut();
          $cpu.wins ++;
          if ($cpu.wins === 3){
            $upgrade6.remove();
            $message14.addClass('message14')
            $('h2').append($message14);
          } else {
            $upgrade6.remove();
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
            $upgrade5.remove();
            $message13.addClass('message13')
            $('h2').append($message13);
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
            if($cpu.hull <= 0){
              $player.wins ++;
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $('.button8').on('click' , (event) => {
              $upgrade7.addClass('upgrade7')
              $('h2').append($upgrade7);
              $suddenDeath.remove();
              $('.button24').on('click' , (event) => {
              if ($player.wins === 3){
                $upgrade7.remove();
                $message13.addClass('message13')
                $('h2').append($message13);
              } else {
                $player.attack = $player.attack + 10;
                $upgrade7.remove();
                $round5();
              }
            })
            $('.button25').on('click' , (event) => {
              if ($player.wins === 3){
                $upgrade7.remove();
                $message13.addClass('message13')
                $('h2').append($message13);
              } else {
              $upgrade7.remove();
              $round5();
            }
            })
            })
          }
            $('.button9').on('click' , (event) => {
              $('h2').append('.button9')
              // $start();
            })

          })
          $('.button6').on('click' , (event) => {
            $revive();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
          })
          $('.button3').on('click' , (event) => {
            $cpuAttack();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $cpu.wins ++;
              $('h2').append($message8);
              $('.message8').delay(2000).fadeOut();
              $suddenDeath.addClass('suddenDeath');
              $('h2').append($suddenDeath);
              $('.button8').on('click' , (event) => {
              $upgrade8.addClass('upgrade8');
              $('h2').append($upgrade8);
              $suddenDeath.remove();
              $('.button26').on('click' , (event) => {
              if ($cpu.wins === 3){
                $upgrade8.remove();
                $message14.addClass('message14')
                $('h2').append($message14);
              } else {
                $cpu.attack = $cpu.attack + 10;
                $upgrade8.remove();
                $round5();
              }
              })
              $('.button27').on('click' , (event) => {
                if ($cpu.wins === 3){
                  $upgrade8.remove();
                  $message14.addClass('message14')
                  $('h2').append($message14);
                } else {
                $upgrade8.remove();
                $round5();
              }
              })
            })
            }
          })
          $('.button4').on('click' , (event) => {
            $revive2();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
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
                $upgrade8.remove();
                $message14.addClass('message14')
                $('h2').append($message14);
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
                $upgrade7.remove();
                $message13.addClass('message13')
                $('h2').append($message13);
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
            if($cpu.hull <= 0){
              $player.wins ++;
              $('.message11').delay(2000).fadeOut();
              $upgrade9.addClass('upgrade9')
              $('h2').append($upgrade9);
              $('.button28').on('click' , (event) => {
              if ($player.wins === 3){
                $upgrade9.remove();
                $message13.addClass('message13')
                $('h2').append($message13);
              } else {
                $player.attack = $player.attack + 10;
                $upgrade9.remove();
              }
            })
          }
            })
            $('.button29').on('click' , (event) => {
              if ($player.wins === 3){
                $upgrade9.remove();
                $message13.addClass('message13')
                $('h2').append($message13);
              } else {
              $upgrade9.remove();
            }
            })

          //   }
          // }
          $('.button6').on('click' , (event) => {
            $revive();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
          })
          $('.button3').on('click' , (event) => {
            $cpuAttack();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $cpu.wins++
              $('h2').append($message11);
              $('.message11').delay(2000).fadeOut();
              $upgrade10.addClass('upgrade10');
              $('h2').append($upgrade10);
              // $('h2').append($message11);
              // $('.message11').delay(2000).fadeOut();
              if ($cpu.wins === 3){
                $upgrade10.remove();
                $message14.addClass('message14')
                $('h2').append($message14);
                $('.button30').on('click' , (event) => {
                if ($cpu.wins === 3){
                  $upgrade10.remove();
                  $message14.addClass('message14')
                  $('h2').append($message14);
              } else {
                console.log('ajkas');
              }
            })
          }
        }
      })
          $('.button4').on('click' , (event) => {
            $revive2();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
          })
          $('.button10').on('click' , (event) => {
            $attack3();
            $('.stats').html('Health: ' + $player.hull + '</br>Attack: ' + $player.attack + '</br>Defend: ' + $player.defend + '</br>Rounds Won: ' + $player.wins);
            if($player.hull <= 0){
              $('h2').append($message11);
              $('.message7').delay(2000).fadeOut();
              $cpu.wins ++;
              if ($cpu.wins === 3){
                $upgrade10.remove();
                $message14.addClass('message14')
                $('h2').append($message14);
              } else {
                console.log('sfna');;
              }
            }
          })

          $('.button11').on('click' , (event) => {
            $attack2();
            $('.stats2').html('Health: ' + $cpu.hull + '</br>Attack: ' + $cpu.attack + '</br>Defend: ' + $cpu.defend + '</br>Rounds Won: ' + $cpu.wins);
            if($cpu.hull <= 0){
              $player.wins++
              $('h2').append($message11)
              $('.message11').delay(2000).fadeOut();
            if($player.wins === 3){
              $upgrade10.remove();
              $message13.addClass('message13')
              $('h2').append($message13);
            }
            }
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
