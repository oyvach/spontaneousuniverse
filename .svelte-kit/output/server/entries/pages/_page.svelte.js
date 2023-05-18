import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".math.svelte-omsf0s{overflow-x:hidden scroll;overflow-y:hidden;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content"><h1>Gravitation, Science and Data Visulisation</h1>
  <hr>
  <p>This web page is currently under development, and will function as a
    showcase for my research into the the dark sector physics in the
    cosmological and astrophysical setting. Ideally it will provide interesting
    reading and resources for both the general audience and other researchers
    working on similar problems.
  </p>
  <h2>N-body simulations</h2>
  <img class="fit-picture" src="${escape(base, true) + "/illustrasjon.jpeg"}" alt="snapshot illustration">
  Shown above is a slice of the simulation box of a universe where the the dark energy
  component is not the cosmological constant, but rather the
  <span class="textlink"><a href="${escape(base, true) + "/symmetron"}">symmetron</a></span>
  field, a dynamic component that can cluster. The field has the has the potential
  <span class="math svelte-omsf0s">$$ V \\equiv V - \\ln A(\\phi) T_m = V_0 - \\frac${escape(1)}${escape(2)}\\mu^2\\phi^2 - \\frac${escape(1)}${escape(3)}\\kappa
    \\phi^3 + \\frac${escape(1)}${escape(4)}\\lambda \\phi^4 - \\ln A(\\phi) T_m, $$
  </span>
  in which the trace of the matter stress-energy tensor INSERT makes the extremum
  at origin stable as long as INSERT, effectively screening the the effect of the
  dynamical scalar field and making it behave like a cosmological constant for high
  density locations. This will allow it to agree with solar system experiments, while
  introducing novel phenomenology at cosmological scales, motivated by some observational
  tensions. Whether it truly will be able to do so in consistency with available
  and upcoming empirical data is something I will set out to explore in my research.
  \\(3+1\\alpha \\)
</div>
<div><h2>NB: To do, web page:</h2>
  <ul class="myUL"><li>Make sure that page behaves sensible when loading/different window sizes,
      different platforms (cell phone) etc
    </li>
    <li>Add content...</li>
    <li>new object navigator on left shoulder with hyperlinks to different
      sections
    </li>
    <li>Good method for citation/references?</li>
    <li>Animations...</li>
    <li>Videos (Youtube inline, local files, etc)</li>
    <li>Switch over to (vector graphic -&gt; SVG, pics -&gt; webp, movies -&gt; webm)
    </li>
    <li>Cell phone support! Develop using cmd+opt+m in firefox</li></ul>
</div>`;
});
export {
  Page as default
};
