import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    console.log({eventCtrlKey: event.ctrlKey , eventMetaKey: event.metaKey});
    if(event.metaKey || event.ctrlKey) return;
    event.preventDefault();

    navigate(to);
  };

  return <a href = {to} onClick={handleClick}>{children}</a>;
}

export default Link;
