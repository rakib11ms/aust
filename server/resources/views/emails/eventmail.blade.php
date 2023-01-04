@component('mail::message')
<!-- # Introduction
 -->
# {{ $event['event_title'] }}



@component('mail::button', ['url' => 'https://rakib10ms.com/admin-login'])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent



Hi { { name } }, 

We are emailing you because { { reason } }...This will be the content of the message, you can insert HTML or anything you want.

Thank you. - {{config('app.name') }}
