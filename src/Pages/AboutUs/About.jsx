import React from "react";

const About = () => {
  const tokenCards = [
    {
      title: "Create a Wallet",
      image: "/x-v-tokens/x-v-token-1.png",
      steps: [
        "Download Metamask App or any wallet",
        "Download the Google chrome extension",
      ],
    },
    {
      title: "Get ETH/BNB",
      image: "/x-v-tokens/x-v-token-2.png",
      steps: [
        "Have ETH or BNB in your wallet to swap to $XV",
        "If you don’t have any ETH, you can buy directly on Metamask",
        "Transfer from another wallet",
      ],
    },
    {
      title: "Go to Uniswap or PancakeSwap",
      image: "/x-v-tokens/x-v-token-3.png",
      steps: [
        "Connect to Uniswap if you’re buying on ETH side or PancakeSwap",
        "Paste the $XV token address into Uniswap, select XV, and confirm.",
        "When Metamask prompts you for a wallet signature, sign.",
      ],
    },
    {
      title: "Swap your ETH or BNB for $XV",
      image: "/x-v-tokens/x-v-token-4.png",
      steps: [
        "Swap your ETH/BNB for $XV",
        "We have a 5% tax so you need to set your slippage a little above 6% specific slippage",
        "You may need to use higher slippage during times of market volatility",
      ],
    },
  ];

  return (
    <main className="px-6 md:px-24 py-20 about">
      <h1 className="text-6xl font-bold text-white text-center mb-6">
        About Us
      </h1>
      {/* About us hero section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16 lg:py-24">
        <div className="space-y-6">
          <div>
            <h3 className="text-brand-blue uppercase text-sm md:text-lg font-semibold">
              About WEBXV
            </h3>
            <h2 className="text-3xl md:text-4xl text-white font-bold">WebXV</h2>
          </div>
          <p className="text-brand-text text-sm md:text-base">
            XV is a community-focused project led by a highly experienced team
            of Web3 builders and traders. Our founder A On made his name in the
            industry moderating for several early crypto projects before the
            2021 bull run.
          </p>
          <p className="text-brand-text text-sm md:text-base">
            XV is also supported by several team members that are actively
            involved in the day-to-day running of the community. Join us on
            Telegram and Twitter.
          </p>
        </div>
        <img
          src="/about.png"
          alt="About us illustration"
          className="w-full max-w-lg mx-auto"
        />
      </section>

      {/* XV Token Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 pb-20">
        {tokenCards.map((cardData, index) => (
          <div
            key={index}
            className="bg-brand-secondary rounded-xl p-6 flex flex-col items-start gap-4"
          >
            <img src={cardData.image} alt={cardData.title} className="w-full" />
            <div className="text-white">
              <h2 className="text-lg font-semibold mb-2">{cardData.title}</h2>
              {cardData.steps.map((step, i) => (
                <p key={i} className="text-sm text-brand-text-extra-light">
                  {step}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;