import { Link } from 'react-router-dom';

const Home = () => {
  const mainClassName =
    'flex items-center justify-center | py-8 | rounded-lg border border-red-400 | hover:-translate-y-1 duration-200';

  return (
    <div className="grid grid-cols-4 gap-8">
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/use-ref'} className={mainClassName}>
        useRef()
      </Link>
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/use-effect'} className={mainClassName}>
        useEffect()
      </Link>
      <Link to={'/tic-tac-toe'} className={mainClassName}>
        Tic-tac-toe
      </Link>
    </div>
  );
};

export default Home;
