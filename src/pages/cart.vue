<template>
    <v-container fluid>
        <v-row>
            <v-col class="col-12 col-md-8 col-sm-9">
                <v-row>
                    <v-col class="col-12">
                        <v-toolbar color="gradient-primary" class="full-width rounded-lg title">
                            Productos recomendados
                        </v-toolbar>

                    </v-col>
                    <template v-if="products.main_product.name">
                        <v-col class="col-12 col-md-12">
                            <productCardComponent :product="products.main_product"></productCardComponent>
                        </v-col>

                        <v-col class="col-12 col-md-12" v-for="product in products.products" :key="product.id">
                            <productCardComponent :product="product"></productCardComponent>
                        </v-col>
                    </template>
                    <template v-else>
                        <v-col class="col-12">
                            <v-alert icon="mdi-alert" color="yellow">El producto no se encuentra disponible</v-alert>
                        </v-col>
                    </template>
                </v-row>

            </v-col>

            <v-col class="col-12 col-md-4 col-sm-3">
                <v-card outlined class="rounded-lg">
                    <v-card-title class="font-weight-bold gradient-primary white--text">Tu configuracion</v-card-title>
                    <v-card-text class="d-flex justify-center align-center flex-column" v-if="!search.composite">
                        <v-img :src="`${$mainRoute}/rigide.jpeg`" contain height="200" width="200"></v-img>
                        <h3 class="black--text">Valla rigida</h3>
                    </v-card-text>
                    <v-card-text class="d-flex justify-center align-center flex-column" v-else>
                        <v-img :src="`${$mainRoute}/composite.jpg`" contain height="200" width="200"></v-img>
                        <h3 class="black--text">Composite</h3>
                    </v-card-text>

                    <v-card-text>
                        <ul>
                            <li class="black--text" v-for="(attribute,index) in search.product_attributes" :key="index">
                                {{ attribute.name }}: {{ attribute.value }}</li>
                            <li class="black--text">Longitud: {{search.longitud}}m</li>
                            <li class="black--text text-capitalize"><b>instalacion:</b> {{search.instalacion}}</li>
                            <li class="black--text text-capitalize" v-if="search.extra_search"><b>Ocultacion:</b>
                                {{search.extra_search.type}}
                            </li>
                        </ul>
                    </v-card-text>
                    <v-card-subtitle class="red--text text-center font-weight-bold"
                        v-if="products.main_product.combination">Total: € {{totalPrice | roundPrice}}
                    </v-card-subtitle>
                    <v-card-actions v-if="false">
                        <v-btn color="gradient-primary" class="font-weight-bold white--text"
                            v-if="products.main_product.combination" @click="createCart()" block>
                            CONFIRMAR PEDIDO<v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions v-else>
                        <v-alert type="info" class="font-weight-bold white--text" @click="createCart()" block>
                            Es necesario iniciar sesion para poder realizar el pedido
                        </v-alert>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn block color="info" class="rounded-lg font-weight-bold" @click="goBack()">
                            <v-icon>mdi-arrow-left</v-icon>&nbsp;Volver
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import productCardComponent from '@/components/productCardComponent.vue';
    export default {
        name: 'cartPage',
        components: {
            productCardComponent: productCardComponent
        },
        filters: {
            roundPrice(price) {
                return Math.round(price)
            }
        },


        data() {
            return {
                products: {
                    main_product: {
                        price: 0,
                        cant: 0
                    },
                    products: []
                }, // Este debería ser un array de productos desde tu backend
                cartItems: [],
                search: {}
                // Este debería ser un array de elementos en el carrito desde tu backend
            };
        },
        created() {
            this.getProducts()
        },
        methods: {
            goBack(){
                this.$router.push({name:'Index',query:{q:JSON.stringify(this.search)}})
            },
            getProducts() {
                this.search = JSON.parse(this.$route.query.q)
                console.log(this.search)
                axios.post('https://jardincom.com/module/configurador2/productfilter', this.search, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response => {
                        this.products = response.data

                    })
                    .catch(error => {
                        console.log(error)
                    })

            },
            searchCombination() {
                let combinationString = '';
                this.search.product_attributes.forEach(item => {
                    const name = item['name'].replace(/\n/g, '');
                    const value = item['value'].replace(/\n/g, '');
                    combinationString += name + ' - ' + value + ', ';
                });

                combinationString = combinationString.trim().slice(0, -1);
                this.products.main_product.combination = this.products.main_product.combinations.find((r) => {
                    return r.attribute_designation == combinationString
                })
                if (this.products.main_product.combination)
                    this.products.main_product.price = parseFloat(this.products.main_product.combination.price) +
                    parseFloat(
                        this.products.main_product.price)


            },
            createCart() {
                let products = []
                this.products.products.forEach(product => {
                    products.push({
                        id: product.id_product,
                        quantity: product.cant
                    })
                })
                products.push({
                    id: this.products.main_product.id_product ?? this.products.main_product.id,
                    quantity: this.products.main_product.cant,
                    id_product_attribute: this.products.main_product?.combination?.id_product_attribute
                })
                console.log(products)
                axios.post('https://jardincom.com/module/configurador/cart', {
                        products: products,
                        email: window.prestashop.customer.email
                    })
                    .then(() => {
                        location.href = '/carrito?action=show'
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getCookieValue(cookieName) {
                var name = cookieName + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var cookieArray = decodedCookie.split(';');

                for (var i = 0; i < cookieArray.length; i++) {
                    var cookie = cookieArray[i];

                    while (cookie.charAt(0) == ' ') {
                        cookie = cookie.substring(1);
                    }

                    if (cookie.indexOf(name) == 0) {
                        return cookie.substring(name.length, cookie.length);
                    }
                }

                return "";
            },


            categoryName() {
                if (this.search.category == 44) {
                    return 'Grilla rigida'
                } else {
                    return 'Grilla rigida'
                }
            },
            imageCategoryName() {
                if (this.search.category == 44) {
                    return 'rigide.jpeg'
                } else {
                    return 'rigide.jpg'
                }
            },


        },
        computed: {
            sessionLogged() {
                return window?.prestashop?.customer?.email != undefined
            },
            totalPrice() {
                let price = 0
                price = this.products.products.reduce((total, product) => {
                    return total + product.price * product.cant;
                }, 0);
                price = price + this.products.main_product.price * this.products.main_product.cant
                return price
            }
        }
    };
</script>