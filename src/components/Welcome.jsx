import {Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div>
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://1.bp.blogspot.com/-utIAbNufKNE/Xkc0TIitD7I/AAAAAAAAEOw/LuHvBgjr7wMN8pjDPRvf0bDx60XP69t3wCEwYBhgL/s1600/Los%2BEnanos%252C%2BSe%25C3%25B1ores%2Bde%2Bla%2BForja%2By%2BReyes%2Bde%2Bla%2BMonta%25C3%25B1a%2B-%2BGuerreros%2BEnanos.jpg"
            alt="Enano Facha"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;