import { Flex } from '@mantine/core';

import AdminBox from './AdminBox';
import AdminSideBar from './AdminSideBar';


export default function AdminHome() {
  return (
    <div>
      <Flex>
      <AdminSideBar/>
      <AdminBox title="Organization"/>
      </Flex>
    </div>
  );
}