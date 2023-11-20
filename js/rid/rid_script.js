"use strict"

//elem.innerHTML="What of the fucker maker showcontribute"
let elem = document.querySelector(".ewq p")

  //вешаем на него события
elem.onmouseout = function() {
    elem.style.color='';
  }

  elem.onmouseover = function() {
    elem.style.color='yellow';
  };

window.onload = function () {

    //получаем идентификатор элемента

    //вешаем на него событие

    elem.onclick = function() {
        //производим какие-то действия

        if (this.innerHTML=='We hired people who are <br> Always Passionate about <br> what they do') {
            elem.innerHTML="ОЙ ОЙОЙОЙ ЧТО ЭТО , НЕЕЕЕЕЕТ, СРОЧНО ВЕРНИ ВСЕ ОБРАТНО - click me please";
            elem.style.color = "red"
        }
        
        else
            elem.innerHTML="We hired people who are <br> Always Passionate about <br> what they do"

            //предотвращаем переход по ссылке href
        return false;
    }


}