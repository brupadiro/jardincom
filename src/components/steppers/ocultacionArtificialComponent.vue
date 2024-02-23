<template>
    <v-card>
        <v-card-title class="font-weight-bold">
            Seleccione el tipo
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col class="col-12 col-md-4">
                    <v-card width="100%" height="150" v-ripple>
                        <v-img :src="`${$mainRoute}/ocultaciones/malla.jpg`"
                            @click="setSearch({type:'Malla de ocultación PVC'})"
                            contain height="150" width="100%">
                            <div style="width:100;height:100%">
                                <span class="ocultation-title">Malla de ocultación PVC</span>
                            </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col class="col-12 col-md-4">
                    <v-card width="100%" height="150" v-ripple>
                        <v-img :src="`${$mainRoute}/ocultaciones/brezo.jpg`"
                            @click="setSearch({type:'Brezo natural'})" contain
                            height="150" width="100%">
                            <div style="width:100;height:100%">
                                <span class="ocultation-title">Brezo natural</span>
                            </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col class="col-12 col-md-4">
                    <v-card width="100%" height="150"
                        @click="setSearch({type:'Seto artificial GREEN BOLD'})"
                        v-ripple>
                        <v-img :src="`${$mainRoute}/ocultaciones/seto.jpg`" contain height="150" width="100%">
                            <div style="width:100;height:100%">
                                <span class="ocultation-title">Seto artificial GREEN BOLD</span>
                            </div>
                        </v-img>

                    </v-card>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        methods: {
            setSearch(q) {
                this.$emit('search', q)
            }
        }
    }
</script>

<style>

</style>