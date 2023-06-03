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
.footerContainer p{
  z-index: 5;
}
</style>
