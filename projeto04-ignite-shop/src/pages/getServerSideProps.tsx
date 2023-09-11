import { stripe } from '@/lib/stripe';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].product as Stripe.Product;

  return {
    props: {},
  };
};
