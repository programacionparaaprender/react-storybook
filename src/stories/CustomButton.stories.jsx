import CustomButton from '../components/custom-button/custom-button';

export default {
  title: 'Components/Button',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: {
        type: 'inline-check',
      },
      options: ['button', 'button--primary', 'button--secondary'],
    },
  },
};

export const Primary = {
  args: {
    classes: ['button', 'button--primary'],
    title: 'Button Primary',
  },
};

export const Secondary = {
  args: {
    classes: ['button', 'button--secondary'],
    title: 'Button Secondary',
  },
};