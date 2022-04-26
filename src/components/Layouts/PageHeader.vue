<template lang="html">
    <div id="pageheader" class="row">
        <div id="brandlogo" class="col-4">
            <h1 class="text-warning"><router-link to="/" class="text-warning">Instant Eats</router-link></h1>
        </div>
        <div class="col-8 d-flex align-items-center justify-content-center">
            <nav class="navbar navbar-expand-lg">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item"><router-link to="/menu" class="nav-link">Menu</router-link></li>
                        <li class="nav-item"><router-link to="/cart" class="nav-link">Cart</router-link></li>
                        <li class="nav-item"><router-link to="/orders" class="nav-link">My Orders</router-link></li>
                        <li class="nav-item"><router-link to="/aboutus" class="nav-link">About Us</router-link></li>
                        <li class="nav-item"><router-link to="/contactus" class="nav-link">Contact Us</router-link></li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Login/Register
                            </a>
                            <ul class="dropdown-menu dropdown-li" aria-labelledby="navbarDropdown">
                                <li class="dropdown-item"><router-link to="/login" class="nav-link">Login</router-link></li>
                                <li class="dropdown-item"><router-link to="/signup" class="nav-link">Register</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="css" scoped>
    #pageheader ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #pageheader ul li {
        display: inline-block;
        margin: 5px;
        padding: 0 5px;
    }

    #pageheader ul li:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    #pageheader ul li a {
        text-decoration: none;
        color: rgb(255, 145, 0);
        font-size: 18px;
        font-weight: 500;
    }

    #pageheader #brandlogo {
        margin: 5px 0;
    }

    .dropdown-li {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    a {
        text-decoration: none;
    }
    li a.router-link-active {
        border-bottom: 1px solid orange;
    }
</style>
