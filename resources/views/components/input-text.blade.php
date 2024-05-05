@if (empty($value))
    @php
        $value = '';
    @endphp
@endif

@if (empty($placeholder))
    @php
        $placeholder = '';
    @endphp
@endif

<div class="form-group @error($name) error @enderror">
    @isset($label)
        <label for="{{ $name }}">{{ $label }}</label>
    @endisset

    <input type="text" class="form-control" name="{{ $name }}" id="{{ $name }}"
        value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}">

    @error($name)
        <span class="text-danger">{{ $message }}</span>
    @enderror
</div>
