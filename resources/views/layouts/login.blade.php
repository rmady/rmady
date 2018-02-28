<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div class="bar-header">
    <div class="logo-bar"></div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12 col-leg-12">
            @include('inc.messages')
            @yield('content')
        </div>
    </div>
</div>
@include('inc.footer')


</body>
</html>

