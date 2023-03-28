import React from 'react';

import { Center, Title, Image, Stack, Text, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

import AvatarImage from './avatar.svg';

export const Body: React.FC = () => {
  return (
    <Center
      sx={(theme) => ({
        height: '100%',
        backgroundImage: theme.fn.gradient({
          from: theme.colors.night[9],
          to: '#000a0e',
          deg: 180,
        }),
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
          variant="subtle"
        >
          GitHub
        </Button>
      </Stack>
    </Center>
  );
};
