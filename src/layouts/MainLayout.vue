<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Teste Framework
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <MenuPrincipal
          v-for="tela in menuPrincipal"
          :key="tela.title"
          v-bind="tela"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuPrincipal from 'components/MenuPrincipal'

export default {
  name: 'MainLayout',

  components: {
    MenuPrincipal
  },

  data () {
    return {
      leftDrawerOpen: false,
      menuPrincipal: [
        {
          title: 'Index',
          caption: 'Página principal',
          icon: 'school',
          routeName: 'index'
        },
        {
          title: 'Postagens',
          caption: 'Veja aqui as postagens',
          icon: 'school',
          routeName: 'postagens'
        },
        {
          title: 'Albuns',
          caption: 'Veja aqui os albuns',
          icon: 'school',
          routeName: 'albuns'
        },
        {
          title: 'TO-DOs',
          caption: 'TO-DOs',
          icon: 'school',
          routeName: 'to-dos'
        }
      ]
    }
  }
}
</script>

<style>
header {
  background-image: linear-gradient(to right, #7900df , #b582df);
}
</style>