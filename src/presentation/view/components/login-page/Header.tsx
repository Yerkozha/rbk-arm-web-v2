import React, { FC, useEffect, useState } from 'react'
import { AppleIcon, Box, Facebook, Instagram, LogoIcon, Phone, Text, Twitter, VK, ArrowDown } from "ui";
import styled, { useTheme } from "styled-components";
import { Link } from 'react-router-dom';

interface HeaderProps {
    children?: any
}
interface LanguageStyleProps {
    dataLang?: string
}

const NavigationBar = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    a {
        color: #8F9BB3;
        transition: all .2s linear;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }
    a:hover{
        color: #3DBCCC;
    }
`
const ToolBar = styled.div`
    display: flex;
    gap: 35px;
    justify-content: space-between;
    align-items: center;
`
const Language = styled.div.attrs<LanguageStyleProps>((props) => ({'data-lang': props.dataLang}))<LanguageStyleProps>`
    position: relative;
    border: 1px solid #E4E9F2;
    border-radius: 6px;
    padding: 5px 2px 5px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    span {
        width: 30px;
        pointer-events: none;
    }
    svg {
        pointer-events: none;
    }
`
const LanguageList = styled.ul`
    position: absolute;
    left: 0;
    top: 36px;
    cursor: pointer;
    box-shadow: 0px 16px 30px rgba(34, 43, 69, 0.2);
    
    background: #ffffff;
    li {
        transition: all 0.2s ease;
        padding: 1px 21px;
        border-radius: 8px;
        
    }
    li:hover {
        color: #3DBCCC;
    }
    .active {
        color: #3DBCCC;
    }
`

const Header: FC<HeaderProps> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [language, setLanguage] = useState<string>('RU')

    const languageSelectedHandle = (ev: any) => {
        debugger
        setLanguage(ev.target.dataset.value)
    }
    const outEffectHandler = (ev: any) => {

        if(ev.target.dataset.lang !== 'language'){
            setShowModal(false)
        }

    }
    useEffect(() => {
        window.addEventListener( 'click', outEffectHandler )
        return () => {
            removeEventListener( 'click', outEffectHandler )
        }
    })

    return (
        <Box className="login-header">
            <NavigationBar>
                <li><Link to="/enter">Вход</Link></li>
                <li><Link to="/transaction">Перевод</Link></li>
                <li><Link to="/map">Отделения и банкоматы</Link></li>
            </NavigationBar>
            <ToolBar>
                <div className="login-header__phone">
                    <Phone id="phone"></Phone>
                    <label htmlFor="phone">7888</label>
                </div>
                <Language dataLang="language" onClick={() => setShowModal(!showModal)}>
                    <Text>{language}</Text>
                    <ArrowDown color="#8F9BB3" />
                    {
                        showModal && <LanguageList onClick={(event: React.MouseEvent<HTMLElement>) => languageSelectedHandle(event)}>
                            <li data-value="RU">RU</li>
                            <li data-value="KZ">KZ</li>
                            <li data-value="EN">EN</li>
                        </LanguageList>
                    }
                </Language>
            </ToolBar>
        </Box>
    )
}
export default Header