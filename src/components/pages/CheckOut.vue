<template lang="html">
    <section id="checkoutpage">
        <section class="blurred pb-4">
            <div class="container">
                <page-header></page-header>
            </div>
            <div class="container">
                <div id="checkout_page" className="mt-5 ">
                    <div className="row col-10 col-lg-10 col-xxl-8 my-5 checkout_container px-0 mx-auto">
                        <div className="checkout_left col-12 col-lg-12 col-xxl-6  bg-warning m-0">
                            <h2 className="col-6  col-xxl-6 mx-auto mt-5 text-center">Checkout Details</h2>
                            <form className="row row col-12 col-lg-12 col-xxl-12 g-3   mx-auto checkout_form ">
                                <div className="col-12 col-lg-10 col-xxl-12 gy-5 mx-auto ">
                                    <div className="input-group  ">
                                        <div className="input-group-text bg-primary "><i className="fa fa-user "></i></div>
                                        <input type="text" className="form-control p-xxl-2 p-lg-3" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xxl-12 mx-auto ">
                                    <div className="input-group  ">
                                        <div className="input-group-text bg-primary "><i className="fa fa-user "></i></div>
                                        <input type="text" className="form-control p-xxl-2 p-lg-3" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xxl-12 mx-auto ">
                                    <div className="input-group  ">
                                        <div className="input-group-text bg-primary "><i className="fa fa-phone "></i></div>
                                        <input type="number" className="form-control p-xxl-2 p-lg-3" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xxl-12 mx-auto ">
                                    <div className="input-group  ">
                                        <div className="input-group-text bg-primary "><i className="fa fa-envelope "></i></div>
                                        <input type="email" className="form-control p-xxl-2 p-lg-3" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xxl-12 mx-auto ">
                                    <div className="input-group ">
                                        <div className="input-group-text bg-primary px-3 "><i class="fas fa-rupee-sign"></i></div>
                                        <input type="text" className="form-control p-xxl-2 p-lg-3" placeholder="Price" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xxl-12  mx-auto">
                                    <div className="input-group  ">
                                        <div className="input-group-text bg-primary px-3  "><i className="fa fa-address-book  "></i></div>
                                        <textarea
                                            className="form-control r_input_type p-3"
                                            id="register_textarea"
                                            placeholder="Address"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary col-3 me-lg-5 me-xxl-0  col-xxl-3  g-5 ms-auto px-1 me-2 mb-3">
                                    Proceed
                                </button>
                            </form>
                        </div>
                        <div className="checkout_right col-12 col-lg-12 col-xxl-6 ">
                            <img className="col-12" src="../../assets/checkout.jpg" alt="" />
                            <table class="table">
                                <tbody class="table-info">
                                    <tr>
                                        <td>No of Food Items</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Ordered Date</td>
                                        <td>15th June 2021</td>
                                    </tr>
                                    <tr>
                                        <td>Ordered Time</td>
                                        <td>5.00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Time</td>
                                        <td>40 Min Only</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Boy</td>
                                        <td>Tushar Gautam</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    import PageHeader from '../Layouts/PageHeader.vue';
    export default {
        components: {
            PageHeader,
        },
    };
</script>
<style lang="scss" scoped>
    #checkout_page {
        border-radius: 5px;
        font-family: Sanchez;
    }
    #checkout_page .checkout_container {
        box-shadow: 0px 0px 7px 3px #ff9100;
        border-radius: 15px;
    }
    #checkout_page .checkout_container .checkout_left h2 {
        font-size: 30px;
        line-height: 38px;
        color: #b33300;
        border-bottom: 3px solid #61451b91;
    }
    #checkout_page .checkout_container .checkout_left .checkout_form i {
        color: whitesmoke;
    }
    #checkout_page .checkout_container .checkout_left .checkout_form i,
    #checkout_page .checkout_container .checkout_left .checkout_form input,
    #checkout_page .checkout_container .checkout_left .checkout_form textarea,
    #checkout_page .checkout_container .checkout_left .checkout_form button,
    #checkout_page .checkout_container .checkout_right {
        font-size: 25px;
        resize: none;
    }
    #checkout_page .checkout_container .checkout_left .checkout_form input {
        color: #af6402;
    }

    #checkoutpage {
        background-color: rgba($color: #ffbb00, $alpha: 0.2);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        min-height: 100vh;
    }

    .blurred {
        min-height: 100vh;
    }
</style>
