<div class="comment depth-{{$comment.depth}}" id="c-{{$comment.id}}">
	<div class="vote">
		<div class="up {{if isset($displayNoteUp)}}on{{/if}}" onclick="koard.action.plugins.itemComment.voteForComment('{{$comment.id}}', '{{$item.alphaId}}', 1, this);"></div>
		<div class="down" onclick="koard.action.plugins.itemComment.voteForComment('{{$comment.id}}', '{{$item.alphaId}}', -1, this);"></div>
	</div>
	<div class="main">
		<div class="infos"><a class="nonunderlined" href="/{{$comment.username}}">{{$comment.username}}</a> -  <time class="timeago" datetime="{{$comment.dateCreated|strtotime|date_format:'c'}}"></time> - <span class="note">score : {{$comment.u-$comment.d}}</span> </div>
		<div class="text">{{$comment.text|escape}}</div>
	</div>

	{{if ($item.type eq 'question' && $comment.depth<1) || $item.type neq 'question'}}
		<div class="actions">
			<a class="button tiny white" href="javascript:;" onclick="koard.action.plugins.itemComment.moveForm('{{$comment.id}}', this, '{{$comment.id}}', {{$comment.depth}});">
				{{if ($item.type eq 'question' && $comment.depth eq 0)}}
					{{$_labels->COMMENTER}}
				{{else}}
					{{$_labels->REPONDRE}}
				{{/if}}
			</a>
			<div id="target-{{$comment.id}}"></div>
		</div>
	{{else}}
		<div class="actions"></div>
	{{/if}}

	{{if isset($comment.children)}}
		{{foreach from=$comment.children item="child"}}
			{{include file="../../_views/common/inc.comment.tpl" comment=$child }}
		{{/foreach}}
	{{/if}}

</div>