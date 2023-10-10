import React from 'react';
import { BaseButton ,PrimaryBtw,SecondaryBtw,Outlinebtw } from './button.style';


function Button({ children, btwType = 'Primary', btwdisabled=false, ...rest }) {

    const CoustomBtw = () => {
        switch (btwType) {
            case 'Primary':
                return PrimaryBtw;
            case 'Secondary':
                return SecondaryBtw;
            case 'Outline':
                return Outlinebtw;
        }
    }

    const AllCoustombtw = CoustomBtw();

    return (
        <div>
            <AllCoustombtw disabled={btwdisabled} {...rest}>
                {children}
            </AllCoustombtw>
        </div>
    );
}

export default Button;