import {render, screen} from '@testing-library/react';
import RoleFilterSelect, {IRoleFilterSelect} from './RoleList';

describe('RoleFilterSelect', () => {
  const roles = ['cook', 'driver', 'waiter'];
  const action = jest.fn();
  const props: IRoleFilterSelect = {
    role: '',
    onChange: action,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('toMatchSnapshot', () => {
    render(<RoleFilterSelect {...props} />);
    const linkElement = screen.getByTestId('select');
    expect(linkElement).toMatchSnapshot();
  });
  test('toHaveAtribute', () => {
    render(<RoleFilterSelect {...props} />);
    const linkElement = screen.getByTestId('select');
    expect(linkElement).toBeInTheDocument();
    // eslint-disable-next-line array-callback-return
    roles.map((e) => {
      const option = screen.getByText(e);
      expect(option).toBeInTheDocument();
    });
  });
});
