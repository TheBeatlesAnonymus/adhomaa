let turn = 'x';
let title =document.querySelector(".title")
let squares=[]
function winner() 
{
    for(let i=1; i<10;i++)
    {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if (squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!='') {
        title.innerHTML=squares[1]+" winner"
        document.getElementById('item'+1).style.background = '#000'
        document.getElementById('item'+2).style.background = '#000'
        document.getElementById('item'+3).style.background = '#000'
    
 
        setInterval(function(){},1000)
setTimeout(function(){location.reload()},4000)
}

    else if (squares[4]==squares[5]&&squares[5]==squares[6]&&squares[5]!='') {
        title.innerHTML=squares[4]+" winner"
        document.getElementById('item'+4).style.background = '#000'
        document.getElementById('item'+5).style.background = '#000'
        document.getElementById('item'+6).style.background = '#000'
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},5000)
    
          
    }
    
    else if (squares[7]==squares[8]&&squares[8]==squares[9]&&squares[8]!='') {
        title.innerHTML=squares[7]+" winner"
        document.getElementById('item'+7).style.background = '#000'
        document.getElementById('item'+8).style.background = '#000'
        document.getElementById('item'+9).style.background = '#000'
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},4000)

          
    }
    
    else if (squares[1]==squares[4]&&squares[4]==squares[7]&&squares[4]!='') {
        title.innerHTML=squares[1]+" winner"
        document.getElementById('item'+1).style.background = '#5c9c9e'
        document.getElementById('item'+4).style.background = '#5c9c9e'
        document.getElementById('item'+7).style.background = '#5c9c9e'
        setInterval(function(){title.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)

    }
    else if (squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5]!='') {
        title.innerHTML=squares[2]+" winner"
        document.getElementById('item'+2).style.background = '#5c9c9e'
        document.getElementById('item'+5).style.background = '#5c9c9e'
        document.getElementById('item'+8).style.background = '#5c9c9e'
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},4000)
      
    }
    else if (squares[3]==squares[6]&&squares[6]==squares[9]&&squares[6]!='') {
        title.innerHTML=squares[3]+" winner"
        document.getElementById('item'+3).style.background = '#5c9c9e'
        document.getElementById('item'+6).style.background = '#5c9c9e'
        document.getElementById('item'+9).style.background = '#5c9c9e'
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},4000)
    } 
    else if (squares[1]==squares[5]&&squares[5]==squares[9]&&squares[5]!='') {
        title.innerHTML=squares[1]+" winner"
        document.getElementById('item'+1).style.background = '#5c9c9e'
        document.getElementById('item'+5).style.background = '#5c9c9e'
        document.getElementById('item'+9).style.background = '#5c9c9e'
        setInterval(function(){title.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)
    }
    else if (squares[3]==squares[5]&&squares[5]==squares[7]&&squares[5]!='') {
       title.innerHTML=squares[3]+" winner"
       document.getElementById('item'+3).style.background = '#5c9c9e'
       document.getElementById('item'+5).style.background = '#5c9c9e'
       document.getElementById('item'+7).style.background = '#5c9c9e'
       setInterval(function(){title.innerHTML+='.'},1000)
       setTimeout(function(){location.reload()},4000)
}
 
}

let sq =document.querySelectorAll(".square")
function game(id)
{
    let elemnt=document.getElementById(id);
if(turn==='x' && elemnt.innerHTML == '' ){
elemnt.innerHTML ='X'
turn = 'o'
title.innerHTML="O turn's"
}
else if(turn==='o' && elemnt.innerHTML == '' ){
    elemnt.innerHTML ='O' 
    turn = 'x'
    title.innerHTML="X turn's"
}

winner();

}
