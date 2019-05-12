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
                  <v-text-field prepend-icon="email" name="email" label="Email" type="email" v-model="email"></v-text-field>
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
                  <v-btn color="primary" @click="login">Login</v-btn>
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
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
     .then(() => this.$router.push('/'))
     .catch(err => console.log(err))
    }
  }
}
</script>
