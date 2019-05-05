<div class="footer border-top mx-auto my-3">
    <div class="text-center">
        <ul class="list-unstyled text-center">
            <li class="m-3 d-inline-block">
                <a class="py-2 d-none d-md-inline-block" href="{{ url('/work') }}">Trabs</a></li>
            <li class="m-3 d-inline-block">
                <a class="py-2 d-none d-md-inline-block" href="{{ url('/energy') }}">NGRs</a>
            </li>
            <li class="m-3 d-inline-block">
                <a class="py-2 d-none d-md-inline-block" href="{{ url('/about') }}">Sobre</a>
            </li>
            <li class="m-3 d-inline-block">
                <a class="py-2 d-none d-md-inline-block" href="{{ url('/contact') }}">Fale Comigo</a>
            </li>
        </ul>
        @include('inc.contact.info')
        <div class="copyright">
            <i class="far fa-copyright fa-flip-horizontal"></i> RMady
        </div>
    </div>
</div>
