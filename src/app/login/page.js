'use client'
export default function LoginPage() {

    import React, { useState } from "react";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const handleSubmit = async () => {
    const response = await fetch("
        ",
        {
            method:"POST",
headers: {"Content-Type": "application/json"}
body: JSON.stringify({email, password}),        
})
if(!response.ok){
throw new Error("Invalid Credentials");
}
};

const data = await response.json();
localStorage.setItem("access_token", data.access_token);
}



    return (
        <div>
            <form  onSubmit={handleSubmit} className="flex flex-col m-2 gap-2">
                <input type="email"
                 placeholder="Enter your email"
                 className="border "/>
                <input
                 type="password" 
                 placeholder="Enter your password"
                  className="border "/>
                <button type="submit" className="border bg-blue-500 
                text-white">Submit</button>

            </form>
        </div>
    )
}