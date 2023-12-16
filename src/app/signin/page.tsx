'use client'
import { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "@/context/Authcontext";

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { user } = useAuthContext()
    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()

        const { data, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(data?.user.email, "signInresult")
        return router.push("/admin")
    }
    return (<div className="wrapper" style={{marginTop: "100px", textAlign:"center"}}>
        <div className="form-wrapper">
            
            <h1 className="mt-60 mb-30">Sign in</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    {user && user.email && <p>{user.email}</p>} {/* ユーザーが存在し、メールアドレスがある場合に表示 */}
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign in</button>
            </form>
        </div>

    </div>);
}

export default Page;