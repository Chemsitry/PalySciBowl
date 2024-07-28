export default function Home() {
  return (
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
    <title>Paly SciBowl home</title>
    <base href="C:/Users/Forrest/Desktop/Extra/Scibowl/Website_SciBowl/" target="_self">
    <link rel="icon" type="image/x-icon" href="images/PSBLogo.png">
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <style>

    </style>

    <script>
    addEventListener("resize", (event) => {});

    onresize = (event) => {};

    function setSize() {
      var w = window.innerWidth;
      var hometitle = document.querySelector('.hometitle');
      var titleimage = document.getElementById('titleimage');
      var titleimagediv = document.getElementById('titleimagediv');
      if(w>700){
        hometitle.setAttribute('style', `font-family: "Arial", sans-serif;
        display:flex;
        flex-direction: row;
        height: 102vh;
        align-items: center;
        color:#fff;
        font-size: 7.5vw;
        word-spacing: 0vw;
        vertical-align:top`);
        titleimagediv.setAttribute('style', 'width:26%');
        titleimage.setAttribute('style', 'width:26vw');
      } else {
        hometitle.setAttribute('style', `font-family: "Arial Black", sans-serif;
        display:flex;
        flex-direction: column;
        height: 120vw;
        align-items: center;
        color:#fff;
        font-size:7vw;
        word-spacing: 0vw; `);
        titleimagediv.setAttribute('style', 'width:50%');
        titleimage.setAttribute('style', 'width:49vw');

      }
      console.log(hometitle.getAttribute('style'));
    }
    </script>
    </head>

    <body onload="setSize()" onresize="setSize()">

    <div class="hometitle">
      <div id="titleimagediv"> <img id="titleimage" src="images/PSBLogo.png" alt="PSBLogo" style="width:30vw"> </div>
      <div id="titletext" style="width:60%;height:21vw;align-items:top">Paly Science Bowl</div>
    </div>

    <p>Paly SciBowl is a team dedicated to competing at Science Bowl, a national competiton hosted by the US Department of Energy. By creating a community working together to advance the pursuit of knowledge, we hope that Paly SciBowl can inspire passion for competition and learning.</p>

  );
}
