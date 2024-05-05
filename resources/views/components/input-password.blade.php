@if (empty($value))
    @php
        $value = '';
    @endphp
@endif

<div class="form-group floating-label-form-group @error($name) error @enderror">
    <label for="{{ $name }}">{{ $label }}</label>
    <input type="password" class="form-control" name="{{ $name }}" id="{{ $name }}"
        value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}">

    @error($name)
        <span class="text-danger">{{ $message }}</span>
    @enderror
</div>
