import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import SearchScreen from '../SearchScreen';
import apiReducer from '../../api/Reducer';
import {dataFilter} from '../../api/ActionCreator';
// import App from '../../../App';
import ACTION_TYPES from '../../api/ActionTypes';
import { getItem, setItem } from '../../asyncStorage/localStorage';
// import renderer from 'react-test-renderer';

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
});
it('renders default elements', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    apiReducer: {
      data: [
        {
          dt: 1519495200,
          main: {
            temp: 280.831,
            temp_min: 280.831,
            temp_max: 280.831,
            humidity: 91,
          },
          weather: [
            {
              main: 'Clear',
              icon: '01d',
            },
          ],
          wind: {
            speed: 1.01,
            deg: 192.506,
            gust: 7.87,
          },
          dt_txt: '2018-02-24 18:00:00',
        },
      ],
      error: '',
    },
  });
  render(
    <Provider store={store}>
      <SearchScreen />
    </Provider>,
  );
});
it('renders on press of search button', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    apiReducer: {
      data: [
        {
          dt: 1519495200,
          main: {
            temp: 280.831,
            temp_min: 280.831,
            temp_max: 280.831,
            humidity: 91,
          },
          weather: [
            {
              main: 'Clear',
              icon: '01d',
            },
          ],
          wind: {
            speed: 1.01,
            deg: 192.506,
            gust: 7.87,
          },
          dt_txt: '2018-02-24 18:00:00',
        },
      ],
      error: '',
    },
  });
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchScreen />
    </Provider>,
  );
  fireEvent.changeText(getByTestId('input'), "201001");
  fireEvent.press(getByTestId('search'));
});
it('renders invalid user input', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    apiReducer: {
      data: [
        {
          dt: 1519495200,
          main: {
            temp: 280.831,
            temp_min: 280.831,
            temp_max: 280.831,
            humidity: 91,
          },
          weather: [
            {
              main: 'Clear',
              icon: '01d',
            },
          ],
          wind: {
            speed: 1.01,
            deg: 192.506,
            gust: 7.87,
          },
          dt_txt: '2018-02-24 18:00:00',
        },
      ],
      error: '',
    },
  });
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchScreen />
    </Provider>,
  );
  fireEvent.changeText(getByTestId('input'), "21001");
  fireEvent.press(getByTestId('search'));
});
it("should handle a Whether being added to an API Success", () => {
  expect(
    apiReducer(
      {
        data: '',
        error: ''
      },
      {
        type: ACTION_TYPES.API_SUCCESS,
        payload: [
          {
            dt: 1519495200,
            main: {
              temp: 280.831,
              temp_min: 280.831,
              temp_max: 280.831,
              humidity: 91,
            },
            weather: [
              {
                main: 'Clear',
                icon: '01d',
              },
            ],
            wind: {
              speed: 1.01,
              deg: 192.506,
              gust: 7.87,
            },
            dt_txt: '2018-02-24 18:00:00',
          },
        ],
      },
    )
  ).toEqual({
    data: [
      {
        dt: 1519495200,
        main: {
          temp: 280.831,
          temp_min: 280.831,
          temp_max: 280.831,
          humidity: 91,
        },
        weather: [
          {
            main: 'Clear',
            icon: '01d',
          },
        ],
        wind: {
          speed: 1.01,
          deg: 192.506,
          gust: 7.87,
        },
        dt_txt: '2018-02-24 18:00:00',
      },
    ],
    error: ''
  });
});
it("should handle a Whether being added to an API Erroe", () => {
  expect(
    apiReducer(
      {
        data: '',
        error: ''
      },
      {
        type: ACTION_TYPES.API_ERROR,
        payload: [
          {
            dt: 1519495200,
            main: {
              temp: 280.831,
              temp_min: 280.831,
              temp_max: 280.831,
              humidity: 91,
            },
            weather: [
              {
                main: 'Clear',
                icon: '01d',
              },
            ],
            wind: {
              speed: 1.01,
              deg: 192.506,
              gust: 7.87,
            },
            dt_txt: '2018-02-24 18:00:00',
          },
        ],
      },
    )
  ).toEqual({
    error: [
      {
        dt: 1519495200,
        main: {
          temp: 280.831,
          temp_min: 280.831,
          temp_max: 280.831,
          humidity: 91,
        },
        weather: [
          {
            main: 'Clear',
            icon: '01d',
          },
        ],
        wind: {
          speed: 1.01,
          deg: 192.506,
          gust: 7.87,
        },
        dt_txt: '2018-02-24 18:00:00',
      },
    ],
    data: ''
  });
});
it("should handle a Whether being added to an API Default", () => {
  expect(
    apiReducer(
      {
        data: '',
        error: ''
      },
      {
        type: ACTION_TYPES.API_PENDING,
      },
    )
  ).toEqual({
    error: '',
    data: ''
  });
});
it("data filter",()=>{
  const data= [
    {
      dt: 1519495200,
      main: {
        temp: 280.831,
        temp_min: 280.831,
        temp_max: 280.831,
        humidity: 91,
      },
      weather: [
        {
          main: 'Clear',
          icon: '01d',
        },
      ],
      wind: {
        speed: 1.01,
        deg: 192.506,
        gust: 7.87,
      },
      dt_txt: '2018-02-24 18:00:00',
    },
    {
      dt: 1519495200,
      main: {
        temp: 280.831,
        temp_min: 280.831,
        temp_max: 280.831,
        humidity: 91,
      },
      weather: [
        {
          main: 'Clear',
          icon: '01d',
        },
      ],
      wind: {
        speed: 1.01,
        deg: 192.506,
        gust: 7.87,
      },
      dt_txt: '2021-12-04 00:00:00',
    },
  ]
  const filtereddata  = dataFilter(data);
  expect(filtereddata).toHaveLength(2);
});
// it('App', () => {
//   const component = renderer.create(
//     <App />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
it("Async Storage", async ()=>{
  await setItem("mykey","Brijesh");
  const myValue = await getItem('mykey')
  expect(myValue).toEqual("Brijesh");
});