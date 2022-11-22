@component('mail::message')
# Introduction


For reseting password click to verify and set password
@component('mail::button', ['url' => 'http://rakib10ms.com/admin-password-reset/'.$token])
Click to verify
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
