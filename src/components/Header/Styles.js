import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #999;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row
  max-height: 80px;
  border-width: 1
  border-color: red
  position: absolute
  left: 30px;
  top: 10px;
`;

export const ContentLeft = styled.View`
  flex: 1;
  max-width: 40px; 
`;

export const Content2 = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;