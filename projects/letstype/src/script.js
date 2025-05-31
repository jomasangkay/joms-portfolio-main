import data from './data.js';


function TypingGame(score,stage,speedLvl,pixelIncrement,container){

    this.score = score;
    this.stage = stage;
    this.speedLvl = speedLvl;
    this.pixelIncrement = pixelIncrement;
    this.container = container;
    this.running = false;
    this.interval = setInterval(this.timer,this.speedLvl);

    //method to start the set interval for method.
    this.startInterval = (() => {
        
        console.log('speed = '+ this.speedLvl);
        this.interval = setInterval(this.timer,this.speedLvl);
    });

    //method to change keyword every time it executes.
    this.changeKeyword = (() => {
        
        const randomIndex = Math.floor(Math.random() * 180);
        document.getElementById('showKeyword').setAttribute('value', data[randomIndex].words);
    });

    //method to re-setup style container after successfull keyword entered.
    const setupContainer = ((setup) => {
        if(setup === "initial") {
            document.getElementById('input-enter').value = "";
        document.getElementById('showKeyword').classList.add('dead');
        document.querySelector('.keyword-1').removeAttribute('id');
        document.querySelector('.keyword-1').classList.remove('correct');
        document.querySelector('.keyword-1').classList.remove('incorrect');
        document.querySelector('.keyword-2').setAttribute('id','showKeyword');
        document.querySelector('.keyword-2').classList.remove('hide');
        }
        

        //setup class changes ang attributes for the next block
        document.getElementById('input-enter').value = "";
        document.getElementById('showKeyword').classList.add('dead');
        document.querySelector('.keyword-2').removeAttribute('id');
        document.querySelector('.keyword-2').classList.remove('correct');
        document.querySelector('.keyword-2').classList.remove('incorrect');
        document.querySelector('.keyword-3').setAttribute('id','showKeyword');
        document.querySelector('.keyword-3').classList.remove('hide');
        document.querySelector(this.container).classList.add('move');

        document.getElementById('showKeyword').classList.add('dead');
        document.querySelector('.keyword-3').classList.remove('correct');
        document.querySelector('.keyword-3').classList.remove('incorrect');
        document.querySelector('.keyword-3').removeAttribute('id');
        document.getElementById('input-enter').setAttribute('readonly',"")
    });

    //method for set interval.
    this.timer = (() => {
           
        this.pixelIncrement += 20;
        console.log(this.pixelIncrement + " - " + this.container);
        document.querySelector(this.container).style.top = this.pixelIncrement + 'px';
        
        if(this.pixelIncrement === 560){

            this.stage = 1;
            this.speedLvl = 1000
            this.container = '.keyword-container-2'

            //set top pixel to 160 to reset the position
            this.pixelIncrement = 160
        
            //stop interval time
            clearInterval(this.interval);
            
            //setup class changes and attributes for the next block
            setupContainer("initial")

            document.querySelector(this.container).classList.add('move');
                    
            //execute function change keyword
            this.changeKeyword();
                    
            //re-start the interval
            this.startInterval();

        }  else if(this.container === '.keyword-container-2' && this.pixelIncrement === 500) {

            this.stage = 1;
            this.speedLvl = 1000
            this.container = '.keyword-container-3'

            //set top pixel to 160 to reset the position
            this.pixelIncrement = 160
        
            //stop interval time
            clearInterval(this.interval);

             //setup class changes ang attributes for the next block
            document.getElementById('input-enter').value = "";
            document.getElementById('showKeyword').classList.add('dead');
            document.querySelector('.keyword-2').removeAttribute('id');
            document.querySelector('.keyword-2').classList.remove('correct');
            document.querySelector('.keyword-2').classList.remove('incorrect');
            document.querySelector('.keyword-3').setAttribute('id','showKeyword');
            document.querySelector('.keyword-3').classList.remove('hide');
            document.querySelector(this.container).classList.add('move');
                    
            //execute function change keyword
            this.changeKeyword();
                    
            //re-start the interval
            this.startInterval();
            
        }  else if(this.container === '.keyword-container-3' && this.pixelIncrement === 440) {
                    
            //set top pixel to 160 to reset the position
            this.pixelIncrement = 160
        
            //stop interval time
            clearInterval(this.interval);
            document.getElementById('showKeyword').classList.add('dead');
            document.querySelector('.keyword-3').classList.remove('correct');
            document.querySelector('.keyword-3').classList.remove('incorrect');
            document.querySelector('.keyword-3').removeAttribute('id');
            document.getElementById('input-enter').setAttribute('readonly',"")
            
            alert(`GAME OVER - Your Score is ${this.score} - Press Reset then Start to play again`);

        }
    })
}


//Create new object
const game = new TypingGame(0,1,1000,160,'.keyword-container');

//highlight expected text to background color green if input and expected value is matched.
document.getElementById('input-enter').oninput = (() => {
            
    let getInputKeyword = document.getElementById('input-enter').value;
    let getExpectedKeyword = document.getElementById('showKeyword').getAttribute('value');
    
    if(getInputKeyword === getExpectedKeyword) {
        
        document.getElementById('showKeyword').classList.remove('incorrect');
        document.getElementById('showKeyword').classList.add('correct');

    } else {
        document.getElementById('showKeyword').classList.remove('incorrect');
        document.getElementById('showKeyword').classList.remove('correct');
    }
});

