import React from 'react';
import { Paper, Text, Badge, Grid, Col, Button } from '@mantine/core';

const CardDataDis = () => {
  return (
    <Paper padding="xl" shadow="lg">
        
      <Grid gutter="md">
        <Col span={4}>
          <Text size="xl">Field 1</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 2</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 3</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 4</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 5</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 6</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 7</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 8</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 9</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 10</Text>
        </Col>
        <Col span={4}>
          <Text size="xl">Field 11</Text>
        </Col>
      </Grid>
    </Paper>
  );
};

export default CardDataDis;
