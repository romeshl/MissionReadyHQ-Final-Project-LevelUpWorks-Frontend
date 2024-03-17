import Style from "./HomeBody.module.css";

export default function HomeBody() {
    function text() {
        alert("ok");
    }
    return (
    <>
      <div className={Style.bodySection1Div}>
        <div className={Style.bodySection1DivText}>
          <p className={Style.bodySection1P}>
            Prepare young minds for a better{" "}
            <span className={Style.bodySection1Span}>future.</span>
          </p>
          <p className={Style.bodySection1P2}>
            Let us help you advance students in Digital Technologies and other
            learning areas with our project-based learning programme.
          </p>
          <div className={Style.bodySection1ButtonsDiv}>
            <button className={Style.bodySection1ButtonLearnMore}>
              LEARN MORE
            </button>
            <div className={Style.bodySection1SignupButtonDiv}>
              <button className={Style.bodySection1ButtonSignup} onClick={()=>alert("Ok")}>
                SIGN UP
              </button>
              *Basic subscription includes the first 15 projects free
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
