<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index(Product $products)
    {
        return Inertia::render('Products/index', [
            'products' => $products->all()
        ]);
    }

    public function create(Request $request)
    {
        dd($request);
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'amount' => 'required | numeric',
            'tag' => 'required',
            'image' => 'file | required'
        ]);
    }
}
