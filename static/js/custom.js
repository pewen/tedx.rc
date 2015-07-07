/*****************************************
 * Carousel options
 ****************************************/
$(function () {
    $('#myCarousel').carousel({
        interval:3000,
        pause: "false"
    });
});


/******************************************
 * Clock
 *****************************************/
(function($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2015, 10, 9, 9, 00);
    /**
    * The script
    **/
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('<h1>0</H1><p>Días</p>');
            hours.html('<h1>0</h1><p>Horas</p>');
            minutes.html('<h1>0</h1><p>Minutos</p>');
            seconds.html('<h1>0</h1><p>Segundos</p>');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html('<h1>'+d+'</h1><p>Día'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html('<h1>'+h+'</h1><p>Hora'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html('<h1>'+m+'</h1><p>Minuto'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds.html('<h1>'+s+'</h1><p>Segundo'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

        }
    }
})(jQuery);

(function($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2015, 10, 9, 9, 00);
    /**
    * The script
    **/
    var days = $('#days2');
    var hours = $('#hours2');
    var minutes = $('#minutes2');
    var seconds = $('#seconds2');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('<h1>0</H1><p>Días</p>');
            hours.html('<h1>0</h1><p>Horas</p>');
            minutes.html('<h1>0</h1><p>Minutos</p>');
            seconds.html('<h1>0</h1><p>Segundos</p>');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html('<h1>'+d+'</h1><p>Día'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html('<h1>'+h+'</h1><p>Hora'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html('<h1>'+m+'</h1><p>Minuto'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds.html('<h1>'+s+'</h1><p>Segundo'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

        }
    }
})(jQuery);

(function($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2015, 10, 9, 9, 00);
    /**
    * The script
    **/
    var days = $('#days3');
    var hours = $('#hours3');
    var minutes = $('#minutes3');
    var seconds = $('#seconds3');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('<h1>0</H1><p>Días</p>');
            hours.html('<h1>0</h1><p>Horas</p>');
            minutes.html('<h1>0</h1><p>Minutos</p>');
            seconds.html('<h1>0</h1><p>Segundos</p>');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html('<h1>'+d+'</h1><p>Día'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html('<h1>'+h+'</h1><p>Hora'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html('<h1>'+m+'</h1><p>Minuto'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds.html('<h1>'+s+'</h1><p>Segundo'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

        }
    }
})(jQuery);
