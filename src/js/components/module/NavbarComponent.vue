<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-primary">
            <a class="navbar-brand" href="index.html">
                <img class="navbar-icon d-inline-block align-top" src="dist/img/brand/icon.svg">
                <span class="navbar-title">dashmin</span>
            </a>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a href="#" id="dd_user" class="nav-link dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-user"></i> User Name</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd_user">
                            <a href="#" class="dropdown-item">Profile</a>
                            <router-link to="/login" class="dropdown-item">Logout</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        mounted () {}
    }
</script>
