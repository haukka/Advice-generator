import React from 'react';
import { act, cleanup, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import App from './App';
import axiosMock from "axios";
import axios from 'axios';

afterEach(cleanup);

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("App", () => {

  it('test the presence of the button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Nouveau conseil/i });
    expect(button).toBeInTheDocument();
  });

  it('test axios', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { slip: { advice: 'test' } } });
    render(<App />);
    const button = screen.getByRole('button', { name: /Nouveau conseil/i });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.click(button);
    });

    const resolvedSpan = await waitFor(() => screen.findByTestId('animate-letter'));
    expect(resolvedSpan).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
