{{include file="../../_views/before.tpl" version=1}}

<header class="content">

	<div class="social fb-like" data-send="true" data-layout="button_count" data-width="450" data-show-faces="false" data-font="arial"></div>

	<a href="https://twitter.com/share" class="social twitter-share-button" data-lang="en" data-related="bashrcgenerator">Tweet</a>

	<div class="social g-plusone" data-annotation="inline" data-size="medium" data-width="300"></div>

</header>

<div class="content">

	<section class="ad">
		<script type="text/javascript"><!--
			google_ad_client = "ca-pub-1628492964947056";
			/* leaderboard texte */
			google_ad_slot = "4003492142";
			google_ad_width = 728;
			google_ad_height = 15;
			//-->
		</script>
		<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>

		<script type="text/javascript"><!--
			google_ad_client = "ca-pub-1628492964947056";
			/* leaderboard 728x90 */
			google_ad_slot = "3336549173";
			google_ad_width = 728;
			google_ad_height = 90;
			//-->
		</script>
		<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>

	</section>

	<h1><div class="logo"></div>.bashrc PS1 generator</h1>

	<h2>Generate your .bashrc PS1 prompt easily with a drag and drop interface</h2>

	<section class="presets">
		<b>Examples and presets of PS1 prompts</b>
		<span>Clicking on an example will replace your selection.</span>
		<ol id="presets">

		</ol>
	</section>

	<section class="main">

		<b>Preview of your prompt</b>
		<div id="preview"></div>

		<b>Your selection
			<span class="buttons _cf">
				<a class="small-button" id="removeEverythingBtn">remove everything</a>
				<!-- <a class="small-button" id="sendBtn">send a link with this selection</a> -->
			</span>
		</b>

		<ul class="dd" id="wishlist"></ul>

		<div id="palette" class="arrow-box" style="display:none;">
			<div class="colors"></div>
			<div class="boldness"></div>
		</div>

	</section>

	<section class="sources">
		<b>Drag and drop elements to your selection</b>
		<ul id="source" class="source dd _cf">

		</ul>
	</section>

	<section class="output">
		<b>Your generated .bashrc PS1 and additional functions</b>
		<span>Paste to your command line or copy into your .bashrc file for permanent use (example: vim ~/.bashrc), which I recommend doing of course.</span>
		<div id="output"></div>
	</section>

</div>

<footer class="content">
	<section id="sources">
		<b>References for PS1, bash, .bashrc, etc</b>
		<ul>
			<li><a href="http://www.ibm.com/developerworks/linux/library/l-tip-prompt/">Prompt Magic (IBM.com)</a></li>
			<li><a href="http://blog.grahampoulter.com/2011/09/show-current-git-bazaar-or-mercurial.html">Show the current Git, Mercurial, Subversion or Bazaar branch in your prompt (Graham Poulter)</a></li>
			<li><a href="http://www.gnu.org/software/bash/manual/bashref.html">bash reference manual (gnu.org)</a></li>
			<li><a href="http://stackoverflow.com/questions/4133904/ps1-line-with-git-current-branch-and-colors">PS1 line with git current branch and colors (stackoverflow.com)</a></li>
			<li>And thank you to Саша Ярославцев and Mathias Ciliberto for reporting bugs and their solutions :)</li>
		</ul>
	</section>

	<section id="copyright">
		PS1 .bashrc generator, a week-end hack from <a href="http://www.j-u-l-i-e-n.com">Julien Ricard</a>
	</section>

</footer>

{{include file="../../_views/after1.tpl"}}
{{include file="../../_views/after2.tpl" version=1}}