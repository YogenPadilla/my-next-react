import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
      <div className="grid grid-cols-4 text-white justify-between gap-[24px] items-top bottom-0 p-[24px] w-full border border-[#222831]">
      <div className=" text-center flex flex-col item-center pl-16">
        <Link className="hover:underline text-xl pb-6" href=""> Aprender React </Link>
        <Link className="hover:underline" href=""> Inicio rapido </Link>
        <Link className="hover:underline" href=""> Instalacion </Link>
        <Link className="hover:underline" href=""> Descubrir la UI </Link>
        <Link className="hover:underline" href=""> Agregar interactividad </Link>
        <Link className="hover:underline" href=""> Gestion del estado </Link>
        <Link className="hover:underline" href=""> Puertas de escape </Link>
      </div>
      <div className=" text-center flex flex-col item-center pl-16 botton-0 "> 
        <Link className="hover:underline text-xl pb-6" href=""> Referencia de la API</Link>
        <Link className="hover:underline" href=""> React APIs</Link>
        <Link className="hover:underline" href=""> React DOM APIs</Link>
      </div>
      <div className=" text-center flex flex-col item-center pl-16">
        <Link className="hover:underline text-xl pb-6" href=""> Comunidad </Link>
        <Link className="hover:underline" href=""> Codigo de conducta </Link>
        <Link className="hover:underline" href=""> Conoce el equipo </Link>
        <Link className="hover:underline" href="">contribuidores de la documentacion </Link>
        <Link className="hover:underline" href="">Agradecimientos </Link>
      </div>
      <div className=" text-center flex flex-col item-center pl-16">
        <Link className="text-xl pb-6" href=""> Más </Link>
        <Link className="hover:underline" href=""> Blog </Link>
        <Link className="hover:underline" href=""> React Native </Link>
        <Link className="hover:underline" href=""> Privacidad </Link>
        <Link className="hover:underline" href=""> Terminos </Link>
        <div className="flex items-center justify-center gap-[16px] pt-6">
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "devicon:twitter" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "logos:facebook" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "skill-icons:instagram" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "fa-brands:github" />
        </div>
      </div>
    </div>  
  );
};



export default Footer;
