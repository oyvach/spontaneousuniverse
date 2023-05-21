<script>
  import { base } from "$app/paths";
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
          <a class="link" href="/aest">AeST</a>
        </div>
        <div class="dropdown-item">
          <a class="link" href="/cbh">Charged Black Holes</a>
        </div>
        <div class="dropdown-item">
          <a class="link" href="/notes">Notes</a>
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
    box-shadow: 0px 1px 8px 1px rgba(54, 53, 53, 0.6);
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
    visibility: hidden;
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: max-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.418);
    padding: 8px 8px;
    z-index: 1;
  }
  @media (max-width: 768px) {
    .dropdown-content {
      min-width: 10em;
    }
  }

  .dropdown-item {
    text-align: left;
    margin-left: 12px;
    margin-right: 12px;
    padding: 2px 2px;
  }

  .dropdown-content > .dropdown-item > a:hover {
    color: rgb(216, 216, 216);
  }
  .dropdown-content > .dropdown-item > a {
    color: black;
  }

  .dropdown:hover .dropdown-content {
    visibility: visible;
  }
</style>
