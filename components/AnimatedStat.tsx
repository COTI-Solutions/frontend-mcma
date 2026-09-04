'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type AnimatedStatProps = {
    value: number
    label: string
    icon?: LucideIcon
    suffix?: string
    prefix?: string
    decimals?: number
    delay?: number
    duration?: number
    valueClassName?: string
    labelClassName?: string
    iconClassName?: string
    className?: string
}

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3)

const formatValue = (value: number, decimals: number) =>
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString()

const AnimatedStat = ({
    value,
    label,
    icon: Icon,
    suffix = '',
    prefix = '',
    decimals = 0,
    delay = 0,
    duration = 2000,
    valueClassName = 'text-3xl font-bold',
    labelClassName = 'text-gray-300',
    iconClassName = 'w-6 h-6',
    className = '',
}: AnimatedStatProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    // Valor final por defecto: legible en SSR y sin JS
    const [displayValue, setDisplayValue] = useState(value)
    const [hasFinished, setHasFinished] = useState(false)
    const [shouldAnimate, setShouldAnimate] = useState(false)

    useEffect(() => {
        setShouldAnimate(true)
        setDisplayValue(0)
    }, [])

    useEffect(() => {
        if (!shouldAnimate || !isInView) return

        let frameId = 0
        const timeoutId = window.setTimeout(() => {
            const startTime = performance.now()

            const tick = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1)
                const easedProgress = easeOutCubic(progress)
                const current = value * easedProgress

                setDisplayValue(current)

                if (progress < 1) {
                    frameId = requestAnimationFrame(tick)
                    return
                }

                setDisplayValue(value)
                setHasFinished(true)
            }

            frameId = requestAnimationFrame(tick)
        }, delay * 1000)

        return () => {
            window.clearTimeout(timeoutId)
            cancelAnimationFrame(frameId)
        }
    }, [shouldAnimate, isInView, value, delay, duration])

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={
                shouldAnimate && isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.6, delay: shouldAnimate ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col items-center ${className}`}
        >
            <motion.div
                className="flex items-center mb-2"
                animate={hasFinished ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.4 }}
            >
                {Icon && (
                    <span className="mr-2">
                        <Icon className={iconClassName} aria-hidden="true" />
                    </span>
                )}
                <span className={valueClassName}>
                    {prefix}
                    {formatValue(displayValue, decimals)}
                    {suffix}
                </span>
            </motion.div>
            <p className={labelClassName}>{label}</p>
        </motion.div>
    )
}

export default AnimatedStat
