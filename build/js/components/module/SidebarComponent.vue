<template>
    <div>
        <div class="sidebar sidebar-dark bg-dark">
            <ul class="list-unstyled">
                <li>
                    <router-link to="/" class="nav-link"><i class="icon fa fa-home"></i> Home</router-link>
                </li>
                <li>
                    <router-link to="/forms" class="nav-link"><i class="icon fa fa-edit"></i> Forms</router-link>
                </li>
                <li>
                    <router-link to="/alerts" class="nav-link"><i class="icon fa fa-comment-alt"></i> Alerts</router-link>
                </li>
                <li>
                    <router-link to="/tables" class="nav-link"><i class="icon fa fa-table"></i> Tables</router-link>
                </li>
                <li>
                    <router-link to="/login" class="nav-link"><i class="icon fa fa-sign-in-alt"></i> Login</router-link>
                </li>
                <li>
                    <router-link to="/register" class="nav-link"><i class="icon fa fa-user-plus"></i> Register</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {}
    }
</script>
