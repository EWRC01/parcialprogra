<template lang="html">

  <section class="src-components-perfil">
    <Header></Header>
     <section class="src-components-perfil container">
    <h1>Usuario: {{usuario}}</h1>
    <b-card-group deck class="p-3 mb-4">
        
        <b-card bg-variant="light">
          <h2>Cambiar clave</h2>
          <b-form>                  
            <b-form-group label="Password:" description="Escriba la clave">
              <b-form-input v-model="pass" type="password" placeholder="*****" required></b-form-input>
            </b-form-group>
                              
            <b-form-group label="Confirmar Password:" description="Confirmar clave">
              <b-form-input v-model="confirmarPass" type="password" placeholder="*****" required></b-form-input>
            </b-form-group>           
            
            <b-button variant="success" @click="resetPassword">Cambiar clave</b-button>
            
          </b-form>
        </b-card>
    </b-card-group>
    </section>
  </section>

</template>

<script lang="js">
import Header from "./Header.vue";
import firebase from 'firebase/app';
import 'firebase/auth';

  export default  {
    name: 'src-components-perfil',
    components: {
      Header
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        pass:'',
        confirmarPass:'',
        usuario: firebase.auth().currentUser.email

      }
    },
    methods: {
      resetPassword(){
        var user = firebase.auth().currentUser;

        if(this.pass != this.confirmarPass) {
          alert("Las claves no coinciden");
          this.pass='',
          this.confirmarPass=''
        }else{
          user.updatePassword(this.pass).then(function() {
            alert("Se ha cambiado la clave con exito!");
            
          }).catch(function(error) {
            alert(error.message)
            
          });
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-perfil {

  }
</style>
