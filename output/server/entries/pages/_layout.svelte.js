import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.footer.svelte-o9bgab{position:fixed;bottom:0%;display:flex;width:100%;padding:0px 32px;flex-flow:nowrap;justify-content:space-between;background-image:url("header.jpeg");background-size:cover;background-repeat:no-repeat;background-position:center}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="footer svelte-o9bgab"><div class="links"><div class="link"><a href="#"><p>⇧ top</p></a></div></div>
</nav>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.header.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui{padding:16px 32px;display:flex;flex-flow:nowrap;justify-content:space-between;width:100%;top:0%;background-image:url("header.jpeg");background-size:cover;background-repeat:no-repeat;background-position:center;box-shadow:0px 2px 8px 4px rgba(49, 40, 40, 0.6)}.logo.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui{font-size:24px;background-color:hsla(0, 16%, 73%, 0);border-radius:0%}.logo.svelte-1ma90ui a.svelte-1ma90ui.svelte-1ma90ui{color:white;text-decoration:none}.logo.svelte-1ma90ui>a.svelte-1ma90ui.svelte-1ma90ui:visited{color:white;text-decoration:none}.logo.svelte-1ma90ui>a.svelte-1ma90ui.svelte-1ma90ui:hover{color:grey;text-decoration:none}.dropdown.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui{color:white;position:relative;display:inline-block}.dropdown.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui:hover{color:grey}.dropdown-content.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui{text-align:center;display:none;position:absolute;background-color:#f9f9f9;min-width:156px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.418);padding:8px 8px;z-index:1;border-style:solid;border-color:grey;border-radius:1px}.dropdown-item.svelte-1ma90ui.svelte-1ma90ui.svelte-1ma90ui{text-align:left;margin-left:24px}.dropdown-content.svelte-1ma90ui>.dropdown-item.svelte-1ma90ui>a.svelte-1ma90ui:hover{color:grey}.dropdown-content.svelte-1ma90ui>.dropdown-item.svelte-1ma90ui>a.svelte-1ma90ui{color:black}.dropdown.svelte-1ma90ui:hover .dropdown-content.svelte-1ma90ui.svelte-1ma90ui{display:block}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="header svelte-1ma90ui"><div class="logo svelte-1ma90ui"><a href="/" class="svelte-1ma90ui">Øyvind Christiansen </a></div>
  <div class="links"><div class="dropdown svelte-1ma90ui"><span>Topics</span>
      <div class="dropdown-content svelte-1ma90ui"><div class="dropdown-item svelte-1ma90ui"><a class="link svelte-1ma90ui" href="/publications">Publications</a></div>
        <div class="dropdown-item svelte-1ma90ui"><a class="link svelte-1ma90ui" href="/symmetron">Asymmetron</a></div>
        <div class="dropdown-item svelte-1ma90ui"><a class="link svelte-1ma90ui" href="/aest">AEST</a></div>
        <div class="dropdown-item svelte-1ma90ui"><a class="link svelte-1ma90ui" href="/cbh">Charged Black Holes</a></div></div></div>
    <div class="link"><a href="/about">about me </a></div>
    <div class="link"><a href="/acknowledgements">acknowledgements </a></div>
    <div class="link"><a href="/contact">contact </a></div></div>
</nav>`;
});
const base = "";
const main = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1ty9wao{margin:0;padding:0;display:flex;flex-flow:column nowrap;align-items:center;width:100%;height:100%;background-color:whitesmoke}.content.svelte-1ty9wao{display:flex;flex-flow:column nowrap;margin-block:32px;margin-bottom:20%;height:fit-content;padding:16px 32px;visibility:visible;width:min(100vw - 32px, 80ch);color:black;background-color:white}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1ty9wao">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main class="content svelte-1ty9wao">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
