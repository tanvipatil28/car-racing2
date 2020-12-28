class Game{
    constructor(){

    }
    // gameState 0 =  begin, 1 = play, 2 = end
    //playerCount === 4 == gameState =1 
    //function (){ } local function

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
                gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

   async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                    playerCount = playerCountRef.val();
                    player.getCount();
            }
          
            form = new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage(car1Img);
        car2=createSprite(300,200);
        car2.addImage(car2Img);
        car3=createSprite(500,200);
        car3.addImage(car3Img);
        car4=createSprite(700,200);
        car4.addImage(car4Img);
        cars = [car1,car2,car3,car4]
        //cars = [0,1,2,3]
  }

   play(){
       form.hide();
       //textSize(20);
      // text("Game Start", 120,100);
        Player.getPlayerInfo();
        //Not equal to !==


        if(allPlayers !== undefined){
           // var display_position = 130;
// for loop => array in;
            background(rgb(198,135,103));
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);


                var index=0
                var x=175
                var y;
                

                for(var plr in allPlayers){
                    
                   /* if (plr === "player" + player.index)
                    fill("red")
                    else
                     fill("black");*/

                    // display_position +=20;
                    // textSize(15);
                    // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
                     //add 1 to the index for every loop
                    index = index+1;
                    


                    //position the cars a little away from each other in x direction
                    x = x+200;

                    //y = 1600 - distance from the top

                    y = displayHeight - allPlayers[plr].distance;
                    //play the info is sent 
                    //index = 1,2,3,4
                    cars[index-1].x = x
                    cars[index-1].y = y
                    if(index === player.index){
                        cars[index-1].shapeColor = "red"

                        camera.position.x = displayWidth/2;
                        camera.position.y = cars[index-1].y
                    }

                }


        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
 }

 if(player.distance>3900){
     gameState=2
 }
 drawSprites();
   } 
  end(){
      console.log ('gameended')
  } 

}
