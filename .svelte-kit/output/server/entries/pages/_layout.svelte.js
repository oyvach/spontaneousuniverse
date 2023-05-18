import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
import { b as base$1 } from "../../chunks/paths.js";
import "classnames";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.footer.svelte-mx6kz2{position:absolute;min-height:8vh;bottom:0%;display:flex;width:100vw;padding:0px 32px;flex-flow:nowrap;justify-content:space-between;background-image:url("/header.jpeg");background-size:cover;background-repeat:no-repeat;background-position:center}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="footer svelte-mx6kz2"></nav>`;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.header.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{padding:16px 36px;display:flex;flex-flow:nowrap;justify-content:space-between;width:100vw;top:0%;background-image:url("/header.jpeg");background-size:cover;background-repeat:no-repeat;background-position:center;box-shadow:0px 2px 8px 4px rgba(49, 40, 40, 0.6)}@media(max-width: 768px){.header.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{font-size:small;padding:24px}}.logo.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{font-size:24px;background-color:hsla(0, 16%, 73%, 0);border-radius:0%;margin-left:5%}@media(max-width: 768px){.logo.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{font-size:20px;position:relative;vertical-align:bottom}}.logo.svelte-18mavyv a.svelte-18mavyv.svelte-18mavyv{color:white;text-decoration:none}.logo.svelte-18mavyv>a.svelte-18mavyv.svelte-18mavyv:visited{color:white;text-decoration:none}.logo.svelte-18mavyv>a.svelte-18mavyv.svelte-18mavyv:hover{color:grey;text-decoration:none}.dropdown.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{color:white;position:relative;display:inline-block}.dropdown.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv:hover{color:grey}.dropdown-content.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{text-align:center;display:none;position:absolute;background-color:#f9f9f9;min-width:156px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.418);padding:8px 8px;z-index:1;border-style:solid;border-color:grey;border-radius:1px}.dropdown-item.svelte-18mavyv.svelte-18mavyv.svelte-18mavyv{text-align:left;margin-left:24px}.dropdown-content.svelte-18mavyv>.dropdown-item.svelte-18mavyv>a.svelte-18mavyv:hover{color:grey}.dropdown-content.svelte-18mavyv>.dropdown-item.svelte-18mavyv>a.svelte-18mavyv{color:black}.dropdown.svelte-18mavyv:hover .dropdown-content.svelte-18mavyv.svelte-18mavyv{display:block}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="header svelte-18mavyv"><div class="logo svelte-18mavyv"><a href="${escape(base$1, true) + "/"}" class="svelte-18mavyv">Øyvind Christiansen </a></div>
  <div class="links"><div class="dropdown svelte-18mavyv"><span>Topics</span>
      <div class="dropdown-content svelte-18mavyv"><div class="dropdown-item svelte-18mavyv"><a class="link svelte-18mavyv" href="/publications">Publications</a></div>
        <div class="dropdown-item svelte-18mavyv"><a class="link svelte-18mavyv" href="/symmetron">Asymmetron</a></div>
        <div class="dropdown-item svelte-18mavyv"><a class="link svelte-18mavyv" href="/aest">AEST</a></div>
        <div class="dropdown-item svelte-18mavyv"><a class="link svelte-18mavyv" href="/cbh">Charged Black Holes</a></div></div></div>
    <div class="link"><a href="${escape(base$1, true) + "/about"}">about me </a></div>
    <div class="link"><a href="${escape(base$1, true) + "/acknowledgements"}">acknowledgements </a></div>
    <div class="link"><a href="${escape(base$1, true) + "/contact"}">contact </a></div></div>
</nav>`;
});
const base = "";
const main = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1qo7bn3{margin:0;padding:0;display:flex;flex-flow:column nowrap;align-items:center;width:100%;position:relative;min-height:100vh;background-color:whitesmoke}.content.svelte-1qo7bn3{display:flex;flex-flow:column nowrap;margin-block:32px;margin-bottom:30vh;padding:16px 32px;visibility:visible;width:min(100vw - 16vw, 80ch);color:black;background-color:white}@media(max-width: 768px){.content.svelte-1qo7bn3{width:min(100vw - 4vw, 80ch)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1qo7bn3">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main class="content svelte-1qo7bn3">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
