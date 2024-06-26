<!DOCTYPE html>
<html class="loading">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>PM Tool | @yield('title')</title>
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700"
        rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/vendors.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/tables/datatable/datatables.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/ui/prism.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-extended.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/colors.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/components.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vertical-menu-modern.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/palette-gradient.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">

    @yield('head')
</head>

<body class="vertical-layout vertical-menu-modern 2-columns fixed-navbar" data-menu="vertical-menu-modern">
    @include('layouts.components.navbar')

    @include('layouts.components.sidebar')

    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                    <h3 class="content-header-title mb-0 d-inline-block">@yield('title')</h3>
                    <div class="row breadcrumbs-top d-inline-block">
                        @isset($breadcrumbs)
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    @foreach ($breadcrumbs as $key => $breadcrumb)
                                        @php
                                            $active = count($breadcrumbs) == $key + 1;
                                        @endphp

                                        <li @class(['breadcrumb-item', 'active' => $active])>
                                            @if ($active)
                                                {{ $breadcrumb['label'] }}
                                            @else
                                                <a href="{{ $breadcrumb['url'] }}">{{ $breadcrumb['label'] }}</a>
                                            @endif
                                        </li>
                                    @endforeach
                                </ol>
                            </div>
                        @endisset
                    </div>
                </div>
            </div>
            <div class="content-body">
                @yield('content')
            </div>
        </div>
    </div>

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <script src="{{ asset('assets/vendors/js/vendors.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/js/tables/datatable/datatables.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/js/ui/prism.min.js') }}"></script>
    <script src="{{ asset('assets/js/app-menu.min.js') }}"></script>
    <script src="{{ asset('assets/js/app.min.js') }}"></script>

    <script>
        $(".data-table").DataTable()
    </script>
    
    @yield('script')
</body>

</html>
