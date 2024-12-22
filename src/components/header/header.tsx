import { component$, useStyles$ } from "@builder.io/qwik";

import headerStyle from '~/asset/css/header/header.css?inline'
import Logo from "~/components/header/logo";
import NavigationMenu from "./navigationmenu";





const Header = component$(() => {
    useStyles$(headerStyle);
    return (
        <header class="w-full bg-[#000000] fixed">
            <div class="max-w-[1440px] max-h-14 md:max-h-24 p-4 m-auto flex justify-between items-center text-white">
                <Logo />
                <NavigationMenu />
            </div>

        </header>
    )
});

export default Header