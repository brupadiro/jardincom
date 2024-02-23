<template>
    <v-card v-ripple class="rounded-lg" elevation="6">
        <v-list-item>
            <v-list-item-content>
                <h3><slot></slot></h3>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn fab elevation="3" small class="success" icon>
                    <v-icon color="white">mdi-arrow-right</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>

    </v-card>
</template>

<script>
    export default {

    }
</script>

<style>

</style>