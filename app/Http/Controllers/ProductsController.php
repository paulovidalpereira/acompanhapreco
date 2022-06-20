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
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required',
            'store_id' => 'required',
        ]);

        $store = Store::findOrFail($request->store_id);

        $product = new Product($request->all());
        $product->store()->associate($store)->save();

        return redirect('products');
    }
}
