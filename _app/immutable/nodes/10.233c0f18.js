import{S as Qe,i as Ve,s as Xe,k as l,q as s,a as f,l as o,m,r,h as t,c as h,n as d,b as i,D as n,C as ke,o as Ye}from"../chunks/index.fe3c98df.js";function Ze(c){let u,L,q,E,I,p,M,_,k,se,oe,A,B,re,me,z,y,fe,D,C,he,O,b,ce,U,H,pe,J,G,de,K,T,ue,Q,w,_e,V,g,ve,X,P,ye,Y,N,be,Z,v,we,S,Pe,je,ee,j,xe,te,F,$e,ae,x,qe,ie,W,Ee,ne,$,Ie;return{c(){u=l("h1"),L=s("The Christoffel symbols of perturbed FLRW spacetimes"),q=f(),E=l("hr"),I=f(),p=l("p"),M=s(`It can be surprisingly difficult to find essential
	geometrical quantities you need to make calculations in
	some space times. They are easily available for the flat
	FLRW in for example (Dodelson 2003), but I have at least
	struggled finding them for the fully perturbed FLRW,
	especially when using fully conformal coordinates. One
	option is to use for example the 
    `),_=l("span"),k=l("a"),se=s("xAct"),oe=s(`
    package of
	Mathematica, but here instead, I will present some
	analytically derived results that have been verified against
    a Christoffel solver I made in
    `),A=l("span"),B=l("a"),re=s("sympy"),me=s(`.
    The cosmic time coordinate
    calculation is made entirely in sympy. I will be using the
	Poisson gauge, which reduces to the Newtonian gauge in
	the weak-field limit. The space-time interval is stated
	in conformal coordinates`),z=f(),y=l("span"),fe=s(c[1]),D=f(),C=l("p"),he=s(`from which we can find the metric. The connection does
	not need be defined in terms of the metric; it can
	instead be treated as an independent object as in the
	Palatini formalism. The most general connection
	describes a manifold that has curvature, torsion, and
	non-metricity, the latter of which relates to whether or
	not the covariant derivative that the connection forms
	commutes with the metric. If we require it to do so and
	also to have zero torsion, that fixes a unique
	connection in terms of the metric, known as the
	Christoffel symbol`),O=f(),b=l("span"),ce=s(c[0]),U=f(),H=l("p"),pe=s(`When one is finding the divergence of a vector-field,
	one will require the self-contraction of the connection,
	so we will find this specifically below, in addition to
	the complete symbols. All symbols not shown are
	implicitply zero, and I have only done the expansions to
	first order in the metric potentials, following the
	linearisation scheme of (Adamek 2016).`),J=f(),G=l("h2"),de=s("Conformal time coordinates"),K=f(),T=l("p"),ue=s(`Using conformal time, \\(\\rm d\\eta=\\rm d t/a\\), and
	space, \\(\\vec x = \\vec x_p/a \\), we find the Christoffel
	symbols`),Q=f(),w=l("span"),_e=s(c[2]),V=f(),g=l("p"),ve=s(`the latter of which I found using sympy and compactified according to appararent index-dependencies of the terms.
	To find this result, I derived the inverse of the metric using the cofactor expansion and Cramer's
	rule`),X=f(),P=l("span"),ye=s(c[3]),Y=f(),N=l("h2"),be=s("Cosmic time coordinates"),Z=f(),v=l("p"),we=s(`In the case of using the cosmic time coordinate
	`),S=l("span"),Pe=s("\\(\\rm d t=a \\rm d \\eta \\)"),je=s(", we find the symbols"),ee=f(),j=l("span"),xe=s(c[5]),te=f(),F=l("p"),$e=s("For which I have made use of the quantities"),ae=f(),x=l("span"),qe=s(c[4]),ie=f(),W=l("h3"),Ee=s("Flat space"),ne=f(),$=l("span"),Ie=s(c[6]),this.h()},l(e){u=o(e,"H1",{});var a=m(u);L=r(a,"The Christoffel symbols of perturbed FLRW spacetimes"),a.forEach(t),q=h(e),E=o(e,"HR",{}),I=h(e),p=o(e,"P",{});var R=m(p);M=r(R,`It can be surprisingly difficult to find essential
	geometrical quantities you need to make calculations in
	some space times. They are easily available for the flat
	FLRW in for example (Dodelson 2003), but I have at least
	struggled finding them for the fully perturbed FLRW,
	especially when using fully conformal coordinates. One
	option is to use for example the 
    `),_=o(R,"SPAN",{class:!0});var Ae=m(_);k=o(Ae,"A",{href:!0});var Be=m(k);se=r(Be,"xAct"),Be.forEach(t),Ae.forEach(t),oe=r(R,`
    package of
	Mathematica, but here instead, I will present some
	analytically derived results that have been verified against
    a Christoffel solver I made in
    `),A=o(R,"SPAN",{class:!0});var Ce=m(A);B=o(Ce,"A",{href:!0});var He=m(B);re=r(He,"sympy"),He.forEach(t),Ce.forEach(t),me=r(R,`.
    The cosmic time coordinate
    calculation is made entirely in sympy. I will be using the
	Poisson gauge, which reduces to the Newtonian gauge in
	the weak-field limit. The space-time interval is stated
	in conformal coordinates`),R.forEach(t),z=h(e),y=o(e,"SPAN",{class:!0});var Ge=m(y);fe=r(Ge,c[1]),Ge.forEach(t),D=h(e),C=o(e,"P",{});var Te=m(C);he=r(Te,`from which we can find the metric. The connection does
	not need be defined in terms of the metric; it can
	instead be treated as an independent object as in the
	Palatini formalism. The most general connection
	describes a manifold that has curvature, torsion, and
	non-metricity, the latter of which relates to whether or
	not the covariant derivative that the connection forms
	commutes with the metric. If we require it to do so and
	also to have zero torsion, that fixes a unique
	connection in terms of the metric, known as the
	Christoffel symbol`),Te.forEach(t),O=h(e),b=o(e,"SPAN",{class:!0});var ge=m(b);ce=r(ge,c[0]),ge.forEach(t),U=h(e),H=o(e,"P",{});var Ne=m(H);pe=r(Ne,`When one is finding the divergence of a vector-field,
	one will require the self-contraction of the connection,
	so we will find this specifically below, in addition to
	the complete symbols. All symbols not shown are
	implicitply zero, and I have only done the expansions to
	first order in the metric potentials, following the
	linearisation scheme of (Adamek 2016).`),Ne.forEach(t),J=h(e),G=o(e,"H2",{});var Se=m(G);de=r(Se,"Conformal time coordinates"),Se.forEach(t),K=h(e),T=o(e,"P",{});var Fe=m(T);ue=r(Fe,`Using conformal time, \\(\\rm d\\eta=\\rm d t/a\\), and
	space, \\(\\vec x = \\vec x_p/a \\), we find the Christoffel
	symbols`),Fe.forEach(t),Q=h(e),w=o(e,"SPAN",{class:!0});var We=m(w);_e=r(We,c[2]),We.forEach(t),V=h(e),g=o(e,"P",{});var Re=m(g);ve=r(Re,`the latter of which I found using sympy and compactified according to appararent index-dependencies of the terms.
	To find this result, I derived the inverse of the metric using the cofactor expansion and Cramer's
	rule`),Re.forEach(t),X=h(e),P=o(e,"SPAN",{class:!0});var Le=m(P);ye=r(Le,c[3]),Le.forEach(t),Y=h(e),N=o(e,"H2",{});var Me=m(N);be=r(Me,"Cosmic time coordinates"),Me.forEach(t),Z=h(e),v=o(e,"P",{});var le=m(v);we=r(le,`In the case of using the cosmic time coordinate
	`),S=o(le,"SPAN",{class:!0});var ze=m(S);Pe=r(ze,"\\(\\rm d t=a \\rm d \\eta \\)"),ze.forEach(t),je=r(le,", we find the symbols"),le.forEach(t),ee=h(e),j=o(e,"SPAN",{class:!0});var De=m(j);xe=r(De,c[5]),De.forEach(t),te=h(e),F=o(e,"P",{});var Oe=m(F);$e=r(Oe,"For which I have made use of the quantities"),Oe.forEach(t),ae=h(e),x=o(e,"SPAN",{class:!0});var Ue=m(x);qe=r(Ue,c[4]),Ue.forEach(t),ie=h(e),W=o(e,"H3",{});var Je=m(W);Ee=r(Je,"Flat space"),Je.forEach(t),ne=h(e),$=o(e,"SPAN",{class:!0});var Ke=m($);Ie=r(Ke,c[6]),Ke.forEach(t),this.h()},h(){d(k,"href","http://www.xact.es/"),d(_,"class","textlink"),d(B,"href","https://www.sympy.org/en/index.html"),d(A,"class","textlink"),d(y,"class","math"),d(b,"class","math"),d(w,"class","math"),d(P,"class","math"),d(S,"class","math--inline"),d(j,"class","math"),d(x,"class","math"),d($,"class","math")},m(e,a){i(e,u,a),n(u,L),i(e,q,a),i(e,E,a),i(e,I,a),i(e,p,a),n(p,M),n(p,_),n(_,k),n(k,se),n(p,oe),n(p,A),n(A,B),n(B,re),n(p,me),i(e,z,a),i(e,y,a),n(y,fe),i(e,D,a),i(e,C,a),n(C,he),i(e,O,a),i(e,b,a),n(b,ce),i(e,U,a),i(e,H,a),n(H,pe),i(e,J,a),i(e,G,a),n(G,de),i(e,K,a),i(e,T,a),n(T,ue),i(e,Q,a),i(e,w,a),n(w,_e),i(e,V,a),i(e,g,a),n(g,ve),i(e,X,a),i(e,P,a),n(P,ye),i(e,Y,a),i(e,N,a),n(N,be),i(e,Z,a),i(e,v,a),n(v,we),n(v,S),n(S,Pe),n(v,je),i(e,ee,a),i(e,j,a),n(j,xe),i(e,te,a),i(e,F,a),n(F,$e),i(e,ae,a),i(e,x,a),n(x,qe),i(e,ie,a),i(e,W,a),n(W,Ee),i(e,ne,a),i(e,$,a),n($,Ie)},p:ke,i:ke,o:ke,d(e){e&&t(u),e&&t(q),e&&t(E),e&&t(I),e&&t(p),e&&t(z),e&&t(y),e&&t(D),e&&t(C),e&&t(O),e&&t(b),e&&t(U),e&&t(H),e&&t(J),e&&t(G),e&&t(K),e&&t(T),e&&t(Q),e&&t(w),e&&t(V),e&&t(g),e&&t(X),e&&t(P),e&&t(Y),e&&t(N),e&&t(Z),e&&t(v),e&&t(ee),e&&t(j),e&&t(te),e&&t(F),e&&t(ae),e&&t(x),e&&t(ie),e&&t(W),e&&t(ne),e&&t($)}}}function et(c){let u=`$$
    \\Gamma_{\\mu\\nu}^{\\rho} =  \\frac{1}{2}g^{\\rho\\lambda}
    \\left(
    g_{\\lambda\\mu,\\nu}+g_{\\lambda\\nu,\\mu}-g_{\\mu\\nu,\\lambda}
    \\right).
    $$`,L=`$$
    \\rm d s^2 = a(\\tau)^2\\Big[ -e^{2\\Psi (\\tau, \\vec x)}\\rm d \\tau^2 
    - 2 B_i(\\tau, \\vec x) \\rm d x^i \\rm d \\tau + (e^{-2\\Phi
    (\\tau, \\vec x)}\\delta_{ij} + h_{ij}(\\tau, \\vec x))\\rm d x^i \\rm d x^j \\Big],
    $$`,q=`$$
    \\begin{eqnarray}
    \\Gamma^\\alpha_{0\\alpha} &=& \\frac{1}{2}g^{\\lambda\\alpha}g_{\\lambda\\alpha,0} = \\partial_0 \\left( \\Psi-3\\Phi+\\frac{1}{2}h\\right)+4\\mathcal{H}, \\\\
    \\Gamma^\\alpha_{i\\alpha} &=&  \\frac{1}{2}g^{\\lambda\\alpha}g_{\\lambda\\alpha,i} =\\partial_i \\left( \\Psi-3\\Phi+\\frac{1}{2}h\\right),\\\\
    \\Gamma^0_{ij} &=& \\mathcal{H}\\left(
        1 - 2 \\Psi - 2 \\Psi - \\dot\\Phi/\\mathcal{H}
    \\right)\\delta_{ij} + \\mathcal{H}h_{ij} + \\dot h_{ij}/2 
    + \\partial_{(i}B_{j)},
    \\\\\\Gamma^{\\mu}_{00} &=&  \\mathcal{H}\\delta_t^{\\mu}+\\partial_\\mu\\Psi-\\delta^{\\mu i}(B_i\\mathcal{H}+\\dot B_i),
    \\\\\\Gamma^{i}_{j0} &=&  \\delta_{ij}\\left( \\mathcal{H}-\\dot\\Phi \\right)+\\dot{h}_{ij}/2 + \\partial_{[i}B_{j]},
    \\\\\\Gamma^{i}_{jk} &=&  \\partial_{(j}h_{k)i}-\\frac{1}{2}\\partial_i h_{jk} 
    +\\left(\\partial_i\\Phi + B_i \\mathcal{H}\\right)
     \\delta_{jk} - 2\\delta_{i(j} \\partial_{k)}\\Phi,
    \\end{eqnarray}
    $$`,E=`$$
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
    $$`,I=`$$
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
    $$`,p=`$$
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
    \\Gamma^{\\mu}_{00} &=&  
    \\end{eqnarray}
    $$`,M=`$$
    \\begin{eqnarray}
    \\Gamma^0_{ij} &=&  a \\mathcal H \\delta_{ij}
    \\\\\\Gamma^i_{j0} &=& H \\delta_{ij}
    \\end{eqnarray}
    $$`;return Ye(()=>{let _=document.createElement("script");_.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",document.head.append(_),_.onload=()=>{MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]}}}}),[u,L,q,E,I,p,M]}class at extends Qe{constructor(u){super(),Ve(this,u,et,Ze,Xe,{})}}export{at as component};
