'use client'
import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "@/context/Authcontext";
import { useRouter } from "next/navigation";
import signOutFunction from "../../firebase/auth/signout"
import NewsEdit from "./newsEdit";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/")
        router.refresh()
    }, [user])
    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await signOutFunction();
            console.log("Sign out successful");
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

   
       

const marginTop = { marginTop: "100px" };


    return (
        <div>
          <h1 style={marginTop}>Only logged in users can view this page</h1>
          <NewsEdit />
          <div>{user?.email}"ログイン中"</div>

          <button onClick={handleForm}>signOut</button>
        </div>
    )
}

export default Page;