<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\ValidatedInput;
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
        $data = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required | numeric',
            'tag' => 'required',
            'image' => ' required | file | image '
        ]);

        $data['image'] = $request->file('image')->store('image');

        $data['new'] = true;
        $data['status'] = "new";
        $data['discount'] = 0;

        // dd($data);
        Product::create($data);

        return;
    }
}
