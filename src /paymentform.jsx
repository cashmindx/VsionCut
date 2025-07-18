import { useEffect } from 'react';

export default function PaymentForm({ amount, description }) {
  useEffect(() => {
    // Load Yoco SDK script once
    const script = document.createElement('script');
    script.src = 'https://js.yoco.com/sdk/v1/yoco-sdk.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePay = () => {
    if (!window.YocoSDK) {
      alert("Yoco SDK not loaded yet. Please try again in a moment.");
      return;
    }

    const yoco = new window.YocoSDK({
      publicKey: 'pk_test_your_public_key_here', // 🔑 Replace with your actual Yoco public key
    });

    yoco.showPopup({
      amountInCents: amount,
      currency: 'ZAR',
      name: 'VisionCut',
      description,
      callback: (result) => {
        if (result.error) {
          alert("❌ Payment failed: " + result.error.message);
        } else {
          alert("✅ Payment successful! Token: " + result.id);
          // You can send result.id to your backend for processing
        }
      },
    });
  };

  return (
    <button
      onClick={handlePay}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
    >
      Buy for R{amount / 100}
    </button>
  );
}
