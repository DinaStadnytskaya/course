/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import Slider from 'react-slick';
import Slider2 from '@/shared/assets/slider/slider2.png';
import Slider3 from '@/shared/assets/slider/slider3.png';
import Slider4 from '@/shared/assets/slider/slider4.jpg';
import Slider5 from '@/shared/assets/slider/slider5.png';
import cls from './Fade.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className={cls.Fade}>
                <Slider {...settings} className={cls.MySlider}>
                    <div className={cls.SliderImage}>
                        <img src={Slider2} alt="Slider2" />
                    </div>
                    <div className={cls.SliderImage}>
                        <img src={Slider3} alt="Slider3" />
                    </div>
                    <div className={cls.SliderImage}>
                        <img src={Slider4} alt="Slider4" />
                    </div>
                    <div className={cls.SliderImage}>
                        <img src={Slider5} alt="Slider5" />
                    </div>
                </Slider>
            </div>
        );
    }
}
