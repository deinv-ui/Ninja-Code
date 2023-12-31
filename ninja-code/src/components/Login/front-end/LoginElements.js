import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index; 0;
    overflow: hidden;
    background: linear-gradient(108deg, #8a63ff 0%, #c795ff 100%);

`
    export const FormWrapper = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 400px){
            height: 80%;
        }

`

export const Icon = styled(Link)`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;
    
        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }

`
export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 480px){

            padding: 10px;
        }
`
export const Form = styled.form`
        background: #010101;
        max-width: 400px;
        height: 520px;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        margin-top: -120px;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);
       

        @media screen and (max-width: 480px){
            padding: 32px 32px;
            margin-top: -10px;

        }
`

export const FormH1 = styled.h1`
        margin-bottom: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;

`

export const FormLbl = styled.label`
        margin-bottom: 8px;
        color: #fff;
        font-size: 14px;    
`

export const FormInput = styled.input`
        margin-bottom: 32px;
        padding: 16px 16px;
        border: none;
        border-radius: 4px;   
`
export const FormBtn = styled.button`
        background: #C766FF;
        color: #fff;
        padding: 16px 0px;
        border: none;
        border-radius: 4px;  
        font-size: 20px;
        cursor: pointer;
        
        &:hover{
                transition: all 0.2s ease-in-out;
                background: #F4D03F;
                color: #010606;
            }

`

export const Text = styled.span`
        text-align: center;
        margin-top; 35px;
        color: #fff;
        font-size: 14px;
        padding-top: 30px;
        
`


