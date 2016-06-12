if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  window.location.href = 'mobile.html';
} else {
  window.location.href = 'browser.html';
}


// function detectmob() {
//  if( navigator.userAgent.match(/Android/i)
//  || navigator.userAgent.match(/webOS/i)
//  || navigator.userAgent.match(/iPhone/i)
//  || navigator.userAgent.match(/iPad/i)
//  || navigator.userAgent.match(/iPod/i)
//  || navigator.userAgent.match(/BlackBerry/i)
//  || navigator.userAgent.match(/Windows Phone/i)
//  ){
//     return true;
//   }
//  else {
//     return false;
//   }
// }

// function checkWindow(){
//   if(detectmob){
//     console.log("mobile");
//     window.location.href = 'mobile.html';
//   } else {
//     console.log("browser");
//     window.location.href = 'browser.html';
//   }

// }

// var deviceCheck = true;

// if(deviceCheck){
//   checkWindow();
//   deviceCheck = false;
// }
