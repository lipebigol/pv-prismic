import { Box, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Text, Link } from "@chakra-ui/react";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box bg="#F8FBFD">
            <Box maxW="1120px" mx="auto" px={4} py={12} mt="6" >


                <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }} gap={6}>
                    <GridItem colSpan={{ base: 2, lg: 1 }} >
                        <Flex justifyContent="center" alignItems="center" flexDirection="column">

                            <Flex>
                                <HStack spacing={2}>
                                    <Box bg="white"
                                        border="1px solid gray"
                                        rounded="full"
                                        w={8} h={8}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"

                                    >
                                        <Icon as={FaFacebookF} w="60%" h="60%" />
                                    </Box>

                                    <Box bg="white"
                                        border="1px solid gray"
                                        rounded="full"
                                        w={8} h={8}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"

                                    >
                                        <Icon as={FaInstagram} w="60%" h="60%" />
                                    </Box>

                                </HStack>
                            </Flex>

                        </Flex>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Box fontSize="sm">
                            <Heading fontSize="md" mb={4}>Dúvidas?</Heading>

                            <Text>Whatsapp</Text>
                            <Text as="b">(12) 99146-4542</Text>


                            <Text mt={2}>Email</Text>
                            <Text as="b">contato@inovador.club</Text>
                        </Box>
                    </GridItem>


                    <GridItem colSpan={1} >
                        <Box fontSize="sm" display="flex" flexDirection="column">
                            <Heading fontSize="md" mb={4}>Links úteis?</Heading>

                            <Link href="#benefits">Como Funciona</Link>
                            <Link href="/envio">Rastrear Pedido</Link>
                            <Link href="/devolucao">Devolução</Link>
                            <Link href="/termos">Termos e Condições</Link>
                            <Link href="/politica-de-privacidade">Políticas</Link>

                        </Box>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Box fontSize="sm" display="flex" flexDirection="column">
                            <Heading fontSize="md" mb={4}>Formas de pagamento</Heading>

                            <Grid templateColumns="repeat(3, 1fr)" gap={4} pr={6}>
                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/mastercard.png" />
                                </Box>

                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/visa.png" />
                                </Box>

                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/boleto.png" />
                                </Box>

                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/dinners.png" />
                                </Box>

                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/american.png" />
                                </Box>

                                <Box width="100%" shadow="base" bg="white">
                                    <Image src="/icons/hipercard.png" />
                                </Box>

                            </Grid>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Box fontSize="sm" display="flex" flexDirection="column">
                            <Heading fontSize="md" mb={4}>Loja Segura</Heading>

                            <Image src="/icons/footer-secure.png" />
                        </Box>
                    </GridItem>
                </Grid>





            </Box>
        </Box>
    )
}