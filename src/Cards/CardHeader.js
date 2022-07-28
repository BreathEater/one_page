
export function CardHeader(props) {
  const { text } = props;
  return (
    <h1 className='CardHeader'>
      <b>{text}</b>
    </h1>
  );
}
