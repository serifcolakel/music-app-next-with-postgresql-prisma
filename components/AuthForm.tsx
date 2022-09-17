import { FC, useState } from "react";
import { Box, Button, Flex, Link, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import Image from "next/image";
const AuthForm: FC<{
  mode: "signin" | "signup";
}> = ({ mode }) => {
  console.log("AuthForm", mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth(mode, { email, password });
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box height={"100vh"} width="100vw" bg={"black"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"100px"}
        borderBottom={"1px solid #ccc"}
      >
        <Image src="/logo.png" width={120} height={60} />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"calc(100vh - 100px)"}
      >
        <Box padding={"50px"} bg={"gray.900"} borderRadius={"6px"}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              mb={4}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              mb={4}
            />
            <Button
              sx={{
                ":hover": {
                  bg: "green.700",
                },
              }}
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
            >
              {mode === "signin" ? "Sign in" : "Sign up"}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
