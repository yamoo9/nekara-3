import { screen, fireEvent, userEvent, waitFor } from '@storybook/testing-library';
import { delay } from '@/utils';
import { PureApp, useRetryCountUp } from './app';


export default {
  title: 'RandomCountUp/App',
  component: PureApp,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
        { name: 'darkred', value: '#350606' },
      ],
    },
    controls: {
      hideNoControlsWarning: true,
      sort: 'requriedFirst', // none | alpha | requiredFirst
    },
  },
};

const Template = args => {
  const retryProps = useRetryCountUp();
  return <PureApp {...args} {...retryProps} />
};


export const App = Template.bind({});
App.args = PureApp.defaultProps;


export const UserClickSimulation = Template.bind({});
UserClickSimulation.args = PureApp.defaultProps;
UserClickSimulation.play = async () => {
  const retryButton = screen.getByText('재실행');
  await delay(2000);
  await fireEvent.click(retryButton);
  await delay(1500);
  await userEvent.click(retryButton);
  // await delay();
  // await userEvent.click(retryButton);
}