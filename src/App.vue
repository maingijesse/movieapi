<template>
  <v-app>
    <v-navigation-drawer
      app
      class="darker"
      dark
      v-model="drawer"
      mobile-breakpoint="900"
    >
      <v-list-item class="primary" dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-center py-1 py-md-2 ">
            <span><v-icon dense>mdi-movie</v-icon> MovieApi</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav class="mt-12">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="secondary" dark elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
        <v-row align="center">
          <v-col cols="6">
            <v-form class="mt-6 custom-width">
              <v-text-field
                label="Search Movies ..."
                prepend-icon="mdi-magnify"
                single-line
              >
              </v-text-field>
            </v-form>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="d-flex flex-column  mt-10  align-center">
              <span>Jesse Maingi</span>
              <v-avatar class="">
                <img src="./assets/jesse-maingi.jpg" alt="Jesse Maingi" />
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="accent">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.VUE_APP_KEY)
    console.log(process.env.NODE_ENV)
  },
  data() {
    return {
      items: [
        { title: "Popular", icon: "mdi-movie-star" },
        { title: "Now Playing", icon: "mdi-animation-play" },
        { title: "Upcoming", icon: "mdi-movie-open-edit" },
        { title: "Top Rated", icon: "mdi-movie-filter" },
      ],
      drawer: false,
    }
  },
}
</script>

<style lang="scss">
.v-application--is-ltr .v-input__prepend-outer {
  cursor: pointer;
}

.v-list-item--active {
  color: "#f83745" !important;
}
</style>
