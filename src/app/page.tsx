import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession()
  
  if (session) {    
    await fetch(`${process.env.BASE_URL}/api/users`, {
      method: 'POST',
      body: JSON.stringify(session.user),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })
    
    redirect('/dashboard')
  }
}
