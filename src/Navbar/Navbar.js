import { GetStartedButton } from "../Buttons/GetStartedButton";
import { Button } from "../Buttons/Button";
import { Logo1 } from "../Logos/Logo1";
import { ButtonWithDropdown } from "../Dropdown/ButtonWithDropdown";

export function Navbar() {
  return (
    <div className='Navbar'>
      <Logo1></Logo1>
      <Button text='Home'></Button>
      <Button text='About'></Button>
      <Button text='Services'></Button>
      <Button text='Portfolio'></Button>
      <Button text='Team'></Button>
      <Button text='Pricing'></Button>
      <ButtonWithDropdown/>
      <Button text='Contact'></Button>
      <GetStartedButton />
    </div>);
}
;
