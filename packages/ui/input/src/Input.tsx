import React, {useCallback, useState} from 'react';
import {Input as AntdInput} from 'antd';
import {InputProps as AntdInputProps} from 'antd/lib/input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';

export type InputProps = AntdInputProps;

const OSUIInput = React.forwardRef<HTMLInputElement, InputProps>((
    {className, onFocus, onBlur, disabled, ...props},
    ref
) => {
    const [focused, setFocused] = useState(false);
    const innerClassNames = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-focused`]: focused,
            [`${clsPrefix}-disabled`]: disabled,
        },
        className
    );
    const handleFocus = useCallback(
        e => {
            onFocus && onFocus(e);
            setFocused(true);
        },
        [onFocus]
    );
    const handleBlur = useCallback(
        e => {
            onBlur && onBlur(e);
            setFocused(false);
        },
        [onBlur]
    );
    // eslint-disable-next-line max-len
    const TypeFixedAntdInput = AntdInput as unknown as React.ForwardRefExoticComponent<AntdInputProps & React.RefAttributes<HTMLInputElement>>;
    return (
        <TypeFixedAntdInput
            ref={ref}
            className={innerClassNames}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            {...props}
        />
    );
});

export default OSUIInput;
