import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LogoSite = styled(LazyLoadImage)`
  max-width: 200px;
  object-position: center;
  object-fit: cover;
  padding: 40px 20px;
`;
