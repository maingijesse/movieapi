<template>
  <div class="secondary top pa-6 white--text w-full">
    <div v-if="movies.length > 0">
      <div class="mx-auto d-flex flex-wrap">
        <v-card
          v-for="movie in movies"
          :key="movie.id"
          max-width="200"
          class="mr-4 mr-md-8 mb-4 mb-md-8 relative "
          link
          dark
          color="accent"
          elevation="16"
          exact-path
          :href="`/movie/${movie.id}`"
        >
          <v-img
            height="290"
            :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
          >
          </v-img>
          <div class="subtitle-1 warning--text pt-4 pl-4">
            {{ movie.original_title }}
          </div>

          <v-avatar class="white--text absolute warning  pa-6" size="56">
            {{ movie.vote_average }}
          </v-avatar>
          <v-card-text> </v-card-text>
        </v-card>
      </div>
    </div>
    <div v-else>
      <h1 class="text-center">Movie not found</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ["movies"],
}
</script>

<style lang="scss" scoped>
.top {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
</style>
