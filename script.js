var minute = document.getElementById('minute')
var second = document.getElementById('second')
var circle = document.getElementById('circle_load')
var strt = document.getElementById('strt')
var timeup = document.getElementById('timeup')
var timercircle = document.getElementById('circle')
var error = document.getElementById('error')
speed = 1000;
var timer;
var temp1, temp2,temp;
var button = document.getElementById('button')
function reload ()
{
    location.reload();
    
}
button.onclick = function edit ()
{
    clearInterval(timer)
    var sec = second.innerHTML;
    var min = minute.innerHTML;
    minute.innerHTML = min;
    second.innerHTML = sec;
    minute.contentEditable = true ;
    second.contentEditable = true;

    
}
function start()
{
    
    minute.contentEditable = false;
    second.contentEditable = false;
    var temp1 = minute.innerHTML * 60;
    temp2 = parseInt(second.innerHTML)
    temp = temp1 + temp2;
    console.log(temp); 
        timer = setInterval(()=>
        {
        var sec = Math.abs(second.innerHTML)
        var min = Math.abs(minute.innerHTML)
        var checker = isNaN(sec)
        var checker1 = isNaN(min) 
        if(checker1 == true || checker == true)
        {
            error.style.display ='flex'
            timercircle.style.display = 'none'
            timeup.style.display = 'flex'            
            circle.style.background = `conic-gradient(red 360deg, transparent 0deg)`
        }
        else if(sec>60)
        {
            var count = parseInt(sec/60)
            if(count<10)
            {
                min = "0" + count;
            }
            else
            {
                min = count;
            }
            sec = (sec%60)+1;
        }
        console.log(sec);
        if(min == 0 & sec == 0)
        {
            speed=0
            timercircle.style.display = 'none'
            timeup.style.display = 'flex'
            return speed
        }
        else if(min==0 & sec<12)
        {
            second.style.color = 'red';
        }
        else if(sec==0)
            {
                min--
               sec=60;
                if(min<10)
                {
                    min="0"+min
                }
            }
            
   
        sec--
        
        if(sec<10)
        {
            sec="0"+sec
            
        }
        second.innerHTML = sec;
        minute.innerHTML = min;
        var tempnew1 = parseInt(second.innerHTML)
        var tempnew2 = parseInt(minute.innerHTML * 60) 
        var tempnew = tempnew1 + tempnew2 
        var percentage = Math.abs(tempnew/temp*100)
        circle.style.background = `conic-gradient(red ${percentage * 3.6}deg, transparent 0deg)`
        },speed
    )}
