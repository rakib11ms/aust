<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Models\AusstaEvent;

use Mail;
use App\Mail\EventMail;

class SendQueueEventEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $event;
    protected $user_ids;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(AusstaEvent $event, array $user_ids)
    {
        $this->event = $event;
        $this->user_ids = $user_ids;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $persons = $this->event->contact_person;
        //  $user_ids = explode(",", $persons);

        $users = User::whereIn("id", $this->user_ids)->get();

        foreach ($users as $key => $user) {
            Mail::to($user->email)->send(new EventMail($this->event));
        }

    }

}