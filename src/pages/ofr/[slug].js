import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'



export default function Ofr({ offer }) {

    return (

        <>

            <Box margin="auto" maxW="1100px" >
                <Flex py="6" justifyContent="center">
                    <Image src="https://assets.widitrade.com/assets/products/5d67a611ef28641fee4fbca6/productlogo.png" w="290px" />
                </Flex>
            </Box>

            <Flex direction="column" margin="0 auto" bg="#f8f9fe">

                <Box h="600px" bgGradient="linear(to-l, #7928CA, #FF0080)">
                    <Box h="100%" bgImage="https://assets.widitrade.com/assets/templates/5e1743eaef28645604557e92/background.svg" bgSize="auto" bgRepeat="no-repeat" >

                        <Flex margin="auto" maxW="1100px" color="white" pt="12" alignItems="center">
                            <Flex direction="column" px="4" w="60%">
                                <Heading textTransform="uppercase" mb="4">Titulo da pagina</Heading>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab possimus quasi quaerat ex aperiam explicabo deleniti rerum ad tempore molestiae, voluptate non, provident, ipsa cumque. Consectetur quis enim reiciendis.</Text>
                            </Flex>
                            <Flex px="4">
                                <Image src="https://assets.widitrade.com/assets/products/5d67a611ef28641fee4fbca6/product1.png" w="500px" objectFit="contain" />
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                <Flex bg="white" maxW="1100px" margin="0 auto" mt="-24" w="100%" rounded="md" p="6" alignItems="center" justifyContent="space-between" shadow="base">
                    <Image src="https://assets.widitrade.com/assets/templates/5e1743eaef28645604557e92/percentage-icon.png" />
                    <Text px="4"><b>OFERTA ESPECIAL:</b> Neck Relax is available at the price of R$ 618 R$ 309 (50% off) with <b>free shipping.</b></Text>
                    <Flex bgGradient="linear(to-l, #5c80fe, #35b6ff)" color="white" px="6" py="2" fontWeight="bold" justifyContent="center" alignItems="center">
                        <Text mr="4" fontSize="22">60%</Text>
                        <Text textTransform="uppercase" fontSize="14">Desconto</Text>
                    </Flex>
                </Flex>

                <Flex maxW="1100px" margin="0 auto" mt="12" bg="white" border="1px" borderColor="#e1e1e1" rounded="md" w="100%" direction="column" mb="6">

                    <Heading textAlign="center" mt="4" borderBottom="2px" borderColor="#e1e1e1" pb="4">1. Escolha a quantidade</Heading>

                    <Flex justifyContent="space-between" p="6">

                        <Flex>
                            <Text>teste</Text>
                        </Flex>

                        <Flex>
                            <Text>teste</Text>
                        </Flex>

                        <Flex>
                            <Text>teste</Text>
                        </Flex>

                    </Flex>

                </Flex>

            </Flex>

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
    }

    return {
        props: {
            offer
        },
        revalidate: 1800,
    }
}