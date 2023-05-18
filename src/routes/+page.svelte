<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  onMount(() => {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);

    script.onload = () => {
      MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
        svg: { fontCache: "global" },
      };
    };
  });
</script>

<div class="content">
  <h1>Gravitation, Science and Data Visulisation</h1>
  <hr />
  <p>
    This web page is currently under development, and will function as a
    showcase for my research into the the dark sector physics in the
    cosmological and astrophysical setting. Ideally it will provide interesting
    reading and resources for both the general audience and other researchers
    working on similar problems.
  </p>
  <h2>N-body simulations</h2>
  <img
    class="fit-picture"
    src="{base}/illustrasjon.jpeg"
    alt="snapshot illustration"
  />
  Shown above is a slice of the simulation box of a universe where the the dark energy
  component is not the cosmological constant, but rather the
  <span class="textlink"><a href="{base}/symmetron">symmetron</a></span>
  field, a dynamic component that can cluster. The field has the has the potential
  <span class="math">
    $$ V \equiv V - \ln A(\phi) T_m = V_0 - \frac{1}{2}\mu^2\phi^2 - \frac{1}{3}\kappa
    \phi^3 + \frac{1}{4}\lambda \phi^4 - \ln A(\phi) T_m, $$
  </span>
  in which the trace of the matter stress-energy tensor INSERT makes the extremum
  at origin stable as long as INSERT, effectively screening the the effect of the
  dynamical scalar field and making it behave like a cosmological constant for high
  density locations. This will allow it to agree with solar system experiments, while
  introducing novel phenomenology at cosmological scales, motivated by some observational
  tensions. Whether it truly will be able to do so in consistency with available
  and upcoming empirical data is something I will set out to explore in my research.
  \(3+1\alpha \)
</div>
<div>
  <h2>NB: To do, web page:</h2>
  <ul class="myUL">
    <li>
      Make sure that page behaves sensible when loading/different window sizes,
      different platforms (cell phone) etc
    </li>
    <li>Add content...</li>
    <li>
      new object navigator on left shoulder with hyperlinks to different
      sections
    </li>
    <li>Good method for citation/references?</li>
    <li>Animations...</li>
    <li>Videos (Youtube inline, local files, etc)</li>
    <li>
      Switch over to (vector graphic -> SVG, pics -> webp, movies -> webm)
    </li>
    <li>Cell phone support! Develop using cmd+opt+m in firefox</li>
  </ul>
</div>

<style>
  .math {
    overflow-x: hidden scroll;
    overflow-y: hidden;
    display: block;
  }

  .math--inline {
    display: inline-block;
    /*NOTE leave space for trailing punctuation*/
    max-width: 99%;
  }

  .math--block {
    display: block;
  }
</style>