//1 sleep in
function sleep_in(weekday,vacation){
    if (weekday==true&&vacation==false){
        return false;
    }else{
        return true;
    }
}

function tester() {
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}

//2 monkey trouble
function monkey_trouble(a,b) {
    if (a!==b){
        return false;
    }else {
        return true;
    }
}

//3 string times
function string_times(x,y){
    var times=str.repeat(y);
    return times;
}

//4 Front Times
function front_times(x,y){
    var firstthree = x.substring(0, 3);
    if (firstthree == -1) {
        x.repeat(y);
    } else {
        var times = firstthree.repeat(y);
        return times;
    }
}

//5 string bits
function string_bits(x){
    var answer="";
    for(var i=0;i<x.length; i+=2) {
        answer=answer+x[i];
    }
    return answer;
}

//6 caught speeding
function caughtSpeeding(speed,birthday){
    var answer="";
    if(speed<=60 && birthday==false||speed<=65 && birthday==true){
        answer=answer+"0";
    }else if (speed>60 && speed<=80 && birthday==false||speed>65 && speed<=85 && birthday==true){
        answer=answer+"1";
    }else if (speed>80 && birthday==false||speed>85 && birthday==true){
        answer=answer+"2";
    }
    return answer;
}

//7 Fizz Buzz
function fizz_buzz(x){
    var answer="";
    if (x%3==0 && x%5==0){
        answer=answer+"FizzBuzz";
    }else if (x%5==0){
        answer=answer+"Buzz";
    }else if (x%3==0 && x%5==0){
        answer=answer+"FizzBuzz";
    }else if(x%3==0 ) {
        answer = answer + "Fizz";
    }else {
        answer=answer+x+"!";
    }
    return answer;
}

//8 Tea party
function teaParty(x,y){
    var answer="";
    if (x>=5&&y>=5){
        if (x>=y*2||y>=x*2){
            answer=answer+"2"
        }else{
            answer=answer+"1";
        }
    }else{
        answer=answer+"0";
    }
    return answer;
}

//9 Black Jack
function blackjack(x,y){
    var answer="";
    if (y>x && y<=21){
        answer=answer+y;
    }else if(x>y&&x<=21){
        answer=answer+x;
    }else if(x>21&&y>21){
        answer=answer+"0"
    }else if (y>21 && x<=21){
        answer=answer+x;
    }else if (x>21 && y<=21){
        answer=answer+y;
    }
    return answer;
}

//10 Lone Sum
function loneSum(a,b,c){
    var answer="";
    var abc=(a+b+c);
    if (a!=b && a!=c && b!=c){
        answer=answer+abc;
    }else if(a==b && b!=c){
        answer=answer+c;
    }else if (a==c && c!=b){
        answer=answer+b;
    }else if (b==c && c!=a){
        answer=answer+a;
    }else{
        answer=answer+"0";
    }
    return answer;
}

