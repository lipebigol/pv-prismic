import { Box, Icon, Text } from "@chakra-ui/react";

import { FaHeart } from 'react-icons/fa'

export default function FooterBottom() {
    return (
        <Box maxW="1120px" mx="auto" py={4} >
            <Box textAlign="center"
                fontSize="xs"
                textTransform="uppercase"
                color="gray.500"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={{ base: "center", lg: "space-between" }}
            >
                <Text>© 2021. Todos os direitos reservados.</Text>
                <Text>Feito com amor <Icon as={FaHeart} color="red" /> <Text as="b">Grupo FT2C.</Text></Text>
            </Box>
        </Box>
    )
}