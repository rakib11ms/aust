@component('mail::message')
<!-- # Introduction
 -->
# Advertisement title: {{ $advertisement['advertisement_title'] }}
# Show time :{{ $advertisement['show_time'] }}
# Show days :{{ $advertisement['show_days'] }}



<!-- @component('mail::button', ['url' => 'https://rakib10ms.com/admin-login'])
Button Text
@endcomponent -->

Thanks,<br>
{{ config('app.name') }}
@endcomponent
