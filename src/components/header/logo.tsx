import { component$ } from "@builder.io/qwik";

import IconLogoAnimation from '~/asset/images/header/logo-Animation-for-web.gif'
import { IconMenubar } from "~/components/svgIcons/icons";

const Logo = component$(() => {
    return (
        <>
            <div class="menubar hidden ssm:block">
                <IconMenubar svgStyle="w-8 h-8 h-4 text-[#EE3E0C]" />
            </div>
            <div class="logo max-w-16 md:max-w-28 max-h-14 md:max-h-20 ">
                <img width="100" height="100" src={IconLogoAnimation} alt="Logo" />
            </div>
        </>

    )
});

export default Logo