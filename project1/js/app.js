
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
  // let $fighter2 = $('<div><button class="button3">CHOOSE</button></div>');
  //create fighter 1 and 2 fight board
  let $battleScreen = $('<div><button class="button3">ATTACK</button><button class="button4">DEFEND</button></div>');
  let $battleScreen2 = $('<div><button class="button5">ATTACK</button><button class="button6">DEFEND</button></div>');
  // let $battleScreen3 = $('<div><button class="button7">ATTACK</button><button class="button8">DEFEND</button></div>');
  // let $battleScreen4 = $('<div><button class="button9">ATTACK</button><button class="button10">DEFEND</button></div>');
  $divStart.addClass('start');
  $('h1').append($divStart);
  $('.image').hide();
  $('.image2').hide();


//remove click button
//add choose fighter buttons
  $('.button').on('click' , (event) => {
    $(event.target).parent().remove();
    $fighter.addClass('fighter');
    $('h2').append($fighter);
    // $fighter2.addClass('fighter2')
    // $('h2').append($fighter2);
    $('.button2').on('click' , (event) => {
      $(event.currentTarget).parent().remove();
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
      // $battleScreen2.addClass('battleScreen2');
      //added alert for round 1
      alert('This is round 1');
      $('.image').show();
      $('.image2').show();
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      // $('h2').append($battleScreen2);
      //attack and defend buttons for cpu and player1
      $('.button3').on('click' , (event) => {
        $attack();
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
        if($player.hull <= 0){
          alert('You were killed, do you want to continue to the next round?');
          $cpu.wins ++;
          $round2();
        }
      })
      $('.button6').on('click' , (event) => {
        console.log('1');
      })
    });



    //Round 2
    $round2 = () => {
      $player.hull = 100;
      $cpu.hull = 100;
      console.log($cpu);
      $battleScreen.remove();
      $battleScreen2.remove();
      alert('This is round 2');
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
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
      alert('This is round 3');
      $battleScreen.addClass('battleScreen');
      $battleScreen2.addClass('battleScreen2');
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
          alert('This is round 4');
          $battleScreen.addClass('battleScreen');
          $battleScreen2.addClass('battleScreen2');
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
