import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay: number) {
    const [debauncedValue, setDebauncedValue] = useState<T>()
    useEffect(() => {
        const timeout = setTimeout(() => setDebauncedValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debauncedValue
}