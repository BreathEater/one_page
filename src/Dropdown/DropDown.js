export function Dropdown({data = []}) {
    return (
      <div className="Dropdown">
          <ul>
            {data.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))};
          </ul>
      </div>
    );
  }
  ;