!function(a){function b(){clearTimeout(c),c=setTimeout(function(){a.rem=window.innerWidth/16,document.documentElement.style.fontSize=a.rem+"px"},300)}var c,d=1,e=1;2===a.devicePixelRatio&&a.navigator.appVersion.match(/iphone/gi)&&(d=.5,e=2),a.dpr=e,a.addEventListener("resize",b,!1),document.write('<meta name="viewport" content="initial-scale='+d+", maximum-scale="+d+", minimum-scale="+d+', user-scalable=no"/>'),document.addEventListener("DOMContentLoaded",function(){document.body.setAttribute("data-dpr",e),document.body.style.fontSize=12*e+"px"},!1),b()}(window);