//pressing ENTER key will add score, change to next random expected keyword and get error if input and expected value does not match.
document.getElementById('input-enter').addEventListener('keypress', (e => {

    if(e.key === 'Enter'){
    //console.log(game.speedLvl);
     e.preventDefault();
            
    let getInputKeyword = document.getElementById('input-enter').value;
    let getExpectedKeyword = document.getElementById('showKeyword').getAttribute('value');
        
    console.log(getInputKeyword +" = "+ getExpectedKeyword);

    if(getInputKeyword === getExpectedKeyword) {
        
        //increase stage
        game.stage++;

        //increase score to 200
        game.score += 200;

        //change expected keyword
        game.changeKeyword;

        //clear the keyword container design
        document.getElementById('showKeyword').classList.remove('correct');
        document.getElementById('input-enter').value = null;

        //display score
        document.getElementById('input-score').value = game.score;

        //set top pixel to 160 to reset the position
        game.pixelIncrement = 160;
        document.querySelector(game.container).style.top = game.pixelIncrement + 'px';
    
        //stop interval time
        clearInterval(game.interval);
                
        //execute function change keyword
        game.changeKeyword();

        //speed levels
        switch(game.stage) {
            case 1:
                game.speedLvl = 1000;
                game.startInterval();
                break;
            case 5:
                game.speedLvl = 800;
                game.startInterval();
                break;
            case 10:
                game.speedLvl = 600;
                game.startInterval();
                break;
            case 15:
                game.speedLvl = 400;
                game.startInterval();
                break;
            case 20:
                game.speedLvl = 200;
                game.startInterval();
                break;
            case 30:
                game.speedLvl = 100;
                game.startInterval();
                break;
            case 40:
                game.speedLvl = 50;
                game.startInterval();
                break;
            case 60:
                game.speedLvl = 30;
                game.startInterval();
                break;
            default:
                game.startInterval();

            }
            
            console.log('Clear EVENT!');

            //to avoid double trigger of events
            e.stopImmediatePropagation();

    } else if(getInputKeyword !== getExpectedKeyword) {

        document.querySelector(game.container).classList.add('shake');
        document.getElementById('showKeyword').classList.add('incorrect');

        game.score -= 100;
        document.getElementById('input-score').value = game.score;
        e.stopImmediatePropagation();
    }

        setTimeout(() => {
        document.querySelector(game.container).classList.remove('shake');
        },500);
        
    }
}));


//Game START button
document.querySelector('#startButton').addEventListener('click', (() => {
    console.log('GAME START!');
    if(game.running){
        alert("Game is already running!"); throw new Error("Game is already running!"); 
    }
    
    //preparing to start game by removing readonly and etc.
    
    game.running = true;

    game.changeKeyword();
    document.getElementById('input-enter').focus();        
    document.getElementById('showKeyword').classList.remove('grayed-out');
    document.getElementById('input-enter').removeAttribute('readonly');
    document.querySelector(game.container).classList.add('move');
    

    //prevent users copying the text.
    document.addEventListener("copy", (e) => {

    e.clipboardData.setData("text/plain", "");
    e.preventDefault();
    }, false);

    //set interval increment of position top
    game.startInterval();

}),false);



//Game RESET button
document.getElementById('resetButton').addEventListener('click', (() => {

    if(!game.running){
        alert("Game has already been reset"); throw new Error("Game has already been reset"); 
    }   
    //e.stopImmediatePropagation();
    
    //set properties to default value
    game.score = 0;
    game.stage = 1;
    game.running = null;
    game.speedLvl = 1000;
    clearInterval(game.interval);

    //remove classes and set attributes to its default values.
    //section keyword-1
    document.querySelector('.keyword-1').setAttribute('id','showKeyword');
    document.querySelector('.keyword-1').classList.add('grayed-out');
    document.querySelector('.keyword-1').classList.remove('dead');
    document.querySelector('.keyword-1').classList.remove('correct');
    document.querySelector('.keyword-1').classList.remove('move');
    document.querySelector('.keyword-1').classList.remove('incorrect');
    document.querySelector('.keyword-1').setAttribute('value', 'Click Start to play!');

    //section keyword-2
    document.querySelector('.keyword-2').removeAttribute('id');
    document.querySelector('.keyword-2').classList.add('hide');
    document.querySelector('.keyword-2').classList.remove('dead');
    document.querySelector('.keyword-2').classList.remove('correct');
    document.querySelector('.keyword-2').classList.remove('move');
    document.querySelector('.keyword-2').classList.remove('incorrect');
    document.querySelector('.keyword-2').setAttribute('value', '');

    //section keyword-3
    document.querySelector('.keyword-3').removeAttribute('id');
    document.querySelector('.keyword-3').classList.add('hide');
    document.querySelector('.keyword-3').classList.remove('dead');
    document.querySelector('.keyword-3').classList.remove('correct');
    document.querySelector('.keyword-3').classList.remove('move');
    document.querySelector('.keyword-3').classList.remove('incorrect');
    document.querySelector('.keyword-3').setAttribute('value', '');

    //reset position
    game.pixelIncrement = 160;
    document.querySelector('.keyword-container').style.top = 139 + 'px';
    document.querySelector('.keyword-container-2').style.top = game.pixelIncrement + 'px';
    document.querySelector('.keyword-container-3').style.top = game.pixelIncrement + 'px';

    document.getElementById('input-enter').setAttribute('readonly',"")
    document.getElementById('input-enter').value = "";
    document.getElementById('input-score').value = 0;
    game.container = '.keyword-container'

}),false);
