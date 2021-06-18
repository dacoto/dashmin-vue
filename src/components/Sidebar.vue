<template>
  <div>
    <div class="sidebar sidebar-dark bg-dark">
      <ul class="list-unstyled">
        <li>
          <router-link class="nav-link" to="/"><i class="icon fa fa-home"></i> Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/forms"><i class="icon fa fa-edit"></i> Forms</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/alerts"><i class="icon fa fa-comment-alt"></i> Alerts</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/tables"><i class="icon fa fa-table"></i> Tables</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/login"><i class="icon fa fa-sign-in-alt"></i> Login</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/register"><i class="icon fa fa-user-plus"></i> Register</router-link>
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
