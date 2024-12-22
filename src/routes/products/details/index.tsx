import { component$ } from "@builder.io/qwik";

import galaxyS20 from '~/asset/images/products/galaxcy.jpg';
import Header from "~/components/header/header";
import { IconAccount } from "~/components/svgIcons/icons";

const ProductDetails = component$(() => {
    return (
        <>
            <Header />
            <div class="pt-28">
                <div class="details xssm:flex-col xssm:mb-10 xssm:items-center max-w-[1440px] lg:h-[500px] m-auto  bg-[#E5D9F2] p-3 items-start flex sm:justify-between md:justify-center sm:items-center">
                    <div class="image xssm:w-40 sm:w-52 sm:h-52 md:w-[300px] md:h-[300px]">
                        <img width="100" height="100" class="w-full h-full" width="100" height="100" src={galaxyS20} alt="galaxyS20" />
                    </div>
                    <div class="description mx-0 px-2 sm:w-[80%] md:w-[50%] sm:mx-5 sm:px-5">
                        <p class=" md:leading-7 md:text-sm lg:leading-9">
                            Enhance your skiing experience with the Alpine Fusion Goggles from WildRunner. These goggles offer full UV protection and anti-fog lenses to keep your vision clear on the slopes. With their stylish silver frame and orange lenses, you'll stand out from the crowd. Adjustable straps ensure a secure fit, while the soft foam padding provides comfort all day long.
                            Brand: WildRunner
                        </p>
                        <h3>Brand: Samsung</h3>
                        <div class="sm:mt-0  flex justify-start items-center gap-10 mt-2 p-2">
                            <h2 class="text-[25px]">$600.99</h2>
                            <button class="bg-black 2xssm:flex-col p-3 flex justify-center gap-1 rounded-lg items-center text-white">
                                <IconAccount svgStyle="w-6 h-6 xssm:w-5 xssm:h-5 2xssm:w-4 2xssm:h-5 text-[#EE3E0C]" />
                                <p>Log in to purchase</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default ProductDetails