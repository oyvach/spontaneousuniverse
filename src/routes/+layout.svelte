<script>
  import "../app.postcss";
  import { base } from "$app/paths";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../lib/styles/base.css";
  import "../lib/styles/main.css";
</script>

<div class="app">
  <Header />
  <main class="content">
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    position: relative;
    min-height: 100vh;
    background-color: whitesmoke;
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    margin-block: 32px;
    margin-bottom: 30vh;
    padding: 16px 32px;
    visibility: visible;
    width: min(100vw - 16vw, 80ch);
    color: black;
    background-color: white;
  }
  @media (max-width: 768px) {
    .content {
      width: min(100vw - 4vw, 80ch);
    }
  }
</style>
