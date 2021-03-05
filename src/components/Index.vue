<template lang="html">

  <section class="src-components-index">


    <Header/>
    <section class="src-components-index container">
    <h1>Hola {{usuario}} Registra un nuevo producto</h1>
    <hr>
    <b-card-group>
        
        <b-card bg-variant="danger" text-variant="white" title="Nuevo Registro">
          <b-form>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Usuario:</label>
                </b-col>
                <b-col sm="10">
                 <b-form-input v-model="username" placeholder="Usuario Logeado" v-text="usuario" disabled></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Nombre:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input v-model="name" placeholder="Nombre del producto"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Descripcion:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input v-model="description" placeholder="Descripcion del producto"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Precio:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input v-model="price" placeholder="Precio del producto"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">               
                <b-col sm="10">
                  <b-button type="button" variant="success" @click="add()">Registrar</b-button>
                  <b-button type="reset" variant="warning">Limpiar</b-button>
                </b-col>
            </b-row>
          </b-form>
          </b-card>
          <hr>
         
          </b-card-group>
           <b-card bg-variant="dark" text-variant="white" header-tag="header" footer-tag="footer">          
          <b-card-text><Listar :cantidad="cantidad" :data="data" @update="updateCount" /></b-card-text>        
        </b-card>
    </section>
  </section>

</template>

<script lang="js">
import Header from "../components/Header.vue";
import firebase from 'firebase'
import Listar from '../components/Listar.vue'

  export default  {
    name: 'src-components-index',
    components:{
      Header,
      Listar
    },
    props: [],
    mounted () {

    },
    data () {
      return {
         usuario: firebase.auth().currentUser.email,
         username: firebase.auth().currentUser.email,
         name:'',
         description:'',
         price:'',
         data:[],
         cantidad:0

      }
    },
    methods: {
      add() {
        this.data.push({
          username:this.username, name:this.name, description:this.description, price:this.price
        });
        //Enviar el rango
        localStorage.setItem('datA', JSON.stringify(this.data));
        this.cantidad= this.data.length;
      },
      updateCount(value){
        this.cantidad=value;
      }

    },
    computed: {

    },
    created() {
      let dataA= JSON.parse(localStorage.getItem('dataA'));
      if(dataA===null) {
        this.data=[];
      } else{
        this.data=dataA;
        this.cantidad=this.data.length;
      }
    }
}


</script>

<style scoped lang="scss">
  .src-components-index {

  }
</style>
