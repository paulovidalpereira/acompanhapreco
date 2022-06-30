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
        $columns = $this->columns;

        request()->validate([
            'sort' => ['in:'.collect($columns)->implode('id', ',')],
            'dir' => ['in:asc,desc'],
        ]);

        $sortDir[request()->get('sort')] = request()->get('dir');

        $stores = Store::query()
            ->when(request()->has(['sort', 'dir']), function ($query) {
                $query->orderBy(request()->get('sort'), request()->get('dir'));
            }, function ($query) {
                $query->orderBy('created_at', 'desc');
            })
            ->paginate()
            ->withQueryString();

        return Inertia::render('Stores/Index', compact('stores', 'columns', 'sortDir'));
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
