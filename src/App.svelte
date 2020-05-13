<script>
  let site = "https://reconcile.app";
  let src1 = site;
  let src2 = site;
  const updateSrc = () => {
    if (site.slice(0, 4) !== "http") src1 = src2 = "http://" + site;
    else src1 = src2 = site;
  };
  const handleKeydown = event => {
    let key = event.key;
    let keyCode = event.keyCode;
    if (key === "Enter") updateSrc();
  };
</script>

<style>
  .pixel {
    padding: 91px 26px 96px;
    margin: 10px;
    background-image: url("assets/google_pixel_3.jpg");
    background-repeat: no-repeat;
  }
  .pixel-iframe {
    border: none;
    background-color: white;
    width: 368px;
    height: 655px;
  }
  .macbook {
    padding: 33px 99px 96px;
    background-size: 800px 470px;
    margin: 20px;
    background-image: url("assets/Apple-Macbook-Space-Grey.png");
    background-repeat: no-repeat;
  }

  .macbook-iframe {
    border: none;
    background-color: white;
    width: 1003px;
    height: 628px;
    -webkit-transform: scale(0.7);
    transform: scale(0.6);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
</style>

<h1>Device Mockups</h1>
<input bind:value={site} on:keydown={handleKeydown} />
<button on:click={updateSrc}>update</button>
<div class="pixel">
  <iframe class="pixel-iframe" title="Pixel window" src={src1} />
</div>
<div class="macbook">
  <iframe class="macbook-iframe" title="Macbook window" src={src2} />
</div>
