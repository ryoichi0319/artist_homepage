'use client'
import { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        return router.push("/admin")
    }
    return (<div className="wrapper" style={{margin: "100px", textAlign: "center"}}>
        <div className="form-wrapper" >
            <h1 className="mt-60 mb-30">Sign up</h1>
            <form onSubmit={handleForm} className="form">
            <label htmlFor="email">
    <p>メールアドレス</p>
    <input
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        name="email"
        id="email"
        placeholder="example@mail.com"
    />
</label>
<label htmlFor="password">
    <p>パスワード</p>
    <input
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        name="password"
        id="password"
        placeholder="パスワード"
    />
</label>

                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>);
}

export default Page;