<template lang="html">

  <section class="src-components-listar">
     <h1>Registros <b-badge variant="primary">{{cantidad}}</b-badge></h1>


    <b-table-simple>
        <b-thead>
          <b-th>ID</b-th>
          <b-th>Usuario</b-th>
          <b-th>Nombre</b-th>
          <b-th>Descripcion</b-th>
          <b-th>Price</b-th>
          <b-th></b-th>
          <b-th></b-th>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(registro, index) in data" v-bind:key="registro.index">
              <b-td>{{index}}</b-td>
              <b-td>
                    <b-form-input v-model="registro.username" size="lg" disabled></b-form-input>
              </b-td>
              <b-td>
                    <b-form-input v-model="registro.name" size="lg"></b-form-input>
              </b-td>
              <b-td>
                    <b-form-input v-model="registro.description" size="lg"></b-form-input>
              </b-td>
              <b-td>
                    <b-form-input v-model="registro.price" size="lg"></b-form-input>
              </b-td>
              
              <b-td>
                <b-button type="button" @click="del(index)" variant="danger"><b-icon icon="trash"></b-icon></b-button>
              </b-td>
              <b-td>
                <b-button type="button" @click="edit()" variant="success"><b-icon icon="check-square"></b-icon></b-button>
              </b-td>
          </b-tr>

        </b-tbody>
    </b-table-simple>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-listar',
    props: ['data', 'cantidad'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      del(index){
        this.data.splice(index,1);
        localStorage.setItem('dataA', JSON.stringify(this.data));
        this.$emit('update', this.data.length);
      },
      edit(){
        localStorage.setItem('dataA', JSON.stringify(this.data));
        this.$emit('update', this.data.length);
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-listar {

  }
</style>
