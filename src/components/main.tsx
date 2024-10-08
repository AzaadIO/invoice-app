import DarkMode from "@/components/darkmode"
import { usdt } from "@/lib/usdt"
import { useEffect, useState } from "react"
function Main() {
  const [price, setPrice] = useState<number|null>(null)
  useEffect(() => {
    const getUsdt = async () => {
      let _price = await usdt()
      console.log(_price)
      setPrice(_price)
    }
    getUsdt()
  }, [])
  return (
    <section className="h-screen w-full bg-slate-600 dark:bg-gray-300  transition-colors duration-300">
      <DarkMode />
        <div className="w-full h-1/3 shadow-sm bg-white dark:bg-slate-600 flex justify-center items-center rounded-b-sm  transition-colors duration-300">
        <div>
          <p className="rtl text-black dark:text-white font-vazir text-sm transition-colors duration-300">
            {`قیمت دلار`}
          </p>
          <p className="font-bold text-8xl text-black dark:text-white transition-colors duration-300">{`${price != null ? price : 'Loading ...'}`}</p>
        </div>
        </div>
    </section>
  )
}

export default Main