import Stripe from "stripe";

const STRIPE_CLIENT_KEY =
  "pk_test_51P8LhxKuCtrYAVUxSqw4kQZl23eorh0NDOXP8oIj8MUXHfqvq3Lm0ynqJPVbqwnAKezvd2jNaUx96WlJNBAFf34r005Zo5vduH";

const stripeClient = new Stripe(STRIPE_CLIENT_KEY);

export default { stripeClient };
