import React from 'react';
import Timeline from '@osui/timeline';

export default {
    title: '待验收/Timeline 时间轴',
};

export const Demo = () => {
    return (<div style={{padding: '50px'}}>
        <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        </Timeline>
    </div>);
};
