@extends('layouts.app')

@section('css')
<link rel="stylesheet" type="text/css" href="{{ mix('css/app/.css') }}">
@endsection

@section('js')
<script src="{{ mix('js/app.js') }}"></script>
@endsection
@section('content')
<div id="app"></div>
@endsection
