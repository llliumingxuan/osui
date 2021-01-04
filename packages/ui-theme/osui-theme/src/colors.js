// 用于标签、图表等场景的色盘，100个颜色
exports.tagColors = {
    // 天青
    '--color-cyan-1': '#f5f8ff',
    '--color-cyan-2': '#e0e9ff',
    '--color-cyan-3': '#c2d6ff',
    '--color-cyan-4': '#4c88ff',
    '--color-cyan-5': '#1a5eff',
    '--color-cyan-6': '#0045e4',
    '--color-cyan-7': '#083fbf',
    '--color-cyan-8': '#07349d',
    '--color-cyan-9': '#05287a',
    '--color-cyan-10': '#041f5d',
    // 翡色
    '--color-emerald-1': '#ebfffa',
    '--color-emerald-2': '#d4faf0',
    '--color-emerald-3': '#aaf0dc',
    '--color-emerald-4': '#70e0bf',
    '--color-emerald-5': '#45cca1',
    '--color-emerald-6': '#0eb880',
    '--color-emerald-7': '#049160',
    '--color-emerald-8': '#006b44',
    '--color-emerald-9': '#03452c',
    '--color-emerald-10': '#001f12',
    // 苔绿
    '--color-moss-1': '#f9fff2',
    '--color-moss-2': '#e9ffd1',
    '--color-moss-3': '#caf29b',
    '--color-moss-4': '#aee66a',
    '--color-moss-5': '#95d93d',
    '--color-moss-6': '#78bf13',
    '--color-moss-7': '#5f9908',
    '--color-moss-8': '#477300',
    '--color-moss-9': '#304d00',
    '--color-moss-10': '#192600',
    // 赤橙
    '--color-orange-1': '#fff4e6',
    '--color-orange-2': '#ffe3bf',
    '--color-orange-3': '#ffd199',
    '--color-orange-4': '#ffb259',
    '--color-orange-5': '#ff9c33',
    '--color-orange-6': '#eb7600',
    '--color-orange-7': '#c45f00',
    '--color-orange-8': '#9e4a00',
    '--color-orange-9': '#783600',
    '--color-orange-10': '#522300',
    // 枫叶
    '--color-maple-1': '#fff3f2',
    '--color-maple-2': '#ffdfde',
    '--color-maple-3': '#ffbebd',
    '--color-maple-4': '#ff9999',
    '--color-maple-5': '#f26f72',
    '--color-maple-6': '#e65055',
    '--color-maple-7': '#bf3940',
    '--color-maple-8': '#99262e',
    '--color-maple-9': '#73171f',
    '--color-maple-10': '#4d0b12',
    // 绛紫
    '--color-purple-1': '#eae6ff',
    '--color-purple-2': '#c0b6f2',
    '--color-purple-3': '#998dd9',
    '--color-purple-4': '#8777d9',
    '--color-purple-5': '#6554c0',
    '--color-purple-6': '#5243aa',
    '--color-purple-7': '#403294',
    '--color-purple-8': '#35297a',
    '--color-purple-9': '#29205f',
    '--color-purple-10': '#1e1745',
    // 靛蓝（同品牌色）
    '--color-indigo-1': '#f2f8ff',
    '--color-indigo-2': '#d3e9ff',
    '--color-indigo-3': '#a3d3ff',
    '--color-indigo-4': '#73beff',
    '--color-indigo-5': '#41a7fa',
    '--color-indigo-6': '#108cee',
    '--color-indigo-7': '#0476c7',
    '--color-indigo-8': '#0061a1',
    '--color-indigo-9': '#004b7a',
    '--color-indigo-10': '#013454',
    // 松绿
    '--color-pine-1': '#e6f9ff',
    '--color-pine-2': '#ccf3ff',
    '--color-pine-3': '#99e9ff',
    '--color-pine-4': '#61d5f2',
    '--color-pine-5': '#2ec4e6',
    '--color-pine-6': '#00b5d9',
    '--color-pine-7': '#0098b3',
    '--color-pine-8': '#007a8c',
    '--color-pine-9': '#005a66',
    '--color-pine-10': '#003840',
    // 郁金
    '--color-gold-1': '#fffef2',
    '--color-gold-2': '#fffacc',
    '--color-gold-3': '#fff399',
    '--color-gold-4': '#ffeb66',
    '--color-gold-5': '#ffe033',
    '--color-gold-6': '#f2ca00',
    '--color-gold-7': '#cca700',
    '--color-gold-8': '#a68500',
    '--color-gold-9': '#806400',
    '--color-gold-10': '#594400',
    // 洋红
    '--color-magenta-1': '#fff2fa',
    '--color-magenta-2': '#ffdbf1',
    '--color-magenta-3': '#ffb5e3',
    '--color-magenta-4': '#fa8ed2',
    '--color-magenta-5': '#ed68bf',
    '--color-magenta-6': '#e048ae',
    '--color-magenta-7': '#ba328f',
    '--color-magenta-8': '#942171',
    '--color-magenta-9': '#6e1354',
    '--color-magenta-10': '#470937',
};

