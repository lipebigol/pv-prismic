import { Flex, Heading, Text, Icon, Button, Input, Textarea, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'


export default function Comments({ product }) {
    return (
        <>
            <Flex direction="column" justify="center" >
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
                        {product.hero.map(product => {
                            return (
                                <Text as="i" key={product.heroAvaliacao}>{`(${product.heroAvaliacao} avaliações)`}</Text>
                            )
                        })}

                    </Flex>
                </Flex>

                <Text fontSize="lg" borderBottom="1px" pb="4" borderColor="gray.300"><Text fontWeight="bold" color="red.600" as="span" >97% </Text>dos clientes recomendam esse produto</Text>

                {product.comments.map(product => {
                    return (
                        <Flex align="center" borderBottom="1px" pb="6" mt="6" borderColor="gray.300" key={product.commentText}>

                            <Flex direction="column" flex="1">
                                <Heading fontSize="lg">{product.commentName}</Heading>
                                <Flex justify="space-between">
                                    <Flex>
                                        <Text>{product.commentTime}</Text>
                                    </Flex>
                                    <Flex>
                                        <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                        <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                        <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                        <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                        <Icon as={FaStar} color="yellow.400" w={5} h={4} />
                                    </Flex>

                                </Flex>
                                <Text>{product.commentText}</Text>
                            </Flex>



                        </Flex>
                    )
                })}
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


        </>
    )
}