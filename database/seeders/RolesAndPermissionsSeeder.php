<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create project']);
        Permission::create(['name' => 'edit project']);
        Permission::create(['name' => 'delete project']);
        Permission::create(['name' => 'create employee']);
        Permission::create(['name' => 'edit employee']);
        Permission::create(['name' => 'delete employee']);
        Permission::create(['name' => 'create department']);
        Permission::create(['name' => 'edit department']);
        Permission::create(['name' => 'delete department']);
        Permission::create(['name' => 'request asset']);
        Permission::create(['name' => 'create job']);
        Permission::create(['name' => 'edit job']);
        Permission::create(['name' => 'delete job']);
        // create roles and assign created permissions

        $role = Role::create(['name' => 'Admin']);
        $role->givePermissionTo(Permission::all());

        $role = Role::create(['name' => 'Project Manager']);
        $role->givePermissionTo(['create project', 'edit project', 'delete project']);
    }
}
