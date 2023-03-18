import React from "react";
import { VStack, HStack, Text, Badge } from "@chakra-ui/react";

interface FeedProps {
  posts: string[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <VStack spacing={4} align="stretch">
      {posts.map((post) => (
        <HStack>
          <Badge colorScheme="green">Post</Badge>
          <Text>{post}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default Feed;
