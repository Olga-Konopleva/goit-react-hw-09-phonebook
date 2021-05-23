import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div>
      <Spinner
        type="ThreeDots"
        color="rgb(92, 164, 182)"
        height={80}
        width={80}
        timeout={3000}
        className={styles.loader}
      />
    </div>
  );
};

export default Loader;
