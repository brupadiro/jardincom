<template>
    <v-row class="pa-3">
        <v-col class="col-12">
            <h2>Tipo de instalacion</h2>
        </v-col>
        <v-col class="col-md-6 col-12">
            <instalacionCardComponent @click.native="selectInstalation('soterrado')" image="soterrado.jpg">Soterrado</instalacionCardComponent>
      </v-col>
        <v-col class="col-md-6 col-12">
            <instalacionCardComponent @click.native="selectInstalation('pletina')" image="pletina.jpg">Pletina</instalacionCardComponent>
        </v-col>
    </v-row>

</template>

<script>
    import instalacionCardComponent from '@/components/steppers/instalacion/cardComponent.vue'
    export default {    
        components:{
            instalacionCardComponent,
        },
        methods:{
            selectInstalation(type){
                this.$emit('instalacion',type)
            }
        }
    }
</script>

<style>

</style>