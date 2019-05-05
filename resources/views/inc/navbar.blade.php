<nav class="navbar navbar-expand-lg navbar-light sticky-top site-header">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
        <img src="/img/minilogo.png" alt="Logo RMady" class="logo" width="128"></a>

    <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link {{Request::is('work') ? 'active' : ''}}" href="{{ url('/work') }}">Trabs</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link {{Request::is('energy') ? 'active' : ''}}" href="{{ url('/energy') }}">NGRs</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link {{Request::is('about') ? 'active' : ''}}" href="{{ url('/about') }}">Sobre</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link {{Request::is('contact') ? 'active' : ''}}" href="{{ url('/contact') }}">Fale Comigo</a>
            </li>
        </ul>
        <span class="navbar-text">
        @if (Auth::guest())
            <a class="btn" href="{{ url('/register') }}">Registar</a>
            <a class="btn btn-outline-primary btn-login" href="{{ url('/login') }}">Entrar</a>
        @else
            <a class="btn btn-outline-primary btn-login" title="{{Auth::user()->firstname .' '. Auth::user()->lastname}}" href="#">
                <i class="glyphicon glyphicon-user"></i> {{Auth::user()->firstname }}
            </a>
            <a class="btn" href="{{Auth::logout()}}">Sair</a>
        @endif
        </span>
    </div>
</nav>
