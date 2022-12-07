<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { mapWritableState } from 'pinia';
import { useClientStore } from './stores/client';

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapWritableState(useClientStore, ['isLogin'])
  },
  created() {
    if(localStorage.getItem("access_token")) {
      this.isLogin = true
    }
  }
}

</script>

<template>
  <Navbar/>

  <RouterView/>
  <Footer/>
</template>
