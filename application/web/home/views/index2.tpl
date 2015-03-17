{{include file="../../_views/before.tpl" version=2}}

<script>
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);

</script>

<div id="container">

    <nav class="content _cf">

        <ul>
            <li>

                <h1>
                    <div class="logo"></div>
                    &gt;_ .bashrc PS1 generator
                </h1>
                <h2>
                    Generate your .bashrc/PS1 bash prompt easily<br>with a drag and drop interface
                </h2>

            </li>
            <li>
                <header>
                    <div class="social fb-like" data-send="true" data-layout="button_count" data-width="450" data-show-faces="false" data-font="arial"></div>

                    <a href="https://twitter.com/share" class="social twitter-share-button" data-lang="en" data-related="bashrcgenerator">Tweet</a>

                    <div class="social g-plusone" data-annotation="inline" data-size="medium" data-width="300"></div>
                </header>
            </li>

        </ul>

    </nav>

    <section class="content presets _cf">
        <b>Examples and presets of PS1 prompts</b> <span class="info">Clicking on an example will replace your selection.</span>
        <ol id="presets">

        </ol>
    </section>

    <div class="tripanel _cf">
        <div class="panel">
            <section class="sources">
                <b><i>1</i>Available elements</b>
                <span class="info">Drag and drop to your selection.</span>
                <ul id="source" class="source dd _cf">

                </ul>
            </section>
        </div>

        <div class="panel">

            <section class="main">

                <b><i>2</i>Your selection</b>
                <span class="info">Double-click to change the color and boldness.<br>Drag an element outside to remove it.</span>

                <ul class="dd" id="wishlist"></ul>

                <div id="palette" style="display:none;">
                    <div id="palette-close" class="close"><span class="iconic x"></span></div>
                    <div class="colors"></div>
                    <div class="boldness"></div>
                </div>
                
                <span class="buttons _cf">
                    <a class="small-button" id="removeEverythingBtn">remove everything</a>
                    <!-- <a class="small-button" id="sendBtn">send a link with this selection</a> -->
                </span>

            </section>

        </div>

        <div class="panel">

            <section>
                <b><i>3</i>Preview of your prompt</b>
                <span class="info">This is how your prompt will look like.</span>
                <div id="preview"></div>

            </section>

            <section class="output">
                <b><i>4</i>Your generated .bashrc PS1 and additional functions</b> <span>Do you need help for setting up your prompt? <a href="#minidoc">read the documentation below</a>!
                </span>
                <div id="output"></div>
            </section>

        </div>

    </div>

    <div class="content _cf">
        <section>
            <b>Help</b>
        </section>
    </div>

    <footer class="content _cf">
        <section id="sources">
            <b>References for PS1, bash, .bashrc, etc</b>
            <ul>
                <li>
                    <a href="http://www.ibm.com/developerworks/linux/library/l-tip-prompt/">Prompt Magic (IBM.com)</a>
                </li>
                <li>
                    <a href="http://blog.grahampoulter.com/2011/09/show-current-git-bazaar-or-mercurial.html">Show the current Git, Mercurial, Subversion or Bazaar branch in your prompt (Graham Poulter)</a>
                </li>
                <li>
                    <a href="http://www.gnu.org/software/bash/manual/bashref.html">bash reference manual (gnu.org)</a>
                </li>
                <li>
                    <a href="http://stackoverflow.com/questions/4133904/ps1-line-with-git-current-branch-and-colors">PS1 line with git current branch and colors (stackoverflow.com)</a>
                </li>
                <li>And thank you to Саша Ярославцев and Mathias Ciliberto for reporting bugs and their solutions :)</li>
            </ul>
        </section>

        <section id="copyright">
            PS1 .bashrc generator, a week-end hack from
            <a href="http://www.j-u-l-i-e-n.com">Julien Ricard</a>
        </section>

    </footer>

</div>

{{include file="../../_views/after1.tpl"}} {{include file="../../_views/after2.tpl" version=2}}