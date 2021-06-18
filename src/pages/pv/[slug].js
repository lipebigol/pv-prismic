import { getPrismicClient } from '../../../prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Flex } from '@chakra-ui/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FooterBottom from '../../components/FooterBottom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Comments from '../../components/Comments'
import Pricing from '../../components/Pricing'



export default function Pv({ product }) {

    return (

        <>

            <Header />
            <Flex direction="column" maxW="1140px" mx="auto" px={["4", "4", "0"]}>

                <Hero product={product} />

                <Section product={product} />

                <Pricing product={product} />

                <Comments product={product} />

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
                heroSlider_1: heroInfo.slider_1.url,
                heroSlider_2: heroInfo.slider_2.url,
                heroSlider_3: heroInfo.slider_3.url,
                heroDescription: heroInfo.description,
                heroAvaliacao: heroInfo.avaliacao,
                heroCod: heroInfo.cod_item,
                heroTitle: RichText.asText(heroInfo.title),
            };
        }),
        section: response.data.section.map(sectionInfo => {
            return {
                sectionImage: sectionInfo.section_image.url,
                sectionTitle: sectionInfo.section_title,
                sectionSub: sectionInfo.section_sub,
                sectionDescription: sectionInfo.section_description
            }
        }),

        comments: response.data.comments.map(commentsInfo => {
            return {
                commentName: commentsInfo.comments_name,
                commentTime: commentsInfo.comments_time,
                commentText: commentsInfo.comments_text,
            }
        }),

        pricing: response.data.pricing.map(pricingInfo => {
            return {
                pricingImage: pricingInfo.pricing_image.url,
                pricingUnit: pricingInfo.pricing_units,
                pricingPercent: pricingInfo.pricing_percent,
                pricingOld: pricingInfo.pricing_oldprice,
                pricingPrice: pricingInfo.pricing_price,
                pricingParcela: pricingInfo.pricing_parcela,
                pricingLink: pricingInfo.pricing_link.url,
            }
        }),

    }

    return {
        props: {
            product
        },
        revalidate: 1800,
    }
}