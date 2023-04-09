import {render, screen} from '@testing-library/react';
import RoleFilterSelect, {IRoleFilterSelect} from './RoleList';

describe('<RoleFilterSelect/>', () => {
  const action = jest.fn();
  const props: IRoleFilterSelect = {
    role: '',
    onChange: action,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('toHaveAtribute', () => {
    render(<RoleFilterSelect {...props} />);
    const linkElement = screen.getByTestId('select');
    expect(linkElement).toBeEnabled();
  });
});
