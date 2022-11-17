<template>
  <div class="container">
    <SideBar />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SideBar from '@/components/SideBar/SideBar.vue';
  import TheFooter from '@/components/TheFooter.vue';

  export default defineComponent({
    components: {
      SideBar,
      TheFooter,
    },
    data() {
      return {};
    },
  });
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
