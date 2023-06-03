<script setup>
  let templaty = useTemplate();
  let template = reactive(templaty.template)
  let error = reactive(templaty.errory)
  let showError = reactive(2);
  console.table(error)
  const odosli = () => { 
    kontrola()
    if(error.meno==0 && error.priezvisko==0 && error.mail==0 && error.sprava==0){
      console.log("Odoslanie na firebase")
      showError=0
      template.meno="",
      template.priezvisko="",
      template.mail="",
      template.sprava=""
    }
    else{
      console.log("ne")
      showError=1
    }
  }
  const kontrola = () =>{
    //console.log(template)
    if(template.meno.trim()){
      error.meno=0
    }
    else{
      error.meno=1
    }
    if(template.priezvisko.trim()){
      error.priezvisko=0
    }
    else{
      error.priezvisko=1
    }
    if(template.mail.trim() && template.mail.includes("@")==true){
      error.mail=0
    }
    else{
      error.mail=1
    }
    if(template.sprava.trim()){
      error.sprava=0
    }
    else{
      error.sprava=1
    }
    console.table(error)
    console.log(showError)
  }
  //ani toto idk že čo s tým
  const skry = () =>{
    let hide= reactive(0)
    return hide
  }

</script>

<template>
  <div>
    <div class="bg"></div>
    <div class="messageContainer">
      <!--tie :class nejdu idk čo s tým a či to vobec riešiť či to nenechať len tak-->
      <div class="error" v-if="showError==1" :class="{invisible: skry()==0}">
        <h3>Zle si vyplnil formulár</h3>
        <p>Skús opraviť červené vstupy</p>
        <button @click="skry()">OK</button>
      </div>
      <div class="success" v-else-if="showError==0" :class="{invisible: skry()==0}">
        <h3>Úspešne odoslané</h3>
        <p>Správu si určite pozriem 😉</p>
        <button @click="skry()">OK ❤</button>
      </div>
    </div>
    <div class="content">
      <div class="form">
        <h1>Pošli mi E-mail:</h1>
        <input type="text" id="meno" placeholder="Meno" v-model="template.meno" :class="{chyba: error.meno==1}">
        <input type="text" id="priezvisko" placeholder="Priezvisko" v-model="template.priezvisko" :class="{chyba: error.priezvisko==1}">
        <input type="text" id="e-mail" placeholder="E-mail" v-model="template.mail" :class="{chyba: error.mail==1}">
        <label for="sprava">Správa</label>
        <textarea id="sprava" v-model="template.sprava" :class= "{chyba: error.sprava==1}"></textarea>
        <button @click="odosli()" id="send">Odošli</button>
      </div>
    </div>
    <spodok></spodok>
</div>
</template>

<style scoped>
.form button, input, textarea{
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.795);
  color: white;
  text-align: center;
}
.form button{
  height: 10%;
  width: 5%;
  margin-top: 3%;
}
input{
  margin-bottom: 1%;
  height: 7%;
  width: 30%;
}
textarea{
  resize: none;
  width: 70%;
  height: 40%;
  margin-top: 0.5%;
}
label{
  margin-top: 0.5%;
}
.bg{
  height: 95vh;
  background-image: url("~/assets/background.jpg");
  background-size: cover;
  filter: blur(5px);
  }
  .form {
  display: flex;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4); 
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  height: 30%;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.chyba{
  border: solid red 2px;
}
.error{
  z-index: 6;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15%;
  padding: 2% 4% 2% 4%;
  background-color: rgba(255, 0, 0, 0.5);
  color: white;
  border: 2px solid black;
}
.messageContainer{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  position: fixed;
  top: 5%;
  animation-name: animaciaMessagu;
  animation-duration: 5s;
  animation-timing-function: ease-out;
}
h3{
  z-index: inherit;
  text-align: center;
}
.error p{
  z-index: 6;
  text-align: center;
}
.success{
  z-index: 6;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15%;
  padding: 2% 4% 2% 4%;
  background-color: rgba(0, 255, 0, 0.5);
  color: white;
  border: 2px solid black;
}
.invisible{
  visibility: hidden;
}
#form{
  line-height: 10px;
}
#sprava{
  height: 30%;
}
#send{
  width: 15%;
  text-align: center;
}

@keyframes animaciaMessagu{
  0%   {top: -50%; opacity: 0;}
  25%  {top: 5%; opacity: 1;}
  75%  {top: 5%; opacity: 1;}
  100% {top: -50%; opacity: 0;}
}
</style>
