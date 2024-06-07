"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// TODO: Arrumar as rotas corretamente
// TODO: Trocar icon de login para logout quando usuário estiver logado

const links = [
    { name: "Home", href: "/", icon: "/homeIcon.svg", width: 40},
    { name: "Carrinho", href: "/carrinho", icon: "/carrinhoIcon.svg", width: 40},
    { name: "Pedidos", href: "/pedidos", icon: "/pedidosIcon.svg", width: 28},
    { name: "Login", href: "/login", icon: "/perfilIcon.svg", width: 30},
]

const NavBar = () => {
    const pathname = usePathname();
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
    return(
        <div className="fixed bottom-0 w-full h-18 pt-2  bg-white border-t border-gray-200 flex justify-evenly">
           {links.map((link) => {
            return (
            <Link href={link.href} key={link.name} className={clsx(
                "flex flex-col items-center text-grayDefault",
                {
                    "text-redDefault" : pathname === link.href,
                },
                )}>
                    <Image
                    src={link.icon}
                    width={link.width}
                    height={0}
                    alt={"Menu Imagem: " + link.name}
                    className={clsx(
                        {
                            "filter-red" : pathname === link.href,
                        },
                        )}
                    />
                {link.name}
                </Link>
           )})}
        </div>
    )
}

export default NavBar