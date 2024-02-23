<template>
    <v-card elevation="6" width="100%" class="rounded-lg" v-ripple>
        <v-list-item>
            <v-list-item-avatar>
                <v-icon size="44" :color="color">mdi-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-bold">
                    <slot></slot>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-card>

</template>

<script>
    export default {
        props:{
            color:{
                type:String,
                required:true
            }
        }
    }
</script>

<style>

</style>