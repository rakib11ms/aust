<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Notifications\Channels\DatabaseChannel as IlluminateDatabaseChannel;
use Illuminate\Notifications\DatabaseNotification as EventNotification;
use App\Channels\DatabaseChannel;
// use App\Notifications\EventNotification;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
          $this->app->instance(IlluminateDatabaseChannel::class, new DatabaseChannel());
        $this->app->instance(EventNotification::class, new EventNotification());
    }
}
