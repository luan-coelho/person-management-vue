<template>
  <nav class="open">
    <div class="logo">
      <i class="bx bx-menu menu-icon"></i>
      <span class="logo-name">Layout</span>
    </div>

    <div class="sidebar">
      <div class="logo">
        <i class="bx bx-menu menu-icon"></i>
        <span class="logo-name">Layout</span>
      </div>

      <div class="sidebar-content">
        <ul class="lists">
          <li class="list">
            <router-link to="/home" class="nav-link">
              <i class="bx bxs-dashboard icon"></i>
              <span class="link">Dashboard</span>
            </router-link>
          </li>
          <li class="list">
            <router-link to="/person" class="nav-link">
              <i class="bx bxs-user-account icon"></i>
              <span class="link">Pessoas</span>
            </router-link>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-package icon"></i>
              <span class="link">Produtos</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-message-rounded icon"></i>
              <span class="link">Serviços</span>
            </a>
          </li>
        </ul>

        <div class="bottom-cotent">
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bxs-user-circle icon"></i>
              <span class="link">Perfil</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link log-out">
              <i class="bx bx-log-out icon"></i>
              <span class="link">Encerrar Sessão</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SideBar',
    data() {
      return {
        visibleFull: true,
      };
    },
    mounted() {
      const navBar = document.querySelector('nav'),
        menuBtns = document.querySelectorAll('.menu-icon'),
        overlay = document.querySelector('.overlay');

      menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener('click', () => {
          navBar?.classList.toggle('open');
        });
      });

      overlay?.addEventListener('click', () => {
        navBar?.classList.remove('open');
      });
    },
  });
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    min-height: 100%;
    background: #e3f2fd;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #242526;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  }
  nav .logo {
    display: flex;
    align-items: center;
    margin: 0 24px;
  }
  .logo .menu-icon {
    color: #fff;
    font-size: 24px;
    margin-right: 14px;
    cursor: pointer;
  }
  .logo .logo-name {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
  }
  nav .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 220px;
    padding: 20px 0;
    background-color: #242526;
    box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }
  nav.open .sidebar {
    left: 0;
  }
  .sidebar .sidebar-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 16px;
  }
  .sidebar-content .list {
    list-style: none;
  }
  .list .nav-link {
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 14px 12px;
    border-radius: 8px;
    text-decoration: none;
  }
  .lists .nav-link:hover {
    background-color: #0d89ec;
    transition: 0.6s;
  }

  .bottom-cotent:last-child {
    padding-bottom: 1em;
  }

  .log-out:hover {
    background-color: #ab3b3b;
    transition: 0.8s;
  }

  .nav-link .icon {
    margin-right: 14px;
    font-size: 20px;
    color: #fff;
  }
  .nav-link .link {
    font-size: 16px;
    color: #fff;
    font-weight: 400;
  }
  .lists .nav-link:hover .icon,
  .lists .nav-link:hover .link {
    color: #fff;
  }
</style>
