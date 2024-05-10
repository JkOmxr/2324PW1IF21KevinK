@extends('layout.main')

@section('title', 'Daftar Prodi')

@section('content')
<h2>Daftar Prodi</h2>
<p>Ini Halaman daftar prodi</p>

@foreach ($prodi as $item)
{{ $item['nama'] }} {{ $item['fakultas'] ['nama'] }} <br>
@endforeach
@endsection