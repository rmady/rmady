@extends('layouts.app')

@section('content')
    <h1 class="text-center">Mensagens</h1>
    @if (count($messages) > 0)
        @foreach($messages as $message)
            <ul class="list-group">
                <li class="list-group-item">Nome: {{$message->name}}</li>
                <li class="list-group-item">e-mail: {{$message->email}}</li>
                <li class="list-group-item">Mensagem: {{$message->message}}</li>
            </ul>
        @endforeach
    @endif
@endsection

@section('sidebar')
    @parent
@endsection