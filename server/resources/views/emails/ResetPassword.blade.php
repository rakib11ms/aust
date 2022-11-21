@component('mail::message')
# Introduction


For reseting password click to verify and set password
@component('mail::button', ['url' => 'http://localhost:3006/admin-password-reset/'.$token])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
