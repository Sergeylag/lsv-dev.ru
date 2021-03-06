import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const FullTestimonialsNavigation = ({id}) => {
    return (
        <Navigation>
            <Link href={`/`}>
                <a>Главная</a>
            </Link>
            <Link href={`/testimonials`}>
                <a>Отзывы</a>
            </Link>
            <span>№{id}</span>
        </Navigation>
    );
};

export default FullTestimonialsNavigation;