import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  if (!priceId) {
    return res.status(400).json({ error: 'price not found' });
  }
  const successUrl = `${process.env.NETX_URL}/success`;
  const cancelUrl = `${process.env.NETX_URL}`;

  const checkotSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'subscription', // deixei como subsctiption, pois o produto foi criado como assinatura
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkotSession.url,
  });
}
