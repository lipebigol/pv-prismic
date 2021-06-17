import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Flex, Image, Box, Heading, Text, Icon, Button, VStack, Input, Textarea, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FooterBottom from '../../components/FooterBottom'
import Hero from '../../components/Hero'



export default function Pv({ product }) {

    return (

        <>

            <Header />
            <Flex direction="column" maxW="1140px" mx="auto" px={["4", "4", "0"]}>


                <Hero product={product} />


                <Flex direction="column" textAlign="center" justify="center">
                    <VStack my="6">
                        <Image src="https://izilife.sfo3.digitaloceanspaces.com/BrightHair/img/img-pv-1.jpg" w="900px" />
                        <Heading>Teste seção 1</Heading>
                        <Text fontSize="2xl" fontWeight="bold">Modele seu cabelo profissionalmente</Text>
                        <Text fontSize="xl">Transforme sua rotina, ganhe mais tempo e torne sua casa em um salão de beleza</Text>
                    </VStack>

                    <VStack my="6">
                        <Image src="https://izilife.sfo3.digitaloceanspaces.com/BrightHair/img/img-pv-2.jpg" w="900px" />
                        <Heading>Teste seção 1</Heading>
                        <Text fontSize="2xl" fontWeight="bold">Modele seu cabelo profissionalmente</Text>
                        <Text fontSize="xl">Transforme sua rotina, ganhe mais tempo e torne sua casa em um salão de beleza</Text>
                    </VStack>
                </Flex>

                <Flex direction="column" justify="center">
                    <Heading mb="2">Avaliações de Clientes</Heading>
                    <Flex align="center" mb="2">
                        <Heading>4.9</Heading>
                        <Flex direction="column" justify="center" align="start" ml="4">
                            <Flex>
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStar} color="yellow.400" />
                                <Icon as={FaStarHalfAlt} color="yellow.400" />
                            </Flex>
                            <Text as="i">(245 avaliações)</Text>
                        </Flex>
                    </Flex>

                    <Text fontSize="lg" borderBottom="1px" pb="4" borderColor="gray.300"><Text fontWeight="bold" color="red.600" as="span" >97% </Text>dos clientes recomendam esse produto</Text>


                    <Flex align="center" borderBottom="1px" pb="6" mt="6" borderColor="gray.300" justify="space-between">

                        <Flex direction="column">
                            <Heading fontSize="lg">Nome da pessoas</Heading>
                            <Flex justify="space-between">
                                <Flex>
                                    <Text>3 h</Text>
                                </Flex>
                                <Flex>
                                    <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                    <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                    <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                    <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                    <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                </Flex>

                            </Flex>
                            <Text>Gostei muito do produto, minha esposa amou o presente e a entrega muito rápida, chegou em 7 dias aqui em QueluzGostei muito do produto, minha esposa amou o presente e a entrega muito rápida, chegou em 7 dias aqui em Queluz
                            </Text>
                        </Flex>

                    </Flex>
                    <Flex mt="6" direction="column">
                        <Heading fontSize="2xl">
                            Escrever uma avaliação
                        </Heading>
                        <RadioGroup mt="2">
                            <Stack direction="row">
                                <Radio value="1">1</Radio>
                                <Radio value="2">2</Radio>
                                <Radio value="3">3</Radio>
                                <Radio value="4">4</Radio>
                                <Radio value="5">5</Radio>
                            </Stack>
                        </RadioGroup>
                        <Input placeholder="Nome" my="4" />
                        <Textarea placeholder="Comentário" />
                        <Button colorScheme="whatsapp" w="250px" my="4">
                            Enviar comentário
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
            <FooterBottom />
        </>
    )
}

export const getStaticPaths = async () => {
    const prismic = getPrismicClient();
    const products = await prismic.query(
        [Prismic.Predicates.at('document.type', 'product')]
    )

    const paths = products.results.map(product => {
        return {
            params: {
                slug: product.uid
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const prismic = getPrismicClient();
    const { slug } = context.params;
    const response = await prismic.getByUID('product', (slug), {})

    const product = {
        slug: response.uid,
        hero: response.data.hero.map(heroInfo => {
            return {
                heroSlider_1: heroInfo.slider_1,
                heroSlider_2: heroInfo.slider_2,
                heroSlider_3: heroInfo.slider_3,
                heroDescription: heroInfo.description,
                heroAvaliacao: heroInfo.avaliacao,
                heroCod: heroInfo.cod_item,
                heroTitle: RichText.asText(heroInfo.title),
            };
        })
    }

    return {
        props: {
            product
        },
        revalidate: 1800,
    }
}