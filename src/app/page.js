"use client";

import { runningPlans } from "@/libs/runningPlans";
import { Anchor, Button, Checkbox, Container, Group, Modal, Select, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, {open,close}] = useDisclosure(false);
  return <Container size="xs">
    <Title italic color="pink">Register CMU Marathon</Title>
    <form>
    <Group grow>
      <TextInput label="First Name" placeholder="First Name" required></TextInput>
      <TextInput label="Last Name" placeholder="Last Name" required></TextInput>
    </Group>
    <TextInput label="Email" placeholder="Email" required type="email"></TextInput>
    <Select data={runningPlans} label="Plan" placeholder="Select a plan..." required searchable></Select>
    <Group spacing="xs">
    <Checkbox/>
    <Text>I accept <Anchor onClick={open}>terms and conditions</Anchor></Text>
    </Group>
    <Button type="submit">Register</Button>
    <Modal opened={opened} onClose={close} title="Terms and conditions">
      <Text>
        1.Some long terms and conditions...
        <br />
        2.Some long terms and conditions...
        <br />
        3.Some long terms and conditions...
        </Text>
        <Button onClick={close}>Confirm</Button>
    </Modal>
    </form>
  </Container>;
};
