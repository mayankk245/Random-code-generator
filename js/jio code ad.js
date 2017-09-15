function adSetter(){
alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: "ca-app-pub-1817604288448175/5606959844"
        interstitial: "ca-app-pub-1817604288448175/4549029043"
    };
}
if(AdMob) AdMob.createBanner( {
    isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

}
  function onDeviceReady(){
  alert("device ready");
      adSetter();
  }


function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}