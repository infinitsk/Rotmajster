<script lang="ts" setup></script>

<template>
  <NuxtLayout name="custom">
    <title>O mne</title>
    <div>
      <div class="bg"></div>
      <div class="container">
        <img src="~/assets/pfp.png" alt="">
        <div class="info">
          <h2>Niečo o mne</h2>
          <p>Volám sa Peter Rothmajer a študujem na Strednej priemyselnej škole elektrotechnickej. Som v treťom ročníku a
            som na odbore IST (Informačné a sieťové technológie) so zameraním na programovanie. Moje ambície do budúcna sú
            pokračovať v štúdiu, buď na vysokej škole alebo na vyššom strednom vzdelaní (napr. Duálne vzdelávanie). Potom
            sa plánujem zamestnať a možno v budúcnosti skúsiť aj zahraničie.
          </p>
        </div>
        <ul>
          <h2>Znalosti</h2>
          <div class="zoznam">
            <li>Práca s počítačom</li>
            <li>Programovanie</li>
            <li>Vodičský preukaz (B)</li>
            <li>Programovanie:<br> Java, C, Python</li>
            <li>WEB: HTML, CSS, JS, NUXT, ANGULAR</li>
            <li>Mnohé certifikáty</li>
          </div>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
img {
  height: 115%;
  /*margin-top: -30%;*/
  margin-left: 20%;
  z-index: inherit;

}

h2 {
  padding-bottom: 3%;
  text-align: center;
  z-index: inherit;

}

p {
  /*margin-top: -40%;*/
  font-size: 1.45em;
  line-height: 1.4em;
  z-index: inherit;

}

ul {
  z-index: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 5% 3% 5% 3%;
  width: 60%;
  margin-top: -10%;
  margin-right: 10%;
}

ul h2 {
  background-color: none;
  display: flex;
  justify-content: center;
}

li {
  text-align: center;
  z-index: inherit;
  width: 60%;
  font-size: 1.45em;
  padding-top: 4%;
  padding-bottom: 3.5%;
}

.zoznam {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  z-index: 1;
  width: 100%;
  height: 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -30%;
  margin-left: -5%;
}

.container p {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 5% 3% 3% 3%;
}

.container h2 {
  /*background-color: rgba(0,0,0, 0.4); */
  color: white;
  border-bottom: 1px solid white;
  padding: 5% 3% 3% 3%;
}

.info {
  margin-left: 25%;
  width: 60%;
  margin-top: -10%;
  text-align: center;
  z-index: inherit;

}

.info h2 {
  background-color: rgba(0, 0, 0, 0.4);
}

.bg {
  background-image: url("~/assets/background.jpg");
  background-size: cover;
  background-position-y: 1000px;
  filter: blur(2px);
  height: 79vh;
  z-index: -2;
}

@media(max-width: 500px) {

  .container {
    width: 100vw;
    height: 50%;
    top: 45vh;
    font-size: 1vh;
    position: absolute;
    display: flex;

  }

  .bg {
    background-size: 300vw, 90vh;
    background-repeat: no-repeat;
    background-position: right 10%;
  }

  img {
    height: 0;
    visibility: hidden;
  }

  .info {
    width: 100vw;
    height: 80%;
    margin: 0;
  }

  h2 {
    font-size: 2em;
  }

  .info p {
    height: 90%;
    margin: 0;
  }

  ul {
    width: 100%;
    height: 34vh;
    padding: 0;
    margin: 0;
  }
}

@media (min-width: 1200px) {
  .bg {
    background-size: 100vw, 80vh;
    height: 85vh;
  }

  .container {
    width: 100%;
    margin-top: -50%;

  }

  img {
    margin-top: 45%;
    height: 70%;
    width: auto;
  }

  ul {
    width: 80%;
    height: 80%;
  }

  .info {
    width: 80%;
    margin-left: -3%;
  }

  .info p {
    width: 100%;
  }

  .info h2 {
    width: 100%;
  }

  @media (min-width: 1800px) {
    .bg {
      height: 79vh;
    }

    .container {
      margin-top: -30%;
      margin-left: -5%;
      width: 100%;
      height: 60%;
    }

    img {
      height: 110%;
      margin-left: 20%;
      margin-top: 0%;
    }

    ul {
      z-index: inherit;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      padding: 5% 3% 10% 3%;
      width: 60%;
      margin-top: -10%;
      margin-right: 10%;
    }
  }
}
</style>
