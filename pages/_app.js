import '../styles/globals.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import Loading from 'layouts/Loading';
import { loadingState } from 'recoils/loadingState';

const App = ({ Component, pageProps }) => {
  const isLoading = useRecoilValue(loadingState);
  return (
    <>
      <Component {...pageProps} />
      { isLoading && <Loading /> }
    </>
  );
}

const MyApp = (props) => {
  return (
    <RecoilRoot>
      <App {...props} />
    </RecoilRoot>
  )
}

export default MyApp;
