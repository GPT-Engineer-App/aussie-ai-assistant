// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the AI Assistant</Text>
        <Text>Ask me anything about immigration and education systems in Australia.</Text>
        <Image src="https://images.unsplash.com/photo-1563698876759-5388be71113b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWElMjBmbGFnfGVufDB8fHx8MTcxNDk1NzI4MXww&ixlib=rb-4.0.3&q=80&w=1080" />
      </VStack>
    </Container>
  );
};

export default Index;
