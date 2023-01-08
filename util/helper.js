export function brokeDev(cost, salary) {
    return cost / salary
}

export function sanitizePrice(price) {
    return parseInt(price.replace(/[^0-9]/g, ''))
}

export function calcYears(cost, salary) {
    return Math.ceil(cost / salary)
}