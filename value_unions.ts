export type Priority = "low" | "medium" | "high" | "critical"
export function setPriority(level: Priority) {
    const priority: Record<Priority, number> = {
        "low": 0,
        "medium": 1,
        "high": 2,
        "critical": 3
    }
    return priority[level] ? priority[level] : 0
}