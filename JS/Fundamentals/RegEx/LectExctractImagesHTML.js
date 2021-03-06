// Find all IMG tags and copy SRC
const html = `<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Combination rootpage-Combination skin-vector action-view" cz-shortcut-listen="true">		<div id="mw-page-base" class="noprint"></div>
<div id="mw-head-base" class="noprint"></div>
<div id="content" class="mw-body" role="main">
    <a id="top"></a>
    <div id="siteNotice" class="mw-body-content"><div id="centralNotice"></div><!-- CentralNotice --></div><div class="mw-indicators mw-body-content">
</div>
<h1 id="firstHeading" class="firstHeading" lang="en">Combination</h1>			<div id="bodyContent" class="mw-body-content">
        <div id="siteSub" class="noprint">From Wikipedia, the free encyclopedia</div>				<div id="contentSub"></div>
                        <div id="jump-to-nav" class="mw-jump">
            Jump to:					<a href="#mw-head">navigation</a>, 					<a href="#p-search">search</a>
        </div>
        <div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><div role="note" class="hatnote navigation-not-searchable">This article is about the mathematics of selecting part of a collection. For other uses, see <a href="/wiki/Combination_(disambiguation)" class="mw-disambig" title="Combination (disambiguation)">Combination (disambiguation)</a>.</div>
<div role="note" class="hatnote navigation-not-searchable">"COMBIN" redirects here. For other uses, see <a href="/wiki/Combin_(disambiguation)" class="mw-redirect mw-disambig" title="Combin (disambiguation)">Combin (disambiguation)</a>.</div>
<div role="note" class="hatnote navigation-not-searchable">"nCr" redirects here. For other uses, see <a href="/wiki/NCR_(disambiguation)" class="mw-redirect mw-disambig" title="NCR (disambiguation)">NCR (disambiguation)</a>.</div>
<p>In <a href="/wiki/Mathematics" title="Mathematics">mathematics</a>, a <b>combination</b> is a selection of items from a collection, such that (unlike <a href="/wiki/Permutation" title="Permutation">permutations</a>) the order of selection does not matter. For example, given three fruits, say an apple, an orange and a pear, there are three combinations of two that can be drawn from this set: an apple and a pear; an apple and an orange; or a pear and an orange. More formally, a <i>k</i>-<b>combination</b> of a <a href="/wiki/Set_(mathematics)" title="Set (mathematics)">set</a> <i>S</i> is a subset of <i>k</i> distinct elements of <i>S</i>. If the set has <i>n</i> elements, the number of <i>k</i>-combinations is equal to the <a href="/wiki/Binomial_coefficient" title="Binomial coefficient">binomial coefficient</a></p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\frac {n(n-1)\dotsb (n-k+1)}{k(k-1)\dotsb 1}},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
      <mo>⋯<!-- ⋯ --></mo>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mi>k</mi>
      <mo>+</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mrow>
      <mi>k</mi>
      <mo stretchy="false">(</mo>
      <mi>k</mi>
      <mo>−<!-- − --></mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
      <mo>⋯<!-- ⋯ --></mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\frac {n(n-1)\dotsb (n-k+1)}{k(k-1)\dotsb 1}},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.671ex; width:32.755ex; height:6.509ex;" alt="{\binom {n}{k}}={\frac {n(n-1)\dotsb (n-k+1)}{k(k-1)\dotsb 1}},"></span></dd>
</dl>
<p>which can be written using <a href="/wiki/Factorial" title="Factorial">factorials</a> as <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \textstyle {\frac {n!}{k!(n-k)!}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mstyle displaystyle="false" scriptlevel="0">
  <mrow class="MJX-TeXAtom-ORD">
    <mfrac>
      <mrow>
        <mi>n</mi>
        <mo>!</mo>
      </mrow>
      <mrow>
        <mi>k</mi>
        <mo>!</mo>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>−<!-- − --></mo>
        <mi>k</mi>
        <mo stretchy="false">)</mo>
        <mo>!</mo>
      </mrow>
    </mfrac>
  </mrow>
</mstyle>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \textstyle {\frac {n!}{k!(n-k)!}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.838ex; width:7.008ex; height:4.343ex;" alt="\textstyle {\frac {n!}{k!(n-k)!}}"></span> whenever <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle k\leq n}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>k</mi>
<mo>≤<!-- ≤ --></mo>
<mi>n</mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle k\leq n}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/621f658bb51d7caac329d29e9bf435361813777f" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.704ex; height:2.343ex;" alt="k\leq n"></span>, and which is zero when <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle k>n}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>k</mi>
<mo>&gt;</mo>
<mi>n</mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle k&gt;n}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/66e81682bf174c978e9008ffb557ba4da2cf7478" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.704ex; height:2.176ex;" alt="k>n"></span>. The set of all <i>k</i>-combinations of a set <i>S</i> is often denoted by <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \textstyle {\binom {S}{k}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mstyle displaystyle="false" scriptlevel="0">
  <mrow class="MJX-TeXAtom-ORD">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>S</mi>
        <mi>k</mi>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mrow>
</mstyle>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \textstyle {\binom {S}{k}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fe7e42ea65abdc7f06cd4d253cd9948f244d6545" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:3.19ex; height:3.509ex;" alt="{\displaystyle \textstyle {\binom {S}{k}}}"></span>.</p>
<p>Combinations refer to the combination of <i>n</i> things taken <i>k</i> at a time without repetition. To refer to combinations in which repetition is allowed, the terms <i>k</i>-selection,<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup> <i>k</i>-multiset,<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup> or <i>k</i>-combination with repetition are often used.<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> If, in the above example, it were possible to have two of any one kind of fruit there would be 3 more 2-selections: one with two apples, one with two oranges, and one with two pears.</p>
<p>Although the set of three fruits was small enough to write a complete list of combinations, with large sets this becomes impractical. For example, a <a href="/wiki/Hand_(poker)" class="mw-redirect" title="Hand (poker)">poker hand</a> can be described as a 5-combination (<i>k</i>&nbsp;=&nbsp;5) of cards from a 52 card deck (<i>n</i>&nbsp;=&nbsp;52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations, and the chance of drawing any one hand at random is&nbsp;1&nbsp;/&nbsp;2,598,960.</p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle" lang="en" dir="ltr" xml:lang="en">
<h2>Contents</h2>
<span class="toctoggle">&nbsp;[<a role="button" tabindex="0" class="togglelink">hide</a>]&nbsp;</span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Number_of_k-combinations"><span class="tocnumber">1</span> <span class="toctext">Number of <i>k</i>-combinations</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Example_of_counting_combinations"><span class="tocnumber">1.1</span> <span class="toctext">Example of counting combinations</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Enumerating_k-combinations"><span class="tocnumber">1.2</span> <span class="toctext">Enumerating <i>k</i>-combinations</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-4"><a href="#Number_of_combinations_with_repetition"><span class="tocnumber">2</span> <span class="toctext">Number of combinations with repetition</span></a>
<ul>
<li class="toclevel-2 tocsection-5"><a href="#Example_of_counting_multisubsets"><span class="tocnumber">2.1</span> <span class="toctext">Example of counting multisubsets</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-6"><a href="#Number_of_k-combinations_for_all_k"><span class="tocnumber">3</span> <span class="toctext">Number of <i>k</i>-combinations for all <i>k</i></span></a></li>
<li class="toclevel-1 tocsection-7"><a href="#Probability:_sampling_a_random_combination"><span class="tocnumber">4</span> <span class="toctext">Probability: sampling a random combination</span></a></li>
<li class="toclevel-1 tocsection-8"><a href="#See_also"><span class="tocnumber">5</span> <span class="toctext">See also</span></a></li>
<li class="toclevel-1 tocsection-9"><a href="#Notes"><span class="tocnumber">6</span> <span class="toctext">Notes</span></a></li>
<li class="toclevel-1 tocsection-10"><a href="#References"><span class="tocnumber">7</span> <span class="toctext">References</span></a></li>
<li class="toclevel-1 tocsection-11"><a href="#External_links"><span class="tocnumber">8</span> <span class="toctext">External links</span></a></li>
</ul>
</div>
<p></p>
<h2><span class="mw-headline" id="Number_of_k-combinations">Number of <i>k</i>-combinations</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=1" title="Edit section: Number of k-combinations">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="note" class="hatnote navigation-not-searchable">Main article: <a href="/wiki/Binomial_coefficient" title="Binomial coefficient">Binomial coefficient</a></div>
<div class="thumb tright">
<div class="thumbinner" style="width:222px;"><a href="/wiki/File:Combinations_without_repetition;_5_choose_3.svg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Combinations_without_repetition%3B_5_choose_3.svg/220px-Combinations_without_repetition%3B_5_choose_3.svg.png" width="220" height="213" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Combinations_without_repetition%3B_5_choose_3.svg/330px-Combinations_without_repetition%3B_5_choose_3.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/65/Combinations_without_repetition%3B_5_choose_3.svg/440px-Combinations_without_repetition%3B_5_choose_3.svg.png 2x" data-file-width="250" data-file-height="242"></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Combinations_without_repetition;_5_choose_3.svg" class="internal" title="Enlarge"></a></div>
3-element subsets of a 5-element set</div>
</div>
</div>
<p>The <a href="/wiki/Permutations_and_combinations#case_in" class="mw-redirect" title="Permutations and combinations">number of <i>k</i>-combinations</a> from a given set <i>S</i> of <i>n</i> elements is often denoted in elementary combinatorics texts by <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C(n,k)}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>C</mi>
<mo stretchy="false">(</mo>
<mi>n</mi>
<mo>,</mo>
<mi>k</mi>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle C(n,k)}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0156b716afda8988cc95572986f147917c3b8fe5" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:7.216ex; height:2.843ex;" alt="C(n,k)"></span>, or by a variation such as <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{k}^{n}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msubsup>
  <mi>C</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msubsup>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle C_{k}^{n}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fee549e664007a80759a5ce8e696d54f4fd996d1" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:3.016ex; height:2.843ex;" alt="C_{k}^{n}"></span>, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {}_{n}C_{k}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mrow class="MJX-TeXAtom-ORD">

  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msub>
<msub>
  <mi>C</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {}_{n}C_{k}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/846dc3e79abc1db020c2588140a418703f524e9d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:3.969ex; height:2.509ex;" alt="{}_{n}C_{k}"></span>, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {}^{n}C_{k}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msup>
  <mrow class="MJX-TeXAtom-ORD">

  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msup>
<msub>
  <mi>C</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {}^{n}C_{k}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/10255ea6f6be016a6ab4d8910c53209a4b9ee1bd" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:3.969ex; height:2.676ex;" alt="{}^{n}C_{k}"></span>, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{n,k}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>C</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
    <mo>,</mo>
    <mi>k</mi>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle C_{n,k}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bdb416527a2744b763f4052853d934d6777dfd11" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:4.194ex; height:2.843ex;" alt="C_{{n,k}}"></span> or even <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{n}^{k}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msubsup>
  <mi>C</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
  </mrow>
</msubsup>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle C_{n}^{k}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9b088b67f00e4739e57c658ac7dd5913898013ac" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.887ex; height:2.843ex;" alt="C_{n}^{k}"></span> (the latter form was standard in French, Romanian, Russian, Chinese<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> and Polish texts<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (April 2012)">citation needed</span></a></i>]</sup>). The same number however occurs in many other mathematical contexts, where it is denoted by <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\tbinom {n}{k}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mstyle displaystyle="false" scriptlevel="0">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>n</mi>
        <mi>k</mi>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mstyle>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\tbinom {n}{k}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:3.116ex; height:3.176ex;" alt="{\tbinom {n}{k}}"></span> (often read as "<i>n</i> choose <i>k</i>"); notably it occurs as a coefficient in the <a href="/wiki/Binomial_formula" class="mw-redirect" title="Binomial formula">binomial formula</a>, hence its name <b>binomial coefficient</b>. One can define <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\tbinom {n}{k}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mstyle displaystyle="false" scriptlevel="0">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>n</mi>
        <mi>k</mi>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mstyle>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\tbinom {n}{k}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:3.116ex; height:3.176ex;" alt="{\tbinom {n}{k}}"></span> for all natural numbers <i>k</i> at once by the relation</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle (1+X)^{n}=\sum _{k\geq 0}{\binom {n}{k}}X^{k},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>+</mo>
<mi>X</mi>
<msup>
  <mo stretchy="false">)</mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msup>
<mo>=</mo>
<munder>
  <mo>∑<!-- ∑ --></mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
    <mo>≥<!-- ≥ --></mo>
    <mn>0</mn>
  </mrow>
</munder>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<msup>
  <mi>X</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>k</mi>
  </mrow>
</msup>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle (1+X)^{n}=\sum _{k\geq 0}{\binom {n}{k}}X^{k},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8d151361d61b9297641517b2031ad50a636c9a46" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -3.338ex; width:24.399ex; height:7.009ex;" alt="{\displaystyle (1+X)^{n}=\sum _{k\geq 0}{\binom {n}{k}}X^{k},}"></span></dd>
</dl>
<p>from which it is clear that</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{0}}={\binom {n}{n}}=1,}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mn>0</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>n</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mn>1</mn>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{0}}={\binom {n}{n}}=1,}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/60a924fc85da7e28152c97bafee42deb8064de58" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:17.638ex; height:6.176ex;" alt="{\displaystyle {\binom {n}{0}}={\binom {n}{n}}=1,}"></span></dd>
</dl>
<p>and further,</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}=0}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mn>0</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}=0}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4f2bc3e21cb9f37945844d08f67b177b20cabda3" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:9.077ex; height:6.176ex;" alt="{\displaystyle {\binom {n}{k}}=0}"></span> for <i>k</i>&nbsp;&gt;&nbsp;<i>n</i>.</dd>
</dl>
<p>To see that these coefficients count <i>k</i>-combinations from <i>S</i>, one can first consider a collection of <i>n</i> distinct variables <i>X</i><sub><i>s</i></sub> labeled by the elements <i>s</i> of <i>S</i>, and expand the <a href="/wiki/Multiplication" title="Multiplication">product</a> over all elements of&nbsp;<i>S</i>:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \prod _{s\in S}(1+X_{s});}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<munder>
  <mo>∏<!-- ∏ --></mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>s</mi>
    <mo>∈<!-- ∈ --></mo>
    <mi>S</mi>
  </mrow>
</munder>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>+</mo>
<msub>
  <mi>X</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>s</mi>
  </mrow>
</msub>
<mo stretchy="false">)</mo>
<mo>;</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \prod _{s\in S}(1+X_{s});}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ec0e4e9ec6ebfdb9966d04ec9fc3a9ea4b214c8e" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -3.171ex; width:12.356ex; height:5.676ex;" alt="\prod _{s\in S}(1+X_{s});"></span></dd>
</dl>
<p>it has 2<sup><i>n</i></sup> distinct terms corresponding to all the subsets of <i>S</i>, each subset giving the product of the corresponding variables <i>X</i><sub><i>s</i></sub>. Now setting all of the <i>X</i><sub><i>s</i></sub> equal to the unlabeled variable <i>X</i>, so that the product becomes <span class="nowrap">(1 + <i>X</i>)<sup><i>n</i></sup></span>, the term for each <i>k</i>-combination from <i>S</i> becomes <i>X</i><sup><i>k</i></sup>, so that the coefficient of that power in the result equals the number of such <i>k</i>-combinations.</p>
<p>Binomial coefficients can be computed explicitly in various ways. To get all of them for the expansions up to <span class="nowrap">(1 + <i>X</i>)<sup><i>n</i></sup></span>, one can use (in addition to the basic cases already given) the recursion relation</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\binom {n-1}{k-1}}+{\binom {n-1}{k}},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mrow>
        <mi>n</mi>
        <mo>−<!-- − --></mo>
        <mn>1</mn>
      </mrow>
      <mrow>
        <mi>k</mi>
        <mo>−<!-- − --></mo>
        <mn>1</mn>
      </mrow>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>+</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mrow>
        <mi>n</mi>
        <mo>−<!-- − --></mo>
        <mn>1</mn>
      </mrow>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\binom {n-1}{k-1}}+{\binom {n-1}{k}},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0ad549fc68ce9889ccb2b4cd29f105c9436926f7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:29.039ex; height:6.176ex;" alt="{\displaystyle {\binom {n}{k}}={\binom {n-1}{k-1}}+{\binom {n-1}{k}},}"></span></dd>
</dl>
<p>for 0 &lt; <i>k</i> &lt; <i>n</i>, which follows from <span class="nowrap">(1 + <i>X</i>)<sup><i>n</i></sup></span> = <span class="nowrap">(1 + <i>X</i>)<sup><i>n</i> − 1</sup>(1 + <i>X</i>)</span>; this leads to the construction of <a href="/wiki/Pascal%27s_triangle" title="Pascal's triangle">Pascal's triangle</a>.</p>
<p>For determining an individual binomial coefficient, it is more practical to use the formula</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\frac {n(n-1)(n-2)\cdots (n-k+1)}{k!}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>2</mn>
      <mo stretchy="false">)</mo>
      <mo>⋯<!-- ⋯ --></mo>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mi>k</mi>
      <mo>+</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mrow>
      <mi>k</mi>
      <mo>!</mo>
    </mrow>
  </mfrac>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\frac {n(n-1)(n-2)\cdots (n-k+1)}{k!}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/080b33f4775936c6f2a2f3b0c28cd5b846dfe85b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:39.315ex; height:6.343ex;" alt="{\binom {n}{k}}={\frac {n(n-1)(n-2)\cdots (n-k+1)}{k!}}"></span>.</dd>
</dl>
<p>The <a href="/wiki/Numerator" class="mw-redirect" title="Numerator">numerator</a> gives the number of <a href="/wiki/Permutations_and_combinations#case_i" class="mw-redirect" title="Permutations and combinations"><i>k</i>-permutations</a> of <i>n</i>, i.e., of sequences of <i>k</i> distinct elements of <i>S</i>, while the <a href="/wiki/Denominator" class="mw-redirect" title="Denominator">denominator</a> gives the number of such <i>k</i>-permutations that give the same <i>k</i>-combination when the order is ignored.</p>
<p>When <i>k</i> exceeds <i>n</i>/2, the above formula contains factors common to the numerator and the denominator, and canceling them out gives the relation</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\binom {n}{n-k}},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mrow>
        <mi>n</mi>
        <mo>−<!-- − --></mo>
        <mi>k</mi>
      </mrow>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\binom {n}{n-k}},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/5ab2a3c255ba72d0904e56626a13e882dda50112" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:17.429ex; height:6.176ex;" alt="{\displaystyle {\binom {n}{k}}={\binom {n}{n-k}},}"></span></dd>
</dl>
<p>for 0 ≤ <i>k</i> ≤ <i>n</i>. This expresses a symmetry that is evident from the binomial formula, and can also be understood in terms of <i>k</i>-combinations by taking the <a href="/wiki/Complement_(set_theory)" title="Complement (set theory)">complement</a> of such a combination, which is an <span class="nowrap">(<i>n</i> − <i>k</i>)</span>-combination.</p>
<p>Finally there is a formula which exhibits this symmetry directly, and has the merit of being easy to remember:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\frac {n!}{k!(n-k)!}},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>!</mo>
    </mrow>
    <mrow>
      <mi>k</mi>
      <mo>!</mo>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mi>k</mi>
      <mo stretchy="false">)</mo>
      <mo>!</mo>
    </mrow>
  </mfrac>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\frac {n!}{k!(n-k)!}},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0f4e3f6d2dc3075f5569c82118fad11c32dff393" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.671ex; width:19.158ex; height:6.343ex;" alt="{\binom {n}{k}}={\frac {n!}{k!(n-k)!}},"></span></dd>
</dl>
<p>where <i>n</i>! denotes the <a href="/wiki/Factorial" title="Factorial">factorial</a> of <i>n</i>. It is obtained from the previous formula by multiplying denominator and numerator by <span class="nowrap">(<i>n</i> − <i>k</i>)</span>!, so it is certainly inferior as a method of computation to that formula.</p>
<p>The last formula can be understood directly, by considering the <i>n</i>! permutations of all the elements of <i>S</i>. Each such permutation gives a <i>k</i>-combination by selecting its first <i>k</i> elements. There are many duplicate selections: any combined permutation of the first <i>k</i> elements among each other, and of the final (<i>n</i>&nbsp;−&nbsp;<i>k</i>) elements among each other produces the same combination; this explains the division in the formula.</p>
<p>From the above formulas follow relations between adjacent numbers in Pascal's triangle in all three directions:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {n}{k}}={\begin{cases}{\binom {n}{k-1}}{\frac {n-k+1}{k}}&amp;\quad {\text{if }}k>0\\{\binom {n-1}{k}}{\frac {n}{n-k}}&amp;\quad {\text{if }}k<n\\{\binom {n-1}{k-1}}{\frac {n}{k}}&amp;\quad {\text{if }}n,k>0\end{cases}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mo>{</mo>
    <mtable columnalign="left left" rowspacing=".2em" columnspacing="1em" displaystyle="false">
      <mtr>
        <mtd>
          <mrow class="MJX-TeXAtom-ORD">
            <mrow>
              <mrow class="MJX-TeXAtom-OPEN">
                <mo maxsize="1.2em" minsize="1.2em">(</mo>
              </mrow>
              <mfrac linethickness="0">
                <mi>n</mi>
                <mrow>
                  <mi>k</mi>
                  <mo>−<!-- − --></mo>
                  <mn>1</mn>
                </mrow>
              </mfrac>
              <mrow class="MJX-TeXAtom-CLOSE">
                <mo maxsize="1.2em" minsize="1.2em">)</mo>
              </mrow>
            </mrow>
          </mrow>
          <mrow class="MJX-TeXAtom-ORD">
            <mfrac>
              <mrow>
                <mi>n</mi>
                <mo>−<!-- − --></mo>
                <mi>k</mi>
                <mo>+</mo>
                <mn>1</mn>
              </mrow>
              <mi>k</mi>
            </mfrac>
          </mrow>
        </mtd>
        <mtd>
          <mspace width="1em"></mspace>
          <mrow class="MJX-TeXAtom-ORD">
            <mtext>if&nbsp;</mtext>
          </mrow>
          <mi>k</mi>
          <mo>&gt;</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mrow class="MJX-TeXAtom-ORD">
            <mrow>
              <mrow class="MJX-TeXAtom-OPEN">
                <mo maxsize="1.2em" minsize="1.2em">(</mo>
              </mrow>
              <mfrac linethickness="0">
                <mrow>
                  <mi>n</mi>
                  <mo>−<!-- − --></mo>
                  <mn>1</mn>
                </mrow>
                <mi>k</mi>
              </mfrac>
              <mrow class="MJX-TeXAtom-CLOSE">
                <mo maxsize="1.2em" minsize="1.2em">)</mo>
              </mrow>
            </mrow>
          </mrow>
          <mrow class="MJX-TeXAtom-ORD">
            <mfrac>
              <mi>n</mi>
              <mrow>
                <mi>n</mi>
                <mo>−<!-- − --></mo>
                <mi>k</mi>
              </mrow>
            </mfrac>
          </mrow>
        </mtd>
        <mtd>
          <mspace width="1em"></mspace>
          <mrow class="MJX-TeXAtom-ORD">
            <mtext>if&nbsp;</mtext>
          </mrow>
          <mi>k</mi>
          <mo>&lt;</mo>
          <mi>n</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mrow class="MJX-TeXAtom-ORD">
            <mrow>
              <mrow class="MJX-TeXAtom-OPEN">
                <mo maxsize="1.2em" minsize="1.2em">(</mo>
              </mrow>
              <mfrac linethickness="0">
                <mrow>
                  <mi>n</mi>
                  <mo>−<!-- − --></mo>
                  <mn>1</mn>
                </mrow>
                <mrow>
                  <mi>k</mi>
                  <mo>−<!-- − --></mo>
                  <mn>1</mn>
                </mrow>
              </mfrac>
              <mrow class="MJX-TeXAtom-CLOSE">
                <mo maxsize="1.2em" minsize="1.2em">)</mo>
              </mrow>
            </mrow>
          </mrow>
          <mrow class="MJX-TeXAtom-ORD">
            <mfrac>
              <mi>n</mi>
              <mi>k</mi>
            </mfrac>
          </mrow>
        </mtd>
        <mtd>
          <mspace width="1em"></mspace>
          <mrow class="MJX-TeXAtom-ORD">
            <mtext>if&nbsp;</mtext>
          </mrow>
          <mi>n</mi>
          <mo>,</mo>
          <mi>k</mi>
          <mo>&gt;</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {n}{k}}={\begin{cases}{\binom {n}{k-1}}{\frac {n-k+1}{k}}&amp;\quad {\text{if }}k&gt;0\\{\binom {n-1}{k}}{\frac {n}{n-k}}&amp;\quad {\text{if }}k&lt;n\\{\binom {n-1}{k-1}}{\frac {n}{k}}&amp;\quad {\text{if }}n,k&gt;0\end{cases}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/465c16bddb26d1c072200c2b35ae34ec51277984" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -5.005ex; width:36.362ex; height:11.176ex;" alt="{\binom {n}{k}}={\begin{cases}{\binom {n}{k-1}}{\frac {n-k+1}{k}}&amp;\quad {\text{if }}k>0\\{\binom {n-1}{k}}{\frac {n}{n-k}}&amp;\quad {\text{if }}k<n\\{\binom {n-1}{k-1}}{\frac {n}{k}}&amp;\quad {\text{if }}n,k>0\end{cases}}"></span>.</dd>
</dl>
<p>Together with the basic cases <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\tbinom {n}{0}}=1={\tbinom {n}{n}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mstyle displaystyle="false" scriptlevel="0">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>n</mi>
        <mn>0</mn>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mstyle>
</mrow>
<mo>=</mo>
<mn>1</mn>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mstyle displaystyle="false" scriptlevel="0">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>n</mi>
        <mi>n</mi>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mstyle>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\tbinom {n}{0}}=1={\tbinom {n}{n}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/02a799c900e4739328c05e6772c14e48001dcd8b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.171ex; width:13.591ex; height:3.343ex;" alt="{\tbinom {n}{0}}=1={\tbinom {n}{n}}"></span>, these allow successive computation of respectively all numbers of combinations from the same set (a row in Pascal's triangle), of <i>k</i>-combinations of sets of growing sizes, and of combinations with a complement of fixed size <span class="nowrap"><i>n</i> − <i>k</i></span>.</p>
<h3><span class="mw-headline" id="Example_of_counting_combinations">Example of counting combinations</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=2" title="Edit section: Example of counting combinations">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>As a specific example, one can compute the number of five-card hands possible from a standard fifty-two card deck as:<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup></p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {52 \choose 5}={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2\times 1}}={\frac {311{,}875{,}200}{120}}=2{,}598{,}960.}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mn>52</mn>
      <mn>5</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mn>52</mn>
      <mo>×<!-- × --></mo>
      <mn>51</mn>
      <mo>×<!-- × --></mo>
      <mn>50</mn>
      <mo>×<!-- × --></mo>
      <mn>49</mn>
      <mo>×<!-- × --></mo>
      <mn>48</mn>
    </mrow>
    <mrow>
      <mn>5</mn>
      <mo>×<!-- × --></mo>
      <mn>4</mn>
      <mo>×<!-- × --></mo>
      <mn>3</mn>
      <mo>×<!-- × --></mo>
      <mn>2</mn>
      <mo>×<!-- × --></mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>311,875,200</mn>
    <mn>120</mn>
  </mfrac>
</mrow>
<mo>=</mo>
<mn>2,598,960.</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {52 \choose 5}={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2\times 1}}={\frac {311{,}875{,}200}{120}}=2{,}598{,}960.}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/cc23290c935c895f42918bf2486ec5e8b70045bd" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:61.533ex; height:6.176ex;" alt="{52 \choose 5}={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2\times 1}}={\frac {311{,}875{,}200}{120}}=2{,}598{,}960."></span></dd>
</dl>
<p>Alternatively one may use the formula in terms of factorials and cancel the factors in the numerator against parts of the factors in the denominator, after which only multiplication of the remaining factors is required:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\begin{alignedat}{2}{52 \choose 5}&amp;={\frac {52!}{5!47!}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48\times {\cancel {47!}}}{5\times 4\times 3\times 2\times {\cancel {1}}\times {\cancel {47!}}}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2}}\\[5pt]&amp;={\frac {(26\times {\cancel {2}})\times (17\times {\cancel {3}})\times (10\times {\cancel {5}})\times 49\times (12\times {\cancel {4}})}{{\cancel {5}}\times {\cancel {4}}\times {\cancel {3}}\times {\cancel {2}}}}\\[5pt]&amp;={26\times 17\times 10\times 49\times 12}\\[5pt]&amp;=2{,}598{,}960.\end{alignedat}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mtable columnalign="right left right left" rowspacing="0.8em 0.8em 0.8em 0.8em 0.8em 0.3em" columnspacing="0em 0em 0em 0em" displaystyle="true">
    <mtr>
      <mtd>
        <mrow class="MJX-TeXAtom-ORD">
          <mrow>
            <mrow class="MJX-TeXAtom-OPEN">
              <mo maxsize="2.047em" minsize="2.047em">(</mo>
            </mrow>
            <mfrac linethickness="0">
              <mn>52</mn>
              <mn>5</mn>
            </mfrac>
            <mrow class="MJX-TeXAtom-CLOSE">
              <mo maxsize="2.047em" minsize="2.047em">)</mo>
            </mrow>
          </mrow>
        </mrow>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mn>52</mn>
              <mo>!</mo>
            </mrow>
            <mrow>
              <mn>5</mn>
              <mo>!</mo>
              <mn>47</mn>
              <mo>!</mo>
            </mrow>
          </mfrac>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mn>52</mn>
              <mo>×<!-- × --></mo>
              <mn>51</mn>
              <mo>×<!-- × --></mo>
              <mn>50</mn>
              <mo>×<!-- × --></mo>
              <mn>49</mn>
              <mo>×<!-- × --></mo>
              <mn>48</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>47</mn>
                  <mo>!</mo>
                </menclose>
              </mrow>
            </mrow>
            <mrow>
              <mn>5</mn>
              <mo>×<!-- × --></mo>
              <mn>4</mn>
              <mo>×<!-- × --></mo>
              <mn>3</mn>
              <mo>×<!-- × --></mo>
              <mn>2</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>1</mn>
                </menclose>
              </mrow>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>47</mn>
                  <mo>!</mo>
                </menclose>
              </mrow>
            </mrow>
          </mfrac>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mn>52</mn>
              <mo>×<!-- × --></mo>
              <mn>51</mn>
              <mo>×<!-- × --></mo>
              <mn>50</mn>
              <mo>×<!-- × --></mo>
              <mn>49</mn>
              <mo>×<!-- × --></mo>
              <mn>48</mn>
            </mrow>
            <mrow>
              <mn>5</mn>
              <mo>×<!-- × --></mo>
              <mn>4</mn>
              <mo>×<!-- × --></mo>
              <mn>3</mn>
              <mo>×<!-- × --></mo>
              <mn>2</mn>
            </mrow>
          </mfrac>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mo stretchy="false">(</mo>
              <mn>26</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>2</mn>
                </menclose>
              </mrow>
              <mo stretchy="false">)</mo>
              <mo>×<!-- × --></mo>
              <mo stretchy="false">(</mo>
              <mn>17</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>3</mn>
                </menclose>
              </mrow>
              <mo stretchy="false">)</mo>
              <mo>×<!-- × --></mo>
              <mo stretchy="false">(</mo>
              <mn>10</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>5</mn>
                </menclose>
              </mrow>
              <mo stretchy="false">)</mo>
              <mo>×<!-- × --></mo>
              <mn>49</mn>
              <mo>×<!-- × --></mo>
              <mo stretchy="false">(</mo>
              <mn>12</mn>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>4</mn>
                </menclose>
              </mrow>
              <mo stretchy="false">)</mo>
            </mrow>
            <mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>5</mn>
                </menclose>
              </mrow>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>4</mn>
                </menclose>
              </mrow>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>3</mn>
                </menclose>
              </mrow>
              <mo>×<!-- × --></mo>
              <mrow class="MJX-TeXAtom-ORD">
                <menclose notation="updiagonalstrike">
                  <mn>2</mn>
                </menclose>
              </mrow>
            </mrow>
          </mfrac>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mn>26</mn>
          <mo>×<!-- × --></mo>
          <mn>17</mn>
          <mo>×<!-- × --></mo>
          <mn>10</mn>
          <mo>×<!-- × --></mo>
          <mn>49</mn>
          <mo>×<!-- × --></mo>
          <mn>12</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mn>2,598,960.</mn>
      </mtd>
    </mtr>
  </mtable>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\begin{alignedat}{2}{52 \choose 5}&amp;={\frac {52!}{5!47!}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48\times {\cancel {47!}}}{5\times 4\times 3\times 2\times {\cancel {1}}\times {\cancel {47!}}}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2}}\\[5pt]&amp;={\frac {(26\times {\cancel {2}})\times (17\times {\cancel {3}})\times (10\times {\cancel {5}})\times 49\times (12\times {\cancel {4}})}{{\cancel {5}}\times {\cancel {4}}\times {\cancel {3}}\times {\cancel {2}}}}\\[5pt]&amp;={26\times 17\times 10\times 49\times 12}\\[5pt]&amp;=2{,}598{,}960.\end{alignedat}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/5541f14cc4ca51756ec76a67071c816f69070dfa" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -19.005ex; width:61.777ex; height:39.176ex;" alt="{\displaystyle {\begin{alignedat}{2}{52 \choose 5}&amp;={\frac {52!}{5!47!}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48\times {\cancel {47!}}}{5\times 4\times 3\times 2\times {\cancel {1}}\times {\cancel {47!}}}}\\[5pt]&amp;={\frac {52\times 51\times 50\times 49\times 48}{5\times 4\times 3\times 2}}\\[5pt]&amp;={\frac {(26\times {\cancel {2}})\times (17\times {\cancel {3}})\times (10\times {\cancel {5}})\times 49\times (12\times {\cancel {4}})}{{\cancel {5}}\times {\cancel {4}}\times {\cancel {3}}\times {\cancel {2}}}}\\[5pt]&amp;={26\times 17\times 10\times 49\times 12}\\[5pt]&amp;=2{,}598{,}960.\end{alignedat}}}"></span></dd>
</dl>
<p>Another alternative computation, equivalent to the first, is based on writing</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {n \choose k}={\frac {(n-0)}{1}}\times {\frac {(n-1)}{2}}\times {\frac {(n-2)}{3}}\times \cdots \times {\frac {(n-(k-1))}{k}},}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>0</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>1</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mn>2</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>3</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mo>⋯<!-- ⋯ --></mo>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mo stretchy="false">(</mo>
      <mi>k</mi>
      <mo>−<!-- − --></mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
    </mrow>
    <mi>k</mi>
  </mfrac>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {n \choose k}={\frac {(n-0)}{1}}\times {\frac {(n-1)}{2}}\times {\frac {(n-2)}{3}}\times \cdots \times {\frac {(n-(k-1))}{k}},}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/804a276361ac74dff4c556839a829cac04825fff" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:60.679ex; height:6.343ex;" alt="{n \choose k}={\frac {(n-0)}{1}}\times {\frac {(n-1)}{2}}\times {\frac {(n-2)}{3}}\times \cdots \times {\frac {(n-(k-1))}{k}},"></span></dd>
</dl>
<p>which gives</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {52 \choose 5}={\frac {52}{1}}\times {\frac {51}{2}}\times {\frac {50}{3}}\times {\frac {49}{4}}\times {\frac {48}{5}}=2{,}598{,}960}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mn>52</mn>
      <mn>5</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>52</mn>
    <mn>1</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>51</mn>
    <mn>2</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>50</mn>
    <mn>3</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>49</mn>
    <mn>4</mn>
  </mfrac>
</mrow>
<mo>×<!-- × --></mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mn>48</mn>
    <mn>5</mn>
  </mfrac>
</mrow>
<mo>=</mo>
<mn>2,598,960</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {52 \choose 5}={\frac {52}{1}}\times {\frac {51}{2}}\times {\frac {50}{3}}\times {\frac {49}{4}}\times {\frac {48}{5}}=2{,}598{,}960}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0ac2d90f75028bbd02e5be8a1c20ae8cfd88e8b0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:48.541ex; height:6.176ex;" alt="{52 \choose 5}={\frac {52}{1}}\times {\frac {51}{2}}\times {\frac {50}{3}}\times {\frac {49}{4}}\times {\frac {48}{5}}=2{,}598{,}960"></span>.</dd>
</dl>
<p>When evaluated in the following order, <span class="texhtml">52 ÷ 1 × 51 ÷ 2 × 50 ÷ 3 × 49 ÷ 4 × 48 ÷ 5</span>, this can be computed using only integer arithmetic. The reason is that when each division occurs, the intermediate result that is produced is itself a binomial coefficient, so no remainders ever occur.</p>
<p>Using the symmetric formula in terms of factorials without performing simplifications gives a rather extensive calculation:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\begin{aligned}{52 \choose 5}&amp;={\frac {n!}{k!(n-k)!}}={\frac {52!}{5!(52-5)!}}={\frac {52!}{5!47!}}\\[6pt]&amp;={\tfrac {80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000}{120\times 258,623,241,511,168,180,642,964,355,153,611,979,969,197,632,389,120,000,000,000}}\\[6pt]&amp;=2{,}598{,}960.\end{aligned}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mtable columnalign="right left right left right left right left right left right left" rowspacing="0.9em 0.9em 0.3em" columnspacing="0em 2em 0em 2em 0em 2em 0em 2em 0em 2em 0em" displaystyle="true">
    <mtr>
      <mtd>
        <mrow class="MJX-TeXAtom-ORD">
          <mrow>
            <mrow class="MJX-TeXAtom-OPEN">
              <mo maxsize="2.047em" minsize="2.047em">(</mo>
            </mrow>
            <mfrac linethickness="0">
              <mn>52</mn>
              <mn>5</mn>
            </mfrac>
            <mrow class="MJX-TeXAtom-CLOSE">
              <mo maxsize="2.047em" minsize="2.047em">)</mo>
            </mrow>
          </mrow>
        </mrow>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mi>n</mi>
              <mo>!</mo>
            </mrow>
            <mrow>
              <mi>k</mi>
              <mo>!</mo>
              <mo stretchy="false">(</mo>
              <mi>n</mi>
              <mo>−<!-- − --></mo>
              <mi>k</mi>
              <mo stretchy="false">)</mo>
              <mo>!</mo>
            </mrow>
          </mfrac>
        </mrow>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mn>52</mn>
              <mo>!</mo>
            </mrow>
            <mrow>
              <mn>5</mn>
              <mo>!</mo>
              <mo stretchy="false">(</mo>
              <mn>52</mn>
              <mo>−<!-- − --></mo>
              <mn>5</mn>
              <mo stretchy="false">)</mo>
              <mo>!</mo>
            </mrow>
          </mfrac>
        </mrow>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mrow>
              <mn>52</mn>
              <mo>!</mo>
            </mrow>
            <mrow>
              <mn>5</mn>
              <mo>!</mo>
              <mn>47</mn>
              <mo>!</mo>
            </mrow>
          </mfrac>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mstyle displaystyle="false" scriptlevel="0">
            <mfrac>
              <mrow>
                <mn>80</mn>
                <mo>,</mo>
                <mn>658</mn>
                <mo>,</mo>
                <mn>175</mn>
                <mo>,</mo>
                <mn>170</mn>
                <mo>,</mo>
                <mn>943</mn>
                <mo>,</mo>
                <mn>878</mn>
                <mo>,</mo>
                <mn>571</mn>
                <mo>,</mo>
                <mn>660</mn>
                <mo>,</mo>
                <mn>636</mn>
                <mo>,</mo>
                <mn>856</mn>
                <mo>,</mo>
                <mn>403</mn>
                <mo>,</mo>
                <mn>766</mn>
                <mo>,</mo>
                <mn>975</mn>
                <mo>,</mo>
                <mn>289</mn>
                <mo>,</mo>
                <mn>505</mn>
                <mo>,</mo>
                <mn>440</mn>
                <mo>,</mo>
                <mn>883</mn>
                <mo>,</mo>
                <mn>277</mn>
                <mo>,</mo>
                <mn>824</mn>
                <mo>,</mo>
                <mn>000</mn>
                <mo>,</mo>
                <mn>000</mn>
                <mo>,</mo>
                <mn>000</mn>
                <mo>,</mo>
                <mn>000</mn>
              </mrow>
              <mrow>
                <mn>120</mn>
                <mo>×<!-- × --></mo>
                <mn>258</mn>
                <mo>,</mo>
                <mn>623</mn>
                <mo>,</mo>
                <mn>241</mn>
                <mo>,</mo>
                <mn>511</mn>
                <mo>,</mo>
                <mn>168</mn>
                <mo>,</mo>
                <mn>180</mn>
                <mo>,</mo>
                <mn>642</mn>
                <mo>,</mo>
                <mn>964</mn>
                <mo>,</mo>
                <mn>355</mn>
                <mo>,</mo>
                <mn>153</mn>
                <mo>,</mo>
                <mn>611</mn>
                <mo>,</mo>
                <mn>979</mn>
                <mo>,</mo>
                <mn>969</mn>
                <mo>,</mo>
                <mn>197</mn>
                <mo>,</mo>
                <mn>632</mn>
                <mo>,</mo>
                <mn>389</mn>
                <mo>,</mo>
                <mn>120</mn>
                <mo>,</mo>
                <mn>000</mn>
                <mo>,</mo>
                <mn>000</mn>
                <mo>,</mo>
                <mn>000</mn>
              </mrow>
            </mfrac>
          </mstyle>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mn>2,598,960.</mn>
      </mtd>
    </mtr>
  </mtable>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\begin{aligned}{52 \choose 5}&amp;={\frac {n!}{k!(n-k)!}}={\frac {52!}{5!(52-5)!}}={\frac {52!}{5!47!}}\\[6pt]&amp;={\tfrac {80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000}{120\times 258,623,241,511,168,180,642,964,355,153,611,979,969,197,632,389,120,000,000,000}}\\[6pt]&amp;=2{,}598{,}960.\end{aligned}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/71b6bc44a40b770f570cabbf47c9476b54bb1d56" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -7.671ex; width:76.389ex; height:16.509ex;" alt="{\displaystyle {\begin{aligned}{52 \choose 5}&amp;={\frac {n!}{k!(n-k)!}}={\frac {52!}{5!(52-5)!}}={\frac {52!}{5!47!}}\\[6pt]&amp;={\tfrac {80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000}{120\times 258,623,241,511,168,180,642,964,355,153,611,979,969,197,632,389,120,000,000,000}}\\[6pt]&amp;=2{,}598{,}960.\end{aligned}}}"></span></dd>
</dl>
<h3><span class="mw-headline" id="Enumerating_k-combinations">Enumerating <i>k</i>-combinations</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=3" title="Edit section: Enumerating k-combinations">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>One can <a href="/wiki/Enumeration" title="Enumeration">enumerate</a> all <i>k</i>-combinations of a given set <i>S</i> of <i>n</i> elements in some fixed order, which establishes a <a href="/wiki/Bijection" title="Bijection">bijection</a> from an interval of <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\tbinom {n}{k}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mstyle displaystyle="false" scriptlevel="0">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mi>n</mi>
        <mi>k</mi>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mstyle>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\tbinom {n}{k}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.005ex; width:3.116ex; height:3.176ex;" alt="{\tbinom {n}{k}}"></span> integers with the set of those <i>k</i>-combinations. Assuming <i>S</i> is itself ordered, for instance <i>S</i> = { 1, 2, …, <i>n</i> }, there are two natural possibilities for ordering its <i>k</i>-combinations: by comparing their smallest elements first (as in the illustrations above) or by comparing their largest elements first. The latter option has the advantage that adding a new largest element to <i>S</i> will not change the initial part of the enumeration, but just add the new <i>k</i>-combinations of the larger set after the previous ones. Repeating this process, the enumeration can be extended indefinitely with <i>k</i>-combinations of ever larger sets. If moreover the intervals of the integers are taken to start at&nbsp;0, then the <i>k</i>-combination at a given place <i>i</i> in the enumeration can be computed easily from <i>i</i>, and the bijection so obtained is known as the <a href="/wiki/Combinatorial_number_system" title="Combinatorial number system">combinatorial number system</a>. It is also known as "rank"/"ranking" and "unranking" in computational mathematics.<sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[6]</a></sup><sup id="cite_ref-7" class="reference"><a href="#cite_note-7">[7]</a></sup></p>
<p>There are many ways to enumerate <i>k</i> combinations. One way is to visit all the binary numbers less than 2<sup><i>n</i></sup>. Choose those numbers having <i>k</i> nonzero bits, although this is very inefficient even for small <i>n</i> (e.g. <i>n</i> = 20 would require visiting about one million numbers while the maximum number of allowed <i>k</i> combinations is about 186 thousand for <i>k</i> = 10). The positions of these 1 bits in such a number is a specific <i>k</i>-combination of the set { 1, …, <i>n</i> }.<sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup> Another simple, faster way is to track <i>k</i> index numbers of the elements selected, starting with {0 .. <i>k</i>−1} (zero-based) or {1 .. <i>k</i>} (one-based) as the first allowed <i>k</i>-combination and then repeatedly moving to the next allowed <i>k</i>-combination by incrementing the last index number if it is lower than <i>n</i>-1 (zero-based) or <i>n</i> (one-based) or the last index number <i>x</i> that is less than the index number following it minus one if such an index exists and resetting the index numbers after <i>x</i> to {<i>x</i>+1, <i>x</i>+2, …}.</p>
<h2><span class="mw-headline" id="Number_of_combinations_with_repetition">Number of combinations with repetition</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=4" title="Edit section: Number of combinations with repetition">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/Multiset_coefficient" class="mw-redirect" title="Multiset coefficient">Multiset coefficient</a></div>
<p>A <i>k</i>-<b>combination with repetitions</b>, or <i>k</i>-<b>multicombination</b>, or <b><a href="/wiki/Multiset" title="Multiset">multisubset</a></b> of size <i>k</i> from a set <i>S</i> is given by a sequence of <i>k</i> not necessarily distinct elements of <i>S</i>, where order is not taken into account: two sequences define the same multiset if one can be obtained from the other by permuting the terms. In other words, the number of ways to sample <i>k</i> elements from a set of <i>n</i> elements allowing for duplicates (i.e., with replacement) but disregarding different orderings (e.g. {2,1,2} = {1,2,2}). Associate an index to each element of <i>S</i> and think of the elements of <i>S</i> as <i>types</i> of objects, then we can let <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{i}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>i</mi>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{i}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.129ex; height:2.009ex;" alt="x_{i}"></span> denote the number of elements of type <i>i</i> in a multisubset. The number of multisubsets of size <i>k</i> is then the number of nonnegative integer solutions of the <a href="/wiki/Diophantine_equation" title="Diophantine equation">Diophantine equation</a>:<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">[9]</a></sup></p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{1}+x_{2}+\ldots +x_{n}=k.}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
<mo>+</mo>
<mo>…<!-- … --></mo>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msub>
<mo>=</mo>
<mi>k</mi>
<mo>.</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{1}+x_{2}+\ldots +x_{n}=k.}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9e1ba6b0fac89320983b5b374fc750e3f9bff2de" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:23.517ex; height:2.509ex;" alt="x_{1}+x_{2}+\ldots +x_{n}=k."></span></dd>
</dl>
<p>If <i>S</i> has <i>n</i> elements, the number of such <i>k</i>-multisubsets is denoted by,</p>
<dl>
<dd>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right),}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow>
  <mo>(</mo>
  <mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
    <mrow class="MJX-TeXAtom-ORD">
      <mrow>
        <mrow class="MJX-TeXAtom-OPEN">
          <mo maxsize="2.047em" minsize="2.047em">(</mo>
        </mrow>
        <mfrac linethickness="0">
          <mi>n</mi>
          <mi>k</mi>
        </mfrac>
        <mrow class="MJX-TeXAtom-CLOSE">
          <mo maxsize="2.047em" minsize="2.047em">)</mo>
        </mrow>
      </mrow>
    </mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
  </mrow>
  <mo>)</mo>
</mrow>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right),}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a1036e7fd2784e9fbea9e4c6f45ceec53ac34d9d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:7.723ex; height:6.176ex;" alt="\left(\!\!{\binom {n}{k}}\!\!\right),"></span></dd>
</dl>
</dd>
</dl>
<p>a notation that is analogous to the <a href="/wiki/Binomial_coefficient" title="Binomial coefficient">binomial coefficient</a> which counts <i>k</i>-subsets. This expression, <i>n</i> multichoose <i>k</i>,<sup id="cite_ref-10" class="reference"><a href="#cite_note-10">[10]</a></sup> can also be given in terms of binomial coefficients:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right)={\binom {n+k-1}{k}}.}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow>
  <mo>(</mo>
  <mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
    <mrow class="MJX-TeXAtom-ORD">
      <mrow>
        <mrow class="MJX-TeXAtom-OPEN">
          <mo maxsize="2.047em" minsize="2.047em">(</mo>
        </mrow>
        <mfrac linethickness="0">
          <mi>n</mi>
          <mi>k</mi>
        </mfrac>
        <mrow class="MJX-TeXAtom-CLOSE">
          <mo maxsize="2.047em" minsize="2.047em">)</mo>
        </mrow>
      </mrow>
    </mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
  </mrow>
  <mo>)</mo>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mrow>
        <mi>n</mi>
        <mo>+</mo>
        <mi>k</mi>
        <mo>−<!-- − --></mo>
        <mn>1</mn>
      </mrow>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>.</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right)={\binom {n+k-1}{k}}.}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/de5f3a99048a07d41c50dee05a71a239a78f64f2" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:23.304ex; height:6.176ex;" alt="\left(\!\!{\binom {n}{k}}\!\!\right)={\binom {n+k-1}{k}}."></span></dd>
</dl>
<p>This relationship can be easily proved using a representation known as <a href="/wiki/Stars_and_bars_(combinatorics)" title="Stars and bars (combinatorics)">stars and bars</a>.<sup id="cite_ref-11" class="reference"><a href="#cite_note-11">[11]</a></sup></p>
<div class="NavFrame collapsed" style="position:relative;width:100%;border:none;" id="NavFrame1">
<div class="NavHead" style="position:absolute;width:3.2em;background:transparent;"><a class="NavToggle" id="NavToggle1" href="#">[show]</a></div>
<div style="font-size:100%;height:1.6em;background:transparent;padding-left:2.8em; text-align:left;font-weight:bold;background:lightgray;">&nbsp;&nbsp;Proof</div>
<div class="NavContent" style="padding-left: 0.3em; text-align: left; display: none;">
<p>A solution of the above Diophantine equation can be represented by <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{1}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{1}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a8788bf85d532fa88d1fb25eff6ae382a601c308" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.384ex; height:2.009ex;" alt="x_{1}"></span> <i>stars</i>, a separator (a <i>bar</i>), then <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{2}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{2}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d7af1b928f06e4c7e3e8ebfd60704656719bd766" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.384ex; height:2.009ex;" alt="x_{2}"></span> more stars, another separator, and so on. The total number of stars in this representation is <i>k</i> and the number of bars is <i>n</i> - 1 (since no separator is needed at the very end). Thus, a string of <i>k</i> + <i>n</i> - 1 symbols (stars and bars) corresponds to a solution if there are <i>k</i> stars in the string. Any solution can be represented by choosing <i>k</i> out of <span class="nowrap"><i>k</i> + <i>n</i> - 1</span> positions to place stars and filling the remaining positions with bars. For example, the solution <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{1}=3,x_{2}=2,x_{3}=0,x_{4}=5}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>3</mn>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>2</mn>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>3</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>0</mn>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>4</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>5</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{1}=3,x_{2}=2,x_{3}=0,x_{4}=5}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/af4708d8e8a3412e99473ab0df330dcf156bbd94" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:29.681ex; height:2.509ex;" alt="x_{1}=3,x_{2}=2,x_{3}=0,x_{4}=5"></span> of the equation <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{1}+x_{2}+x_{3}+x_{4}=10}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>3</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>4</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>10</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{1}+x_{2}+x_{3}+x_{4}=10}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4364d3e579bb272263b34d1dc513e8c1ff00e3a9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:23.48ex; height:2.509ex;" alt="x_{1}+x_{2}+x_{3}+x_{4}=10"></span> can be represented by</p>
<center><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar \bigstar \bigstar |\bigstar \bigstar ||\bigstar \bigstar \bigstar \bigstar \bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar \bigstar \bigstar |\bigstar \bigstar ||\bigstar \bigstar \bigstar \bigstar \bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8de624448883d707edd5d146f677c211121e98ee" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:23.877ex; height:2.843ex;" alt="\bigstar \bigstar \bigstar |\bigstar \bigstar ||\bigstar \bigstar \bigstar \bigstar \bigstar "></span>.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup></center>
<p>The number of such strings is the number of ways to place 10 stars in 13 positions, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\binom {13}{10}}={\binom {13}{3}}=286,}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mn>13</mn>
      <mn>10</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mn>13</mn>
      <mn>3</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mn>286</mn>
<mo>,</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\binom {13}{10}}={\binom {13}{3}}=286,}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9a39d609910cd8733cd01e976cfc9775aa585fe5" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:21.823ex; height:6.176ex;" alt="{\binom {13}{10}}={\binom {13}{3}}=286,"></span> which is the number of 10-multisubsets of a set with 4 elements.</p>
</div>
</div>
<div class="thumb tright">
<div class="thumbinner" style="width:372px;"><a href="/wiki/File:Combinations_with_repetition;_5_multichoose_3.svg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Combinations_with_repetition%3B_5_multichoose_3.svg/370px-Combinations_with_repetition%3B_5_multichoose_3.svg.png" width="370" height="405" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Combinations_with_repetition%3B_5_multichoose_3.svg/555px-Combinations_with_repetition%3B_5_multichoose_3.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/62/Combinations_with_repetition%3B_5_multichoose_3.svg/740px-Combinations_with_repetition%3B_5_multichoose_3.svg.png 2x" data-file-width="626" data-file-height="685"></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Combinations_with_repetition;_5_multichoose_3.svg" class="internal" title="Enlarge"></a></div>
<a href="/wiki/Bijection" title="Bijection">Bijection</a> between 3-subsets of a 7-set (left) and 3-multisets with elements from a 5-set (right).<br>
This illustrates that <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \textstyle {7 \choose 3}=\left(\!\!{5 \choose 3}\!\!\right)}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mstyle displaystyle="false" scriptlevel="0">
  <mrow class="MJX-TeXAtom-ORD">
    <mrow>
      <mrow class="MJX-TeXAtom-OPEN">
        <mo maxsize="1.2em" minsize="1.2em">(</mo>
      </mrow>
      <mfrac linethickness="0">
        <mn>7</mn>
        <mn>3</mn>
      </mfrac>
      <mrow class="MJX-TeXAtom-CLOSE">
        <mo maxsize="1.2em" minsize="1.2em">)</mo>
      </mrow>
    </mrow>
  </mrow>
  <mo>=</mo>
  <mrow>
    <mo>(</mo>
    <mrow>
      <mspace width="negativethinmathspace"></mspace>
      <mspace width="negativethinmathspace"></mspace>
      <mrow class="MJX-TeXAtom-ORD">
        <mrow>
          <mrow class="MJX-TeXAtom-OPEN">
            <mo maxsize="1.2em" minsize="1.2em">(</mo>
          </mrow>
          <mfrac linethickness="0">
            <mn>5</mn>
            <mn>3</mn>
          </mfrac>
          <mrow class="MJX-TeXAtom-CLOSE">
            <mo maxsize="1.2em" minsize="1.2em">)</mo>
          </mrow>
        </mrow>
      </mrow>
      <mspace width="negativethinmathspace"></mspace>
      <mspace width="negativethinmathspace"></mspace>
    </mrow>
    <mo>)</mo>
  </mrow>
</mstyle>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \textstyle {7 \choose 3}=\left(\!\!{5 \choose 3}\!\!\right)}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6bcf427df289fdfc6c3f65a5e4786a4117c15cdf" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.171ex; width:9.583ex; height:3.509ex;" alt="\textstyle {7 \choose 3}=\left(\!\!{5 \choose 3}\!\!\right)"></span>.</div>
</div>
</div>
<p>As with binomial coefficients, there are several relationships between these multichoose expressions. For example, for <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\geq 1,k\geq 0}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>n</mi>
<mo>≥<!-- ≥ --></mo>
<mn>1</mn>
<mo>,</mo>
<mi>k</mi>
<mo>≥<!-- ≥ --></mo>
<mn>0</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle n\geq 1,k\geq 0}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a1c7d5e26380b520cb97d622f6716aa75d1b47ae" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:12.162ex; height:2.509ex;" alt="n\geq 1,k\geq 0"></span>,</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right)=\left(\!\!{\binom {k+1}{n-1}}\!\!\right).}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow>
  <mo>(</mo>
  <mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
    <mrow class="MJX-TeXAtom-ORD">
      <mrow>
        <mrow class="MJX-TeXAtom-OPEN">
          <mo maxsize="2.047em" minsize="2.047em">(</mo>
        </mrow>
        <mfrac linethickness="0">
          <mi>n</mi>
          <mi>k</mi>
        </mfrac>
        <mrow class="MJX-TeXAtom-CLOSE">
          <mo maxsize="2.047em" minsize="2.047em">)</mo>
        </mrow>
      </mrow>
    </mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
  </mrow>
  <mo>)</mo>
</mrow>
<mo>=</mo>
<mrow>
  <mo>(</mo>
  <mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
    <mrow class="MJX-TeXAtom-ORD">
      <mrow>
        <mrow class="MJX-TeXAtom-OPEN">
          <mo maxsize="2.047em" minsize="2.047em">(</mo>
        </mrow>
        <mfrac linethickness="0">
          <mrow>
            <mi>k</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
          <mrow>
            <mi>n</mi>
            <mo>−<!-- − --></mo>
            <mn>1</mn>
          </mrow>
        </mfrac>
        <mrow class="MJX-TeXAtom-CLOSE">
          <mo maxsize="2.047em" minsize="2.047em">)</mo>
        </mrow>
      </mrow>
    </mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
  </mrow>
  <mo>)</mo>
</mrow>
<mo>.</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right)=\left(\!\!{\binom {k+1}{n-1}}\!\!\right).}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:21.513ex; height:6.176ex;" alt="{\displaystyle \left(\!\!{\binom {n}{k}}\!\!\right)=\left(\!\!{\binom {k+1}{n-1}}\!\!\right).}"></span></dd>
</dl>
<p>This identity follows from interchanging the stars and bars in the above representation.<sup id="cite_ref-13" class="reference"><a href="#cite_note-13">[13]</a></sup></p>
<p><br></p>
<h3><span class="mw-headline" id="Example_of_counting_multisubsets">Example of counting multisubsets</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=5" title="Edit section: Example of counting multisubsets">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>For example, if you have four types of donuts (<i>n</i>&nbsp;=&nbsp;4) on a menu to choose from and you want three donuts (<i>k</i>&nbsp;=&nbsp;3), the number of ways to choose the donuts with repetition can be calculated as</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \left(\!\!{\binom {4}{3}}\!\!\right)={\binom {4+3-1}{3}}={\binom {6}{3}}={\frac {6\times 5\times 4}{3\times 2\times 1}}=20.}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow>
  <mo>(</mo>
  <mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
    <mrow class="MJX-TeXAtom-ORD">
      <mrow>
        <mrow class="MJX-TeXAtom-OPEN">
          <mo maxsize="2.047em" minsize="2.047em">(</mo>
        </mrow>
        <mfrac linethickness="0">
          <mn>4</mn>
          <mn>3</mn>
        </mfrac>
        <mrow class="MJX-TeXAtom-CLOSE">
          <mo maxsize="2.047em" minsize="2.047em">)</mo>
        </mrow>
      </mrow>
    </mrow>
    <mspace width="negativethinmathspace"></mspace>
    <mspace width="negativethinmathspace"></mspace>
  </mrow>
  <mo>)</mo>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mrow>
        <mn>4</mn>
        <mo>+</mo>
        <mn>3</mn>
        <mo>−<!-- − --></mo>
        <mn>1</mn>
      </mrow>
      <mn>3</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mn>6</mn>
      <mn>3</mn>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mn>6</mn>
      <mo>×<!-- × --></mo>
      <mn>5</mn>
      <mo>×<!-- × --></mo>
      <mn>4</mn>
    </mrow>
    <mrow>
      <mn>3</mn>
      <mo>×<!-- × --></mo>
      <mn>2</mn>
      <mo>×<!-- × --></mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
</mrow>
<mo>=</mo>
<mn>20.</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \left(\!\!{\binom {4}{3}}\!\!\right)={\binom {4+3-1}{3}}={\binom {6}{3}}={\frac {6\times 5\times 4}{3\times 2\times 1}}=20.}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/99e27a6af2a02f384c452ea8de8dfc016bd9dfb9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:48.999ex; height:6.176ex;" alt="\left(\!\!{\binom {4}{3}}\!\!\right)={\binom {4+3-1}{3}}={\binom {6}{3}}={\frac {6\times 5\times 4}{3\times 2\times 1}}=20."></span></dd>
</dl>
<p>This result can be verified by listing all the 3-multisubsets of the set <i>S</i> = {1,2,3,4}. This is displayed in the following table.<sup id="cite_ref-14" class="reference"><a href="#cite_note-14">[14]</a></sup> The second column shows the nonnegative integer solutions <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle [x_{1},x_{2},x_{3},x_{4}]}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mo stretchy="false">[</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>3</mn>
  </mrow>
</msub>
<mo>,</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>4</mn>
  </mrow>
</msub>
<mo stretchy="false">]</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle [x_{1},x_{2},x_{3},x_{4}]}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/cbec11b6cf47c5e117f30ff33ecc05c54e84e9ec" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:13.931ex; height:2.843ex;" alt="[x_{1},x_{2},x_{3},x_{4}]"></span> of the equation <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{1}+x_{2}+x_{3}+x_{4}=3}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>1</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>2</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>3</mn>
  </mrow>
</msub>
<mo>+</mo>
<msub>
  <mi>x</mi>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>4</mn>
  </mrow>
</msub>
<mo>=</mo>
<mn>3</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle x_{1}+x_{2}+x_{3}+x_{4}=3}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bc08f22c9429eee438027893fd12e10598281f5e" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:22.318ex; height:2.509ex;" alt="x_{1}+x_{2}+x_{3}+x_{4}=3"></span> and the last column gives the stars and bars representation of the solutions.<sup id="cite_ref-15" class="reference"><a href="#cite_note-15">[15]</a></sup></p>
<center>
<table class="wikitable">
<tbody><tr>
<th>No.</th>
<th>3-Multiset</th>
<th>Eq. Solution</th>
<th>Stars and Bars</th>
</tr>
<tr>
<td>1</td>
<td>{1,1,1}</td>
<td>[3,0,0,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar \bigstar \bigstar |||}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar \bigstar \bigstar |||}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/547e4c2fe9b9ad2d3615e7ecabd04e5f299c1be8" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar \bigstar \bigstar |||"></span></td>
</tr>
<tr>
<td>2</td>
<td>{1,1,2}</td>
<td>[2,1,0,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar \bigstar |\bigstar ||}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar \bigstar |\bigstar ||}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b9f5876e32bcecf1bae8d1e67aa38d0f2d84786c" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar \bigstar |\bigstar ||"></span></td>
</tr>
<tr>
<td>3</td>
<td>{1,1,3}</td>
<td>[2,0,1,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar \bigstar ||\bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar \bigstar ||\bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/13a762093e98a37460944de1fa8bddbac788b26b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar \bigstar ||\bigstar |"></span></td>
</tr>
<tr>
<td>4</td>
<td>{1,1,4}</td>
<td>[2,0,0,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar \bigstar |||\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar \bigstar |||\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/91fb18cd66c09a69ad5ace0bfbf924ac75c1d3ec" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar \bigstar |||\bigstar "></span></td>
</tr>
<tr>
<td>5</td>
<td>{1,2,2}</td>
<td>[1,2,0,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar |\bigstar \bigstar ||}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar |\bigstar \bigstar ||}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dbb8f7f5c80e0d9e327259b0be8c89e3c5cae04a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar |\bigstar \bigstar ||"></span></td>
</tr>
<tr>
<td>6</td>
<td>{1,2,3}</td>
<td>[1,1,1,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar |\bigstar |\bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar |\bigstar |\bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ef56bd946c762f7895d9a3ea564068233e33b59e" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar |\bigstar |\bigstar |"></span></td>
</tr>
<tr>
<td>7</td>
<td>{1,2,4}</td>
<td>[1,1,0,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar |\bigstar ||\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar |\bigstar ||\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2cb150ba29ac9f6668262d5adc33e499158b7a15" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar |\bigstar ||\bigstar "></span></td>
</tr>
<tr>
<td>8</td>
<td>{1,3,3}</td>
<td>[1,0,2,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar ||\bigstar \bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar ||\bigstar \bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0b9553204acb9742dcf97b2bd460fd948e2a6b3a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar ||\bigstar \bigstar |"></span></td>
</tr>
<tr>
<td>9</td>
<td>{1,3,4}</td>
<td>[1,0,1,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar ||\bigstar |\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar ||\bigstar |\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/5fabbe781b9da6828999c488a5a025d6b6efc594" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar ||\bigstar |\bigstar "></span></td>
</tr>
<tr>
<td>10</td>
<td>{1,4,4}</td>
<td>[1,0,0,2]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \bigstar |||\bigstar \bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \bigstar |||\bigstar \bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1cb05d2c8b85ad5947a7f6177aeb135676ab8bdf" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="\bigstar |||\bigstar \bigstar "></span></td>
</tr>
<tr>
<td>11</td>
<td>{2,2,2}</td>
<td>[0,3,0,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar \bigstar \bigstar ||}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar \bigstar \bigstar ||}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4937f8e153e1a62edeee6c2b84e43fe7ead267e9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar \bigstar \bigstar ||"></span></td>
</tr>
<tr>
<td>12</td>
<td>{2,2,3}</td>
<td>[0,2,1,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar \bigstar |\bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar \bigstar |\bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b18ec6a971bcd47371dceac912e0aceda53ee742" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar \bigstar |\bigstar |"></span></td>
</tr>
<tr>
<td>13</td>
<td>{2,2,4}</td>
<td>[0,2,0,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar \bigstar ||\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar \bigstar ||\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e9b0e3b8b39bff8b8794c9e2e3b24da3d284d08e" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar \bigstar ||\bigstar "></span></td>
</tr>
<tr>
<td>14</td>
<td>{2,3,3}</td>
<td>[0,1,2,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar |\bigstar \bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar |\bigstar \bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2a02286e57a98b67e963f9d22da6b72c6536cc52" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar |\bigstar \bigstar |"></span></td>
</tr>
<tr>
<td>15</td>
<td>{2,3,4}</td>
<td>[0,1,1,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar |\bigstar |\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar |\bigstar |\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bf9ce771f505fe889210766e12ba0b3091fb399b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar |\bigstar |\bigstar "></span></td>
</tr>
<tr>
<td>16</td>
<td>{2,4,4}</td>
<td>[0,1,0,2]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\bigstar ||\bigstar \bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\bigstar ||\bigstar \bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f01979879effaf5472a25c8ea5471844139a20d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|\bigstar ||\bigstar \bigstar "></span></td>
</tr>
<tr>
<td>17</td>
<td>{3,3,3}</td>
<td>[0,0,3,0]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle ||\bigstar \bigstar \bigstar |}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle ||\bigstar \bigstar \bigstar |}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/cf065d8c5166e0b0a849204de826e9aa9b2212e7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="||\bigstar \bigstar \bigstar |"></span></td>
</tr>
<tr>
<td>18</td>
<td>{3,3,4}</td>
<td>[0,0,2,1]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle ||\bigstar \bigstar |\bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle ||\bigstar \bigstar |\bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/af86c2f563c97fa148bd34ec5ae23d6508ed9d5a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="||\bigstar \bigstar |\bigstar "></span></td>
</tr>
<tr>
<td>19</td>
<td>{3,4,4}</td>
<td>[0,0,1,2]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle ||\bigstar |\bigstar \bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle ||\bigstar |\bigstar \bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b2f88df1743c8073753f019dafb42fa351aca22a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="||\bigstar |\bigstar \bigstar "></span></td>
</tr>
<tr>
<td>20</td>
<td>{4,4,4}</td>
<td>[0,0,0,3]</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |||\bigstar \bigstar \bigstar }">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
<mi>★<!-- ★ --></mi>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |||\bigstar \bigstar \bigstar }</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2aaaaf9bed186965cb19723f51ae7ffadd66bfc6" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.522ex; height:2.843ex;" alt="|||\bigstar \bigstar \bigstar "></span></td>
</tr>
</tbody></table>
</center>
<h2><span class="mw-headline" id="Number_of_k-combinations_for_all_k">Number of <i>k</i>-combinations for all <i>k</i></span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=6" title="Edit section: Number of k-combinations for all k">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/Binomial_coefficient#Sum_of_coefficients_row" title="Binomial coefficient">Binomial coefficient §&nbsp;Sum of coefficients row</a></div>
<p>The number of <i>k</i>-combinations for all <i>k</i> is the number of subsets of a set of <i>n</i> elements. There are several ways to see that this number is 2<sup><i>n</i></sup>. In terms of combinations, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \sum _{0\leq {k}\leq {n}}{\binom {n}{k}}=2^{n}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<munder>
  <mo>∑<!-- ∑ --></mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>0</mn>
    <mo>≤<!-- ≤ --></mo>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>k</mi>
    </mrow>
    <mo>≤<!-- ≤ --></mo>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>n</mi>
    </mrow>
  </mrow>
</munder>
<mrow class="MJX-TeXAtom-ORD">
  <mrow>
    <mrow class="MJX-TeXAtom-OPEN">
      <mo maxsize="2.047em" minsize="2.047em">(</mo>
    </mrow>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mrow class="MJX-TeXAtom-CLOSE">
      <mo maxsize="2.047em" minsize="2.047em">)</mo>
    </mrow>
  </mrow>
</mrow>
<mo>=</mo>
<msup>
  <mn>2</mn>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>n</mi>
  </mrow>
</msup>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle \sum _{0\leq {k}\leq {n}}{\binom {n}{k}}=2^{n}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/93a47c4c71ac5c0ed02f4b4f6bd13aa5d88faa32" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -3.338ex; width:15.904ex; height:7.009ex;" alt="\sum _{0\leq {k}\leq {n}}{\binom {n}{k}}=2^{n}"></span>, which is the sum of the <i>n</i>th row (counting from 0) of the <a href="/wiki/Binomial_coefficient#Sum_of_coefficients_row" title="Binomial coefficient">binomial coefficients</a> in <a href="/wiki/Pascal%27s_triangle" title="Pascal's triangle">Pascal's triangle</a>. These combinations (subsets) are enumerated by the 1 digits of the set of <a href="/wiki/Base_2" class="mw-redirect" title="Base 2">base 2</a> numbers counting from 0 to 2<sup><i>n</i></sup> &nbsp;−&nbsp; 1, where each digit position is an item from the set of <i>n</i>.</p>
<p>Given 3 cards numbered 1 to 3, there are 8 distinct combinations (<a href="/wiki/Subsets" class="mw-redirect" title="Subsets">subsets</a>), including the <a href="/wiki/Empty_set" title="Empty set">empty set</a>:</p>
<dl>
<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle |\{\{\};\{1\};\{2\};\{1,2\};\{3\};\{1,3\};\{2,3\};\{1,2,3\}\}|=2^{3}=8}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mo fence="false" stretchy="false">{</mo>
<mo fence="false" stretchy="false">{</mo>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>1</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>2</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>1</mn>
<mo>,</mo>
<mn>2</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>3</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>1</mn>
<mo>,</mo>
<mn>3</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>2</mn>
<mo>,</mo>
<mn>3</mn>
<mo fence="false" stretchy="false">}</mo>
<mo>;</mo>
<mo fence="false" stretchy="false">{</mo>
<mn>1</mn>
<mo>,</mo>
<mn>2</mn>
<mo>,</mo>
<mn>3</mn>
<mo fence="false" stretchy="false">}</mo>
<mo fence="false" stretchy="false">}</mo>
<mrow class="MJX-TeXAtom-ORD">
  <mo stretchy="false">|</mo>
</mrow>
<mo>=</mo>
<msup>
  <mn>2</mn>
  <mrow class="MJX-TeXAtom-ORD">
    <mn>3</mn>
  </mrow>
</msup>
<mo>=</mo>
<mn>8</mn>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle |\{\{\};\{1\};\{2\};\{1,2\};\{3\};\{1,3\};\{2,3\};\{1,2,3\}\}|=2^{3}=8}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1ba1750093ea7d108e76fb15c21742d65b4a98fd" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:58.151ex; height:3.176ex;" alt="{\displaystyle |\{\{\};\{1\};\{2\};\{1,2\};\{3\};\{1,3\};\{2,3\};\{1,2,3\}\}|=2^{3}=8}"></span></dd>
</dl>
<p>Representing these subsets (in the same order) as base 2 numerals:</p>
<dl>
<dd>
<dl>
<dd>0 – 000</dd>
<dd>1 – 001</dd>
<dd>2 – 010</dd>
<dd>3 – 011</dd>
<dd>4 – 100</dd>
<dd>5 – 101</dd>
<dd>6 – 110</dd>
<dd>7 – 111</dd>
</dl>
</dd>
</dl>
<h2><span class="mw-headline" id="Probability:_sampling_a_random_combination">Probability: sampling a random combination</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=7" title="Edit section: Probability: sampling a random combination">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>There are various <a href="/wiki/Algorithms" class="mw-redirect" title="Algorithms">algorithms</a> to pick out a random combination from a given set or list. <a href="/wiki/Rejection_sampling" title="Rejection sampling">Rejection sampling</a> is extremely slow for large sample sizes. One way to select a <i>k</i>-combination efficiently from a population of size <i>n</i> is to iterate across each element of the population, and at each step pick that element with a dynamically changing probability of <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\frac {k-\#{\text{samples chosen}}}{n-\#{\text{samples visited}}}}}">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mrow class="MJX-TeXAtom-ORD">
  <mfrac>
    <mrow>
      <mi>k</mi>
      <mo>−<!-- − --></mo>
      <mi mathvariant="normal">#<!-- # --></mi>
      <mrow class="MJX-TeXAtom-ORD">
        <mtext>samples chosen</mtext>
      </mrow>
    </mrow>
    <mrow>
      <mi>n</mi>
      <mo>−<!-- − --></mo>
      <mi mathvariant="normal">#<!-- # --></mi>
      <mrow class="MJX-TeXAtom-ORD">
        <mtext>samples visited</mtext>
      </mrow>
    </mrow>
  </mfrac>
</mrow>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle {\frac {k-\#{\text{samples chosen}}}{n-\#{\text{samples visited}}}}}</annotation>
</semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/80489a46c8a3303fa10c0e9aa24e9e8c8620feb7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.338ex; width:22.157ex; height:5.843ex;" alt="{\displaystyle {\frac {k-\#{\text{samples chosen}}}{n-\#{\text{samples visited}}}}}"></span>. (see <a href="/wiki/Reservoir_sampling" title="Reservoir sampling">reservoir sampling</a>).</p>
<h2><span class="mw-headline" id="See_also">See also</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=8" title="Edit section: See also">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="navigation" aria-label="Portals" class="noprint portal plainlist tright" style="margin:0.5em 0 0.5em 1em;border:solid #aaa 1px">
<ul style="display:table;box-sizing:border-box;padding:0.1em;max-width:175px;background:#f9f9f9;font-size:85%;line-height:110%;font-style:italic;font-weight:bold">
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><a href="/wiki/File:Nuvola_apps_edu_mathematics_blue-p.svg" class="image"><img alt="icon" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nuvola_apps_edu_mathematics_blue-p.svg/28px-Nuvola_apps_edu_mathematics_blue-p.svg.png" width="28" height="28" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nuvola_apps_edu_mathematics_blue-p.svg/42px-Nuvola_apps_edu_mathematics_blue-p.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nuvola_apps_edu_mathematics_blue-p.svg/56px-Nuvola_apps_edu_mathematics_blue-p.svg.png 2x" data-file-width="128" data-file-height="128"></a></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:Mathematics" title="Portal:Mathematics">Mathematics portal</a></span></li>
</ul>
</div>
<div class="div-col columns column-width" style="-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em;">
<ul>
<li><a href="/wiki/Binomial_coefficient" title="Binomial coefficient">Binomial coefficient</a></li>
<li><a href="/wiki/Combinatorial_number_system" title="Combinatorial number system">Combinatorial number system</a></li>
<li><a href="/wiki/Combinatorics" title="Combinatorics">Combinatorics</a></li>
<li><a href="/wiki/Kneser_graph" title="Kneser graph">Kneser graph</a></li>
<li><a href="/wiki/List_of_permutation_topics" title="List of permutation topics">List of permutation topics</a></li>
<li><a href="/wiki/Multiset" title="Multiset">Multiset</a></li>
<li><a href="/wiki/Pascal%27s_triangle" title="Pascal's triangle">Pascal's triangle</a></li>
<li><a href="/wiki/Permutation" title="Permutation">Permutation</a></li>
<li><a href="/wiki/Probability" title="Probability">Probability</a></li>
<li><a href="/wiki/Subset" title="Subset">Subset</a></li>
</ul>
</div>
<h2><span class="mw-headline" id="Notes">Notes</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=9" title="Edit section: Notes">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="reflist columns references-column-width" style="-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em; list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFRyser1963">Ryser 1963</a>, p. 7 also referred to as an <i>unordered selection</i>.</span></li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFMazur2010">Mazur 2010</a>, p. 10</span></li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text">When the term <i>combination</i> is used to refer to either situation (as in (<a href="#CITEREFBrualdi2010">Brualdi 2010</a>)) care must be taken to clarify whether sets or multisets are being discussed.</span></li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><cite class="citation book"><i>High School Textbook for full-time student (Required) Mathematics Book II B</i> (in Chinese) (2nd ed.). China: People's Education Press. June 2006. pp.&nbsp;107–116. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-7-107-19616-4" title="Special:BookSources/978-7-107-19616-4">978-7-107-19616-4</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=High+School+Textbook+for+full-time+student+%28Required%29+Mathematics+Book+II+B&amp;rft.place=China&amp;rft.pages=107-116&amp;rft.edition=2nd&amp;rft.pub=People%27s+Education+Press&amp;rft.date=2006-06&amp;rft.isbn=978-7-107-19616-4&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></span></li>
<li id="cite_note-5"><span class="mw-cite-backlink"><b><a href="#cite_ref-5"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFMazur2010">Mazur 2010</a>, p. 21</span></li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b><a href="#cite_ref-6"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><cite class="citation web">Lucia Moura. <a rel="nofollow" class="external text" href="http://www.site.uottawa.ca/~lucia/courses/5165-09/GenCombObj.pdf">"Generating Elementary Combinatorial Objects"</a> <span style="font-size:85%;">(PDF)</span>. <i>Site.uottawa.ca</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2017-04-10</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Site.uottawa.ca&amp;rft.atitle=Generating+Elementary+Combinatorial+Objects&amp;rft.au=Lucia+Moura&amp;rft_id=http%3A%2F%2Fwww.site.uottawa.ca%2F~lucia%2Fcourses%2F5165-09%2FGenCombObj.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></span></li>
<li id="cite_note-7"><span class="mw-cite-backlink"><b><a href="#cite_ref-7"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.sagemath.org/doc/reference/sage/combinat/subset.html">"SAGE&nbsp;: Subsets"</a> <span style="font-size:85%;">(PDF)</span>. <i>Sagemath.org</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2017-04-10</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Sagemath.org&amp;rft.atitle=SAGE+%3A+Subsets&amp;rft_id=http%3A%2F%2Fwww.sagemath.org%2Fdoc%2Freference%2Fsage%2Fcombinat%2Fsubset.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></span></li>
<li id="cite_note-8"><span class="mw-cite-backlink"><b><a href="#cite_ref-8"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://rosettacode.org/wiki/Combinations">"Combinations - Rosetta Code"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Combinations+-+Rosetta+Code&amp;rft_id=http%3A%2F%2Frosettacode.org%2Fwiki%2FCombinations&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span><sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Identifying_reliable_sources#User-generated_content" title="Wikipedia:Identifying reliable sources"><span title="The material near this tag may rely on a user-generated source. (April 2017)">user-generated source?</span></a></i>]</sup></span></li>
<li id="cite_note-9"><span class="mw-cite-backlink"><b><a href="#cite_ref-9"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFBrualdi2010">Brualdi 2010</a>, p. 52</span></li>
<li id="cite_note-10"><span class="mw-cite-backlink"><b><a href="#cite_ref-10"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFBenjaminQuinn2003">Benjamin &amp; Quinn 2003</a>, p. 70</span></li>
<li id="cite_note-11"><span class="mw-cite-backlink"><b><a href="#cite_ref-11"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text">In the article <a href="/wiki/Stars_and_bars_(combinatorics)" title="Stars and bars (combinatorics)">Stars and bars (combinatorics)</a> the roles of <span class="texhtml mvar" style="font-style:italic;">n</span> and <span class="texhtml mvar" style="font-style:italic;">k</span> are reversed.</span></li>
<li id="cite_note-12"><span class="mw-cite-backlink"><b><a href="#cite_ref-12"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFBenjaminQuinn2003">Benjamin &amp; Quinn 2003</a>, pp. 71 –72</span></li>
<li id="cite_note-13"><span class="mw-cite-backlink"><b><a href="#cite_ref-13"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFBenjaminQuinn2003">Benjamin &amp; Quinn 2003</a>, p. 72 (identity 145)</span></li>
<li id="cite_note-14"><span class="mw-cite-backlink"><b><a href="#cite_ref-14"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFBenjaminQuinn2003">Benjamin &amp; Quinn 2003</a>, p. 71</span></li>
<li id="cite_note-15"><span class="mw-cite-backlink"><b><a href="#cite_ref-15"><span class="cite-accessibility-label">Jump up </span>^</a></b></span> <span class="reference-text"><a href="#CITEREFMazur2010">Mazur 2010</a>, p. 10 where the stars and bars are written as binary numbers, with stars = 0 and bars = 1.</span></li>
</ol>
</div>
<h2><span class="mw-headline" id="References">References</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=10" title="Edit section: References">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li><cite id="CITEREFBenjaminQuinn2003" class="citation"><a href="/wiki/Arthur_T._Benjamin" title="Arthur T. Benjamin">Benjamin, Arthur T.</a>; Quinn, Jennifer J. (2003), <i>Proofs that Really Count: The Art of Combinatorial Proof</i>, The Dolciani Mathematical Expositions 27, The Mathematical Association of America, <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-88385-333-7" title="Special:BookSources/978-0-88385-333-7">978-0-88385-333-7</a></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Proofs+that+Really+Count%3A+The+Art+of+Combinatorial+Proof&amp;rft.series=The+Dolciani+Mathematical+Expositions+27&amp;rft.pub=The+Mathematical+Association+of+America&amp;rft.date=2003&amp;rft.isbn=978-0-88385-333-7&amp;rft.aulast=Benjamin&amp;rft.aufirst=Arthur+T.&amp;rft.au=Quinn%2C+Jennifer+J.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></li>
<li><cite id="CITEREFBrualdi2010" class="citation"><a href="/wiki/Richard_A._Brualdi" title="Richard A. Brualdi">Brualdi, Richard A.</a> (2010), <i>Introductory Combinatorics</i> (5th ed.), Pearson Prentice Hall, <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-13-602040-0" title="Special:BookSources/978-0-13-602040-0">978-0-13-602040-0</a></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Introductory+Combinatorics&amp;rft.edition=5th&amp;rft.pub=Pearson+Prentice+Hall&amp;rft.date=2010&amp;rft.isbn=978-0-13-602040-0&amp;rft.aulast=Brualdi&amp;rft.aufirst=Richard+A.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></li>
<li><a href="/wiki/Erwin_Kreyszig" title="Erwin Kreyszig">Erwin Kreyszig</a>, <i>Advanced Engineering Mathematics</i>, John Wiley &amp; Sons, INC, 1999.</li>
<li><cite id="CITEREFMazur2010" class="citation">Mazur, David R. (2010), <i>Combinatorics: A Guided Tour</i>, Mathematical Association of America, <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-88385-762-5" title="Special:BookSources/978-0-88385-762-5">978-0-88385-762-5</a></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Combinatorics%3A+A+Guided+Tour&amp;rft.pub=Mathematical+Association+of+America&amp;rft.date=2010&amp;rft.isbn=978-0-88385-762-5&amp;rft.aulast=Mazur&amp;rft.aufirst=David+R.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></li>
<li><cite id="CITEREFRyser1963" class="citation"><a href="/wiki/H._J._Ryser" title="H. J. Ryser">Ryser, Herbert John</a> (1963), <i>Combinatorial Mathematics</i>, The Carus Mathematical Monographs 14, Mathematical Association of America</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Combinatorial+Mathematics&amp;rft.series=The+Carus+Mathematical+Monographs+14&amp;rft.pub=Mathematical+Association+of+America&amp;rft.date=1963&amp;rft.aulast=Ryser&amp;rft.aufirst=Herbert+John&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ACombination" class="Z3988"><span style="display:none;">&nbsp;</span></span></li>
</ul>
<h2><span class="mw-headline" id="External_links">External links</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Combination&amp;action=edit&amp;section=11" title="Edit section: External links">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li><a rel="nofollow" class="external text" href="https://www.topcoder.com/community/data-science/data-science-tutorials/basics-of-combinatorics/">Topcoder tutorial on combinatorics</a></li>
<li><a rel="nofollow" class="external text" href="http://compprog.wordpress.com/2007/10/17/generating-combinations-1/">C code to generate all combinations of n elements chosen as k</a></li>
<li><a rel="nofollow" class="external text" href="http://mathforum.org/library/drmath/sets/high_perms_combs.html">Many Common types of permutation and combination math problems, with detailed solutions</a></li>
<li><a rel="nofollow" class="external text" href="http://www.murderousmaths.co.uk/books/unknownform.htm">The Unknown Formula</a> For combinations when choices can be repeated and order does NOT matter</li>
<li><a rel="nofollow" class="external text" href="http://dl.dropbox.com/u/7951257/easymath/Combinations%20with%20Repetitions.pdf">Combinations with repetitions (by: Akshatha AG and Smitha B)</a></li>
<li><a rel="nofollow" class="external text" href="http://www.lucamoroni.it/the-dice-roll-sum-problem/">The dice roll with a given sum problem</a> An application of the combinations with repetition to rolling multiple dice</li>
</ul>


<!-- 
NewPP limit report
Parsed by mw1272
Cached time: 20180122161009
Cache expiry: 1900800
Dynamic content: false
CPU time usage: 0.292 seconds
Real time usage: 1.491 seconds
Preprocessor visited node count: 1497/1000000
Preprocessor generated node count: 0/1500000
Post‐expand include size: 23547/2097152 bytes
Template argument size: 1321/2097152 bytes
Highest expansion depth: 12/40
Expensive parser function count: 4/500
Lua time usage: 0.092/10.000 seconds
Lua memory usage: 4.47 MB/50 MB
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00%  252.870      1 -total
36.87%   93.231      1 Template:Reflist
16.44%   41.566      2 Template:Fix
15.62%   39.489      1 Template:Citation_needed
14.66%   37.082      1 Template:Cite_book
8.47%   21.419      3 Template:Category_handler
8.41%   21.279      1 Template:About
6.76%   17.093      2 Template:Delink
6.11%   15.451      4 Template:Citation
5.76%   14.563      2 Template:Redirect
-->
</div>
<!-- Saved in parser cache with key enwiki:pcache:idhash:5308-0!canonical!math=5 and timestamp 20180122161007 and revision id 821319628
-->
<noscript>&lt;img src="//en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;" /&gt;</noscript></div>					<div class="printfooter">
                Retrieved from "<a dir="ltr" href="https://en.wikipedia.org/w/index.php?title=Combination&amp;oldid=821319628">https://en.wikipedia.org/w/index.php?title=Combination&amp;oldid=821319628</a>"					</div>
        <div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category" title="Help:Category">Categories</a>: <ul><li><a href="/wiki/Category:Combinatorics" title="Category:Combinatorics">Combinatorics</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories: <ul><li><a href="/wiki/Category:CS1_Chinese-language_sources_(zh)" title="Category:CS1 Chinese-language sources (zh)">CS1 Chinese-language sources (zh)</a></li><li><a href="/wiki/Category:Accuracy_disputes_from_April_2017" title="Category:Accuracy disputes from April 2017">Accuracy disputes from April 2017</a></li><li><a href="/wiki/Category:All_articles_with_unsourced_statements" title="Category:All articles with unsourced statements">All articles with unsourced statements</a></li><li><a href="/wiki/Category:Articles_with_unsourced_statements_from_April_2012" title="Category:Articles with unsourced statements from April 2012">Articles with unsourced statements from April 2012</a></li></ul></div></div>				<div class="visualClear"></div>
                    </div>
</div>
<div id="mw-navigation">
    <h2>Navigation menu</h2>
    <div id="mw-head">
                            <div id="p-personal" role="navigation" class="" aria-labelledby="p-personal-label">
                <h3 id="p-personal-label">Personal tools</h3>
                <ul>
                    <li id="pt-anonuserpage">Not logged in</li><li id="pt-anontalk"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [alt-shift-n]" accesskey="n">Talk</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [alt-shift-y]" accesskey="y">Contributions</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Combination" title="You are encouraged to create an account and log in; however, it is not mandatory">Create account</a></li><li id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Combination" title="You're encouraged to log in; however, it's not mandatory. [alt-shift-o]" accesskey="o">Log in</a></li>						</ul>
            </div>
                            <div id="left-navigation">
                                <div id="p-namespaces" role="navigation" class="vectorTabs" aria-labelledby="p-namespaces-label">
                <h3 id="p-namespaces-label">Namespaces</h3>
                <ul>
                    <li id="ca-nstab-main" class="selected"><span><a href="/wiki/Combination" title="View the content page [alt-shift-c]" accesskey="c">Article</a></span></li><li id="ca-talk"><span><a href="/wiki/Talk:Combination" rel="discussion" title="Discussion about the content page [alt-shift-t]" accesskey="t">Talk</a></span></li>						</ul>
            </div>
                                <div id="p-variants" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-variants-label">
                                        <h3 id="p-variants-label" tabindex="0">
                    <span>Variants</span>
                </h3>
                <div class="menu">
                    <ul>
                                                    </ul>
                </div>
            </div>
                            </div>
        <div id="right-navigation">
                                <div id="p-views" role="navigation" class="vectorTabs" aria-labelledby="p-views-label">
                <h3 id="p-views-label">Views</h3>
                <ul>
                    <span class="placeholder" style="display: none;"></span><span class="placeholder" style="display: none;"></span><span class="placeholder" style="display: none;"></span>						</ul>
            </div>
                                <div id="p-cactions" role="navigation" class="vectorMenu" aria-labelledby="p-cactions-label">
                <h3 id="p-cactions-label" tabindex="0" style="width: 60.1719px;"><span>More</span></h3>
                <div class="menu">
                    <ul><li id="ca-view" class="collapsible selected" style="display: list-item;"><span><a href="/wiki/Combination">Read</a></span></li><li id="ca-edit" class="collapsible" style="display: list-item;"><span><a href="/w/index.php?title=Combination&amp;action=edit" title="Edit this page [alt-shift-e]" accesskey="e">Edit</a></span></li><li id="ca-history" class="collapsible" style="display: list-item;"><span><a href="/w/index.php?title=Combination&amp;action=history" title="Past revisions of this page [alt-shift-h]" accesskey="h">View history</a></span></li>
                                                    </ul>
                </div>
            </div>
                                <div id="p-search" role="search">
                <h3>
                    <label for="searchInput">Search</label>
                </h3>
                <form action="/w/index.php" id="searchform">
                    <div id="simpleSearch">
                        <input type="search" name="search" placeholder="Search Wikipedia" title="Search Wikipedia [alt-shift-f]" accesskey="f" id="searchInput" tabindex="1" autocomplete="off"><input type="hidden" value="Special:Search" name="title"><input type="submit" name="go" value="Go" title="Go to a page with this exact name if it exists" id="searchButton" class="searchButton">							</div>
                </form>
            </div>
                            </div>
    </div>
    <div id="mw-panel">
        <div id="p-logo" role="banner"><a class="mw-wiki-logo" href="/wiki/Main_Page" title="Visit the main page"></a></div>
                <div class="portal" role="navigation" id="p-navigation" aria-labelledby="p-navigation-label">
    <h3 id="p-navigation-label">Navigation</h3>
    <div class="body">
                        <ul>
            <li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [alt-shift-z]" accesskey="z">Main page</a></li><li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li><li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content – the best of Wikipedia">Featured content</a></li><li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li><li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [alt-shift-x]" accesskey="x">Random article</a></li><li id="n-sitesupport"><a href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us">Donate to Wikipedia</a></li><li id="n-shoplink"><a href="//shop.wikimedia.org" title="Visit the Wikipedia store">Wikipedia store</a></li>				</ul>
                    </div>
</div>
    <div class="portal" role="navigation" id="p-interaction" aria-labelledby="p-interaction-label">
    <h3 id="p-interaction-label">Interaction</h3>
    <div class="body">
                        <ul>
            <li id="n-help"><a href="/wiki/Help:Contents" title="Guidance on how to use and edit Wikipedia">Help</a></li><li id="n-aboutsite"><a href="/wiki/Wikipedia:About" title="Find out about Wikipedia">About Wikipedia</a></li><li id="n-portal"><a href="/wiki/Wikipedia:Community_portal" title="About the project, what you can do, where to find things">Community portal</a></li><li id="n-recentchanges"><a href="/wiki/Special:RecentChanges" title="A list of recent changes in the wiki [alt-shift-r]" accesskey="r">Recent changes</a></li><li id="n-contactpage"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us" title="How to contact Wikipedia">Contact page</a></li>				</ul>
                    </div>
</div>
    <div class="portal" role="navigation" id="p-tb" aria-labelledby="p-tb-label">
    <h3 id="p-tb-label">Tools</h3>
    <div class="body">
                        <ul>
            <li id="t-whatlinkshere"><a href="/wiki/Special:WhatLinksHere/Combination" title="List of all English Wikipedia pages containing links to this page [alt-shift-j]" accesskey="j">What links here</a></li><li id="t-recentchangeslinked"><a href="/wiki/Special:RecentChangesLinked/Combination" rel="nofollow" title="Recent changes in pages linked from this page [alt-shift-k]" accesskey="k">Related changes</a></li><li id="t-upload"><a href="/wiki/Wikipedia:File_Upload_Wizard" title="Upload files [alt-shift-u]" accesskey="u">Upload file</a></li><li id="t-specialpages"><a href="/wiki/Special:SpecialPages" title="A list of all special pages [alt-shift-q]" accesskey="q">Special pages</a></li><li id="t-permalink"><a href="/w/index.php?title=Combination&amp;oldid=821319628" title="Permanent link to this revision of the page">Permanent link</a></li><li id="t-info"><a href="/w/index.php?title=Combination&amp;action=info" title="More information about this page">Page information</a></li><li id="t-wikibase"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q202805" title="Link to connected data repository item [alt-shift-g]" accesskey="g">Wikidata item</a></li><li id="t-cite"><a href="/w/index.php?title=Special:CiteThisPage&amp;page=Combination&amp;id=821319628" title="Information on how to cite this page">Cite this page</a></li>				</ul>
                    </div>
</div>
    <div class="portal" role="navigation" id="p-coll-print_export" aria-labelledby="p-coll-print_export-label">
    <h3 id="p-coll-print_export-label">Print/export</h3>
    <div class="body">
                        <ul>
            <li id="coll-create_a_book"><a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Combination">Create a book</a></li><li id="coll-download-as-rdf2latex"><a href="/w/index.php?title=Special:ElectronPdf&amp;page=Combination&amp;action=show-download-screen">Download as PDF</a></li><li id="t-print"><a href="/w/index.php?title=Combination&amp;printable=yes" title="Printable version of this page [alt-shift-p]" accesskey="p">Printable version</a></li>				</ul>
                    </div>
</div>
    <div class="portal" role="navigation" id="p-wikibase-otherprojects" aria-labelledby="p-wikibase-otherprojects-label">
    <h3 id="p-wikibase-otherprojects-label">In other projects</h3>
    <div class="body">
                        <ul>
            <li class="wb-otherproject-link wb-otherproject-commons"><a href="https://commons.wikimedia.org/wiki/Category:Combinations_with_repetition" hreflang="en">Wikimedia Commons</a></li>				</ul>
                    </div>
</div>
    <div class="portal" role="navigation" id="p-lang" aria-labelledby="p-lang-label"><span class="uls-settings-trigger" title="Language settings" tabindex="0" role="button" aria-haspopup="true"></span>
    <h3 id="p-lang-label">Languages</h3>
    <div class="body">
                        <ul>
            <li class="interlanguage-link interwiki-af"><a href="https://af.wikipedia.org/wiki/Kombinasie" title="Kombinasie – Afrikaans" lang="af" hreflang="af" class="interlanguage-link-target">Afrikaans</a></li><li class="interlanguage-link interwiki-am"><a href="https://am.wikipedia.org/wiki/%E1%88%B5%E1%89%A5%E1%88%B0%E1%89%A3" title="ስብሰባ – Amharic" lang="am" hreflang="am" class="interlanguage-link-target">አማርኛ</a></li><li class="interlanguage-link interwiki-ar"><a href="https://ar.wikipedia.org/wiki/%D8%AA%D9%88%D9%81%D9%8A%D9%82_(%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA)" title="توفيق (رياضيات) – Arabic" lang="ar" hreflang="ar" class="interlanguage-link-target">العربية</a></li><li class="interlanguage-link interwiki-az"><a href="https://az.wikipedia.org/wiki/Kombinazon" title="Kombinazon – Azerbaijani" lang="az" hreflang="az" class="interlanguage-link-target">Azərbaycanca</a></li><li class="interlanguage-link interwiki-bn"><a href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%AE%E0%A6%BE%E0%A6%AC%E0%A7%87%E0%A6%B6_(%E0%A6%97%E0%A6%A3%E0%A6%BF%E0%A6%A4)" title="সমাবেশ (গণিত) – Bangla" lang="bn" hreflang="bn" class="interlanguage-link-target">বাংলা</a></li><li class="interlanguage-link interwiki-be"><a href="https://be.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D0%BB%D1%83%D1%87%D1%8D%D0%BD%D0%BD%D0%B5_(%D0%BA%D0%B0%D0%BC%D0%B1%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D1%8B%D0%BA%D0%B0)" title="Спалучэнне (камбінаторыка) – Belarusian" lang="be" hreflang="be" class="interlanguage-link-target">Беларуская</a></li><li class="interlanguage-link interwiki-bg"><a href="https://bg.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)" title="Комбинация (математика) – Bulgarian" lang="bg" hreflang="bg" class="interlanguage-link-target">Български</a></li><li class="interlanguage-link interwiki-cs"><a href="https://cs.wikipedia.org/wiki/Kombinace" title="Kombinace – Czech" lang="cs" hreflang="cs" class="interlanguage-link-target">Čeština</a></li><li class="interlanguage-link interwiki-de"><a href="https://de.wikipedia.org/wiki/Kombination_(Kombinatorik)" title="Kombination (Kombinatorik) – German" lang="de" hreflang="de" class="interlanguage-link-target">Deutsch</a></li><li class="interlanguage-link interwiki-et"><a href="https://et.wikipedia.org/wiki/Kombinatsioon" title="Kombinatsioon – Estonian" lang="et" hreflang="et" class="interlanguage-link-target">Eesti</a></li><li class="interlanguage-link interwiki-el"><a href="https://el.wikipedia.org/wiki/%CE%A3%CF%85%CE%BD%CE%B4%CF%85%CE%B1%CF%83%CE%BC%CF%8C%CF%82_(%CE%BC%CE%B1%CE%B8%CE%B7%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%AC)" title="Συνδυασμός (μαθηματικά) – Greek" lang="el" hreflang="el" class="interlanguage-link-target">Ελληνικά</a></li><li class="interlanguage-link interwiki-eo"><a href="https://eo.wikipedia.org/wiki/Kombina%C4%B5o_(kombinatoriko)" title="Kombinaĵo (kombinatoriko) – Esperanto" lang="eo" hreflang="eo" class="interlanguage-link-target">Esperanto</a></li><li class="interlanguage-link interwiki-eu"><a href="https://eu.wikipedia.org/wiki/Konbinazio_(konbinatoria)" title="Konbinazio (konbinatoria) – Basque" lang="eu" hreflang="eu" class="interlanguage-link-target">Euskara</a></li><li class="interlanguage-link interwiki-fa"><a href="https://fa.wikipedia.org/wiki/%D8%AA%D8%B1%DA%A9%DB%8C%D8%A8_(%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C)" title="ترکیب (ریاضی) – Persian" lang="fa" hreflang="fa" class="interlanguage-link-target">فارسی</a></li><li class="interlanguage-link interwiki-fr"><a href="https://fr.wikipedia.org/wiki/Combinaison_(math%C3%A9matiques)" title="Combinaison (mathématiques) – French" lang="fr" hreflang="fr" class="interlanguage-link-target">Français</a></li><li class="interlanguage-link interwiki-ko"><a href="https://ko.wikipedia.org/wiki/%EC%A1%B0%ED%95%A9" title="조합 – Korean" lang="ko" hreflang="ko" class="interlanguage-link-target">한국어</a></li><li class="interlanguage-link interwiki-hy"><a href="https://hy.wikipedia.org/wiki/%D4%B8%D5%B6%D5%BF%D6%80%D5%B8%D6%82%D5%B5%D5%A9" title="Ընտրույթ – Armenian" lang="hy" hreflang="hy" class="interlanguage-link-target">Հայերեն</a></li><li class="interlanguage-link interwiki-hi"><a href="https://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A4%82%E0%A4%9A%E0%A4%AF_(%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4)" title="संचय (गणित) – Hindi" lang="hi" hreflang="hi" class="interlanguage-link-target">हिन्दी</a></li><li class="interlanguage-link interwiki-id"><a href="https://id.wikipedia.org/wiki/Kombinasi" title="Kombinasi – Indonesian" lang="id" hreflang="id" class="interlanguage-link-target">Bahasa Indonesia</a></li><li class="interlanguage-link interwiki-it"><a href="https://it.wikipedia.org/wiki/Combinazione" title="Combinazione – Italian" lang="it" hreflang="it" class="interlanguage-link-target">Italiano</a></li><li class="interlanguage-link interwiki-kn"><a href="https://kn.wikipedia.org/wiki/%E0%B2%B8%E0%B2%82%E0%B2%AF%E0%B3%8B%E0%B2%9C%E0%B2%A8%E0%B3%86%E0%B2%97%E0%B2%B3%E0%B3%81" title="ಸಂಯೋಜನೆಗಳು – Kannada" lang="kn" hreflang="kn" class="interlanguage-link-target">ಕನ್ನಡ</a></li><li class="interlanguage-link interwiki-lv"><a href="https://lv.wikipedia.org/wiki/Kombin%C4%81cija" title="Kombinācija – Latvian" lang="lv" hreflang="lv" class="interlanguage-link-target">Latviešu</a></li><li class="interlanguage-link interwiki-lt"><a href="https://lt.wikipedia.org/wiki/Deriniai" title="Deriniai – Lithuanian" lang="lt" hreflang="lt" class="interlanguage-link-target">Lietuvių</a></li><li class="interlanguage-link interwiki-hu"><a href="https://hu.wikipedia.org/wiki/Kombin%C3%A1ci%C3%B3" title="Kombináció – Hungarian" lang="hu" hreflang="hu" class="interlanguage-link-target">Magyar</a></li><li class="interlanguage-link interwiki-mk"><a href="https://mk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%98%D0%B0" title="Комбинација – Macedonian" lang="mk" hreflang="mk" class="interlanguage-link-target">Македонски</a></li><li class="interlanguage-link interwiki-nl"><a href="https://nl.wikipedia.org/wiki/Combinatie_(wiskunde)" title="Combinatie (wiskunde) – Dutch" lang="nl" hreflang="nl" class="interlanguage-link-target">Nederlands</a></li><li class="interlanguage-link interwiki-ja"><a href="https://ja.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E3%81%9B_(%E6%95%B0%E5%AD%A6)" title="組合せ (数学) – Japanese" lang="ja" hreflang="ja" class="interlanguage-link-target">日本語</a></li><li class="interlanguage-link interwiki-nn"><a href="https://nn.wikipedia.org/wiki/Kombinasjon_i_matematikk" title="Kombinasjon i matematikk – Norwegian Nynorsk" lang="nn" hreflang="nn" class="interlanguage-link-target">Norsk nynorsk</a></li><li class="interlanguage-link interwiki-pl"><a href="https://pl.wikipedia.org/wiki/Kombinacja_bez_powt%C3%B3rze%C5%84" title="Kombinacja bez powtórzeń – Polish" lang="pl" hreflang="pl" class="interlanguage-link-target">Polski</a></li><li class="interlanguage-link interwiki-pt"><a href="https://pt.wikipedia.org/wiki/Combina%C3%A7%C3%A3o_(matem%C3%A1tica)" title="Combinação (matemática) – Portuguese" lang="pt" hreflang="pt" class="interlanguage-link-target">Português</a></li><li class="interlanguage-link interwiki-ro"><a href="https://ro.wikipedia.org/wiki/Combinare" title="Combinare – Romanian" lang="ro" hreflang="ro" class="interlanguage-link-target">Română</a></li><li class="interlanguage-link interwiki-ru"><a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%87%D0%B5%D1%82%D0%B0%D0%BD%D0%B8%D0%B5" title="Сочетание – Russian" lang="ru" hreflang="ru" class="interlanguage-link-target">Русский</a></li><li class="interlanguage-link interwiki-sq"><a href="https://sq.wikipedia.org/wiki/Kombinacioni" title="Kombinacioni – Albanian" lang="sq" hreflang="sq" class="interlanguage-link-target">Shqip</a></li><li class="interlanguage-link interwiki-simple"><a href="https://simple.wikipedia.org/wiki/Combination_(mathematics)" title="Combination (mathematics) – Simple English" lang="simple" hreflang="simple" class="interlanguage-link-target">Simple English</a></li><li class="interlanguage-link interwiki-sk"><a href="https://sk.wikipedia.org/wiki/Kombin%C3%A1cia_(kombinatorika)" title="Kombinácia (kombinatorika) – Slovak" lang="sk" hreflang="sk" class="interlanguage-link-target">Slovenčina</a></li><li class="interlanguage-link interwiki-sl"><a href="https://sl.wikipedia.org/wiki/Kombinacija_(matematika)" title="Kombinacija (matematika) – Slovenian" lang="sl" hreflang="sl" class="interlanguage-link-target">Slovenščina</a></li><li class="interlanguage-link interwiki-sr"><a href="https://sr.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%98%D0%B0" title="Комбинација – Serbian" lang="sr" hreflang="sr" class="interlanguage-link-target">Српски / srpski</a></li><li class="interlanguage-link interwiki-sh"><a href="https://sh.wikipedia.org/wiki/Kombinacija" title="Kombinacija – Serbo-Croatian" lang="sh" hreflang="sh" class="interlanguage-link-target">Srpskohrvatski / српскохрватски</a></li><li class="interlanguage-link interwiki-fi"><a href="https://fi.wikipedia.org/wiki/Kombinaatio" title="Kombinaatio – Finnish" lang="fi" hreflang="fi" class="interlanguage-link-target">Suomi</a></li><li class="interlanguage-link interwiki-sv"><a href="https://sv.wikipedia.org/wiki/Kombination_(matematik)" title="Kombination (matematik) – Swedish" lang="sv" hreflang="sv" class="interlanguage-link-target">Svenska</a></li><li class="interlanguage-link interwiki-ta"><a href="https://ta.wikipedia.org/wiki/%E0%AE%9A%E0%AF%87%E0%AE%B0%E0%AF%8D%E0%AE%B5%E0%AF%81_(%E0%AE%95%E0%AE%A3%E0%AE%BF%E0%AE%A4%E0%AE%AE%E0%AF%8D)" title="சேர்வு (கணிதம்) – Tamil" lang="ta" hreflang="ta" class="interlanguage-link-target">தமிழ்</a></li><li class="interlanguage-link interwiki-th"><a href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88" title="การจัดหมู่ – Thai" lang="th" hreflang="th" class="interlanguage-link-target">ไทย</a></li><li class="interlanguage-link interwiki-tr"><a href="https://tr.wikipedia.org/wiki/Kombinasyon" title="Kombinasyon – Turkish" lang="tr" hreflang="tr" class="interlanguage-link-target">Türkçe</a></li><li class="interlanguage-link interwiki-uk"><a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B1%D1%96%D0%BD%D0%B0%D1%86%D1%96%D1%8F_(%D0%BA%D0%BE%D0%BC%D0%B1%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0)" title="Комбінація (комбінаторика) – Ukrainian" lang="uk" hreflang="uk" class="interlanguage-link-target">Українська</a></li><li class="interlanguage-link interwiki-ur"><a href="https://ur.wikipedia.org/wiki/%D8%AA%D9%88%D9%84%DB%8C%D9%81" title="تولیف – Urdu" lang="ur" hreflang="ur" class="interlanguage-link-target">اردو</a></li><li class="interlanguage-link interwiki-vi"><a href="https://vi.wikipedia.org/wiki/T%E1%BB%95_h%E1%BB%A3p_(to%C3%A1n_h%E1%BB%8Dc)" title="Tổ hợp (toán học) – Vietnamese" lang="vi" hreflang="vi" class="interlanguage-link-target">Tiếng Việt</a></li><li class="interlanguage-link interwiki-zh-classical"><a href="https://zh-classical.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E5%AD%B8" title="組合學 – Classical Chinese" lang="zh-classical" hreflang="zh-classical" class="interlanguage-link-target">文言</a></li><li class="interlanguage-link interwiki-zh"><a href="https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88" title="組合 – Chinese" lang="zh" hreflang="zh" class="interlanguage-link-target">中文</a></li>				</ul>
        <div class="after-portlet after-portlet-lang"><span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q202805#sitelinks-wikipedia" title="Edit interlanguage links" class="wbc-editpage">Edit links</a></span></div>			</div>
</div>
        </div>
</div>
        <div id="footer" role="contentinfo">
                <ul id="footer-info">
                        <li id="footer-info-lastmod"> This page was last edited on 19 January 2018, at 18:51.</li>
                        <li id="footer-info-copyright">Text is available under the <a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike License</a><a rel="license" href="//creativecommons.org/licenses/by-sa/3.0/" style="display:none;"></a>;
additional terms may apply.  By using this site, you agree to the <a href="//wikimediafoundation.org/wiki/Terms_of_Use">Terms of Use</a> and <a href="//wikimediafoundation.org/wiki/Privacy_policy">Privacy Policy</a>. Wikipedia® is a registered trademark of the <a href="//www.wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.</li>
                    </ul>
                <ul id="footer-places">
                        <li id="footer-places-privacy"><a href="https://wikimediafoundation.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">Privacy policy</a></li>
                        <li id="footer-places-about"><a href="/wiki/Wikipedia:About" title="Wikipedia:About">About Wikipedia</a></li>
                        <li id="footer-places-disclaimer"><a href="/wiki/Wikipedia:General_disclaimer" title="Wikipedia:General disclaimer">Disclaimers</a></li>
                        <li id="footer-places-contact"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a></li>
                        <li id="footer-places-developers"><a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">Developers</a></li>
                        <li id="footer-places-cookiestatement"><a href="https://wikimediafoundation.org/wiki/Cookie_statement">Cookie statement</a></li>
                        <li id="footer-places-mobileview"><a href="//en.m.wikipedia.org/w/index.php?title=Combination&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
                    <li style=""><a href="#">Enable previews</a></li></ul>
                                <ul id="footer-icons" class="noprint">
                                <li id="footer-copyrightico">
                <a href="https://wikimediafoundation.org/"><img src="/static/images/wikimedia-button.png" srcset="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x" width="88" height="31" alt="Wikimedia Foundation"></a>					</li>
                                <li id="footer-poweredbyico">
                <a href="//www.mediawiki.org/"><img src="/static/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x" width="88" height="31"></a>					</li>
                            </ul>
                <div style="clear: both;"></div>
</div>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgPageParseReport":{"limitreport":{"cputime":"0.292","walltime":"1.491","ppvisitednodes":{"value":1497,"limit":1000000},"ppgeneratednodes":{"value":0,"limit":1500000},"postexpandincludesize":{"value":23547,"limit":2097152},"templateargumentsize":{"value":1321,"limit":2097152},"expansiondepth":{"value":12,"limit":40},"expensivefunctioncount":{"value":4,"limit":500},"entityaccesscount":{"value":0,"limit":400},"timingprofile":["100.00%  252.870      1 -total"," 36.87%   93.231      1 Template:Reflist"," 16.44%   41.566      2 Template:Fix"," 15.62%   39.489      1 Template:Citation_needed"," 14.66%   37.082      1 Template:Cite_book","  8.47%   21.419      3 Template:Category_handler","  8.41%   21.279      1 Template:About","  6.76%   17.093      2 Template:Delink","  6.11%   15.451      4 Template:Citation","  5.76%   14.563      2 Template:Redirect"]},"scribunto":{"limitreport-timeusage":{"value":"0.092","limit":"10.000"},"limitreport-memusage":{"value":4685199,"limit":52428800}},"cachereport":{"origin":"mw1272","timestamp":"20180122161009","ttl":1900800,"transientcontent":false}}});});</script><script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":93,"wgHostname":"mw1274"});});</script>


<div id="mwe-popups-svg"><svg width="0" height="0"><defs><clipPath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"></polygon></clipPath><clipPath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"></polygon></clipPath><clipPath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"></polygon></clipPath><clipPath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"></polygon></clipPath></defs></svg></div><div class="suggestions" style="display: none; font-size: 13px;"><div class="suggestions-results"></div><div class="suggestions-special"></div></div><a accesskey="v" href="https://en.wikipedia.org/wiki/Combination?action=edit" class="oo-ui-element-hidden"></a></body>`;

const links = html.match(/<img [^>]*src="[^"].*"[^>]*>/gm)
    .map(x => x.replace(/.*src="([^"]*)".*/, '$1')) //(everything that is after src= and between "")
    .filter(x => /\.png$/.test(x)); // only png files
console.log(links);