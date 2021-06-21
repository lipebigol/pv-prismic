import { Flex, VStack, Image, Heading, Text } from "@chakra-ui/react";

export default function Section({ product }) {
    return (
        <>
            {product.section.map(product => {
                return (
                    <Flex direction="column" textAlign="center" justify="center" color="gray.700" key={product.sectionTitle}>
                        <VStack my="6">
                            <Image src={product.sectionImage} w="900px" maxH={["", "", "300px"]} objectFit="contain" mb="2" />
                            <Heading fontSize="2xl">{product.sectionTitle}</Heading>
                            <Text fontSize="xl" fontWeight="bold">{product.sectionSub}</Text>
                            <Text fontSize="lg">{product.sectionDescription}</Text>
                        </VStack>
                    </Flex>
                )
            })}

        </>
    )
}