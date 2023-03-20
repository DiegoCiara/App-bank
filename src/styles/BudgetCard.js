import styled from "styled-components/native";


export const BugetCard = styled.View`
  display: flex;
  flex-direction: column;
  height: 15%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2%;
  margin: 5%;
  justify-content: space-between;
  box-shadow: 0 5px 5px rgba(170, 170, 170, 0.6);
 -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
 `;
export const ContentValue = styled.View`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  justify-content: space-between;
`;
export const JustTitleValue = styled.View`
  justify-content: center;
`;
export const TitleValue = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
`;
export const  ViewRigthIcon = styled.View`
  size: 20px;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.View`
  height: 1px;
  background-color: #b8b8b8;
  margin: 0%;
  padding: 0%;
`;

export const ContentBudget = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 2% 2%  0
  
  `;