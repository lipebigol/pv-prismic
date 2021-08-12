import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { Box, Flex, Grid, Heading, Image, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaHeart, FaStar, FaTruck } from 'react-icons/fa'
import { BiCheckShield } from 'react-icons/bi'
import React, { useState } from 'react'



export default function Ofr({ offer }) {

    return (

        <>
            <Head>
                <title>{offer.title}</title>
            </Head>

            <Box bg="white">

                <Box bg="white" color="#08002D" shadow="base" position="sticky" zIndex="99" >
                    <Flex py="2" px="2" justifyContent="center">
                        <Text textAlign="center"><b>DESCONTO APLICADO</b> - LIMITADO A UMA COMPRA POR CLIENTE COM FRETE GRÁTIS</Text>
                    </Flex>
                </Box>

                <Box bg="#08002D" py="2">
                    <Flex maxWidth="1170px" margin="0 auto" justifyContent="space-between" alignItems="center" px={["4", "4", "0"]}>
                        <Image src={offer.logo} width="80px" />
                        <Link href="#price">
                            <a>
                                <Flex bgColor="rgb(221, 187, 119)" py="2" px="4" borderRadius="md">
                                    <Text fontWeight="500" color="white">Experimente</Text>
                                </Flex>
                            </a>
                        </Link>
                    </Flex>

                </Box>



                <Flex maxWidth="1170px" margin={["0 auto", "0 auto", "50px auto"]} alignItems="start" direction={["column", "column", "row"]} px={["2", "2", "0"]}>

                    <Flex direction="column">
                        <Flex width={["100%, 100%, 50%"]}>
                            <Image src={offer.productImage} px="4" />
                        </Flex>

                        <Flex direction="column" justifyContent="center" alignItems="center" mb="8" mt="6" display={["none", "none", "flex"]}>

                            <HStack justifyContent="center" maxW="100%">
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/mastercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/visa.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/elo.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/hipercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/american.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/boleto.png" objectFit="contain" w="80%" /></Flex>
                            </HStack>

                        </Flex>

                    </Flex>


                    <Flex direction="column">
                        <VStack spacing="4" align="stretch">
                            <Flex bg="rgb(221, 187, 119)" width="30%" p="2" borderRadius="full" justifyContent="center" display={["none", "none", "flex"]}>
                                <Text color="white" fontWeight="500">OFERTA ESPECIAL</Text>
                            </Flex>
                            <Heading id="price" color="#07174A" textAlign={["center", "center", "left"]}>{offer.title}</Heading>
                            <Flex alignItems="center" justifyContent={["center", "center", "start"]}>
                                <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                <Text color="#bbbbbb" ml="2">4.9 de 5 estrelas</Text>
                            </Flex>
                            <Text color="#7a7a7a">{offer.description}</Text>

                            <Text color="#3f3f3f" fontSize="lg" fontWeight="600" textTransform="uppercase" ><Icon as={FaTruck} w={6} h={6} mr="2" />Frete grátis</Text>
                            <Text color="#7a7a7a" textAlign={["center", "center", "left"]}>Escolha a melhor oferta para você!</Text>
                        </VStack>

                        {offer.kit.map(kit => {
                            return (
                                <React.Fragment key={kit.title}>
                                    <Link href={kit.link}>
                                        <a>
                                            <Flex border="2px solid rgb(216, 216, 216)" p="4" my="2" color="#3f3f3f" alignItems="center" justifyContent="space-between" >
                                                <Flex direction="column">
                                                    <Text fontSize="2xl" fontWeight="600">{kit.title}</Text>
                                                    <Text color="#3f3f3f" fontSize="xs"><Text as="span" fontSize="2xl" color="#CD051D" fontWeight="800">12x de R${kit.priceParcela}</Text> (ou R${kit.total})</Text>
                                                </Flex>
                                                <Flex ml="1" bg="#23A455" px="4" py="4" alignItems="center" justifyContent="center" color="white" fontWeight="700" borderRadius="md">

                                                    <Text textAlign="center">COMPRAR</Text>

                                                </Flex>

                                            </Flex>
                                        </a>
                                    </Link>
                                </React.Fragment>

                            )
                        })}


                        <Flex direction="column" justifyContent="center" alignItems="center" mb="8" mt="6" display={["flex", "flex", "none"]}>

                            <HStack justifyContent="center" maxW="100%">
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/mastercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/visa.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/elo.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/hipercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/american.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/boleto.png" objectFit="contain" w="80%" /></Flex>
                            </HStack>

                        </Flex>

                    </Flex>
                </Flex>

                <Flex bgImage="/marble.jpg" bgSize="cover" py="12" mt="8" px={["3", "3", "0"]}>
                    <Flex maxWidth="1170px" margin="0 auto" alignItems="center" direction={["column", "column", "row"]}>
                        <Flex shrink="0" width="200px">
                            <Image src="https://store.diatena.com.br/assets/images/risco_0.png" />
                        </Flex>
                        <Flex direction="column" ml={["0", "0", "6"]}>
                            <Heading color="#07174A" fontSize="xl" mb="2" textAlign={["center", "center", "left"]}>Desafio Inovador</Heading>
                            <Text color="#707070">Adquira hoje e seja protegido automaticamente pelo Desafio Inovador, onde você tem 30 dias para testar nosso produto. Se, por algum motivo, dentro do prazo de 30 dias, você achar que seu investimento não valeu a pena, nos avise pelo e-mail de suporte contato@inovador.club que nós compraremos os produtos de volta de você! Se até um estiver violado, pagaremos pra você o mesmo preço que você pagou por eles, sem perguntas e sem complicações.</Text>
                        </Flex>
                    </Flex>
                </Flex>



                <Heading color="#07174A" my="6" px="24px" fontWeight="500" textAlign="center">Conheça os Benefícios do Sérum Preenchedor de Rugas da Diatena
                </Heading>

                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} maxWidth="1170px" margin="0 auto" my="6">

                    {offer.benefit.map(benefit => {
                        return (
                            <Flex key={benefit.title} p="24px" justifyContent="center" alignItems="flex-start">
                                <VStack spacing="4">

                                    <Flex direction={["row", "row", "column"]} alignItems={["flex-start", "flex-start", "center"]}>
                                        <Image src={benefit.image} w={["60px", "60px", "120px"]} h={["60px", "60px", "120px"]} objectFit="cover" border="2px solid #08002D" borderRadius="full" mb="4" />

                                        <Flex direction="column" ml={["4", "4", "0"]}>
                                            <Heading color="#07174A" fontSize="xl" mb="2" textAlign={["left", "left", "center"]} fontWeight="500" textTransform="uppercase">{benefit.title}</Heading>
                                            <Text color="#707070">{benefit.description}</Text>
                                        </Flex>
                                    </Flex>


                                </VStack>
                            </Flex>
                        )
                    })}

                </Grid>

                <Flex bgColor="#f6f6f6" py="8" px={["3", "3", "0"]}>
                    <Flex maxWidth="1170px" margin="0 auto" alignItems="center" direction="column" >
                        <Heading color="#07174A" mb="4" textAlign="center" fontWeight="500">Como visto em...</Heading>
                        <Flex >
                            <HStack spacing="6" flexWrap="wrap" justifyContent="center">
                                <Image src="/globo.png" w="100px" />
                                <Image src="/ig.png" w="100px" />
                                <Image src="/terra.png" w="100px" />
                                <Image src="/metropoles.png" w="100px" />
                            </HStack>
                        </Flex>
                    </Flex>
                </Flex>





                <Heading color="#07174A" my="6" px="24px" fontWeight="500" textAlign="center">Depoimentos
                </Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap="6" maxWidth="1170px" margin="0 auto" my="6" px={["3", "3", "0"]}>

                    {offer.depoimento.map(depoimento => {
                        return (
                            <Flex key={depoimento.description} p="16px" alignItems="flex-start" border="1px solid #999" borderRadius="md" shadow="base" bg="white" >
                                <Image src={depoimento.image} w="40px" mr="4" borderRadius="full" />
                                <Flex direction="column">
                                    <Flex>
                                        <Heading color="#07174A" fontSize="sm" mb="2" fontWeight="500">Compra Verificada</Heading>
                                        <Icon as={BiCheckShield} ml="1" />
                                    </Flex>
                                    <Flex alignItems="center" mb="2">
                                        <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                        <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                        <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                        <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                        <Icon as={FaStar} color="rgb(221, 187, 119)" />
                                    </Flex>

                                    <Text fontSize="sm" color="#707070">{depoimento.description}</Text>
                                </Flex>
                            </Flex>
                        )
                    })}


                </Grid>

                <Box bgColor="#f6f6f6" pt="8" pb="24" px={["3", "3", "0"]}>
                    <Flex maxWidth="1170px" margin="0 auto" direction={["column", "column", "row"]}>
                        <Flex width={["100%", "100%", "30%"]} justifyContent="center" mb={["6", "6", "0"]}>
                            <Heading color="#07174A">Perguntas Frequentes</Heading>
                        </Flex>
                        <Flex direction="column" flex="1">
                            <VStack align="stretch">

                                {offer.pergunta.map(pergunta => {
                                    return (
                                        <React.Fragment key={pergunta.pergunta}>
                                            <Heading color="#07174A" fontSize="2xl" fontWeight="500" textTransform="uppercase">{pergunta.pergunta}</Heading>
                                            <Text borderBottom="1px solid rgb(220, 220, 220)" pb="6" color="#707070">{pergunta.resposta}</Text>
                                        </React.Fragment>
                                    )
                                })}


                            </VStack>
                        </Flex>

                    </Flex>
                </Box>

            </Box>

            <Box bg="gray.700" fontSize="sm" py="12">
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
        logo: response.data.logo.url,
        productImage: response.data.product_image.url,
        title: response.data.title,
        description: response.data.description,
        kit: response.data.kit.map(kitInfo => {
            return {
                title: kitInfo.title_kit,
                total: kitInfo.price_total,
                priceParcela: kitInfo.price_parcela,
                link: kitInfo.link_kit.url,
            }
        }),
        benefit: response.data.benefits.map(benefitInfo => {
            return {
                title: benefitInfo.benefit_title,
                description: benefitInfo.benefit_description,
                image: benefitInfo.benefit_image.url,
            }
        }),
        depoimento: response.data.depoimentos.map(depoimentoInfo => {
            return {
                description: depoimentoInfo.depoimento_description,
                image: depoimentoInfo.depoimento_image.url,
            }
        }),
        pergunta: response.data.perguntas.map(perguntaInfo => {
            return {
                pergunta: perguntaInfo.pergunta,
                resposta: perguntaInfo.resposta,
            }
        }),


    }

    return {
        props: {
            offer
        },
        revalidate: 1800,
    }
}