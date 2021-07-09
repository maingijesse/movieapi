import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Playing from "../views/Playing"
import Upcoming from "../views/Upcoming"
import Top from "../views/Top"
import Movie from "../views/Movie"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/playing",
    name: "Playing",
    component: Playing,
  },
  {
    path: "/upcoming",
    name: "Upcoming Movies",
    component: Upcoming,
  },
  {
    path: "/top",
    name: "Top Rated",
    component: Top,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
