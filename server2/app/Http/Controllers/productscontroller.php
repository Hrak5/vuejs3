<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class productscontroller extends Controller
{
    public function index(){
        $products = product::get();
        return response($products,200);
    }
}
