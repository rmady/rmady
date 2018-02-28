@extends('layouts.app')

@section('content')
    <div id="contact">
    <h1 class="text-center">Fale Conosco</h1>
    <div id="bg-contact" class="col-md-6 col-md-offset-3">
    {!! Form::open(['url' => 'contact/submit']) !!}
        <div class="input-group">
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
            'placeholder' =>'Entre em contato conosco se você quiser expandir os seus horizontes'])}}
        </div>
        <div class="text-center">
            {{Form::button('Apagar', ['class' => 'btn', 'type' => 'reset']) }}
            {{Form::submit('Enviar',  ['class' => 'btn btn-primary'])}}
        </div>
    {!! Form::close() !!}
    </div>
@endsection