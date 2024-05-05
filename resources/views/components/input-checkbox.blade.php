@if (empty($checked))
    @php
        $checked = false;
    @endphp
@endif

<div>
    <input type="checkbox" name="{{ $name }}" id="{{ $name }}" class="chk-remember" @checked($checked)>
    @isset($label)
        <label for="{{ $name }}"> {{ $label }}</label>
    @endisset
</div>
