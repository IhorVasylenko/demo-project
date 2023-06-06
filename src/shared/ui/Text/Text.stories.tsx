import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test title',
  text: 'Test text Test text Test text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Test title',
  text: 'Test text Test text Test text',
  theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Test title',
  text: 'Test text Test text Test text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Test title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Test title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Test text Test text Test text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Test text Test text Test text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
