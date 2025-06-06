import "./styles/Ending.css";

export const Ending = () => {
  return (
    <div className="ending-container flex gap-20">
      <div className="text-[#02133c]">
        Call us at{" "}
        <a
          className="text-[#750000] font-[600] underline"
          href="tel:+16203630432"
        >
          +1 (620) 363-0432
        </a>{" "}
        or visit us at our shop shown below.
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.599102753244!2d-95.25143848756592!3d38.28681937174341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b8bb797cbfe147%3A0x1b2cd847c33c6d64!2sTitman%20Tire%20%26%20Lube!5e1!3m2!1sen!2sus!4v1749242080056!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "5px solid #dedede", borderRadius: "15px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
