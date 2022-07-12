<?php

use App\Models\Product;
use App\Models\Store;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores_products_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Product::class);
            $table->decimal('price', 8, 2)->nullable();
            $table->string('pointer')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores_products_prices');
    }
};
