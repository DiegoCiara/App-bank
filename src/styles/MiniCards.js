import styled from "styled-components/native";




export const ViewMicroCards = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const TableMicroCards = styled.View`
  display: row;
  flex-direction: row-reverse;
  width: 90%;
  height: 50px;
  justify-content: space-around;
  margin-top: 7%;
  margin-bottom: 7%;
`;

export const ContentMicroCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MicroCard = styled.View`
  width: 50px;
  max-height: 50px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 5px 5px rgba(170, 170, 170, 0.6);
  border-radius: 10px;
  justify-content: center;
  align-items: center;

`;


export const ContentMiniCard = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const ContentTable = styled.View`  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  padding-top: 0 ;
  background-color: #f3f3f3;
  margin: 5%;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(170, 170, 170, 0.6);
  margin-bottom: 100px;

`;
export const Minicard = styled.View`
  flex-direction: row;
  width: 90%;
  height: 65px;
  background-color: #ffff;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 5px rgba(170, 170, 170, 0.6);

  padding: 20px;
  margin:2%
`;

