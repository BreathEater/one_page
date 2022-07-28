import { Layers1 } from '../Logos/Layers1';
import { CardSubHeader } from "./CardSubHeader";
import { CardHeader } from "./CardHeader";

export function Card(props) {
  const { text, subtext } = props;

  return (
    <div className='Card'>
      <Layers1></Layers1>
      <CardHeader text={text} subtext={subtext} />
      <CardSubHeader subtext={subtext} />
    </div>
  );
}
;
