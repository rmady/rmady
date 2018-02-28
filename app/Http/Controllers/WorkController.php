<?php
/**
 * Created by PhpStorm.
 * User: rmady
 * Date: 27/02/18
 * Time: 00:03
 */

namespace App\Http\Controllers;


use App\Model\Work;

class WorkController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        $works = Work::all();

        // load the view and pass the nerds
        return View::make('work.index')
            ->with('works', $works);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        //
    }

    /**
     * Save a newly created resource in storage.
     *
     * @return Response
     */
    public function save() {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function view($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update($id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function delete($id) {
        //
    }

}