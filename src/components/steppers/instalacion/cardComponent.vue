<template>
    <v-card>
        <div v-if="!isMobile">
            <v-list-item>
                <v-list-item-avatar size="100">
                    <v-img :src="`${$mainRoute}/${image}`" width="100%" cover height="100"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <h3><slot></slot></h3>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn fab elevation="3" class="success" icon>
                        <v-icon color="white">mdi-arrow-right</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </div>
        <div v-else>
            <v-list-item>
                <v-list-item-avatar size="100">
                    <v-img :src="`${$mainRoute}/${image}`" width="100%" cover height="100"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <h3><slot></slot></h3>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn block color="success"  class="font-weight-bold">Seleccionar&nbsp;<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
    export default {
        props:{
            image:{
                type:String,
                required:true,
            },
        },
        computed: {
            isMobile() {
                return this.$vuetify.breakpoint.name === 'xs'
            }
        }
    }
</script>

<style>

</style>