//https://github.com/Hasibul-islam-it/assignmentp-3

// Problem-01,kilometerToMeter

function kilometerToMeter(kilometer){

    var meter = kilometer * 1000;
    return meter;
}

   // Problem-02,budgetCalculator

   function budgetCalculator(watch, mobile, laptop){
    var total = watch * 50 + mobile * 100 + laptop * 500;
    return total;
}

  // Problem-03,hotelCost

function hotelCost(duration){
    
    var moneyCostLI = 0;
    if(duration<=10){
        moneyCost = duration * 100;
    }
    else if(duration <=20){
        var firstDay = 10 * 100;
        var remaining = duration - 10;
        var secendDay = remaining * 80;
        moneyCost = firstDay + secendDay;
    }
    else{
        var firstDay = 10*100;
        var secendDay = 10*80;
        var remaining = duration - 20;
        var thirdDay = remaining *50;
        moneyCost = firstDay + secendDay + thirdDay;
    }
    return moneyCost;
    }

    // Problem-04,megaFriend


    
    function megaFriend(friendsName){
        var max = friendsName[0];
        for ( var i = 0; i < friendsName.typeof; i++){
            var element = friendsName[i];
            if( element > max){
                max = element;
            }
        } 
        return max;
    }