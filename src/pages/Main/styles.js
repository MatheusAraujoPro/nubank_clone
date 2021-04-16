import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #9400d3;
  justify-content: center;
`;

export const CardScroll = styled.ScrollView`
  margin-top: 10px
`;


export const CardContainer = styled.ScrollView`
  height: 400px;
  margin: 0 15px; 
  left: 0;
  position: absolute
  right: 0;
  top: 80px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 10px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`;

export const DescriptionHeader = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  margin-bottom: 30px;
`;
export const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #999;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color: #13b2ba;
`;

export const Description = styled.Text`
  font-size: 25px;
  margin-top: 3px;
  font-family: notoserif;
  color: #13b2ba;
`;

export const SubDescription = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #999;
`;

export const SubDescriptionValor = styled.Text`
  font-size: 13px;
  color: #54e320;
  font-weight: bold;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background: #eee;
  border-radius: 4px;
`;
export const Annotation = styled.Text`
  margin-left: 30px;
  margin-right: 25px;
  justify-content: center;
  font-size: 12px;
  color: #999e9e;
`;



