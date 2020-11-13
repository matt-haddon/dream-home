import React from 'react';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const Radio = (props) => {
  const onPress = (i) => props.setRadioIndex(i);
  return (
    <RadioForm formVertical={true} animation={true}>
      {/* To create radio buttons, loop through your array of options */}
      {props.radio_props.map((obj, i) => (
        <RadioButton key={i}>
          {/*  You can set RadioButtonLabel before RadioButtonInput */}
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            onPress={onPress}
            labelStyle={{ fontSize: 12, color: '#000' }}
            labelWrapStyle={{}}
          />
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={props.radioIndex === i}
            onPress={onPress}
            borderWidth={1}
            buttonInnerColor={'#2196f3'}
            buttonOuterColor={props.radioIndex === i ? '#2196f3' : '#000'}
            buttonSize={30}
            buttonOuterSize={40}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 10 }}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default Radio;
