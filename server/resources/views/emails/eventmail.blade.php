@component('mail::message')
# Introduction

The body of your message.

# {{ $event['event_title'] }}


@component('mail::button', ['url' => 'https://rakib10ms.com/admin-login'])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
