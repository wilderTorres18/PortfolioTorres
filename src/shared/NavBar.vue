<template>
  <q-header id="navbar">
    <q-toolbar class="toolbar bg-white text-primary q-py-sm">
      <q-toolbar-title>
        <a class="logo-btn lt-sm" clickable @click="goHome()">
          Mi portafolio
        </a>
        <a class="nav-btn gt-xs" clickable @click="goHome()">
          <q-icon name="fas fa-house" size="18px" />
          Inicio
        </a>
        <a class="nav-btn gt-xs" clickable @click="scrollTo('abtme')">
          <q-icon name="fas fa-circle-info" size="18px" />
          Sobre mi
        </a>
        <a class="nav-btn gt-xs" clickable @click="scrollTo('projects')">
          <q-icon name="fas fa-code-branch" size="18px" />
          Proyectos
        </a>
        <a class="nav-btn gt-xs" clickable @click="scrollTo('services')">
          <q-icon name="fas fa-gear" size="18px" />
          Servicios
        </a>
        <a class="nav-btn gt-xs" clickable @click="scrollTo('skills')">
          <q-icon name="fas fa-laptop-code" size="18px" />
          Habilidades
        </a>
        <a class="nav-btn gt-xs" clickable @click="scrollTo('testimonials')">
          <q-icon name="fas fa-comment-dots" size="18px" />
          Testimonios
        </a>
        <!-- <a class="nav-btn gt-xs" clickable>
          <q-icon name="fab fa-blogger" size="18px" />
          My Blogs
        </a> -->
      </q-toolbar-title>

      <div>
        <a
          class="nav-btn gt-xs"
          :class="{ 'active-link': currentRoute === '/support-me' }"
          clickable
          @click="goTo('/support-me')"
        >
          <q-icon name="fas fa-circle-dollar-to-slot" size="18px" />
          <!-- <q-icon name="fas fa-hand-holding-dollar" size="18px" /> -->
          Apoyame
        </a>
        <a
          class="nav-btn gt-xs"
          :class="{ 'active-link': currentRoute === '/contact' }"
          clickable
          @click="goTo('/contact')"
        >
          <q-icon name="fas fa-square-envelope" size="18px" />
          Contactame
        </a>
        <q-btn
          flat
          dense
          round
          class="menu-btn lt-sm"
          icon="menu"
          aria-label="Menu"
          @click="dropDownMenu = !dropDownMenu"
        >
          <q-menu
            auto-close
            :offset="[15, 15]"
            transition-show="jump-down"
            transition-hide="jump-up"
            max-width="450px"
            max-height="93vh"
            class="lt-sm"
          >
            <q-list
              class="dropdown-menu bg-primary text-white q-pt-xl"
              style="min-width: 300px; min-height: 85vh; margin-top: 0"
            >
              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/abtme' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('abtme')"
                >
                  <q-icon name="fas fa-circle-info" class="q-pr-sm" />
                  Sobre mi
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/projects' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('projects')"
                >
                  <q-icon name="fas fa-code-branch" class="q-pr-sm" />
                  Proyectos
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/services' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('services')"
                >
                  <q-icon name="fas fa-gear" class="q-pr-sm" />
                  Servicios
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/skills' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('skills')"
                >
                  <q-icon name="fas fa-laptop-code" class="q-pr-sm" />
                  Habilidades
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/testimonials' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('testimonials')"
                >
                  <q-icon name="fas fa-comment-dots" class="q-pr-sm" />
                  Testimonios
                </q-item-section>
              </q-item>

              <!-- <q-item class="q-pl-xl" exact clickable v-ripple>
                <q-item-section style="display: inline-block">
                  <q-icon name="fab fa-blogger" class="q-pr-sm" />
                  My Blogs
                </q-item-section>
              </q-item> -->

              <q-separator inset color="white" class="lt-sm q-my-lg" />

              <q-item
                class="lt-sm q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/support-me' }"
                exact
                clickable
                v-ripple
                @click="goTo('/support-me')"
              >
                <q-item-section style="display: inline-block">
                  <q-icon name="fas fa-circle-dollar-to-slot" class="q-pr-sm" />
                  Apoyame
                </q-item-section>
              </q-item>

              <q-item
                class="lt-sm q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/contact' }"
                exact
                clickable
                v-ripple
                @click="goTo('/contact')"
              >
                <q-item-section style="display: inline-block">
                  <q-icon name="fas fa-square-envelope" class="q-pr-sm" />
                  Contactame
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "NavBar",

  setup() {
    return {
      dropDownMenu: ref(false),
    };
  },

  computed: {
    currentRoute() {
      return useRoute().path;
    },
  },

  methods: {
    goHome() {
      this.$router.push("/").then(() => {
        this.$router.go();
      });
    },

    goTo(route) {
      this.$router.push(route);
    },

    scrollTo(ref) {
      this.$router.push({ name: "home", hash: `#${ref}` });
    },
  },
});
</script>

<style lang="scss" scoped>
#navbar {
  font-family: "Roboto", sans-serif;
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(40px);
  border-bottom: 1.5px solid #f0effb;
}

.toolbar {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

.logo-btn,
.nav-btn {
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  color: #007bff;
  margin-right: 12px;
  text-decoration: none;
}

.nav-btn:hover,
.logo-btn:hover {
  color: #2356ad;
}

.logo-btn {
  font-weight: 700;
}

.active-link {
  color: #2356ad;
}

.menu-btn {
  // color: #534b84;
  color: #f9f9f9;
  background-color: #007bff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
}

.dropdown-menu .q-item.q-router-link--active,
.dropdown-menu .q-item--active,
.dropdown-menu .active-q-item {
  color: #ffffff !important;
  background-color: #2356ad !important;
}

@media only screen and (max-width: 575px) {
  .logo-btn {
    font-size: 16px;
    font-weight: 600;
    margin-right: 0;
  }

  .toolbar {
    padding-left: 16px;
  }
}
</style>
