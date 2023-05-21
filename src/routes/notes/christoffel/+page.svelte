<script>
	import { onMount } from "svelte";
	let christoffeleq = `$$
    \\Gamma_{\\mu\\nu}^{\\rho} =  \\frac{1}{2}g^{\\rho\\lambda}
    \\left(
    g_{\\lambda\\mu,\\nu}+g_{\\lambda\\nu,\\mu}-g_{\\mu\\nu,\\lambda}
    \\right).
    $$`;
	let spacetime = `$$
    \\rm d s^2 = a(\\tau)^2\\Big[ -e^{2\\Psi (\\tau, \\vec x)}\\rm d \\tau^2 
    - 2 B_i(\\tau, \\vec x) \\rm d x^i \\rm d \\tau + (e^{-2\\Phi
    (\\tau, \\vec x)}\\delta_{ij} + h_{ij}(\\tau, \\vec x))\\rm d x^i \\rm d x^j \\Big],
    $$`;
	let conformal = `$$
    \\begin{eqnarray}
    \\Gamma^\\alpha_{0\\alpha} &=& \\frac{1}{2}g^{\\lambda\\alpha}g_{\\lambda\\alpha,0} = \\partial_0 \\left( \\Psi-3\\Phi+\\frac{1}{2}h\\right)+4\\mathcal{H}, \\\\
    \\Gamma^\\alpha_{i\\alpha} &=&  \\frac{1}{2}g^{\\lambda\\alpha}g_{\\lambda\\alpha,i} =\\partial_i \\left( \\Psi-3\\Phi+\\frac{1}{2}h\\right),\\\\
    \\Gamma^0_{ij} &=& 
    \\\\\\Gamma^i_{00} &=& 
    \\end{eqnarray}
    $$`;
	let determinant = `$$
    \\begin{eqnarray}
    \\sqrt{-g} &=& a^4\\left(
        1+\\Psi-3\\Phi+h/2
    \\right) \\\\
    g_{\\mu\\nu} &=& 
    a^{2} \\begin{pmatrix}
    \\quad-e^{2\\Psi} & -B_i \\\\
    -B_i & \\delta_{ij}e^{-2\\Phi} +h_{ij}
    \\end{pmatrix},\\\\
    g^{\\mu\\nu} &=& 
    a^{-2} \\begin{pmatrix}
    \\quad-e^{-2\\Psi} & -B_i \\\\
    -B_i & \\delta_{ij}e^{2\\Phi} -h_{ij}
    \\end{pmatrix},
    \\end{eqnarray}
    $$`;
	let determinantCT = `$$
    \\begin{eqnarray}
    g &=& g_{\\rm{conformal}} \\\\
    g_{\\mu\\nu} &=& 
    \\begin{pmatrix}
    \\quad- e^{2\\Psi} & -a B_i \\\\
    -a B_i & a^2\\left( \\delta_{ij}e^{-2\\Phi} +h_{ij} \\right)
    \\end{pmatrix},\\\\
    g^{\\mu\\nu} &=& 
    \\begin{pmatrix}
    \\quad - e^{-2\\Psi} & -a^{-1} B_i \\\\
    - a^{-1}B_i & a^{-2}\\left( \\delta_{ij}e^{2\\Phi} -h_{ij}\\right)
    \\end{pmatrix},
    \\end{eqnarray}
    $$`;
	let cosmictime = `$$
    \\begin{eqnarray}
    \\Gamma^\\alpha_{0\\alpha} &=& \\\\
    \\Gamma^\\alpha_{i\\alpha} &=&  \\\\
    \\Gamma^0_{ij} &=&
    \\ a \\partial_{(i}B_{j)}
     + a \\mathcal{H}\\left(
        \\left[1-2\\Psi-2\\Phi\\right]\\delta_{ij}+h_{ij}
    \\right)+a^2\\left(-\\dot\\Phi\\delta_{ij}+\\dot h_{ij}/2\\right)
    \\\\
    \\Gamma^i_{j0} &=&   \\\\
    \\Gamma^0_{i0} &=&   \\\\
    \\Gamma^i_{00} &=&  
    \\end{eqnarray}
    $$`;
	let flat = `$$
    \\begin{eqnarray}
    \\Gamma^0_{ij} &=&  a \\mathcal H \\delta_{ij}
    \\\\\\Gamma^i_{j0} &=& H \\delta_{ij}
    \\end{eqnarray}
    $$`;

	onMount(() => {
		
		let script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);
		
		script.onload = () => {
      MathJax = {
        tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
      };
		};
					  
	});
</script>

<h1>
	The Christoffel symbols of perturbed FLRW spacetimes
</h1>
<hr />
<p>
	It can be surprisingly difficult to find essential
	geometrical quantities you need to make calculations in
	some space times. They are easily available for the flat
	FLRW in for example (Dodelson 2003), but I have at least
	struggled finding them for the fully perturbed FLRW,
	especially when using fully conformal coordinates. One
	option is to use for example the xAct package of
	Mathematica, but here instead, I will present some
	analytically derived results. I will be using the
	Poisson gauge, which reduces to the Newtonian gauge in
	the weak-field limit. The space-time interval is stated
	in conformal coordinates
</p>
<span class="math">{spacetime}</span>
<p>
	from which we can find the metric. The connection does
	not need be defined in terms of the metric; it can
	instead be treated as an independent object as in the
	Palatini formalism. The most general connection
	describes a manifold that has curvature, torsion, and
	non-metricity, the latter of which relates to whether or
	not the covariant derivative that the connection forms
	commutes with the metric. If we require it to do so and
	also to have zero torsion, that fixes a unique
	connection in terms of the metric, known as the
	Christoffel symbol
</p>
<span class="math">{christoffeleq}</span>
<p>
	When one is finding the divergence of a vector-field,
	one will require the self-contraction of the connection,
	so we will find this specifically below, in addition to
	the complete symbols. All symbols not shown are
	implicitply zero, and I have only done the expansions to
	first order in the metric potentials, following the
	linearisation scheme of (Adamek 2016).
</p>

<h2>Conformal time coordinates</h2>
<p>
	Using conformal time, \(\rm d\eta=\rm d t/a\), and
	space, \(\vec x = \vec x_p/a \), we find the Christoffel
	symbols
</p>
<span class="math">{conformal}</span>
<p>
	For which I made use of the useful quantities that I
	have derived using the cofactor expansion and Cramer's
	rule.
</p>
<span class="math">{determinant}</span>

<h2>Cosmic time coordinates</h2>

<p>
	In the case of using the cosmic time coordinate
	<span class="math--inline"
		>\(\rm d t=a \rm d \eta \)</span
	>, we find the symbols
</p>
<span class="math">{cosmictime}</span>

<p>For which I have made use of the quantities</p>
<span class="math">{determinantCT}</span>

<h3>Flat space</h3>

<span class="math">{flat}</span>
