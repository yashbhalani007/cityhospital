import React from 'react';
import { BaseInput, InputError } from './input.style';

function Input({ errorText, ...rest }) {
    return (
        <div>
            <BaseInput {...rest} />
            <InputError>
                {errorText}
            </InputError>

        </div>
    );
}

export default Input;