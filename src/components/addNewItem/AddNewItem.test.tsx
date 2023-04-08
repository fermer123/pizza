import {render, screen} from '@testing-library/react';
import AddNewItem from './AddNewItem';

describe('<AddNewItem/>', () => {
  test('expect title', () => {
    const action = jest.fn();
    render(<AddNewItem title='добавить' addNewEmployee={action} />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
  });
});
