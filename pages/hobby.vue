<script lang="ts" setup></script>

<template>
  <title>Hobby</title>
  <NuxtLayout name="custom">
    <div class="bg"></div>
    <div class="contentContainer">
      <div class="content">
        <div class="text">
          <h1>👨‍🚒 Hasičstvo 🚒</h1>
          <p>Moje hlavné hobby je dobrovoľné hasičstvo, ktorému sa venujem už dobrých 9 rokov.</p>
        </div>
        <img src="~/assets/nalepkovo.jpg" alt="Fotka hasiči">
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
img {
  width: 70%;
  border: 6px solid white;
}

.bg {
  background-image: url("~/assets/background.jpg");
  background-size: cover;
  background-position-y: 1000px;
  filter: blur(2px);
  height: 75vh;
  z-index: -2;
}

.contentContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 0%;
  width: 100%;
  height: 80%;
}

.content {
  display: grid;
  grid-template-columns: auto auto;
}

.text {
  background-color: rgba(138, 138, 138, 0.507);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-left: 40%;
  padding: 0% 5% 0% 5%;
  color: white;
}

.text h1 {
  font-size: 2.4em;
}

.text p {
  font-size: 1.5em;
  text-align: center;
}

@media (max-width: 500px) {
  .bg {
    background-size: 400vw, 90vh;
    background-position-x: 40%;
    height: 78vh;
  }

  .content {
    margin-top: -40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contentContainer {
    height: 80vh;
  }

  .text {
    margin: 0;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }

  .text h1 {
    font-size: 2em;
  }

  .text p {
    font-size: 1em;
  }

  img {
    height: 25vh;
    width: auto;
  }
}

@media (min-width: 1200px) {
  .bg {
    background-size: 100vw, 80vh;
    height: 85vh;
  }

  .content {
    margin-top: -5%;
    margin-left: -22%;
  }

  .content img {
    width: 90%;
    height: auto;
  }

}

@media (min-width: 1800px) {

  .bg {
    background-image: url("~/assets/background.jpg");
    background-size: cover;
    background-position-y: 1000px;
    filter: blur(2px);
    height: 75vh;
    z-index: -2;
  }

  .content {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0;
  }

  .content img {
    width: 70%;
  }

}</style>
