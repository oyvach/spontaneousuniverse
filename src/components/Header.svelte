<script>
  import { base } from "$app/paths";
  import { Button, Dropdown, DropdownItem, Chevron } from "flowbite-svelte";
</script>

<nav class="header">
  <div class="logo">
    <a href="{base}/"> Øyvind Christiansen </a>
  </div>
  <div class="links">
    <div class="dropdown">
      <span>Topics</span>
      <div class="dropdown-content">
        <div class="dropdown-item">
          <a class="link" href="/publications">Publications</a>
        </div>
        <div class="dropdown-item">
          <a class="link" href="/symmetron">Asymmetron</a>
        </div>
        <div class="dropdown-item">
          <a class="link" href="/aest">AEST</a>
        </div>
        <div class="dropdown-item">
          <a class="link" href="/cbh">Charged Black Holes</a>
        </div>
      </div>
    </div>
    <div class="link">
      <a href="{base}/about"> about me </a>
    </div>
    <div class="link">
      <a href="{base}/acknowledgements"> acknowledgements </a>
    </div>
    <div class="link">
      <a href="{base}/contact"> contact </a>
    </div>
  </div>
</nav>

<style>
  .header {
    padding: 16px 36px;
    display: flex;
    flex-flow: nowrap;
    justify-content: space-between;
    width: 100vw;
    top: 0%;
    background-image: url("/header.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 2px 8px 4px rgba(49, 40, 40, 0.6);
  }
  @media (max-width: 768px) {
    .header {
      font-size: small;
      padding: 24px;
    }
  }

  .logo {
    font-size: 24px;
    background-color: hsla(0, 16%, 73%, 0);
    border-radius: 0%;
    margin-left: 5%;
  }

  @media (max-width: 768px) {
    .logo {
      font-size: 20px;
      position: relative;
      vertical-align: bottom;
    }
  }

  .logo a {
    color: white;
    text-decoration: none;
  }
  .logo > a:visited {
    color: white;
    text-decoration: none;
  }
  .logo > a:hover {
    color: grey;
    text-decoration: none;
  }

  .dropdown {
    color: white;
    position: relative;
    display: inline-block;
  }

  .dropdown:hover {
    color: grey;
  }

  .dropdown-content {
    text-align: center;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 156px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.418);
    padding: 8px 8px;
    z-index: 1;
    border-style: solid;
    border-color: grey;
    border-radius: 1px;
  }
  .dropdown-item {
    text-align: left;
    margin-left: 24px;
  }

  .dropdown-content > .dropdown-item > a:hover {
    color: grey;
  }
  .dropdown-content > .dropdown-item > a {
    color: black;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
