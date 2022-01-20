import FaqItem from "./FaqItem";

function Faq({ faqList, children }) {
  return (
    <div className="faq">
      {faqList.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
}

Faq.defaultProps = {
  faqList: [],
};

export default Faq;
