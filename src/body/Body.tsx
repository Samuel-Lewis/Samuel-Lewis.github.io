import React from 'react';

import { Center, Title, Image, Stack, Text, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

import AvatarImage from './avatar.svg';

export const Body: React.FC = () => {
  return (
    <Center
      sx={(theme) => ({
        height: '100%',
        backgroundColor: theme.colors.night[9],
      })}
    >
      <Stack align="center">
        <Image width={100} src={AvatarImage} />
        <Title>Hi there.</Title>
        <Text>
          I am a Frontend Software Engineer living and working in Australia.
        </Text>
        <Button
          leftIcon={<IconBrandGithub />}
          component="a"
          href="https://github.com/Samuel-Lewis"
          target="_blank"
          rel="noopener noreferrer"
          color="night.4"
          variant="subtle"
        >
          GitHub
        </Button>
      </Stack>
    </Center>
  );
};
