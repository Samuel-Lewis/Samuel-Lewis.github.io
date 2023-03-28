import React from 'react';

import { Card, createStyles, Grid, Stack, Title, Text } from '@mantine/core';

export interface ProjectCardProps {
  title: string;
  href: string;
  imgSrc?: string;
  children?: React.ReactNode;
  year: number;
  tags?: string[];
  contributor?: boolean;
}

const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: theme.fn.lighten('#65c9ff', 0.05),
    backgroundColor: theme.fn.rgba('#65c9ff', 0.15),
    maxHeight: 350,
    color: 'white',
  },

  imageWrapper: {
    width: '40%',
  },

  image: {
    width: '100%',
    objectFit: 'cover',
    aspectRatio: '16/9',
    objectPosition: 'top',
    borderRadius: theme.radius.sm,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: -theme.spacing.md,
  },
}));

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  href,
  imgSrc,
  children,
  year,
  tags = [],
  contributor = false,
}) => {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" className={classes.card}>
      <Grid>
        <Grid.Col span={6}>
          <Stack>
            <Title order={3}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </Title>
            {year && (
              <Text color="dimmed">
                <b>{year}</b> {tags.length > 0 && `| ${tags.join(' | ')}`}
              </Text>
            )}
            {children}
            {contributor && (
              <Text color="dimmed" italic>
                Major contributor to this project
              </Text>
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <img
            className={classes.image}
            src={
              imgSrc ??
              'https://images.unsplash.com/photo-1679770884293-a4f41b5f05cd'
            }
            alt={title}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
};
