// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Input, VStack, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { FaSearch, FaStar } from "react-icons/fa";

const reviews = [
  { id: 1, title: "The Great Gatsby", category: "Book", rating: 5 },
  { id: 2, title: "Inception", category: "Movie", rating: 4.5 },
  { id: 3, title: "The Last of Us", category: "Video Game", rating: 5 },
  { id: 4, title: "1984", category: "Book", rating: 4 },
  { id: 5, title: "Interstellar", category: "Movie", rating: 4.5 },
  { id: 6, title: "God of War", category: "Video Game", rating: 5 },
  { id: 7, title: "To Kill a Mockingbird", category: "Book", rating: 4.5 },
  { id: 8, title: "The Dark Knight", category: "Movie", rating: 5 },
  { id: 9, title: "Red Dead Redemption 2", category: "Video Game", rating: 5 },
  { id: 10, title: "Brave New World", category: "Book", rating: 4 },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Review Site
        </Heading>
        <Box w="100%">
          <Input placeholder="Search reviews..." size="lg" leftIcon={<FaSearch />} />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {reviews.map((review) => (
            <Box key={review.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{review.title}</Heading>
              <Text mt={4}>{review.category}</Text>
              <Box mt={2}>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar key={i} color={i < review.rating ? "teal.500" : "gray.300"} />
                  ))}
              </Box>
              <Button mt={4} colorScheme="teal" size="sm">
                Read More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
