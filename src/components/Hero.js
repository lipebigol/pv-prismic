import { Flex, Box, Icon, Text, Heading, Button } from "@chakra-ui/react"
import { FaStar, FaStarHalfAlt, FaShippingFast, FaCheckCircle } from 'react-icons/fa'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import Slider from './Slider'
import Link from "next/link"

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
                        <Box w={["100%", "100%", "50%"]} p="4" color="gray.700">
                            <Flex align="center">
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStarHalfAlt} color="yellow.400" />
                                <Text ml="2" color="red.600">{`(${product.heroAvaliacao} avaliações)`}</Text>
                            </Flex>
                            <Heading>{product.heroTitle}</Heading>
                            <Text>{product.heroDescription}</Text>
                            <Text>{`(Cód. Item ${product.heroCod})`}</Text>
                            <Flex align="center" my="4">
                                <Icon as={FaShippingFast} color="gray.700" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <Text as="b" color="red.600"> Frete Grátis</Text> para todo <Text as="b" color="red.600"> Brasil!</Text> <br />Receba ou devolvemos seu dinheiro</Text>
                            </Flex>
                            <Flex align="center" my="4">
                                <Icon as={FaCheckCircle} color="gray.700" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <Text as="b" color="red.600"> Compra Segura</Text> <br />Garantia de 30 dias direto em nossa loja</Text>
                            </Flex>
                            <Flex align="center" my="4">
                                <Icon as={BsArrowCounterclockwise} color="gray.700" w={6} h={6} />
                                <Text ml="2" lineHeight="1.2"> <Text as="b" color="red.600"> Troca Fácil</Text> <br />A devolução é por nossa conta.</Text>
                            </Flex>

                            <Link href="#pricing" transition="all .25s linear"><a>
                                <Button color="white" bg="red.600" _hover={{ opacity: ".8" }} borderBottom="2px" borderColor="red.800" size="lg" px="20" py="7" borderRadius="full" shadow="lg" w={["100%", "100%", "50%"]}>
                                    Escolher Oferta
                                </Button>
                            </a></Link>
                        </Box>
                    </Flex>
                )
            })}

        </>
    )
}