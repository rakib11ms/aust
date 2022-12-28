@component('mail::message')
<!-- # Introduction
 -->
# {{ $global_notification['notification_title'] }}



<!-- @component('mail::button', ['url' => 'https://rakib10ms.com/admin-login'])
Button Text
@endcomponent -->

Thanks,<br>
{{ config('app.name') }}
@endcomponent
