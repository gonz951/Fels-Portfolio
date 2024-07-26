import { useRouteError } from 'react-router-dom';
import '../components/styles/pages.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='card'>
      <h2>Oops!</h2>
      <p className='darker'>Sorry, an unexpected error has occurred.</p>
      <p className='darker'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
