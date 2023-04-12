import React, { AnchorHTMLAttributes } from 'react';

import { Stack, Title, Text, Divider, Center } from '@mantine/core';

import { ProjectCard } from './ProjectCard';

const A: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const projects = [
  {
    title: 'Party Packrat',
    imgSrc: '/project-images/party-packrat.png',
    tags: ['NextJS', 'Firebase', 'Typescript'],
    year: 2023,
    links: {
      github: 'samuel-lewis/party-packrat',
      live: 'https://party-packrat.vercel.app/',
    },
    description: (
      <Text>
        A lightweight web app used to track inventories for your tabletop RPG
        games. It has real time updates across clients while keeping minimal
        server overheads. Built on{' '}
        <A href="https://firebase.google.com/">GCPs Firebase</A>, using the{' '}
        <A href="https://nextjs.org/">NextJS</A> framework.
      </Text>
    ),
  },
  {
    title: '@samuel-lewis Design System',
    imgSrc: '/project-images/design-system.png',
    tags: ['React', 'Monorepo', 'Design System'],
    year: 2023,
    links: {
      github: 'samuel-lewis/design-system',
      live: 'https://www.npmjs.com/package/@samuel-lewis/components',
    },
    description: (
      <Text>
        A collection of published packages used across my projects. Includes
        reusable React components, javascript utility library and opinionated
        build configurations. Over-engineered as a{' '}
        <A href="https://turbo.build/">Turbo</A> monorepo with automated
        testing, dependency management, changeset management and publishing
      </Text>
    ),
  },
  {
    title: 'Over9',
    imgSrc: '/project-images/over9.png',
    year: 2022,
    links: {
      github: 'samuel-lewis/over9',
      live: 'https://samuel-lewis.com/over9/',
    },
    description: (
      <Text>
        A fun project to collate and rank movies, games, (and more coming) that
        I have given a score of 9/10 or higher.
      </Text>
    ),
  },
  {
    title: 'Iron Assembly',
    imgSrc: '/project-images/iron-assembly.png',
    year: 2021,
    tags: ['React', 'Typescript'],
    links: {
      github: 'samuel-lewis/iron-assembly',
      live: 'https://ironassembly.com/',
    },
    description: (
      <Text>
        A content aggregation website for an online community of content
        creators. Built with Typescript and React, with a focus on performance,
        security and continuous deployment.
      </Text>
    ),
  },
  {
    title: 'MC Status',
    imgSrc: '/project-images/mc-status.png',
    year: 2021,
    links: {
      github: 'samuel-lewis/mc-status',
      live: 'https://samuel-lewis.com/mc-status/',
    },
    description: (
      <Text>
        Lightweight web app for status checking game servers and getting current
        running statistics. Built with a focus on load balancing, running a
        &quot;status&quot; page, and minimal dependencies.
      </Text>
    ),
  },
  {
    title: 'Snake Tron',
    imgSrc: '/project-images/snake-tron.png',
    year: 2021,
    tags: ['Simulation', 'AI', 'Code Fights'],
    links: {
      github: 'samuel-lewis/snake-tron',
      live: 'https://samuel-lewis.com/snake-tron',
    },
    description: (
      <Text>
        Snake Tron is a platform for developers to design and develop
        algorithm&apos;s to fight against each other. The game is a combination
        of the classic game of{' '}
        <A href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)">
          Snake
        </A>{' '}
        and the almost as classic game of{' '}
        <A href="https://en.wikipedia.org/wiki/Tron_(video_game)">Tron</A>.
        Where two or more players are on a grid, trying to cause the other
        players to crash.
      </Text>
    ),
  },
  {
    title: 'Minecraft Build Visualiser',
    imgSrc: '/project-images/minecraft-builder.png',
    year: 2022,
    tags: ['Procedural animation', 'Python'],
    links: {
      github: 'samuel-lewis/minecraft-builder',
    },
    description: (
      <Text>
        A procedual animation generator. Takes a chunk/schematic from a{' '}
        <A href="https://minecraft.net">Minecraft</A> world, breaks it apart,
        and reconstructs it in a 3D animation. Use Python and{' '}
        <A href="https://ffmpeg.org/">ffmpeg</A> to generate the animation from
        scratch, and in world configuration to control the scenes of the
        animation.
      </Text>
    ),
  },
  {
    title: 'Password Custard',
    href: '',
    imgSrc: '/project-images/password-custard.png',
    year: 2021,
    links: {
      github: 'samuel-lewis/password-custard',
      live: 'https://samuel-lewis.com/password-custard',
    },
    description: (
      <Text>
        Password generator web app, using memorable, long-form phrase
        generation, to act as a &quot;go-to&quot;, lightweight, password
        generator. Includes configurable options, presets and API endpoint.
        Heavily inspired from <A href="https://xkcd.com/936/">xkcd.com/936</A>.
      </Text>
    ),
  },
  {
    title: 'Godot Logger',
    imgSrc: '/project-images/godot-logger.png',
    year: 2020,
    tags: ['Godot', 'GDScript', 'Tooling'],
    links: {
      github: 'samuel-lewis/godot-logger',
    },
    description: (
      <Text>
        A generic logging library for the{' '}
        <A href="https://godotengine.org/">Godot</A> game engine. Includes a set
        of default loggers, and a simple API for creating custom loggers.
      </Text>
    ),
    contributor: true,
  },
  {
    title: 'Modsmith',
    imgSrc: '/project-images/modsmith.png',
    year: 2022,
    tags: ['Desktop App', 'Tauri'],
    links: {
      github: 'nickrobson/modsmith',
    },
    description: (
      <Text>
        A desktop app <A href="https://minecraft.net">Minecraft</A> modpack
        launcher and management tool. Built using{' '}
        <A href="https://tauri.app/">Tauri</A> using the{' '}
        <A href="https://modrinth.com/">Modrinth</A> registry.
      </Text>
    ),
    contributor: true,
  },
];

export const Projects: React.FC = () => {
  const p = projects
    .sort((a, b) => b.year - a.year)
    .map(({ description, ...rest }) => (
      <ProjectCard key={rest.title} {...rest}>
        {description}
      </ProjectCard>
    ));

  return (
    <Center>
      <Stack mx={32} align="center" sx={{ maxWidth: 920 }}>
        <Divider
          size="md"
          label={<Title>Projects</Title>}
          sx={{ width: '100%' }}
        />
        {p}
        <Text color="dimmed">More coming soon...</Text>
      </Stack>
    </Center>
  );
};
