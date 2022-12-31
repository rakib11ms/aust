<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Advertisementmail extends Mailable
{
        public $advertisement;

    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($advertisement)
    {
     $this->advertisement=$advertisement;

    }

    public function build()
    {
                $advertisement=$this->advertisement;

        return $this->markdown('emails.Advertisementmail',compact('advertisement'));
    }
}
