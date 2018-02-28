<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    @include('inc.navbar')
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

