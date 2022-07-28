import React from "react";
import { DropdownButton } from "../Buttons/DropdownButton";
import { Dropdown } from "./DropDown";

const sampleData = new Array(7).fill('item name');

export function ButtonWithDropdown() {

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <DropdownButton onClick={() => setOpen(open => !open)}/>
                {open && <Dropdown data={sampleData}/>}
        </div>
    );
  }
  ;