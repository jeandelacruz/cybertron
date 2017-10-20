@extends('layouts.plataforma')
@section('title', getenv('APP_NAME'))
@section('content')
<!--=== Content Part ===-->
@include('layouts.recursos.leftsidebar')
<div class="col-md-9">
    <div class="loading" style="display: none;"></div>
    <div class="bodySystem profile-body" style="display: none;"></div>
</div>
<!-- End Content Part -->
@endsection