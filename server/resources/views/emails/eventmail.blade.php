@component('mail::message')


<div style="max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        font-family: Arial, sans-serif;" >
    <h1 style="font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;">{{ $event['event_title'] }}</h1>

    <div style="font-size: 14px;
        margin-bottom: 20px;
        text-align: justify;
        color: #000000;">
        {!! $event['event_description'] !!}
    </div>

    <p style="margin-top: 20px;
        color: #888888;
        font-size: 12px;">Event Time: {{ $event['event_time'] }}</p>

    <p style="margin-top: 20px;
        color: #888888;
        font-size: 12px;">Thanks,<br>{{ config('app.name') }}</p>
</div>
@endcomponent
