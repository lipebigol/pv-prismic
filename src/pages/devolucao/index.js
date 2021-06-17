import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import Footer from '../../components/Footer'
import FooterBottom from '../../components/FooterBottom'


function sobre() {
    return (
        <>
            <Box>
                <Box maxW="1220px" mx="auto" px={4} py={12} >
                    <Heading textAlign="center" mb={12}>
                        Política de devolução
                    </Heading>

                    <VStack alignItems="left" spacing={6}>
                        <Text>Esperamos que você ame o que pediu! Mas caso você não esteja 100% satisfeito, tornamos o processo de devolução muito fácil.</Text>

                        <Heading>Quanto tempo tenho antes de fazer a devolução e tenho que pagar pelo frete?</Heading>

                        <Text>1. Se você não estiver 100% satisfeito, você tem um máximo de 7 dias a partir da data de recebimento para devolver os itens para nós. Não serão aceitas devoluções após 7 dias da data de recebimento do pacote.</Text>

                        <Text>2.O envio de devolver não é gratuito! Você pode usar seu próprio método de envio e às suas próprias custas, mas o pagamento na entrega não é aceito.</Text>

                        <Heading>Os pontos que devo prestar atenção ao devolver mercadorias:</Heading>

                        <Text>1. Você só pode devolver itens que não estejam usados, não lavados, não danificados e que tenham as etiquetas originais anexadas e a embalagem original.</Text>

                        <Text>2. Os seguintes itens não podem ser devolvidos: body, roupa íntima, biquíni, beleza, material para eventos e festas, materiais de bricolage, suprimentos para animais de estimação, joias e acessórios (exceto lenços, bolsas e cobertores). Não podemos oferecer reembolso em cosméticos se o selo higiênico foi quebrado.</Text>

                        <Text>3. Itens com marcas não retornáveis e brindes não podem ser devolvidos.</Text>

                        <Heading>Quando vou receber meu reembolso?</Heading>

                        <Text>1. Os reembolsos serão aplicados no prazo de 7 dias após recebermos seu pacote.</Text>

                        <Text>2. NÃO reembolsaremos a taxa de envio original e seguro porque eles não são reembolsáveis, a menos que enviemos o pedido totalmente errado ou você não receba o pacote.</Text>

                        <Text>3. Durante temporadas de alto volume, como Black Friday ou Natal, pode ser necessário um prazo adicional de até 1 semana para processar seus reembolsos. Lamentamos qualquer inconveniente que isso possa causar.</Text>

                        <Heading>Como faço para começar o processo de devolução?</Heading>

                        <Text>Basta enviar um e-mail para <Text as="b">contato@inovador.club</Text> que iremos passar o endereço de devolução</Text>
                    </VStack>
                </Box>
            </Box>
            <Footer />
            <FooterBottom />
        </>
    );
}

export default sobre;