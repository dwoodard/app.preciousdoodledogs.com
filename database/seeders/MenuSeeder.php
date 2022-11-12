<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $header = new Menu();
        $header->title = 'Header';
        $header->location = 'header';
        $header->items = [
            [
                'title' => 'Dogs',
                'link' => '/',
                'type' => 'internal',
                'target' => null,
                'icon' => 'mdi-dog',
                'show_icon' => true,
                'order' => 0,
                'admin' => false,
                'hide_link' => false,
            ] 
        ];
        $header->save();


        $footer = new Menu();
        $footer->title = 'Footer';
        $footer->location = 'footer';
        $footer->items = [
            [
                'title' => 'Puppies',
                'link' => '/',
                'type' => 'internal',
                'target' => '_self',
                'icon' => 'mdi-dog',
                'show_icon' => true,
                'order' => 0,
                'admin' => false,
                'hide_link' => false,
            ],
            [
                'title' => 'Cart',
                'link' => '/cart',
                'type' => 'internal',
                'target' => '_self',
                'icon' => 'mdi-cart',
                'show_icon' => true,
                'order' => 0,
                'admin' => false,
                'hide_link' => false,
            ],
        ];
        $footer->save();








    }
}
