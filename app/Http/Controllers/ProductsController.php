<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use App\Models\Store;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class ProductsController extends Controller
{
    public function index()
    {
        request()->validate([
            'sort' => [Rule::in(["id", "name", "url", "status", "store", "created_at"])],
            'dir' => [Rule::in(["asc", "desc"])],
        ]);

        return Inertia::render('Products/Index', [
            'products' => function () {
                return Product::query()
                    ->with('store')
                    ->when(request()->has(['sort', 'dir']), function ($query) {
                        $query->orderBy(request('sort'), request('dir'));
                    }, function ($query) {
                        $query->orderBy('created_at', 'desc');
                    })
                    ->fastPaginate(5)
                    ->withQueryString()
                    ->through(function ($product) {
                        return [
                            'id' => $product->id,
                            'name' => $product->name,
                            'url' => $product->url,
                            'status' => $product->status,
                            'store' => $product->store->name,
                            'created_at' => $product->created_at,
                        ];
                    });
            }
        ]);
    }

    public function create()
    {
        $stores = Store::where('status', 1)->get()->transform(function ($store) {
            return [
                'id' => $store->id,
                'name' => $store->name,
            ];
        });

        return Inertia::render('Products/Create', ['stores' => $stores]);
    }

    public function store(ProductStoreRequest $request)
    {
        $store = Store::findOrFail($request->store_id);

        $product = new Product($request->only('name', 'url', 'status', 'store_id'));
        $product->store()->associate($store)->save();

        return redirect('products');
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $stores = Store::where('status', 1)->get()->transform(function ($store) {
            return [
                'id' => $store->id,
                'name' => $store->name,
            ];
        });

        return Inertia::render('Products/Edit', ['product' => $product, 'stores' => $stores]);
    }

    public function update($id, ProductStoreRequest $request)
    {
        $product = Product::findOrFail($id);
        $store = Store::findOrFail($request->store_id);

        $product->fill($request->only('name', 'url', 'status', 'store_id'));
        $product->store()->associate($store)->save();

        return redirect('products');
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        $product->delete();

        return redirect('products');
    }
}

