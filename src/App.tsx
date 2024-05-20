import { useForm } from "react-hook-form"
import './App.css'
import { useState } from "react"

type Inputs = {
  weight: number
}

function App() {
  const { register, handleSubmit } = useForm<Inputs>()
  const [result, setResult] = useState<number>(0)

  const waterCal = (data: any) => {
    setResult(Math.floor(+data.weight * 2.2 * 30 / 2))
  }

  return (
    <>
      <h1 >ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h1>{result} มล.</h1>
      <form onChange={handleSubmit(waterCal)}>
        <input {...register('weight')} type="number" placeholder='น้ำหนังของคุณ (กิโลกรัม)' />
      </form>
    </>
  )
}

export default App
