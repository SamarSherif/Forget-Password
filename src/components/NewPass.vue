<template>
  <div class="formStyle">
    <h2>Set new password</h2>
    <b-form >
      <b-form-group id="exampleInputGroup1" description="">
        <b-form-input id="exampleInput1" type="password" minlength="6" maxlength="20" v-model="user.password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          required placeholder="new password">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2" type="password" minlength="6" maxlength="20" v-model="user.confpassword"
          required placeholder="confirm password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" @click="confirmPass">Submit</b-button>
    </b-form>
    <!-- reCpatcha -->
    <form id="resetForm" action="backEndServiceUrl" method="POST">
      <div class="g-recaptcha" data-sitekey="6Lerb40UAAAAAClhOJpziwmw1RcjZtA11Po2ArLE" data-callback="onSubmit"
        data-size="invisible">
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          password: '',
          confpassword: '',
        },

        show: true
      }
    },

    methods: {
      confirmPass() {
        var letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        var password = this.user.password;
        if (password.match(letters)) {
          this.$http.post("http://samar.getsandbox.com/updatepassword", this.user)
            .then(response => {
                var status = (response.body.status);
                var msg = (response.body.message);
                if (status == true) {
                  this.$router.push("/")
                  alert("Password successfuly changed")
                }
              },
              error => {
                alert(error.body.message)
              }
            )
        };
        grecaptcha.execute();
      },
      onSubmit(response) {
        document.getElementById("resetForm").submit();
      }
    }
  }

</script>
<style>
</style>
