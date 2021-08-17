import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import Link from 'next/link'

import { FaShippingFast, FaStar } from 'react-icons/fa';

function components({ product }) {
    return (
        <>

            <Flex justify="center" direction="column" mx="auto" my="8" id="pricing" >
                <Image src="/barra.svg" w="450px" mb="4" />
                <Image src="/promo.svg" w="450px" />
            </Flex>


            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>

                {product.pricing.map(product => {
                    return (
                        <Link href={product.pricingLink} key={product.pricingUnit}>
                            <a>

                                <Flex border="4px" borderColor="#f9f9f9" borderRadius="lg" shadow="base" p="4" textAlign="center" direction="column" justify="center" color="gray.700" _hover={{ shadow: "xl" }}>
                                    <VStack spacing="1" mb="6">

                                        <Image src={product.pricingImage} w="325px" h="325px" />

                                        <Text fontWeight="bold" fontSize="2xl" textTransform="uppercase" >{product.pricingUnit}</Text>
                                        <Flex justify="center">
                                            <Text bg="gray.700" w="max-content" px="2" py="0.3" color="white" textTransform="uppercase" fontSize="lg" borderRadius="lg">Economia de <Text fontWeight="bold" color="yellow.300" as="span">{`${product.pricingPercent}%`}</Text></Text>
                                        </Flex>
                                        <Text fontSize="lg">de <Text as="s" color="#999" textDecoration="">{`R$${product.pricingOld}`}</Text> por R${`R$${product.pricingPrice}`}</Text>
                                        <Text fontSize="2xl" color="gray.600" lineHeight="60px" >12x <Text as="span" fontWeight="bold" fontSize="6xl" color="gray.700">{`R$${product.pricingParcela}`}</Text></Text>

                                        <Flex bg="#23A455" shadow="base" color="white" fontWeight="700" fontSize="2xl" borderRadius="md" px="6" py="4">COMPRAR AGORA</Flex>
                                        <Text fontSize="xs" pt="2" color="#C53030">Nós garantimos a eficácia de nossos produtos. Se você ficar insatisfeito com o produto, devolveremos o seu dinheiro!</Text>
                                    </VStack>

                                </Flex>
                            </a>
                        </Link>
                    )
                })}
            </Grid>


            <Flex direction="column" justifyContent="center" alignItems="center" my={4} color="white" fontSize="lg" fontWeight="600" textTransform="uppercase">
                Formas de Pagamento

                <HStack justifyContent="center" mt={2} maxW="100%">
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/mastercard.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/visa.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/elo.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/hipercard.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/dinners.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/american.png" objectFit="contain" w="80%" /></Flex>
                    <Flex justifyContent="center" alignItems="center" w={16} h={12} bg="white" rounded="md"><Image src="/icons/boleto.png" objectFit="contain" w="80%" /></Flex>
                </HStack>

            </Flex>

            <Flex justifyContent="center">
                <Image src="/icons/secure-white.png" w={80} />
            </Flex>
        </>

    );
}

export default components;