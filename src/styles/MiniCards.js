import styled from "styled-components/native";




export const ViewMicroCards = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const ContentMicroCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MicroCard = styled.View`
  width: 50px;
  max-height: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #c60000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

`;


export const Minicard = styled.View`
  flex-direction: row;
  width: 90%;
  height: 65px;
  background-color: #ffff;
  border: 1px solid #c60000;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin:5%
`;