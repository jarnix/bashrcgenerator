<header>
	<div class="content _cf">
		<div class="item-top-bar" class="_cf" id="i-{{$item.alphaId}}">
			<div class="vote _cf">
				<div class="up" onclick="koard.action.plugins.itemList.voteForItem('{{$item.alphaId}}', 1, this);"></div>
				<div class="down" onclick="koard.action.plugins.itemList.voteForItem('{{$item.alphaId}}', -1, this);"></div>
				<div class="note">{{$item.u-$item.d}}</div>
			</div>
			<div class="author">
				Par <a class="nonunderlined" href="/{{$item.username}}">{{$item.username}}</a><br />
				Dans : <a href="/b/{{$item.lang}}/{{$item.boardName}}">{{$item.lang}}/{{$item.boardName}}</a>
			</div>
		</div>


		<nav>
			<div class="logo">
				<a href="/"><i><u>Koard</u></i></a>
			</div>
		</nav>


		<div id="user-box">
			<script>
				koard.includedUserPlugins.push('userBox');
			</script>
		</div>

		<div id="close-box">
			<a class="nonunderlined" href="{{$item.data.url|default:'#'}}" target="_top">x</a>
		</div>
	</div>
</header>

