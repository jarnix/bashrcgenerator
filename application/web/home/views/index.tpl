{{include file="../../_views/before.tpl"}}

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
                <b><i>1</i>Available elements</b> <span class="info">Drag and drop to your selection.</span>
                <ul id="source" class="source dd _cf">

                </ul>
            </section>
        </div>

        <div class="panel">

            <section class="main">

                <b><i>2</i>Your selection</b> <span class="info">Double-click to change the color and boldness.<br>Drag an element outside to remove it.
                </span>

                <ul class="dd" id="wishlist"></ul>

                <div id="palette" style="display: none;">
                    <div id="palette-close" class="close">
                        <span class="iconic x"></span>
                    </div>
                    <div class="colors"></div>
                    <div class="boldness"></div>
                </div>

                <span class="buttons _cf"> <a class="small-button" id="removeEverythingBtn">remove everything</a> <!-- <a class="small-button" id="sendBtn">send a link with this selection</a> -->
                </span>

            </section>

        </div>

        <div class="panel">

            <section>
                <b><i>3</i>Preview of your prompt</b> <span class="info">This is how your prompt will look like.</span>
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
        <section class="help">
            <p>
                <b>Help</b> To use this for your prompt, it's easy: <br> Type this in your prompt :<br>
                <code> nano ~./bashrc </code>
            </p>
            <p>
                Then copy the generated code at the end of the file.<br> Save and exit (in nano, it's CTRL + o, CTRL + x).<br> To see the changes, either:
            <ul>
                <li>paste the generated code in your prompt like an usual command</li>
                <li>logout and login again</li>
                <li>type "bash" to run a new bash session</li>
            </ul>
            </p>
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
                <li>And thank you to Саша Ярославцев and Mathias Ciliberto for reporting bugs and their solutions :). Thank you to Andreas Steinel too.</li>
            </ul>
        </section>

        <section id="copyright">
            PS1 .bashrc generator, a week-end hack from
            <a href="http://www.j-u-l-i-e-n.com">Julien Ricard</a>
        </section>

    </footer>

</div>

{{include file="../../_views/after1.tpl"}} {{include file="../../_views/after2.tpl"}}
