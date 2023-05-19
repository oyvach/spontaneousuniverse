<script>
	import { onMount } from "svelte";
	let equ1 = `$$x_{\\rm{test}} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;

	onMount(() => {
		let script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
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

<h1>Christoffel symbols in curved space time</h1>
<hr />
<p>Connection...</p>
<p>{equ1}</p>