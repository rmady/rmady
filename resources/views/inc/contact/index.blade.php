@extends('layouts.app')

@section('content')
    <div id="contact" class="col-md-12 p-2">
        <h1 class="text-center">Fale Comigo</h1>
        <div id="bg-contact" class="col-md-6 text-center mx-auto">
            {!! Form::open(['url' => 'contact/submit']) !!}
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <span class="input-group-text">Nome</span>
                </div>
                {{Form::text('name', '', ['class' => 'form-control','placeholder' =>'Informe seu nome'])}}
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">e-Mail</span>
                </div>
                {{Form::text('email', '', ['class' => 'form-control', 'placeholder' =>'Exemplo: rmady@rmady.com'])}}
            </div>
            <div class="form-group">
                {{Form::label('message', 'Mensagem')}}
                {{Form::textarea('message', '', ['class' => 'form-control',
                'placeholder' =>'Entre em contato comigo se você quiser expandir os seus horizontes lol'])}}
            </div>
            <div class="text-center">
                {{Form::button('Apagar', ['class' => 'btn', 'type' => 'reset']) }}
                {{Form::submit('Enviar',  ['class' => 'btn btn-outline-primary'])}}
            </div>
            {!! Form::close() !!}
        </div>
@endsection
