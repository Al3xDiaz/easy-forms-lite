import styled from 'styled-components';

export const Label =styled.label<{$name:string}>`
    grid-area: ${props=>props.$name};
    position: relative;
    display: flex;
    background-color: var(--dark-backgrund, var(--background, #fff));
    outline: 1px solid var(--primary,#1CB0F6);
    border-radius: 10px;
    width: 100%;

    & input, & textarea {
        resize: none;
        border-radius: 10px;
        border: none;
        padding:1rem;
        margin: 0;
        width: 100%;
        padding: 1rem;
        outline: 0;
        border: none;
    }
    & input + span.label, & textarea + span.label, input > span.icon, & textarea > span.icon {
        position: absolute;
        background-color: var(--dark-backgrund, var(--background, #fff));
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        bottom: 25%;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }
    & input:focus + span.label, & input:valid + span.label, & textarea:focus + span.label, & textarea:valid + span.label {
        bottom: -.5rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & input:valid + span.label ,& textarea:valid + span.label {
        color: green;
    }
    & .invalid input:invalid + span.label, &.invalid textarea:invalid + span.label {
        color: red;
    }
    & span.icon {
        position: absolute;
        left: auto;
        right: 1rem;
        top: 1rem;
    }
`;
export const Button = styled.button`
& {
    position: relative;
    appearance: button;
    background-color: var(--primary--bg,#189ad6);
    border: solid transparent;
    border-radius: 10px;
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
    border-radius: 10px;
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