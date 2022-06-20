<?php
namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::with('store')->paginate();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    public function create()
    {
        $stores = Store::all();

        return Inertia::render('Products/Create', ['stores' => $stores]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required',
            'store_id' => 'required',
        ]);

        $store = Store::findOrFail($request->store_id);

        $product = new Product($request->only('name', 'url'));
        $product->store()->associate($store)->save();

        return redirect('products')->with([
            'message' => 'Product created successfully.',
        ]);
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);

        $stores = Store::all();

        return Inertia::render('Products/Edit', ['stores' => $stores, 'product' => $product]);
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required',
            'store_id' => 'required',
        ]);

        $product = Product::findOrFail($id);
        $store = Store::findOrFail($request->store_id);

        $product->fill($request->only('name', 'url'));
        $product->store()->associate($store)->save();

        return redirect('products')->with([
            'message' => 'Product successfully updated.',
        ]);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        $product->delete();

        return redirect('products')->with([
            'message' => 'Product deleted successfully.',
        ]);
    }
}
