
export function CardSubHeader(props) {
  const { subtext } = props;
  return (
    <h3 className='CardSubHeader'>
      {subtext}
    </h3>
  );
}
