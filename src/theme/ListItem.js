import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const listItemTheme = {
    'NativeBase.InputGroup': {
      'NativeBase.Icon': {
        paddingRight: 5,
      },
      'NativeBase.IconNB': {
        paddingRight: 5,
      },
      'NativeBase.Input': {
        paddingHorizontal: 5,
      },
      flex: 1,
      borderWidth: null,
      margin: -10,
      borderBottomColor: 'transparent',
    },
      'NativeBase.CheckBox': {
        marginLeft: -10,
      },
      '.itemHeader': {
        borderBottomWidth: variables.borderWidth,
        marginLeft: null,
        padding: variables.listItemPadding,
        paddingLeft: variables.listItemPadding + 5,
        paddingTop: (Platform.OS === 'ios') ? variables.listItemPadding + 20 : undefined,
        paddingBottom: (Platform.OS === 'android') ? variables.listItemPadding + 20 : undefined,
        flexDirection: 'row',
        borderColor: variables.listBorderColor,
        'NativeBase.Text': {
          fontSize: 14,
          color: (Platform.OS === 'ios') ? undefined : variables.listNoteColor,
        },
      },
      '.itemDivider': {
        borderBottomWidth: null,
        marginLeft: null,
        padding: variables.listItemPadding,
        paddingLeft: variables.listItemPadding + 5,
        backgroundColor: variables.listDividerBg,
        flexDirection: 'row',
        borderColor: variables.listBorderColor,
      },
      '.selected': {
        'NativeBase.Left': {
          'NativeBase.Text': {
            color: variables.brandPrimary
          }          
        }
      },
      'NativeBase.Left': {
        'NativeBase.Body': {
          'NativeBase.Text': {
            '.note': {
              color: variables.listNoteColor,
              fontWeight: '200',
            },
            fontWeight: '600',
          },
          marginLeft: 10,
          alignItems: null,
          alignSelf: null,
        },
        'NativeBase.Icon': {
          width: variables.iconFontSize - 10,
          fontSize: variables.iconFontSize - 10,
        },
        'NativeBase.IconNB': {
          width: variables.iconFontSize - 10,
          fontSize: variables.iconFontSize - 10,
        },
        'NativeBase.Text': {
          marginLeft: 10,
          alignSelf: 'center',
        },
        flexDirection: 'row',
      },
      'NativeBase.Body': {
        'NativeBase.Text': {
          marginHorizontal: variables.listItemPadding,
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
        },
        alignSelf: null,
        alignItems: null,
      },
      'NativeBase.Right': {
        'NativeBase.Badge': {
          alignSelf: null,
          height: 24,
          borderRadius: 12,
          paddingHorizontal: 4,
          'NativeBase.Text': {
            backgroundColor: 'transparent',
            fontSize: variables.fontSizeBase - 1,
          },
        },
        'NativeBase.Button': {
          alignSelf: null,
          '.transparent': {
            'NativeBase.Text': {
              color: variables.topTabBarActiveTextColor,
            },
          },
        },
        'NativeBase.Icon': {
          alignSelf: null,
          fontSize: variables.iconFontSize - 8,
          color: variables.listBorderColor,
        },
        'NativeBase.IconNB': {
          alignSelf: null,
          fontSize: variables.iconFontSize - 8,
          color: variables.listBorderColor,
        },
        'NativeBase.Text': {
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
          alignSelf: null,
        },
        'NativeBase.Thumbnail': {
          alignSelf: null,
        },
        'NativeBase.Image': {
          alignSelf: null,
        },
        'NativeBase.Radio': {
          alignSelf: null,
          marginRight: 10
        },
        'NativeBase.Checkbox': {
          alignSelf: null,
        },
        'NativeBase.Switch': {
          alignSelf: null,
        },
        padding: null,
        flex: 0.28,
      },
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200',
        },
        alignSelf: null,
      },
      '.last': {
        marginLeft: -(variables.listItemPadding + 5),
        paddingLeft: (variables.listItemPadding + 5) * 2,
        top: 1,
      },
      '.avatar': {
        borderBottomWidth: 1,
        marginLeft: 50,
        'NativeBase.Body': {
        },
        'NativeBase.Thumbnail': {
          marginLeft: -40,
        },
      },
      alignItems: 'center',
      flexDirection: 'row',
      paddingRight: variables.listItemPadding + 5,
      paddingVertical: variables.listItemPadding,
      marginLeft: variables.listItemPadding + 5,
      borderBottomWidth: 1,
      backgroundColor: variables.listBg,
      borderColor: variables.listBorderColor,
  };


  return listItemTheme;
};
