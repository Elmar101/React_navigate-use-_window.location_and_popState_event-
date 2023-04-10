import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

const classes = classNames('text-blue-500');

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  

  const handleClick = (event) => {
    console.log({eventCtrlKey: event.ctrlKey , eventMetaKey: event.metaKey});
    if(event.metaKey || event.ctrlKey) return;
    event.preventDefault();

    navigate(to);
  };

  return <a className = {classes} href = {to} onClick={handleClick}>{children}</a>;
}

export default Link;
