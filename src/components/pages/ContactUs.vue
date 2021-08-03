<template lang="html">
    <section id="contactuspage">
        <section class="blurred pb-4">
            <div class="container">
                <page-header></page-header>
            </div>
            <div className="container-fluid row col-12 contactus mt-2">
                <div className="row col-12  col-lg-12  col-xxl-9 my-3 contact_media ">
                    <div className="c_social-media col-8  col-lg-3   col-xxl-3 p-2 ">
                        <h4>Instagram</h4>
                        <i className="fab fa-instagram "></i>
                    </div>
                    <div className="c_social-media col-8  col-lg-3  col-xxl-3 p-2 ">
                        <h4>Facebook</h4>
                        <i className="fab fa-facebook "></i>
                    </div>
                    <div className="c_social-media col-8  col-lg-3  col-xxl-3 p-2 ">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter "></i>
                    </div>
                </div>
                <div className="col-12  col-lg-12  col-xxl-8 contact_me m-4 ">
                    <form className="row col-10 col-lg-10 col-lg-11 g-3 m-5 bg-warning rounded-3 contact_form ">
                        <div className="col-12  col-lg-4  col-xxl-4 g-5 ">
                            <div className="input-group ">
                                <div className="input-group-text bg-primary px-3"><i className="fa fa-user "></i></div>
                                <input type="text" className="form-control p-3" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-12  col-lg-4  col-xxl-4 g-5 ">
                            <div className="input-group ">
                                <div className="input-group-text bg-primary px-3"><i className="fa fa-envelope "></i></div>
                                <input type="email" className="form-control p-3" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-12  col-lg-4  col-xxl-4 g-5 ">
                            <div className="input-group ">
                                <div className="input-group-text bg-primary px-3"><i className="fa fa-phone "></i></div>
                                <input type="number" className="form-control p-3" placeholder="Contact number" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-xxl-12 g-5 ">
                            <div className="input-group ">
                                <div className="input-group-text bg-primary px-3 "><i className="fa fa-comments "></i></div>
                                <textarea
                                    className="form-control r_input_type p-3"
                                    id="register_textarea"
                                    placeholder="Write message Here"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary col-6  col-lg-4 mb-3 me-4 col-xxl-3 g-5 ms-auto px-1 ">Send Message</button>
                    </form>
                </div>
                <div className="row col-12  col-lg-12  col-xxl-8 contact_address mb-5 ">
                    <div className="row col-12  col-lg-6  col-xxl-6 contact_deatils">
                        <i className="fas fa-map-marker-alt col-2  col-lg-2  col-xxl-2 my-auto"></i>
                        <h3 className=" col-10 col-lg-10 col-xxl-10 p-3 text-justify ">
                            D 12, Shivneri Society, opposite to himansi jwellers, Kandiwali west, mumbai 400067
                        </h3>
                    </div>
                    <div className="row col-12 col-lg-6  col-xxl-6  contact_deatils ms-lg-auto ms-xxl-auto my-3 my-lg-0 my-xxl-0">
                        <h1 className="col-12 col-lg-12 col-xxl-12 p-1  ">Our Email ID</h1>
                        <i className="fa fa-envelope col-2  col-lg-2  col-xxl-2 "></i>
                        <h3 className=" col-10 col-lg-10 col-xxl-10 p-3  ">instantsupport@gmail.com</h3>
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
    .contactus {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .contactus .contact_media {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
    }
    .contactus .contact_media .c_social-media {
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: Sanchez;
        color: #5a5a5a;
        box-shadow: 0px 0px 7px 2px #ff9100;
    }
    .contactus .contact_media .c_social-media i {
        color: #c06f05;
        font-size: 50px;
    }

    .contactus .contact_media .c_social-media h4 {
        font-size: 40px;
    }
    .contactus .contact_me {
        box-shadow: 0px 0px 4px 2px #ff9100;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contactus .contact_me .contact_form i {
        font-size: 25px;
        color: whitesmoke;
    }
    .contactus .contact_me .contact_form input,
    .contactus .contact_me .contact_form textarea {
        resize: none;
        font-size: 25px;
        font-family: Sanchez;
        color: #b33300;
    }
    .contactus .contact_me .contact_form button {
        font-size: 25px;
        font-family: Sanchez;
    }

    .contactus .contact_address .contact_deatils {
        box-shadow: 0px 0px 7px 3px #ff9100;
        border-radius: 5px;
    }
    .contactus .contact_address .contact_deatils i {
        font-size: 60px;
        color: #ff9100;
    }
    .contact_deatils h3,
    .contact_deatils h1 {
        text-align: justify;
        color: #c04005;
    }

    #contactuspage {
        height: 100vh;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23774a02'/%3E%3Cstop offset='1' stop-color='%23be7604'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: top left;
    }

    .blurred {
        height: 100vh;
    }
</style>
