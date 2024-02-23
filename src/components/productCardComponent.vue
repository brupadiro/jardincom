<template>
    <v-card class="rounded-lg" outlined>
        <div v-if="isMobile">

        </div>
        <div>
            <v-list dense class="pa-0">
                <v-list-item>
                    <v-list-item-avatar size="80" rounded>
                    <v-img :src="product.img" contain height="80"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                    <h3 class="font-weight-bold black--text">{{ product.name }}</h3>
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2 py-2">
                    <v-chip label class="font-weight-bold elevation-3"  small color="info">
                        CANTIDAD:{{ product.cant }}
                    </v-chip>
                    <v-chip label class="font-weight-bold ml-2 elevation-3" small color="success">
                        € {{ product.price  | roundPrice }} C/U
                    </v-chip>
                </v-list-item-subtitle>


                </v-list-item-content>
                <v-list-item-action-text class="font-weight-bold text-center">
                    <v-chip  class="font-weight-bold ml-2 d-flex elevation-3 justify-center text-subtitle-1" color="success" style="width:150px;">
                        € {{ product.price*product.cant | roundPrice  }}
                    </v-chip>
                </v-list-item-action-text>

            </v-list-item>
            </v-list>

        </div>
    </v-card>
</template>

<script>
    export default {
        filters:{
            roundPrice(price){
                price = price*1.22
                    return parseFloat(price).toFixed(2)
            }
        },
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        computed:{
            isMobile(){
                return this.$vuetify.breakpoint.name === 'xs'
            }
        }
    }
</script>

<style>

</style>