<template>
  <div>
    <h1>register</h1>
    <div class="form-group">
      <label>Name</label>
      <input type="text" v-model="user.name">
    </div>
    <div class="form-group">
      <label>Surname</label>
      <input type="text" v-model="user.surname">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="user.email">
    </div>
    <div class="form-group">
      <label>password</label>
      <input type="text" v-model="user.password">
    </div>
    <div>
      <button @click="register" class="btn btn-primary">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    register(){
      this.axios.post("http://127.0.0.1:8000/api/auth/signup", this.user)
      .then((res) => {
        this.$router.push({name: "Login"});
      })
    }
  }
}
</script>

<style scoped>

</style>
