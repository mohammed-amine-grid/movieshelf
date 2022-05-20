export const durationConvert = (n) => {
    let hours = Math.floor(n / 60);
    let minutes = Math.round((n /60 - hours) * 60);

    return `${hours}H ${minutes}min`

}