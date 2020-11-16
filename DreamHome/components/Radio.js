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
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={props.radioIndex === i}
            onPress={onPress}
            borderWidth={1}
            buttonInnerColor={'#6A9AB6'}
            buttonOuterColor={props.radioIndex === i ? '#000' : '#000'}
            buttonSize={20}
            buttonOuterSize={30}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 10 }}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            onPress={onPress}
            labelStyle={{
              fontSize: 15,
              color: '#000',
              fontFamily: 'Quicksand_Regular',
            }}
            labelWrapStyle={{}}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default Radio;
