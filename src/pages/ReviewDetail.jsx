import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const ReviewDetail = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      const response = await fetch(`https://api.yourcms.com/reviews/${id}`);
      const data = await response.json();
      setReview(data);
    };

    fetchReview();
  }, [id]);

  return (
    <Container maxW="container.md" p={4}>
      {review ? (
        <VStack spacing={4}>
          <Heading as="h1">{review.title}</Heading>
          <Text fontSize="lg">{review.category}</Text>
          <Text>{review.content}</Text>
        </VStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default ReviewDetail;
