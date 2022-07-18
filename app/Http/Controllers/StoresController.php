<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCreateRequest;
use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class StoresController extends Controller
{
    public function index()
    {
        request()->validate([
            'sort' => [Rule::in(["id", "name", "domain", "class", "status", "created_at"])],
            'dir' => [Rule::in(["asc", "desc"])],
        ]);

        return Inertia::render('Stores/Index', [
            'stores' => function () {
                return Store::query()
                    ->when(request()->has(['sort', 'dir']), function ($query) {
                        $query->orderBy(request()->get('sort'), request()->get('dir'));
                    }, function ($query) {
                        $query->orderBy('created_at', 'desc');
                    })
                    ->fastPaginate(5)
                    ->withQueryString();
            }
        ]);
    }

    public function create()
    {
        return Inertia::render('Stores/Create');
    }

    public function store(StoreCreateRequest $request)
    {
        Store::create($request->only('name', 'domain', 'class', 'status'));

        return redirect('stores');
    }

    public function edit(Store $store)
    {
        return Inertia::render('Stores/Edit', compact('store'));
    }

    public function update(Store $store, StoreCreateRequest $request)
    {
        $store->fill($request->only('name', 'domain', 'class', 'status'))->save();

        return redirect('stores');
    }

    public function destroy(Store $store)
    {
        $store->delete();

        return redirect('stores');
    }
}
