<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class GlobalMail extends Mailable
{
    use Queueable, SerializesModels;
    public $global_notification;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($global_notification)
    {
        $this->global_notification=$global_notification;

    }

      public function build()
    {
                $global_notification=$this->global_notification;

        return $this->markdown('emails.GlobalMail',compact('global_notification'));
    }
}
