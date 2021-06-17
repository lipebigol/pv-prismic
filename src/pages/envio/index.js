import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import Footer from '../../components/Footer'
import FooterBottom from '../../components/FooterBottom'



function sobre() {
    return (
        <>
            <Box>
                <Box maxW="1220px" mx="auto" px={4} py={12} >
                    <Heading textAlign="center" mb={12}>
                        Informações de Envio
                    </Heading>

                    <VStack alignItems="left" spacing={6}>
                        <Text>O prazo de entrega para qualquer lugar do Brasil varia de 14 à 35 dias úteis a partir da data de confirmação do pagamento, pois nossos fornecedores são internacionais. </Text>

                        <Text>Código de rastreamento é enviado em até 5 dias úteis a partir da data de confirmação do pagamento.</Text>

                        <Text>É importante que você possibilite os meios para a efetivação da entrega no endereço  cadastrado no seu pedido. Após 3 (três) tentativas comprovadas de entrega, você terá que buscar o pedido em uma agência dos Correios próxima ao seu endereço, correndo o risco do produto retornar ao remetente caso não seja retirado a tempo da agência. Taxas de armazenagem são cobradas se não forem retiradas em até 7 dias corridos. O valor da taxa depende do peso/volume do produto.</Text>

                        <Text>O prazo varia de acordo com a agilidade dos Correios, mas costuma levar entre 14 à 35 dias úteis em média. Caso ultrapasse o prazo estipulado, recomendamos que você entre em contato com os Correios para esclarecer o motivo da demora. Caso os correios não estejam de posse de seu pedido entre em contato imediatamente conosco  para verificarmos junto a nossos fornecedores. Confirmando que existe um problema na logística de seu pedido, efetuaremos o estorno TOTAL de sua compra após estas etapas de verificação.</Text>

                        <Text>Realizaremos o reembolso do valor relativo às compras efetuadas que forem extraviadas ou que passarem do prazo de 60 dias úteis dias após a confirmação do pagamento para serem entregues.</Text>

                    </VStack>
                </Box>
            </Box>
            <Footer />
            <FooterBottom />
        </>
    );
}

export default sobre;