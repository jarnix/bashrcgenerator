<div class="item {{if $model eq 'list'}}in-list{{else}}single{{/if}} {{$item.type}} _cf" id="i-{{$item.alphaId}}">
	<div class="vote">
		<div class="up" onclick="koard.action.plugins.itemList.voteForItem('{{$item.alphaId}}', 1, this, '{{$item.lang}}', '{{$item.boardName}}');"></div>
		<div class="note">{{$item.u-$item.d}}</div>
		<div class="down" onclick="koard.action.plugins.itemList.voteForItem('{{$item.alphaId}}', -1, this, '{{$item.lang}}', '{{$item.boardName}}');"></div>
	</div>

	<div class="main">

		<div class="inside">

			{{if $model eq 'list'}}
				<div class="image">
					{{if $item.type=='page'}}
						{{if !empty($item.data.thumbnailSmall)}}
							<a href="{{$item.data.url}}" target="_blank" rel="nofollow"><img src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.thumbnailSmall}}" /></a>
						{{/if}}
					{{elseif $item.type=='image'}}
						{{if !empty($item.data.thumbnailSmall)}}
							<a class="zoom" href="javascript:;" onclick="koard.window.open('{{$item.title|escape:'javascript'}}', '', '{{$item.data.url}}', false, true);"><img src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.thumbnailSmall}}" /><span></span></a>
						{{/if}}
					{{elseif $item.type=='uploadedImage'}}
						<a class="zoom" href="javascript:;" onclick="koard.window.open('{{$item.title|escape:'javascript'}}', '', '{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.image}}', false, true);"><img src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.thumbnailSmall}}" /><span></span></a>
					{{elseif $item.type=='embed'}}
						{{if isset($item.data.thumbnailSmall)}}
							<a class="zoom play" href="javascript:;" onclick="koard.window.open('{{$item.title|escape:'javascript'}}', '{{$item.data.embedHtml|escape:'html'}}', '', false, true);"><img src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.thumbnailSmall}}" /><span></span></a>
						{{else}}

						{{/if}}
					{{/if}}
				</div>
			{{/if}}

			<div>
				<div class="title">
					{{if $model eq 'list'}}
						<span class="type icon fugue {{$item.type}}"></span>
						{{if $item.type eq 'question'}}
							<a href="/b/{{$item.lang}}/{{$item.boardName}}/d:{{$item.alphaId}}">{{$item.title}}</a>
						{{elseif $item.type eq 'page'}}
							{{if !isset($item.data.url)}}
								???
							{{else}}
								<a href="{{$item.data.url|default:''}}" target="_blank" rel="nofollow">{{$item.title}}</a>
							{{/if}}
						{{else}}
							<a href="/b/{{$item.lang}}/{{$item.boardName}}/d:{{$item.alphaId}}" target="_blank" rel="nofollow">{{$item.title}}</a>
						{{/if}}
					{{else}}
						<h1>{{$item.title}}</h1>
					{{/if}}
				</div>

				{{if $item.type eq 'page'}}
					{{if $item.data.title neq $item.title}}
						<a class="title nonunderlined" target="_blank" rel="nofollow" href="{{$item.data.url}}">{{$item.data.title|escape:'html'}}</a>
					{{/if}}
					{{if isset($item.data.domain)}}<span class="via">{{$item.data.domain|replace:'www.':''}} &mdash;</span>{{/if}}
					{{if $item.data.title neq $item.data.description}}<span class="description">{{$item.data.description}}...</span>{{/if}}
				{{/if}}
			</div>

			{{if $model eq 'single'}}
				<div class="display">
					{{if $item.type=='page'}}
						{{if !empty($item.data.thumbnailSmall)}}
							<a href="{{$item.data.url}}" target="_blank" rel="nofollow"><img src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.thumbnailSmall}}" /></a>
						{{/if}}
					{{elseif $item.type=='image'}}
						<img class="full" src="{{$item.data.url}}">
					{{elseif $item.type=='uploadedImage'}}
						<img class="full" src="{{$_registry->get('config')->site->staticUrl|cat:'/'|cat:$_registry->get('config')->site->staticPath->images|cat:'/'|cat:$item.data.image}}">
					{{elseif $item.type=='embed'}}
						{{$item.data.embedHtml}}
					{{/if}}
				</div>
			{{/if}}
		</div>


		<div class="infos">
			<div class="author">
				Par <a href="/{{$item.username}}">{{$item.username}}</a>, <time class="timeago" datetime="{{$item.dateCreated|strtotime|date_format:'c'}}"></time>
			</div>
			{{if $model eq 'list'}}
			<div class="board">
				Dans <a href="/b/{{$item.lang}}/{{$item.boardName}}">{{$item.lang}}/{{$item.boardName}}</a>
			</div>
			{{/if}}
		</div>

	</div>

	{{if $model eq 'list'}}
		<div class="actions">
			<a class="comment" href="/b/{{$item.lang}}/{{$item.boardName}}/d:{{$item.alphaId}}">commenter</a>
			<div class="count"><div class="arrow_box">{{$item.c|default:0}}</div></div>

			<div class="social">
				{{*
				<div class="for-facebook">
					<div class="fb-like" data-href="http://koard.com/b/{{$item.lang}}/{{$item.boardName}}/d:{{$item.alphaId}}" data-send="false" data-layout="button_count" data-width="150" data-show-faces="false" data-font="arial"></div>
				</div>
				*}}
			</div>
		</div>
	{{/if}}
</div>
<div class="actions2 _cf">
	<a class="comment" href="/b/{{$item.lang}}/{{$item.boardName}}/d:{{$item.alphaId}}">commenter</a>
</div>


