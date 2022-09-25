<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'check' => "check"
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products', [ProductsController::class, 'index'])->middleware(['auth', 'verified'])->name('products');
Route::post('/products/create', [ProductsController::class, 'create'])->middleware(['auth', 'verified'])->name('products.create');

Route::get('/view/v1/{product}');
require __DIR__ . '/auth.php';
