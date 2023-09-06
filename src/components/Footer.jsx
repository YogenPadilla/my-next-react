import Link from "next/link";
import Container from "./Container";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
      <Container variant="gridCols4" className="w-full text-white gap-[24px] p-[24px] ">
      <Container variant="flexColsCenter" className=" text-center ">
        <Link className="hover:underline text-xl pb-[8px]" href=""> Aprender React </Link>
        <Link className="hover:underline" href=""> Inicio rapido </Link>
        <Link className="hover:underline" href=""> Instalacion </Link>
        <Link className="hover:underline" href=""> Descubrir la UI </Link>
        <Link className="hover:underline" href=""> Agregar interactividad </Link>
        <Link className="hover:underline" href=""> Gestion del estado </Link>
        <Link className="hover:underline" href=""> Puertas de escape </Link>
      </Container>
      <Container variant="flexColsCenter" className=" text-center"> 
        <Link className="hover:underline text-xl pb-[8px]" href=""> Referencia de la API</Link>
        <Link className="hover:underline" href=""> React APIs</Link>
        <Link className="hover:underline" href=""> React DOM APIs</Link>
      </Container>
      <Container variant="flexColsCenter" className=" text-center">
        <Link className="hover:underline text-xl pb-[8px]" href=""> Comunidad </Link>
        <Link className="hover:underline" href=""> Codigo de conducta </Link>
        <Link className="hover:underline" href=""> Conoce el equipo </Link>
        <Link className="hover:underline" href="">contribuidores de la documentacion </Link>
        <Link className="hover:underline" href="">Agradecimientos </Link>
      </Container>
      <Container variant="flexColsCenter" className=" text-center">
        <Link className="text-xl pb-[8px]" href=""> Más </Link>
        <Link className="hover:underline" href=""> Blog </Link>
        <Link className="hover:underline" href=""> React Native </Link>
        <Link className="hover:underline" href=""> Privacidad </Link>
        <Link className="hover:underline" href=""> Terminos </Link>
        <Container variant="flexCenter" className=" gap-[16px] pt-[8px]">
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "devicon:twitter" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "logos:facebook" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "skill-icons:instagram" />
        <Icon className="cursor-pointer hover:scale-125 active:scale-100" icon = "fa-brands:github" />
        </Container>
      </Container>
    </Container>  
  );
};



export default Footer;
