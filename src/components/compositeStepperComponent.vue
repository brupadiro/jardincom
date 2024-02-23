<template>
    <div>
        <v-toolbar color="gradient-primary" class="full-width rounded-lg title mb-4">
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-center white--text font-weight-bold">Composite</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
            <v-stepper v-model="e1" alt-labels>
                <v-stepper-header class="elevation-0">
                    <v-stepper-step :complete="e1 > 1" step="1">Instalacion</v-stepper-step>
                    <v-divider :class="isActive(e1 > 1)"></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2">Altura</v-stepper-step>
                    <v-divider :class="isActive(e1 > 2)"></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3">N de angulos</v-stepper-step>
                    <v-divider :class="isActive(e1 > 3)"></v-divider>
                    <v-stepper-step :complete="e1 > 4" step="3">Color</v-stepper-step>
                    <v-divider :class="isActive(e1 > 4)"></v-divider>
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

                    <v-stepper-content step="2">
                        <v-row class="pa-3">
                            <v-col class="col-12">
                                <h2>Altura de la valla</h2>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.23 m')">1.23 m
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.53 m')">1.53 m
                                </alturaComponent>
                            </v-col>
                            <v-col class="col-md-4 mb-4 col-12">
                                <alturaComponent @click.native="setAttribute('Altura terminada', '1.93 m')">1.93 m
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

                    <v-stepper-content step="4">
                        <v-row>
                            <v-col class="col-12">
                                <h2>Color</h2>
                            </v-col>
                            <v-col class="col-12 col-md-3">
                                <v-card elevation="6" width="100%" class="rounded-lg"
                                    @click="setAttribute('Color','Gris antracita (RAL 7016)')">
                                    <v-card-text class="d-flex justify-center align-center">
                                        <v-img src="/grisa.png" width="100%" contain></v-img>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-title class="text-center font-weight-bold">
                                        Gris antracita<v-spacer></v-spacer>
                                        <v-btn small color="success" fab>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>
                                    </v-card-title>
                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-md-3">
                                <v-card elevation="6" width="100%" class="rounded-lg"
                                    @click="setAttribute('Color','Gris cuarzo (RAL 7039)')">
                                    <v-card-text class="d-flex justify-center align-center">
                                        <v-img src="/grisc.png" width="100%" contain></v-img>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-title class="text-center font-weight-bold">
                                        Gris cuarzo<v-spacer></v-spacer>
                                        <v-btn small color="success" fab>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <v-row>
                            <v-col class="col-12">
                                <h2>Longitud (en centrimetros) de la valla</h2>
                            </v-col>
                        </v-row>
                        <v-card class="grey lighten-3">
                            <v-card-text>
                                <v-row>
                                    <v-col class="col-12">
                                        <v-text-field outlined v-model="search.longitud" background-color="white"
                                            hide-details placeholder="En centimetros" label="Longitud de la cerca">
                                        </v-text-field>
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
            <v-card-actions>
                <v-btn fab @click="e1--" :disabled="e1==1">
                    <v-icon>mdi-angle-left</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>
    import instalacionComponent from '@/components/steppers/instalacion/component.vue'
    import alturaComponent from '@/components/steppers/alturaComponent.vue'
    export default {
        components: {
            alturaComponent,
            instalacionComponent,
        },
        data() {
            return {
                e1: 1,
                search: {
                    longitud: 0,
                    angles: 0,
                    conditions: [],
                }

            }
        },
        methods: {
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
            searchProducts() {
                console.log(this.search)
                this.$emit('search', this.search)
            }

        }

    }
</script>

<style lang="scss">
    @media(max-width: 768px) {
        .v-stepper__content{
            padding: 0 !important;
        }
        .v-stepper--alt-labels {
            .v-stepper__step {
                flex-basis: 150px !important;
            }
        }
    }
</style>