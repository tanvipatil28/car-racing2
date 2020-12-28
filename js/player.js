class Player{
    //player.name
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    /*Arrow Function
    function(data){

    }
replaces with

    (data)=>{

    }

    function isTouching(object1, object2){

    }

    isTouching =   function(object1, object2){
        
    }

     isTouching =   (object1, object2)=>{
        
    }

    */

    //4 player and for calling any function player.update, player.getCount
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        //Player(1,2,3,4) name and distance individually
        playerInfoRef.on("value",(data)=>{
                allPlayers = data.val();
         } )
    }
    
}