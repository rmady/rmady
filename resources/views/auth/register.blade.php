@extends('layouts.login')

@section('content')
    <h1 class="text-center">Registrar</h1>
    {!! Form::open(['url' => 'register']) !!}
    <div class="col-md-6 col-md-offset-3">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="">Nome completo</span>
            </div>
            {{Form::text('firstname', '', ['class' => 'form-control','placeholder' =>'Nome'])}}
            {{Form::text('lastname', '', ['class' => 'form-control','placeholder' =>'Sobrenome'])}}
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">e-mail</span>
            </div>
            {{Form::email('email', '', ['class' => 'form-control', 'placeholder' =>'Endereço de e-mail'])}}
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Username</span>
            </div>
            {{Form::text('username', '', ['class' => 'form-control', 'placeholder' =>'Nome de usuário'])}}
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Senha</span>
            </div>
            {{Form::password('password', ['class' => 'form-control', 'placeholder' =>'Senha'])}}
            {{Form::password('password_confirmation', ['class' => 'form-control', 'placeholder' =>'Confirme a senha'])}}
        </div>
        <div class="text-center">
            {{Form::button('Apagar', ['class' => 'btn', 'type' => 'reset']) }}
            {{Form::submit('Enviar',  ['class' => 'btn btn-primary'])}}
        </div>
    </div>
    {!! Form::close() !!}
@endsection
