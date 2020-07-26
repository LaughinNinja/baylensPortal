var px = 0;
var py = 0;
var x = 0;
var y = 0;
function pos(px,py){
    if(px > x){
        console.log('right');
    }
    if(px < x){
        console.log('left');
    }
    if(py > y){
        console.log('Up');
    }
    if(py < y){
        console.log('Down');
    }
};

$('td#b1').mouseover(function(){
    b1.style.color = "red";
    px = 1;
    py = 3;
    pos(px,py);
});
$('td#b1').mouseout(function(){
    b1.style.color = "black";
    x = 1;
    y = 3;
});
$('td#b2').mouseover(function(){
    b2.style.color = "red";
    px = 2;
    py = 3;
    pos(px,py);
});
$('td#b2').mouseout(function(){
    b2.style.color = "black";
    x = 2;
    y = 3;
});
$('td#b3').mouseover(function(){
    b3.style.color = "red";
    px = 3;
    py = 3;
    pos(px,py);
});
$('td#b3').mouseout(function(){
    b3.style.color = "black";
    x = 3;
    y = 3;
});
$('td#b4').mouseover(function(){
    b4.style.color = "red";
    px = 4;
    py = 3;
    pos(px,py);
});
$('td#b4').mouseout(function(){
    b4.style.color = "black";
    x = 4;
    y = 3;
});
$('td#b5').mouseover(function(){
    b5.style.color = "red";
    px = 1;
    py = 2;
    pos(px,py);
});
$('td#b5').mouseout(function(){
    b5.style.color = "black";
    x = 1;
    y = 2;
});
$('td#b6').mouseover(function(){
    b6.style.color = "red";
    px = 2;
    py = 2;
    pos(px,py);
});
$('td#b6').mouseout(function(){
    b6.style.color = "black";
    x = 2;
    y = 2;
});
$('td#b7').mouseover(function(){
    b7.style.color = "red";
    px = 3;
    py = 2;
    pos(px,py);
});
$('td#b7').mouseout(function(){
    b7.style.color = "black";
    x = 3;
    y = 2;
});
$('td#b8').mouseover(function(){
    b8.style.color = "red";
    px = 4;
    py = 2;
    pos(px,py);
});
$('td#b8').mouseout(function(){
    b8.style.color = "black";
    x = 4;
    y = 2;
});
$('td#b9').mouseover(function(){
    b9.style.color = "red";
    px = 1;
    py = 1;
    pos(px,py);
});
$('td#b9').mouseout(function(){
    b9.style.color = "black";
    x = 1;
    y = 1;
});
$('td#b10').mouseover(function(){
    b10.style.color = "red";
    px = 2;
    py = 1;
    pos(px,py);
});
$('td#b10').mouseout(function(){
    b10.style.color = "black";
    x = 2;
    y = 1;
});
$('td#b11').mouseover(function(){
    b11.style.color = "red";
    px = 3;
    py = 1;
    pos(px,py);
});
$('td#b11').mouseout(function(){
    b11.style.color = "black";
    x = 3;
    y = 1;
});
$('td#b12').mouseover(function(){
    b12.style.color = "red";
    px = 4;
    py = 1;
    pos(px,py);
});
$('td#b12').mouseout(function(){
    b12.style.color = "black";
    x = 4;
    y = 1;
});