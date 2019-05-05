<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="shortcut icon" href="{{{asset('img/nanologo.png')}}}">
    <link href="{{{ asset('css/app.css') }}}" rel="stylesheet">
</head>
<body>
<div class="bar-header">
    <div class="logo-bar"></div>
</div>
<div class="container rmady-content">
    <div class="row">
        <div class="col-md-12 col-leg-12">
            @include('inc.messages')
            @yield('content')
        </div>
    </div>
</div>
<div class="footer border-top mx-auto my-1">
    @include('inc.contact.info')
    <div class="copyright text-center">
        <i class="far fa-copyright fa-flip-horizontal"></i> RMady
    </div>
</div>
</body>
</html>

