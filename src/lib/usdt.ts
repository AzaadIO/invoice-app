export const usdt = async () => {
    const API : string = "https://api.tetherland.com/currencies"
    const USDT : number = await fetch(API).then(res => res.json()).then(res => res.data.currencies.USDT.price)
    // const price : number = 62300
    // return price;
    return USDT
}