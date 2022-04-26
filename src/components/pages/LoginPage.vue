<template>
    <section id="loginpage">
        <section class="blurred pb-4">
            <div class="container">
                <page-header></page-header>
            </div>
            <div className="container row-12 login my-5">
                <div className="row col-12 col-lg-12 col-xxl-10 login_content my-5">
                    <div className="left row col-12 col-lg-12  col-xxl-6 my-5">
                        <img className="col-8  col-xxl-8 mx-auto" src="../../assets/login.jpg" alt="" />
                        <p className="text-center">Do not have an accoount ?</p>
                        <button type="button" className="btn btn-primary col-5  col-xxl-5 mx-auto">Sign Up</button>
                    </div>
                    <div className=" col-12 col-lg-12  col-xxl-6 ms-auto right bg-warning">
                        <h2 className="col-6  col-xxl-6 mx-auto mt-5 text-center">Login Here</h2>
                        <form className="row row col-lg-10 col-xxl-12 g-3 my-2  mx-auto">
                            <div className="col-12 col-lg-10 col-xxl-12 gy-5 mx-auto">
                                <div className="input-group ">
                                    <div className="input-group-text bg-primary"><i className="fa fa-envelope"></i></div>
                                    <input type="email" className="form-control p-xxl-2 p-lg-3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-10 col-xxl-12 gy-5 mx-auto">
                                <div className="input-group">
                                    <div className="input-group-text bg-primary"><i className="fa fa-lock"></i></div>
                                    <input type="password" className="form-control p-xxl-2 p-lg-3" placeholder="Password" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary col-3  col-xxl-3  g-5 ms-auto px-1 me-2">Login</button>
                        </form>
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

<style lang="css" scoped>
    .login {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .login .login_content {
        border-radius: 5px;
        box-shadow: 0px 0px 7px 4px #ff9100;
    }

    .login .login_content .left p,
    .login .login_content .left button {
        color: #c06f05;
        font-family: Sanchez;
        font-size: 25px;
    }
    .login .login_content .left button {
        color: white;
    }

    .login .login_content .right h2 {
        font-family: Sanchez;
        font-size: 30px;
        line-height: 38px;
        color: #b33300;
        border-bottom: 4px solid #41010191;
    }
    .login .login_content .right form .input-roup-text {
        background-color: #ff9100;
    }
    .login .login_content .right form input {
        color: #804800;
        font-family: Sanchez;
        font-size: 25px;
    }
    .login .login_content .right form i {
        color: #ffffff;
        font-size: 25px;
    }
    .login .login_content .right form button {
        font-family: Sanchez;
        font-size: 25px;
    }

    #loginpage {
        height: 100vh;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }

    .blurred {
        height: 100vh;
        /* background-color: rgba($color: #000000, $alpha: 0.5); */
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
