import styled from 'styled-components';


export const ModalWrapper = styled.div`
  box-sizing: border-box;
  width: 541px;
  height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;

  position: relative;

  &.custom-modal {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 10000;

    position: fixed;
  }
`;

export const CLoseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;

  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  stroke: #121417;
  stroke-width: 1.8px;
  transition: 200ms;

  &:hover,
  :focus {
    width: 26px;
    height: 26px;
  }
`;

export const AdvertImg = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  background: #f3f3f2;
  margin-bottom: 14px;
`;

export const AdvTitle = styled.h2`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: #121417;

  span {
    color: #3470ff;
  }
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  color: #121417;
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 168px;
  height: 44px;
  background: #3470ff;
  border-radius: 12px;
  border: none;
  padding: 12px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 24px;

  &:hover,
  :focus {
    background: #0b44cd;
  }
`;
export const AccentNumberStyled = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
export const ConditionsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const SubTitleModalStyled = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 24px;
`;
export const AccWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InfoModalAccWrapperStyl = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
`;
export const InfoModalItemStyled = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;

  &:not(:last-child)::after {
    content: '';
    margin-left: 6px;
    border-right: 1px solid #1214171a;
    text-overflow: nowrap;
  }
`;
export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
`;

export const TextConditionsWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`;
export const RentalConditionStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;

  font-size: 12px;
  line-height: 1.5;
  color: #121417;
`;
export const ConditionStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 9999;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: start;
  margin-bottom: 14px;
`;

export const StyledListItem = styled.li`
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