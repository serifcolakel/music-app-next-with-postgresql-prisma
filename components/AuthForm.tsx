import { FC, useState } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
const AuthForm: FC<{
  mode: "signin" | "signup";
}> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <Box height={"100vh"} width="100vw" bg={"black"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100px"}>
        hello
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"calc(100vh - 100px)"}
      >
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;
