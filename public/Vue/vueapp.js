var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '/asset/logo_bi-an.png',
        url: '/NGJS/main',
        enabled: false,
        rules: [{
            name: "rule",
            enabled: "false",
            action: "block",
            rule_id: 1,
            condition: "path == '/form/moved/'"
        }],
        details: ["80% cotton", "20% polyster"],
        cart: 0,
        network: [
            {
                topology: 'dual',
                image: '/asset/img-dual-en.png',
            },
            {
                topology: 'single',
                image: '/asset/img-single-en.png',
            },
            {
                topology: 'triple',
                image: '/asset/img-triple-en.png',
            }
        ]
    },
    methods: {
        addToCart: function (){
            this.cart += 1;
        },
        updateImage: function (topoimage){
            this.image = topoimage;
        }
    },
    computed: {
        title(){
            return this.product + ' ' + this.cart;
        }
    }
})
