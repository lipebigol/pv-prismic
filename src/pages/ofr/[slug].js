import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { Box, Flex, Grid, Heading, Image, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaHeart, FaStar, FaTruck } from 'react-icons/fa'
import { BiCheckShield } from 'react-icons/bi'
import { useState } from 'react'



export default function Ofr({ offer }) {

    const [displayKit, setDisplayKit] = useState("kit2");


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
                        <Image src="https://store.diatena.com.br/assets/images/risco_0.png" width="80px" />
                        <Link href="#price">
                            <a>
                                <Flex bgColor="rgb(221, 187, 119)" py="2" px="4" borderRadius="md">
                                    <Text fontWeight="500" color="white">Experimente</Text>
                                </Flex>
                            </a>
                        </Link>
                    </Flex>

                </Box>



                <Flex maxWidth="1170px" margin="0 auto" alignItems="center" direction={["column", "column", "row"]} px={["2", "2", "0"]}>
                    <Flex width={["100%, 100%, 50%"]}>
                        <Image src="https://cdn.converte.ai/3_SPR_2_3b8109ee11.png?width=1200&auto_optimize=medium&quality=75" />
                    </Flex>
                    <Flex direction="column">
                        <Flex bg="rgb(221, 187, 119)" width="30%" p="2" borderRadius="full" justifyContent="center" display={["none", "none", "flex"]}>
                            <Text color="white" fontWeight="500">OFERTA ESPECIAL</Text>
                        </Flex>
                        <Heading id="price" color="#07174A" textAlign={["center", "center", "left"]}>Sérum Preenchedor de Rugas</Heading>
                        <Flex alignItems="center" justifyContent={["center", "center", "start"]}>
                            <Icon as={FaStar} color="rgb(221, 187, 119)" />
                            <Icon as={FaStar} color="rgb(221, 187, 119)" />
                            <Icon as={FaStar} color="rgb(221, 187, 119)" />
                            <Icon as={FaStar} color="rgb(221, 187, 119)" />
                            <Icon as={FaStar} color="rgb(221, 187, 119)" />
                            <Text color="#bbbbbb" ml="2">4.9 de 5 estrelas</Text>
                        </Flex>
                        <Text color="#7a7a7a">Suaviza rugas e linhas de expressão. Combate a progerina e acelera a renovação celular.</Text>

                        {offer.kit.map(kit => {
                            return (
                                <>
                                    <Text color="#3f3f3f">Preço: <Text as="span">{`12x de R$${kit.priceParcela}`}</Text> {`(ou R$${kit.total})`}</Text>
                                    <Text color="#3f3f3f"><Icon as={FaTruck} />Frete grátis</Text>


                                    <Flex border="1px solid #000" p="4" my="2" color="#3f3f3f" alignItems="center">
                                        <input key={kit.title} type="radio" value={kit.link} name="radiovalues" checked={displayKit === kit.link} onChange={(e) => setDisplayKit(e.target.value)} />
                                        <Text fontWeight="bold" ml="2">{kit.title}</Text>

                                    </Flex>
                                </>
                            )
                        })}

                        <Flex direction="column" justifyContent="center" alignItems="center" mb="8" color="white" fontSize="lg" fontWeight="600" textTransform="uppercase">
                            Formas de Pagamento

                            <HStack justifyContent="center" maxW="100%">
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/mastercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/visa.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/elo.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/hipercard.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/american.png" objectFit="contain" w="80%" /></Flex>
                                <Flex justifyContent="center" alignItems="center" w={12} h={8} bg="white" rounded="md" shadow="base"><Image src="/icons/boleto.png" objectFit="contain" w="80%" /></Flex>
                            </HStack>

                        </Flex>

                        <Flex bg="#23A455" height="50px" alignItems="center" justifyContent="center" color="white" fontWeight="700" borderRadius="md">
                            <Link href={displayKit}>
                                <a>
                                    <Text textAlign="center">COMPRAR</Text>
                                </a>
                            </Link>
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
                            <Text color="#707070">Adquira o Diatena hoje e seja protegido automaticamente pelo Desafio Diatena, onde você tem 30 dias para testar nosso produto. Se, por algum motivo, dentro do prazo de 30 dias, você achar que seu investimento não valeu a pena, nos avise pelo e-mail de suporte contato@diatena.com.br que nós compraremos os frascos de volta de você! Se até um frasco estiver violado ou vazio, pagaremos pra você o mesmo preço que você pagou por eles cheios, sem perguntas e sem complicações.</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} maxWidth="1170px" margin="0 auto" my="6">

                    <Heading color="#07174A" gridColumn="span 2" my="6" px="24px" fontWeight="500" textAlign="center">Conheça os Benefícios do Sérum Preenchedor de Rugas da Diatena
                    </Heading>

                    <Flex direction="column" p="24px" justifyContent="center" alignItems="center">
                        <VStack spacing="4">
                            <Image src="https://cdn.converte.ai/01_e51cfd284c.png?width=150&auto_optimize=medium&quality=75" w="150px" />
                            <Heading color="#07174A" fontSize="xl" mb="2" textAlign="center" fontWeight="500" textTransform="uppercase">REDUZ A APARÊNCIA DAS RUGAS... INSTANTANEAMENTE</Heading>
                            <Text color="#707070">O Argatensyl™ cria um efeito lifting que pode remover anos, senão décadas de rugas do seu rosto… na hora! Imagine o controle que você vai ter em suas mãos ao saber que, sempre que você quiser, você poderá aparentar ser anos mais jovem. Imagine poder ter um controle assim sobre sua aparência.</Text>
                        </VStack>
                    </Flex>


                </Grid>

                <Flex bgColor="#f6f6f6" py="8" px={["3", "3", "0"]}>
                    <Flex maxWidth="1170px" margin="0 auto" alignItems="center" direction="column" >
                        <Heading color="#07174A" mb="4" textAlign="center" fontWeight="500">Como visto em...</Heading>
                        <Flex >
                            <HStack spacing="6" flexWrap="wrap" justifyContent="center">
                                <Image src="https://store.diatena.com.br/assets/images/credibility/imagens_portais_o_globo.png" w="100px" />
                                <Image src="https://store.diatena.com.br/assets/images/credibility/imagens_portais_ig.png" w="100px" />
                                <Image src="https://store.diatena.com.br/assets/images/credibility/imagens_portais_terra.png" w="100px" />
                                <Image src="https://store.diatena.com.br/assets/images/credibility/imagens_portais_metropoles.png" w="100px" />
                            </HStack>
                        </Flex>
                    </Flex>
                </Flex>



                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} maxWidth="1170px" margin="0 auto" my="6" px={["3", "3", "0"]}>

                    <Heading color="#07174A" gridColumn="span 3" my="6" px="24px" fontWeight="500" textAlign="center">Depoimentos
                    </Heading>

                    <Flex p="16px" alignItems="flex-start" border="1px solid #999" borderRadius="md" shadow="base" bg="white" mb="12">
                        <Image src="https://cdn.converte.ai/01_e51cfd284c.png?width=150&auto_optimize=medium&quality=75" w="40px" mr="4" />
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

                            <Text fontSize="sm" color="#707070">O Argatensyl™ cria um efeito lifting que pode remover anos, senão décadas de rugas do seu rosto… na hora! Imagine o controle que você vai ter em suas mãos ao saber que.</Text>
                        </Flex>
                    </Flex>

                </Grid>

                <Box bgColor="#f6f6f6" pt="8" pb="24" px={["3", "3", "0"]}>
                    <Flex maxWidth="1170px" margin="0 auto" direction={["column", "column", "row"]}>
                        <Flex width={["100%", "100%", "30%"]} justifyContent="center" mb={["6", "6", "0"]}>
                            <Heading color="#07174A">Perguntas Frequentes</Heading>
                        </Flex>
                        <Flex direction="column" flex="1">
                            <VStack align="stretch">
                                <Heading color="#07174A" fontSize="2xl" fontWeight="500" textTransform="uppercase">QUAL ESTOQUE MAIS VENDIDO?</Heading>
                                <Text borderBottom="1px solid rgb(220, 220, 220)" pb="6" color="#707070">O estoque mais vendido e o mais recomendado é para 6 meses, porque apesar de você ter resultados imediatos com o Sérum, os melhores benefícios vem com o uso contínuo do produto. Além disso, você recebe até 40% de desconto quando você faz um estoque para 6 meses e se protege para quando a gente ficar sem produto.

                                </Text>

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
        title: response.data.title,
        description: response.data.description,
        kit: response.data.kit.map(kitInfo => {
            return {
                title: kitInfo.title_kit,
                total: kitInfo.price_total,
                priceParcela: kitInfo.price_parcela,
                link: kitInfo.link_kit.url

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