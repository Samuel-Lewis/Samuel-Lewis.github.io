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
    backgroundImage: theme.fn.gradient({
      from: theme.fn.rgba('#1e7eba', 0.8),
      to: theme.fn.rgba('#8bbdd8', 0.8),
      deg: 45,
    }),
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
        <Grid.Col xs={12} sm={6}>
          <Stack spacing="sm">
            <Title order={3}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </Title>
            {year && (
              <Text sx={{ opacity: 0.7 }}>
                <b>{year}</b> {tags.length > 0 && `| ${tags.join(' | ')}`}
              </Text>
            )}
            {children}
            {contributor && (
              <Text sx={{ opacity: 0.7 }} italic>
                Major contributor to this project
              </Text>
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <img className={classes.image} src={imgSrc ?? ''} alt={title} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};
