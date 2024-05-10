@extends('layout.main')

@section('title', 'Daftar Fakultas')

@section('content')
<h2>Daftar Fakultas</h2>
<p>Ini Halaman daftar fakultas</p>

@foreach ($fakultas as $item)
{{ $item['nama'] }} {{ $item['singkatan'] }} <br>
@endforeach
@endsection