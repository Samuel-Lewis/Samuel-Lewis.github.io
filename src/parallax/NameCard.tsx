import React from 'react';

import { Center, Stack, Title, Text } from '@mantine/core';

export const NameCard: React.FC = () => (
  <Center sx={{ height: '100%' }}>
    <Stack align="center" spacing={0}>
      <Title color="night.7">Samuel Lewis</Title>
      <Text color="night.7">Software Engineer</Text>
    </Stack>
  </Center>
);
