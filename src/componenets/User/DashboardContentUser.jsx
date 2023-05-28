import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import { Grid, Col } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import { CloseButton, Group } from '@mantine/core';
import { Button, Container, Paper, Title } from '@mantine/core';
import AdminBox from '../Admin/AdminBox';
const DashBoardContentUser = () => {
    const { userData } = useStateContext();
    console.log(userData);
    const pid = userData.citizen.publicId
    const dob = userData.citizen.dob.slice(0, 10)
    const gender = userData.citizen.gender
    const contact = userData.citizen.contactNumber
    const records = userData.citizen.digitalFootprint
    return (
        <div>
            <div style={{ marginLeft: "0%" }}>
                <AdminBox title="Digital Footprint" width="50%" />
            </div>
            <div>
                <Container ml={"20%"} mr={0} size={665} >
                    <Paper withBorder shadow="md" p={30} mt={30} ml={4} radius="md" w={"150%"} pt="sm" bg={"#97b9e8"}>
                        <Text align="left" size="xl" fw={900}>
                            <strong>Public ID: </strong>
                            {pid}
                        </Text>
                        <Text align="left" size="xl" fw={900}>
                            <strong>Date of Birth: </strong>
                            {dob}
                        </Text>
                        <Text align="left" size="xl" fw={900}>
                            <strong>Gender: </strong>
                            {gender}
                        </Text>
                        <Text align="left" size="xl" fw={900}>
                            <strong>Contact Number: </strong>
                            {contact}
                        </Text>
                    </Paper>
                </Container>
                <div style={{ "marginLeft": "0px" }}>

                    {records.map((record) =>

                        <Container ml={"27%"} mr={0} size={500}>
                            <Paper withBorder shadow="md" p={5} mb={9} mt={9} radius="md" w={"150%"} bg={"#d3e3eb"}>
                                <Text align="left" size="xl" style={{ marginTop: '1rem' }}>
                                    <strong>Detail: </strong>
                                    {record.detail}
                                </Text>

                                <Text align="left" size="md" color='dimmed'>
                                    {record.lud.slice(0, 10)}
                                </Text>

                            </Paper>
                        </Container>
                    )}

                </div>

            </div>
        </div>
    );
};

export default DashBoardContentUser;