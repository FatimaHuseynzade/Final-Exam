import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
      axios.post('http://localhost:8000/cards',{...data,file:image})
      .then(res=>navigate('/admin'))
      
  }

  const [image, setimage] = useState(null);
  const Base64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result)
      return
    }
  }

  let navigate = useNavigate()

  return (
    
    <div className="ADD">
      <form onSubmit={handleSubmit(onSubmit)} className="addpage">
        <label>Name: <input {...register("name")} /></label>
        {errors.name && <span>This field is required</span>}



        <label>Cost:<input {...register("cost", { required: true })} /></label>
        {errors.cost && <span>This field is required</span>}

        <input  onInput={(e)=>Base64(e.target.files[0])}type="file" />

        <input type="submit"  className="btn"/>
      </form>
    </div>
  )
}
