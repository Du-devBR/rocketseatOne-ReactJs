import { stripe } from '@/lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/products';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    descripition: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading....</p>;
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={''} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.descripition}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_OZYPN2Dbv9Mtnj' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pr-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100),
        descripition: product.description,
      },
    },
    revalidate: 60 * 60 * 1, //1 hora
  };
};
