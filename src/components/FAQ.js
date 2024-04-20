import { useState } from 'react';

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="acc-panel">
      
      <div className="acc-title">
        <button className="buttons acc-button" onClick={onShow}>
          {isActive ? 'Hide' : 'Show'}
        </button>
        <h3>{title}</h3>
      </div>
      {isActive && (
        <div className='acc-text'>{children}</div>
      )}
    </section>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='faq-container'>
      <h2>FAQ - Frequently Asked Questions</h2>
      <Panel
        title="How do I track my order?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
      >
        Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number on our website under the "Track My Order" section or directly on the courier's website to see real-time updates on your package's location.
      </Panel>
      <Panel
        title="Can I return or exchange an item?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
      >
        Yes, we offer a 30-day return policy for items that are in their original condition (unopened and unused). To initiate a return or exchange, please visit the "Returns & Exchanges" section on our website and follow the instructions provided.
      </Panel>
      <Panel
        title="What payment methods do you accept?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? null : 2)}
      >
        We accept a variety of payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and sometimes local payment options depending on your location. All payments are securely processed for your safety.
      </Panel>
      <Panel
        title="How can I change or cancel my order?"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(activeIndex === 3 ? null : 3)}
      >
        To change or cancel your order, please contact our customer service team as soon as possible. We aim to process orders quickly, so it's important to reach out before your order is dispatched. Once an order is in the shipping process, it cannot be canceled but can be returned once received.
      </Panel>
      <Panel
        title="Are there any shipping fees?"
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(activeIndex === 4 ? null : 4)}
      >
        We offer free standard shipping on orders over a certain amount, which is specified on our website. For orders below this amount, a standard shipping fee applies. Expedited shipping options are available at an additional cost. Shipping fees and delivery times vary depending on your location and the shipping method selected.
      </Panel>
    </div>
  );
}


export default FAQ;
