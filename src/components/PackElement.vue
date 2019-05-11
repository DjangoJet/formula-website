<template>
    <v-flex xs12 sm6 md4 lg3>
        <v-card
        flat
        color="blue"
        elevation="5"
        style="margin: 20px">
            <v-card-title primary-title>
            <div>
                <div class="headline">{{ pack.name }}</div>
            </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat>Like</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['pack']
}
</script>
