<template>
  <div>
    <portal-target name="dropdown" slim />
    <div class="flex flex-col">
      <div class="min-h-screen flex flex-col" @click="hideDropdownMenus">
        <div class="md:flex">
          <div class="bg-green-800 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center">
            <inertia-link class="mt-1" href="/">
              <span class="text-white text-xl font-extrabold">MailJournal</span>
            </inertia-link>
            <dropdown class="md:hidden" placement="bottom-end">
              <svg class="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              <div slot="dropdown" class="mt-2 px-8 py-4 shadow-lg bg-green-700 rounded">
                <main-menu />
              </div>
            </dropdown>
          </div>
          <div class="bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-end items-center">
            <dropdown class="mt-1" placement="bottom-end">
              <div class="flex items-center cursor-pointer select-none group">
                <div class="text-gray-800 group-hover:text-green-600 focus:text-green-600 mr-1 whitespace-no-wrap">
                  <span>{{ page.props.auth.user.name }}</span>
                </div>
                <icon class="w-5 h-5 group-hover:fill-green-600 fill-gray-800 focus:fill-green-600" name="cheveron-down" />
              </div>
              <div slot="dropdown" class="mt-2 py-2 shadow bg-white rounded text-sm">
                <a class="block px-6 py-2 hover:bg-green-500 hover:text-white" :href="route('logout')" @click.prevent="logout">Logout</a>
              </div>
            </dropdown>
          </div>
        </div>
        <div class="flex flex-grow">
          <div class="bg-green-700 flex-shrink-0 w-56 p-12 hidden md:block">
            <main-menu />
          </div>
          <div class="w-full overflow-hidden px-4 py-8 md:p-12">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Inertia, InertiaLink } from 'inertia-vue'
import Dropdown from '@/Shared/Dropdown'
import Icon from '@/Shared/Icon'
import MainMenu from '@/Shared/MainMenu'

export default {
  components: {
    InertiaLink,
    Dropdown,
    Icon,
    MainMenu
  },
  inject: ['page'],
  props: {
    title: String
  },
  data() {
    return {
      showUserMenu: false,
      accounts: null
    }
  },
  watch: {
    title(title) {
      this.updatePageTitle(title)
    }
  },
  mounted() {
    this.updatePageTitle(this.title)
  },
  methods: {
    updatePageTitle(title) {
      document.title = title ? `${title} | ${this.page.props.app.name}` : this.page.props.app.name
    },
    hideDropdownMenus() {
      this.showUserMenu = false
    },
    logout() {
      Inertia.visit(this.route('logout').url(), { method: 'post' })
    }
  }
}
</script>
