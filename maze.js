
window.onload = function main()  
{      
	   var start = document.getElementById("start");
       var end = document.getElementById("end");
       var x = document.getElementsByTagName("DIV");
            x.onmouseover = showMouseOver;
            end.onmouseover = win;
            start.onclick = restart;
}
    
  

    
function showMouseOver()  
    {  
        document.getElementsByTagName("DIV").backgroundColor = "red";

    }
    
       
            

function win()
{

          var notice = document.getElementById("status");
              notice.innerHTML = 'You Win';
}



function restart()
{
    var notice = document.getElementById("status");
     var list2 = document.getElementsByClassName("boundary");
        notice.innerHTML = 'Move your mouse over the "S" to begin.';
        list2.style.backgroundColor= "#eeeeee";
}