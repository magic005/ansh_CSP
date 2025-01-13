---
layout: base
title: Student Home
description: Home Page
image: /images/mario_animation.png
hide: true
comments: true
---



<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %} 

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<style>
    h2 {
        color: rgb(75, 186, 255);
    }
</style>

<h1>Home</h1>
<p><br /></p>

<h2>
  Unit 1: 
</h2>
<p>   </p>

<table>
  <tr>
    <th>Week</th>
    <th>Plans</th>
    <th>Hacks(Todo)</th>
    <th>Tangibles</th>
  </tr>
  
  <tr>
  <td> 0 </td> 
  <td>
  </td>

  <td>
  </td>
  
  <td>

  </td>
  </tr>
</table>

<h2>Unit 2:</h2>
<p>
</p>

<table>
  <tr>
    <th>Week</th>
    <th>Plans</th>
    <th>Hacks(Todo)</th>
    <th>Tangibles</th>
  </tr>

  

    
  <tr>
  <td> 0 </td> 

  <td>
  </td>

  <td>
  </td>

  <td>
  </td>

  </tr>
</table>


<br>

<div>
  <button id="factButton" style="padding-bottom: 5px; color:#1260cc;">Get a Random Manchester United Fact</button>
</div>


<!-- Add an empty paragraph to display the fact -->
<p id="factDisplay" style="color:white; font-weight:bold;"></p>

<script>
  // Array of random ManU facts
  const ManUFacts = [
    "Since 1992, Manchester United has won the Premier League 13 times",
    "1 in 8 people of the world’s population is a Man Utd fan...",
    "The Red Devils have more national titles than Liverpool........",
    "Manchester United was founded in 1878 as Newton Heath LYR F.C.",
    "Old Trafford, Manchester United's home ground, has a capacity of around 74,000.",
    "Manchester United the first English club to win the European Cup in 1968.",
    "Manchester United's nickname is 'The Red Devils.'"
  ];

  // Function to get a random fact
  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * ManUFacts.length);
    return ManUFacts[randomIndex];
  }

  // Event listener for the button
  document.getElementById('factButton').addEventListener('click', () => {
    const fact = getRandomFact();
    console.log(fact)
    document.getElementById('factDisplay').textContent = fact;
  });
</script>

<br>
<br>

<div>
  <a href="liverpool-fc/index.html" style="color: #1260cc"><button>Go to Manchester United FC Blog (cooperative tangible)</button></a>
</div>

<br>
<br>

<div>
  <a href="game_menu/index_game.html"><button>Games Menu</button></a>
</div>

<br>
<br>

<div>
  <a href="calcs/sci_calc.html"><button>Scientific Calculator</button></a>
</div>

<br>

<div>
  <a href="calcs/stat_calc.html"><button>Statistics Calculator</button></a>
</div>







<!--mario stuff-->
<script>
        window.addEventListener("keydown", function(e) { if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) { e.preventDefault(); } }, false);
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}   
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }
    startWalkingLeft() {
      this.stopAnimate();
      this.animate(this.obj["WalkL"], -3);
    }

    startRunningLeft() {
      this.stopAnimate();
      this.animate(this.obj["Run1L"], -6);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowDown" || event.key === "s") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    } else if (event.key === "ArrowUp" || event.key === "w") {
      event.preventDefault();
      if (event.repeat) {
          mario.stopAnimate();
      } else {
          mario.startFlipping();
      }
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      event.preventDefault();
      if (event.repeat) {
          mario.startCheering();
      } else {
          if (mario.currentSpeed === 0) {
          mario.startWalkingLeft();
        } else if (mario.currentSpeed === -3) {
          mario.startRunningLeft();
        } else if (mario.currentSpeed === 3) {
          mario.startWalkingLeft();
        } else if (mario.currentSpeed === 6) {
          mario.startWalkingLeft();
        }
      }
    }

  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

  console.log(mario_metadata)
</script>