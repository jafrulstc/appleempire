import { component$ } from "@builder.io/qwik";
import { IconSearch, IconCart, IconPreOrder, IconCompare, IconAccount } from '~/components/svgIcons/icons';
import IconOffers from '~/asset/images/header/offers.gif'

const SearchBar = () => {
    return (
        <>
            <form class="searchbar xl:w-[500px] ssm:w-fit md:w-[370px] lg:w-[350px]  h-10 relative flex justify-between  rounded-md">
                <div class="hidden md:block search-box w-full h-full">
                    <input type="text" placeholder="Search for products..." class="w-full h-full p-2" />
                </div>

                <div class="search-Button w-14 h-full right-0 absolute bg-black  md:bg-[#FBD8CD]">
                    <button type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ssm:-translate-x-0 "> <IconSearch svgStyle="w-6 h-6 text-primary" /> </button>
                </div>
            </form>

            {/* <div class="hidden ssm:block fixed inset-0 bg-black bg-opacity-50 z-50">
                <div class="absolute top-0 left-0 right-0 mx-auto bg-white w-full max-w-sm rounded-lg shadow-lg p-2 mt-4">
                    <form class="flex items-center w-full relative">
                        <input class="w-full py-0 md:py-2 pl-5 focus:outline-none rounded md:focus:ring-2 focus:ring-_primary/60 transition-all duration-300 ease-in-out" placeholder="Search for products..." aria-label="Search" type="text" />
                        <button class="absolute text-black right-0 bg-[#FBD8CD] p-1 md:p-4 py-1 md:py-4" type="button">
                            <IconSearch svgStyle="w-6 h-6 text-[primary_color]" />
                        </button>
                    </form>
                </div>
            </div> */}
        </>
    )
}

const NavigationMenu = component$(() => {
    return (
        <>
            <div class="items flex justify-between lg:gap-10 items-center gap-20">

                <SearchBar />
                <ul class=" flex items-center py-4 pl-4 gap-12 2xssm:gap-5 responsive-ul">
                    <li class="flex flex-col gap-1 items-center">
                        <img width="100" height="100" src={IconOffers} alt="Offer" class="w-8 h-8 xssm:w-5 xssm:h-5 2xssm:w-5 2xssm:h-5" />
                        <h4>Offers</h4>
                    </li>
                    <li class="flex flex-col gap-1 items-center">
                        <IconCart svgStyle="w-8 h-8 xssm:w-5 xssm:h-5 2xssm:w-4 2xssm:h-5 text-primary" />
                        <h4>Cart</h4>
                    </li>
                    <li class="flex flex-col gap-1 items-center">
                        <IconPreOrder svgStyle="w-8 h-8 xssm:w-5 xssm:h-5 2xssm:w-4 2xssm:h-5 text-primary" />
                        <h4 class="min-w-12">Pre-Order</h4>
                    </li>

                    <li class="flex flex-col gap-1 items-center">
                        <IconCompare svgStyle="w-8 h-8 xssm:w-5 xssm:h-5 2xssm:w-4 2xssm:h-5 text-primary" />
                        <h4>Compare</h4>
                    </li>
                    <li class="flex flex-col gap-1 items-center">
                        <IconAccount svgStyle="w-8 h-8 xssm:w-5 xssm:h-5 2xssm:w-4 2xssm:h-5 text-primary" />
                        <h4>Account</h4>
                    </li>
                </ul>
            </div>
        </>
    )
});

export default NavigationMenu