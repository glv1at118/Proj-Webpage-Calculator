/* scripts for calculator app */

$(function(){
  /* Disable the mouse copy select behavior in the web page */
  document.documentElement.onselectstart = function(){
    return false;
  };

  /* Initial values for the input display(display1) and output display(display2) */
  var inputValue = "";
  var outputValue = 0;

  /* jQuery objects for all the calculator buttons */
  var $display1 = $("#display1");
  var $display2 = $("#display2");
  var $one = $("#one");
  var $two = $("#two");
  var $three = $("#three");
  var $four = $("#four");
  var $five = $("#five");
  var $six = $("#six");
  var $seven = $("#seven");
  var $eight = $("#eight");
  var $nine = $("#nine");
  var $zero = $("#zero");
  var $plus = $("#plus");
  var $minus = $("#minus");
  var $multiply = $("#multiply");
  var $divide = $("#divide");
  var $point = $("#point");
  var $equals = $("#equals");
  var $ac = $("#all-clear");
  var $modulus = $("#modulus");
  var $bracketL = $("#bracket-left");
  var $bracketR = $("#bracket-right");
  var $pi = $("#pi");
  var $del = $("#del");
  var $theme = $("#theme");
  var $btn = $("#btn");

  /* Set the initial displays for display1 & display2 */
  $display1.html(inputValue);
  $display2.html(outputValue);

  /* keypress callback function for all buttons */
  $(document.documentElement).keypress(function(event){
    switch (event.keyCode) {
      case 48:
        num("0");
        break;
      case 49:
        num("1");
        break;
      case 50:
        num("2");
        break;
      case 51:
        num("3");
        break;
      case 52:
        num("4");
        break;
      case 53:
        num("5");
        break;
      case 54:
        num("6");
        break;
      case 55:
        num("7");
        break;
      case 56:
        num("8");
        break;
      case 57:
        num("9");
        break;
      case 46:
        num(".");
        break;
      case 43:
        num("+");
        break;
      case 45:
        num("-");
        break;
      case 42:
        num("*");
        break;
      case 47:
        num("/");
        break;
      case 13:
        try{
          var result = eval(inputValue);
          resultStr = result.toPrecision(20).toString();
          result = parseFloat(resultStr);
          $display2.html(result);
        } catch(e){
          $display2.html("ERROR: PLEASE INPUT CORRECTLY");
        }
        break;
      case 40:
        num("(");
        break;
      case 41:
        num(")");
        break;
      case 37:
        num("%");
        break;
      case 112:
        num("3.142");
        break;
      case 32:
        inputValue = "";
        outputValue = 0;
        $display1.html(inputValue);
        $display2.html(outputValue);
        break;
      case 44: /* del */
        inputValue = inputValue.substring(0, inputValue.length-1);
        $display1.html(inputValue);
        break;
      case 60: /* del */
        inputValue = inputValue.substring(0, inputValue.length-1);
        $display1.html(inputValue);
        break;
      default:
        break;
    }
  });


  /* click callback function for the buttons 1 ~ 9 */
  function num(numStr){
    /* Restrict the length of number string in display1 to be less than 40 digits*/
    if(inputValue.length >= 40){
      return;
    } else{
      inputValue = inputValue + numStr;
      $display1.html(inputValue);
    }
  }

  $zero.click(function(){
    num("0");
  });

  $one.click(function(){
    num("1");
  });

  $two.click(function(){
    num("2");
  });

  $three.click(function(){
    num("3");
  });

  $four.click(function(){
    num("4");
  });

  $five.click(function(){
    num("5");
  });

  $six.click(function(){
    num("6");
  });

  $seven.click(function(){
    num("7");
  });

  $eight.click(function(){
    num("8");
  });

  $nine.click(function(){
    num("9");
  });

  /* click callback function for the button AC */
  $ac.click(function(){
    inputValue = "";
    outputValue = 0;
    $display1.html(inputValue);
    $display2.html(outputValue);
  });

  /* +, -, ×, ÷, (, ), MOD, click callbacks */
  $plus.click(function(){
    num("+");
  });

  $minus.click(function(){
    num("-");
  });

  $multiply.click(function(){
    num("*");
  });

  $divide.click(function(){
    num("/");
  });

  $bracketL.click(function(){
    num("(");
  });

  $bracketR.click(function(){
    num(")");
  });

  $modulus.click(function(){
    num("%");
  });

  /* Callback for the point button */
  $point.click(function(){
    num(".");
  });

  /* Callback for pi and del */
  $pi.click(function(){
    num("3.142");
  });

  $del.click(function(){
    inputValue = inputValue.substring(0, inputValue.length-1);
    $display1.html(inputValue);
  });

  /* Callback for the = button */
  $equals.click(function(){
    try{
      var result = eval(inputValue);
      resultStr = result.toPrecision(20).toString();
      result = parseFloat(resultStr);
      $display2.html(result);
    } catch(e){
      $display2.html("ERROR: PLEASE INPUT CORRECTLY");
    }
  });

  /* hover animation for theme bar */
  var timer;
  $theme.hover(function(){
    clearInterval(timer);
    timer = setInterval(function(){
      var top = $theme.position().top;
      if(top <= -50){
        $theme.css("top", -50);
        clearInterval(timer);
      } else{
        $theme.css("top", top - 2);
      }
    }, 20);
  }, function(){
    clearInterval(timer);
    timer = setInterval(function(){
      var top = $theme.position().top;
      if(top >= -10){
        $theme.css("top", -10);
        clearInterval(timer);
      } else{
        $theme.css("top", top + 2);
      }
    }, 20);
  });

  /* Theme button toggle themes callback */
  $btn.click(function(event){
    $(".floatClass").toggleClass("classic");
    $(".display").toggleClass("classicDisplay");
  });

});
