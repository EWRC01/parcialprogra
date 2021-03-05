<template>
  <div class="about">

    <Header/>
    <div class="mt-3 container">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Alumno" class="text-center">
        <b-card-text>Edwin Wilfredo Rodriguez Cabrera</b-card-text>
      </b-card>

      <b-card bg-variant="warning" text-variant="white" header="Alumno" class="text-center">
        <b-card-text>Hersson Alexander Martinez Rios</b-card-text>
      </b-card>

      <b-card bg-variant="danger" text-variant="white" header="Alumno" class="text-center">
        <b-card-text>Stefany Jaclyn Moreria Bernal</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  </div>
</template>
<script>

import Header from "../components/Header.vue";
export default {
  components:{
    Header
  }
}
</script>