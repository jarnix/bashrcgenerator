<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
{{if $_registry->get('environment')=='dev'}}
	<script>
	// <![CDATA[
	var less = {env: 'development'};
	// ]]>
	</script>
{{/if}}

	<script>
	// <![CDATA[
	var less = {env: 'development'};
	// ]]>
	</script>

{{include file=$_registry->get('applicationPath')|cat:'/application/'|cat:$_registry->get('version')|cat:'/_views/inc.head.tpl'}}
</head>
<body>

