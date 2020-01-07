<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBorrowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('borrows', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('book_id');
            $table->unsignedInteger('user_id');
            $table->foreign('book_id')->references('id')->on('books');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('date_due_for_return', 100);
            $table->string('date_return', 100)->nullabe();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('borrows');
    }
}
