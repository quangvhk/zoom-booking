<template v-slot:activator="{ on }">
  <div>
    <v-app-bar dense app>
      <span>
        <v-app-bar-nav-icon
          class="hidden-md-and-down"
          @click.stop="overwriteMiniSidebar = !mini"
        ></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="openSidebar"
        ></v-app-bar-nav-icon>
      </span>
      <div class="headline text-uppercase ml-0">
        <div v-resize-text>
          <router-link
            :to="{ name: 'home' }"
            tag="span"
            style="cursor: pointer"
            v-if="isTokenSet"
            >{{ appTitle }}</router-link
          >
          <router-link
            :to="{ name: 'landing' }"
            tag="span"
            style="cursor: pointer"
            v-else
            >{{ appTitle }}</router-link
          >
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!--        <v-list-item class="hidden-sm-and-down">-->
        <!--          <v-icon>mdi-weather-sunny</v-icon>-->
        <!--          <v-list-item-action>-->
        <!--            <v-switch v-model="isDark" inset></v-switch>-->
        <!--          </v-list-item-action>-->
        <!--          <v-icon class="pl-2">mdi-weather-night</v-icon>-->
        <!--        </v-list-item>-->
        <v-menu v-if="admin" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text class="btnAdmin hidden-sm-and-down">
              <v-icon>mdi-lock</v-icon>
              &nbsp;{{ $t('adminItems.ADMIN') }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in adminItems"
              :key="index"
              :to="{ name: item.link }"
              exact
              :class="[item.class]"
            >
              <v-list-item-icon class="mr-2">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          text
          v-if="isTokenSet"
          @click="userLogout"
          class="hidden-sm-and-down btnLogout"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          {{ $t('menuItems.LOGOUT') }}
        </v-btn>
        <LocaleChanger />
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebar"
      :mini-variant.sync="mini"
      :permanent="!mobile"
      fixed
      app
    >
      <v-list>
        <v-list-item
          class="px-2 d-flex align-center"
          :class="[mini ? 'justify-start' : 'justify-center']"
        >
          <v-list-item-avatar :size="mini ? '40' : '80'">
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link v-if="!mini">
          <v-list-item-content>
            <v-list-item-title class="title text-center">
              Sandra Adams
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>

        <v-list-group v-if="admin" prepend-icon="mdi-lock" no-action>
          <v-list-item slot="activator" class="pl-0">
            <v-list-item-content>{{
              $t('adminItems.ADMIN')
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="(item, index) in adminItems"
            :key="index"
            :to="{ name: item.link }"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item v-if="isTokenSet" @click="userLogout">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ $t('menuItems.LOGOUT') }}
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action></v-list-item-action>
          <v-icon>mdi-weather-sunny</v-icon>
          <v-list-item-action class="ml-2">
            <v-switch id="themeSwitcher" v-model="isDark" inset></v-switch>
          </v-list-item-action>
          <v-icon>mdi-weather-night</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'

export default {
  name: 'Toolbar',
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.$store.getters.appTitle,
        },
        { name: 'application-name', content: this.$store.getters.appTitle },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' },
      ],
    }
  },
  components: {
    LocaleChanger,
  },
  directives: {
    ResizeText,
  },
  data() {
    return {
      isDark: false,
      mini: true,
      sidebar: false,
    }
  },
  computed: {
    ...mapGetters(['appTitle', 'isTokenSet', 'user']),
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    overwriteMiniSidebar: {
      get() {
        return this.$vuetify.breakpoint.mdAndDown || this.mini
      },
      set(value) {
        this.mini = value
      },
    },
    // sidebar: {
    //   get() {
    //     console.log('sidebar --> ', this.$vuetify.breakpoint.mdAndDown)
    //     return this.$vuetify.breakpoint.mdAndDown || this.overwriteOpenSidebar
    //   },
    //   set(value) {
    //     this.overwriteOpenSidebar = value
    //   },
    // },
    admin() {
      return this.user !== null ? this.user.role === 'admin' : false
    },
    adminItems() {
      return [
        {
          title: this.$t('adminItems.CITIES'),
          link: 'admin-cities',
          icon: 'mdi-city',
          class: 'btnAdminCities',
        },
        {
          title: this.$t('adminItems.USERS'),
          link: 'admin-users',
          icon: 'mdi-account-supervisor',
          class: 'btnAdminUsers',
        },
      ]
    },
    menuItems() {
      if (this.isTokenSet) {
        return [
          {
            title: this.$t('menuItems.HOME'),
            link: 'home',
            icon: 'mdi-home',
            class: 'btnHome',
          },
          {
            title: this.$t('menuItems.ABOUT'),
            link: 'about',
            icon: 'mdi-help-circle-outline',
            class: 'btnAbout',
          },
          {
            title: this.$t('menuItems.MY_PROFILE'),
            link: 'profile',
            icon: 'mdi-face',
            class: 'btnProfile',
          },
        ]
      }
      return [
        {
          title: this.$t('menuItems.HOME'),
          link: 'landing',
          icon: 'mdi-home',
        },
        {
          title: this.$t('menuItems.ABOUT'),
          link: 'about',
          icon: 'mdi-help-circle-outline',
          class: 'btnAbout',
        },
        {
          title: this.$t('menuItems.LOGIN'),
          link: 'login',
          icon: 'mdi-lock',
          class: 'btnLogin',
        },
        {
          title: this.$t('menuItems.SIGNUP'),
          link: 'signup',
          icon: 'mdi-plus-circle-outline',
          class: 'btnLogin',
        },
      ]
    },
  },
  methods: {
    userLogout() {
      this.$store.dispatch('userLogout')
    },
    openSidebar() {
      this.overwriteMiniSidebar = false
      this.sidebar = !this.sidebar
    },
  },
  watch: {
    isDark() {
      this.$vuetify.theme.dark = this.isDark
      localStorage.setItem('dark', this.isDark)
    },
  },
  created() {
    const dark = localStorage.getItem('dark')
    this.isDark = dark ? JSON.parse(dark) : false
  },
}
</script>
