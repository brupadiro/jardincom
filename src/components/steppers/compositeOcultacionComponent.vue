<template>
    <v-card>
        <v-card-title class="font-weight-bold">
            Tipo de composite
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col class="col-12 col-md-6">
                    <v-card v-ripple class="rounded-lg" elevation="6" @click="search_composite.subtype='Trenzado'">
                        <v-list-item>
                            <v-list-item-content>
                                <h3>
                                    Trenzado
                                </h3>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn fab elevation="3" small class="success" icon>
                                    <v-icon color="white">mdi-arrow-right</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col class="col-12 col-md-6">
                    <v-card v-ripple class="rounded-lg" elevation="6" @click="search_composite.subtype='Liso'">
                        <v-list-item>
                            <v-list-item-content>
                                <h3>
                                    Liso
                                </h3>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn fab elevation="3" small class="success" @click="search_composite.subtype='Liso'"
                                    icon>
                                    <v-icon color="white">mdi-arrow-right</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
        <v-expand-transition>
            <div v-if="search_composite.subtype!=null">
                <v-divider></v-divider>
                <v-card-title class="font-weight-bold">
                    Color
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="col-12 col-md-4">
                            <colorComponent color="#383e42" @click.native="setColor('Marron')">Marron</colorComponent>
                        </v-col>
                        <v-col class="col-12 col-md-4">
                            <colorComponent color="#383e42" @click.native="setColor('Gris antracita (RAL 7016)')">Gris
                                antracita</colorComponent>
                        </v-col>
                        <v-col class="col-12 col-md-4">
                            <colorComponent color="#383e42" @click.native="setColor('Gris cuarzo (RAL 7039)')">Gris
                                cuarzo</colorComponent>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" large class="rounded-lg font-weight-bold"
                        @click="$emit('search',search_composite)" v-if="search_composite.color!=null">
                        Continuar &nbsp;<v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>

</template>

<script>
    import colorComponent from '@/components/steppers/colorComponent.vue';
    export default {
        components: {
            colorComponent
        },
        data() {
            return {
                search_composite: {
                    subtype: null,
                    color: null
                }
            }
        },
        methods: {
            setColor(color) {
                this.search_composite.color = color
            }
        }
    }
</script>

<style>

</style>