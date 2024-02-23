<template>
    <div>

        <v-toolbar  color="gradient-primary" class="full-width rounded-lg title mb-4">
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-center white--text font-weight-bold">Grilla rigida</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>
        <v-card>
            <v-stepper v-model="e1" alt-labels class="rounded-lg">
                <v-stepper-header class="elevation-0">
                    <v-stepper-step :complete="e1 > 1" step="1">Instalacion</v-stepper-step>

                    <v-divider :class="isActive(e1 > 1)"></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">Altura</v-stepper-step>
                    <v-divider :class="isActive(e1 > 2)"></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3">N de angulos</v-stepper-step>
                    <v-divider :class="isActive(e1 > 3)"></v-divider>
                    <v-stepper-step :complete="e1 > 4" step="4">Largo</v-stepper-step>
                    <v-divider :class="isActive(e1 > 4)"></v-divider>
                    <v-stepper-step :complete="e1 > 5" step="5">Ocultacion</v-stepper-step>
                    <v-divider :class="isActive(e1 > 5)"></v-divider>
                    <v-stepper-step :complete="e1 > 6" step="6">Color de la valla</v-stepper-step>
                    <v-divider :class="isActive(e1 > 6)"></v-divider>
                    <v-stepper-step step="6">Longitud</v-stepper-step>
                </v-stepper-header>
                <v-divider></v-divider>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <instalacionComponent @instalacion="($e)=>{
                    this.search.instalacion = $e
                    e1 = 2
                }"></instalacionComponent>
                    </v-stepper-content>

                    <v-stepper-content step="2" class="my-4">
                        <v-row class="pa-3">
                            <v-col class="col-12">
                                <h2>Altura de la valla</h2>

                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1 Metros')">1m
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.53 Metros')">1.53m
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.73 Metros')">1.73m
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.93 Metros')">1.93m
                                </alturaComponent>
                            </v-col>
                        </v-row>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="grey lighten-3">
                            <v-card-text>
                                <v-row>
                                    <v-col class="col-12">
                                        <v-input>
                                            <v-text-field type="number" v-model="search.angles" outlined
                                                background-color="white" hide-details label="N de angulos"
                                                class="rounded-r-0">
                                            </v-text-field>
                                            <v-btn large height="56" @click="e1++"
                                                :disabled="search.angles == undefined"
                                                color="gradient-primary font-weight-bold rounded-lg white--text rounded-l-0">
                                                VALIDAR
                                            </v-btn>
                                        </v-input>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-stepper-content>
                    <v-stepper-content step="4" class="my-4">
                        <v-row class="pa-3">
                            <v-col class="col-12">
                                <h2>Largo de la valla</h2>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12" v-if="buscarAlturaTerminada() == '1.93 Metros'">
                                <alturaComponent @click.native="setAttribute('Largo', '2.5')">2.5 Metros
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12" v-if="buscarAlturaTerminada() == '1 Metros' || buscarAlturaTerminada() == '1.53 Metros'">
                                <alturaComponent @click.native="setAttribute('Largo', '2')">2 Metros
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12" v-if="buscarAlturaTerminada() == '1 Metros' || buscarAlturaTerminada() == '1.53 Metros'">
                                <alturaComponent @click.native="setAttribute('Largo', '2.5')">2.5 Metros
                                </alturaComponent>
                            </v-col>
                        </v-row>
                    </v-stepper-content>

                    <v-stepper-content step="5">
                        <v-row>
                            <v-col class="col-12">
                                <h2 class="text-center">Tipo de ocultacion</h2>
                            </v-col>
                            <v-col class="col-12 col-md-3 d-flex justify-center">
                                <v-card width="150" height="150" @click="setExtraSearch({type:null})">
                                    <v-img :src="`${$mainRoute}/ocultaciones/sin-ocultacion.jpg`" cover height="150"
                                        width="150">
                                        <div style="width:100;height:100%">
                                            <span class="ocultation-title">Sin ocultacion</span>
                                        </div>
                                    </v-img>

                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-md-3 d-flex justify-center">
                                <v-card width="150" height="150"
                                    @click="setExtraSearch({type:'Madera'}, false)">
                                    <v-img :src="`${$mainRoute}/ocultaciones/madera.jpg`" cover height="150"
                                        width="150">
                                        <div style="width:100;height:100%">
                                            <span class="ocultation-title">Madera</span>
                                        </div>
                                    </v-img>

                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-md-3 d-flex justify-center">
                                <v-card width="150" height="150"
                                    @click="setExtraSearch({type:'Malla de ocultacion'}, false)">
                                    <v-img :src="`${$mainRoute}/ocultaciones/malla.jpg`" cover height="150" width="150">
                                        <div style="width:100;height:100%">
                                            <span class="ocultation-title">Malla de ocultacion</span>
                                        </div>
                                    </v-img>

                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-md-3 d-flex justify-center">
                                <v-card width="150" height="150"
                                    @click="setExtraSearch({type:'composite'}, false)">
                                    <v-img :src="`${$mainRoute}/ocultaciones/composite.jpg`" cover height="150"
                                        width="150">
                                        <div style="width:100;height:100%">
                                            <span class="ocultation-title">Composite</span>
                                        </div>
                                    </v-img>

                                </v-card>
                            </v-col>

                        </v-row>
                        <v-row class="pa-3" v-if="search.extra_search.type=='Madera'">
                            <v-col class="col-12">
                                <h2>Largo de la valla de ocultacion</h2>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent  @click.native="setExtraSearch({'Largo Propuesto': '2'},true)">2 Metros
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setExtraSearch({'Largo Propuesto': '2.5'}, true)">2.5 Metros
                                </alturaComponent>
                            </v-col>
                        </v-row>

                        <div class="py-4">
                            <v-expand-transition>
                                <compositeOcultacionComponent v-if="search.extra_search.type=='composite'" @search="setSearch($event)"></compositeOcultacionComponent>
                            </v-expand-transition>

                            <v-expand-transition>
                                <ocultacionArtificialComponent  v-if="search.extra_search.type=='Malla de ocultacion'" @search="setSearch($event)"></ocultacionArtificialComponent>
                            </v-expand-transition>

                        </div>

                    </v-stepper-content>



                    <v-stepper-content step="6">
                        <v-row>
                            <v-col class="col-12">
                                <h3>Color de la valla</h3>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <colorComponent color="green" @click.native="setAttribute('Color','Verde (RAL 6005)')">
                                    Verde
                                </colorComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <colorComponent color="#383e42"
                                    @click.native="setAttribute('Color','Gris antracita (RAL 7016)')">Gris antracita
                                </colorComponent>
                            </v-col>

                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <v-row>
                            <v-col class="col-12">
                                <h2>Longitud(En Metros)</h2>
                            </v-col>
                        </v-row>
                        <v-card class="grey lighten-3">
                            <v-card-text>
                                <v-row>
                                    <v-col class="col-12">
                                        <v-text-field v-model="search.longitud" type="number" outlined
                                            background-color="white" hide-details placeholder="En CM"
                                            label="Longitud de la cerca"></v-text-field>
                                    </v-col>
                                </v-row>

                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn large block @click="searchProducts()"
                                    color="gradient-primary font-weight-bold rounded-lg white--text">
                                    VALIDAR PEDIDO<v-icon>mdi-cart</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
            <v-card-actions class="d-flex justify-center">
                <v-btn fab @click="e1--" :disabled="e1==1">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    import alturaComponent from '@/components/steppers/alturaComponent.vue'
    import instalacionComponent from '@/components/steppers/instalacion/component.vue'
    import compositeOcultacionComponent from '@/components/steppers/compositeOcultacionComponent.vue'
    import ocultacionArtificialComponent from '@/components/steppers/ocultacionArtificialComponent.vue'
    import colorComponent from '@/components/steppers/colorComponent.vue';
    export default {
        components: {
            colorComponent,
            alturaComponent,
            instalacionComponent,
            compositeOcultacionComponent,
            ocultacionArtificialComponent
        },
        data() {
            return {
                e1: 1,
                search: {
                    longitud: 0,
                    conditions: [],
                    extra_search: {}
                }
            }
        },
        mounted() {
            this.checkSearch()
        },
        methods: {
            checkSearch(){
                if(this.$route.query.q) {
                    this.search = JSON.parse(this.$route.query.q)
                    this.e1 = 7
                }
            },
            setSearch(e) {
                this.search.extra_search = {...this.search.extra_search,...e}
                this.e1++;

            },
            isActive(value) {
                return value ? 'success' : ''
            },
            setAttribute(attribute, value) {
                this.search.conditions.push({
                    group_name: attribute,
                    attribute_name: value
                })
                this.e1++
            },
            setExtraSearch(val, cont = true) {
                this.search.extra_search = {...this.search.extra_search,...val}
                if (cont)
                    this.e1++
            },
            searchProducts() {
                this.$emit('search', this.search)
            },
            buscarAlturaTerminada() {
                return this.search.conditions.find(condition => condition.group_name === 'Altura terminada')?.attribute_name
            },
        },
        computed: {

        }

    }
</script>

<style>
    .ocultation-title {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        background: #0000009e;
        color: white;
        text-align: center;
        font-weight: bold;
    }

    .v-stepper__wrapper {
        padding: 10px !important;
    }
</style>