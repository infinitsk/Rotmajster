<script setup></script>

<template>
  <div>
    <NuxtLayout name="custom">
    <div class="bg"></div>
    <div class="content">
      <div class="container">
        <h1>Vitajte</h1><br>
        <h2>na mojej stránke 👋</h2>
      </div>
    </div>
    </NuxtLayout>

  </div>
</template>

<style scoped>

h1{
  font-size: 5em;
}
h2{
  font-size: 3em;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -42%;
  background-color: rgba(255, 255, 255, 0.7);
  width: 40%;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
  z-index: 3;
}
.bg{
  background-image: url("~/assets/background.jpg");
  background-size: cover;
  background-position-y: -100px;
  background-repeat: no-repeat;
  filter: blur(2px);
  height: 77vh;
  z-index: -2;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 100%;
  height: 100%;
}/*
@media(max-width: 500px){

  .content{
    position: fixed;
    top: 10%;
    overflow: hidden ;
  }
  .container{
    width: 75%;
  }
  h1{
    font-size: 5em;
  }
  h2{
    font-size: 2em;
  }
  .bg{
    height: 100vh;
  }
}*/
</style>
