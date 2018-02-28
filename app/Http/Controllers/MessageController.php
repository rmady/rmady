<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller {

    public function save(Request $request) {

        $this->validate($request,
            ['name'=> 'required',
            'email'=> 'required',
            'message'=> 'required',
            ]);

        //Create new Message
        $message = new Message;
        $message->name = $request->input('name');
        $message->email = $request->input('email');
        $message->message = $request->input('message');
        //Save
        $message->save();

        //Redirect
        return redirect('/')->with('success', 'Mensagem Enviada');

    }

    public function view($id = null) {
        if(empty($id)) {
            $messages = Message::all();
        } else {
            $messages = Message::find($id);
        }
        return view('inc.contact.view')->with('messages', $messages);
    }
}
