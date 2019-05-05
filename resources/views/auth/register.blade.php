@extends('layouts.login')

@section('content')
    <div id="login">
        <div class="text-center">
            <img src="/img/minilogo.png" alt="Logo RMady" class="logo" width="128">
        </div>
        <h1 class="text-center mx-auto">Registrar</h1>
        <div id="bg-login" class="mx-auto text-center col-md-8 bg-white">
            {!! Form::open(['url' => 'register']) !!}
            <div class="input-group">
                {{Form::text('firstname', '', ['class' => 'form-control','placeholder' =>'Nome'])}}
                {{Form::text('lastname', '', ['class' => 'form-control','placeholder' =>'Sobrenome'])}}
            </div>
            <div class="input-group">
                {{Form::email('email', '', ['class' => 'form-control', 'placeholder' =>'Endereço de e-mail'])}}
            </div>
            <div class="input-group">
                {{Form::text('username', '', ['class' => 'form-control', 'placeholder' =>'Nome de usuário'])}}
            </div>
            <div class="input-group">
                {{Form::password('password', ['class' => 'form-control', 'placeholder' =>'Senha'])}}
                {{Form::password('password_confirmation', ['class' => 'form-control', 'placeholder' =>'Confirme a senha'])}}
            </div>
            <div class="text-center">
                {{Form::button('Apagar', ['class' => 'btn', 'type' => 'reset']) }}
                {{Form::submit('Enviar',  ['class' => 'btn btn-primary'])}}
            </div>
            {!! Form::close() !!}
        </div>
    </div>
@endsection
