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
import AvatarImage from './avatar.svg';
import { IoLogoGithub } from 'react-icons/io5';

export const Body: React.FC = () => {
  const links = [
    {
      label: 'GitHub',
      link: 'https://github.com/Samuel-Lewis',
      icon: <IoLogoGithub size={32} />,
    },
  ].map((l) => (
    <Tooltip label={l.label} key={l.label} position="bottom">
      <ActionIcon
        component="a"
        href={l.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {l.icon}
      </ActionIcon>
    </Tooltip>
  ));

  return (
    <Center m="xl" style={{ height: '100%' }}>
      <Stack align="center">
        <Image width={100} src={AvatarImage} />
        <Title>Hi there.</Title>
        <Text>
          I'm a Frontend Software Engineer living and working in Australia.
        </Text>
        <Group>{links}</Group>
      </Stack>
    </Center>
  );
};
