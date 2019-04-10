<!DOCTYPE html>
<html class="h-full bg-gray-200">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    <script src="{{ mix('/js/app.js') }}" defer></script>

    @routes
</head>
<body class="font-sans leading-none text-gray-800 antialiased">

<div id="app" data-component="{{ $component }}" data-props="{{ json_encode((object) $props) }}"></div>

</body>
</html>
