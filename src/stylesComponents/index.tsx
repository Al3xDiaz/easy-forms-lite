import styled from 'styled-components';

export const Label =styled.label<{$name:string}>`
    grid-area: ${props=>props.$name};
    position: relative;
    display: flex;
    background-color: #ffffff00;

    & .input {
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }
    & .input + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }
    & .input + span + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        right: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: pointer;
        transition: 0.3s ease;
    }
    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }
    & .input:focus + span, & .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    &.invalid .input:invalid + span {
        color: red;
    }


    & .input + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .input:focus + span, & .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    & .textarea {
        resize: none;
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }

    & .textarea + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .textarea:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .textarea:focus + span, & .textarea:valid + span {
        top: 4rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .textarea:valid + span {
        color: green;
    }
    &.invalid .textarea:invalid + span {
        color: red;
    }
`;
export const Button = styled.button`
& {
    appearance: button;
    background-color: var(--primary--bg,#189ad6);
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    text-align: center;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    padding: .4rem;
    width: 100%;
}
&:after {
    background-clip: padding-box;
    background-color: var(--primary,#1CB0F6);
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}

&:main, &:focus {
    user-select: auto;
}

&:hover:not(:disabled) {
    filter: brightness(1.1);
}

&:disabled {
    cursor: auto;
}

&:active:after {
    border-width: 0 0 0px;
}

&:active {
    padding-bottom: .3rem;
}
`;