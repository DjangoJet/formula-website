<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary"/>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
                <ul>
                  <li><router-link to="/">Forgot password</router-link></li>
                  <li><router-link to="/register">Create Acount</router-link></li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-layout align-center>
                  <v-btn color="primary" @click="handleSubmit">Login</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email : '',
      password : ''
    }
  },
  methods : {
    handleSubmit(e){
      e.preventDefault()
      if (this.password.length > 0) {
        this.$http.post('http://localhost:3000/users/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          let is_admin = response.data.user.is_admin
          localStorage.setItem('user',JSON.stringify(response.data.user))
          localStorage.setItem('jwt',response.data.token)

          if (localStorage.getItem('jwt') != null){
            this.$emit('loggedIn')
            if(this.$route.params.nextUrl != null){
              this.$router.push(this.$route.params.nextUrl)
            }
            else {
              if(is_admin== 1){
                this.$router.push('admin')
              }
              else {
                this.$router.push('dashboard')
              }
            }
          }
        }).catch(function (error) {
          console.error(error.response)
        });
      }
    }
  }
}
</script>
