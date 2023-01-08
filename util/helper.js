export function brokeDev(cost, salary) {
    return cost / salary
}

export function sanitizePrice(price) {
    return parseInt(price.replace(/[^0-9]/g, ''))
}

export function calcYears(cost, salary) {
    if (Math.ceil(cost / salary) > 100) {
        return "🪦"
    }
    return Math.ceil(cost / salary).toString()
}