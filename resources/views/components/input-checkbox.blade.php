@if (empty($checked))
    @php
        $checked = false;
    @endphp
@endif

<div>
    <input type="checkbox" name="{{ $name }}" id="{{ $name }}" class="chk-remember" @checked(old($name, $checked))>
    @isset($label)
        <label for="{{ $name }}"> {{ $label }}</label>
    @endisset
</div>
