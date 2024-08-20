import { render } from '@testing-library/react-native';
import { useStyles } from 'react-native-unistyles';

import { Typography } from '..';

jest.mock('react-native-unistyles', () => ({
  useStyles: jest.fn(),
}));

describe('Typography Component', () => {
  const themeMock = {
    colors: {
      textBlack: '#000000',
      textGray: '#888888',
    },
    fonts: {
      sizes: {
        sm: { fontSize: 12 },
        md: { fontSize: 16 },
        lg: { fontSize: 20 },
      },
      families: {
        regular: { fontFamily: 'RegularFont' },
        bold: { fontFamily: 'BoldFont' },
      },
    },
  };

  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({ theme: themeMock });
  });

  it('should render children text correctly', () => {
    const { getByText } = render(<Typography>Test Text</Typography>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('should apply correct default styles', () => {
    const { getByText } = render(<Typography>Default Text</Typography>);
    const textElement = getByText('Default Text');

    expect(textElement.props.style).toMatchObject({
      color: themeMock.colors.textGray,
      fontSize: 16,
      fontFamily: 'RegularFont',
    });
  });

  it('should apply correct styles for title type', () => {
    const { getByText } = render(
      <Typography type="title">Title Text</Typography>,
    );
    const textElement = getByText('Title Text');

    expect(textElement.props.style).toMatchObject({
      color: themeMock.colors.textBlack,
    });
  });

  it('should apply custom size and weight', () => {
    const { getByText } = render(
      <Typography size="lg" weight="bold">
        Custom Style Text
      </Typography>,
    );
    const textElement = getByText('Custom Style Text');

    expect(textElement.props.style).toMatchObject({
      fontSize: 20,
      fontFamily: 'BoldFont',
    });
  });

  it('should override color if color prop is provided', () => {
    const { getByText } = render(
      <Typography color="#FF0000">Custom Color Text</Typography>,
    );
    const textElement = getByText('Custom Color Text');

    expect(textElement.props.style).toMatchObject({
      color: '#FF0000',
    });
  });
});
