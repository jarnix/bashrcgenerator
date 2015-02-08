<div class="rightBox">
	<h6>Modérateurs de {{$board.lang}}/{{$board.name}}</h6>
	<div class="text">
		<ul>
			{{foreach from=$moderators item="moderator"}}
				<li><a href="/{{$moderator}}">{{$moderator}}</a></li>
			{{/foreach}}
		</ul>
	</div>
</div>