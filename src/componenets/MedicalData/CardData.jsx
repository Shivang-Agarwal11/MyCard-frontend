import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import { Badge } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import { CloseButton, Group } from '@mantine/core';
import { Button, Container, Paper, Title } from '@mantine/core';
import AdminBox from '../Admin/AdminBox';
const CardData = () => {
  const { getUserDetails } = useStateContext();
  console.log(getUserDetails);
  const records=getUserDetails.record
  const dob = getUserDetails.createdAt.slice(0, 10)
  const diab = getUserDetails.diabetes === false ? "No" : "Yes"
  const bp = getUserDetails.bp === false ? "No" : "Yes"
  const thyroid = getUserDetails.thyroid === false ? "No" : "Yes"
  const orgDon = getUserDetails.organDonar === false ? "No" : "Yes"

  return (
    <div>
      <div style={{ marginLeft: "0%" }}>
        <AdminBox title="Record" width="50%" />
      </div>
      <div style={{ "display": "grid", "gridTemplateColumns": "30% 70%" }}>
        <Container ml={"27%"} mr={0} size={500}>
          <Paper withBorder shadow="md" p={30} mt={30} ml={4} radius="md" w={"150%"} pt="sm" bg={"#d3e3eb"}>
            {/* <Text align="left" size="xl" style={{ marginTop: '1rem' }}>
          <strong>Hospital Name: </strong>
          {hname}
        </Text> */}
            <Text align="left" size="xl">
              <strong>Created On: </strong>
              {dob}
            </Text>

            {/* <Text align="left" size="xl">
          <strong>Patient ID: </strong>
          {pId}
        </Text> */}
            {/* <Text align="left" size="xl">
          <strong>Patient Summary: </strong>
          {pSum}
        </Text> */}
            <Text align="left" size="xl">
              <strong>Diabetes: </strong>
              {diab}
            </Text>
            <Text align="left" size="xl">
              <strong>Blood Pressure: </strong>
              {bp}
            </Text>
            <Text align="left" size="xl">
              <strong>Thyroid: </strong>
              {thyroid}
            </Text>
            <Text align="left" size="xl">
              <strong>Organ Donar: </strong>
              {orgDon}
            </Text>

          </Paper>
        </Container>
        <div>
          {records.map((record)=>
        <Container ml={"27%"} mr={0} size={500}>
      <Paper withBorder shadow="md" p={30} mt={30}  ml={4} radius="md" w={"150%"} pt="sm" bg={"#d3e3eb"}>
        <Text align="left" size="xl" style={{ marginTop: '1rem' }}>
          <strong>Hospital Name: </strong>
          {record.hospitalName}
        </Text>

        <Text align="left" size="xl">
          <strong>Patient ID: </strong>
          {record.patientId}
        </Text>
        <Text align="left" size="xl">
          <strong>Patient Summary: </strong>
          {record.patientSummary}
        </Text>
        <Text align="left" size="xl">
          <strong>Admitted Date: </strong>
          {record.admittedDate.slice(0,10)}
        </Text>

      </Paper>
    </Container>)}
    </div>
      </div>
    </div>
  );
};

export default CardData;