<script lang="ts" setup></script>

<template>
  <footer>
    <div class="obrazky">
      <NuxtLink to="kontakt">
        <img src="~/assets/mail.png" alt="E-mail Logo">
      </NuxtLink>
      <NuxtLink to="https://www.instagram.com/peter__rothmajer/">
        <img src="~/assets/ig.png" alt="IG Logo">
      </NuxtLink>
      <NuxtLink to="https://www.facebook.com/profile.php?id=100008700930381">
        <img src="~/assets/fb.png" alt="FB Logo">
      </NuxtLink>
    </div>

    <div class="footerContainer">
      <p class="footer">Made by Peter Rothmajer 3.B</p>
    </div>
  </footer>
</template>

<style scoped>
p {
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%;
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
  padding-top: 1%;
  padding-bottom: 1%;
}

.obrazky {
  display: flex;
  flex-direction: row-reverse;
  right: 1%;
  position: absolute;
  bottom: 8%;
}

.obrazky img {
  width: 100%;
}

.obrazky a {
  width: 4%;
  margin-right: 0.5%;
}

.footerContainer {
  display: flex;
  z-index: 5;
}

.footerContainer p {
  z-index: 5;
}

@media (max-width: 500px) {
  p {
    bottom: 0%;
    padding-bottom: 6%;
    padding-top: 6%;
  }

  .obrazky {
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 4%;
    padding-right: 3.5%;
  }

  .obrazky img {
    width: 300%;
  }
}

@media (min-width: 1200px) {
  p {
    padding-bottom: 2%;
    padding-top: 2%;
  }
}

@media (min-width: 1800px) {
  p {
    padding-top: 1%;
    padding-bottom: 1%;
  }
}</style>
