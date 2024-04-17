// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Input, VStack, SimpleGrid, Text, Button, useDisclosure } from "@chakra-ui/react";
import { FaSearch, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("https://api.yourcms.com/reviews");
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter((review) => review.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Review Site
        </Heading>
        <Box w="100%">
          <Input placeholder="Search reviews..." size="lg" leftIcon={<FaSearch />} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
              <Button mt={4} colorScheme="teal" size="sm" onClick={() => navigate(`/review/${review.id}`)}>
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
