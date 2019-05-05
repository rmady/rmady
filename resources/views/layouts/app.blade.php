<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RMady</title>
    <link rel="shortcut icon" href="{{{asset('img/nanologo.png')}}}">
    <link href="{{{ asset('css/app.css') }}}" rel="stylesheet">
</head>
<body>
    @include('inc.navbar')
<div class="rmady-content container-fluid">
    <div class="row">
        @include('inc.messages')
        @yield('content')
    </div>
</div>
@include('inc.footer')
</body>
</html>

