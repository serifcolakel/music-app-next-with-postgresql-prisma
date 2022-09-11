import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdMusicNote,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
  MdSearch,
} from "react-icons/md";
const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];
const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];
const playLists = new Array(55).fill(1).map((_, i) => `Playlist ${i}`);
const SideBar = () => {
  return (
    <Box
      width={"250px"}
      height={"calc(100vh - 100px)"}
      bg={"black"}
      paddingX={"5px"}
      color={"gray"}
    >
      <Box paddingY={"20px"} height="100%">
        <Box width={"120px"} marginBottom={"20px"} paddingX={"20px"}>
          <Image src="/logo.png" width={120} height={60} />
        </Box>
        <Box marginBottom={"20px"}>
          <List spacing={3}>
            {navMenu.map((menu) => (
              <ListItem paddingX={"20px"} key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom={"20px"}>
          <List spacing={3}>
            {musicMenu.map((menu) => (
              <ListItem paddingX={"20px"} key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color={"gray.800"} />
        <Box
          height={"66%"}
          overflowY={"auto"}
          onScroll={(e) => {
            console.log(e);
          }}
          paddingY="20px"
        >
          <List spacing={3}>
            {playLists.map((playlist) => (
              <ListItem paddingX={"20px"} key={playlist}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={MdMusicNote}
                        color="white"
                        marginRight="20px"
                      />
                      {playlist}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
