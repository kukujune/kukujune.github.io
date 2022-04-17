<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Portfolio</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/side">Projects</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
</style>