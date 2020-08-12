import * as React from 'react';
import OscBackTop from '@osui/back-top';

export default {
    title: 'OSUI-BackTop',
};

export const Demo = () => {
    return (
        <div style={{padding: 30, height: 1800}}>
            {/* default */}
            <OscBackTop style={{right: 200}} />
            {/* circle */}
            <OscBackTop type="circle" />
            <p>BackTop 回到顶部</p>
            <p>往下滚才能看到我哟</p>
        </div>
    );
};
