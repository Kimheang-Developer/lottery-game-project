<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Withdraw;

class WithdrawController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => Withdraw::all()], 200);
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
        $validated = $request->validate([
            'amount' => 'required'
        ]);

        $withdraw = new Withdraw();
        $withdraw->user_id = Auth::user()->id;
        $withdraw->amount = $request->input('amount');
        $withdraw->save();

        return response()->json([
            'data' => $withdraw,
            'message' => 'Created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $withdraw = Withdraw::findOrFail($id);
        return response()->json(['data' => $withdraw], 200);
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
        $withdraw = Withdraw::findOrFail($id);
        $this->validate($request, [
            'amount' => 'required',
        ]);
        $withdraw->user_id = Auth::user()->id;
        $withdraw->amount = $request->input('amount');
        $withdraw->save();
        return response()->json(['data' => $withdraw, 'message' => 'Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $withdraw = Withdraw::findOrFail($id);
        $withdraw->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
