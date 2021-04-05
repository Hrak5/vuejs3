<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name: 'Login'}">Login</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Register'}">Register</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Profile'}">Profile</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>
