'use client'
import Link from "next/link";
import ShowMessage from "./ShowMessage";
import { useState } from "react";

export default function Login(){
    const [formData , setFormData] = useState({
        email:'',
        password:''
    });
    
    const [showMessage,setShowMessage] = useState(false)
    const [errors, setErrors] = useState({});

    const validateForm = () =>{
        let newErrors = {};
        if(!formData.email){
            newErrors.email = 'Email cannot be blank!';
        }
        if(!formData.password){
            newErrors.password = 'Password cannot be blank!'
        }else if(formData.password.length < 8){
            newErrors.password = 'Password must be atleast 8 characters long!'
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({
            ...formData,[name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateForm()){
           setTimeout(()=>{
            setShowMessage(true)
           },2000) 
        }
    }
    const handleClose = () =>{
        setShowMessage(false)
    }
    return(
        <main className="bg-white w-[90%] lg:w-1/2 ml-auto mr-auto p-10 flex flex-col justify-center items-center rounded-[3px]">
           {showMessage ? <ShowMessage onClose={handleClose} /> : <form className="w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-semibold mb-5">Login to Busand</h1>
            <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="border-[2px] rounded-[3px] border-grey-400 px-2 py-3 w-full outline-none" />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            <input type="password" name="password" value={formData.password}  onChange={handleChange} placeholder="Password" className="border-[2px] rounded-[3px]  border-grey-400 px-2 py-3 w-full outline-none" />
            {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
            </div>
            <Link href='/'><small className="text-slate-600 font-normal">Forgot Password?</small></Link>
            <button type="submit" className="bg-[#7e007e] text-white py-3 text-xl rounded-[3px]  outline-none">Login</button>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 mt-8">
            <small>Not yet a member? </small>
            <Link href='/signup' className="text-slate-600 font-normal"><small>Sign Up Now!</small></Link>
            </div>
            </form>}
        </main>
    )
}