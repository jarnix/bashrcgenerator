<meta charset="utf-8">
<title>{{$title|escape|default:$_labels->SITE_NAME}}</title>

<meta name="description" content="{{if (isset($meta_description))}}{{$meta_description}}{{/if}}">
<meta name="keywords" content="{{if (isset($meta_keywords))}}{{$meta_keywords}}{{/if}}">

{{*<link rel="icon" href="/styles/favicon.png" type="image/png">*}}
<link rel="shortcut icon" href="/styles/favicon.png" type="image/x-icon">

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

{{include_metas}}

{{if $version eq 1}}

{{include_css}}
{{include_scripts where='head'}}

{{else}}

<script>
  less = {
    env: "development",
    logLevel: 2,
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    globalVars: {
      var1: '"string value"',
      var2: 'regular value'
    },
    rootpath: ":/a.com/"
  };
</script>

<link rel="stylesheet" type="text/css" href="/styles/reset.css">
<link rel="stylesheet/less" type="text/css" href="/styles/iconic/iconic_fill.less">
<link rel="stylesheet/less" type="text/css" href="/styles/default2.less">
<link rel="stylesheet" type="text/css" href="/styles/tipsy/tipsy.css">

<script src="/javascript/lesscss/less-1.2.2.min.js"></script>

{{/if}}

<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->