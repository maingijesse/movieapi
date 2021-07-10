<template>
  <v-app>
    <v-navigation-drawer
      app
      class="darker higher"
      dark
      v-model="drawer"
      mobile-breakpoint="900"
    >
      <v-list-item class="primary" dark link to="/">
        <v-list-item-content>
          <v-list-item-title
            class="text-h6 text-center py-1 py-md-2 white--text "
          >
            <span><v-icon dense>mdi-movie</v-icon> MovieApi</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav class="mt-12">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          exact-active-class="primary"
          @click="hideCard"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="secondary" dark elevate-on-scroll class="higher">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
        <v-row align="center">
          <v-col cols="6">
            <v-form class="mt-6 custom-width" @submit.prevent="">
              <v-text-field
                label="Search Movies ..."
                append-icon="mdi-magnify"
                single-line
                @click:append="handleForm"
                v-model="searchItem"
                @keyup.enter.prevent="handleForm"
              >
              </v-text-field>
            </v-form>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="d-flex flex-column  mt-10  align-center ">
              <span>Jesse Maingi</span>
              <v-avatar>
                <img src="./assets/jesse-maingi.jpg" alt="Jesse Maingi" />
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="accent top-relative">
      <search
        app
        v-if="active"
        class="child-absolute"
        :movies="searchedMovies"
      ></search>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios"
import Search from "./components/Search.vue"
const key = process.env.VUE_APP_KEY

export default {
  mounted() {},
  components: { Search },
  data() {
    return {
      items: [
        { title: "Popular", icon: "mdi-movie-star", to: "/" },
        { title: "Now Playing", icon: "mdi-animation-play", to: "/playing" },
        { title: "Upcoming", icon: "mdi-movie-open-edit", to: "/upcoming" },
        { title: "Top Rated", icon: "mdi-movie-filter", to: "/top" },
      ],
      searchItem: "",
      drawer: false,
      searchedMovies: [],
    }
  },
  computed: {
    active() {
      if (this.searchItem.length > 2 && this.$store.state.activeSearch) {
        return true
      }
    },
  },
  methods: {
    handleForm() {
      if (this.searchItem.length > 2) {
        this.searchedMovies = []
        this.searchMovie()
        this.$store.state.activeSearch = true
      }
    },
    searchMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.searchItem}&page=1&include_adult=false`
        )
        .then((response) => {
          this.searchedMovies = response.data.results.slice(0, 6)
        })
        .catch((err) => {
          console.log("Some error occured")
          this.$store.state.activeSearch = false
        })
    },
    hideCard() {
      this.$store.state.activeSearch = false
      this.searchItem = ""
    },
  },
}
</script>

<style lang="scss">
.v-input__icon {
  cursor: pointer;
}

.v-list-item--active {
  color: "#f83745" !important;
}

.glassmorphic {
  background: rgba(248, 55, 69, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.top-relative {
  position: relative;
}
.child-absolute {
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
}
.high-index {
  z-index: 200;
}
.higher {
  z-index: 9999 !important;
}
</style>
