<?php
namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoresController extends Controller
{
    public function index()
    {
        $stores = Store::paginate();
        return Inertia::render('Stores/Index', ['stores' => $stores]);
    }

    public function create()
    {
        return Inertia::render('Stores/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required',
            'class' => 'required',
        ]);

        $store = new Store;
        $store->fill($request->only('name', 'url', 'class'))->save();

        return redirect('stores');
    }
}
