import { Flex, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex justify="center" bg="red.600" p="2" mb="4" position="sticky" top="0" left="0" zIndex="20">
            <Text color="white" textAlign="center"> <b> DESCONTO APLICADO </b> - LIMITADO A UMA COMPRA POR CLIENTE</Text>
        </Flex>
    )
}