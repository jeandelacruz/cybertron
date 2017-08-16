<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico">
    <!-- Web Fonts -->
    <link rel="stylesheet" type="text/css" href="{!! asset('css/app.css')!!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/global.css')!!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/implement.css')!!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/login.css')!!}">
</head>