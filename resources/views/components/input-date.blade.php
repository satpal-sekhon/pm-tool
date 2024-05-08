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

    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <span class="la la-calendar-o"></span>
            </span>
        </div>
        <input type='text' class="form-control pickadate datepicker" name="{{ $name }}" id="{{ $name }}"
        value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}" />
    </div>

    @error($name)
        <span class="text-danger">{{ $message }}</span>
    @enderror
</div>