// 10个循环色，在需要标签、图表连续用不同颜色的时候，从这边循环取用
exports.rotatingColors = {
    '--color-rotating-1': 'var(--color-cyan-6)',
    '--color-rotating-2': 'var(--color-emerald-6)',
    '--color-rotating-3': 'var(--color-moss-6)',
    '--color-rotating-4': 'var(--color-orange-6)',
    '--color-rotating-5': 'var(--color-maple-6)',
    '--color-rotating-6': 'var(--color-purple-6)',
    '--color-rotating-7': 'var(--color-indigo-6)',
    '--color-rotating-8': 'var(--color-pine-6)',
    '--color-rotating-9': 'var(--color-gold-6)',
    '--color-rotating-10': 'var(--color-magenta-6)',
};

// ui标准色盘，50个颜色
exports.uiColors = {
    // 品牌色
    '--color-brand-1': '#F5F8FF',
    '--color-brand-2': '#E0E9FF',
    '--color-brand-3': '#C2D6FF',
    '--color-brand-4': '#4C88FF',
    '--color-brand-5': '#1A5EFF',
    '--color-brand-6': '#0045E4',
    '--color-brand-7': '#083FBF',
    '--color-brand-8': '#07349D',
    '--color-brand-9': '#05287A',
    '--color-brand-10': '#041F5D',
    // 中性色
    '--color-gray-1': '#FFFFFF',
    '--color-gray-2': '#FAFBFB',
    '--color-gray-3': '#F5F6F8',
    '--color-gray-4': '#ECEDF0',
    '--color-gray-5': '#DADEE3',
    '--color-gray-6': '#C1C7D0',
    '--color-gray-7': '#909AAA',
    '--color-gray-8': '#5F6D84',
    '--color-gray-9': '#2E405E',
    '--color-gray-10': '#000000',
    // 警告色
    '--color-warning-1': '#FFFAE6',
    '--color-warning-2': '#FFF0B3',
    '--color-warning-3': '#FFE380',
    '--color-warning-4': '#FFC400',
    '--color-warning-5': '#FFAB00',
    '--color-warning-6': '#FF991F',
    '--color-warning-7': '#FF8B00',
    '--color-warning-8': '#C26A00',
    '--color-warning-9': '#854800',
    '--color-warning-10': '#472700',
    // 成功色
    '--color-success-1': '#E2FFEE',
    '--color-success-2': '#ABF5D1',
    '--color-success-3': '#79F2C0',
    '--color-success-4': '#57D9A3',
    '--color-success-5': '#36B37E',
    '--color-success-6': '#00875A',
    '--color-success-7': '#006644',
    '--color-success-8': '#004D33',
    '--color-success-9': '#003825',
    '--color-success-10': '#00291B',
    // 错误色
    '--color-error-1': '#FFEBE5',
    '--color-error-2': '#FFBDAD',
    '--color-error-3': '#FF8F73',
    '--color-error-4': '#FF7452',
    '--color-error-5': '#FF5630',
    '--color-error-6': '#DE350B',
    '--color-error-7': '#BF2600',
    '--color-error-8': '#9E2000',
    '--color-error-9': '#7A1800',
    '--color-error-10': '#571100',
    // 提示色
    '--color-info-1': 'var(--color-brand-1)',
    '--color-info-2': 'var(--color-brand-2)',
    '--color-info-3': 'var(--color-brand-3)',
    '--color-info-4': 'var(--color-brand-4)',
    '--color-info-5': 'var(--color-brand-5)',
    '--color-info-6': 'var(--color-brand-6)',
    '--color-info-7': 'var(--color-brand-7)',
    '--color-info-8': 'var(--color-brand-8)',
    '--color-info-9': 'var(--color-brand-9)',
    '--color-info-10': 'var(--color-brand-10)',
};

