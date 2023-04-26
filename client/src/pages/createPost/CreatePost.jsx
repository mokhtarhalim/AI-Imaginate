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

  return (
    <div>
      
    </div>
  )
}
 