import React from 'react';
import styled from "styled-components";

const Toggle = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: .25s;
  li {
    margin: 0;
    padding: 0;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  a {
    color: inherit;
    display: block;
    padding: var(--spacer-s) var(--spacer-xs);
    text-decoration: none;
    cursor: pointer;
    transition: color .125s;
  }
  li ul {
    background: var(--main-color-a);
    box-shadow: var(--block-shadow);
    visibility: hidden;
    //left: 50%;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transition: transform .25s, opacity .25s;
    transform: scaleY(0) translateX(-50%);
    transform: scaleY(0) ;
    transform-origin: top center;
    width: 28rem;
    //z-index: 10;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
  li:hover > ul, li ul:hover, li ul li:hover, li ul li a:hover {
    transform: scaleY(1) ;
    visibility: visible;
    pointer-events: auto;
  }
  
  li ul li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  li ul li:not(:last-of-type) {
    border-bottom: 0.1rem solid var(--text-color-inverted-secondary);
  }
  li ul li a {
    color: inherit;
    display: block;
    padding: var(--spacer-s) var(--spacer-xs);
    //-webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    //-webkit-transition: color .125s;
    transition: color .125s;
  }
`

export default function NavToggle() {
    return (
        <Toggle>

            <li>
                <a href="/">Главная</a>
            </li>
            <li>
                <a href="/about">О больнице</a>
                <ul>
                    <li>
                        <a href="/about/history">История стационара</a>
                    </li>
                    <li>
                        <a href="/about/s-i-spasokukotskij">О Сергее Ивановиче Спасокукоцком</a>
                    </li>
                    <li>
                        <a href="#">Сведения о ГКБ им. С.И. Спасокукоцкого</a>
                    </li>
                    <li>
                        <a href="/about/documents">Официальные документы</a>
                    </li>
                    <li>
                        <a href="/about/administration">Руководство больницы</a>
                    </li>
                    <li>
                        <a href="/about/moscow-doctor">Московский врач</a>
                    </li>
                    <li>
                        <a href="/about/university">Кафедры и университетские клиники</a>
                    </li>
                    <li>
                        <a href="/about/vacancies">Вакансии</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/patients">Пациентам</a>
            </li>
            <li>
                <a href="/cdc">Службы и отделения</a>
            </li>
            <li>
                <span>Платные услуги</span>
            </li>
            <li>
                <span>Пресс-центр</span>
            </li>
            <li>
                <a href="/contact">Контакты</a>
            </li>
        </Toggle>
    );
};
