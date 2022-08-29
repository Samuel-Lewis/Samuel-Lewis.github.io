import {
  Center,
  Title,
  Image,
  Stack,
  Text,
  Group,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import React from 'react';
import AvatarImage from './avatar_round.svg';
import { IoLogoGithub } from 'react-icons/io5';

export const Body: React.FC = () => {
  const links = [
    {
      label: 'GitHub',
      link: 'https://github.com/Samuel-Lewis',
      icon: <IoLogoGithub size={32} />,
    },
  ].map((l) => (
    <Tooltip label={l.label} key={l.label}>
      <ActionIcon>{l.icon}</ActionIcon>
    </Tooltip>
  ));

  return (
    <Center m="xl">
      <Stack align="center">
        <Image width={100} src={AvatarImage} />
        <Title>Hi there.</Title>
        <Text>I'm a Software Engineer based in Australia.</Text>
        <Group>{links}</Group>
      </Stack>
    </Center>
  );
};
