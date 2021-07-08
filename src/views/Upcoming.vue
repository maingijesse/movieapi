<template>
  <div class="container  white--text mt-8">
    <h1 class="text-center   mb-10">Upcoming Movies</h1>
    <div class="d-flex flex-wrap justify-center">
      <movie-card
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :loading="loading"
      />
    </div>
    <v-btn
      class="secondary"
      elevation="24"
      fab
      fixed
      bottom
      right
      v-scroll="onScroll"
      v-show="fab"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <div class="text-center ">
      <v-btn
        class="warning mr-4"
        elevation="24"
        right
        @click=";[prevPage(), toTop()]"
        v-show="page > 1"
        :loading="loading"
      >
        <v-icon>mdi-arrow-left</v-icon> </v-btn
      ><v-btn
        class="warning"
        elevation="24"
        right
        @click=";[nextPage(), toTop()]"
        :loading="loading"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
const key = process.env.VUE_APP_KEY

import axios from "axios"
import MovieCard from "../components/MovieCard.vue"
export default {
  components: { MovieCard },
  name: "Home",
  data() {
    return {
      movies: [],
      loading: false,
      page: 1,
      fab: false,
    }
  },
  methods: {
    getMovies() {
      this.loading = true
      this.movies = []

      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${this.page}`
        )
        .then((response) => {
          // console.log(response)
          this.loading = false
          this.movies = response.data.results
          // this.loading = !this.loading
        })
        .catch((err) => {
          console.log("Some error occured")
        })
    },
    prevPage() {
      this.page--
      this.getMovies()
    },
    nextPage() {
      this.page++
      this.getMovies()
    },
    onScroll(e) {
      if (typeof window === "undefined") return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
  mounted() {
    this.getMovies()
  },
}
</script>
