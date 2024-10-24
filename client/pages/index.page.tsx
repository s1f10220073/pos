import { ChatComponent } from 'features/pos/Pos';
import { Layout } from 'layouts/Layout';
import styles from './index.module.css';

const Home = () => {
  return (
    <Layout
      render={(user) => (
        <div className={styles.container}>
          <div className={styles.title}>Hello {user.signInName}!</div>
          <ChatComponent />
        </div>
      )}
    />
  );
};

export default Home;
