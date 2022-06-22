import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getChildrenStyle = (
  {theme, space, horizontalSpace, cropEndSpace, data},
  index,
) => {
  const childStyle = [
    {
      marginBottom: theme.layoutSpace[space],
    },
  ];
  if (index === 0) {
    childStyle.push({
      marginTop: theme.layoutSpace[space],
    });
  }
  if (horizontalSpace) {
    childStyle.push({
      marginHorizontal: theme.layoutSpace[horizontalSpace],
    });
  }
  if (cropEndSpace) {
    if (index === 0) {
      childStyle.push({
        marginTop: 0,
      });
    }
    if (index === data.length - 1) {
      childStyle.push({
        marginBottom: 0,
      });
    }
  }
  return childStyle;
};

const StackList = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  return (
    <FlatList
      ref={ref}
      {...props}
      style={StyleSheet.flatten([
        {backgroundColor: theme.brandColor.background},
        props.style,
      ])}
      renderItem={(child) => (
        <View style={getChildrenStyle({...props, theme}, child.index)}>
          {props.renderItem(child)}
        </View>
      )}
    />
  );
});

StackList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  horizontalSpace: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  cropEndSpace: PropTypes.bool,
  ...FlatList.propTypes,
};

StackList.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
  cropEndSpace: true,
};

export default StackList;
