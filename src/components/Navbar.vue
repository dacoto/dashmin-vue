<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <a style="margin-left: -10px" class="btn btn-link text-white mr-2" href="#" @click.prevent="$root.showSidebar = !$root.showSidebar">
        <i class="fas fa-bars"></i>
      </a>
      <router-link class="navbar-brand" to="/">
        <img alt="Icon" class="navbar-icon d-inline-block align-top" src="../assets/images/icon.svg">
        <span class="navbar-title">dashmin</span>
      </router-link>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a id="dd_user" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon fa fa-user"></i> User Name</a>
            <div aria-labelledby="dd_user" class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">Profile</a>
              <router-link class="dropdown-item" to="/login">Logout</router-link>
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
