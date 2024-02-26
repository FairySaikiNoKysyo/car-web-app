import styled from 'styled-components';

export const ItemWrapper = styled.div`
  max-width: 278px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  padding: 0;
  width: 278px;
  height: 268px;
  overflow: hidden;
  background: ${p => p.theme.colors.imgBgn} ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radius.m};
  margin-bottom: ${p => p.theme.spacing(3.5)};
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;

export const ButtonHeart = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: 14px;
  right: 14px;
  padding: 0;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  svg {
    width: 18px;
    height: 18px;
    stroke: ${p =>
      p['data-favorite'] === true
        ? p.theme.colors.lightBlue
        : p.theme.colors.iconStroke};
    fill: ${p =>
      p['data-favorite'] === true ? p.theme.colors.lightBlue : 'transparent'};
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const AccentText = styled.span`
  color: ${p => p.theme.colors.lightBlue};
`;

export const DescriptionList = styled.ul`
   display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: start;
  margin-bottom: auto;
`;


export const CardButton = styled.button`
  font-weight: 600;
  line-height: 1.4;
  width: 100%;
  padding: ${p => p.theme.spacing(3)} 0;
  border: none;
  border-radius: ${p => p.theme.radius.s};
  background-color: ${p => p.theme.colors.lightBlue};
  color: ${p => p.theme.colors.white};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
  }
`;
export const DescriptionInfo = styled.li`
  font-weight: 400;
  font-size: 12px;
  color: #12141780;

  position: relative;

  &::after {
    content: ' ';
    position: static;
    width: 16px;
    height: 0;
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 0px 6px;
    transform: rotate(90deg);
    border: 1px solid rgba(18, 20, 23, 0.1);
  }

  &:last-child::after {
    display: none;
  }
`;