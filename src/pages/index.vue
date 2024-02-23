<template>
    <v-container fluid>
        <v-expand-transition>

        <v-row v-if="search.type==null">
            <v-col class="col-12">
                <v-toolbar color="gradient-primary" class="full-width rounded-lg title">
                    Elige el tipo de valla
                </v-toolbar>
            </v-col>
            <v-col class="col-md-6 col-12">
                <v-card min-height="230" class="d-flex flex-column">
                    <v-row no-gutters>
                        <v-col class="col-12 col-md-5">
                            <v-img :src="`${$mainRoute}/metalico.jpg`" cover height="100%" width="100%"></v-img>
                        </v-col>
                        <v-col class="col-12 col-md-7 pa-3 d-flex justify-space-between flex-column">
                            <div>
                                <h4 class="font-weight-bold">Configurador de vallas metálicas</h4>
                            <p class="text-body-2">¡Podrás escoger el tipo de ocultación, altura del panel, modo de instalación y largo para obtener el precio final de tu cerramiento entregado directamente en casa!
Nuestros PACKS son sinónimo de calidad, diseño y garantía. </p>

                            </div>
                            <v-btn color="success" style="flex:none" block  @click="selectGridType('rigida')" class="font-weight-bold"><v-icon>mdi-arrow-right</v-icon>Empezar</v-btn>

                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col class="col-md-6 col-12">
                <v-card min-height="230" class="d-flex flex-column">
                    <v-row no-gutters>
                        <v-col class="col-12 col-md-5">
                            <v-img :src="`${$mainRoute}/composite.jpg`" cover height="100%"  width="100%"></v-img>
                        </v-col>
                        <v-col class="col-12 col-md-7 pa-3 d-flex justify-space-between flex-column">
                            <div>
                                <h4 class="font-weight-bold text-subtitle-1">Configurador paneles Composite COST. </h4>
                            <p class="text-body-2">Te presentamos una opción innovadora y exclusiva de cerramientos ocultos. Paneles de lamas composite que junto con los elementos COST forman estos fantásticos paneles de ocultación.
Disponible en varios colores, alturas y accesorios, te encantarán estos paneles decorativos para jardines.</p>

                            </div>
                            <v-btn color="success" block style="flex:none"  @click="selectGridType('composite')" class="font-weight-bold"><v-icon>mdi-arrow-right</v-icon>Empezar</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        </v-expand-transition>
        <v-expand-transition>

        <v-row v-if="search.type!=null">
            <v-col class="col-12" v-if="search.type !='composite'">
                <grillaRigidaStepperComponent @search="searchProducts"></grillaRigidaStepperComponent>
            </v-col>
            <v-col class="col-12" v-else>
                <compositeStepperComponent  @search="searchProducts"></compositeStepperComponent>
            </v-col>
            <v-col class="col-12">
                <v-btn block color="info" class="rounded-lg font-weight-bold" @click="composite = null">
                <v-icon>mdi-arrow-left</v-icon>&nbsp;Volver
                </v-btn>
            </v-col>
        </v-row>
        </v-expand-transition>  
    </v-container>
</template>
<script>
    import grillaRigidaStepperComponent from '@/components/grillaRigidaStepperComponent.vue';
    import compositeStepperComponent from '@/components/compositeStepperComponent.vue';
    export default {
        name: 'indexPage',
        components:{
            grillaRigidaStepperComponent,
            compositeStepperComponent
        },
        data() {
            return {
                e1: 1,
                search:{
                    type:null
                }
            }
        },
        mounted(){
            if(this.$route.query.q) {
                this.search.type = JSON.parse(this.$route.query.q).type
                }

        },
        methods:{
            selectGridType(type){
                this.search.type = null 
                setTimeout(() => {
                    this.search.type = type 
                }, 500);
            },
                searchProducts(q){
                    let search = JSON.stringify({
                        ...this.search,
                        ...q
                    })
                    console.log(search)
                    this.$router.push({name:'/cart',query:{q:search}})
                }
            }


    }
</script>

<style lang="scss">
    .card-width {
        width: 200px;
    }

    .title {
        height: 64px;
        font-family: 'Fira Sans', sans-serif;
        color: white !important;
        font-weight: 800 !important;

    }

    .gradient-primary {
        background: linear-gradient(180deg, #695d53, #a77d31bf)
    }

    .theme--light.v-stepper .v-stepper__header .v-divider {
        border-width: 3px;
        border-radius: 5px;

    }
</style>