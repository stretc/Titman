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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11825.368945857743!2d-95.2488582!3d38.2868194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b8bb60f2d52623%3A0x135fc5e3f2c4585a!2s408%20N%20Maple%20St%2C%20Garnett%2C%20KS%2066032!5e1!3m2!1sen!2sus!4v1748813326914!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "5px solid #dedede", borderRadius: "15px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