const buttonColors = {
    // antd
    '--btn-disable-bg': 'var(--color-gray-1)',
    '--btn-disable-border': 'var(--color-gray-4)',
    '--btn-disable-color': 'var(--theme-disabled-color)',
    // type default
    '--btn-default-bg': 'var(--theme-component-bg)',
    '--btn-default-border-color': 'var(--theme-border-color-base)',
    '--btn-default-color': 'var(--theme-text-color)',
    '--btn-default-active-bg': 'var(--color-gray-4)',
    '--btn-default-active-border-color': 'var(--color-brand-4)',
    '--btn-default-active-color': 'var(--theme-text-color)',
    '--btn-default-disable-bg': 'var(--theme-component-bg)',
    '--btn-default-disable-border-color': 'var(--btn-disable-border)',
    '--btn-default-disable-color': 'var(--btn-disable-color)',
    '--btn-default-focus-bg': 'var(--theme-component-bg)',
    '--btn-default-focus-border-color': 'var(--color-brand-4)',
    '--btn-default-focus-color': 'var(--theme-text-color)',
    '--btn-default-hover-bg': 'var(--color-gray-3)',
    '--btn-default-hover-border-color': 'var(--color-gray-5)',
    '--btn-default-hover-color': 'var(--theme-text-color)',
    '--btn-default-loading-bg': 'var(--btn-disable-bg)',
    '--btn-default-loading-border-color': 'var(--btn-disable-border)',
    '--btn-default-loading-color': 'var(--btn-disable-color)',
    // type primary
    '--btn-primary-bg': 'var(--theme-primary-color)',
    '--btn-primary-border-color': 'var(--theme-primary-color)',
    '--btn-primary-color': 'var(--color-gray-1)',
    '--btn-primary-active-bg': 'var(--color-brand-7)',
    '--btn-primary-active-border-color': 'var(--color-brand-7)',
    '--btn-primary-active-color': 'var(--color-gray-1)',
    '--btn-primary-disable-bg': 'var(--btn-disable-bg)',
    '--btn-primary-disable-border-color': 'var(--btn-disable-border)',
    '--btn-primary-disable-color': 'var(--btn-disable-color)',
    '--btn-primary-focus-bg': 'var(--theme-primary-color)',
    '--btn-primary-focus-border-color': 'var(--theme-primary-color)',
    '--btn-primary-focus-color': 'var(--color-gray-1)',
    '--btn-primary-hover-bg': 'var(--theme-primary-color-hover)',
    '--btn-primary-hover-border-color': 'var(--theme-primary-color-hover)',
    '--btn-primary-hover-color': 'var(--color-gray-1)',
    '--btn-primary-loading-bg': 'var(--theme-primary-color)',
    '--btn-primary-loading-border-color': 'var(--theme-primary-color)',
    '--btn-primary-loading-color': 'var(--color-gray-1)',
    // type link
    '--btn-link-bg': 'transparent',
    '--btn-link-border-color': 'transparent',
    '--btn-link-color': 'var(--link-color)',
    '--btn-link-active-bg': 'transparent',
    '--btn-link-active-border-color': 'transparent',
    '--btn-link-active-color': 'var(--theme-primary-color)',
    '--btn-link-disable-bg': 'transparent',
    '--btn-link-disable-border-color': 'transparent',
    '--btn-link-disable-color': 'var(--btn-disable-color)',
    '--btn-link-focus-bg': 'transparent',
    '--btn-link-focus-border-color': 'var(--theme-border-focus-color)',
    '--btn-link-focus-color': 'var(--theme-primary-color)',
    '--btn-link-hover-bg': 'transparent',
    '--btn-link-hover-border-color': 'transparent',
    '--btn-link-hover-color': 'var(--color-brand-4)',
    '--btn-link-loading-bg': 'transparent',
    '--btn-link-loading-border-color': 'transparent',
    '--btn-link-loading-color': 'var(--btn-disable-color)',
    // type only-icon
    '--btn-only-icon-bg': 'transparent',
    '--btn-only-icon-border-color': 'transparent',
    '--btn-only-icon-color': 'var(--theme-text-color)',
    '--btn-only-icon-active-bg': 'transparent',
    '--btn-only-icon-active-border-color': 'transparent',
    '--btn-only-icon-active-color': 'var(--theme-primary-color)',
    '--btn-only-icon-disable-bg': 'transparent',
    '--btn-only-icon-disable-border-color': 'transparent',
    '--btn-only-icon-disable-color': 'var(--btn-disable-color)',
    '--btn-only-icon-focus-bg': 'transparent',
    '--btn-only-icon-focus-border-color': 'var(--color-brand-4)',
    '--btn-only-icon-focus-color': 'var(--theme-primary-color)',
    '--btn-only-icon-hover-bg': 'transparent',
    '--btn-only-icon-hover-border-color': 'transparent',
    '--btn-only-icon-hover-color': 'var(--theme-primary-color-hover)',
    '--btn-only-icon-loading-bg': 'transparent',
    '--btn-only-icon-loading-border-color': 'transparent',
    '--btn-only-icon-loading-color': 'var(--btn-disable-color)',
    // type strong
    '--btn-strong-bg': 'var(--theme-component-bg)',
    '--btn-strong-border-color': 'var(--theme-primary-color)',
    '--btn-strong-color': 'var(--theme-primary-color)',
    '--btn-strong-active-bg': 'var(--color-brand-3)',
    '--btn-strong-active-border-color': 'var(--theme-primary-color)',
    '--btn-strong-active-color': 'var(--theme-primary-color)',
    '--btn-strong-disable-bg': 'var(--btn-disable-bg)',
    '--btn-strong-disable-border-color': 'var(--btn-disable-border)',
    '--btn-strong-disable-color': 'var(--btn-disable-color)',
    '--btn-strong-focus-bg': 'var(--theme-component-bg)',
    '--btn-strong-focus-border-color': 'var(--theme-primary-color)',
    '--btn-strong-focus-color': 'var(--theme-primary-color)',
    '--btn-strong-hover-bg': 'var(--color-brand-2)',
    '--btn-strong-hover-border-color': 'var(--theme-primary-color)',
    '--btn-strong-hover-color': 'var(--theme-primary-color)',
    '--btn-strong-loading-bg': 'var(--color-brand-2)',
    '--btn-strong-loading-border-color': 'var(--theme-primary-color)',
    '--btn-strong-loading-color': 'var(--btn-disable-color)',
};


