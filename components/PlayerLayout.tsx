import Head from "next/head";
import { Box, Flex } from "@chakra-ui/layout";
import SideBar from "./SiderBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Flex flexDirection={"row"} width={"100vw"}>
        <SideBar />
        <p>Home</p>
      </Flex>
      <Flex>
        <Box
          justifyContent={"center"}
          alignItems="center"
          width={"100vw"}
          height={"100px"}
          bg={"black"}
        >
          Test
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerLayout;
