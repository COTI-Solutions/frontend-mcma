'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { App, ConfigProvider } from 'antd'
import useGlassTheme from '@/theme/glassTheme'

type AntdProviderProps = {
    children: React.ReactNode
}

const AntdProvider = ({ children }: AntdProviderProps) => {
    const configProps = useGlassTheme()
    const { app, ...providerProps } = configProps

    return (
        <AntdRegistry>
            <ConfigProvider {...providerProps}>
                <App className={app?.className}>{children}</App>
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default AntdProvider
