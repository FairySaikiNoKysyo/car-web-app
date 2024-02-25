import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Bars height="60" width="60" color="#bedbb0" ariaLabel="bars-loading" />
    </LoaderWrapper>
  );
};
