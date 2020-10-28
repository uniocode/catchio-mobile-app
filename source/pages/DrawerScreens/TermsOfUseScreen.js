import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ScrollContainer from '../../atoms/ScrollContainer';
import {MediumText, SmallText, TextWrapper} from '../../atoms/TextAtoms';
import Colors from '../../../specs/Colors';

const TermsOfUseScreen = () => {
  return (
    <ScrollContainer fullHeight={true}>
      <TextWrapper marginTop="30px">
        <MediumText color={Colors.pastelCoral}>Terms of Use</MediumText>
      </TextWrapper>
      <TextWrapper
        align="flex-start"
        paddingLeft="20px"
        paddingRight="20px"
        marginTop="50px">
        <SmallText marginTop="10px" color={Colors.darkGray} size="16px">
          Effective as of 26 August 2020
        </SmallText>
        <SmallText
          marginTop="10px"
          color={Colors.pastelCoral}
          size="18px"
          fontWeight="bold">
          1. General Information Regarding These Terms of Use
        </SmallText>
        <SmallText marginTop="10px" color={Colors.darkGray} size="16px">
          Master terms: Welcome, and thank you for your interest in Creative
          Commons (“Creative Commons,” “CC,” “we,” “our,” or “us”). Unless
          otherwise noted on a particular site or service, these master terms of
          use (“Master Terms”) apply to your use of all of the websites that
          Creative Commons Corporation operates. These include
          https://creativecommons.org, https://wiki.creativecommons.org,
          https://network.creativecommons.org,
          https://search.creativecommons.org, https://labs.creativecommons.org,
          http://openpolicynetwork.org, http://open4us.org,
          https://rightsback.org, http://teamopen.cc, and
          http://thepowerofopen.org, together with all other subdomains thereof,
          (collectively, the “Websites”). The Master Terms also apply to all
          products, information, and services provided through the Websites,
          including without limitation the license chooser, legal tools, the
          CCID service available at https://login.creativecommons.org/login (“CC
          Login Service”), and the CC Global Network community website (together
          with the Websites, the “Services”).
        </SmallText>
        <SmallText
          marginTop="10px"
          color={Colors.pastelCoral}
          size="18px"
          fontWeight="bold">
          2. Your Agreement to the Terms
        </SmallText>
        <SmallText marginTop="10px" color={Colors.darkGray} size="16px">
          BY CLICKING “I ACCEPT” OR OTHERWISE ACCESSING OR USING ANY OF THE
          SERVICES (INCLUDING THE LICENSES, PUBLIC DOMAIN TOOLS, AND CHOOSERS),
          YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND
          BY THE TERMS. By clicking “I ACCEPT” or otherwise accessing or using
          any Services you also represent that you have the legal authority to
          accept the Terms on behalf of yourself and any party you represent in
          connection with your use of any Services. If you do not agree to the
          Terms, you are not authorized to use any Services. If you are an
          individual who is entering into these Terms on behalf of an entity,
          you represent and warrant that you have the power to bind that entity,
          and you hereby agree on that entity’s behalf to be bound by these
          Terms, with the terms “you,” and “your” applying to you, that entity,
          and other users accessing the Services on behalf of that
          entity.Human-readable summary of Sec 2: Please read these terms and
          only use our sites and services if you agree to them.
        </SmallText>
        <SmallText
          marginTop="10px"
          color={Colors.pastelCoral}
          size="18px"
          fontWeight="bold">
          3. Changes to the Terms
        </SmallText>
        <SmallText marginTop="10px" color={Colors.darkGray} size="16px">
          BFrom time to time, Creative Commons may change, remove, or add to the
          Terms, and reserves the right to do so in its discretion. In that
          case, we will post updated Terms and indicate the date of revision. If
          we feel the modifications are material, we will make reasonable
          efforts to post a prominent notice on the relevant Website(s) and
          notify those of you with a current CC Login Service account via email.
          All new and/or revised Terms take effect immediately and apply to your
          use of the Services from that date on, except that material changes
          will take effect 30 days after the change is made and identified as
          material. Your continued use of any Services after new and/or revised
          Terms are effective indicates that you have read, understood, and
          agreed to those Terms. Human-readable summary of Sec 3: These terms
          may change. When the changes are important, we will put a notice on
          the website. If you continue to use the sites after the changes are
          made, you agree to the changes.
        </SmallText>
      </TextWrapper>
    </ScrollContainer>
  );
};

export const screenOptions = ({navigation}) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    headerTitle: 'CATHIO',
    headerTintColor: Colors.pastelCoral,
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} color={Colors.pastelCoral} size={25} />
      </TouchableOpacity>
    ),
  };
};

export default TermsOfUseScreen;
