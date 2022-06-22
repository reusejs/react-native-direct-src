import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';
import { removeAccessibilityPropsFromProps } from '../util/accessibility';

const getChildrenStyle = (
  {
    direction,
    theme,
    space,
    verticalSpace,
    horizontalSpace,
    cropEndSpace,
    children,
  },
  index,
) => {
  if (direction === 'vertical') {
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
      if (index === React.Children.count(children) - 1) {
        childStyle.push({
          marginBottom: 0,
        });
      }
    }
    return childStyle;
  } else {
    const childStyle = [
      {
        marginRight: theme.layoutSpace[space],
      },
    ];
    if (index === 0) {
      childStyle.push({
        marginLeft: theme.layoutSpace[space],
      });
    }
    if (verticalSpace) {
      childStyle.push({
        marginVertical: theme.layoutSpace[verticalSpace],
      });
    }
    if (cropEndSpace) {
      if (index === 0) {
        childStyle.push({
          marginLeft: 0,
        });
      }
      if (index === React.Children.count(children) - 1) {
        childStyle.push({
          marginRight: 0,
        });
      }
    }
    return childStyle;
  }
};

const Stack = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  const { direction, style, children, ...otherProps } = props;
  return (
    <View
      ref={ref}
      {...otherProps}
      style={[direction === 'horizontal' ? styles.container : {}, style]}>
      {React.Children.toArray(children).map((item, index) => (
        <View
          style={getChildrenStyle(
            { ...removeAccessibilityPropsFromProps(otherProps), direction, children, theme },
            index,
          )}
          key={index}>
          {item}
        </View>
      ))}
    </View>
  );
});

Stack.propTypes = {
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
  verticalSpace: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  cropEndSpace: PropTypes.bool,
};

Stack.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
  verticalSpace: 'none',
  cropEndSpace: false,
  direction: 'vertical',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});

export default Stack;
