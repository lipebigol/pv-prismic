import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Box, Flex, Grid, Heading, Image, Text, VStack, HStack, Button, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'



export default function Ofr({ offer }) {

    return (

        <>

            <Head>
                <title>{offer.title}</title>
            </Head>

            <Box bg="#f8f9fe" >

                <Box bg="red.600" color="white" shadow="base" position="sticky" zIndex="99" >
                    <Flex py="2" px="2" justifyContent="center">
                        <Text textAlign="center"><b>DESCONTO APLICADO</b> - LIMITADO A UMA COMPRA POR CLIENTE</Text>
                    </Flex>
                </Box>

                <Flex bgImage={offer.banner} w="100%" h="400px" position="absolute" filter="blur(3rem)" bgRepeat="no-repeat" bgSize="cover" display={["none", "none", "flex"]} />



                <Flex justifyContent="center" position="relative">

                    <Image src={offer.banner} display={["none", "none", "block"]} />
                    <Image src={offer.bannerMobile} display={["block", "block", "none"]} />
                </Flex>

                <Flex direction="column" margin="0 auto" maxW="1100px" margin="0 auto" px={["4", "4", "0"]}>



                    <Flex w="100%" border="1px" borderColor="#e1e1e1" rounded="md" p="6" alignItems="center" justifyContent="space-between" my="12" direction={["column", "column", "row"]}>
                        <Flex alignItems="center">
                            <Image src="https://assets.widitrade.com/assets/templates/5e1743eaef28645604557e92/percentage-icon.png" />
                            <Text px="4" fontSize="lg"><b>OFERTA ESPECIAL:</b> {offer.aviso} <Text as="i">(até 60% de desconto)</Text> com frete <b>grátis.</b></Text>
                        </Flex>
                        <Flex bgGradient="linear(to-l, #5c80fe, #35b6ff)" color="white" px="6" py="2" fontWeight="bold" justifyContent="center" alignItems="center" display={["none", "none", "flex"]}>
                            <Text mr="4" fontSize="22">60%</Text>
                            <Text textTransform="uppercase" fontSize="14">Desconto</Text>
                        </Flex>
                    </Flex>


                    <Flex maxW="1100px" margin="0 auto" bg="white" border="1px" borderColor="#e1e1e1" rounded="md" w="100%" direction="column" mb="6"  >

                        <Heading textAlign="center" mt="4" borderBottom="2px" borderColor="#e1e1e1" pb="4">1. Escolha a quantidade</Heading>

                        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6} m="6">
                            {offer.kit.map(kit => {
                                return (
                                    <Link key={kit.units} href={kit.link}>
                                        <a>
                                            <Flex border="4px" borderColor="#f9f9f9" borderRadius="lg" shadow="base" p="4" textAlign="center" justify="center" color="gray.700" _hover={{ shadow: "xl" }} direction="column">

                                                <Flex justifyContent={["space-between", "space-between", "center"]} alignItems="center" direction="column">

                                                    <Image src={kit.image} w="200px" h="200px" objectFit="contain" p="1" />

                                                    <Flex direction="column" justifyContent="start">

                                                        <Text fontWeight="bold" fontSize="2xl" textTransform="uppercase" >{kit.units}</Text>
                                                        <Flex justify="center">
                                                            <Text bg="gray.700" w="max-content" px="2" py="0.3" color="white" textTransform="uppercase" fontSize="md" borderRadius="lg">Economia de <Text fontWeight="bold" color="yellow.300" as="span">{kit.percent}%</Text></Text>
                                                        </Flex>
                                                        <Text fontSize="md">de <Text as="s" color="red" >R${kit.priceOlder}</Text> por R${kit.priceNew}</Text>
                                                        <Text fontSize="2xl" color="gray.600" lineHeight="60px" >12x <Text as="span" fontWeight="bold" fontSize="5xl" color="gray.700">{kit.priceParcela}</Text></Text>
                                                    </Flex>

                                                </Flex>

                                                <Flex bg="#19AF42" border="1px" borderColor="#08501B" px="8" py="2" rounded="md" fontSize="xl" color="white" fontWeight="bold" margin="0 auto">
                                                    <Text >Selecionar Kit</Text>
                                                </Flex>
                                                <Text fontSize="xs" py="4" textAlign="center">Nós garantimos a eficácia de nossos produtos. Se você ficar insatisfeito com o produto, devolveremos o seu dinheiro!</Text>

                                            </Flex>
                                        </a>
                                    </Link>
                                )
                            })}


                        </Grid>


                        <Flex direction="column" justifyContent="center" alignItems="center" my={4} color="black" fontSize="lg" fontWeight="600" textTransform="uppercase">
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
                    </Flex>




                </Flex>
            </Box>

            <Box bg="gray.700" mt="12" fontSize="xs" py="6" px="2">
                <Flex maxW="1100px" margin=" 0 auto" color="white" direction="column">
                    <Flex justifyContent="space-evenly" fontWeight="bold" mb="6">
                        <Link href="/envio"><a>Rastrear Pedido</a></Link>
                        <Link href="/devolucao"><a>Devolução</a></Link>
                        <Link href="/termos"><a>Termos e Condições</a></Link>
                        <Link href="/politica-de-privacidade"><a>Políticas</a></Link>

                    </Flex>

                    <Flex justifyContent="center" alignItems="center" fontWeight="light" direction="column">
                        <Text>contato@inovador.club</Text>
                        <Text>Todos os direitos reservados. Feito com amor <Icon as={FaHeart} color="red" /> Grupo FT2C.</Text>
                    </Flex>

                </Flex>

            </Box>

        </>
    )
}

export const getStaticPaths = async () => {
    const prismic = getPrismicClient();
    const offers = await prismic.query(
        [Prismic.Predicates.at('document.type', 'offer')]
    )

    const paths = offers.results.map(offer => {
        return {
            params: {
                slug: offer.uid
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
    const response = await prismic.getByUID('offer', (slug), {})

    const offer = {
        slug: response.uid,
        title: response.data.title,
        aviso: RichText.asText(response.data.aviso),
        banner: response.data.banner.url,
        bannerMobile: response.data.banner_mobile.url,
        kit: response.data.kit.map(kitInfo => {
            return {
                image: kitInfo.kit_img.url,
                units: kitInfo.kit_units,
                percent: kitInfo.kit_percent,
                priceOlder: kitInfo.kit_price_older,
                priceNew: kitInfo.kit_new_price,
                priceParcela: kitInfo.kit_parcela,
                link: kitInfo.kit_link.url

            }
        })

    }

    return {
        props: {
            offer
        },
        revalidate: 1800,
    }
}