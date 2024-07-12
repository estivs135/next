import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

function Navibar (){
    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
        <Link
          href='/'
          className=" uppercase font-bold text-md h-12 flex items-center">
          Next Store
        </Link>
        <div className="flex items-center gap-8">
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
            <button className="rounded-md border-2 p-3">
             faça login
            </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    )
}

export default Navibar