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
                <span>Employees</span>
            </li>

            <li class="nav-item">
                <a href="#">
                    <i class="la la-users"></i>
                    <span class="menu-title">Employees</span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>All Employees</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Leaves</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Attendance</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-folder-open"></i>
                    <span class="menu-title">Departments</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-rocket"></i>
                    <span class="menu-title">Projects</span>
                </a>
            </li>

            
            <li class="navigation-header">
                <span>HR</span>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-copy"></i>
                    <span class="menu-title">Sales</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-money"></i>
                    <span class="menu-title">Payroll</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-file-pdf-o"></i>
                    <span class="menu-title">Policies</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="#">
                    <i class="la la-pie-chart"></i>
                    <span class="menu-title">Reports</span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Expense Report</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Project Repoort</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Employee Report</span>
                        </a>
                    </li>
                </ul>
            </li>

            
            
            <li class="navigation-header">
                <span>Performance</span>
            </li>

            <li class="nav-item">
                <a href="#">
                    <i class="la la-graduation-cap"></i>
                    <span class="menu-title">Traning</span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Traning List</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Trainers</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Training Type</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="">
                    <i class="la la-external-link"></i>
                    <span class="menu-title">Regisnation</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="">
                    <i class="ft-x-circle"></i>
                    <span class="menu-title">Termination</span>
                </a>
            </li>
            
            <li class="navigation-header">
                <span>Administrator</span>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-desktop"></i>
                    <span class="menu-title">Assets</span>
                </a>
            </li>
            
            <li class="nav-item">
                <a href="#">
                    <i class="la la-home"></i>
                    <span class="menu-title">Jobs</span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Manage Jobs</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Shortlist Candidates</span>
                        </a>
                    </li>
                    <li>
                        <a class="menu-item" href="#"><i></i>
                            <span>Interview Questions</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="">
                    <i class="la la-cog "></i>
                    <span class="menu-title">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</div>
