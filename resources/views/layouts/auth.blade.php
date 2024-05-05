<!DOCTYPE html>
<html class="loading">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>PM Tool</title>
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700"
        rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/vendors.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/forms/icheck/icheck.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/forms/icheck/custom.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-extended.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/colors.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/components.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vertical-menu-modern.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/palette-gradient.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/form-validation.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">
</head>

<body class="vertical-layout vertical-menu-modern 1-column bg-cyan bg-lighten-2 blank-page" data-col="1-column">
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                            <div class="card border-grey border-lighten-3 m-0">
                                <div class="card-header border-0">
                                    <div class="card-title text-center">
                                        <div class="p-1">
                                            <img src="{{ asset('assets/images/logo-dark.png') }}" alt="branding logo">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div class="card-body pt-0">
                                        @yield('content')
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>

    <script src="{{ asset('assets/vendors/js/vendors.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/js/forms/icheck/icheck.min.js') }}"></script>
    <script src="{{ asset('assets/js/app-menu.min.js') }}"></script>
    <script src="{{ asset('assets/js/app.min.js') }}"></script>

    <script>
        $(function() {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
            });

        })
    </script>
</body>

</html>
