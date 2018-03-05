
$(()=>{
  //creat stats for fighter 1 and cpu
  class $Fighter{
    constructor(hull, attack, defend){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
    }
  }
  //creat attack
  class $Cpu {
    constructor(hull, attack, defend){
      this.hull = 100;
      this.attack = 50;
      this.defend = 50;
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
  $divStart.addClass('start');
  $('h1').append($divStart);

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
      $('h3').append($battleScreen);
      $('h3').append($battleScreen2);
      // $('h2').append($battleScreen2);
      //attack and defend buttons for cpu and player1
      $('.button3').on('click' , (event) => {
        $attack();
        console.log($cpu);
      })
      $('.button4').on('click' , (event) => {
        console.log('1');
      })
      $('.button5').on('click' , (event) => {
        $cpuAttack();
        console.log($player);
      })
      $('.button6').on('click' , (event) => {
        console.log('1');
      })
    });
  });




//creat a variable for cpu and fighter

const $cpu = new $Cpu('Bad');
const $player = new $Fighter('player');
});

console.log('akjsd');
