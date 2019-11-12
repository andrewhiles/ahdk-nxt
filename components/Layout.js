import Header from './Header';
import Footer from './Footer';
import router from 'next/router';
import NProgress from 'nprogress';

router.onRouteChangeStart = () => NProgress.start();
router.onRouteChangeComplete = () => NProgress.done();
router.onRouteChangeError = () => NProgress.done();

export default ({ children, ...props }) => (
  <div id="root">
    <Header {...props} />
    <main>{children}</main>
    <Footer {...props} />
  </div>
);