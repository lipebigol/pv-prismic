import { Flex, VStack, Image, Heading, Text } from "@chakra-ui/react";

export default function Section({ product }) {
    return (
        <>

            {product.section.map(product => {
                <Flex direction="column" textAlign="center" justify="center">
                    <VStack my="6">
                        <Image src="https://izilife.sfo3.digitaloceanspaces.com/BrightHair/img/img-pv-1.jpg" w="900px" />
                        <Heading>{product.sectionTitle}</Heading>
                        <Text fontSize="2xl" fontWeight="bold">Modele seu cabelo profissionalmente</Text>
                        <Text fontSize="xl">Transforme sua rotina, ganhe mais tempo e torne sua casa em um salão de beleza</Text>
                    </VStack>
                </Flex>
            })}

        </>
    )
}