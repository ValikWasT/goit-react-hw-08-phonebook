import { HomeTitle, MainBox } from './HomeStyled';
import { Link } from 'components/Header/HeaderStyled';
export const HomeContainer = () => {
  return (
    <MainBox>
      <HomeTitle>Welcome Phone book!</HomeTitle>
      <Link to="/contacts">Go to contacts.</Link>
    </MainBox>
  );
};
