@extends('layouts.login')

@section('content')
    <div id="login">
        <h1 class="text-center">Entrar</h1>
        <div id="bg-login" class="col-md-4 col-md-offset-4">
            {!! Form::open(['url' => 'login']) !!}
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Username</span>
                </div>
                {{Form::text('username', old('username'), ['class' => 'form-control', 'placeholder' =>'Nome de Usuário'])}}
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Senha</span>
                </div>
                {{Form::password('password', ['class' => 'form-control', 'placeholder' =>'Senha de acesso'])}}
            </div>
            <div class="form-group text-center">
                <div class="checkbox">
                    {{Form::checkbox('remember', old('remember') ? 'checked' : '' , ['class' => 'form-control'])}}
                    Lembrar
                </div>
            </div>
            <div class="text-center">
                {{Form::submit('Entrar',  ['class' => 'btn btn-primary'])}}
            </div>
            <div class="text-center">
                {{link_to_route('password.request', $title = 'Esqueceu a senha?', $parameters = [], $attributes = ['class' => 'btn btn-link']) }}
            </div>
            {!! Form::close() !!}
        </div>
        <div class="text-center col-md-4 col-md-offset-4">
            <h5>Não possui uma conta?</h5>
            {{link_to_route('register', $title = 'Registrar', $parameters = [], $attributes = ['class' => 'btn btn-success']) }}
        </div>
    </div>
@endsection
