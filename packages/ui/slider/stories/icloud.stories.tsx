import React from 'react';
import Slider from '../src';

export default {
    title: 'Slider',
    component: Slider,
};

export const Demo = () => {
    return (
        <Slider />
    );
};

export const AdvanceDemo = () => {
    return (
        <>
            <p>不支持部分disable</p>
            <Slider type="icloud" dots step={25} max={200} min={0} />
            <Slider disabled type="icloud" dots step={25} max={200} min={0} defaultValue={50} />
        </>
    );
};
