import React from 'react';
import { Text, View, TouchableHighlight,  useWindowDimensions, Image, ScrollView } from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import MaskedView from "@react-native-community/masked-view";
import Svg, { Path } from "react-native-svg";
const logoUri = `http://66.media.tumblr.com/86b941b3445b80a518ea51208f48ab35/tumblr_ntpi99a6Pl1uounv1o1_500.png`;
        const windowWidth = useWindowDimensions().width;

        const imageAspectWidth = 375;
        const imageAspectHeight = 332;

        const curveAdjustment = 40;
        const maskHeight = (imageAspectHeight / imageAspectWidth) * windowWidth;

        const scaleFactor = imageAspectWidth / imageAspectHeight;
        const scaledHeight = scaleFactor * maskHeight;

        const controlPointX = windowWidth / 2.0;
        const controlPointY = scaledHeight + curveAdjustment;

        const curveCenterPointY = (controlPointY - maskHeight) / 2;



export default class DemoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <View style={styles.main}>
            <MaskedView
              style={[
                styles.mask,
                {
                  height: controlPointY - curveCenterPointY,
                },
              ]}
              maskElement={
                <Svg height="100%" width="100%">
                  <Path
                    d={`M0 0 L${windowWidth} 0 L${windowWidth} ${maskHeight} Q${controlPointX} ${controlPointY} 0 ${maskHeight} Z`}
                    fill={"#fff"}
                  />
                </Svg>
              }
            >
              <Image source={{ uri: logoUri }} style={styles.image} />
            </MaskedView>
            <Text>{"Tag line"}</Text>
          </View>
        );
      }
}