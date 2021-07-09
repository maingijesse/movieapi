<template>
  <div>
    <div
      v-if="ready"
      class="intro d-flex  align-center"
      :style="{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(248, 55, 69, 0.6)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat fixed center center / cover`,
      }"
    >
      <v-container>
        <v-row class="mx-md-10 align-center">
          <v-col cols="12" md="3">
            <v-card max-width="320" elevation="24" class="mx-auto">
              <v-img
                height="500"
                :src="
                  `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                "
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="9">
            <div class="glassmorphic white--text  pa-4 pa-md-10 mx-2">
              <h1 class="text-md-h2 ">
                {{ movie.original_title }} ({{ year }})
              </h1>
              <div class=" my-3 ">
                <v-chip
                  class="mr-4 subtitle-1 mb-2"
                  color="primary"
                  v-for="genre in movie.genres"
                  :key="genre.id"
                  elevation="24"
                  label
                >
                  {{ genre.name }}
                </v-chip>
              </div>
              <h2 class="-mb-2 text-h3">Overview</h2>
              <p class="white--text my-4 subtitle-1 text-start">
                {{ movie.overview }}
              </p>
              <v-chip class="  text-start warning" label large>
                <span
                  ><v-icon class="mr-2 white--text" large>mdi-clock</v-icon>
                  {{ movie.runtime }} Minutes</span
                >
              </v-chip>
              <v-btn
                class="secondary d-block ml-auto "
                elevation="24"
                right
                append
                @click="hasHistory() ? $router.go(-1) : $router.push('/')"
              >
                <v-icon left>mdi-chevron-left</v-icon>
                Go Back
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
const key = process.env.VUE_APP_KEY

import axios from "axios"
export default {
  data() {
    return {
      //   path: "",
      movie: [],
      ready: false,
    }
  },
  mounted() {
    // this.path = this.$route.params.id

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${key}`
      )
      .then((response) => {
        console.log(response)
        this.ready = true

        this.movie = response.data
        // this.loading = !this.loading
      })
      .catch((err) => {
        console.log("Some error occured")
      })
  },
  computed: {
    year() {
      let yearDate = new Date(this.movie.release_date)
      return yearDate.getFullYear()
    },
  },
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: 100vh;
}
.glassmorphic {
  background: rgba(248, 55, 69, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
