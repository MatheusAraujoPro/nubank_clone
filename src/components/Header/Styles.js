import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
  position: absolute;
  top: 0;
  left: 30;
  flex-direction: row;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px
  color: #FFF;
  font-weight: bold;
  font-family: Montserrat;
  margin-left: 8px;
`;

export const IconContainer = styled.View`  
  height: 40px;
  width: 110px;
  border-radius: 1;
  margin-left: 115px;
  flex-direction: row;
  justify-content: space-between;

`;

export const IconView = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.3);
  height: 50px;
  width: 50px;
  border-radius: 100;
  align-items: center;
  justify-content: center;
 
`;

