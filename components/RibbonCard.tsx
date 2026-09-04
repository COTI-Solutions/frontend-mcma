'use client'

import { Badge, Card } from 'antd'
import type { CardProps } from 'antd'
import clsx from 'clsx'

type RibbonCardProps = CardProps & {
    ribbonText?: string
    ribbonColor?: string
    ribbonPlacement?: 'start' | 'end'
    href?: string
    wrapperClassName?: string
}

const RibbonCard = ({
    ribbonText,
    ribbonColor = '#6A2226',
    ribbonPlacement = 'end',
    href,
    wrapperClassName,
    className,
    children,
    ...cardProps
}: RibbonCardProps) => {
    const card = (
        <Card
            {...cardProps}
            className={clsx('h-full overflow-hidden border-none', className)}
        >
            {children}
        </Card>
    )

    const cardWithRibbon = ribbonText ? (
        <Badge.Ribbon text={ribbonText} color={ribbonColor} placement={ribbonPlacement}>
            {card}
        </Badge.Ribbon>
    ) : (
        card
    )

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx('block no-underline text-inherit', wrapperClassName)}
            >
                {cardWithRibbon}
            </a>
        )
    }

    return <div className={wrapperClassName}>{cardWithRibbon}</div>
}

export default RibbonCard
