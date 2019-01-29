<template>
  <div class="formStyle">
    <h2>Sign In</h2>
    <b-form>
      <b-form-group id="exampleInputGroup1" description="">
        <b-form-input id="exampleInput1" type="email" v-model="user.email" required placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2" type="password" v-model="user.password" required placeholder="Enter Password">
        </b-form-input>
        <router-link tag="a" to="/forgetpassword" style="font-size:14px;float:left">Forget Password</router-link>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.user));
      },
    }
  }

</script>
<style>
</style>
