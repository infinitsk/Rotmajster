<script setup>
  const vypis=() =>{
    console.log("fungujem")
  }
</script>

<template>
      <div class="menu">
        <NuxtLink class="linkLogo" to="/">
          <img src="~/assets/logo.png" alt="Logo sa nenašlo">
        </NuxtLink>
        <div class="linky">
          <NuxtLink class="link" to="/">Domov</NuxtLink>
          <NuxtLink class="link" to="zivotopis">Životopis</NuxtLink>
          <NuxtLink class="link" to="hobby">Hobby</NuxtLink>
        </div>
      </div>
</template>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
button{
  background-color: black;
  border: none;
  border-radius: 5px;
  width: 15%;
  font-size: 1.5em;
  color: white;
  margin-top: -0.3%;
  padding-top: 0.8%;
  border-bottom: 3px gold solid;
  border-left: 3px gold solid;
  border-right: 3px gold solid;
}
.menu{
  background-color: black;
  display: flex;
  flex-wrap: nowrap, row;
  width: 100%;
  height: 5%;
  text-align: center;

  border-bottom: 3px gold solid;
}

.linky{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px white solid;
  border-left: 1px white solid;
  border-block-start: 50%;
  color: white;
  width: 90%;
  font-size: 2em;
}
.link{
  color: white;
  text-decoration: none;
  padding: 1%;
  height: 10%;
}
.linkLogo{
  width: 10%;
}
@media (max-width: 500px){
  .linkLogo{
    width: 25%;
  }
  .linky{
    height: 100%;
    width: 100vw;
    font-size: 1em;
  }
  .menu{
    height: 110%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
  }
}
</style>
