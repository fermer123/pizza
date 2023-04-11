import {fireEvent, render, screen} from '@testing-library/react';
import AddNewItem, {IAddNewItem} from './AddNewItem';
import style from './AddNewItem.module.scss';

describe('AddNewItem', () => {
  const action = jest.fn();
  const customProps: IAddNewItem = {
    title: 'добавить',
    addNewEmployee: action,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('toMatchSnapshot', () => {
    render(<AddNewItem {...customProps} />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toMatchSnapshot();
  });
  test('toHaveAttribute', () => {
    render(<AddNewItem {...customProps} />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toHaveClass(style.btn);
  });
  test('click btn', () => {
    render(<AddNewItem addNewEmployee={action} title='добавить' />);
    const linkElement = screen.getByRole('button');
    fireEvent.click(linkElement);
    expect(action).toHaveBeenCalled();
  });
});
