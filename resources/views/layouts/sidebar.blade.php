<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li @class(['nav-item', 'active mt-1' => Request::is('dashboard')])>
                <a href="{{ route('dashboard.index') }}">
                    <i class="la la-home"></i>
                    <span class="menu-title">Dashboard</span>
                </a>
            </li>
            
            <li class="navigation-header">
                <span>Administrator</span>
            </li>
            
            <li class="nav-item">
                <a href="#">
                    <i class="la la-home"></i>
                    <span class="menu-title">Roles & Permissions</span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Manage Roles</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Manage Permissions</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
