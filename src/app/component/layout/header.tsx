 import Image from "next/image"
 import logo from  "@/../../public/assest/logo_final.png"
import Wrapper from "../shared/wrapper"

const navlinks =[
    
    "Home","About","Services","Portfolio","pages",
]
    

const Header = () => {

  return (
    <header className="py-5 " >
        <Wrapper>
        
        <div className="flex justify-between items-center">
         <div>
            <Image className="w-36" src={logo} alt="Glint logo"/>
         </div>
         <nav >
            <ul className="flex gap-x-5">
            {
                navlinks.map((items)=>(
                   
                    <li className=" list-none text-lg font-medium">{items}</li>
                    
                ))
            }
            </ul>
        </nav>
        </div>
        </Wrapper>
    </header>
  )
}

export default Header