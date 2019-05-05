@extends('layouts.login')

@section('content')
    <div id="login">
        <div class="text-center">
            <img src="/img/minilogo.png" alt="Logo RMady" class="logo" width="128">
        </div>
        <h1 class="text-center">Login</h1>
        <div id="bg-login" class="col-md-4 mx-auto">
            {!! Form::open(['url' => 'login']) !!}
            <div class="input-group">
                {{Form::text('email', old('email'), ['class' => 'form-control', 'placeholder' =>'Nome de Usuário'])}}
            </div>
            <div class="input-group">
                {{Form::password('password', ['class' => 'form-control', 'placeholder' =>'Senha de acesso'])}}
            </div>
            <div class="form-group text-center">
                <div class="d-inline-block">
                    {{Form::checkbox('remember', old('remember') ? 'checked' : '' , ['class' => 'form-control'])}}
                    Lembrar
                </div>
                <div class="d-inline-block">
                    {{Form::submit('Entrar',  ['class' => 'btn btn-outline-primary'])}}
                </div>
            </div>
            <div class="text-center">
                {{link_to_route('password.request', $title = 'Esqueceu a senha?', $parameters = [], $attributes = ['class' => 'btn btn-link']) }}
            </div>
            {!! Form::close() !!}
        </div>
        <div class="my-3 mx-auto text-center">
            <h5>Não possui uma conta?</h5>
            {{link_to_route('register', $title = 'Registrar', $parameters = [], $attributes = ['class' => 'btn btn-outline-success']) }}
        </div>
    </div>
@endsection
