export function calculateApiCost(numReqs: number, tier?: string) {
    const rates: Record<string, number> = {
        pro: 0.05,
        enterprise: 0.03
    }

    const rate = tier && rates[tier] ? rates[tier] : 0.10
    return numReqs * rate
}