exports.presetColors = {
    '--theme-bg-color-base': 'var(--color-gray-4)',
    '--theme-bg-color-light': 'var(--color-brand-1)',
    '--theme-body-bg': 'var(--color-gray-1)',
    '--theme-border-color-base': 'var(--color-gray-5)',
    '--theme-border-color-inverse': '#fff',
    '--theme-border-color-split': 'var(--color-gray-4)',
    '--theme-component-bg': 'var(--color-gray-1)',
    '--theme-component-focus-box-shadow': '0 0 0 1px var(--theme-border-focus-color)',
    '--theme-disabled-bg': 'var(--color-gray-4)',
    '--theme-disabled-color': 'var(--color-gray-6)',
    '--theme-error-color-active': 'var(--color-error-5)',
    '--theme-error-color-hover': 'var(--color-error-5)',
    '--theme-error-color': 'var(--color-error-5)',
    '--theme-heading-color': 'var(--theme-text-color)',
    '--theme-info-color-active': 'var(--color-info-5)',
    '--theme-info-color-hover': 'var(--color-info-5)',
    '--theme-info-color': 'var(--color-info-5)',
    '--theme-primary-color-active': 'var(--color-brand-6)',
    '--theme-primary-color-hover': 'var(--color-brand-6)',
    '--theme-primary-color': 'var(--color-brand-6)',
    '--theme-secondary-color-active': 'var(--color-brand-3)',
    '--theme-secondary-color-hover': 'var(--color-brand-1)',
    '--theme-secondary-color': 'var(--color-brand-2)',
    '--theme-success-color-active': 'var(--color-success-5)',
    '--theme-success-color-hover': 'var(--color-success-5)',
    '--theme-success-color': 'var(--color-success-5)',
    '--theme-text-color-secondary': 'var(--color-gray-8)',
    '--theme-text-color': 'var(--color-gray-9)',
    '--theme-placeholder-color': 'var(--color-gray-7)',
    '--theme-warning-color-active': 'var(--color-warning-5)',
    '--theme-warning-color-hover': 'var(--color-warning-5)',
    '--theme-warning-color': 'var(--color-warning-5)',
    '--theme-color-border-base': 'var(--color-gray-5)',
    '--theme-color-text': 'var(--color-gray-8)',
    '--theme-highlight-color': 'var(--color-error-5)',
    '--theme-outline-color': 'var(--color-brand-4)',
    '--theme-processing-color': 'var(--color-brand-6)',
    '--theme-border-focus-color': 'var(--color-brand-4)',
    // 组件属性
    '--alert-error-bg-color': 'var(--color-error-1)',
    '--alert-error-border-color': 'var(--theme-error-color)',
    '--alert-error-icon-color': 'var(--theme-error-color)',
    '--alert-info-bg-color': 'var(--color-brand-2)',
    '--alert-info-border-color': 'var(--color-brand-5)',
    '--alert-info-icon-color': 'var(--color-brand-5)',
    '--alert-success-bg-color': 'var(--color-success-1)',
    '--alert-success-border-color': 'var(--theme-success-color)',
    '--alert-success-icon-color': 'var(--theme-success-color)',
    '--alert-warning-bg-color': 'var(--color-warning-1)',
    '--alert-warning-border-color': 'var(--theme-warning-color)',
    '--alert-warning-icon-color': 'var(--theme-warning-color)',
    '--alert-with-description-icon-top': '24px',
    '--alert-with-description-padding': '8px 15px 8px 39px',
    '--alert-padding': '8px 20px 8px 37px', // antd 默认值
    '--alert-no-icon-padding': '8px 15px',
    '--alert-icon-padding-right': '8px',
    '--message-alert-success-bg-color': 'var(--theme-component-bg)',
    '--message-alert-warning-bg-color': 'var(--theme-component-bg)',
    '--message-alert-error-bg-color': 'var(--theme-component-bg)',
    '--message-alert-info-bg-color': 'var(--theme-component-bg)',
    '--message-alert-success-border-color': 'var(--theme-component-bg)',
    '--message-alert-warning-border-color': 'var(--theme-component-bg)',
    '--message-alert-error-border-color': 'var(--theme-component-bg)',
    '--message-alert-info-border-color': 'var(--theme-component-bg)',
    '--btn-border-radius-base': '4px',
    '--btn-loading-text-display': 'none',
    '--btn-link-margin': '0',
    '--btn-link-padding': '0 4px',
    '--btn-link-text-decoration': 'underline',
    '--collapse-content-bg': 'var(--theme-component-bg)',
    '--collapse-expand-icon-bg': 'var(--color-gray-3)',
    '--collapse-header-bg': 'var(--color-gray-2)',
    '--collapse-header-font-weight': '600',
    '--collapse-content-box-padding-top': '8px',
    '--collapse-content-box-padding-bottom': '8px',
    '--collapse-header-height': '32px',
    '--input-error-focus-background-color': 'var(--theme-component-bg)',
    '--input-focus-background-color': 'var(--theme-component-bg)',
    '--input-warning-focus-background-color': 'var(--theme-component-bg)',
    '--item-hover-bg': 'var(--color-gray-3)',
    '--link-active-color': 'var(--color-brand-7)',
    '--link-color': 'var(--color-brand-7)',
    '--link-hover-color': 'var(--color-brand-7)',
    '--menu-bg': 'none',
    '--menu-highlight-color': 'var(--link-color)',
    '--menu-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--menu-item-color': 'var(--color-gray-9)',
    '--menu-item-group-title-color': 'var(--theme-text-color-secondary)',
    '--menu-popup-bg': 'var(--theme-component-bg)',
    '--progress-text-color': 'var(--color-gray-7)',
    '--progress-radius': '100px',
    '--select-arrow-open-transform': 'none',
    '--select-arrow-transition': 'none',
    '--select-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--select-item-selected-bg': 'var(--color-brand-1)',
    '--shadow-1': '0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px 0 rgba(9, 30, 66, 0.31)', // 和antd的shadow-1的不一样，用于气泡
    '--shadow-2': '0 8px 16px -4px rgba(9, 30, 66, 0.25)',
    '--space-large': '24px',
    '--space-middle': '16px',
    '--space-small': '8px',
    '--table-header-bg': 'transparent',
    '--table-header-color': 'var(--color-gray-7)',
    '--table-row-hover-bg': 'var(--color-gray-3)',
    '--table-header-cell-border-right': 'none',
    '--table-header-border-bottom-color': 'var(--color-gray-4)',
    '--tabs-highlight-color': 'var(--color-gray-9)',
    '--tabs-hover-color': 'var(--color-gray-9)',
    '--tabs-ink-bar-color': 'var(--color-gray-9)',
    '--tabs-top-before': '2px solid var(--color-gray-4)',
    '--tabs-border-bottom': '2px solid var(--color-gray-4)',
    '--tabs-tab-color': 'var(--color-gray-7)',
    '--tabs-card-bg': 'transparent',
    '--tabs-card-nav-list-padding': '0',
    '--tag-check-border': 'var(--color-brand-4)',
    '--tag-default-bg': 'var(--color-gray-3)',
    '--tag-font-color': 'var(--color-gray-9)',
    '--tag-blue-color': 'var(--color-brand-2)',
    '--tag-green-color': 'var(--color-success-1)',
    '--tag-purple-color': 'var(--color-purple-1)',
    '--tag-red-color': 'var(--color-error-1)',
    '--tag-yellow-color': 'var(--color-warning-1)',
    '--tag-blue-bg-color': 'var(--tag-blue-color)',
    '--tag-blue-font-color': 'var(--tag-font-color)',
    '--tag-blue-solid-bg-color': 'var(--tag-blue-color)',
    '--tag-green-bg-color': 'var(--tag-green-color)',
    '--tag-green-font-color': 'var(--tag-font-color)',
    '--tag-green-solid-bg-color': 'var(--tag-green-color)',
    '--tag-red-bg-color': 'var(--tag-red-color)',
    '--tag-red-solid-bg-color': 'var(--tag-red-color)',
    '--tag-red-font-color': 'var(--tag-font-color)',
    '--tag-yellow-bg-color': 'var(--tag-yellow-color)',
    '--tag-yellow-solid-bg-color': 'var(--tag-yellow-color)',
    '--tag-yellow-font-color': 'var(--tag-font-color)',
    '--tag-padding': '0 7px',
    '--tooltip-bg': 'var(--color-gray-9)',
    '--tooltip-color': 'var(--color-gray-1)',
    '--pagination-item-border-color': 'var(--color-gray-5)',
    '--pagination-item-hover-bg': 'var(--color-gray-3)',
    '--pagination-item-hover-color': 'var(--theme-text-color)',
    '--pagination-item-hover-border-color': 'var(--color-gray-5)',
    '--pagination-item-active-border-color': 'var(--color-brand-1)',
    '--pagination-item-active-bg': 'var(--color-brand-1)',
    '--pagination-item-active-color': 'var(--color-brand-7)',
    '--checkbox-hover-border-color': 'var(--theme-border-color-base)',
    '--checkbox-hover-bg': 'var(--color-gray-3)',
    '--checkbox-focus-bg': 'var(--color-gray-1)',
    '--checkbox-checked-focus-border-color': 'var(--theme-border-color-base)',
    '--checkbox-checked-focus-box-shadow': 'var(--theme-component-focus-box-shadow)',
    '--checkbox-checked-focus-bg': 'var(--theme-primary-color)',
    '--checkbox-disabled-bg': 'var(--color-gray-1)',
    '--checkbox-checked-border-color': 'var(--theme-border-color-base)',
    '--radio-hover-border-color': 'var(--theme-border-color-base)',
    '--radio-hover-bg': 'var(--color-gray-3)',
    '--radio-checked-color': 'var(--color-brand-5)',
    '--radio-disabled-border-color': 'var(--theme-disabled-bg)',
    '--radio-disabled-bg': 'var(--color-gray-1)',
    '--radio-button-disabled-color': 'var(--theme-disabled-color)',
    '--radio-button-disabled-border-color': 'var(--color-gray-4)',
    '--radio-button-disabled-bg': 'var(--color-gray-1)',
    '--radio-button-hover-color': 'var(--theme-primary-color-hover)',
    '--radio-hover-border-zindex': '0',
    '--switch-min-width': '44px',
    '--switch-disable-bg': 'var(--theme-disabled-bg)',
    '--switch-handle-disable-bg': 'var(--theme-color-border-base)',
    '--modal-header-bg': 'var(--theme-component-bg)',
    '--modal-no-border-padding': '24px 24px 16px 24px',
    '--modal-no-border-body-padding-top': '0px',
    '--modal-padding': '24px 24px 24px 24px',
    '--modal-header-close-size': '72px',
    '--modal-close-icon-height': '24px',
    '--modal-close-icon-line-height': '72px',
    '--form-item-explain-icon-display': 'inline-block',
    '--modal-body-border-bottom': 'none',
    '--modal-footer-border-top': 'none',
    '--modal-body-padding': '0 24px',
    '--popover-font-size': '14px',
    '--popover-line-height': '1.5715',
    '--popover-inner-content-padding': '16px',
    '--popover-title-padding': '16px 16px 0 16px',
    '--dropdown-menu-min-width': '128px',
    '--back-top-bg': 'var(--color-gray-7)',
    '--back-top-hover-bg': 'var(--color-gray-8)',
    '--back-top-active-bg': 'var(--color-gray-8)',
    ...buttonColors,
};
