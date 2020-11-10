class Foods{
    constructor(){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("Milk.png");
    }

    getFoodStock(){
      /*
      var foodStock = database.ref("Food");
        foodStock.on("value", function(data){
            food = data.val();
        })*/
        return this.foodStock;
    }
    updateStock(foodStock){
     /*   database.ref('/').update({
            foodStock: food
        });*/

        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock - 1;
        }
//        foodS = foodS - 1;

    }

    bedroom(){
        background(bedroom, 550, 500);
        
    }

    washroom(){
        background(washroom, 80, 80);
        washroom.scale = 0.5;
    }

    garden(){
        background(garden, 550, 500);
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock;i++){
                if(i%10===0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }

    }
}
