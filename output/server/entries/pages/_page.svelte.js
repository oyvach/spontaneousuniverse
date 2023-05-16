import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let equ1 = `$$
      V_{\\text{eff}}  \\equiv V - \\ln A(\\phi) T_m = V_0 - \\frac{1}{2}\\mu^2\\phi^2
      - \\frac{1}{3}\\kappa \\phi^3 + \\frac{1}{4}\\lambda \\phi^4 - \\ln A(\\phi) T_m,
      $$`;
  return `<div class="content"><h1>Gravitation, Science and Data Visulisation</h1>
  <hr>
  <p>This web page is currently under development, and will function as a
    showcase for my research into the the dark sector physics in the
    cosmological and astrophysical setting. Ideally it will provide interesting
    reading and resources for both the general audience and other researchers
    working on similar problems.
  </p>
  <h2>N-body simulations</h2>
  <img class="fit-picture" src="illustrasjon.jpeg">
  <p>Shown above is a slice of the simulation box of a universe where the the
    dark energy component is not the cosmological constant, but rather the
    <span class="textlink"><a href="./pages/symmetron.html">symmetron</a></span>
    field, a dynamic component that can cluster. The field has the has the potential
    ${escape(equ1)}
    in which the trace of the matter stress-energy tensor INSERT makes the extremum
    at origin stable as long as INSERT, effectively screening the the effect of the
    dynamical scalar field and making it behave like a cosmological constant for
    high density locations. This will allow it to agree with solar system experiments,
    while introducing novel phenomenology at cosmological scales, motivated by some
    observational tensions. Whether it truly will be able to do so in consistency
    with available and upcoming empirical data is something I will set out to explore
    in my research.
  </p></div>
<div><h2>NB: To do, web page:</h2>
  <ul class="myUL"><li>Save header object so I do not have to rewrite code for each html file?
    </li>
    <li>When switching web page, the entire page flashes... Possible to have
      without flash?
    </li>
    <li>Make sure that page behaves sensible when loading/different window sizes,
      different platforms (cell phone) etc
    </li>
    <li>Server... github DNS error when changing domain for some reason...</li>
    <li>Add content...</li>
    <li>Remove scrollbar?</li>
    <li>new object navigator on left shoulder with hyperlinks to different
      sections
    </li>
    <li>Good method for citation/references?</li>
    <li>Animations...</li>
    <li>Videos (Youtube inline, local files, etc)</li>
    <li>Switch over to (vector graphic -&gt; SVG, pics -&gt; webp, movies -&gt; webm)
    </li></ul></div>`;
});
export {
  Page as default
};
