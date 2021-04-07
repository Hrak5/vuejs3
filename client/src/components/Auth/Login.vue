<template>
  <div>
    <h1>login</h1>
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="user.email">
    </div>
    <div class="form-group">
      <label>password</label>
      <input type="text" v-model="user.password">
    </div>
    <div>
      <button @click="login" class="btn btn-primary">login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      user: {
        email: "",
        password: "",
      }
    }
  },
  // computed(){
  //
  // },    mixin mech
  methods: {
    login(){
      this.axios.post("http://127.0.0.1:8000/api/auth/login", this.user)
        .then((res) => {
          console.log(res.data)
          const token = res.data.access_token;
          const user = res.data.user;

          localStorage.setItem("token",JSON.stringify(token))
          // localStorage.setItem("user",JSON.stringify(user))

          this.$store.commit("setUser",user);
            //go to profile
        })
    }
  }
}
</script>

<style scoped>

</style>
