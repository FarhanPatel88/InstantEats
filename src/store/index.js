import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            items: [
                {
                    Itemname: 'Veg Spring Roll',
                    Itemid: '1',
                    Itemprice: 240,
                    Itemdescription: 'Shredded vegetable stuffed rolls-fried.',
                    Itemimgurl: 'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/08/Spring-Roll.jpg?fit=640%2C363&ssl=1',
                    Itemrating: 4.0,
                    Itemqty: '2',
                    ItemCategory: 'Snacks',
                },
                {
                    Itemname: 'Chicken Hakka Noodles',
                    Itemid: '2',
                    Itemprice: 215,
                    Itemdescription: 'Shredded chicken medium sized noodle mixed veg.-Wok preparation.',
                    Itemimgurl:
                        'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Indo_Chinese_Chicken_Hakka_Noodles.jpg',
                    Itemrating: 3.8,
                    Itemqty: '1',
                    ItemCategory: 'Chinese',
                },
                {
                    Itemname: 'Veg Cheese Grill Sandwich',
                    Itemid: '3',
                    Itemprice: 185,
                    Itemdescription: 'Classic Sandwich With Green Chutni ,Iceberg,Cucumber ,Potato,Tomato,Onion & Melted Cheese.',
                    Itemimgurl: 'https://whatsfordinner.com/wp-content/uploads/2017/02/Grilled_Vegetable_and_Goat_Cheese_Sandwich_Hero-960x540.jpg',
                    Itemrating: 4.0,
                    Itemqty: '5',
                    ItemCategory: 'Snacks',
                },
                {
                    Itemname: 'Chilli Garlic Chicken Pizza',
                    Itemid: '4',
                    Itemprice: 199,
                    Itemdescription:
                        'This Chili Garlic Chicken Pizza is made from scratch and loaded with flavor, color, and spice. Every bite is deeelish!',
                    Itemimgurl: 'https://eatathomecooks.com/wp-content/uploads/2010/02/spicy-chicken-garlic-pizza-done.jpg',
                    Itemrating: 4.2,
                    Itemqty: '2',
                    ItemCategory: 'Pizzas',
                },
                {
                    Itemname: 'Peri Peri Paneer Burger',
                    Itemid: '5',
                    Itemprice: 323,
                    Itemdescription: 'Peri Peri spiced Paneer patty layered with veggies & cheese between toasted burger buns.',
                    Itemimgurl: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/37828ad3-e22a-4c8d-a0d9-4cb2cb855689.jpg',
                    Itemrating: 4.3,
                    Itemqty: '3',
                    ItemCategory: 'Burgers',
                },
                {
                    Itemname: 'Paneer Makhni Biryani',
                    Itemid: '6',
                    Itemprice: 260,
                    Itemdescription: 'Paneer sauteed in butter layered between Basmati rice, enriched with makhani sauce, and cooked in a pot.',
                    Itemimgurl: 'https://www.vidhyashomecooking.com/wp-content/uploads/2019/04/PaneerMakhaniBiryaniRecipe-480x270.jpg',
                    Itemrating: 4.1,
                    Itemqty: '2',
                    ItemCategory: 'Biryani',
                },
                {
                    Itemname: 'Italian Maggi Bowl',
                    Itemid: '7',
                    Itemprice: 120,
                    Itemdescription:
                        'Loaded with Italian flavors, this instant noodles bowl is flavored with marinara sauce, Italian style seasoning, and loads of cheese.',
                    Itemimgurl: 'https://www.pngkit.com/png/detail/125-1254324_noodle-bowl-png-maggi.png',
                    Itemrating: 4.0,
                    Itemqty: '1',
                    ItemCategory: 'Italian',
                },
                {
                    Itemname: 'Dal Tadka Chawal Bowl',
                    Itemid: '8',
                    Itemprice: 170,
                    Itemdescription: 'Creamy and protein packed yellow lentil curry, topped with tempering, and served with rice.',
                    Itemimgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTMpkA7cQNykbNioD_h9zMgnmopSwy9UExw&usqp=CAU',
                    Itemrating: 4.3,
                    Itemqty: '2',
                    ItemCategory: 'Bowls',
                },
                {
                    Itemname: 'Orange Apricot Ice Cream',
                    Itemid: '9',
                    Itemprice: 67,
                    Itemdescription: 'Juicy oranges with nuggets of dried apricots. Feast on this delicious combo like theres no tomorrow.',
                    Itemimgurl: 'https://c.ndtvimg.com/2018-10/kab8j8qg_rice_625x300_18_October_18.jpg',
                    Itemrating: 4.0,
                    Itemqty: '3',
                    ItemCategory: 'Deserts',
                },
                {
                    Itemname: 'Chilli Paneer Dry',
                    Itemid: '10',
                    Itemprice: 239,
                    Itemdescription: 'Paneer Cubes, Green Chillies, Onion, Capsicum tossed in Desi Chilli sauce finished with a punch of Soya.',
                    Itemimgurl:
                        'https://i2.wp.com/www.dinedelicious.in/wp-content/uploads/2020/10/Chilli-Paneer-Dry-Recipe-No-Fry.jpg?fit=1208%2C768&ssl=1',
                    Itemrating: 4.3,
                    Itemqty: '1',
                    ItemCategory: 'Paneer Dishes',
                },
            ],
            categories: ['All', 'Snacks', 'Chinese', 'Pizzas', 'Burgers', 'Biryani', 'Italian', 'Bowls', 'Deserts', 'Paneer Dishes'],
            category: 'All',
            cart: [],
        };
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        getCategories(state) {
            return state.categories;
        },
        getCategory(state) {
            return state.category;
        },
        getCartItems(state) {
            return state.cart;
        },
        getCartPrice(state) {
            let price = 0;
            state.cart.forEach((element) => {
                price += element.foodPrice;
            });
            return price;
        },
    },
    mutations: {
        changeCategory(state, payload) {
            state.category = payload;
        },
        addItemsToCart(state, payload) {
            state.cart.push(payload);
        },
        changeQuantityInCart(state, payload) {
            const item = state.cart.find((item) => item.foodId == payload.id);
            const initialprice = state.items.find((item) => item.Itemid == payload.id).Itemprice;
            if (payload.quantity) {
                item.foodQty = payload.quantity;
                item.foodPrice = initialprice * item.foodQty;
            } else {
                item.foodQty += 1;
                item.foodPrice = initialprice * item.foodQty;
            }
        },
        removeItemsFromCart(state, payload) {
            state.cart = state.cart.filter((element) => element.foodId != payload.id);
            console.log(state.cart);
        },
    },
    actions: {
        changeCategory(context, payload) {
            context.commit('changeCategory', payload.categoryName);
        },
        addItemsToCart(context, payload) {
            context.commit('addItemsToCart', payload);
        },
        changeQuantityInCart(context, payload) {
            context.commit('changeQuantityInCart', payload);
        },
        removeItemsFromCart(context, payload) {
            context.commit('removeItemsFromCart', payload);
        },
    },
    modules: {},
});
