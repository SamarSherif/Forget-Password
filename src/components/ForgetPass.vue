<template>
  <div class="formStyle">
    <h2>Reset Password</h2>
    <b-form>
      <b-form-group id="exampleInputGroup1" description="">
        <b-form-input id="exampleInput1" type="email" v-model="user.email" required placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2" type="text" maxlength="6" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
          v-model="user.code" required placeholder="Enter your code">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" @click="send">Submit</b-button>
    </b-form>
    <!-- reCaptcha -->
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
          email: '',
          code: '',
        }
      }
    },
    methods: {
      send() {
        this.$http.post('http://samar.getsandbox.com/auth', this.user)
          .then(response => {
              var msg = (response.body.message);
              var status = (response.body.status);
              if (status == true) {
                this.$router.push('/newpassword')
              }
            },
            error => {
              alert(error.body.message)
            });
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
