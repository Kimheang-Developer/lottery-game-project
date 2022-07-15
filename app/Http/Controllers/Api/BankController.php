<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Bank;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => Bank::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'number' => 'required',
            'branch' => 'required',
        ]);
        $bank = new Bank();
        $bank->user_id = Auth::user()->id;
        $bank->name = $request->input('name');
        $bank->number = $request->input('number');
        $bank->branch = $request->input('branch');
        $bank->save();
        return response()->json(['data' => $bank, 'message' => 'Created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bank = Bank::findOrFail($id);
        return response()->json(['data' => $bank], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(!auth("api")->user()->is_admin) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }
        $bank = Bank::findOrFail($id);
        $this->validate($request, [
            'name' => 'required',
            'number' => 'required',
            'branch' => 'required',
        ]);
        $bank->user_id = Auth::user()->id;
        $bank->name = $request->input('name');
        $bank->number = $request->input('number');
        $bank->branch = $request->input('branch');
        $bank->save();
        return response()->json(['data' => $bank, 'message' => 'Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!auth("api")->user()->is_admin) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }
        $bank = Bank::findOrFail($id);
        $bank->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
