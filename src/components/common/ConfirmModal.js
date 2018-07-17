import React from 'react';
import { Text, View, Modal } from 'react-native';
import { PurchaseButton } from './PurchaseButton';
import { CardSection } from './CardSection';

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {

  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestCloe={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}}
          </Text>
        </CardSection>
        <CardSection>
          <PurchaseButton onPress={onAccept}>
            Yes
          </PurchaseButton>
          <PurchaseButton onPress={onDecline}>
            No
          </PurchaseButton>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { ConfirmModal };
