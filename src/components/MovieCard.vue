<template>
  <div>
    <v-card
      max-width="320"
      class="mr-4 mr-md-8 mb-4 mb-md-8 relative"
      dark
      color="accent"
      link
      elevation="0"
    >
      <v-img
        elevation="2"
        height="450"
        :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
      >
      </v-img>
      <div class="subtitle-1 white--text pt-4 pl-4">
        {{ movie.original_title }}
      </div>

      <v-avatar class="white--text absolute warning  pa-6" size="56">
        {{ movie.vote_average }}
      </v-avatar>
      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios"
const key = process.env.VUE_APP_KEY

export default {
  props: ["movie", "loading"],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute !important;
  top: 7px;
  left: 7px;
  border-radius: 50%;
  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2),
    0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12) !important;
}
</style>
