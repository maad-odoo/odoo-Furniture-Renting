const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PWxQrRvrwxyTviHCDRYMeBi818KBodXTtQWb6xVU5z2kKgtDgqDXsQF4lBPLTRXvZ1ynZ02JEdXgFyoQWqrA4w200QdGrmmx8"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/payment", async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: "yash",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 10144 * 100,
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: "demo@gmail.com",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
