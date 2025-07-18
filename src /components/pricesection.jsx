import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>💳 Pricing Options (USD)</h2>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Pack Name</th>
            <th>Price</th>
            <th>What You Get</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Starter Pack</td>
            <td>$4.99</td>
            <td>3 genres, basic previews, dark mode</td>
          </tr>
          <tr>
            <td>Pro Pack</td>
            <td>$14.99</td>
            <td>All genres, HD previews, mood filters, avatars</td>
          </tr>
          <tr>
            <td>Director’s Cut</td>
            <td>$29.99</td>
            <td>Everything in Pro + exclusive effects, early access, branding tools</td>
          </tr>
        </tbody>
      </table>
      <p className="secure-note">
        Payments are safe and secure. You can upgrade anytime.
      </p>
    </section>
  );
};

export default PricingSection;
