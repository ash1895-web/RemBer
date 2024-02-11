import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const session = await getServerSession()
  
  if (session) {    
    const res = await fetch(`${process.env.BASE_URL}/api/users`, {
      method: 'POST',
      body: JSON.stringify(session.user),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('next-auth.session-token')}`,
      }    
    })
   
    redirect('/dashboard')
  }
}
