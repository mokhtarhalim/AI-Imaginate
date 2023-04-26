import "./CreatePost.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { preview } from "../../assets"
import { getRandomPrompt } from "../../utils"
import FormField from "../../components/FormField"
import Loader from "../../components/Loader"

export default function CreatePost() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    promt: '',
    photo: ''
  });

  const [generatingImg, setGeneratingImg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSupriseMe = () => {
    
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Create imaginative and visually stunning images through AI Imaginate and share them with the Community</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="an oil painting by Matisse of a humanoid robot playing chess"
            value={form.promt}
            handleChange={handleChange}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>
      </form>
    </section>
  )
}
