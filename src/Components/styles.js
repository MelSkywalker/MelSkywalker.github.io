import styled from 'styled-components';
import { MailOutline } from 'styled-icons/material/MailOutline';
import { NavLink } from "react-router-dom";
import { Github } from 'styled-icons/fa-brands/Github';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { device } from './Device';

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#202020 95%, #fff 5%);
`;

export const Section2 = styled.section`
    width: 100%;
    height: 90vh;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: linear-gradient(#fff 95%, #202020 5%);
`;

export const SocialNetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2%;
    @media ${device.laptop}{
        width: 10%;
    }
    @media ${device.tablet}{
        width: 20%;
    }
`;

export const Link = styled.a`
    margin: 0 10%;
    box-sizing: border-box;
`;

export const GithubIcon = styled(Github)`
    color: white;
    width: 100%;
    height: auto;
`;

export const LinkedinIcon = styled(Linkedin)`
    color: white;
    width: 100%;
    height: auto;
`;

export const Img = styled.img`
    width: 20%;
    @media ${device.desktop} {
        width: 10%;
    }
`;

export const ScrollImg = styled.img`
    position: absolute;
    bottom: 10vh;
    right: 10vh;
    height: 180px;
`;

export const Title = styled.h1`
    font-family: 'Cambay', sans-serif;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 0;
    color: #d4009f;
    background: linear-gradient(to top left, #d4009f, #f58bc0 );
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    @media ${device.laptop} {
        font-size: 5vw;
    }
    @media ${device.tablet} {
        font-size: 48px;
    }
`;
export const Subtitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: lighter;
    color: #f993cb;
    background: linear-gradient(to bottom, #e7529c, #f993cb );
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    @media ${device.laptop} {
        font-size: 1.5vw;
    }
    @media ${device.tablet} {
        font-size: 24px;
    }
`;

export const Subtitle2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: lighter;
    font-size: 4vw;
    color: white;
    background-image: linear-gradient(#e7529c, #d4009f);
    padding: 1vw 1vw;
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 10px;
`;

export const TextContainer = styled.div`
    align-self: center;
    @media ${device.laptop}{
        width: 50%;
    }
    @media ${device.tablet}{
        width: 70%;
    }
`;

export const P = styled.p`
    color: #202020;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    @media ${device.desktop} {
        font-size: 1vw;
    }
    @media ${device.laptop} {
        font-size: 18px;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptop}{
        width: 50%;
    }
    @media ${device.tablet}{
        width: 70%;
        margin-top: 5%;
    }
`;

export const ItemList = styled.ul`
    list-style: none;
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
`;

export const ListItem = styled.li`
    display: inline;
    box-sizing: border-box;
    color: white;
    font-family: 'Montserrat', sans-serif;
    border: 3px solid #e7529c;
    margin: 5px 10px;
    padding: 5px;
    @media ${device.desktop}{
        font-size: 1vw;
    }
    @media ${device.laptop} {
        font-size: 16px;
    }
`;

export const ItemList2 = styled.ul`
    list-style: none;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const ListItem2 = styled.li`
    box-sizing: border-box;
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 5px;
    padding: 5px;
    @media ${device.desktop}{
        font-size: 1vw;
    }
    @media ${device.laptop} {
        font-size: 16px;
    }
`;

export const ButtonLink = styled.a`
    height: 5%;
    @media ${device.laptop}{
        width: 20%;
    }
    @media ${device.tablet}{
        width: 30%;
    }
`;

export const Button = styled.button`
    background-color: #d4009f;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10%;
    width: 100%;
    height: 100%;
    color: white;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 5%;
    background-color: #303030;
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

export const FooterNavLink = styled(NavLink)`
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    &:active {
        color: white;
    }
    &:visited {
        color: white;
    }
    &:hover {
        color: #d4009f;
    }
    @media ${device.laptop}{
        width: 15%;
    }
    @media ${device.tablet}{
        width: 30%;
    }
`;

export const EmailIcon = styled(MailOutline)`
    color: white;
    height: 100%;
    margin-right: 10%;
    ${FooterNavLink}:hover &{
        color: #d4009f;
    }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

export const CardTextContainer = styled.div`
    width: 100%;
    height: 70%;
    margin: 10px 0;
    align-self: center;
`;

export const ProjectText = styled.p`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    text-align: left;
`;

export const ProjectTitle = styled.h3`
    color: white;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 5px 0 5px 0;
`;

export const ProjectLink = styled.a`
    color: #e7529c;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-align: center;
    display: block;
`;

export const ProjectTool = styled.img`
    @media ${device.laptop}{
        height: 50px;
    }
    @media ${device.tablet}{
        height: 30px;
    }
`;
export const RevealImg = styled.img`
    height: 100%;
`;

export const ToolsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    padding-bottom: 10px;
    @media ${device.laptop}{
        height: 30%;
    }
    @media ${device.tablet}{
        height: 20%;
    }
`;

export const Card = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    position: relative;
    border: 1px solid #d4009f;
    border-top: 0;
    border-bottom: 0;
    &:nth-of-type(1){
        border-left: 0;
    }
    &:nth-last-of-type(1){
        border-right: 0;
    }
`;

export const CardContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
`;

export const CardContentA = styled.div`
    height: 40%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
`;
export const CardContentB = styled.div`
    height: 60%;
    width: 100%;
    background-color: #303030;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
`;

export const CardReveal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4009f;
    position: absolute;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    width: 100%;
    height: auto;
    top: 0%;
    @media ${device.desktop} {
        ${Card}:hover &{
        top: -120%;
        }
    }
    @media ${device.laptop} {
        ${Card}:hover &{
            top: 100%;
        }
    }
`;

export const ProjectImg = styled.img`
    width: 100%;
`;

export const Hint = styled.p`
    color: #303030;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    position: absolute;
    bottom: 10vh;
    @media ${device.desktop} {
        font-size: 1vw;
    }
    @media ${device.laptop} {
        font-size: 18px;
    }
`;

export const CardContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    overflow: hidden;
    height: 50vh;
    border-radius: 5px;
    border: 2px solid #d4009f;
    @media ${device.laptop}{
        width: 50%;
        margin-top: 30vh;
    }
    @media ${device.tablet}{
        width: 70%;
        margin-top: 25vh;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #303030;
    height: 50vh;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 30vh;
    @media ${device.laptop}{
        width: 50%;
        padding: 3% 10%;
    }
    @media ${device.tablet}{
        width: 70%;
        padding: 3% 5%;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const Input = styled.input`
    background-color: white;
    box-sizing: border-box;
    margin: 1em 0 0 0;
    padding: 1em;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
`;

export const InputName = styled.input`
    background-color: white;
    box-sizing: border-box;
    padding: 1em;
    width: 50%;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    &:nth-of-type(1){
        margin-right: 0.5em;
    }
    &:nth-of-type(2){
        margin-left: 0.5em;
    }
`;

export const Textarea = styled.textarea`
    background-color: white;
    box-sizing: border-box;
    margin: 1em 0 1em 0;
    padding: 1em;
    height: 50%;
    border-radius: 5px;
    border: 0;
    font-family: 'Montserrat', sans-serif;
`;

export const SendButton = styled.button`
    background-color: #d4009f;
    box-sizing: border-box;
    margin: 0;
    padding: 1em;
    width: 100%;
    border-radius: 5px;
    border: 0;
    color: white;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    @media ${device.desktop} {
        font-size: 20px;
    }
    @media ${device.laptop} {
        font-size: 16px;
    }
`;