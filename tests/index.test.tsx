import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';

describe('Landing Page', () => {
  it('renders introtext', () => {
    render(<IndexPage />);
    const introText = screen.queryByText('Engineer & Developer');
    expect(introText).toBeInTheDocument();
  });

  it('fails render copyright text', () => {
    render(<IndexPage />);
    const copyFalse = screen.queryByText('Copyright');
    expect(copyFalse).not.toBeInTheDocument();
  });

  it('render copyright icon', () => {
    render(<IndexPage />);
    const copyRight = screen.queryByText('&copy;');
    expect(copyRight).not.toBeInTheDocument();
  });
});
