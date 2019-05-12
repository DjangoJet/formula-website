<template>
  <div class="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary"/>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="name"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="Email" type="email" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Repeat password" id="password" type="password" v-model="passwordRepeat"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-layout align-center>
                  <v-btn color="primary" @click="register">Register</v-btn>
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
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', data)
     .then(() => this.$router.push('/'))
     .catch(err => console.log(err))
    }
  }
}
</script>
