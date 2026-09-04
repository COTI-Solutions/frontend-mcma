'use client'

import { useMemo } from 'react'
import { theme } from 'antd'
import type { ConfigProviderProps } from 'antd'
import { createStyles } from 'antd-style'
import clsx from 'clsx'

const useStyles = createStyles(({ css, cssVar }) => {
    const glassBorder = {
        boxShadow: [
            `${cssVar.boxShadowSecondary}`,
            `inset 0 0 5px 2px rgba(255, 255, 255, 0.3)`,
            `inset 0 5px 2px rgba(255, 255, 255, 0.2)`,
        ].join(','),
    }

    const glassBox = {
        ...glassBorder,
        background: `color-mix(in srgb, ${cssVar.colorBgContainer} 15%, transparent)`,
        backdropFilter: 'blur(12px)',
    }

    return {
        glassBorder,
        glassBox,
        notBackdropFilter: css({
            backdropFilter: 'none',
        }),
        app: css({
            textShadow: '0 1px rgba(0,0,0,0.1)',
        }),
        cardRoot: css({
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            boxShadow: '0 4px 12px -2px rgba(43, 24, 16, 0.06), 0 2px 6px -1px rgba(43, 24, 16, 0.04)',
            border: '1px solid #FAF2ED',
        }),
        badgeRibbon: css({
            '& .ant-ribbon': {
                fontFamily: 'var(--font-work-sans), system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.02em',
                borderRadius: '4px',
            },
        }),
        modalContainer: css({
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            backdropFilter: 'none',
        }),
        buttonRoot: css({
            borderRadius: 8,
        }),
        buttonRootDefaultColor: css({
            background: 'transparent',
            color: cssVar.colorText,

            '&:hover': {
                background: '#FAF2ED',
                color: cssVar.colorPrimary,
            },

            '&:active': {
                background: '#F4E1D5',
                color: cssVar.colorPrimary,
            },
        }),
        dropdownRoot: css({
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            boxShadow: '0 10px 25px -5px rgba(43, 24, 16, 0.1)',

            ul: {
                background: 'transparent',
            },
        }),
        switchRoot: css({ ...glassBorder, border: 'none' }),
        segmentedRoot: css({
            ...glassBorder,
            background: 'transparent',
            backdropFilter: 'none',

            '& .ant-segmented-thumb': {
                ...glassBox,
            },

            '& .ant-segmented-item-selected': {
                ...glassBox,
            },
        }),
        radioButtonRoot: css({
            '&.ant-radio-button-wrapper': {
                background: 'transparent',
                borderColor: '#FAF2ED',
                color: cssVar.colorText,

                '&:hover': {
                    borderColor: '#848058',
                    color: '#848058',
                },

                '&.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)': {
                    backgroundColor: '#FAF2ED',
                    borderColor: '#6A2226',
                    color: '#6A2226',

                    '&::before': {
                        backgroundColor: '#6A2226',
                    },

                    '&:hover': {
                        color: '#6A2226',
                    },
                },
            },
        }),
    }
})

const useGlassTheme = () => {
    const { styles } = useStyles()

    return useMemo<ConfigProviderProps>(
        () => ({
            theme: {
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#6A2226',
                    colorInfo: '#848058',
                    colorSuccess: '#848058',
                    colorLink: '#848058',
                    colorLinkHover: '#72704C',
                    colorBgBase: '#FAF2ED',
                    colorBgContainer: '#FFFFFF',
                    colorBgLayout: '#F4E1D5',
                    colorText: '#2B1810',
                    colorTextSecondary: '#6B5B52',
                    fontFamily: 'var(--font-work-sans), system-ui, sans-serif',
                    borderRadius: 8,
                    borderRadiusLG: 8,
                    borderRadiusSM: 6,
                    borderRadiusXS: 4,
                    motionDurationSlow: '0.2s',
                    motionDurationMid: '0.1s',
                    motionDurationFast: '0.05s',
                },
            },
            app: {
                className: styles.app,
            },
            card: {
                classNames: {
                    root: styles.cardRoot,
                },
            },
            badge: {
                classNames: {
                    root: styles.badgeRibbon,
                },
            },
            modal: {
                classNames: {
                    container: styles.modalContainer,
                },
            },
            button: {
                classNames: ({ props }) => ({
                    root: clsx(
                        styles.buttonRoot,
                        (props.variant !== 'solid' || props.color === 'default' || props.type === 'default') &&
                            styles.buttonRootDefaultColor,
                    ),
                }),
            },
            alert: {
                className: clsx(styles.glassBox, styles.notBackdropFilter),
            },
            colorPicker: {
                classNames: {
                    root: clsx(styles.glassBox, styles.notBackdropFilter),
                },
                arrow: false,
            },
            dropdown: {
                classNames: {
                    root: styles.dropdownRoot,
                },
            },
            select: {
                classNames: {
                    root: clsx(styles.glassBox, styles.notBackdropFilter),
                    popup: {
                        root: styles.glassBox,
                    },
                },
            },
            datePicker: {
                classNames: {
                    root: clsx(styles.glassBox, styles.notBackdropFilter),
                    popup: {
                        container: styles.glassBox,
                    },
                },
            },
            input: {
                classNames: {
                    root: clsx(styles.glassBox, styles.notBackdropFilter),
                },
            },
            inputNumber: {
                classNames: {
                    root: clsx(styles.glassBox, styles.notBackdropFilter),
                },
            },
            popover: {
                classNames: {
                    container: styles.glassBox,
                },
            },
            switch: {
                classNames: {
                    root: styles.switchRoot,
                },
            },
            radio: {
                classNames: {
                    root: styles.radioButtonRoot,
                },
            },
            segmented: {
                className: styles.segmentedRoot,
            },
            progress: {
                classNames: {
                    track: styles.glassBorder,
                },
                styles: {
                    track: {
                        height: 12,
                    },
                    rail: {
                        height: 12,
                    },
                },
            },
        }),
        [styles],
    )
}

export default useGlassTheme
