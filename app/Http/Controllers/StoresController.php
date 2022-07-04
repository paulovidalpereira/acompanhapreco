<?php
namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoresController extends Controller
{
    public $columns = [];

    public function __construct()
    {
        $this->columns = [
            ["id" => "id", "label" => "#"],
            ["id" => "name", "label" => "Name"],
            ["id" => "url", "label" => "URL"],
            ["id" => "class", "label" => "Class"],
            ["id" => "created_at", "label" => "Created At"],
        ];
    }

    public function index()
    {
        request()->validate([
            'sort' => ['in:'.collect($this->columns)->implode('id', ',')],
            'dir' => ['in:asc,desc'],
        ]);

        return Inertia::render('Stores/Index', [
            'columns' => $this->columns,
            'stores' => function () {
                $stores = Store::query()
                    ->when(request()->has(['sort', 'dir']), function ($query) {
                        $query->orderBy(request()->get('sort'), request()->get('dir'));
                    }, function ($query) {
                        $query->orderBy('created_at', 'desc');
                    })
                    ->paginate()
                    ->withQueryString();

                return $stores;
            }
            
        ]);
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

        Store::create($request->validated());

        return redirect('stores');
    }

    public function edit(Store $store)
    {
        return Inertia::render('Stores/Update', compact('store'));
    }

    public function update(Store $store, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required',
            'class' => 'required',
        ]);
        
        $store->fill($request->only('name', 'url', 'class'))->save();

        return redirect('stores');
    }
}
