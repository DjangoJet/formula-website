<template>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex xs12 sm5 md3 lg2>
        <v-text-field
          flat
          label="Szukaj"
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>
      </v-flex>
      <v-spacer/>
      <v-flex xs12 sm6 md4 lg2>
        <v-combobox
          v-model="selectSection"
          :items="itemsSection"
          label="Wybierz sekcje"
        ></v-combobox>
      </v-flex>
      <v-spacer/>
      <v-flex xs12 sm6 md4 lg2>
        <v-combobox
          v-model="selectType"
          :items="itemsType"
          label="Wybierz typ"
        ></v-combobox>
      </v-flex>
      <v-spacer/>
    </v-layout>
</template>
