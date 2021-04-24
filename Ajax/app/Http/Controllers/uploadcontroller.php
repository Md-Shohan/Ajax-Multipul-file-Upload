<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class uploadcontroller extends Controller
{
    function onUpload(Request $request){
        $request->file('FileKey')->store('MyFile');
    }
}
