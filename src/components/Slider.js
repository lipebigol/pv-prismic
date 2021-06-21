import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/image";

export default function SimpleSlider({ product }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            <div>
                <Image src={product.heroSlider_1} maxW="500px" w="100%" maxH="400px" h="100%" objectFit="contain" />
            </div>
            <div>
                <Image src={product.heroSlider_2} maxW="500px" w="100%" maxH="400px" h="100%" objectFit="contain" />
            </div>
            <div>
                <Image src={product.heroSlider_3} maxW="500px" w="100%" maxH="400px" h="100%" objectFit="contain" />
            </div>

        </Slider>
    );
}