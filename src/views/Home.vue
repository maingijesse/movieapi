<template>
  <div class="container  white--text mt-8">
    <div class="d-flex flex-wrap justify-center">
      <movie-card
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import MovieCard from "../components/MovieCard.vue"
export default {
  components: { MovieCard },
  name: "Home",
  data() {
    return {
      movies: [],
      loading: true,
    }
  },
  mounted() {
    const key = process.env.VUE_APP_KEY
    console.log(key)
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
      .then((response) => {
        // console.log(response)
        this.movies = response.data.results
        this.loading = !this.loading
      })
      .catch((err) => {
        console.log("Some error occured")
      })
  },
}
</script>
