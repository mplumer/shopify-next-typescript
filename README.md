# Next-Shopify-Storefront

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

View the live deployment of this project at https://shopify-next-typescript.vercel.app/

## Getting Started

In the file called:
```
.env.local[duplicate]
```

remove [duplicate] so file is called ```.env.local```

Replace the shopify store domain with your own.

You will need to create a shopify partner account, then create a store. Once you have a development store, you will then need to create a private app with Read and Write access to Products, as well as access to the Storefront API.

You can then replace the shopify storefront access token in the .env with your own.

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
