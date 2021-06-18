import { Flex, Box, Icon, Text, Heading, Button } from "@chakra-ui/react"
import { FaStar, FaStarHalfAlt, FaShippingFast, FaCheckCircle } from 'react-icons/fa'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import Slider from './Slider'

export default function Hero({ product }) {
    return (

        <>

            {product.hero.map(product => {
                return (
                    <Flex justify="center" borderBottom="4px" pb="6" borderColor="gray.200" direction={["column", "column", "row"]} align="center" key={product.heroTitle}>
                        <Box w={["100%", "100%", "50%"]} p="4">

                            <Slider
                                product={product}
                            />


                        </Box>
                        <Box w={["100%", "100%", "50%"]} p="4">
                            <Flex align="center">
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStarHalfAlt} color="yellow.400" />
                                <Text ml="2">{`(${product.heroAvaliacao} avaliações)`}</Text>
                            </Flex>
                            <Heading>{product.heroTitle}</Heading>
                            <Text>{product.heroDescription}</Text>
                            <Text>{`(Cód. Item ${product.heroCod})`}</Text>
                            <Flex align="center" my="4">
                                <Icon as={FaShippingFast} color="yellow.400" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <b> Frete Grátis</b> para todo <b> Brasil!</b> <br />Receba ou devolvemos seu dinheiro</Text>
                            </Flex>
                            <Flex align="center" my="4">
                                <Icon as={FaCheckCircle} color="yellow.400" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <b> Compra Segura</b> <br />Garantia de 30 dias direto em nossa loja</Text>
                            </Flex>
                            <Flex align="center" my="4">
                                <Icon as={BsArrowCounterclockwise} color="yellow.400" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <b> Troca Fácil</b> <br />A devolução é por nossa conta.</Text>
                            </Flex>

                            <Button colorScheme="whatsapp" size="lg" px="20" borderRadius="full" w={["100%", "100%", "50%"]}>
                                Escolher Oferta
                            </Button>
                        </Box>
                    </Flex>
                )
            })}

        </>
    )
}