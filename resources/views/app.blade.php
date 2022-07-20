<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" href="{{ mix('css/main.css') }}">
        @routes
        <script src="{{ mix('js/main.js') }}" defer></script>
        @inertiaHead
    </head>
    <body class="font-sans antialiased text-gray-600">
        @inertia
    </body>
</html>
